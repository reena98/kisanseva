using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using System.Data;
using System.Data.SqlClient;

namespace trial
{
    public partial class Confirm : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");

        protected void Page_Load(object sender, EventArgs e)
        {
            Panel1.Visible = true;
            if (!IsPostBack)
                {
                    if (Session["farmuser"] == null)
                    {
                        Response.Redirect("farmlog.aspx");
                    }
                    else
                    {
                        //Label3.Text = "Hello " + Session["username"].ToString();
                        //LinkButton5.Visible = true;
                        //LinkButton6.Visible = false;

                    }

                    DataTable dt = new DataTable();
                    DataRow dr;
                dt.Columns.Add("sno");
                dt.Columns.Add("productid");
                dt.Columns.Add("Name");
                dt.Columns.Add("quantity");
                dt.Columns.Add("Price");
                dt.Columns.Add("totalcost");
                dt.Columns.Add("Image");

                if (Request.QueryString["id"] != null)
                    {
                        if (Session["buytools"] == null)
                        {


                            GetGridData();
                            Response.Redirect("cart.aspx");

                        }
                        else
                        {
                            GetGridData();
                            Response.Redirect("cart.aspx");

                        }
                    }
                    else
                    {
                        GetGridData();
                        lblorderid.Text = DateTime.Now.ToShortDateString();
                        findorderid();


                    }
                    //  Label2.Text = GridView2.Rows.Count.ToString();

                }
            }
        public int grandtotal()
        {
            DataTable dt = new DataTable();
            dt = (DataTable)Session["buytools"];
            int nrow = dt.Rows.Count;
            int i = 0;
            int gtotal = 0;
            while (i < nrow)
            {
                gtotal = gtotal + Convert.ToInt32(dt.Rows[i]["totalcost"].ToString());

                i = i + 1;
            }
            return gtotal;
        }
        public void GetGridData()
        {
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");
            try
            {




                if (scon.State == ConnectionState.Open)
                    scon.Close();

                SqlCommand cmd = new SqlCommand("Tools_orderDetails", scon);
                cmd.Parameters.AddWithValue("@UserName", Session["farmuser"]);
              //  cmd.Parameters.AddWithValue("@DateTime", Session["CheckOutDate1"]);
                cmd.Parameters.Add(new SqlParameter("@DateTime", Session["CheckOutDate1"]));
                cmd.Parameters["@DateTime"].Value = DateTime.Now; // Provide your value here
                SqlDataAdapter Adapter = new SqlDataAdapter(cmd);
                Adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                //SqlParameter[] bojpar = new SqlParameter[]{
                //        new SqlParameter("@UserName","ree")
                //        };


                DataSet ds = new DataSet();

                Adapter.Fill(ds, "ProductCheckOut");
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {

                    GridView2.DataSource = ds.Tables[0];
                    //(GridView1.FooterRow.FindControl("lblGrandTotal") as Label).Text = ds.Tables[1].Rows[0][0].ToString();




                    GridView2.DataBind();
                    Label lblg = GridView2.FooterRow.FindControl("lblGrandTotal") as Label;
                    lblg.Text = ds.Tables[1].Rows[0][0].ToString();
                    GridView2.Visible = true;
                }
                else
                {
                    GridView2.Visible = false;
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                if (scon.State == ConnectionState.Open)
                    scon.Close();
            }
        }
        public void findorderid()
        {

            String pass = "abcdefghijklmnopqrstuvwxyz123456789";
            Random r = new Random();
            char[] mypass = new char[5];
            for (int i = 0; i < 5; i++)
            {
                mypass[i] = pass[(int)(35 * r.NextDouble())];

            }
            String orderid;
            orderid = DateTime.Now.Hour.ToString() + DateTime.Now.Minute.ToString() + DateTime.Now.Second.ToString() + DateTime.Now.Day.ToString() + DateTime.Now.Month.ToString() + DateTime.Now.Year.ToString() + new string(mypass);

            lblorderid.Text = orderid;


        }

        protected void GridView2_RowCommand(object sender, GridViewCommandEventArgs e)
        {

        }

        protected void GridView2_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            exportpdf();
        }

        private void exportpdf()
        {
            Response.ContentType = "application/pdf";
            Response.AddHeader("content-disposition", "attachment;filename=OrderInvoice.pdf");
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            StringWriter sw = new StringWriter();
            HtmlTextWriter hw = new HtmlTextWriter(sw);
            Panel1.RenderControl(hw);
            StringReader sr = new StringReader(sw.ToString());
            Document pdfDoc = new Document(PageSize.A4, 10f, 10f, 100f, 0f);
            HTMLWorker htmlparser = new HTMLWorker(pdfDoc);
            PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
            pdfDoc.Open();
            htmlparser.Parse(sr);
            pdfDoc.Close();
            Response.Write(pdfDoc);
            Response.End();
        }
    }
}
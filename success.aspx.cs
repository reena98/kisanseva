using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using iTextSharp.text;
using System.IO;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
namespace trial
{

    public partial class success : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");

        protected void Page_Load(object sender, EventArgs e)
        {
            //Label1.Text = Request.QueryString["orderid"];

            //Label3.Text = DateTime.Now.Hour.ToString() + DateTime.Now.Minute.ToString() + DateTime.Now.Second.ToString() + DateTime.Now.Day.ToString() + DateTime.Now.Month.ToString() + DateTime.Now.Year.ToString() ;

            //findaddress(Label2.Text);
            //showgrid(Label2.Text);

            if (!IsPostBack)
            {
                if (Session["username"] == null)
                {
                    Response.Redirect("LoginPage.aspx");
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
                dt.Columns.Add("productname");
                dt.Columns.Add("quantity");
                dt.Columns.Add("price");
                dt.Columns.Add("totalcost");
                dt.Columns.Add("productimage");


                if (Request.QueryString["id"] != null)
                {
                    if (Session["Buyitems"] == null)
                    {


                        GetGridData();
                        Response.Redirect("viewcart.aspx");

                    }
                    else
                    {
                        GetGridData();
                        Response.Redirect("viewcart.aspx");

                    }
                }
                else
                {
                    GetGridData();
                    Label3.Text = DateTime.Now.ToShortDateString();
                    findorderid();
                    PopulateFields();

                }
                //  Label2.Text = GridView2.Rows.Count.ToString();

            }

        }

        private void PopulateFields()
        {

            DataTable dt = new DataTable();
            con.Open();
            SqlDataReader myReader = null;
            SqlCommand myCommand = new SqlCommand("select * from Register where ruser='" + Session["username"] + "'", con);


            myReader = myCommand.ExecuteReader();

            while (myReader.Read())
            {
                Label9.Text = (myReader["rname"].ToString());
                Label4.Text = (myReader["raddress"].ToString());
                Label7.Text = (myReader["rcity"].ToString());
                Label8.Text = (myReader["rpin"].ToString());
            }
            con.Close();

        }

        public int grandtotal()
        {
            DataTable dt = new DataTable();
            dt = (DataTable)Session["buyitems"];
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
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");
            try
            {




                if (scon.State == ConnectionState.Open)
                    scon.Close();

                SqlCommand cmd = new SqlCommand("Product_orderDetails", scon);
                cmd.Parameters.AddWithValue("@UserName", Session["username"]);
                cmd.Parameters.AddWithValue("@DateTime", Session["CheckOutDate"]);

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

            Label1.Text = orderid;


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
        private void findorderdate(String Orderid)
        {
            string mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True";
            String myquery = "Select * from OrderDetails where id='" + Orderid + "'";
            SqlConnection con = new SqlConnection(mycon);
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = myquery;
            cmd.Connection = con;
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = cmd;
            DataSet ds = new DataSet();
            da.Fill(ds);
            if (ds.Tables[0].Rows.Count > 0)
            {

                Label3.Text = ds.Tables[0].Rows[0]["dateoforder"].ToString();

            }

            con.Close();
        }
        //}
        //private void findaddress(String Orderid)
        //{
        //    String mycon = "Data Source = (LocalDB)\\MSSQLLocalDB; AttachDbFilename =|DataDirectory|\\Database2.mdf; Integrated Security = True";


        //        String myquery = "Select * from addressdetails where orderid='" + Orderid + "'";
        //    SqlConnection con = new SqlConnection(mycon);
        //    SqlCommand cmd = new SqlCommand();
        //    cmd.CommandText = myquery;
        //    cmd.Connection = con;
        //    SqlDataAdapter da = new SqlDataAdapter();
        //    da.SelectCommand = cmd;
        //    DataSet ds = new DataSet();
        //    da.Fill(ds);
        //    if (ds.Tables[0].Rows.Count > 0)
        //    {

        //        Label4.Text = ds.Tables[0].Rows[0]["address"].ToString();

        //    }

        //    con.Close();
        ////}
        //private void showgrid(String orderid)
        //{
        //    DataTable dt = new DataTable();
        //    DataRow dr;

        //    dt.Columns.Add("sno");
        //    dt.Columns.Add("productid");
        //    dt.Columns.Add("productname");
        //    dt.Columns.Add("quantity");
        //    dt.Columns.Add("price");
        //    dt.Columns.Add("totalcost");
        //    String mycon = "Data Source = (LocalDB)\\MSSQLLocalDB; AttachDbFilename =|DataDirectory|\\Database1.mdf; Integrated Security = True"; 
        //        SqlConnection scon = new SqlConnection(mycon);
        //    String myquery = "select * from orderdetails where orderid='" + orderid + "'";
        //    SqlCommand cmd = new SqlCommand();
        //    cmd.CommandText = myquery;
        //    cmd.Connection = scon;
        //    SqlDataAdapter da = new SqlDataAdapter();
        //    da.SelectCommand = cmd;
        //    DataSet ds = new DataSet();
        //    da.Fill(ds);
        //    int totalrows = ds.Tables[0].Rows.Count;
        //    int i = 0;
        //    int grandtotal = 0;
        //    while (i < totalrows)
        //    {
        //        dr = dt.NewRow();
        //        dr["sno"] = ds.Tables[0].Rows[i]["sno"].ToString();
        //        dr["productid"] = ds.Tables[0].Rows[i]["productid"].ToString();
        //        dr["productname"] = ds.Tables[0].Rows[i]["productname"].ToString();
        //        dr["quantity"] = ds.Tables[0].Rows[i]["quantity"].ToString();
        //        dr["price"] = ds.Tables[0].Rows[i]["price"].ToString();
        //        int price = Convert.ToInt16(ds.Tables[0].Rows[i]["price"].ToString());
        //        int quantity = Convert.ToInt16(ds.Tables[0].Rows[i]["quantity"].ToString());
        //        int totalcost = price * quantity;
        //        dr["totalcost"] = totalcost;
        //        grandtotal = grandtotal + totalcost;
        //        dt.Rows.Add(dr);
        //        i = i + 1;
        //    }
        //    GridView1.DataSource = dt;
        //    GridView1.DataBind();

        //    Label6.Text = grandtotal.ToString();
        //}
        public override void VerifyRenderingInServerForm(Control control)
        {
            /* Verifies that the control is rendered */
        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void RadioButton1_CheckedChanged(object sender, EventArgs e)
        {

        }

        protected void Button2_Click(object sender, EventArgs e)
        {
           
        }

        protected void GridView2_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {

        }

        protected void GridView2_RowCommand(object sender, GridViewCommandEventArgs e)
        {

        }

        protected void Button2_Click1(object sender, EventArgs e)
        {

        }
    }
}
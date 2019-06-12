using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Data;
using System.Data.SqlClient;
namespace trial
{
    public partial class farmerorder : System.Web.UI.Page
    {

        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");

        protected void Page_Load(object sender, EventArgs e)
        {
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
            //SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");
            //try
            //{




            //    if (scon.State == ConnectionState.Open)
            //        scon.Close();

            //    SqlCommand cmd = new SqlCommand("Get_tools_CheckOuts", scon);
            //    cmd.Parameters.AddWithValue("@UserName", Session["farmuser"]);

            //    SqlDataAdapter Adapter = new SqlDataAdapter(cmd);
            //    Adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
            //    SqlParameter[] bojpar = new SqlParameter[]{
            //            new SqlParameter("@UserName","ree")
            //            };


            //    DataSet ds = new DataSet();

            //    Adapter.Fill(ds, "ProductCheckOut");
            //    if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            //    {

            //        GridView2.DataSource = ds.Tables[0];
            //        (GridView1.FooterRow.FindControl("lblGrandTotal") as Label).Text = ds.Tables[1].Rows[0][0].ToString();




            //        GridView2.DataBind();
            //        Label lblg = GridView2.FooterRow.FindControl("lblGrandTotal") as Label;
            //        lblg.Text = ds.Tables[1].Rows[0][0].ToString();
            //        GridView2.Visible = true;
            //    }
            //    else
            //    {
            //        GridView2.Visible = false;
            //    }
            //}
            //catch (Exception)
            //{

            //    throw;
            //}
            //finally
            //{
            //    if (scon.State == ConnectionState.Open)
            //        scon.Close();
            //}
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            String mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True";

            String updatedata = "delete from Orders where username='" + Session["farmuser"] + "'";
            SqlConnection con = new SqlConnection(mycon);
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = updatedata;
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            GridView2.Visible = false;
        }

        protected void GridView2_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}
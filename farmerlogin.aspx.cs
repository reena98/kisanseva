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
    public partial class farmerlogin : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");

        SqlDataAdapter da = new SqlDataAdapter();

        DataSet ds = new DataSet();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (con.State == ConnectionState.Closed)
            {
                con.Open();
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            if (TextBox3.Text != "" && TextBox4.Text != "")
            {


                da = new SqlDataAdapter("select count(*) from Farmer where fuser='" + TextBox3.Text + "' and fpass='" + TextBox4.Text + "' ", con);
                int n = Convert.ToInt32(da.SelectCommand.ExecuteScalar());
                String uname;
                String pass;
                if (n == 1)
                {

                    da = new SqlDataAdapter("select fuser from Farmer where fuser='" + TextBox3.Text + "' and fpass='" + TextBox4.Text + "' ", con);
                    ds = new DataSet();
                    da.Fill(ds, "Farmer");
                    if (ds.Tables["Farmer"].Rows.Count > 0 && ds.Tables.Count > 0)
                    {

                        Session.Add("farmuser", ds.Tables["Farmer"].Rows[0][0].ToString());

                        Session["buy"] = null;
                        //savedCart();


                        Response.Redirect("~/Farmer/mainpage.aspx");
                    }
                }
                else
                {
                    Label1.Text = "Invalid userid and password.";
                }
            }
            else
            {
                Label1.Text = "Invalid userid and password.Its Deactivated by Admin.Try Agian!.";
                TextBox3.Text = "";
            }
        }

        protected void TextBox1_TextChanged(object sender, EventArgs e)
        {

        }


        //private void savedCart()
        //{
        //    DataTable dt1 = new DataTable();
        //    DataRow dr1;
        //    dt1.Columns.Add("id");
        //    dt1.Columns.Add("productid");
        //    dt1.Columns.Add("Name");
        //    dt1.Columns.Add("quantity");
        //    dt1.Columns.Add("Price");
        //    dt1.Columns.Add("Image");

        //    String mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True";

        //    SqlConnection scon = new SqlConnection(mycon);
        //    String myquery = "select * from Savetocart where username='" + Session["farmuser"].ToString() + "'";
        //    SqlCommand cmd = new SqlCommand();
        //    cmd.CommandText = myquery;
        //    cmd.Connection = scon;
        //    SqlDataAdapter da1 = new SqlDataAdapter();
        //    da1.SelectCommand = cmd;
        //    DataSet ds1 = new DataSet();
        //    da1.Fill(ds1);
        //    if (ds1.Tables[0].Rows.Count > 0)
        //    {
        //        int i = 0;
        //        int counter = ds1.Tables[0].Rows.Count;
        //        while (i < counter)
        //        {
        //            dr1 = dt1.NewRow();
        //            dr1["productid"] = ds1.Tables[0].Rows[i]["productid"].ToString();
        //            dr1["Name"] = ds1.Tables[0].Rows[i]["productname"].ToString();
        //            dr1["Image"] = ds1.Tables[0].Rows[i]["productimage"].ToString();
        //            dr1["quantity"] = "1";
        //            dr1["Price"] = ds1.Tables[0].Rows[i]["Price"].ToString();
        //            int price1 = Convert.ToInt16(ds1.Tables[0].Rows[i]["Price"].ToString());
        //            int quantity1 = Convert.ToInt16(ds1.Tables[0].Rows[i]["quantity"].ToString());
        //            int totalprice1 = price1 * quantity1;
        //            dr1["totalcost"] = totalprice1;
        //            dt1.Rows.Add(dr1);
        //            i = i + 1;
        //        }

        //    }
        //    else
        //    {
        //        Session["buy"] = null;
        //    }
        //    Session["buy"] = dt1;
        //}
    }
}
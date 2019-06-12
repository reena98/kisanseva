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
    public partial class farmlog : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");


        SqlDataAdapter da = new SqlDataAdapter();

        DataSet ds = new DataSet();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (con.State == ConnectionState.Closed)
            {
                con.Open();
            }
        }

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
             if (txtusername.Text != "" && txtpwd.Text != "")
            {
                

                        da = new SqlDataAdapter("select count(*) from Farmer where fuser='" + txtusername.Text + "' and fpass='" + txtpwd.Text + "' ", con);
                int n = Convert.ToInt32(da.SelectCommand.ExecuteScalar());
                String uname;
                String pass;
                if (n == 1)
                {

                    da = new SqlDataAdapter("select fuser from Farmer where fuser='" + txtusername.Text + "' and fpass='" + txtpwd.Text + "' ", con);
                    ds = new DataSet();
                    da.Fill(ds, "Farmer");
                    if (ds.Tables["Farmer"].Rows.Count > 0 && ds.Tables.Count > 0)
                    {

                        Session.Add("farmuser", ds.Tables["Farmer"].Rows[0][0].ToString());

                        Session["buytools"] = null;
                        savedCart();
                        

                        Response.Redirect("~/farmershome.aspx");
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
                txtusername.Text = "";
            }

        }
        private void savedCart()
        {
            DataTable dt = new DataTable();
            DataRow dr;
            dt.Columns.Add("sno");
            dt.Columns.Add("productid");
            dt.Columns.Add("Name");
            dt.Columns.Add("quantity");
            dt.Columns.Add("Price");
            dt.Columns.Add("totalcost");

            dt.Columns.Add("Image");

            String mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True";

            SqlConnection scon = new SqlConnection(mycon);
            String myquery = "select * from Savetotoolscart where username='" + Session["farmuser"].ToString() + "'";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = myquery;
            cmd.Connection = scon;
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = cmd;
            DataSet ds = new DataSet();
            da.Fill(ds);
            if (ds.Tables[0].Rows.Count > 0)
            {
                int i = 0;
                int counter = ds.Tables[0].Rows.Count;
                while (i < counter)
                {
                    dr = dt.NewRow();

                    dr["sno"] = i + 1;
                    dr["productid"] = ds.Tables[0].Rows[i]["productid"].ToString();
                    dr["Name"] = ds.Tables[0].Rows[i]["Name"].ToString();
                    dr["Image"] = ds.Tables[0].Rows[i]["Image"].ToString();
                    dr["quantity"] = "1";
                    dr["Price"] = ds.Tables[0].Rows[i]["Price"].ToString();
                    int price1 = Convert.ToInt16(ds.Tables[0].Rows[i]["Price"].ToString());
                    int quantity1 = Convert.ToInt16(ds.Tables[0].Rows[i]["quantity"].ToString());
                    int totalprice1 = price1 * quantity1;
                    dr["totalcost"] = totalprice1;
                    dt.Rows.Add(dr);
                    i = i + 1;
                }

            }
            else
            {
                Session["buytools"] = null;
            }
            Session["buytools"] = dt;
        }
    }
}
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
    public partial class Login : System.Web.UI.Page
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
           

            if (TextBox1.Text != "" && TextBox2.Text != "")
                {
                    da = new SqlDataAdapter("select count(*) from Register where ruser='" + TextBox1.Text + "' and rpass='" + TextBox2.Text + "' " , con);
                    int n = Convert.ToInt32(da.SelectCommand.ExecuteScalar());
                    String uname;
                    String pass;
                    if (n == 1)
                    {
                        
                        da = new SqlDataAdapter("select ruser from Register where ruser='" + TextBox1.Text + "' and rpass='" + TextBox2.Text + "' ", con);
                        ds = new DataSet();
                        da.Fill(ds, "Register");
                        if (ds.Tables["Register"].Rows.Count > 0 && ds.Tables.Count > 0)
                        {
                        
                        Session.Add("username", ds.Tables["Register"].Rows[0][0].ToString());

                        Session["buyitems"] = null;
                            fillsavedCart();
                            Response.Redirect("Index.aspx");
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
                    TextBox1.Text = "";
                }


            
        }
        private void fillsavedCart()
        {
            DataTable dt = new DataTable();
            DataRow dr;
            dt.Columns.Add("sno");
            dt.Columns.Add("productid");
            dt.Columns.Add("productname");
            dt.Columns.Add("quantity");
            dt.Columns.Add("price");
            dt.Columns.Add("totalcost");
            dt.Columns.Add("productimage");

            String mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True";

            SqlConnection scon = new SqlConnection(mycon);
            String myquery = "select * from SavedCartDetail where username='" + Session["username"].ToString() + "'";
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
                    dr["productname"] = ds.Tables[0].Rows[i]["productname"].ToString();
                    dr["productimage"] = ds.Tables[0].Rows[i]["productimage"].ToString();
                    dr["quantity"] = "1";
                    dr["price"] = ds.Tables[0].Rows[i]["price"].ToString();
                    int price1 = Convert.ToInt16(ds.Tables[0].Rows[i]["price"].ToString());
                    int quantity1 = Convert.ToInt16(ds.Tables[0].Rows[i]["quantity"].ToString());
                    int totalprice1 = price1 * quantity1;
                    dr["totalcost"] = totalprice1;
                    dt.Rows.Add(dr);
                    i = i + 1;
                }

            }
            else
            {
                Session["buyitems"] = null;
            }
            Session["buyitems"] = dt;
        }

        protected void Button1_Command(object sender, CommandEventArgs e)
        {

        }

        protected void TextBox2_TextChanged(object sender, EventArgs e)
        {

        }

        protected void TextBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
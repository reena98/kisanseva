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
    public partial class WebForm3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");
        SqlCommand com = new SqlCommand();

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            Boolean useravailable;
            useravailable = check(TextBox10.Text);
            if (useravailable)
            {
              
                con.Open(); //opening connection
                string ins = "insert into Register(rname,ruser,remail,rpass,rcontact,raddress)values('" + TextBox1.Text + "','" + TextBox10.Text + "','" + TextBox9.Text + "','" + TextBox4.Text + "','"+ TextBox8.Text + "','" + TextBox7.Text + "')";
                com.CommandText = ins;
                com.Connection = con;
                com.ExecuteNonQuery();  //executing query
                con.Close(); //closing connection
                Label1.Text = "Registered Successfully..";

            }
            else
            {
                Label1.Text = "username not available";
            }
        }
        public Boolean check(string username)
        {
            Boolean userstatus;
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");
           
            con.Open();
            string myquery = "select count(*) from Register where ruser='" + TextBox10.Text + "' ";

            SqlCommand com = new SqlCommand();
            com.CommandText = myquery;
            com.Connection = con;
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = com;
            DataSet ds = new DataSet();
            da.Fill(ds);
            if (ds.Tables[0].Rows.Count > 0)
            {
                userstatus = false;
            }
            else
            {
                userstatus = true;
            }
            con.Close();
            return userstatus;

        }

    }
    }

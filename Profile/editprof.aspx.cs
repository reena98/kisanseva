using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
namespace project
{
    public partial class editprof : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");

        SqlCommand com;

        protected void Page_Load(object sender, EventArgs e)
        {
            getdata();
        }
        public void getdata()
        {
            string str;
            con.Open();
            str = "select * from Register where ruser='" + Session["username"].ToString()+"' ";
            com = new SqlCommand(str, con);
            SqlDataReader reader = com.ExecuteReader();
            if(reader.Read())
            {

                TextBox1.Text = reader["rname"].ToString();
                TextBox3.Text = reader["remail"].ToString();
                TextBox5.Text = reader["rcontact"].ToString();
            }
            reader.Close();
            con.Close();
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            try
            {
                con.Open(); //opening connection
                string ins = "UPDATE  Register SET rname='" + TextBox1.Text + "',remail='" + TextBox3.Text + "',rcontact='" + TextBox5.Text + "' WHERE ruser='" + Session["username"].ToString()+"' ";

                com.CommandText = ins;
                com.Connection = con;
                com.ExecuteNonQuery();  //executing query
                con.Close(); //closing connection
                Label1.Text = "updated Successfully..";
               
                con.Close();

            }
            catch (Exception ex)
            {
                Label1.Text = ex.Message.ToString();
            }
        }
    }
}
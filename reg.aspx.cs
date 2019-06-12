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
    public partial class reg : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Boolean useravail;
            useravail = checkusername(TextBox6.Text);
                if(useravail)
            {
                if (TextBox7.Text == TextBox8.Text)
                {
                    SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");
                    string ins = "insert into Register(rname,remail,raddress,rcontact,ruser,rpass)values('" + TextBox1.Text + "','" + TextBox2.Text + "','" + TextBox3.Text + "','" + TextBox5.Text + "','" + TextBox6.Text + "','" + TextBox7.Text + "')";
                    con.Open();
                    SqlCommand com = new SqlCommand();
                    com.CommandText = ins;
                    com.Connection = con;
                    com.ExecuteNonQuery();


                    Label1.Text = "signup successfull";


                    con.Close();
                    TextBox1.Text = "";
                    TextBox2.Text = "";
                    TextBox3.Text = "";
                    TextBox5.Text = "";
                    TextBox6.Text = "";
                    TextBox7.Text = "";

                }
                else
                {
                    Label3.Text = "Password and confirm password do not match";

                }
            }
            else {
                Label2.Text = "username not available";
            }
            }

        public Boolean checkusername(string username)
        {
            Boolean userstatus;
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");
            string myquery = "select * from Register where ruser='" + TextBox6.Text + "' ";

                con.Open();
            SqlCommand com = new SqlCommand();
            com.CommandText = myquery;
            com.Connection = con;
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = com;
            DataSet ds = new DataSet();
            da.Fill(ds);
            if(ds.Tables[0].Rows.Count>0)
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
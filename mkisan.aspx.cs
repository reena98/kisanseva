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
    public partial class mkisan : System.Web.UI.Page
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
                    // Label9.Text = "Hello " + Session["username"].ToString();


                }

            }
        }

    

        protected void LinkButton1_Click1(object sender, EventArgs e)
        {

        }

        protected void LinkButton2_Click1(object sender, EventArgs e)
        {

        }

        protected void TextBox1_TextChanged(object sender, EventArgs e)
        {

        }

      
        protected void Button1_Click1(object sender, EventArgs e)
        {
            
            //string ins = "insert into schemes(Regschemes,Number,username) values(" + Label2.Text + ",'" + TextBox1.Text + "','" + Session["farmuser"] + "')";

            ////con.Open();
            //SqlCommand com = new SqlCommand();
            //com.CommandText = ins;
            //com.Connection = con;
            //com.ExecuteNonQuery();


            //Label2.Text = "You have registered for sms schemes ";
          
            //TextBox1.Text = "";

        }
    }
}
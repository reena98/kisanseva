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
    public partial class profile : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");
        SqlCommand com = new SqlCommand();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                PopulateFields();

            }
        }
        public void PopulateFields()
        {

            DataTable dt = new DataTable();
            con.Open();
            SqlDataReader myReader = null;
            SqlCommand myCommand = new SqlCommand("select * from Farmer where fuser='" + Session["farmuser"] + "'", con);


            myReader = myCommand.ExecuteReader();

            while (myReader.Read())
            {
                tname.Text = (myReader["fname"].ToString());
                taddress.Text = (myReader["faddress"].ToString());
                tcontact.Text = (myReader["fphone"].ToString());

            }
            con.Close();
        }//end using

        protected void btnsave_Click(object sender, EventArgs e)
        {

            try
            {
                con.Open(); //opening connection
                SqlCommand com = con.CreateCommand();
                com.CommandType = CommandType.Text;


                com.CommandText = "update Farmer set fname='" + tname.Text + "',fphone='" + tcontact.Text + "',faddress='" + taddress.Text + "' where fuser='" + Session["farmuser"] + "' ";
                com.ExecuteNonQuery();  //executing query
                con.Close();
                Label1.Text = "Updated successfully";

            }
            catch (Exception ex)
            {
                Label1.Text = ex.Message.ToString();
            }
        

    }

        protected void btndel_Click(object sender, EventArgs e)
        {
            try
            {
                con.Open(); //opening connection
                SqlCommand com = con.CreateCommand();
                com.CommandType = CommandType.Text;


                com.CommandText = "delete from Farmer where fuser='" + Session["farmuser"] + "' ";
                com.ExecuteNonQuery();  //executing query
                con.Close();
                Label1.Text = "Deleted successfully";
                Session.Abandon();
                Response.Redirect("Login.aspx");

            }
            catch (Exception ex)
            {
                Label1.Text = ex.Message.ToString();
            }
        }
    }
}
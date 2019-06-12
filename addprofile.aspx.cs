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
    public partial class addprofile : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");
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
                SqlCommand myCommand = new SqlCommand("select * from Register where ruser='" + Session["username"] + "'", con);


                myReader = myCommand.ExecuteReader();

                while (myReader.Read())
                {
                    tname.Text = (myReader["rname"].ToString());
                    temail.Text = (myReader["remail"].ToString());
                    taddress.Text = (myReader["raddress"].ToString());
                    tcontact.Text = (myReader["rcontact"].ToString());
                  
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


            com.CommandText = "update Register set rname='" + tname.Text + "',remail='" + temail.Text + "',rcontact='" + tcontact.Text + "',raddress='" + taddress.Text + "' where ruser='" + Session["username"] + "' ";
            com.ExecuteNonQuery();  //executing query
            con.Close();
                Label1.Text = "Updated successfully";
        
        }
              catch (Exception ex)
              {
                  Label1.Text = ex.Message.ToString();
              }
}

        protected void btndelete_Click(object sender, EventArgs e)
        {
            try { 
            con.Open(); //opening connection
            SqlCommand com = con.CreateCommand();
            com.CommandType = CommandType.Text;


            com.CommandText = "delete from Register where ruser='" + Session["username"] + "' ";
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

        //protected void DetailsView1_ItemUpdated(object sender, DetailsViewUpdatedEventArgs e)
        //{

        //    Label2.Text = "Updated Successfully..";

        //}

        //protected void DetailsView1_PageIndexChanged(object sender, EventArgs e)
        //{
        //    Label2.Text = "Updated Successfully..";

        //}
    }
    }


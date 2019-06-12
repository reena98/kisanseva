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
    public partial class changeadd : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

       
           

        protected void Button1_Click1(object sender, EventArgs e)
        {
            String mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True";

            SqlConnection con = new SqlConnection(mycon);

            con.Open();
            SqlCommand cmd = new SqlCommand();

            cmd = new SqlCommand("update Register set raddress='" + radd.Text + "'where ruser='" + Session["username"] + "'", con);
            cmd.ExecuteNonQuery();
            Label3.Text = " Record Updated successfully";
        
    }
    }
}
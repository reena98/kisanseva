using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
namespace trial.Farmer
{
    public partial class signup : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {

            Boolean useravail;
            useravail = checkusername(TextBox6.Text);
            if (useravail)
            {
               
                    SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");
                    string ins = "insert into Farmer(fname,fage,fgender,faddress,fphone,fuser,fpass,exp)values('" + TextBox1.Text + "','" + TextBox2.Text + "','" + DropDownList1.SelectedItem.Value + "','"+TextBox3.Text+"','" + TextBox5.Text + "','" + TextBox6.Text + "','" + TextBox7.Text + "','" + TextBox9.Text + "')";
                    con.Open();
                    SqlCommand com = new SqlCommand();
                    com.CommandText = ins;
                    com.Connection = con;
                    com.ExecuteNonQuery();




                    Label2.Text = "signup successfull";

                    con.Close();
                    TextBox1.Text = "";
                    TextBox2.Text = "";

                    TextBox5.Text = "";
                    TextBox6.Text = "";
                    TextBox7.Text = "";

                
            }
            else
            {
                Label2.Text = "username not available";
            }
        }
        public Boolean checkusername(string username)
        {
            Boolean userstatus;
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");
            string myquery = "select * from Farmer where fuser='" + TextBox6.Text + "' ";

            con.Open();
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
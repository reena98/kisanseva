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
    public partial class farmerreg : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");
        SqlCommand com = new SqlCommand();

        protected void btnSubmit_Click(object sender, EventArgs e)
        {

            Boolean useravail;
            useravail = checkusername(txtusername.Text);
            if (useravail)
            {

                SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");
                string ins = "insert into Farmer(fname,fage,fgender,faddress,fphone,fuser,fpass,exp)values('" + txtname.Text + "','" + txtage.Text + "','" + ddlgender.SelectedItem.Value + "','" + txtaddress.Text + "','" + txtcontactno.Text + "','" + txtusername.Text + "','" + txtpwd.Text + "','" + txtexp.Text + "')";
                con.Open();
                SqlCommand com = new SqlCommand();
                com.CommandText = ins;
                com.Connection = con;
                com.ExecuteNonQuery();




               lblerror.Text = "signup successfull";

                con.Close();
                txtname.Text = "";
                txtage.Text = "";

                txtaddress.Text = "";
                txtcontactno.Text = "";
                txtexp.Text = "";


            }
            else
            {
                lblerror.Text = "username not available";
            }
        }

        public Boolean checkusername(string username)
        {
            Boolean userstatus;
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");
            string myquery = "select * from Farmer where fuser='" + txtusername.Text + "' ";

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

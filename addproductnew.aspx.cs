using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.IO;
namespace trial
{
    public partial class addproductnew : System.Web.UI.Page
    {
        string a, b;
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");
        SqlConnection con1 = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");

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
                    getproductid();

                }
            }
        }
        protected void Button1_Click(object sender, EventArgs e)
        {


            FileUpload1.SaveAs(Server.MapPath("~/img/") + Path.GetFileName(FileUpload1.FileName));
            string link = "~/img/" + Path.GetFileName(FileUpload1.FileName);
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "insert into productdetail(productid,productname,price,productimage,stockavailable,description,category,farmuser) values(" + Label1.Text + ",'" + TextBox1.Text + "','" + TextBox2.Text + "','" + link + "','" + TextBox3.Text + "','" + TextBox4.Text + "','" + DropDownList1.SelectedItem.ToString() + "','"+Session["farmuser"]+"')";

            cmd.ExecuteNonQuery();

            Label2.Text = "Product Has Been Successfully Saved";
            getproductid();
            TextBox1.Text = "";
            TextBox2.Text = "";
            TextBox3.Text = "";
            TextBox4.Text = "";

        }

        protected void TextBox3_TextChanged(object sender, EventArgs e)
        {

        }

        public void getproductid()
        {
            String mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True";
            SqlConnection scon = new SqlConnection(mycon);
            String myquery = "select productid from productdetail";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = myquery;
            cmd.Connection = scon;
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = cmd;
            DataSet ds = new DataSet();
            da.Fill(ds);
            scon.Close();
            if (ds.Tables[0].Rows.Count < 1)
            {
                Label1.Text = "1";

            }
            else
            {



                String mycon1 = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True";
                SqlConnection scon1 = new SqlConnection(mycon1);
                String myquery1 = "select max(productid) from productdetail";
                SqlCommand cmd1 = new SqlCommand();
                cmd1.CommandText = myquery1;
                cmd1.Connection = scon1;
                SqlDataAdapter da1 = new SqlDataAdapter();
                da1.SelectCommand = cmd1;
                DataSet ds1 = new DataSet();
                da1.Fill(ds1);
                Label1.Text = ds1.Tables[0].Rows[0][0].ToString();
                int a;
                a = Convert.ToInt16(Label1.Text);
                a = a + 1;
                Label1.Text = a.ToString();
                scon1.Close();
            }

        }
    }
}
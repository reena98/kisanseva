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
    public partial class WebForm2 : System.Web.UI.Page
    {
        static string rating;
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
              
                filldatalist();
                if (Request.QueryString["cat"] != null)
                {
                    DataList1.DataSourceID = null;
                    DataList1.DataSource = SqlDataSource4;
                    DataList1.DataBind();
                }
            }
           
            
            DataTable dt = new DataTable();
            dt = (DataTable)Session["Buyitems"];
            if (dt != null)
            {

                Label7.Text = dt.Rows.Count.ToString();
            }
            else
            {
                Label7.Text = "0";
            }
        }
        public void filldatalist()
        {

            string s = "select * from productdetail";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = s;
            cmd.Connection = con;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            da.Fill(ds, "imp");
            DataList1.DataSource = ds;
            DataList1.DataBind();

        }

        protected void DataList1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void DataList1_ItemCommand(object source, DataListCommandEventArgs e)
        {
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");

            try
            {
                if (e.CommandName == "Addtocart")
                {
                    DropDownList dlist = (DropDownList)(e.Item.FindControl("DropDownList1"));

                    int quentity = Convert.ToInt32(dlist.SelectedValue);


                    Label lblProductId = e.Item.FindControl("lblProductId") as Label;

                    Label lblProductName = e.Item.FindControl("lblProductName") as Label;

                    Label lblPrice = e.Item.FindControl("lblPrice") as Label;


                    if (scon.State != ConnectionState.Open)
                    {
                        scon.Open();
                    }

                    SqlCommand cmd = new SqlCommand("Product_Add_SavedCartDetail", scon);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserName", Session["username"]);
                    cmd.Parameters.AddWithValue("@quentity", quentity);
                    cmd.Parameters.AddWithValue("@lblProductId", Convert.ToInt32(lblProductId.Text));
                    cmd.Parameters.AddWithValue("@lblProductName", lblProductName.Text);
                    cmd.Parameters.AddWithValue("@lblPrice", Convert.ToInt32(lblPrice.Text));
                  

                    cmd.ExecuteNonQuery();





                    Response.Redirect("AddtoCart.aspx?id=" + e.CommandArgument.ToString() + "&quantity=" + dlist.SelectedItem.ToString());


                }
                if (e.CommandName == "viewdetails")
                {
                    Response.Redirect("viewdetails.aspx?id=" + e.CommandArgument.ToString());
                }
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                if (scon.State == ConnectionState.Open)
                    scon.Close();
            }
           
        }

        protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
        {

        }

        protected void DataList1_ItemDataBound(object sender, DataListItemEventArgs e)
        {
            Label lb = e.Item.FindControl("Label8") as Label;
            ImageButton btn = e.Item.FindControl("ImageButton1") as ImageButton;
            Label lb1 = e.Item.FindControl("lblProductId") as Label;

            String myquery = "Select * from StockDetail where productid=" + lb1.Text;

            SqlCommand cmd1 = new SqlCommand();
            cmd1.CommandText = myquery;
            cmd1.Connection = con;
            SqlDataAdapter da1 = new SqlDataAdapter();
            da1.SelectCommand = cmd1;
            DataSet ds1 = new DataSet();
            da1.Fill(ds1);
            String stockdata = "";

            if (ds1.Tables[0].Rows.Count > 0)
            {
                stockdata = ds1.Tables[0].Rows[0]["stockavailable"].ToString();

            }
            con.Close();

            if (stockdata == "0")
            {
                lb.Text = "Out of Stock";
                btn.Enabled = false;
                btn.ImageUrl = "../images/th (1).jpg";

            }
            else
            {
                lb.Text = stockdata;
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            DataList1.DataSource = null;
            if (DropDownList2.SelectedItem.Text == "Low to High Price")
            {
                DataList1.DataSource = SqlDataSource2;
                DataList1.DataBind();
            }
            else
            {

                DataList1.DataSource = SqlDataSource1;
                DataList1.DataBind();
            }
        }

        protected void DataList1_UpdateCommand(object source, DataListCommandEventArgs e)
        {

        }

        protected void SqlDataSource2_Selecting(object sender, SqlDataSourceSelectingEventArgs e)
        {

        }

        protected void LinkButton4_Click(object sender, EventArgs e)
        {
          
            DataList1.DataSource = SqlDataSource3;
            DataList1.DataBind();
        }

        protected void LinkButton1_Click(object sender, EventArgs e)
        {
            Response.Redirect("WebForm2.aspx?cat=Dal");
        }

        protected void LinkButton2_Click(object sender, EventArgs e)
        {
            Response.Redirect("WebForm2.aspx?cat=Grains");
        }

        protected void LinkButton3_Click(object sender, EventArgs e)
        {
            Response.Redirect("WebForm2.aspx?cat=Pulses");
        }

        protected void SqlDataSource3_Selecting(object sender, SqlDataSourceSelectingEventArgs e)
        {

        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            if (TextBox1.Text != "")
            {
                DataList1.DataSourceID = null;
                DataList1.DataSource = SqlDataSource5;
                DataList1.DataBind();
            }

        }

        protected void Rating1_Changed(object sender, AjaxControlToolkit.RatingEventArgs e)
        {
            rating = e.Value.ToString();
        }

        protected void Button3_Click(object sender, EventArgs e)
        {

        }

        protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void LinkButton5_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Profile/first.aspx");
        }

        protected void Button2_Click1(object sender, EventArgs e)
        {

        }
    }
}
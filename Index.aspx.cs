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
    public partial class Index : System.Web.UI.Page
    {
        static string rating;
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session["username"] == null)
                {
                    Response.Redirect("LoginPage.aspx");

                }
                else
                {
                   // Label9.Text = "Hello " + Session["username"].ToString();


                }
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

              //  Label7.Text = dt.Rows.Count.ToString();
            }
            else
            {
              //  Label7.Text = "0";
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
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");

            try
            {
                if (e.CommandName == "viewcart")
                {
                    DropDownList dlist = (DropDownList)(e.Item.FindControl("DropDownList1"));

                    int quentity = Convert.ToInt32(dlist.SelectedValue);


                    Label lblProductId = e.Item.FindControl("lblProductId") as Label;

                    Label lblProductName = e.Item.FindControl("lblProductName") as Label;

                    Label lblPrice = e.Item.FindControl("lblPrice") as Label;
                  //  Image lblProductImage = e.Item.FindControl("lblProductImage") as Image;

                 
                   // string link = "~/img/" + Server.MapPath(lblProductImage.ImageUrl);

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
                //    cmd.Parameters.AddWithValue("@lblProductImage", link);

                    cmd.ExecuteNonQuery();





                    Response.Redirect("viewcart.aspx?id=" + e.CommandArgument.ToString() + "&quantity=" + dlist.SelectedItem.ToString());


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

        protected void btnaddcart_Click(object sender, EventArgs e)
        {

        }

        protected void DataList1_ItemDataBound(object sender, DataListItemEventArgs e)
        {
            //Label lb = e.Item.FindControl("Label8") as Label;
            //ImageButton btn = e.Item.FindControl("ImageButton1") as ImageButton;
            //Label lb1 = e.Item.FindControl("lblProductId") as Label;

            //String myquery = "Select * from StockDetail where productid" + lb1.Text;

            //SqlCommand cmd1 = new SqlCommand();
            //cmd1.CommandText = myquery;
            //cmd1.Connection = con;
            //SqlDataAdapter da1 = new SqlDataAdapter();
            //da1.SelectCommand = cmd1;
            //DataSet ds1 = new DataSet();
            //da1.Fill(ds1);
            //String stockdata = "";

            //if (ds1.Tables[0].Rows.Count > 0)
            //{
            //    stockdata = ds1.Tables[0].Rows[0]["stockavailable"].ToString();

            //}
            //con.Close();

            //if (stockdata == "0")
            //{
            //    lb.Text = "Out of Stock";
            //    btn.Enabled = false;
            //    btn.ImageUrl = "../images/th (1).jpg";

            //}
            //else
            //{
            //    lb.Text = stockdata;
            //}
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
           
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
            Response.Redirect("Index.aspx?cat=Dal");
        }

        protected void LinkButton2_Click(object sender, EventArgs e)
        {
            Response.Redirect("Index.aspx?cat=Rice");
        }

        protected void LinkButton3_Click(object sender, EventArgs e)
        {
            Response.Redirect("Index.aspx?cat=Pulses");
        }

        protected void SqlDataSource3_Selecting(object sender, SqlDataSourceSelectingEventArgs e)
        {

        }

        //protected void Button2_Click(object sender, EventArgs e)
        //{
          //  if (TextBox1.Text != "")
           // {
            //    DataList1.DataSourceID = null;
             //   DataList1.DataSource = SqlDataSource5;
             //   DataList1.DataBind();
          //  }

      //  }

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

        protected void btnapply_Click(object sender, EventArgs e)
        {
           // DataList1.DataSourceID = null;
           // if (DropDownList3.SelectedItem.Text =="High to Low Price")
           // {
           //     DataList1.DataSource = SqlDataSource1;
           //     DataList1.DataBind();
           // }
           //if(DropDownList3.SelectedItem.Text=="Low to High Price")
           // {

           //     DataList1.DataSource = SqlDataSource2;
           //     DataList1.DataBind();
           // }
        }

        protected void btnapply_Command(object sender, CommandEventArgs e)
        {

        }

        protected void Button2_Click1(object sender, EventArgs e)
        {
            if (TextBox1.Text != "")
            {
                DataList1.DataSourceID = null;
                DataList1.DataSource = SqlDataSource5;
                DataList1.DataBind();
            }
        }

        protected void btnaddcart_Click1(object sender, EventArgs e)
        {

        }

        protected void TextBox1_TextChanged(object sender, EventArgs e)
        {

        }
      [System.Web.Script.Services.ScriptMethod()]
      [System.Web.Services.WebMethod]
      public static List<string> Searchpro(string prefixText)
        {
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");

            DataTable dt;
            SqlDataAdapter da;
            DataTable result = new DataTable();
            string str="select * from productdetail where KeywordSearch LIKE '"+ prefixText + "%' ";
            da = new SqlDataAdapter(str, con);
            dt = new DataTable();
            da.Fill(dt);
            List<string> Output = new List<string>();
            for (int i = 0; i < dt.Rows.Count; i++)
                Output.Add(dt.Rows[i][0].ToString());
            con.Close();
            return Output;
        }
    }   
}
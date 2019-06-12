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
    public partial class farmshop : System.Web.UI.Page
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
                filldatalist();
                //if (Request.QueryString["cat"] != null)
                //{
                //    DataList1.DataSourceID = null;
                //    DataList1.DataSource = SqlDataSource4;
                //    DataList1.DataBind();
                //}
            }
            DataTable dt = new DataTable();
            dt = (DataTable)Session["buytools"];
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

            string s = "select * from Tools";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = s;
            cmd.Connection = con;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            da.Fill(ds, "imp");
            DataList1.DataSource = ds;
            DataList1.DataBind();

        

    }

        protected void DataList1_ItemCommand(object source, DataListCommandEventArgs e)
        {
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database2.mdf;Integrated Security=True");

            try
            {
                if (e.CommandName == "cart")
                {
                    DropDownList dlist = (DropDownList)(e.Item.FindControl("DropDownList1"));

                    int quantity = Convert.ToInt32(dlist.SelectedValue);


                    Label lblProductId = e.Item.FindControl("lblProductId") as Label;


                    Label lblProductName = e.Item.FindControl("lblProductName") as Label;

                    Label lblPrice = e.Item.FindControl("lblPrice") as Label;
                    //  Image lblProductImage = e.Item.FindControl("lblProductImage") as Image;


                    // string link = "~/img/" + Server.MapPath(lblProductImage.ImageUrl);

                    if (scon.State != ConnectionState.Open)
                    {
                        scon.Open();
                    }


                    SqlCommand cmd = new SqlCommand("Tools_addtocart", scon);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserName", Session["farmuser"]);
                    cmd.Parameters.AddWithValue("@quantity", quantity);
                    cmd.Parameters.AddWithValue("@lblProductId", Convert.ToInt32(lblProductId.Text));

                    cmd.Parameters.AddWithValue("@lblName", lblProductName.Text);
                    cmd.Parameters.AddWithValue("@lblPrice", Convert.ToInt32(lblPrice.Text));
                    //    cmd.Parameters.AddWithValue("@lblProductImage", link);

                    cmd.ExecuteNonQuery();





                    Response.Redirect("cart.aspx?id=" + e.CommandArgument.ToString() + "&quantity=" + dlist.SelectedItem.ToString());


                }
                //if (e.CommandName == "viewdetails")
                //{
                //    Response.Redirect("viewdetails.aspx?id=" + e.CommandArgument.ToString());
                //}
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

        protected void DataList1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void btnaddcart_Click(object sender, EventArgs e)
        {

        }
    }
}
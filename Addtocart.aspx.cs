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
    public partial class Addtocart : System.Web.UI.Page
    {
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
                    Label3.Text = "Hello " + Session["username"].ToString();
                    LinkButton5.Visible = true;
                    LinkButton6.Visible = false;

                }

                DataTable dt = new DataTable();
                DataRow dr;
                dt.Columns.Add("sno");
                dt.Columns.Add("productid");
                dt.Columns.Add("productname");
                dt.Columns.Add("quantity");
                dt.Columns.Add("price");
                dt.Columns.Add("totalcost");
                dt.Columns.Add("productimage");


                if (Request.QueryString["id"] != null)
                {
                    if (Session["Buyitems"] == null)
                    {

                        /**dr = dt.NewRow();
                         SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");
                        String myquery = "select * from SavedCartDetail where productid=" + Request.QueryString["id"];
                        SqlCommand cmd = new SqlCommand();
                        cmd.CommandText = myquery;
                        cmd.Connection = scon;
                        SqlDataAdapter da = new SqlDataAdapter();
                        da.SelectCommand = cmd;
                        DataSet ds = new DataSet();
                        da.Fill(ds);
                        dr["sno"] = 1;
                        dr["productid"] = ds.Tables[0].Rows[0]["productid"].ToString();
                        dr["productname"] = ds.Tables[0].Rows[0]["productname"].ToString();
                        dr["productimage"] = ds.Tables[0].Rows[0]["productimage"].ToString();
                        dr["quantity"] = Request.QueryString["quantity"];
                        dr["price"] = ds.Tables[0].Rows[0]["price"].ToString();
                        int price = Convert.ToInt16(ds.Tables[0].Rows[0]["price"].ToString());
                        int quantity = Convert.ToInt16(Request.QueryString["quantity"].ToString());
                        int totalcost = price * quantity;
                        dr["totalcost"] = totalcost;
                        SavedCartDetail(1, ds.Tables[0].Rows[0]["productid"].ToString(), ds.Tables[0].Rows[0]["productname"].ToString(), ds.Tables[0].Rows[0]["productimage"].ToString(), "1", ds.Tables[0].Rows[0]["price"].ToString(), totalcost.ToString());

                        dt.Rows.Add(dr);
                        GridView1.DataSource = dt;
                        GridView1.DataBind();

                        Session["buyitems"] = dt;
                        GridView1.FooterRow.Cells[5].Text = "Total Amount";
                        GridView1.FooterRow.Cells[6].Text = grandtotal().ToString();
                        Response.Redirect("Addtocart.aspx");
    **/

                        GetGridData();
                        Response.Redirect("Addtocart.aspx");

                    }
                    else
                    {

                        /**                        dt = (DataTable)Session["buyitems"];
                                    int sr;
                                    sr = dt.Rows.Count;

                                    dr = dt.NewRow();
                                    SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");
                                    String myquery = "select * from productdetail where productid=" + Request.QueryString["id"];
                                    SqlCommand cmd = new SqlCommand();
                                    cmd.CommandText = myquery;
                                    cmd.Connection = scon;
                                    SqlDataAdapter da = new SqlDataAdapter();
                                    da.SelectCommand = cmd;
                                    DataSet ds = new DataSet();
                                    da.Fill(ds);
                                    dr["sno"] = sr + 1;
                                    dr["productid"] = ds.Tables[0].Rows[0]["productid"].ToString();
                                    dr["productname"] = ds.Tables[0].Rows[0]["productname"].ToString();
                                    dr["productimage"] = ds.Tables[0].Rows[0]["productimage"].ToString();
                                    dr["quantity"] = Request.QueryString["quantity"];
                                    dr["price"] = ds.Tables[0].Rows[0]["price"].ToString();
                                    int price = Convert.ToInt16(ds.Tables[0].Rows[0]["price"].ToString());
                                    int quantity = Convert.ToInt16(Request.QueryString["quantity"].ToString());
                                    int totalcost = price * quantity;
                                    dr["totalcost"] = totalcost;
                                    SavedCartDetail(1, ds.Tables[0].Rows[0]["productid"].ToString(), ds.Tables[0].Rows[0]["productname"].ToString(), ds.Tables[0].Rows[0]["productimage"].ToString(), "1", ds.Tables[0].Rows[0]["price"].ToString(), totalcost.ToString());
                                    dt.Rows.Add(dr);
                                    GridView1.DataSource = dt;
                                    GridView1.DataBind();

                                    Session["buyitems"] = dt;
                                    GridView1.FooterRow.Cells[5].Text = "Total Amount";
                                    GridView1.FooterRow.Cells[6].Text = grandtotal().ToString();
                                    Response.Redirect("Addtocart.aspx");
                **/

                        GetGridData();
                        Response.Redirect("Addtocart.aspx");

                    }
                }
                else
                {
                    /** dt = (DataTable)Session["buyitems"];
                     GridView1.DataSource = dt;
                     GridView1.DataBind();
                     if (GridView1.Rows.Count > 0)
                     {
                         GridView1.FooterRow.Cells[5].Text = "Total Amount";
                         GridView1.FooterRow.Cells[6].Text = grandtotal().ToString();

                     }
     **/

                    GetGridData();


                }
                Label2.Text = GridView2.Rows.Count.ToString();

            }

        }
        public int grandtotal()
        {
            DataTable dt = new DataTable();
            dt = (DataTable)Session["buyitems"];
            int nrow = dt.Rows.Count;
            int i = 0;
            int gtotal = 0;
            while (i < nrow)
            {
                gtotal = gtotal + Convert.ToInt32(dt.Rows[i]["totalcost"].ToString());

                i = i + 1;
            }
            return gtotal;
        }
        /**
        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            Response.Redirect("EditOrder.aspx?sno=" + GridView1.SelectedRow.Cells[0].Text);
        }
    **/



        protected void Button1_Click(object sender, EventArgs e)
        {
            Response.Redirect("PlaceOrder.aspx");
        }

        protected void LinkButton1_Click(object sender, EventArgs e)
        {
            Session.Abandon();
            Response.Redirect("HomePage.aspx");


        }



        protected void LinkButton5_Click(object sender, EventArgs e)
        {
            Session.Abandon();
            Response.Redirect("HomePage.aspx");

        }
        private void clearsavedcart()
        {
            String mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True";

            String updatedata = "delete from SavedCartDetail where username='" + Session["username"].ToString() + "'";
            SqlConnection con = new SqlConnection(mycon);
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = updatedata;
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            Response.Redirect("HomePage.aspx");
        }
        private void SavedCartDetail(int sno, String productid, String Productname, String productimage, String quantity, String price, String totalprice)
        {
            String query = "insert into SavedCartDetail(sno,productid,productname,productimage,quantity,price,totalcost" +
                ",username) values(" + sno + ",'"
                + productid + "','" + Productname + "','" + productimage + "','" + quantity + "','"
                + price + "','" + totalprice + "','" + Session["username"].ToString() + "')";
            String mycon = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True";
            SqlConnection con = new SqlConnection(mycon);
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = query;
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
        }

        public void GetGridData()
        {
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");
            try
            {




                if (scon.State == ConnectionState.Open)
                    scon.Close();

                SqlCommand cmd = new SqlCommand("Get_Product_CheckOut", scon);
                cmd.Parameters.AddWithValue("@UserName", Session["username"]);

                SqlDataAdapter Adapter = new SqlDataAdapter(cmd);
                Adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                //SqlParameter[] bojpar = new SqlParameter[]{
                //        new SqlParameter("@UserName","ree")
                //        };


                DataSet ds = new DataSet();

                Adapter.Fill(ds, "ProductCheckOut");
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {

                    GridView2.DataSource = ds.Tables[0];
                    //(GridView1.FooterRow.FindControl("lblGrandTotal") as Label).Text = ds.Tables[1].Rows[0][0].ToString();




                    GridView2.DataBind();
                    Label lblg = GridView2.FooterRow.FindControl("lblGrandTotal") as Label;
                    lblg.Text = ds.Tables[1].Rows[0][0].ToString();
                    GridView2.Visible = true;
                }
                else
                {
                    GridView2.Visible = false;
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


        protected void LinkButton6_Click(object sender, EventArgs e)
        {

            Response.Redirect("LoginPage.aspx");
        }


        protected void LinkButton7_Click(object sender, EventArgs e)
        {

        }

        protected void LinkButton8_Click(object sender, EventArgs e)
        {
            Response.Redirect("Myprofile.aspx");
        }

        protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");
            try
            {


                int srno = Convert.ToInt32(e.CommandArgument);
                if (e.CommandName == "Add")
                {
                    if (scon.State != ConnectionState.Open)
                    {
                        scon.Open();
                    }

                    SqlCommand cmd = new SqlCommand("Product_Add_Sub_Delete", scon);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserName", "ree");
                    cmd.Parameters.AddWithValue("@srno", srno);
                    cmd.Parameters.AddWithValue("@ParamType", "Add");

                    cmd.ExecuteNonQuery();

                }
                else if (e.CommandName == "sub")
                {

                    if (scon.State != ConnectionState.Open)
                    {
                        scon.Open();
                    }

                    SqlCommand cmd = new SqlCommand("Product_Add_Sub_Delete", scon);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserName", "ree");
                    cmd.Parameters.AddWithValue("@srno", srno);
                    cmd.Parameters.AddWithValue("@ParamType", "Sub");

                    cmd.ExecuteNonQuery();

                }
                else if (e.CommandName == "Delete")
                {

                    if (scon.State != ConnectionState.Open)
                    {
                        scon.Open();
                    }

                    SqlCommand cmd = new SqlCommand("Product_Add_Sub_Delete", scon);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserName", "ree");
                    cmd.Parameters.AddWithValue("@srno", srno);
                    cmd.Parameters.AddWithValue("@ParamType", "Delete");

                    cmd.ExecuteNonQuery();


                }
                GetGridData();
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

        protected void GridView2_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database1.mdf;Integrated Security=True");
            try
            {


                int srno = Convert.ToInt32(e.CommandArgument);
                if (e.CommandName == "Add")
                {
                    if (scon.State != ConnectionState.Open)
                    {
                        scon.Open();
                    }

                    SqlCommand cmd = new SqlCommand("Product_Add_Sub_Delete", scon);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserName", Session["username"]);
                    cmd.Parameters.AddWithValue("@srno", srno);
                    cmd.Parameters.AddWithValue("@ParamType", "Add");

                    cmd.ExecuteNonQuery();

                }
                else if (e.CommandName == "sub")
                {

                    if (scon.State != ConnectionState.Open)
                    {
                        scon.Open();
                    }

                    SqlCommand cmd = new SqlCommand("Product_Add_Sub_Delete", scon);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserName", Session["username"]);
                    cmd.Parameters.AddWithValue("@srno", srno);
                    cmd.Parameters.AddWithValue("@ParamType", "Sub");

                    cmd.ExecuteNonQuery();

                }
                else if (e.CommandName == "Delete")
                {

                    if (scon.State != ConnectionState.Open)
                    {
                        scon.Open();
                    }

                    SqlCommand cmd = new SqlCommand("Product_Add_Sub_Delete", scon);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@UserName", Session["username"]);
                    cmd.Parameters.AddWithValue("@srno", srno);
                    cmd.Parameters.AddWithValue("@ParamType", "Delete");

                    cmd.ExecuteNonQuery();


                }
                GetGridData();
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

        protected void GridView2_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {

        }
    }
}

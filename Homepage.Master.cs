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
    public partial class Homepage : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
                if (Session["username"] == null)
                {
                    Response.Redirect("Login.aspx");
                }
                else
                {
                    //Label3.Text = "Hello " + Session["username"].ToString();
                    //LinkButton5.Visible = true;
                    //LinkButton6.Visible = false;

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
                        Response.Redirect("viewcart.aspx");

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
                        Response.Redirect("viewcart.aspx");

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
                Label1.Text = GridView2.Rows.Count.ToString();

            }
        }
        public int grandtotal()
        {
            DataTable dt = new DataTable();
            dt = (DataTable)Session["buy"];
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

        public void GetGridData()
        {
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");
            try
            {
                if (scon.State == ConnectionState.Open)
                    scon.Close();

                SqlCommand cmd = new SqlCommand("Get_Product_CheckOuts", scon);
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

        protected void GridView2_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            SqlConnection scon = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");
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

        protected void GridView2_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {

        }
    }
}
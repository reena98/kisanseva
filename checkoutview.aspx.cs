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
    public partial class checkoutview : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");

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


                        GetGridData();
                        Response.Redirect("viewcart.aspx");

                    }
                    else
                    {
                        GetGridData();
                        Response.Redirect("viewcart.aspx");

                    }
                }
                else
                {
                    GetGridData();


                }
                Label2.Text = GridView2.Rows.Count.ToString();
                PopulateFields();
            }
        }
            private void PopulateFields()
            {

                DataTable dt = new DataTable();
                con.Open();
                SqlDataReader myReader = null;
                SqlCommand myCommand = new SqlCommand("select * from Register where ruser='" + Session["username"] + "'", con);


                myReader = myCommand.ExecuteReader();

                while (myReader.Read())
                {
                txtnme.Text = (myReader["rname"].ToString());
                    lbladdress.Text = (myReader["raddress"].ToString());
                    lblcity.Text = (myReader["rcity"].ToString());
                    lblpin.Text = (myReader["rpin"].ToString());
                }
                con.Close();

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
        protected void GridView2_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {

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

        protected void Button2_Click(object sender, EventArgs e)
        {

        }

        protected void btnhd_Click(object sender, EventArgs e)
        {
            //SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\Database3.mdf;Integrated Security=True");
            //SqlCommand com = new SqlCommand();
            //try
            //{
            //    con.Open(); //opening connection
            //    string ins = "insert into Register(rname,ruser,remail,rpass,rcontact,raddress)values('" + TextBox1.Text + "','" + TextBox10.Text + "','" + TextBox9.Text + "','" + TextBox4.Text + "','" + TextBox8.Text + "','" + TextBox7.Text + "')";
            //    com.CommandText = ins;
            //    com.Connection = con;
            //    com.ExecuteNonQuery();  //executing query
            //    con.Close(); //closing connection
            //    Label1.Text = "Registered Successfully..";

            //}
            //catch (Exception ex)
            //{
            //    Label1.Text = ex.Message.ToString();
            //}

        }



        protected void Button1_Click1(object sender, EventArgs e)
        {
            try
            {
                con.Open(); //opening connection
                SqlCommand com = con.CreateCommand();
                com.CommandType = CommandType.Text;


                com.CommandText = "update Register set raddress='" + lbladdress.Text + "',rcity='" + lblcity.Text + "',rpin='" + lblpin.Text + "' where ruser='" + Session["username"] + "' ";
                com.ExecuteNonQuery();  //executing query



                SqlCommand cmd = new SqlCommand("Product_PlaceOrder", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@UserName", Session["username"]);  
                SqlDataAdapter Adapter = new SqlDataAdapter(cmd);
                Adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                //SqlParameter[] bojpar = new SqlParameter[]{
                //        new SqlParameter("@UserName","ree")
                //        };


                DataSet ds = new DataSet();

                Adapter.Fill(ds, "datetime");

                if (ds !=null && ds.Tables.Count>0 && ds.Tables[0].Rows.Count>0)
                {
                    Session["CheckOutDate"] = ds.Tables[0].Rows[0][0].ToString();
                }


                con.Close();


                
            }
            catch (Exception)
            {               
            }
            finally
            {
                if(con.State== ConnectionState.Open)                
                    con.Close();
                
            }
           
            Response.Redirect("success.aspx");
                

        }

        protected void lblbtn_Click(object sender, EventArgs e)
        {
            con.Open(); //opening connection
            SqlCommand com = con.CreateCommand();
            com.CommandType = CommandType.Text;


            com.CommandText = "insert into Reviews(reviews,username,name)values('"+ txtreview.Text+ "','"+Session["username"]+"','"+txtnme.Text+"') ";
          
            com.ExecuteNonQuery();  //executing query
            con.Close();
            lblrev.Text = "Thank you for review";

        }
    }
    }

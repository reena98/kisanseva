using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace trial
{
    public partial class regpest : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            if (TextBox1.Text != "")
            {
                GridView1.DataSourceID = null;
                GridView1.DataSource = SqlDataSource1;
                GridView1.DataBind();
            }
            else
            {
                GridView1.Visible = false;
            }
        }
    }
}
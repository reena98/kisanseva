<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Addtocart.aspx.cs" Inherits="trial.Addtocart" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
       <link href="Design/css/plugins.min.css" rel="stylesheet" />
    <link href="Design/css/preload.min.css" rel="stylesheet" />
    <link href="Design/css/style.light-blue-500.min.css" rel="stylesheet" />

    <title></title>
    <style type="text/css">
        .auto-style1 {
            margin-right: 2px;
        }
        .auto-style2 {
            background-color: #CC0099;
        }
       
   
        body {
	margin: 0;
	background: url(../webimages/pexels-photo-811109.jpeg);
	background-size: cover;
}

.nav {
	width: 100%;
	background: #9b8843;
	height: 70px;
	opacity: 0.9;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
	position: absolute;
}

li {
	float: left;
	margin-top: 30px;
}

a {
	width: 150px;
	color: black;
	display: block;
	text-decoration: none;
	font-size: 20px;
	text-align: center;
	border-radius: 10px;
	font-family: Century Gothic;
	font-weight: bold;
}

	a:hover {
		background: white;
		transition: 0.6s;
	}
    .container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #9b8843;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  margin-top:226px;
}

.container .btn:hover {
  background-color: black;
}
h1{
    font:bold;
    color:white;
    padding:20px;
}
        .auto-style1 {
            left: 0px;
            top: 221px;
        }
        
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
          <div > 
                        <h1 class="animated fadeInRight animation-delay-6" style="text-align: left">
                            Kisan
                            <span>Seva</span>&nbsp;&nbsp; Welcome<asp:Label ID="Label3" runat="server"></asp:Label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Login:<asp:LinkButton ID="LinkButton6" runat="server" Height="34px" Width="160px" OnClick="LinkButton6_Click">Retailer</asp:LinkButton>
&nbsp;&nbsp;&nbsp;&nbsp; Register:<asp:HyperLink ID="HyperLink3" runat="server" Height="33px" Width="165px" NavigateUrl="~/reg.aspx">Retailer</asp:HyperLink>
&nbsp;&nbsp;
                            <asp:LinkButton ID="LinkButton5" runat="server" OnClick="LinkButton5_Click">sign out</asp:LinkButton>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            You have
                            <asp:Label ID="Label4" runat="server" Text="Label"></asp:Label>
&nbsp;in your cart
                            <asp:LinkButton ID="LinkButton7" runat="server" Height="32px" OnClick="LinkButton7_Click" Width="157px">View cart</asp:LinkButton>
                            <asp:LinkButton ID="LinkButton8" runat="server" OnClick="LinkButton8_Click">Mt Profile</asp:LinkButton>
                        </h1>
                   </div>
               
                <div class="nav">
                    <ul class="auto-style1">
                        <li><a href="#">Home</a></li>
                         <li><a href="#">Market Price</a></li>
                         <li><a href="Addtocart.aspx">Buy</a></li>
                         <li><a href="../Retaviewcart.aspx">My Cart</a></li>
                         <li><a href="#">Feedback</a></li>
                         <li><a href="#">About Us</a></li>
                         <li><a href="#">Contact Us</a></li>
                         <li><a href="#">My Profile</a></li>
                        <li>
                            <br />
                        </li>
                        <li></li>
                    </ul>
                    </div>
            
            <br />
            <asp:Label ID="Label1" runat="server" Text="You have added following products in your cart:" Height="18px" Width="217px"></asp:Label>
            <asp:Label ID="Label2" runat="server"></asp:Label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/WebForm2.aspx">Continue shopping</asp:HyperLink>
            <asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click">Cleaar cart</asp:LinkButton>
&nbsp;<br />
              


            <asp:GridView ID="GridView2" BackColor="#CCCCCC" BorderColor="#999999" 
                  BorderStyle="Solid"
                 BorderWidth="3px" CellPadding="4" CellSpacing="2" CssClass="auto-style1" ForeColor="Black" Height="403px"
              
                 ShowFooter="True" Width="934px"  runat="server" DataKeyNames="sno" OnRowCommand="GridView2_RowCommand" AutoGenerateColumns="false" OnRowDeleting="GridView2_RowDeleting">
                     <Columns>
                   
                     <asp:TemplateField HeaderText="sno">
                        <ItemTemplate>
                            <%# Eval("sno") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="productname">
                        <ItemTemplate>
                            <%# Eval("productname") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="price">
                        <ItemTemplate>
                           <asp:Label ID="lblPrice" runat="server" Text=' <%# Eval("price") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="quantity">
                        <ItemTemplate>
                            <asp:LinkButton ID="lnkbtnsub" runat="server" Text="-" ToolTip="sub" CommandName="sub" CommandArgument='<%# Eval("sno") %>'  Visible=' <%# Convert.ToInt32(Eval("quantity"))>1?true: false %>' />
                            &nbsp;&nbsp;
                            <asp:Label ID="lblQuantity" runat="server" Text=' <%# Eval("quantity") %>'></asp:Label>
                                                        &nbsp;&nbsp;
                            <asp:LinkButton ID="lnkbtnAdd" runat="server" Text="+" ToolTip="Add" CommandName="Add" CommandArgument='<%# Eval("sno") %>' />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="TotalPrice">
                        <ItemTemplate>
                            <%# Eval("totalcost") %>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField>
                        <ItemTemplate>
                            <asp:LinkButton ID="lnkbtnRemove" Text="Remove" runat="server" CommandName="Delete" CommandArgument='<%# Eval("sno") %>'></asp:LinkButton>
                        </ItemTemplate>
                        <FooterTemplate>
                            <asp:Label ID="lbl" runat="server" Text="Grand Total ="></asp:Label>
                            &nbsp;&nbsp; <asp:Label ID="lblGrandTotal" runat="server" Text="22"></asp:Label>
                            <%--<%# Eval("GrandTotal") %>--%>
                        </FooterTemplate>
                    </asp:TemplateField>
                </Columns>
                <FooterStyle BackColor="#CCCCCC" />
                <HeaderStyle BackColor="Black" Font-Bold="True" ForeColor="White" />
                <PagerStyle BackColor="#CCCCCC" ForeColor="Black" HorizontalAlign="Left" />
                <RowStyle BackColor="White" />
                <SelectedRowStyle BackColor="#000099" Font-Bold="True" ForeColor="White" />
                <SortedAscendingCellStyle BackColor="#F1F1F1" />
                <SortedAscendingHeaderStyle BackColor="Gray" />
                <SortedDescendingCellStyle BackColor="#CAC9C9" />
                <SortedDescendingHeaderStyle BackColor="#383838" />
            </asp:GridView>
            <br />
            <br />
            <asp:Label ID="Label5" runat="server" Text="Label"></asp:Label>
            <br />
            <asp:Button ID="Button1" runat="server" CssClass="auto-style2" OnClick="Button1_Click" Text="checkout" />
            <br />
            <br />
            <br />
        </div>
    </form>
</body>
</html>

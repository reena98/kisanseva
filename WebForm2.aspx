<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="trial.WebForm2" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
            background-color: #FF99FF;
        }
        .auto-style3 {
            width: 100%;
            height: 130px;
        }
        .auto-style4 {
            width: 193px;
            height: 63px;
        }
        .auto-style5 {
            width: 193px;
            height: 59px;
            text-align: center;
        }
        .auto-style6 {
            height: 59px;
            width: 411px;
            text-align: center;
        }
        .auto-style7 {
            width: 411px;
            text-align: center;
            height: 63px;
        }
        .auto-style8 {
            height: 98px;
            text-align: center;
        }
    .starempty { 
        background-image: url("~/images/starfilled.jpg");
                 width:50px;
                 height:50px;
    }
     .starfilled { background-image: url("~/images/starfilled.jpg");
                 width:50px;
                 height:50px;
    }
     .starwaiting { background-image: url("~/images/starempty.jpg");
                 width:50px;
                 height:50px;
    }
        .auto-style9 {
            text-align: center;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
      
            <asp:Label ID="Label1" runat="server" Text="welcome"></asp:Label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="Label9" runat="server" Text="Label"></asp:Label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No of items:<asp:Label ID="Label7" runat="server"></asp:Label>
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Addtocart.aspx">Show cart</asp:HyperLink>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            <asp:LinkButton ID="LinkButton5" runat="server" OnClick="LinkButton5_Click">Myprofile</asp:LinkButton>
            <br />
            <br />
            <table border="1" class="auto-style3">
                <tr>
                    <td class="auto-style5">Sort Product By:</td>
                    <td class="auto-style6">
                        <asp:DropDownList ID="DropDownList2" runat="server" OnSelectedIndexChanged="Page_Load">
                            <asp:ListItem>Low to High Price</asp:ListItem>
                            <asp:ListItem>High to Low Price</asp:ListItem>
                            <asp:ListItem></asp:ListItem>
                        </asp:DropDownList>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Apply" />
                    </td>
                </tr>
                <tr>
                    <td class="auto-style4">&nbsp;&nbsp;&nbsp;&nbsp; Search Product:&nbsp;</td>
                    <td class="auto-style7">
                        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <asp:Button ID="Button2" runat="server" Text="Search" OnClick="Button2_Click1" />
                    </td>
                </tr>
            </table>
            <br />
            Product Categories:<asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click">Dal</asp:LinkButton>
&nbsp; |
            <asp:LinkButton ID="LinkButton2" runat="server" OnClick="LinkButton2_Click">Grains</asp:LinkButton>
&nbsp;|&nbsp;
            <asp:LinkButton ID="LinkButton3" runat="server" OnClick="LinkButton3_Click">Pulses</asp:LinkButton>
&nbsp; |&nbsp;
            <asp:LinkButton ID="LinkButton4" runat="server" OnClick="LinkButton4_Click">View All Products</asp:LinkButton>
            <br />
            <br />
            <br />
            <asp:DataList ID="DataList1" runat="server"  OnSelectedIndexChanged="DataList1_SelectedIndexChanged" Height="691px" RepeatColumns="3" RepeatDirection="Horizontal" OnItemCommand="DataList1_ItemCommand" OnItemDataBound="DataList1_ItemDataBound" Width="974px" OnUpdateCommand="DataList1_UpdateCommand">
                <ItemTemplate>
                    <table class="auto-style1">
                        <tr>
                            <td class="auto-style9">
                                <br />
                                PRODUCT ID:<asp:Label ID="lblProductId" runat="server" Text='<%# Eval("productid") %>'></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="auto-style9">PRODUCT NAME:<asp:Label ID="lblProductName" runat="server" Text='<%# Eval("productname") %>'></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="auto-style8">PRICE:<asp:Label ID="lblPrice" runat="server" Text='<%# Eval("price") %>'></asp:Label>
                                <br />
                                PRODUCT IMAGE:<br />
                                <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("productimage") %>' Height="300px" Width="300px" />
                                <br />
                                PRODUCT QUANTITY:<asp:DropDownList ID="DropDownList1" runat="server" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                    <asp:ListItem>4</asp:ListItem>
                                    <asp:ListItem>5</asp:ListItem>
                                    <asp:ListItem></asp:ListItem>
                                </asp:DropDownList>
                                <br />
                                Available stock:&nbsp;
                                <asp:Label ID="Label8" runat="server" Text='<%#Eval("stockavailable")%> '></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="auto-style9">&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="auto-style9">
                                <asp:ImageButton ID="ImageButton1" runat="server" Height="86px" ImageUrl="~/images/th.jpg" Width="316px" CommandName="Addtocart" 
                                    CommandArgument='<%#Eval("productid")%>' OnClick="ImageButton1_Click"/>
                                &nbsp;<br />
                                <br />
                                <br />
                                <br />
                            </td>
                        </tr>
                    </table>
                </ItemTemplate>
            </asp:DataList>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Reena\source\repos\trial\trial\App_Data\Database1.mdf;Integrated Security=True" SelectCommand="SELECT sno, productid, productname, price, productimage, quantity, stockavailable FROM productdetail ORDER BY price DESC"></asp:SqlDataSource>
            <br />
            <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Reena\source\repos\trial\trial\App_Data\Database1.mdf;Integrated Security=True" OnSelecting="SqlDataSource2_Selecting" SelectCommand="SELECT sno, productid, productname, price, productimage, quantity, stockavailable FROM productdetail ORDER BY price"></asp:SqlDataSource>
            <br />
            <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [productdetail]" OnSelecting="SqlDataSource3_Selecting">
            </asp:SqlDataSource>
            <br />
            <asp:SqlDataSource ID="SqlDataSource4" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [productdetail] WHERE ([category] = @category)">
                <SelectParameters>
                    <asp:QueryStringParameter DefaultValue="" Name="category" QueryStringField="cat" Type="String" />
                </SelectParameters>
            </asp:SqlDataSource>
            <br />
            <asp:SqlDataSource ID="SqlDataSource5" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [productdetail] WHERE ([KeywordSearch] LIKE '%' + @KeywordSearch + '%')">
                <SelectParameters>
                    <asp:ControlParameter ControlID="TextBox1" Name="KeywordSearch" PropertyName="Text" Type="String" />
                </SelectParameters>
            </asp:SqlDataSource>
            <br />
        </div>
    </form>
    <p>
        &nbsp;</p>
</body>
</html>

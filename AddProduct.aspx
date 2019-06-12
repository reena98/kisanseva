<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AddProduct.aspx.cs" Inherits="trial.Farmer.AddProduct" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 82%;
            height: 441px;
            background-color: #FF6699;
        }
        .auto-style2 {
            width: 254px;
        }
        .auto-style3 {
            width: 254px;
            height: 92px;
        }
        .auto-style4 {
            height: 92px;
        }
        .auto-style5 {
            width: 254px;
            height: 63px;
        }
        .auto-style6 {
            height: 63px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <br />
            <br />
            <br />
            ADD NEW PRODUCT:<br />
            <br />
            <table border="1" class="auto-style1">
                <tr>
                    <td class="auto-style2">Product ID:</td>
                    <td>
                        <asp:Label ID="Label1" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2">Product Name:</td>
                    <td>
                        <asp:TextBox ID="TextBox1" runat="server" Height="40px" Width="367px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style3">Price:</td>
                    <td class="auto-style4">
                        <asp:TextBox ID="TextBox2" runat="server" Height="40px" Width="363px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style5">Upload Product image:</td>
                    <td class="auto-style6">
                        <asp:FileUpload ID="FileUpload1" runat="server" />
&nbsp;&nbsp;
                        <asp:Label ID="Label3" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style5">Available Stock:</td>
                    <td class="auto-style6">
                        <asp:TextBox ID="TextBox3" runat="server" OnTextChanged="TextBox3_TextChanged"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style5">Description about the product:</td>
                    <td class="auto-style6">
                        <asp:TextBox ID="TextBox4" runat="server" TextMode="MultiLine"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style5">Category:</td>
                    <td class="auto-style6">
                        <asp:DropDownList ID="DropDownList1" runat="server">
                            <asp:ListItem>Rice</asp:ListItem>
                            <asp:ListItem>Pulses</asp:ListItem>
                            <asp:ListItem>Dal</asp:ListItem>
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2">&nbsp;</td>
                    <td>
                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Save product" />
                        <br />
                        <br />
                        <asp:Label ID="Label2" runat="server"></asp:Label>
                    </td>
                </tr>
            </table>
        </div>
        <br />
        <br />
        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/WebForm2.aspx">View All Products</asp:HyperLink>
    </form>
</body>
</html>

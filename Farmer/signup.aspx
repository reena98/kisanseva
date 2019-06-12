<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="signup.aspx.cs" Inherits="trial.Farmer.signup" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">

        .auto-style1 {
            width: 100%;
            height: 450px;
        }
        .auto-style2 {
            width: 255px;
            text-align: center;
        }
        .auto-style3 {
            text-align: center;
        }
        .auto-style4 {
            width: 255px;
            text-align: center;
            height: 83px;
        }
        .auto-style5 {
            text-align: center;
            height: 83px;
        }
        .auto-style6 {
            width: 255px;
            text-align: center;
            height: 52px;
        }
        .auto-style7 {
            text-align: center;
            height: 52px;
        }
        .auto-style8 {
            color: #FFFFFF;
        }
        .auto-style9 {
            width: 255px;
            text-align: center;
            height: 31px;
        }
        .auto-style10 {
            text-align: center;
            height: 31px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div style="background-image: url('../images/agri.jpg'); background-repeat: no-repeat; background-position: center center">
            <br />
            <br />
            <table align="center" class="auto-style1" border="1">
                <tr>
                    <td class="auto-style9">Enter Full Name:<br />
                    </td>
                    <td class="auto-style10">
                        <asp:TextBox ID="TextBox1" runat="server" Width="337px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1" ErrorMessage="Required"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style9">Enter age:<br />
                    </td>
                    <td class="auto-style10">
                        <asp:TextBox ID="TextBox2" runat="server" Width="329px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="TextBox2" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style9">Years of Experience:</td>
                    <td class="auto-style10">
                        <asp:TextBox ID="TextBox9" runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="TextBox9" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2">Enter Gender:<br />
                    </td>
                    <td class="auto-style3">
                        <asp:DropDownList ID="DropDownList1" runat="server">
                            <asp:ListItem>Male</asp:ListItem>
                            <asp:ListItem>Female</asp:ListItem>
                        </asp:DropDownList>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="DropDownList1" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style4">Enter Address:<br />
                    </td>
                    <td class="auto-style5">
                        <asp:TextBox ID="TextBox3" runat="server" TextMode="MultiLine" Width="329px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="TextBox3" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2">Enter Contact Number:<br />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="TextBox5" runat="server" TextMode="Phone" Width="329px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ControlToValidate="TextBox5" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                        <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ControlToValidate="TextBox5" ErrorMessage="Invalid contact number" ValidationExpression="^([7-9]{1})([0-9]{9})$"></asp:RegularExpressionValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2">Enter Username:<br />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="TextBox6" runat="server" Width="327px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ControlToValidate="TextBox6" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2">Enter Password:<br />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="TextBox7" runat="server" TextMode="Password" Width="322px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" ControlToValidate="TextBox7" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style6">Enter Confirm Password:<br />
                    </td>
                    <td class="auto-style7">
                        <asp:TextBox ID="TextBox8" runat="server" TextMode="Password" Width="322px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" ControlToValidate="TextBox8" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                        <asp:CompareValidator ID="CompareValidator1" runat="server" ControlToCompare="TextBox7" ControlToValidate="TextBox8" ErrorMessage="password do not match"></asp:CompareValidator>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style6">&nbsp;</td>
                    <td class="auto-style7">
                        <br />
                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Submit" />
                        <br />
                        <asp:Label ID="Label2" runat="server"></asp:Label>
                        <br />
                        <asp:Label ID="Label1" runat="server" CssClass="auto-style8"></asp:Label>
                        <br />
                    </td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>

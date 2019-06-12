<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="reg.aspx.cs" Inherits="trial.reg" %>

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
            width: 255px;
            text-align: center;
            height: 52px;
            color: #FFFFFF;
        }
        .auto-style9 {
            color: #FFFFFF;
        }
    </style>

</head>
<body style="height: 695px">
    <form id="form1" runat="server">
        <div style="background-image: url('images/pexels-photo-696205.jpeg'); background-repeat: no-repeat; background-attachment: fixed; background-position: center center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <table align="center" class="auto-style1" border="1">
                <tr>
                    <td class="auto-style2"><span class="auto-style9">Enter Full Name:</span><br class="auto-style9" />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="TextBox1" runat="server" Width="337px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2"><span class="auto-style9">Enter email:</span><br class="auto-style9" />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="TextBox2" runat="server" TextMode="Email" Width="329px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style4"><span class="auto-style9">Enter Address:</span><br class="auto-style9" />
                    </td>
                    <td class="auto-style5">
                        <asp:TextBox ID="TextBox3" runat="server" TextMode="MultiLine" Width="329px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2"><span class="auto-style9">Enter Contact Number:</span><br class="auto-style9" />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="TextBox5" runat="server" TextMode="Phone" Width="329px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2"><span class="auto-style9">Enter Username:</span><br class="auto-style9" />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="TextBox6" runat="server" Width="327px"></asp:TextBox>
                        <asp:Label ID="Label2" runat="server" Text="Label" CssClass="auto-style9"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2"><span class="auto-style9">Enter Password:</span><br class="auto-style9" />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="TextBox7" runat="server" TextMode="Password" Width="322px"></asp:TextBox>
                        <asp:Label ID="Label3" runat="server" Text="Label" CssClass="auto-style9"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style6"><span class="auto-style9">Enter Confirm Password:</span><br class="auto-style9" />
                    </td>
                    <td class="auto-style7">
                        <asp:TextBox ID="TextBox8" runat="server" TextMode="Password" Width="322px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style8">&nbsp;</td>
                    <td class="auto-style7">
                        <br />
                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Submit" />
                        <br />
                        <br />
                        <asp:Label ID="Label1" runat="server" CssClass="auto-style9"></asp:Label>
                        <br />
                    </td>
                </tr>
            </table>
            <br />
            <br />
            <br />
            <br />
        </div>
    </form>
</body>
</html>

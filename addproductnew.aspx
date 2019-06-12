<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" CodeFile="~/addproductnew.aspx.cs" AutoEventWireup="true" CodeBehind="addproductnew.aspx.cs" Inherits="trial.addproductnew" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="row">
        <div class="col-sm-12">
            <div class="title-wrap">
                <h2 class="title"><span class="text-primary">Add </span>Product</h2>
            </div>
        </div>
        <!-- end col -->
    </div>
    <section class="section white-background">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">

                    <div class="table-responsive">
                        <table border="1" class="table table-striped">
                            <tr>
                                <td class="auto-style2">Product ID:</td>
                                <td>
                                    <asp:Label ID="Label1" runat="server"></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td class="auto-style2">Product Name:</td>
                                <td>
                                    <asp:TextBox ID="TextBox1" runat="server" Height="40px" Width="367px" CssClass="form-control"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1" ErrorMessage="*"></asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td class="auto-style3">Price:</td>
                               <td class="auto-style4">
                                   RS. <asp:TextBox ID="TextBox2" runat="server" Height="40px" Width="363px" CssClass="form-control"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="TextBox2" ErrorMessage="*"></asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td class="auto-style5">Upload Product image:</td>
                                <td class="auto-style6">
                                    <asp:FileUpload ID="FileUpload1" runat="server" CssClass="form-control" />
                                    &nbsp;&nbsp;
                        <asp:Label ID="Label3" runat="server"></asp:Label>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="FileUpload1" ErrorMessage="*"></asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td class="auto-style5">Available Stock:</td>
                                <td class="auto-style6">
                                    <asp:TextBox ID="TextBox3" runat="server" OnTextChanged="TextBox3_TextChanged" CssClass="form-control"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="TextBox3" ErrorMessage="*"></asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td class="auto-style5">Description about the product:</td>
                                <td class="auto-style6">
                                    <asp:TextBox ID="TextBox4" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                    <br />
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="TextBox4" ErrorMessage="*"></asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td class="auto-style5">Category:</td>
                                <td class="auto-style6">
                                    <asp:DropDownList ID="DropDownList1" runat="server" CssClass="form-control">
                                        <asp:ListItem>Rice</asp:ListItem>
                                        <asp:ListItem>Pulses</asp:ListItem>
                                        <asp:ListItem>Dal</asp:ListItem>
                                    </asp:DropDownList>
                                    <br />
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ControlToValidate="DropDownList1" ErrorMessage="*"></asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td class="auto-style2">&nbsp;</td>
                                <td>
                                    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Save product" CssClass="btn btn-default btn-md round" />
                                    <br />
                                    <br />
                                    <asp:Label ID="Label2" runat="server"></asp:Label>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</asp:Content>

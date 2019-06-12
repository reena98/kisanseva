<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" AutoEventWireup="true" CodeBehind="confirmfarm.aspx.cs" Inherits="trial.confirmfarm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">

        .auto-style1 {
            width: 100%;
            height: 758px;
        }
        .auto-style2 {
            height: 77px;
            text-align: center;
        }
        .auto-style3 {
            height: 126px;
        }
        .auto-style5 {
            height: 204px;
        }
        .auto-style4 {
            width: 100%;
            height: 211px;
            margin-top: 0px;
        }
        .auto-style6 {
            width: 497px;
            height: 241px;
        }
        .auto-style8 {
            height: 241px;
        }
        .auto-style9 {
            height: 145px;
            text-align: center;
        }
        .auto-style10 {
            height: 82px;
        }
        .auto-style11 {
            background-color: #FF00FF;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div>
        <br />Generate invoice as a pdf<br />
        <br />Order ID:<asp:Label ID="Label1" runat="server"></asp:Label>
        <br />
        <br />
        <asp:Panel ID="Panel1" runat="server" Height="873px">
            <table class="auto-style1" style="border-width: 1px" border="1">
                <tr>
                    <td class="auto-style2">Retail Invoice</td>
                </tr>
                <tr>
                    <td class="auto-style3">Buyer Name:
                            <asp:Label ID="Label9" runat="server" Text="Label"></asp:Label>
                        <br />
                            Order Date:<asp:Label ID="Label3" runat="server"></asp:Label>
                        <br />
                    </td>
                </tr>
                <tr>
                    <td class="auto-style5">
                        <table class="auto-style4" style="border-style: 3; border-color: #000000; border-width: 2px;">
                            <tr>
                                <td class="auto-style6">Buyer Address:<asp:Label ID="Label4" runat="server"></asp:Label>
                                    <asp:Label ID="Label7" runat="server" Text="Label"></asp:Label>
                                    <asp:Label ID="Label8" runat="server" Text="Label"></asp:Label>
                                </td>
                                <td class="auto-style8" style="border-width: 3px">Seller Address:&nbsp; Farmers warehouse.</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style9">
                        <br />
                        <div class="col-sm-9">
                            <div class="row">
                                <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False" CellPadding="4" CellSpacing="2" CssClass="table table-striped" DataKeyNames="sno" OnRowCommand="GridView2_RowCommand" OnRowDeleting="GridView2_RowDeleting" ShowFooter="True">
                                    <Columns>
                                        <%-- <asp:TemplateField HeaderText="Products">
                        <ItemTemplate>
                       <asp:Image ID="lblProductImage" runat="server" ImageUrl='<%# Eval("productimage") %>' />
                       </ItemTemplate>
                    </asp:TemplateField>--%>
                                        <asp:TemplateField HeaderText="Name">
                                            <ItemTemplate>
                                                <%# Eval("productname") %>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Price">
                                            <ItemTemplate>
                                                <i class="fa fa-rupee text-primary"></i>&nbsp;<asp:Label ID="lblPrice" runat="server" CssClass="text-primary" Text=' <%# Eval("Price") %>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity">
                                            <ItemTemplate>
                                                <asp:Label ID="lblQuantity" runat="server" Text=' <%# Eval("quantity") %>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total">
                                            <ItemTemplate>
                                                <i class="fa fa-rupee text-primary"></i>&nbsp;<asp:Label ID="lbltotalprice" runat="server" CssClass="text-primary" Text=' <%# Eval("totalcost") %>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField>
                                            <FooterTemplate>
                                                <asp:Label ID="lbl" runat="server" Text="Grand Total ="></asp:Label>
                                                &nbsp;&nbsp;
                                                <asp:Label ID="lblGrandTotal" runat="server" Text="22"></asp:Label>
                                                <%--<%# Eval("GrandTotal") %>--%>
                                            </FooterTemplate>
                                        </asp:TemplateField>
                                    </Columns>
                                </asp:GridView>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style10">Grand Total:<asp:Label ID="Label6" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td>Declaration:
                            <br />
                        <br />
                            We declare that this invoice shows actual price of the goods described inclusive of taxes and that all particulars are true and correct. Incase you find selling price on this invoice to be more than MRP mentioned on product,Please inform farmer.com<br />
                        <br />
                            THIS IS A COMPUTER GENERATED INVOICE AND DOES NOT REQUIRE SIGNATURE</td>
                </tr>
            </table>
            <br />
            <asp:Button ID="Button1" runat="server" CssClass="auto-style11" OnClick="Button1_Click" Text="Download" />
                &nbsp;
                <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </asp:Panel>
    </div>

</asp:Content>

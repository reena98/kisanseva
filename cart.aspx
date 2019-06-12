<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" CodeFile="~/cart.aspx.cs" AutoEventWireup="true" CodeBehind="cart.aspx.cs" Inherits="trial.cart" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

     <section class="section white-background">
            <div class="container">
                <div class="row">
                <div class="col-sm-12">

                    <div class="table-responsive">
                        <asp:GridView ID="GridView2"
                            CellPadding="1" CellSpacing="1" CssClass="table table-striped" AllowPaging="true" 
                            ShowFooter="True" runat="server" DataKeyNames="sno" OnRowCommand="GridView2_RowCommand" AutoGenerateColumns="False"
                            OnRowDeleting="GridView2_RowDeleting" PageSize="5" OnPageIndexChanging="GridView2_PageIndexChanging">
                            <Columns>


                                <asp:TemplateField HeaderText="Products">
                                    <ItemTemplate>
                                        <asp:Image style="height:45px;width:45px;" runat="server" ImageUrl='<%# Eval("Image") %>' />
                                     <%--   <asp:Image runat="server" ImageUrl="~/images/user.png" />--%>
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="Product Name">
                                    <ItemTemplate>
                                        <asp:Label ID="lblname" runat="server" Text='<%# Eval("Name") %>'></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Price">
                                    <ItemTemplate>
                                        <i class="fa fa-rupee text-primary"></i>&nbsp;<asp:Label ID="lblPrice" runat="server" Text=' <%# Eval("Price") %>' CssClass="text-primary"></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Quantity">
                                    <ItemTemplate>

                                        <asp:LinkButton ID="lnkbtnsub" runat="server" Text="-" ToolTip="sub" CommandName="sub" CommandArgument='<%# Eval("sno") %>'
                                            Visible=' <%# Convert.ToInt32(Eval("quantity"))>1?true: false %>' CssClass="minusquantity" />

                                        <asp:Label ID="lblQuantity" runat="server" Text=' <%# Eval("quantity") %>'></asp:Label>

                                        <asp:LinkButton ID="lnkbtnAdd" runat="server" Text="+" CssClass="addquantity" ToolTip="Add" CommandName="Add" CommandArgument='<%# Eval("sno") %>' />
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Total">
                                    <ItemTemplate>
                                        <i class="fa fa-rupee text-primary"></i>&nbsp;<asp:Label ID="lbltotalprice" runat="server" Text=' <%# Eval("totalcost") %>' CssClass="text-primary"></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField>
                                    <ItemTemplate>

                                        <asp:LinkButton ID="lnkbtnRemove" Text="x" runat="server" CommandName="Delete" CommandArgument='<%# Eval("sno") %>' class="close"></asp:LinkButton>
                                    </ItemTemplate>
                                    <FooterTemplate>
                                        <div style="float: right;">
                                            <asp:Label ID="lbl" runat="server" Text="Grand Total ="></asp:Label>

                                            <asp:Label ID="lblGrandTotal" runat="server" Text="22"></asp:Label>
                                            <%--<%# Eval("GrandTotal") %>--%>
                                        </div>
                                    </FooterTemplate>
                                </asp:TemplateField>

                            </Columns>
                             <PagerSettings Mode="Numeric" Visible="true"  />
                            <PagerStyle CssClass="pagergrid"/>
                           
                        </asp:GridView>
  </div>

         <hr class="spacer-10 no-border">

                    <a href="farmercontinue.aspx" class="btn btn-light semi-circle btn-md pull-left">
                        <i class="fa fa-arrow-left mr-5"></i>Continue shopping
                    </a>

                    <asp:Button ID="Button1" runat="server" class="btn btn-default semi-circle btn-md pull-right" Text="Checkout" OnClick="Button1_Click1" style="height: 38px" />

         </div></div></div>
     </section>
</asp:Content>

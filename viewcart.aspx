<%@ Page Title="" Language="C#" MasterPageFile="~/HomepageFooter.Master" CodeFile="~/viewcart.aspx.cs" AutoEventWireup="true" CodeBehind="viewcart.aspx.cs" Inherits="trial.viewcart" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="breadcrumb" runat="server">
    <div class="row">
        <div class="col-sm-12">
            <ul>
                <li><a href="Index.aspx">Home</a></li>
                <li class="active">Cart</li>
            </ul>
            <!-- end breadcrumb -->
        </div>
        <!-- end col -->
    </div>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="middlebar" runat="server">
    <style>
    .pagergrid{
        padding: 5px !important;
        border:1px solid #cccccc!important;

    }
</style>

    <!-- start section -->

    <div class="row">
        <!-- start sidebar -->
        <div class="col-sm-3">
            <div class="widget">
                <h6 class="subtitle">Account Navigation</h6>

                <ul class="list list-unstyled">
                    <li>
                        <a href="addprofile.aspx">My Account</a>
                    </li>
                    <li class="active">
                        <a href="viewcart.aspx">My Cart <span class="text-primary">
                            <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label></span></a>
                    </li>
                    <li>
                        <a href="myorder.aspx">My Order</a>
                    </li>

                </ul>
            </div>
            <!-- end widget -->

          <%--  <div class="widget">
                <h6 class="subtitle">New Collection</h6>
                <figure>
                    <a href="javascript:void(0);">
                        <img src="img/products/men_06.jpg" alt="collection">
                    </a>
                </figure>
            </div>--%>
            <!-- end widget -->

            <div class="widget">
               <%-- <h6 class="subtitle">Featured</h6>

                <ul class="items">
                    <li>
                        <a href="shop-single-product-v1.html" class="product-image">
                            <img src="img/products/men_01.jpg" alt="Sample Product ">
                        </a>
                        <div class="product-details">
                            <p class="product-name">
                                <a href="shop-single-product-v1.html">Product name</a>
                            </p>
                            <span class="price text-primary">$19.99</span>
                            <div class="rate text-warning">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </li>
                    <!-- end item -->
                    <li>
                        <a href="shop-single-product-v1.html" class="product-image">
                            <img src="img/products/women_02.jpg" alt="Sample Product ">
                        </a>
                        <div class="product-details">
                            <p class="product-name">
                                <a href="shop-single-product-v1.html">Product name</a>
                            </p>
                            <span class="price text-primary">$19.99</span>
                            <div class="rate text-warning">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </li>
                    <!-- end item -->
                </ul>--%>

                <hr class="spacer-10 no-border">
                <a href="continueshop.aspx" class="btn btn-default btn-block semi-circle btn-md">All Products</a>
            </div>
            <!-- end widget -->
        </div>
        <!-- end col -->
        <!-- end sidebar -->
        <div class="col-sm-9">
            <div class="row">
                <div class="col-sm-12 text-left">
                    <h2 class="title">My Cart</h2>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

            <hr class="spacer-5">
            <hr class="spacer-20 no-border">

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
                                        <asp:Image style="height:45px;width:45px;" runat="server" ImageUrl='<%# Eval("productimage") %>' />
                                     <%--   <asp:Image runat="server" ImageUrl="~/images/user.png" />--%>
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="Product Name">
                                    <ItemTemplate>
                                        <asp:Label ID="lblname" runat="server" Text='<%# Eval("productname") %>'></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Price">
                                    <ItemTemplate>
                                        <i class="fa fa-rupee text-primary"></i>&nbsp;<asp:Label ID="lblPrice" runat="server" Text=' <%# Eval("price") %>' CssClass="text-primary"></asp:Label>
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

                    <!-- end table-responsive -->

                    <hr class="spacer-10 no-border">

                    <a href="continueshop.aspx" class="btn btn-light semi-circle btn-md pull-left">
                        <i class="fa fa-arrow-left mr-5"></i>Continue shopping
                    </a>

                    <asp:Button ID="Button1" runat="server" class="btn btn-default semi-circle btn-md pull-right" Text="Checkout" OnClick="Button1_Click1" />

                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end col -->
    </div>

</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="customerService" runat="server">
</asp:Content>


<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" CodeFile="~/Confirm.aspx.cs" AutoEventWireup="true" CodeBehind="Confirm.aspx.cs" Inherits="trial.Confirm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <section class="section light-backgorund">
            <div class="container">
            
                <div class="row">
                    <!-- start sidebar -->
                    <div class="col-sm-3">
                        <div class="widget">
                            <h6 class="subtitle">Account Navigation</h6>
                            
                            <ul class="list list-unstyled">
                                <li>
                                    <a href="profile.aspx">My Account</a>
                                </li>
                                <li>
                                    <a href="cart.aspx">My Cart <span class="text-primary">(3)</span></a>
                                </li>
                                <li>
                                    <a href="myorder.aspx">My Order</a>
                                </li>
                                
                        </div><!-- end widget -->
<%--                        
                        <div class="widget">
                            <h6 class="subtitle">New Collection</h6>
                            <figure>
                                <a href="javascript:void(0);">
                                    <img src="img/products/men_06.jpg" alt="collection">
                                </a>
                            </figure>
                        </div><!-- end widget -->--%>
                        
<%--                        <div class="widget">
                            <h6 class="subtitle">Featured</h6>
                            
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
                                </li><!-- end item -->
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
                                </li><!-- end item -->
                            </ul>

                            <hr class="spacer-10 no-border">
                            <a href="shop-sidebar-left.html" class="btn btn-default btn-block semi-circle btn-md">All Products</a>
                        </div><!-- end widget -->--%>
                    </div><!-- end col -->
                    <!-- end sidebar -->
                     <asp:Panel ID="Panel1" runat="server"> 
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-sm-12 text-left">
                                <h2 class="title">Order Confirmation</h2>
                            </div><!-- end col -->
                        </div><!-- end row -->
                        
                        <hr class="spacer-5"><hr class="spacer-20 no-border">
                        
                        <div class="row">
                            <div class="col-sm-12">
                                <h5 class="thin">Thank you for your order</h5>
                                <p>we'll let you know when your items are on their way</p>
                               <p>Your Order Id is  <asp:Label ID="lblorderid" runat="server" Text=""></asp:Label>
                               </p>
                          
                                <asp:GridView ID="GridView2"
                                    CellPadding="4" CellSpacing="2" CssClass="table table-striped"
                                    ShowFooter="True" runat="server" DataKeyNames="sno" OnRowCommand="GridView2_RowCommand" AutoGenerateColumns="False"
                                    OnRowDeleting="GridView2_RowDeleting">
                                    <Columns>


                                        <%-- <asp:TemplateField HeaderText="Products">
                        <ItemTemplate>
                       <asp:Image ID="lblProductImage" runat="server" ImageUrl='<%# Eval("productimage") %>' />
                       </ItemTemplate>
                    </asp:TemplateField>--%>

                                        <asp:TemplateField HeaderText="Product Name">
                                            <ItemTemplate>
                                                <%# Eval("Name") %>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Price">
                                            <ItemTemplate>
                                                <i class="fa fa-rupee text-primary"></i>&nbsp;<asp:Label ID="lblPrice" runat="server" Text=' <%# Eval("Price") %>' CssClass="text-primary"></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Quantity">
                                            <ItemTemplate>

                                                     
                                                <asp:Label ID="lblQuantity" runat="server" Text=' <%# Eval("quantity") %>'></asp:Label>

                                                       </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Total">
                                            <ItemTemplate>
                                                <i class="fa fa-rupee text-primary"></i>&nbsp;<asp:Label ID="lbltotalprice" runat="server" Text=' <%# Eval("totalcost") %>' CssClass="text-primary"></asp:Label>
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
                      </asp:Panel>        

                            </div><!-- end col -->
                      <br />
                            <br />
                            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Download PDF of your order" CssClass="btn btn-default btn-md round" />
                     
                        </div><!-- end row -->
                    </div><!-- end col -->
                </div><!-- end row -->                
   
    
         
     </section>
</asp:Content>

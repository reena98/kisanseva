<%@ Page Title="" Language="C#" MasterPageFile="~/HomepageFooter.Master" CodeFile="~/myorder.aspx.cs" AutoEventWireup="true" CodeBehind="myorder.aspx.cs" Inherits="trial.myorder" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="breadcrumb" runat="server">
    <div class="row">
                    <div class="col-sm-12">
                        <ul>
                            <li><a href="Index.aspx">Home</a></li>
                           
                            <li class="active">Order List</li>
                        </ul><!-- end breadcrumb -->
                    </div><!-- end col -->    
                </div><!-- end row -->
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="middlebar" runat="server">
  
                <div class="row">
                    <!-- start sidebar -->
                    <div class="col-sm-3">
                        <div class="widget">
                            <h6 class="subtitle">Account Navigation</h6>
                            
                            <ul class="list list-unstyled">
                                <li>
                                    <a href="addprofile.aspx">My Account</a>
                                </li>
                                <li>
                                    <a href="viewcart.aspx">My Cart <span class="text-primary">
                                        <asp:Label ID="Label1" runat="server" Text=""></asp:Label></span></a>
                                </li>
                                <li class="active">
                                    <a href="myoder.aspx">My Order</a>
                                </li>
                              
                               <%-- <li>
                                    <a href="user-information.html">Settings</a>
                                </li>--%>
                            </ul>
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
                            </ul>--%>

                            <hr class="spacer-10 no-border">
                            <a href="continueshop.aspx" class="btn btn-default btn-block semi-circle btn-md">All Products</a>
                        </div><!-- end widget -->
                    </div><!-- end col -->
                    <!-- end sidebar -->
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-sm-12 text-left">
                                <h2 class="title">My Order</h2>
                            </div><!-- end col -->
                        </div><!-- end row -->
                      
                        <br />
                        <asp:GridView ID="GridView2"
                                    CellPadding="4" CellSpacing="2" CssClass="table table-striped"
                                    ShowFooter="True" runat="server" DataKeyNames="Id" AutoGenerateColumns="False" OnSelectedIndexChanged="GridView2_SelectedIndexChanged" DataSourceID="SqlDataSource1"
                                    >
                                    <Columns>


                                        <%-- <asp:TemplateField HeaderText="Products">
                        <ItemTemplate>
                       <asp:Image ID="lblProductImage" runat="server" ImageUrl='<%# Eval("productimage") %>' />
                       </ItemTemplate>
                    </asp:TemplateField>--%>

                                        <asp:BoundField DataField="productname" HeaderText="productname" SortExpression="productname" />

                                        <asp:BoundField DataField="price" HeaderText="price" SortExpression="price" />
                                        <asp:BoundField DataField="quantity" HeaderText="quantity" SortExpression="quantity" />
                                        <asp:BoundField DataField="dateoforder" HeaderText="dateoforder" SortExpression="dateoforder" />
                                   
                                        </Columns>

                                </asp:GridView>
                        <asp:Button ID="Button1" runat="server" Text="Clear Order List" OnClick="Button1_Click" />

                        <br />
                        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database3.mdf;Integrated Security=True" ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Orderdetails] WHERE ([username] = @username)">
                            <SelectParameters>
                                <asp:SessionParameter Name="username" SessionField="username" Type="String" />
                            </SelectParameters>
                        </asp:SqlDataSource>
                        <hr class="spacer-5"><hr class="spacer-20 no-border">
                        
                     
                    </div><!-- end col -->
                </div><!-- end row -->                
       
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="customerService" runat="server">
</asp:Content>

<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" CodeFile="~/profile.aspx.cs" AutoEventWireup="true" CodeBehind="profile.aspx.cs" Inherits="trial.profile" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
        
    <div class="row">
                    <!-- start sidebar -->
                    <div class="col-sm-3">
                        <div class="widget">
                            <h6 class="subtitle">Account Navigation</h6>
                            
                            <ul class="list list-unstyled">
                                <li>
                                    <a href="profile.aspx">My Profile</a>
                                </li>
                                <li>
                                    <a href="cart.aspx">My Cart</a>
                                </li>
                               
                                
<%--                                <li class="active">
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
                            <a href="farmercontinue.aspx" class="btn btn-default btn-block semi-circle btn-md">All Products</a>
                        </div><!-- end widget -->
                    </div><!-- end col -->
                    <!-- end sidebar -->
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-sm-12 text-left">
                                <h2 class="title">My personal information</h2>
                            </div><!-- end col -->
                        </div><!-- end row -->
                        
                        <hr class="spacer-5">&nbsp;
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="firstname">Full Name <span class="text-danger">*</span></label>
                                    <asp:TextBox ID="tname" runat="server"  class="form-control input-sm required"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Required" ControlToValidate="tname"></asp:RequiredFieldValidator>
                                </div><!-- end form-group -->
                                
                                <!-- end form-group -->
                                 <div class="form-group">
                                    <label for="email"> Address <span class="text-danger">*</span></label>
                                     <asp:TextBox ID="taddress" runat="server" class="form-control input-sm required"></asp:TextBox>
                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Required" ControlToValidate="taddress"></asp:RequiredFieldValidator>
                                     <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ErrorMessage="invalid email" ControlToValidate="taddress" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ></asp:RegularExpressionValidator>
                                     </div><!-- end form-group -->
                                <div class="form-group">
                                    <label for="email"> Contact: <span class="text-danger">*</span></label>
                                     <asp:TextBox ID="tcontact" runat="server" class="form-control input-sm required" MaxLength="10"></asp:TextBox>
                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ErrorMessage="Required" ControlToValidate="tcontact"></asp:RequiredFieldValidator>
                                    
                                    <asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" ControlToValidate="tcontact" ErrorMessage="Invalid contact number" ValidationExpression="^([7-9]{1})([0-9]{9})$"></asp:RegularExpressionValidator>
                                     </div><!-- end form-group -->
                               
                                <div class="form-group">
                                   
                                        <asp:Button ID="btnsave" runat="server" Text="Save" OnClick="btnsave_Click" CssClass="btn btn-default round btn-md" />
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                     <asp:Button ID="btndel" runat="server" Text="Delete Account" CssClass="btn btn-default round btn-md" OnClick="btndel_Click" />
                                   
                                    <asp:Label ID="Label1" runat="server" Text=""></asp:Label>
                                </div><!-- end form-group -->
                            </div><!-- end col -->
                            
                        </div><!-- end row -->
                    </div><!-- end col -->
                </div><!-- end row -->                
            
        <!-- end section -->
</asp:Content>

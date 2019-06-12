<%@ Page Title="" Language="C#" MasterPageFile="~/Homepage.Master" CodeFile="~/Index.aspx.cs" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="trial.Index" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="middlebar" runat="server">


    <div class="swiper-slide" style="background-image: url('design1/images/apple.jpg');">
        <div class="slider-content">
            <div class="box text-left">
                <h1 class="text-primary">Kisan Seva-a direct connection to a farmer's field</h1>
                <p class="text-white">Did you ever imagine that the top quality pulses and food grains directly available to you from the farmers field, could be handpicked and delivered to your home, all at the click of a button?</p>
                <a href="javascript:void(0);" class="btn btn-default semi-circle">View Collection</a>
            </div>
            <div class="box text-right hidden-xs hidden-sm fa">
                <img src="img/products/Nike-Air-Max-Green.png" alt="" />
            </div>
        </div>
        <!-- end slider-content -->
    </div>
    <!-- end swiper-slider -->
    <div class="swiper-slide" style="background-image: url('design1/images/agri.jpg');">
        <div class="slider-content">
            <div class="box text-left">
                <h1 class="text-danger">Great Savings</h1>
                <p class="text-white">Great Savings on your way, as you dont need to pay the middle men anymore.We connect you directly to our countries farmers </p>
                <a href="javascript:void(0);" class="btn btn-danger semi-circle">View Collection</a>
            </div>
            <div class="box text-right hidden-xs hidden-sm fa">
                <img src="img/products/Nike-Air-Max.png" alt="" />
            </div>
        </div>
        <!-- end slider-content -->
    </div>
    <!-- end swiper-slider -->


</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="Collections" runat="server">
    <!-- start section -->

    <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
            <div class="title-wrap">
                <h2 class="title">Our Collections</h2>
                <p class="lead">There are many variations in pulses and food grains offered by different farmers.</p>
            </div>
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <%--    <asp:Label ID="Label1" runat="server" Text="Sort Product By:"></asp:Label>
                --%></div>
           <%--     <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <asp:DropDownList ID="DropDownList3" runat="server" OnSelectedIndexChanged="Page_Load" CssClass="form-control">
                        <asp:ListItem>High To Low Price</asp:ListItem>
                        <asp:ListItem>Low to High Price</asp:ListItem>
                        <asp:ListItem></asp:ListItem>
                    </asp:DropDownList>
                </div>--%>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <%--      <asp:Button ID="Button1" runat="server" OnClick="btnapply_Click" Text="Apply" OnCommand="btnapply_Command" CssClass="btn btn-default btn-md round" />
              --%>  </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                    <asp:Label ID="Label2" runat="server" Text="Search By:"></asp:Label>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" AutoCompleteType="Search" OnTextChanged="TextBox1_TextChanged"></asp:TextBox>
                    <ajaxToolkit:AutoCompleteExtender ID="TextBox1_AutoCompleteExtender" runat="server" BehaviorID="TextBox1_AutoCompleteExtender" DelimiterCharacters="" ServiceMethod="Searchpro" TargetControlID="TextBox1" CompletionSetCount="10" CompletionInterval="100" MinimumPrefixLength="1">
                    </ajaxToolkit:AutoCompleteExtender>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                    <asp:Button ID="Button2" runat="server" Text="Search" CssClass="btn btn-default btn-md round" OnClick="Button2_Click1" />
                    <asp:ScriptManager ID="ScriptManager1" runat="server">
                    </asp:ScriptManager>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12" style="padding: 20px;">
        <div class="row" style="padding: 20px;">
            Product Categories:&nbsp;<asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click">Dal</asp:LinkButton>
            &nbsp; |
            <asp:LinkButton ID="LinkButton2" runat="server" OnClick="LinkButton2_Click">Rice</asp:LinkButton>
            &nbsp;|&nbsp;
            <asp:LinkButton ID="LinkButton3" runat="server" OnClick="LinkButton3_Click">Pulses</asp:LinkButton>
            &nbsp; |&nbsp;
            <asp:LinkButton ID="LinkButton4" runat="server" OnClick="LinkButton4_Click">View All Products</asp:LinkButton>

        </div>
        <!-- end row -->


        <div class="row column-4 ">

            <asp:DataList ID="DataList1" runat="server" OnSelectedIndexChanged="DataList1_SelectedIndexChanged" RepeatColumns="4"
                RepeatDirection="Horizontal" OnItemCommand="DataList1_ItemCommand" OnItemDataBound="DataList1_ItemDataBound"
                OnUpdateCommand="DataList1_UpdateCommand">
                <ItemTemplate>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail store style3">
                            <div class="header">

                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("productimage") %>' Width="400" Height="200" />

                                    </a>
                                    &nbsp;
                                </figure>

                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">

                                    <asp:Label ID="lblProductId" runat="server" Text='<%# Eval("productid") %>' Visible="false"></asp:Label>
                                    <asp:Label ID="lblProductName" runat="server" Text='<%# Eval("productname") %>'></asp:Label></a></h6>
                                <div class="price">
                                    <span class="amount text-primary">
                                        <i class=" fa fa-rupee"></i>
                                        <asp:Label ID="lblPrice" runat="server" Text='<%# Eval("price") %>'></asp:Label></span>
                                </div>
                                KG Pouch:    
                                <asp:DropDownList ID="DropDownList1" runat="server" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged" CssClass="form-control">
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                    <asp:ListItem>4</asp:ListItem>
                                    <asp:ListItem>5</asp:ListItem>
                                    <asp:ListItem></asp:ListItem>
                                </asp:DropDownList>
                                Description:
                                <asp:Label ID="Label8" runat="server" Text='<%#Eval("description")%> '></asp:Label>
                            </div>
                            <div class="caption" style="text-align: center; padding-bottom: 10px;">

                                <asp:Button ID="btnaddcart" runat="server" CommandName="viewcart" Text="Add to Cart" CssClass="btn btn-default btn-md round"
                                    CommandArgument='<%#Eval("productid")%>' OnClick="btnaddcart_Click1" />
                            </div>
                            <!-- end caption -->
                        </div>
                    </div>
                </ItemTemplate>
            </asp:DataList>

        </div>


        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [productdetail] ORDER BY [price]"></asp:SqlDataSource>

        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" OnSelecting="SqlDataSource2_Selecting" SelectCommand="SELECT * FROM [productdetail] ORDER BY [price] DESC"></asp:SqlDataSource>

        <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [productdetail]" OnSelecting="SqlDataSource3_Selecting"></asp:SqlDataSource>

        <asp:SqlDataSource ID="SqlDataSource4" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [productdetail] WHERE ([category] = @category)">
            <SelectParameters>
                <asp:QueryStringParameter Name="category" QueryStringField="cat" Type="String" />
            </SelectParameters>
        </asp:SqlDataSource>

        <asp:SqlDataSource ID="SqlDataSource5" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [productdetail] WHERE ([KeywordSearch] LIKE '%' + @KeywordSearch + '%')">
            <SelectParameters>
                <asp:ControlParameter ControlID="TextBox1" Name="KeywordSearch" PropertyName="Text" Type="String" />
            </SelectParameters>
        </asp:SqlDataSource>
        <br />

    </div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="customerService" runat="server">
    <section class="section image-background layer-dark" style="background-image: url(img/bg_01.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="icon-boxes style2">
                        <div class="icon">
                            <i class="fa fa-book text-primary"></i>
                        </div>
                        <!-- end icon -->
                        <div class="box-content">
                            <h5 class="text-white">Customer Service</h5>
                            <p class="text-white">kisanseva is synonymous with superior quality and continues to strive for higher levels of customer trust and confidence, by taking feedback and giving our customers what they want.  If it’s a product category you’re looking to shop from, we’ve made it convenient for you to access all products in a section easily.</p>
                        </div>
                    </div>
                    <!-- icon-box -->
                </div>
                <!-- end col -->
                <div class="col-sm-4">
                    <div class="icon-boxes style2">
                        <div class="icon">
                            <i class="fa fa-lightbulb-o text-info"></i>
                        </div>
                        <!-- end icon -->
                        <div class="box-content">
                            <h5 class="text-white">Seller Satisfaction i.e our Farmers</h5>
                            <p class="text-white">We are proud to be associated closely with the farmers from whom we source our fresh products. Most of our farm-fresh products are sourced directly from farmers, which not only ensures the best prices and freshest products for our customers but also helps the farmers get better prices.</p>
                        </div>
                    </div>
                    <!-- icon-box -->
                </div>
                <!-- end col -->
                <div class="col-sm-4">
                    <div class="icon-boxes style2">
                        <div class="icon">
                            <i class="fa fa-bullhorn text-warning"></i>
                        </div>
                        <!-- end icon -->
                        <div class="box-content">
                            <h5 class="text-white">Quality</h5>
                            <p class="text-white">Best quality products for our quality-conscious retailers.</p>
                        </div>
                    </div>
                    <!-- icon-box -->
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
    <footer class="footer light">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h5 class="title">Kisan Seva</h5>
                    <p>Shop with us the quality you won't get elsewhere.</p>

                    <hr class="spacer-10 no-border">

                    <ul class="social-icons">
                        <li class="facebook"><a href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li>
                        <li class="twitter"><a href="javascript:void(0);"><i class="fa fa-twitter"></i></a></li>
                        <li class="dribbble"><a href="javascript:void(0);"><i class="fa fa-dribbble"></i></a></li>
                        <li class="linkedin"><a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a></li>
                        <li class="youtube"><a href="javascript:void(0);"><i class="fa fa-youtube"></i></a></li>
                        <li class="behance"><a href="javascript:void(0);"><i class="fa fa-behance"></i></a></li>
                    </ul>
                </div>
                <!-- end col -->
                <div class="col-sm-3">
                    <h5 class="title">My Account</h5>
                    <ul class="list alt-list">
                        <li><a href="addprofile.aspx"><i class="fa fa-angle-right"></i>My Account</a></li>
                        <li><a href="viewcart.aspx"><i class="fa fa-angle-right"></i>My Cart</a></li>
                        <li><a href="checkoutview.aspx"><i class="fa fa-angle-right"></i>Checkout</a></li>
                    </ul>
                </div>
                <!-- end col -->
                <div class="col-sm-3">
                    <h5 class="title">Information</h5>
                    <ul class="list alt-list">
                        <li><a href="about-us-v1.html"><i class="fa fa-angle-right"></i>About Us</a></li>
                        <li><a href="faq.html"><i class="fa fa-angle-right"></i>FAQ</a></li>
                        <li><a href="privacy-policy.html"><i class="fa fa-angle-right"></i>Privacy Policy</a></li>
                        <li><a href="contact-v1.html"><i class="fa fa-angle-right"></i>Contact Us</a></li>
                    </ul>
                </div>
                <!-- end col -->
                <%--  <div class="col-sm-3">
                    <h5 class="title">Payment Methods</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul class="list list-inline">
                        <li class="text-dark"><i class="fa fa-cc-visa fa-2x"></i></li>
                        <li class="text-dark"><i class="fa fa-cc-paypal fa-2x"></i></li>
                        <li class="text-dark"><i class="fa fa-cc-mastercard fa-2x"></i></li>
                        <li class="text-dark"><i class="fa fa-cc-discover fa-2x"></i></li>
                    </ul>
                </div>--%>
                <!-- end col -->
            </div>
            <!-- end row -->

            <hr class="spacer-30">

            <div class="row text-center">
                <div class="col-sm-12">
                    <p class="text-sm">&COPY; 2019. Made with <i class="fa fa-heart text-danger"></i>by <a href="javascript:void(0);">Reena Sequeira.</a></p>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </footer>
</asp:Content>

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="success.aspx.cs" CodeFile="~/success.aspx.cs" Inherits="trial.success" EnableEventValidation="false" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" type="text/css" href="design1/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/owl.carousel.min.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/owl.theme.default.min.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/animate.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/swiper.css" />

    <link id="pagestyle" rel="stylesheet" type="text/css" href="design1/css/default.css" />

</head>
<body>

    <form id="form1" runat="server">
        <div class="topBar">
            <div class="container">

                <ul class="list-inline pull-left hidden-sm hidden-xs">
                    <li><i class="fa fa-phone mr-5"></i>7715834660</li>
                    <li><i class="fa fa-envelope mr-5"></i>kisanseva@gmail.com</li>


                </ul>

                <ul class="topBarNav pull-right">
                     <li class="linkdown">
                        <a href="javascript:void(0);">
                            <i class="fa fa-user mr-5"></i>
                            <span class="hidden-xs">My Account
                                <i class="fa fa-angle-down ml-5"></i>
                            </span>
                        </a>
                        <ul class="w-150">
                            <%-- <li><a href="wishlist.html">Wishlist (5)</a></li>--%>
                            <li><a href="addprofile.aspx">My Profile</a></li>
                            <li><a href="continueshop.aspx">Shop</a></li>

                            <li><a href="viewcart.aspx">My Cart</a></li>
                            <li><a href="checkoutview.aspx">Checkout</a></li>
                            <li><a href="about.aspx">About Us</a></li>
                            <li><a href="faq.aspx">FAQ</a></li>


                        </ul>
                    </li>
                    <li class="linkdown">
                        <a href="javascript:void(0);">
                            <i class="fa fa-shopping-basket mr-5"></i>
                            <span class="hidden-xs">Cart<sup class="text-primary"></sup>
                                <i class="fa fa-angle-down ml-5"></i>
                            </span>
                        </a>

                    </li>
                    <li>
                        <a href="mainpage.aspx" target="_self" class="fa fa-power-off"></a>
                    </li>
                </ul>
            </div>
            <!-- end container -->
        </div>
        <div class="middleBar">
            <div class="container">
                <div class="row display-table">
                    <div class="col-sm-3 vertical-align text-left hidden-xs">
                        <a href="javascript:void(0);">
                            <i class="fa fa-leaf logo" aria-hidden="true"></i>
                            <span class="header">KISAN SEVA</span>
                        </a>
                    </div>

                </div>
                <!-- end  row -->
            </div>
            <!-- end container -->
        </div>

        <section class="section white-backgorund">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="title-wrap">
                            <h2 class="title">Invoice Receipt</h2>

                        </div>

                    </div>
                    <!-- end col -->
                </div>



                <asp:Panel ID="Panel1" runat="server">
                    <table border="1" class="table table-striped">
                       <%-- <tr>
                            <td>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div style="float: left;">
                                        </div>
                                        <div style="text-align:center">
                                            <img src="design1/images/logo.png" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>--%>
                        <tr>
                            <td>
                                <p>Order ID:<asp:Label ID="Label1" runat="server"></asp:Label></p>
                            </td>
                        </tr>
                        <tr>
                            <td>Retail Invoice</td>

                        </tr>
                        <tr>
                            <td>Buyer Name:
                            <asp:Label ID="Label9" runat="server" Text="Label"></asp:Label>
                                <br />
                                Order Date:<asp:Label ID="Label3" runat="server"></asp:Label>
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td>Buyer Address:<asp:Label ID="Label4" runat="server"></asp:Label>
                                            <asp:Label ID="Label7" runat="server" Text="Label"></asp:Label>
                                            <asp:Label ID="Label8" runat="server" Text="Label"></asp:Label>
                                        </td>
                                        <td>Seller Address:&nbsp; Farmers warehouse.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="auto-style9">
                                <br />
                                <div class="col-sm-9">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <asp:GridView ID="GridView2"
                                                CellPadding="4" CellSpacing="2" CssClass="table table-striped"
                                                ShowFooter="True" runat="server" DataKeyNames="sno" OnRowCommand="GridView2_RowCommand" AutoGenerateColumns="False"
                                                OnRowDeleting="GridView2_RowDeleting">
                                                <Columns>


                                                    <asp:TemplateField HeaderText="Product Name">
                                                        <ItemTemplate>
                                                            <%# Eval("productname") %>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Price">
                                                        <ItemTemplate>
                                                            <i class="fa fa-rupee text-primary"></i>&nbsp;<asp:Label ID="lblPrice" runat="server" Text=' <%# Eval("price") %>' CssClass="text-primary"></asp:Label>
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
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Grand Total:<asp:Label ID="Label6" runat="server"></asp:Label>
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
                    <asp:Button ID="Button1" runat="server" CssClass="btn btn-default btn-md round" OnClick="Button1_Click" Text="Download" />

                </asp:Panel>

            </div>
            <!-- end row -->
            </div>
        </section>

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
                            </ul>
                    </div>
                
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

        <!-- JavaScript Files -->
        <script type="text/javascript" src="design1/js/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="design1/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="design1/js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="design1/js/jquery.downCount.js"></script>
        <script type="text/javascript" src="design1/js/nouislider.min.js"></script>
        <script type="text/javascript" src="design1/js/jquery.sticky.js"></script>
        <script type="text/javascript" src="design1/js/pace.min.js"></script>
        <script type="text/javascript" src="design1/js/star-rating.min.js"></script>
        <script type="text/javascript" src="design1/js/wow.min.js"></script>
        <script type="text/javascript" src="design1/js/swiper.min.js"></script>



    </form>
</body>
</html>

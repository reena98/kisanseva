<%@ Page Title="" Language="C#" MasterPageFile="~/HomepageFooter.Master" CodeFile="~/checkoutview.aspx.cs" AutoEventWireup="true" CodeBehind="checkoutview.aspx.cs" Inherits="trial.checkoutview" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="breadcrumb" runat="server">
    <div class="row">
        <div class="col-sm-12">
            <ul>
                <li><a href="Index.aspx">Home</a></li>
                <li class="active">Checkout</li>
            </ul>
            <!-- end breadcrumb -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="middlebar" runat="server">

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
                            <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label></span></a>
                    </li>
                    <li>
                        <a href="myorder.aspx">My Order</a>
                    </li>

                </ul>
            </div>
            <!-- end widget -->

            <%-- <div class="widget">
                <h6 class="subtitle">New Collection</h6>
                <figure>
                    <a href="javascript:void(0);">
                        <img src="img/products/men_06.jpg" alt="collection">
                    </a>
                </figure>
            </div>--%>
            <!-- end widget -->

            <div class="widget">
                <%--  <h6 class="subtitle">Featured</h6>

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
                <a href="shop-sidebar-left.html" class="btn btn-default btn-block semi-circle btn-md">All Products</a>
            </div>
            <!-- end widget -->
        </div>
        <!-- end col -->
        <!-- end sidebar -->
        <div class="col-sm-9">
            <div class="row">
                <div class="col-sm-12 text-left">
                    <h2 class="title">Checkout</h2>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

            <hr class="spacer-5">
            <hr class="spacer-20 no-border">

            <div class="row">
                <div class="col-sm-12">
                    <ul class="nav nav-pills style2 nav-justified">
                        <li class="active">
                            <a href="#shopping-cart" data-toggle="tab">1. Shopping Cart
                                            <div class="icon">
                                                <i class="fa fa-check"></i>
                                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#billing-info" data-toggle="tab">2. Billing Info
                                            <div class="icon">
                                                <i class="fa fa-home"></i>
                                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#payment" data-toggle="tab">3. Payment
                                            <div class="icon">
                                                <i class="fa fa-credit-card"></i>
                                            </div>
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content pills">
                        <div class="tab-pane active" id="shopping-cart">
                            <div class="table-responsive">
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
                                                </div>
                                                <%--<%# Eval("GrandTotal") %>--%>
                                            </FooterTemplate>
                                        </asp:TemplateField>
                                    </Columns>

                                </asp:GridView>

                            </div>
                            <!-- end table-responsive -->
                        </div>
                        <!-- end tab-pane -->

                        <div class="tab-pane" id="billing-info">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="thin subtitle">Billing Address</h5>
                                    <div class="row">
                                    </div>
                                    <!-- end row -->
                                    <div class="form-group">

                                        <asp:Label ID="Label4" runat="server" Text="Address"></asp:Label>
                                        <asp:TextBox ID="lbladdress" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="*" ControlToValidate="lbladdress"></asp:RequiredFieldValidator>

                                    </div>
                                    <!-- end form-group -->

                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <asp:Label ID="Label5" runat="server" Text="City"></asp:Label>
                                                <asp:TextBox ID="lblcity" runat="server" CssClass="form-control"></asp:TextBox>
                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ErrorMessage="*" ControlToValidate="lblcity"></asp:RequiredFieldValidator>
                                            </div>
                                            <!-- end form-group -->
                                        </div>
                                        <!-- end col -->
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <asp:Label ID="Label6" runat="server" Text="Postal Code"></asp:Label>
                                                <asp:TextBox ID="lblpin" runat="server" CssClass="form-control"></asp:TextBox>
                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ErrorMessage="*" ControlToValidate="lblpin"></asp:RequiredFieldValidator>
                                            </div>
                                            <!-- end form-group -->
                                            <asp:Button ID="Button1" runat="server" Text="Save and Proceed" CssClass="btn btn-default btn-md round" OnClick="Button1_Click1" />
                                            <asp:Label ID="Label7" runat="server" Text=""></asp:Label>
                                        </div>
                                        <!-- end col -->
                                    </div>
                                    <!-- end row -->
                                </div>
                                <!-- end col -->
                                <div class="col-md-6">
                                    <h5 class="thin subtitle">Reviews</h5>


                                    <div class="form-group">
                                        <asp:Label ID="Label1" runat="server" Text="Name"></asp:Label>

                                        <asp:TextBox ID="txtnme" runat="server" CssClass="form-control"></asp:TextBox><asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtnme" ErrorMessage="Required"></asp:RequiredFieldValidator>
                                    </div>
                                    <div class="form-group">
                                        <asp:TextBox ID="txtreview" runat="server" class="form-control" name="Notes about yout order" TextMode="MultiLine"></asp:TextBox>
                                        </div>

                                    <asp:Button ID="lblbtn" runat="server" Text="Submit Review" OnClick="lblbtn_Click" CssClass="btn btn-default btn-md round" />
                                    <asp:Label ID="lblrev" runat="server" Text=""></asp:Label>

                                    <!-- end form-group -->
                                </div>

                            </div>
                            <!-- end row -->
                        </div>
                        <!-- end tab-pane -->
                        <div class="tab-pane" id="payment">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="thin subtitle">Choose a Payment Method</h5>
                                    <div class="panel-group accordion style2" id="accordionPayment" role="tablist" aria-multiselectable="true">
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingPayment1">
                                                <h4 class="panel-title">
                                                    <a class="" data-toggle="collapse" data-parent="#accordionPayment" href="#collapsePayment1" aria-expanded="true" aria-controls="collapsePayment1">
                                                        <i class="fa fa-credit-card mr-10"></i>Credit or Debit Card
                                                    </a>
                                                </h4>
                                                <!-- end panel-title -->
                                            </div>
                                            <!-- end panel-heading -->
                                            <div id="collapsePayment1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingPayment1">
                                                <div class="panel-body">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="col-sm-4">Cardholder Name <span class="text-danger">*</span></label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control required" name="cardholder" placeholder="">
                                                            </div>
                                                            <!-- end col -->
                                                        </div>
                                                        <!-- end row -->
                                                    </div>
                                                    <!-- end form-group -->
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="col-sm-4">Card Number <span class="text-danger">*</span></label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control required" name="cardnumber" placeholder="">
                                                            </div>
                                                            <!-- end col -->
                                                        </div>
                                                        <!-- end row -->
                                                    </div>
                                                    <!-- end form-group -->
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="col-sm-4">Payment Types <span class="text-danger">*</span></label>
                                                            <div class="col-sm-8">
                                                                <ul class="list list-inline">
                                                                    <li><i class="fa fa-cc-visa fa-2x"></i></li>
                                                                    <li><i class="fa fa-cc-paypal fa-2x"></i></li>
                                                                    <li class="text-primary"><i class="fa fa-cc-mastercard fa-2x"></i></li>
                                                                    <li><i class="fa fa-cc-discover fa-2x"></i></li>
                                                                </ul>
                                                            </div>
                                                            <!-- end col -->
                                                        </div>
                                                        <!-- end row -->
                                                    </div>
                                                    <!-- end form-group -->
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="col-sm-4">Expiration Date <span class="text-danger">*</span></label>
                                                            <div class="col-sm-8">
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <input type="text" name="mm" placeholder="MM" class="form-control required">
                                                                    </div>
                                                                    <!-- end col -->
                                                                    <div class="col-sm-6">
                                                                        <input type="text" name="yy" placeholder="YY" class="form-control required">
                                                                    </div>
                                                                    <!-- end col -->
                                                                </div>
                                                                <!-- end row -->
                                                            </div>
                                                            <!-- end col -->
                                                        </div>
                                                        <!-- end row -->
                                                    </div>
                                                    <!-- end form-group -->
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="col-sm-4">CSC <span class="text-danger">*</span></label>
                                                            <div class="col-sm-8">
                                                                <input type="text" name="number" placeholder="" class="form-control mb-10 required">
                                                                <a href="javascript:void(0);">What's this?</a>
                                                            </div>
                                                            <!-- end col -->
                                                        </div>
                                                        <!-- end row -->
                                                    </div>
                                                    <!-- end form-group -->
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-sm-offset-4 col-sm-8">
                                                                <div class="checkbox-input checkbox-primary mb-10">
                                                                    <input id="save-my-card" class="styled" type="checkbox">
                                                                    <label for="save-my-card">
                                                                        Save my Card information?
                                                                    </label>
                                                                </div>
                                                                <!-- end checkbox-input -->
                                                            </div>
                                                            <!-- end col -->
                                                        </div>
                                                        <!-- end row -->
                                                    </div>
                                                    <!-- end form-group -->
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-sm-offset-4 col-sm-8 text-right">
                                                                <%--  <a href="CHECK.aspx" class="btn btn-default btn-md round">Order <i class="fa fa-arrow-circle-right ml-5"></i></a>
                                                                --%>
                                                                <span><a href="https://rzp.io/l/SPegXvj" style="position: relative; display: block; min-height: 38px; width: 180px; padding: 10px; margin: 0 auto; line-height: 18px; font-weight: 600; font-size: 14px; font-family: Lato, Muli, -apple-system, BlinkMacSystemFont, Arial, sans-serif; word-break: break-word; border-radius: 2px; text-align: center; background-color: #528FF0; color: #fff; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2); z-index: 2" target="_blank">Pay Now</a><div style="margin-top: 4px; text-align: center">
                                                                    <img height="16px" src="https://cdn.razorpay.com/static/assets/powered_by_razorpay.png" /></div>
                                                                </span>
                                                                <!-- end col -->
                                                            </div>
                                                            <!-- end row -->
                                                        </div>
                                                        <!-- end form-group -->
                                                    </div>
                                                    <!-- end panel-body -->
                                                </div>
                                                <!-- end collapse -->
                                            </div>
                                            <!-- end panel -->


                                            <!-- end panel -->
                                        </div>
                                        <!-- end panel-group -->
                                    </div>
                                    </div>
                                    <!-- end col -->
                                    <div class="col-md-6">
                                        <h5 class="thin subtitle">Frequently asked questions</h5>
                                        <div class="panel-group accordion style1" id="question" role="tablist" aria-multiselectable="true">
                                            <div class="panel panel-default">
                                                <div class="panel-heading" role="tab" id="questionOne">
                                                    <h4 class="panel-title">
                                                        <a class="" data-toggle="collapse" data-parent="#question" href="#collapseQuestionOne" aria-expanded="true" aria-controls="collapseOne">What payments methods can I use?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <!-- end panel-heading -->
                                                <div id="collapseQuestionOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="questionOne">
                                                    <div class="panel-body">
                                                        <p>Cash on Delivery is available</p>
                                                    </div>
                                                    <!-- end panel-body -->
                                                </div>
                                                <!-- end collapse -->
                                            </div>
                                            <!-- end panel -->

                                            <%--  <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="questionTwo">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#question" href="#collapseQuestionTwo" aria-expanded="false" aria-controls="collapseTwo">Can I use gift card to pay for my purchase?
                                                    </a>
                                                </h4>
                                            </div>
                                            <!-- end panel-heading -->
                                            <div id="collapseQuestionTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionTwo">
                                                <div class="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, link adipisicing elit. Dicta voluptatem, tenetur eum tempore minus libero voluptates eos doloremque. Dolore minima rem consequuntur exercitationem quaerat deleniti repellendus enim necessitatibus mollitia tenetur?</p>
                                                </div>
                                                <!-- end panel-body -->
                                            </div>
                                            <!-- end collapse -->
                                        </div>--%>
                                            <!-- end panel -->

                                            <div class="panel panel-default">
                                                <div class="panel-heading" role="tab" id="questionThree">
                                                    <h4 class="panel-title">
                                                        <a class="collapsed" data-toggle="collapse" data-parent="#question" href="#collapseQuestionThree" aria-expanded="false" aria-controls="collapseThree">How long will it take to get my order?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <!-- end panel-heading -->
                                                <div id="collapseQuestionThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionThree">
                                                    <div class="panel-body">
                                                        <p>It will take approximately 2 working days for your order to be delievered</p>
                                                    </div>
                                                    <!-- end panel-body -->
                                                </div>
                                                <!-- end collapse -->
                                            </div>
                                            <!-- end panel -->
                                        </div>
                                        <!-- end panel-group -->
                                    </div>
                                    <!-- end col -->
                                </div>
                                <!-- end row -->
                            </div>
                            <!-- end tab-pane -->
                        </div>
                        <!-- end pills content -->

                        <hr class="spacer-30">
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end col -->
        </div>
        <!-- end row -->
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="customerService" runat="server">
</asp:Content>


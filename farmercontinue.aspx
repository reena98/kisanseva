<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" AutoEventWireup="true" CodeFile="~/farmercontinue.aspx.cs" CodeBehind="farmercontinue.aspx.cs" Inherits="trial.farmercontinue" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <section class="section white-background">
            <div class="container">
                <div class="row">
                     <div class="col-sm-3">

            <div class="widget">
                <h6 class="subtitle">Categories</h6>

                <ul class="list list-unstyled">
                    <li>
                        <div class="checkbox-input checkbox-default">
                            <asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click">Axe</asp:LinkButton>
                        </div>
                    </li>
                    <li>
                        <div class="checkbox-input checkbox-default">
                            <asp:LinkButton ID="LinkButton5" runat="server" OnClick="LinkButton5_Click">Plough</asp:LinkButton>
                        </div>
                    </li>
                    <li>
                        <div class="checkbox-input checkbox-default0">
                            <asp:LinkButton ID="LinkButton6" runat="server" OnClick="LinkButton6_Click">Sickle</asp:LinkButton>
                        </div>
                    </li>
                    <li>
                        <div class="checkbox-input checkbox-default0">
                            <asp:LinkButton ID="LinkButton4" runat="server" OnClick="LinkButton4_Click">All Products</asp:LinkButton>
                        </div>
                    </li>
                    
                   <%-- <li>
                        <div class="checkbox-input checkbox-default0">
                            <input id="fashion-category" class="styled" type="checkbox" checked>
                            <label for="fashion-category">
                                Fashion <span class="text-dark">(12)</span>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="checkbox-input checkbox-default0">
                            <input id="sportwear-category" class="styled" type="checkbox" checked>
                            <label for="sportwear-category">
                                Sportwear <span class="text-dark">(12)</span>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="checkbox-input checkbox-default0">
                            <input id="bags-category" class="styled" type="checkbox" checked>
                            <label for="bags-category">
                                Bags <span class="text-dark">(12)</span>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="checkbox-input checkbox-default0">
                            <input id="shoes-category" class="styled" type="checkbox" checked>
                            <label for="shoes-category">
                                Shoes <span class="text-dark">(12)</span>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="checkbox-input checkbox-default0">
                            <input id="hoseholds-category" class="styled" type="checkbox" checked>
                            <label for="hoseholds-category">
                                HoseHolds <span class="text-dark">(12)</span>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="checkbox-input checkbox-default0">
                            <input id="technology-category" class="styled" type="checkbox" checked>
                            <label for="technology-category">
                                Technology <span class="text-dark">(12)</span>
                            </label>
                        </div>
                    </li>--%>
                </ul>
            </div>
            <!-- end widget -->
            <div class="widget">
               <%-- <h6 class="subtitle">Prices</h6>--%>

                <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" SelectCommand="SELECT * FROM [Tools] WHERE ([category] = @category)">
                    <SelectParameters>
                        <asp:QueryStringParameter Name="category" QueryStringField="cat" Type="String" />
                    </SelectParameters>
                </asp:SqlDataSource>

                <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" SelectCommand="SELECT * FROM [Tools]"></asp:SqlDataSource>

                <%--    <form method="post" class="price-range" data-start-min="250" data-start-max="650" data-min="0" data-max="1000" data-step="1">--%>
               <%-- <div class="ui-range-values">
                    <div class="ui-range-value-min">
                        $<span></span>
                        <input type="hidden">
                    </div>
                    -
                                    <div class="ui-range-value-max">
                                        $<span></span>
                                        <input type="hidden">
                                    </div>
                </div>
                <div class="ui-range-slider"></div>
                <button type="submit" class="btn btn-default btn-block semi-circle btn-md">Filter</button>
               --%> <%-- </form>--%>
            </div>
            <!-- end widget -->

            <%--    <div class="widget">
                            <h6 class="subtitle">My Cart</h6>
                            
                            <p>There are 2 items in your cart.</p>
                            <hr class="spacer-10">
                            <ul class="items">
                                <li> 
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="img/products/men_06.jpg" alt="Sample Product ">
                                    </a>
                                    <div class="product-details">
                                        <div class="close-icon"> 
                                            <a href="javascript:void(0);"><i class="fa fa-close"></i></a>
                                        </div>
                                        <p class="product-name"> 
                                            <a href="javascript:void(0);">Lorem ipsum dolor sit amet Consectetur</a> 
                                        </p>
                                        <strong class="text-dark">1</strong> x <span class="price text-primary">$19.99</span>
                                    </div>
                                </li><!-- end item -->
                                <li> 
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="img/products/shoes_01.jpg" alt="Sample Product ">
                                    </a>
                                    <div class="product-details">
                                        <div class="close-icon"> 
                                            <a href="javascript:void(0);"><i class="fa fa-close"></i></a>
                                        </div>
                                        <p class="product-name"> 
                                            <a href="javascript:void(0);">Lorem ipsum dolor sit amet Consectetur</a> 
                                        </p>
                                        <strong class="text-dark">1</strong> x <span class="price text-primary">$19.99</span>
                                    </div>
                                </li><!-- end item -->
                            </ul>

                            <hr class="spacer-10">
                            <strong class="text-dark">Cart Subtotal:<span class="pull-right text-primary">$19.99</span></strong>
                            <hr class="spacer-10">
                            <a href="checkout.html" class="btn btn-default semi-circle btn-block btn-md"><i class="fa fa-shopping-basket mr-10"></i>Checkout</a>
                        </div>--%><!-- end widget -->

        </div>
                <div class="col-sm-9">

                    <div class="table-responsive">
              <asp:DataList ID="DataList1" runat="server"  RepeatColumns="3"
                RepeatDirection="Horizontal" OnItemCommand="DataList1_ItemCommand" OnSelectedIndexChanged="DataList1_SelectedIndexChanged" >
                <ItemTemplate>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail store style3">
                            <div class="header">

                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("Image") %>' Width="400" Height="200" />

                                    </a>
                                    &nbsp;
                                </figure>

                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">
                                    <asp:Label ID="lblProductId" runat="server" Text='<%# Eval("productid") %>'></asp:Label>
                                    <asp:Label ID="lblProductName" runat="server" Text='<%# Eval("Name") %>'></asp:Label></a></h6>
                                <div class="price">
                                    <span class="amount text-primary">
                                        <i class=" fa fa-rupee"></i>
                                        <asp:Label ID="lblPrice" runat="server" Text='<%# Eval("Price") %>'></asp:Label></span>
                                </div>
                                <asp:DropDownList ID="DropDownList1" runat="server"  CssClass="form-control">
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                    <asp:ListItem>4</asp:ListItem>
                                    <asp:ListItem>5</asp:ListItem>
                                    <asp:ListItem></asp:ListItem>
                                </asp:DropDownList>
                                  </div>
                            <div class="caption" style="text-align: center; padding-bottom: 10px;">

                                <asp:Button ID="btnaddcart" runat="server" CommandName="cart" Text="Add to Cart" CssClass="btn btn-default btn-md round"
                                    CommandArgument='<%#Eval("productid")%>' />
                            </div>
                            <!-- end caption -->
                        </div>
                    </div>
                </ItemTemplate>
            </asp:DataList>
 </div></div></div></div></section>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" SelectCommand="SELECT * FROM [Tools]"></asp:SqlDataSource>
</asp:Content>

<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" AutoEventWireup="true" CodeFile="~/farmershome.aspx.cs" CodeBehind="farmershome.aspx.cs" Inherits="trial.farmershome" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-
        <!-- start section -->
        <section class="section light-backgorund">
            <div class="container">
                <div class="row">
                   
                    <div class="col-sm-12 col-md-12">
                        <div class="owl-carousel slider owl-theme">
                            <div class="item">
                                <figure>
                                    <a href="javascript:void(0);">
                                        <img src="design1/images/pexels-photo-709817.jpeg" />
                                      
                                    </a>
                                </figure>
                            </div><!-- end item -->
                            <div class="item">
                                <figure>
                                    <a href="javascript:void(0);">
                                        <img src="design1/images/apple.jpg" />
                                    </a>
                                </figure>
                            </div><!-- end item -->
                            <div class="item">
                                <figure>
                                    <a href="javascript:void(0);">
                            <img src="design1/images/pexels-photo-811109.jpeg" />          
                                    </a>
                                </figure>
                            </div><!-- end item -->
                        </div><!-- end owl carousel -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>
        <!-- end section -->
    <div class="col-sm-12">
                                <div class="owl-carousel slider owl-theme owl-loaded owl-drag">
                   
        <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 2543px;"><div class="owl-item active" style="width: 847.5px;"><div class="item">
                                        <figure>
                                            <a href="javascript:void(0);">
                                             <img src="design1/images/pexels-photo-709817.jpeg" />
                                     
                                            </a>
                                        </figure>
                                    </div></div>
            <div class="owl-item" style="width: 847.5px;"><div class="item">
                                        <figure>
                                            <a href="javascript:void(0);">
                                                <img src="design1/images/apple.jpg" />
                                            </a>
                                        </figure>
                                    </div></div>
                                     </div></div>
       </div></div>
        <!-- start section -->
        <section class="section white-background">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title-wrap">
                            
                            <h2 class="title"><span class="text-primary">Newest</span> Products</h2>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
                
                <div class="row column-4">
                      <asp:DataList ID="DataList1" runat="server"  RepeatColumns="4"
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
 
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" SelectCommand="SELECT * FROM [Tools]"></asp:SqlDataSource>
                  
                </div><!-- end row -->
                                
              
            </div><!-- end container -->
        </section>
        <!-- end section -->
        
        
        <!-- start section -->
        <section class="section light-backgorund">
            <div class="container">
              <div class="row">
                    <div class="col-sm-12">
                        <div class="title-wrap">
                            <h2 class="title"><span class="text-primary"> You can also register for Popular</span> Schemes through us. </h2>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
            
                
                <div id="owl-demo" class="owl-carousel column-3 owl-theme">
                    <div class="item">
                        

                        <div class="thumbnail blog">
                            <div class="header">
                                 <p>   DBT in Agriculture </p>
                               
                            </div>
                            <div class="caption">
                                <h6><a href="blog-article-v1.html">Total Schemes: </a></h6>
                                <div class="author-category">
                                    <span class="author mr-20">
                                        <i class="fa fa-user mr-5"></i><a href="javascript:void(0);">14</a>
                                    </span>
                                    <span class="category">
                                        <a href="javascript:void(0);">Total Beneficiaries<br>2017-2018:</a>
                                    </span>
                                </div>
                                <p>2,10,24,056.</p>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end item -->
                    <div class="item">
                        <div class="thumbnail blog">
                            <div class="header">
                                <figure>
                                    <img src="img/blog/blog_02.jpg" alt="">
                                </figure>
                                <div class="meta">
                                    <span><i class="fa fa-calendar mr-5"></i>Oct 25, 2016</span>
                                    <span><i class="fa fa-comment mr-5"></i>(15)</span>
                                    <span><i class="fa fa-heart mr-5"></i>(35)</span>
                                </div>
                            </div>
                            <div class="caption">
                                <h6><a href="blog-article-v1.html">Pradhan Mantri Fasal Bima Yojana</a></h6>
                                <div class="author-category">
                                    <span class="author mr-20">
                                        <i class="fa fa-user mr-5"></i><a href="javascript:void(0);">Joe Doe</a>
                                    </span>
                                    <span class="category">
                                        <a href="javascript:void(0);">Post Formats</a>
                                    </span>
                                </div>
                                <p>
Pradhan Mantri Fasal Bima Yojana (PMFBY) aims at supporting sustainable production in agriculture sector by way of
<a href="schemes.aspx">to know more.....</a></p>

                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end item -->
                    <div class="item">
                        <div class="thumbnail blog">
                            <div class="header">
                                <figure>
                                    <img src="img/blog/blog_03.jpg" alt="">
                                </figure>
                                <div class="meta">
                                    <span><i class="fa fa-calendar mr-5"></i>Oct 25, 2016</span>
                                    <span><i class="fa fa-comment mr-5"></i>(15)</span>
                                    <span><i class="fa fa-heart mr-5"></i>(35)</span>
                                </div>
                            </div>
                            <div class="caption">
                                <h6><a href="blog-article-v1.html">Paramparagat Krishi Vikas Yojana</a></h6>
                                <div class="author-category">
                                    <span class="author mr-20">
                                        <i class="fa fa-user mr-5"></i><a href="javascript:void(0);">Joe Doe</a>
                                    </span>
                                    <span class="category">
                                        <a href="javascript:void(0);">Post Formats</a>
                                    </span>
                                </div>
                                <p>The government has launched Paramparagat Krishi Vikas Yojana in order to address the critical importance of soil and water for improving agricultural production. The government would support and improve the organic farming practices prevalent in India. Following cluster approach mode of farming, at least 50 farmers would form a group having 50 acres of land to implement organic farming. The government aims to cover 10,000 clusters and five lakh hectares of arable land under organic farming within three years <a href="krishi.aspx">to know more.....</a></p>                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end item -->
                    <div class="item">
                        <div class="thumbnail blog">
                            <div class="header">
                                <figure>
                                    <img src="img/blog/blog_04.jpg" alt="">
                                </figure>
                                <div class="meta">
                                    <span><i class="fa fa-calendar mr-5"></i>Oct 25, 2016</span>
                                    <span><i class="fa fa-comment mr-5"></i>(15)</span>
                                    <span><i class="fa fa-heart mr-5"></i>(35)</span>
                                </div>
                            </div>
                            <div class="caption">
                                <h6><a href="blog-article-v1.html">Pradhan Mantri KISAN Samman Nidhi</a></h6>
                                <div class="author-category">
                                    <span class="author mr-20">
                                        <i class="fa fa-user mr-5"></i><a href="javascript:void(0);">Joe Doe</a>
                                    </span>
                                    <span class="category">
                                        <a href="javascript:void(0);">Post Formats</a>
                                    </span>
                                </div>
<p>With a view to provide income support to all Small and Marginal landholding farmer families having cultivable land, the Government has launched PM-KISAN. The scheme aims to supplement the financial needs of the farmers in procuring various inputs to ensure proper crop health and appropriate yields, commensurate with the anticipated farm income.

 <a href="nidhi.aspx">to know more.....</a></p>                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end item -->
                </div><!-- end owl carousel -->
                
            </div><!-- end container -->
        </section>
        <!-- end section -->
     
  
        <!-- start section -->
        <section class="primary-background">
            <div class="container">
                <div class="box-banner-wide primary-background">
                    <div class="row">
                        <div class="col-sm-4 vertical-align">
                            <h2 class="alt-font text-uppercase text-white">
                                Free <span class="regular">Delivery days!</span>
                            </h2>
                        </div><!-- end col -->
                        <div class="col-sm-4 vertical-align">
                            <p class="mt-20">Purchase products free of cost.</p>
                        </div><!-- end col -->
                        <div class="col-sm-4 vertical-align text-right">
                            <a target="_blank" href="farmercontinue.aspx" class="btn btn-light semi-circle btn-md">Purchase</a>
                        </div><!-- end col -->   
                    </div><!-- end row -->
                </div><!-- end box-banner-wide -->
            </div><!-- end container -->
        </section>
        <!-- end section -->
        
        <!-- start section -->
        <section>
   
      --%>  </section>
        <!-- end section -->
</asp:Content>

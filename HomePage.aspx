<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomePage.aspx.cs" CodeFile="~/HomePage.aspx.cs" Inherits="trial.HomePage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="Design/css/plugins.min.css" rel="stylesheet" />
    <link href="Design/css/preload.min.css" rel="stylesheet" />
    <link href="Design/css/style.light-blue-500.min.css" rel="stylesheet" />

    <style>
        body {
	margin: 0;
}

.nav {
	width: 100%;
	background: #9b8843;
	height: 70px;
	opacity: 0.9;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
	position: absolute;
}

li {
	float: left;
	margin-top: 30px;
}

a {
	width: 150px;
	color: black;
	display: block;
	text-decoration: none;
	font-size: 20px;
	text-align: center;
	border-radius: 10px;
	font-family: Century Gothic;
	font-weight: bold;
}

	a:hover {
		background: white;
		transition: 0.6s;
	}
    .container {
  position: relative;
  width: 100%;
 
}



.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #9b8843;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  margin-top:226px;
}

.container .btn:hover {
  background-color: black;
}
h1{
    font:bold;
    color:white;
    
}
       
        .auto-style2 {
            height: 32px;
        }
        .auto-style3 {
            color: black;
        }
        .auto-style4 {
            height: 711px;
            left: 0px;
            top: -1px;
        }
        </style>
</head>
<body>
    <form id="form1" runat="server">
          <div>
            
              
    <div class="ms-site-container">
        <!-- Modal -->
       
        <header class="ms-header ms-header-primary" style="left: 0px; top: 0px">
            <!--ms-header-primary-->
            <div class="container container-full">
                <div class="ms-title">
                   
                        <h1 class="animated fadeInRight animation-delay-6">
                            Kisan
                            <span>Seva</span><br />
                             &nbsp;Welcome<asp:Label ID="Label1" runat="server"></asp:Label>
                        </h1>
                   
                </div>
             
                  <div class="header-right" style="width: 24px">
                   
                </div>
                <div class="header-right" style="width: 288px">
               
                                       
                    Register:<asp:HyperLink ID="HyperLink3" runat="server" Height="33px" Width="165px" NavigateUrl="~/reg.aspx">Retailer</asp:HyperLink>
                            <asp:LinkButton ID="LinkButton6" runat="server" Height="36px" OnClick="LinkButton6_Click" Width="161px">Farmer</asp:LinkButton>
&nbsp;&nbsp;
                        
                      
                  
                </div>
          </br>
             <div class="header-right" style="width: 288px">
                  
                                       
                       Login:<asp:LinkButton ID="LinkButton1" runat="server" Height="35px" OnClick="LinkButton1_Click" Width="161px">Retailer</asp:LinkButton>
                            <asp:LinkButton ID="LinkButton5" runat="server" Height="35px" OnClick="LinkButton5_Click" Width="156px">Farmer</asp:LinkButton>
&nbsp;&nbsp;&nbsp;</h1> 
                 </div>
                      <br />
                  
                    You have
                            <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label>
&nbsp;in your cart
                 <br />
                            <asp:LinkButton ID="LinkButton3" runat="server" Height="31px" Width="150px" OnClick="LinkButton3_Click">View cart</asp:LinkButton>
                        </h1>
                   </div>
               
        
                        <li>  <asp:LinkButton ID="LinkButton4" runat="server" Height="34px" OnClick="LinkButton2_Click" Width="165px">Signout</asp:LinkButton>
                       
               
        </header>
        
     
        <!-- ms-hero ms-hero-black -->
        <div class="container mt-4">
            <h2 class="text-center color-primary mb-2 wow fadeInDown animation-delay-4">Start something that matters</h2>
            <p class="lead1 text-center aco wow fadeInDown animation-delay-5 mw-800 center-block mb-4">
               Farmers don't work till the sun goes down, they work till the work is done. You ate today
                <span class="color-primary">...thank a farmer</span> 
            </p>
            <div class="row">
                
                <div class="ms-feature card wow flipInX animation-delay-8">
                  
                </div>
                
                
            </div>
        </div>
        <!-- container -->
        <div class="wrap wrap-mountain mt-6">
            <div class="container">
                <h2 class="text-center text-light mb-6 wow fadeInDown animation-delay-5">
                    Kisan Seva
                    <strong>is a way of connecting</strong> the Farmers and the Retailers.
                </h2>
                <div class="row">
                    <div class="col-lg-6 order-lg-2 mb-4  center-block">
                        <img src="assets/img/demo/mock.png" alt="" class="img-fluid center-block wow zoomIn animation-delay-12 ">
                    </div>
                    <div class="col-lg-6 order-lg-1 pr-6">
                        <p class="wow fadeInLeft animation-delay-6">We aim at building a direct relationship between the retailers and farmers thereby helping both the parties get true market value when they sell or buy crops.</p>
                        <p class="wow fadeInLeft animation-delay-7"></p>
                        <p class="wow fadeInLeft animation-delay-8">
                          Farming is not just a job, it's a way of living.
                        </p>
                        <div class="text-center">
                         
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
          <div > 
                 
             
           <div class="fit">
        <div class="auto-style4">
            <h1 class="font-light"><br><span class="auto-style3">You can purchase good quality crops here at proper market value.</span>.</h1>
            <p class="lead color-primary"> .....</p>
            <div class="panel panel-light panel-flat">

            <asp:DataList ID="DataList1" runat="server" Height="332px" RepeatColumns="3" RepeatDirection="Horizontal"  Width="939px"  BackColor="White" BorderColor="#E7E7FF" BorderStyle="None" BorderWidth="1px" CellPadding="3" DataSourceID="SqlDataSource1" GridLines="Horizontal" OnItemCommand="DataList1_ItemCommand">
                <AlternatingItemStyle BackColor="#F7F7F7" />
                <FooterStyle BackColor="#B5C7DE" ForeColor="#4A3C8C" />
                <HeaderStyle BackColor="#4A3C8C" Font-Bold="True" ForeColor="#F7F7F7" />
                <ItemStyle BackColor="#E7E7FF" ForeColor="#4A3C8C" />
                <ItemTemplate>
                    <table class="auto-style1">
                        <tr>
                            <td>PRODUCT ID:<asp:Label ID="Label9" runat="server" Text='<%# Eval("productid") %>'></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td>PRODUCT NAME:<asp:Label ID="Label3" runat="server" Text='<%# Eval("productname") %>'></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="auto-style2">PRICE:<asp:Label ID="Label4" runat="server" Text='<%# Eval("price") %>'></asp:Label>
                                <br />
                                PRODUCT IMAGE:<br />
                                <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("productimage") %>' Height="300px" Width="300px" />
                            </td>
                        </tr>
                        <tr>
                            <td>Available Stock:<asp:Label ID="Label10" runat="server" Text='<%# Eval("stockavailable") %>'></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:ImageButton ID="ImageButton2" runat="server" CommandArgument='<%#Eval("productid")%>' CommandName="Addtocart" Height="63px" ImageUrl="~/images/th.jpg" Width="207px" />
                                <br />
                                <br />
                            </td>
                        </tr>
                    </table>
                </ItemTemplate>
                <SelectedItemStyle BackColor="#738A9C" Font-Bold="True" ForeColor="#F7F7F7" />
            </asp:DataList>
            <br />
           <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT [productid], [productname], [price], [productimage], [stockavailable], [quantity] FROM [productdetail]"></asp:SqlDataSource>
   

       </div>
     
        <div class="container mt-6">
            <h2 class="text-center color-primary mb-4">Our Latest Works</h2>
            <div class="owl-dots"></div>
            <div class="owl-carousel owl-theme">
                <div class="card animation-delay-6">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port4.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="color-primary">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-primary btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
                <div class="card card-dark-inverse animation-delay-8">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port24.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-info btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
                <div class="card animation-delay-10">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port7.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="color-primary">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-primary btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
                <div class="card animation-delay-6">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port8.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="color-primary">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-primary btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
                <div class="card card-dark-inverse animation-delay-8">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port9.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-info btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
                <div class="card animation-delay-10">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port5.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="color-primary">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-primary btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
                <div class="card animation-delay-6">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port11.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="color-primary">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-primary btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
                <div class="card card-dark-inverse animation-delay-8">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port3.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-info btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
                <div class="card animation-delay-10">
                    <div class="withripple zoom-img">
                        <a href="javascript:void()">
                            <img src="assets/img/demo/port14.jpg" alt="..." class="img-fluid">
                        </a>
                    </div>
                    <div class="card-body">
                        <h3 class="color-primary">Thumbnail label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                        <p class="text-right">
                            <a href="javascript:void()" class="btn btn-primary btn-raised text-right" role="button">
                                <i class="zmdi zmdi-collection-image-o"></i> View More
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <aside class="ms-footbar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 ms-footer-col">
                        <div class="ms-footbar-block">
                            <h3 class="ms-footbar-title">Sitemap</h3>
                            <ul class="list-unstyled ms-icon-list three_cols">
                                <li>
                                    <a href="HomePage.aspx">
                                        <i class="zmdi zmdi-home"></i> Home
                                    </a>
                                </li>
                             
                            
                                <li>
                                    <a href="portfolio-filters_sidebar.html">
                                        <i class="zmdi zmdi-case"></i> Works
                                    </a>
                                </li>
                            
                                <li>
                                    <a href="page-pricing.html">
                                        <i class="zmdi zmdi-money"></i> Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="page-about.html">
                                        <i class="zmdi zmdi-favorite-outline"></i> About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="page-team2.html">
                                        <i class="zmdi zmdi-accounts"></i> Our Team
                                    </a>
                                </li>
                                <li>
                                    <a href="page-services.html">
                                        <i class="zmdi zmdi-face"></i> Services
                                    </a>
                                </li>
                                <li>
                                    <a href="page-faq2.html">
                                        <i class="zmdi zmdi-help"></i> FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="Farmer/farmlog.aspx">
                                        <i class="zmdi zmdi-lock"></i> Login as Farmer
                                    </a>
                                </li>
                                <li>
                                    <a href="Login.aspx">
                                        <i class="zmdi zmdi-lock"></i> Login as Retailer
                                    </a>
                                </li>
                                <li>
                                    <a href="page-contact.html">
                                        <i class="zmdi zmdi-email"></i> Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="ms-footbar-block">

                        </div>
                    </div>
                    <div class="col-lg-5 col-md-7 ms-footer-col ms-footer-alt-color">
                        <div class="ms-footbar-block">
                            <h3 class="ms-footbar-title text-center mb-2">Last Articles</h3>
                            <div class="ms-footer-media">
                                <div class="media">
                                    <div class="media-left media-middle">
                                        <a href="javascript:void(0)">
                                            <img class="media-object media-object-circle" src="assets/img/demo/p75.jpg" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">
                                            <a href="javascript:void(0)">Lorem ipsum dolor sit expedita cumque amet consectetur adipisicing repellat</a>
                                        </h4>
                                        <div class="media-footer">
                                            <span>
                                                <i class="zmdi zmdi-time color-info-light"></i> August 18, 2016
                                            </span>
                                            <span>
                                                <i class="zmdi zmdi-folder-outline color-warning-light"></i>
                                                <a href="javascript:void(0)">Design</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-5 ms-footer-col ms-footer-text-right">
                        <div class="ms-footbar-block">
                            <div class="ms-footbar-title">
                                <span class="ms-logo ms-logo-white ms-logo-sm mr-1"></span>
                                <h3 class="no-m ms-site-title">
                                    Kisan
                                    <span>Seva</span>
                                </h3>
                            </div>
                            <address class="no-mb">
                                <p>
                                    <i class="color-danger-light zmdi zmdi-pin mr-1"></i> 
									Ackruti hubtown gardenia,Mira road,
                                </p>
                                <p>
                                    <i class="color-warning-light zmdi zmdi-map mr-1"></i> India,Thane-401107,
                                </p>
                                <p>
                                    <i class="color-info-light zmdi zmdi-email mr-1"></i>
                                    <a href="mailto:joe@example.com">Kisanseva@gmail.com</a>
                                </p>
                                <p>
                                    <i class="color-royal-light zmdi zmdi-phone mr-1"></i>771583466
                                </p>
                               
                            </address>
                       
                        </div>
                    </div>
                </div>
            </div>
        </aside>
  
        <div class="btn-back-top">
            <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
                
                <img src="images/up-arrow.png" style="width:20px;height:20px;" />
            </a>
        </div>
    </div>
     
    </form>
</body>
</html>

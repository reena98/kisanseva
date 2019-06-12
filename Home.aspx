<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="trial.Home" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Plus - E-Commerce Template</title>
    <meta charset="utf-8">
    <meta name="description" content="Plus E-Commerce Template">
    <meta name="author" content="Diamant Gjota" />
    <meta name="keywords" content="plus, html5, css3, template, ecommerce, e-commerce, bootstrap, responsive, creative" />
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	
    <!--Favicon-->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    
    <!-- css files -->
    <link rel="stylesheet" type="text/css" href="design1/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/owl.carousel.min.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/owl.theme.default.min.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/animate.css" />
    <link rel="stylesheet" type="text/css" href="design1/css/swiper.css" />
    
    <!-- this is default skin you can replace that with: dark.css, yellow.css, red.css ect -->
    <link id="pagestyle" rel="stylesheet" type="text/css" href="design1/css/default.css" />
    
    
</head>
    <body>
        
        <!-- start topBar -->
        <div class="topBar">
            <div class="container">
                <ul class="topBarNav pull-left">
                    <li class="linkdown">
                        <a href="javascript:void(0);">
                            <i class="fa fa-usd mr-5"></i>
                            USD
                            <i class="fa fa-angle-down ml-5"></i>
                        </a>
                        <ul class="w-100">
                            <li><a href="javascript:void(0);"><i class="fa fa-eur mr-5"></i>EUR</a></li>
                            <li class="active"><a href="javascript:void(0);"><i class="fa fa-usd mr-5"></i>USD</a></li>
                            <li><a href="javascript:void(0);"><i class="fa fa-gbp mr-5"></i>GBP</a></li>
                        </ul>
                    </li>
                    <li class="linkdown">
                        <a href="javascript:void(0);">
                            <img src="img/flags/flag-french.jpg" class="mr-5" alt="">
                            <span class="hidden-xs">
                                French 
                                <i class="fa fa-angle-down ml-5"></i>
                            </span>    
                        </a>
                        <ul class="w-100">
                            <li><a href="javascript:void(0);"><img src="img/flags/flag-english.jpg" class="mr-5" alt="">English</a></li>
                            <li class="active"><a href="javascript:void(0);"><img src="img/flags/flag-french.jpg" class="mr-5" alt="">French</a></li>
                            <li><a href="javascript:void(0);"><img src="img/flags/flag-german.jpg" class="mr-5" alt="">German</a></li>
                            <li><a href="javascript:void(0);"><img src="img/flags/flag-spain.jpg" class="mr-5" alt="">Spain</a></li>
                        </ul>
                    </li>
                </ul>
                
                <ul class="topBarNav pull-right">
                    <li><a href="javascript:void(0);" data-toggle="modal" data-target=".loginModal"> Login</a></li>
                    <li><a href="javascript:void(0);" data-toggle="modal" data-target=".registerModal"> Register</a></li>
                    <li class="linkdown">
                        <a href="javascript:void(0);">
                            <i class="fa fa-user mr-5"></i>
                            <span class="hidden-xs">
                                My Account 
                                <i class="fa fa-angle-down ml-5"></i>
                            </span>
                        </a>
                        <ul class="w-150">
                            <li><a href="wishlist.html">Wishlist (5)</a></li>
                            <li><a href="cart.html">My Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </li>
                    <li class="linkdown">
                        <a href="javascript:void(0);">
                            <i class="fa fa-shopping-basket mr-5"></i>
                            <span class="hidden-xs">
                                Cart<sup class="text-primary">(3)</sup>
                                <i class="fa fa-angle-down ml-5"></i>
                            </span>    
                        </a>
                        <ul class="cart w-250">
                            <li>
                                <div class="cart-items">
                                    <ol class="items">
                                        <li> 
                                            <a href="shop-single-product-v1.html" class="product-image">
                                                <img src="img/products/men_06.jpg" alt="Sample Product ">
                                            </a>
                                            <div class="product-details">
                                                <div class="close-icon"> 
                                                    <a href="javascript:void(0);"><i class="fa fa-close"></i></a>
                                                </div>
                                                <p class="product-name"> 
                                                    <a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a> 
                                                </p>
                                                <strong>1</strong> x <span class="price text-primary">$59.99</span>
                                            </div><!-- end product-details -->
                                        </li><!-- end item -->
                                        <li> 
                                            <a href="shop-single-product-v1.html" class="product-image">
                                                <img src="img/products/shoes_01.jpg" alt="Sample Product ">
                                            </a>
                                            <div class="product-details">
                                                <div class="close-icon"> 
                                                    <a href="javascript:void(0);"><i class="fa fa-close"></i></a>
                                                </div>
                                                <p class="product-name"> 
                                                    <a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a> 
                                                </p>
                                                <strong>1</strong> x <span class="price text-primary">$39.99</span>
                                            </div><!-- end product-details -->
                                        </li><!-- end item -->
                                        <li> 
                                            <a href="shop-single-product-v1.html" class="product-image">
                                                <img src="img/products/bags_07.jpg" alt="Sample Product ">
                                            </a>
                                            <div class="product-details">
                                                <div class="close-icon"> 
                                                    <a href="javascript:void(0);"><i class="fa fa-close"></i></a>
                                                </div>
                                                <p class="product-name"> 
                                                    <a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a> 
                                                </p>
                                                <strong>1</strong> x <span class="price text-primary">$29.99</span>
                                            </div><!-- end product-details -->
                                        </li><!-- end item -->
                                    </ol>
                                </div>
                            </li>
                            <li>
                                <div class="cart-footer">
                                    <a href="cart.html" class="pull-left"><i class="fa fa-cart-plus mr-5"></i>View Cart</a>
                                    <a href="checkout.html" class="pull-right"><i class="fa fa-shopping-basket mr-5"></i>Checkout</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div><!-- end container -->
        </div>
        <!-- end topBar -->
        
        <div class="middleBar">
            <div class="container">
                <div class="row display-table">
                    <div class="col-sm-3 vertical-align text-left hidden-xs">
                        <a href="javascript:void(0);">
                            <img width="160" src="img/logo-big.png" alt="" />
                        </a>
                    </div><!-- end col -->
                    <div class="col-sm-7 vertical-align text-center">
                        <form>
                            <div class="row grid-space-1">
                                <div class="col-sm-6">
                                    <input type="text" name="keyword" class="form-control input-lg" placeholder="Search">
                                </div><!-- end col -->
                                <div class="col-sm-3">
                                    <select class="form-control input-lg" name="category">
                                        <option value="all">All Categories</option>
                                        <optgroup label="Mens">
                                            <option value="shirts">Shirts</option>
                                            <option value="coats-jackets">Coats & Jackets</option>
                                            <option value="underwear">Underwear</option>
                                            <option value="sunglasses">Sunglasses</option>
                                            <option value="socks">Socks</option>
                                            <option value="belts">Belts</option>
                                        </optgroup>
                                        <optgroup label="Womens">
                                            <option value="bresses">Bresses</option>
                                            <option value="t-shirts">T-shirts</option>
                                            <option value="skirts">Skirts</option>
                                            <option value="jeans">Jeans</option>
                                            <option value="pullover">Pullover</option>
                                        </optgroup>
                                        <option value="kids">Kids</option>
                                        <option value="fashion">Fashion</option>
                                        <optgroup label="Sportwear">
                                            <option value="shoes">Shoes</option>
                                            <option value="bags">Bags</option>
                                            <option value="pants">Pants</option>
                                            <option value="swimwear">Swimwear</option>
                                            <option value="bicycles">Bicycles</option>
                                        </optgroup>
                                        <option value="bags">Bags</option>
                                        <option value="shoes">Shoes</option>
                                        <option value="hoseholds">HoseHolds</option>
                                        <optgroup label="Technology">
                                            <option value="tv">TV</option>
                                            <option value="camera">Camera</option>
                                            <option value="speakers">Speakers</option>
                                            <option value="mobile">Mobile</option>
                                            <option value="pc">PC</option>
                                        </optgroup>
                                    </select>
                                </div><!-- end col -->
                                <div class="col-sm-3">
                                    <input type="submit"  class="btn btn-default btn-block btn-lg" value="Search">
                                </div><!-- end col -->
                            </div><!-- end row -->
                        </form>
                    </div><!-- end col -->
                    <div class="col-sm-2 vertical-align header-items hidden-xs">
                        <div class="header-item mr-5">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i class="fa fa-heart-o"></i>
                                <sub>32</sub>
                            </a>
                        </div>
                        <div class="header-item">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Compare">
                                <i class="fa fa-refresh"></i>
                                <sub>2</sub>
                            </a>
                        </div>
                    </div><!-- end col -->
                </div><!-- end  row -->
            </div><!-- end container -->
        </div><!-- end middleBar -->
        
        <!-- start navbar -->
        <div class="navbar yamm navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" data-toggle="collapse" data-target="#navbar-collapse-3" class="navbar-toggle">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="javascript:void(0);" class="navbar-brand visible-xs">
                        <img src="img/logo.png" alt="logo">
                    </a>
                </div>
                <div id="navbar-collapse-3" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <!-- Home -->
                        <li class="dropdown active"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Home<i class="fa fa-angle-down ml-5"></i></a>
                            <ul role="menu" class="dropdown-menu">
                                <li><a href="home-v1.html">Home - Version 1</a></li>
                                <li><a href="home-v2.html">Home - Version 2</a></li>
                                <li><a href="home-v3.html">Home - Version 3</a></li>
                                <li><a href="home-v4.html">Home - Version 4 <span class="label primary-background">1.1</span></a></li>
                                <li><a href="home-v5.html">Home - Version 5 <span class="label primary-background">1.1</span></a></li>
                                <li><a href="home-v6.html">Home - Version 6 <span class="label primary-background">1.2</span></a></li>
                                <li class="active"><a href="home-v7.html">Home - Version 7 <span class="label primary-background">1.3</span></a></li>
                            </ul><!-- end ul dropdown-menu -->
                        </li><!-- end li dropdown -->    
                        <!-- Features -->
                        <li class="dropdown left"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Features<i class="fa fa-angle-down ml-5"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="headers.html">Headers</a></li>
                                <li><a href="footers.html">Footers</a></li>
                                <li><a href="sliders.html">Sliders</a></li>
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="grid.html">Grid</a></li>
                                <li class="divider"></li>
                                <li class="dropdown-submenu"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Dropdown Level 1</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Dropdown Level</a></li>
                                        <li class="dropdown-submenu"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Dropdown Level 2</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="javascript:void(0);">Dropdown Level</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul><!-- end ul dropdown-menu -->
                        </li><!-- end li dropdown -->
                        <!-- Pages -->
                        <li class="dropdown yamm-fw"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Pages<i class="fa fa-angle-down ml-5"></i></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <!-- Content container to add padding -->
                                    <div class="yamm-content">
                                        <div class="row">
                                            <ul class="col-sm-3">
                                                <li class="title">
                                                    <h6>Shop Pages</h6>
                                                </li>
                                                <li><a href="shop-sidebar-left.html">Sidebar Left</a></li>
                                                <li><a href="shop-sidebar-right.html">Sidebar Right</a></li>
                                                <li><a href="shop-filter-top.html">Filters Top</a></li>
                                                <li><a href="shop-full-width-sidebar-left.html">Full Width Sidebar Left</a></li>
                                                <li><a href="shop-full-width-sidebar-right.html">Full Width Sidebar Right</a></li>
                                                <li><a href="shop-full-width-filter-top.html">Full Width Filters Top</a></li>
                                                <li><a href="category.html">Category <span class="label primary-background">1.1</span></a></li>
                                                <li><a href="shop-single-product-v1.html">Single product</a></li>
                                                <li><a href="shop-single-product-v2.html">Single product v2 <span class="label primary-background">1.3</span></a></li>
                                                <li class="title">
                                                    <h6>Contact Pages</h6>
                                                </li>
                                                <li><a href="contact-v1.html">Contact Us Version 1</a></li>
                                                <li><a href="contact-v2.html">Contact Us Version 2</a></li>
                                            </ul><!-- end ul col -->
                                            <ul class="col-sm-3">
                                                <li class="title">
                                                    <h6>About us Pages</h6>
                                                </li>
                                                <li><a href="about-us-v1.html">About Us Version 1</a></li>
                                                <li><a href="about-us-v2.html">About Us Version 2</a></li>
                                                <li><a href="about-us-v3.html">About Us Version 3</a></li>
                                                <li class="title">
                                                    <h6>Blog Pages</h6>
                                                </li>
                                                <li><a href="blog-v1.html">Blog Version 1</a></li>
                                                <li><a href="blog-v2.html">Blog Version 2</a></li>
                                                <li><a href="blog-v3.html">Blog Version 3</a></li>
                                                <li><a href="blog-article-v1.html">Blog article</a></li>
                                            </ul><!-- end ul col -->
                                            <ul class="col-sm-3">
                                                <li class="title">
                                                    <h6>User account</h6>
                                                </li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="register.html">Register</a></li>
                                                <li><a href="login-register.html">Login or Register</a></li>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="user-information.html">User Information</a></li>
                                                <li><a href="order-list.html">Order List</a></li>
                                                <li><a href="order-confirmation.html">Order Confirmation <span class="label primary-background">1.1</span></a></li>
                                                <li><a href="forgot-password.html">Forgot Password</a></li>
                                            </ul><!-- end ul col -->
                                            <ul class="col-sm-3">
                                                <li class="title">
                                                    <h6>Other Pages</h6>
                                                </li>
                                                <li><a href="help.html">Help</a></li>
                                                <li><a href="faq.html">Faq</a></li>
                                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                                <li><a href="blank-page.html">Blank Page <span class="label primary-background">1.1</span></a></li>
                                                <li><a href="404-error.html">404 Error</a></li>
                                                <li><a href="500-error.html">500 Error</a></li>
                                                <li><a href="coming-soon.html">Coming soon</a></li>
                                                <li><a href="subscribe.html">Subscribe</a></li>
                                            </ul><!-- end ul col -->
                                        </div><!-- end row -->
                                    </div><!-- end yamn-content -->
                                </li><!-- end li -->
                           </ul><!-- end ul dropdown-menu -->
                        </li><!-- end li dropdown -->
                        <!-- elements -->
                        <li><a href="elements.html">Elements</a></li>
                        <!-- Collections -->
                        <li class="dropdown yamm-fw"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Collections<i class="fa fa-angle-down ml-5"></i></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <div class="yamm-content">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-3">
                                                <a href="javascript:void(0);">
                                                    <figure class="zoom-out">
                                                        <img alt="" src="img/banners/collection_01.JPG">
                                                    </figure>
                                                </a>
                                            </div><!-- end col -->
                                            <div class="col-xs-12 col-sm-3">
                                                <a href="javascript:void(0);">
                                                    <figure class="zoom-in">
                                                        <img alt="" src="img/banners/collection_02.JPG">
                                                    </figure>
                                                </a>
                                            </div><!-- end col -->
                                            <div class="col-xs-12 col-sm-3">
                                                <a href="javascript:void(0);">
                                                    <figure class="zoom-out">
                                                        <img alt="" src="img/banners/collection_03.JPG">
                                                    </figure>
                                                </a>
                                            </div><!-- end col -->
                                            <div class="col-xs-12 col-sm-3">
                                                <a href="javascript:void(0);">
                                                    <figure class="zoom-in">
                                                        <img alt="" src="img/banners/collection_04.JPG">
                                                    </figure>
                                                </a>
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                        
                                        <hr class="spacer-20 no-border">
                                        
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-3">
                                                <h6>Pellentes que nec diam lectus</h6>
                                                <p>Proin pulvinar libero quis auctor pharet ra. Aenean fermentum met us orci, sedf eugiat augue pulvina r vitae. Nulla dolor nisl, molestie nec aliquam vitae, gravida sodals dolor...</p>
                                                <button type="button" class="btn btn-default round btn-md">Read more</button>
                                            </div><!-- end col -->
                                            <div class="col-xs-12 col-sm-3">
                                                <div class="thumbnail store style1">
                                                    <div class="header">
                                                        <div class="badges">
                                                            <span class="product-badge top left white-backgorund text-primary semi-circle">Sale</span>
                                                            <span class="product-badge top right text-primary">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </span>
                                                        </div>
                                                        <figure class="layer">
                                                            <img src="img/products/men_01.jpg" alt="">
                                                        </figure>
                                                        <div class="icons">
                                                            <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                                            <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                                            <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="caption">
                                                        <h6 class="thin"><a href="javascript:void(0);">Lorem Ipsum dolor sit</a></h6>
                                                        <div class="price">
                                                            <small class="amount off">$68.99</small>
                                                            <span class="amount text-primary">$59.99</span>
                                                        </div>
                                                        <a href="javascript:void(0);"><i class="fa fa-cart-plus mr-5"></i>Add to cart</a>
                                                    </div><!-- end caption -->
                                                </div><!-- end thumbnail -->
                                            </div><!-- end col -->
                                            <div class="col-xs-12 col-sm-3">
                                                <div class="thumbnail store style1">
                                                    <div class="header">
                                                        <div class="badges">
                                                            <span class="product-badge top left white-backgorund text-primary semi-circle">Sale</span>
                                                            <span class="product-badge top right text-primary">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </span>
                                                        </div>
                                                        <figure class="layer">
                                                            <img src="img/products/women_01.jpg" alt="">
                                                        </figure>
                                                        <div class="icons">
                                                            <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                                            <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                                            <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="caption">
                                                        <h6 class="thin"><a href="javascript:void(0);">Lorem Ipsum dolor sit</a></h6>
                                                        <div class="price">
                                                            <small class="amount off">$68.99</small>
                                                            <span class="amount text-primary">$59.99</span>
                                                        </div>
                                                        <a href="javascript:void(0);"><i class="fa fa-cart-plus mr-5"></i>Add to cart</a>
                                                    </div><!-- end caption -->
                                                </div><!-- end thumbnail -->
                                            </div><!-- end col -->
                                            <div class="col-xs-12 col-sm-3">
                                                <div class="thumbnail store style1">
                                                    <div class="header">
                                                        <div class="badges">
                                                            <span class="product-badge top left white-backgorund text-primary semi-circle">Sale</span>
                                                            <span class="product-badge top right text-primary">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </span>
                                                        </div>
                                                        <figure class="layer">
                                                            <img src="img/products/kids_01.jpg" alt="">
                                                        </figure>
                                                        <div class="icons">
                                                            <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                                            <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                                            <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="caption">
                                                        <h6 class="thin"><a href="javascript:void(0);">Lorem Ipsum dolor sit</a></h6>
                                                        <div class="price">
                                                            <small class="amount off">$68.99</small>
                                                            <span class="amount text-primary">$59.99</span>
                                                        </div>
                                                        <a href="javascript:void(0);"><i class="fa fa-cart-plus mr-5"></i>Add to cart</a>
                                                    </div><!-- end caption -->
                                                </div><!-- end thumbnail -->
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                    </div><!-- end yamm-content -->
                                </li><!-- end li -->
                            </ul><!-- end dropdown-menu -->
                        </li><!-- end dropdown -->
                    </ul><!-- end navbar-nav -->
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown right">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                                <span class="hidden-sm">Categories</span><i class="fa fa-bars ml-5"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-submenu"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Mens</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="category.html">Shirts</a></li>
                                        <li><a href="category.html">Coats & Jackets</a></li>
                                        <li><a href="category.html">Underwear</a></li>
                                        <li><a href="category.html">Sunglasses</a></li>
                                        <li><a href="category.html">Socks</a></li>
                                        <li><a href="category.html">Belts</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Womens</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="category.html">Bresses</a></li>
                                        <li><a href="category.html">T-shirts</a></li>
                                        <li><a href="category.html">Skirts</a></li>
                                        <li><a href="category.html">Jeans</a></li>
                                        <li><a href="category.html">Pullover</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0);">Kids</a></li>
                                <li><a href="javascript:void(0);">Fashion</a></li>
                                <li class="dropdown-submenu"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">SportWear</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="category.html">Shoes</a></li>
                                        <li><a href="category.html">Bags</a></li>
                                        <li><a href="category.html">Pants</a></li>
                                        <li><a href="category.html">SwimWear</a></li>
                                        <li><a href="category.html">Bicycles</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0);">Bags</a></li>
                                <li><a href="javascript:void(0);">Shoes</a></li>
                                <li><a href="javascript:void(0);">HouseHolds</a></li>
                                <li class="dropdown-submenu"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Technology</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="category.html">TV</a></li>
                                        <li><a href="category.html">Camera</a></li>
                                        <li><a href="category.html">Speakers</a></li>
                                        <li><a href="category.html">Mobile</a></li>
                                        <li><a href="category.html">PC</a></li>
                                    </ul>
                                </li>
                            </ul><!-- end ul dropdown-menu -->
                        </li><!-- end dropdown -->
                    </ul><!-- end navbar-right -->
                </div><!-- end navbar collapse -->
            </div><!-- end container -->
        </div><!-- end navbar -->
        
        <!-- Swiper slider-->
        <div class="swiper-container swiper-coverflow">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background-color:#e1e6e6;">
                    <div class="slider-content">
                        <div class="box text-left">
                            <h1 class="text-primary">New Arrivals</h1>
                            <p class="text-dark">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="javascript:void(0);" class="btn btn-default semi-circle">View Collection</a>
                        </div>
                        <div class="box text-right hidden-xs hidden-sm fa">
                            <img src="img/products/Nike-Air-Max-Green.png" alt="" />
                        </div>
                    </div><!-- end slider-content -->
                </div><!-- end swiper-slider -->
                <div class="swiper-slide" style="background-color:#e1e6e6;">
                    <div class="slider-content">
                        <div class="box text-left">
                            <h1 class="text-danger">New Arrivals</h1>
                            <p class="text-dark">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="javascript:void(0);" class="btn btn-danger semi-circle">View Collection</a>
                        </div>
                        <div class="box text-right hidden-xs hidden-sm fa">
                            <img src="img/products/Nike-Air-Max.png" alt="" />
                        </div>
                    </div><!-- end slider-content -->
                </div><!-- end swiper-slider -->
            </div><!-- end swiper wrapper -->
            <!-- Pagination -->
            <div class="swiper-pagination swiper-pagination-h"></div>
            <!-- Arrows -->
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
        </div><!-- end swiper-container -->
        
        <!-- start section -->
        <section class="section white-backgorund">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="title-wrap">
                            <h2 class="title">Our Collections</h2>
                            <p class="lead">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
                
                <div class="row mb-50">
                    <div class="col-sm-3 pull-right">
                        <select id="men-filter-cat" class="form-control" name="men-filter-cat">
                            <option value="all">All Categories</option>
                            <option value="shirts">Shirts</option>
                            <option value="coats-jackets">Coats & Jackets</option>
                            <option value="underwear">Underwear</option>
                            <option value="sunglasses">Sunglasses</option>
                            <option value="socks">Socks</option>
                            <option value="belts">Belts</option>
                        </select>
                    </div><!-- end col -->
                </div><!-- end row -->
                
                <div class="row column-4">
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/bags_09.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top left primary-background text-white semi-circle">Sale</span>
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img class="front" src="img/products/fashion_01.jpg" alt="">
                                        <img class="back" src="img/products/fashion_02.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <small class="amount off text-danger">$68.99</small>
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/hoseholds_02.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/kids_05.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                                <ul class="countdown-product">
                                    <li>
                                        <span class="days">00</span>
                                        <p>Days</p>
                                    </li>
                                    <li>
                                        <span class="hours">00</span>
                                        <p>Hours</p>
                                    </li>
                                    <li>
                                        <span class="minutes">00</span>
                                        <p>Mins</p>
                                    </li>
                                    <li>
                                        <span class="seconds">00</span>
                                        <p>Secs</p>
                                    </li>
                                </ul><!-- end countdown -->
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/men_06.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/shoes_01.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/men_08.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <small class="amount off text-danger">$68.99</small>
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/technology_08.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <small class="amount off text-danger">$68.99</small>
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img class="front" src="img/products/men_01.jpg" alt="">
                                        <img class="back" src="img/products/men_02.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/kids_01.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/kids_02.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/technology_02.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/bags_01.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/women_01.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/hoseholds_05.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="thumbnail store style3">
                            <div class="header">
                                <div class="badges">
                                    <span class="product-badge top right text-warning">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <img src="img/products/women_04.jpg" alt="">
                                    </a>
                                </figure>
                                <div class="icons">
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-heart-o"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);"><i class="fa fa-gift"></i></a>
                                    <a class="icon semi-circle" href="javascript:void(0);" data-toggle="modal" data-target=".productQuickView"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">Lorem Ipsum dolor sit</a></h6>
                                <div class="price">
                                    <span class="amount text-primary">$59.99</span>
                                </div>
                            </div><!-- end caption -->
                        </div><!-- end thumbnail -->
                    </div><!-- end col -->
                </div><!-- end row -->
                
                <div class="row">
                    <div class="col-sm-12">
                        <nav class="text-center">
                            <ul class="pagination pagination-lg">
                                <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li class="active"><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                            </ul>
                        </nav>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>
        <!-- end section -->
        

        <!-- start section -->
        <section>
            <div class="container">
                <!-- Modal Product Quick View -->
                <div class="modal fade productQuickView" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h5>Lorem ipsum dolar sit amet</h5>
                            </div><!-- end modal-header -->
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-sm-5">
                                        <div class='carousel slide product-slider' data-ride='carousel' data-interval="false">
                                            <div class='carousel-inner'>
                                                <div class='item active'>
                                                    <figure>
                                                        <img src='img/products/men_01.jpg' alt='' />
                                                    </figure>
                                                </div><!-- end item -->
                                                <div class='item'>
                                                    <div class="embed-responsive embed-responsive-16by9">
                                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/NrmMk1Myrxc"></iframe>
                                                    </div>
                                                </div><!-- end item -->
                                                <div class='item'>
                                                    <figure>
                                                        <img src='img/products/men_03.jpg' alt='' />
                                                    </figure>
                                                </div><!-- end item -->
                                                <div class='item'>
                                                    <figure>
                                                        <img src='img/products/men_04.jpg' alt='' />
                                                    </figure>
                                                </div><!-- end item -->
                                                <div class='item'>
                                                    <figure>
                                                        <img src='img/products/men_05.jpg' alt=''/>
                                                    </figure>
                                                </div><!-- end item -->

                                                <!-- Arrows -->
                                                <a class='left carousel-control' href='.product-slider' data-slide='prev'>
                                                    <span class='fa fa-angle-left'></span>
                                                </a>
                                                <a class='right carousel-control' href='.product-slider' data-slide='next'>
                                                    <span class='fa fa-angle-right'></span>
                                                </a>
                                            </div><!-- end carousel-inner -->

                                            <!-- thumbs -->
                                            <ol class='carousel-indicators mCustomScrollbar meartlab'>
                                                <li data-target='.product-slider' data-slide-to='0' class='active'><img src='img/products/men_01.jpg' alt='' /></li>
                                                <li data-target='.product-slider' data-slide-to='1'><img src='img/products/men_02.jpg' alt='' /></li>
                                                <li data-target='.product-slider' data-slide-to='2'><img src='img/products/men_03.jpg' alt='' /></li>
                                                <li data-target='.product-slider' data-slide-to='3'><img src='img/products/men_04.jpg' alt='' /></li>
                                                <li data-target='.product-slider' data-slide-to='4'><img src='img/products/men_05.jpg' alt='' /></li>
                                                <li data-target='.product-slider' data-slide-to='5'><img src='img/products/men_06.jpg' alt='' /></li>
                                            </ol><!-- end carousel-indicators -->
                                        </div><!-- end carousel -->
                                    </div><!-- end col -->
                                    <div class="col-sm-7">
                                        <p class="text-gray alt-font">Product code: 1032446</p>

                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star-half-o text-warning"></i>
                                        <span>(12 reviews)</span>
                                        <h4 class="text-primary">$79.00</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                        <hr class="spacer-10">
                                        <div class="row">
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                                                <select class="form-control" name="select">
                                                    <option value="" selected>Color</option>
                                                    <option value="red">Red</option>
                                                    <option value="green">Green</option>
                                                    <option value="blue">Blue</option>
                                                </select>
                                            </div><!-- end col -->
                                            <div class="col-md-4 col-sm-6 col-xs-12">
                                                <select class="form-control" name="select">
                                                    <option value="">Size</option>
                                                    <option value="">S</option>
                                                    <option value="">M</option>
                                                    <option value="">L</option>
                                                    <option value="">XL</option>
                                                    <option value="">XXL</option>
                                                </select>
                                            </div><!-- end col -->
                                            <div class="col-md-4 col-sm-12">
                                                <select class="form-control" name="select">
                                                    <option value="" selected>QTY</option>
                                                    <option value="">1</option>
                                                    <option value="">2</option>
                                                    <option value="">3</option>
                                                    <option value="">4</option>
                                                    <option value="">5</option>
                                                    <option value="">6</option>
                                                    <option value="">7</option>
                                                </select>
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                        <hr class="spacer-10">
                                        <ul class="list list-inline">
                                            <li><button type="button" class="btn btn-default btn-md round"><i class="fa fa-shopping-basket mr-5"></i>Add to Cart</button></li>
                                            <li><button type="button" class="btn btn-gray btn-md round"><i class="fa fa-heart mr-5"></i>Add to Wishlist</button></li>
                                        </ul>
                                    </div><!-- end col -->
                                </div><!-- end row -->
                            </div><!-- end modal-body -->
                        </div><!-- end modal-content -->
                    </div><!-- end modal-dialog -->
                </div><!-- end productRewiew -->
                
                
                <!-- Modal Login -->
                <div class="modal fade account loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="row display-table text-center">
                                    <div class="col-sm-6 vertical-align">
                                        <div class="inner-content">
                                            <h3>Login</h3>
                                            <p class="lead">to your account</p>

                                            <hr class="spacer-5 no-border">

                                            <div class="form-group">
                                                <input type="text" class="form-control input-lg" placeholder="Your Name">
                                            </div><!-- end form-group -->
                                            <div class="form-group">
                                                <input type="password" class="form-control input-lg" placeholder="Password">
                                            </div><!-- end form-group -->
                                            <div class="form-group text-left">
                                                <div class="checkbox-input mb-10 pull-left">
                                                    <input id="remember" class="styled" type="checkbox">
                                                    <label for="remember">
                                                        Remember me
                                                    </label>
                                                </div><!-- end checkbox-input -->
                                                <label class="pull-right"><a href="forgot-password.html">Forgot Password</a></label>
                                            </div><!-- end form-group -->
                                            <div class="form-group">
                                                <input type="submit" class="btn btn-default btn-block round btn-lg" value="Log In">
                                            </div><!-- end form-group -->

                                            <div class="or">or</div>

                                        </div><!-- inner-content -->

                                    </div><!-- end col -->

                                    <div class="col-sm-6 vertical-align image-background layer-dark" style="background-image: url('img/bg_01.jpg');">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                        <div class="inner-content">
                                            <h3 class="text-white">Sign in</h3>
                                            <p class="lead text-white">with one of your social profiles</p>

                                            <ul class="social-icons style2">
                                                <li class="facebook"><a class="semi-circle" href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li>
                                                <li class="twitter"><a class="semi-circle" href="javascript:void(0);"><i class="fa fa-twitter"></i></a></li>
                                                <li class="google-plus"><a class="semi-circle" href="javascript:void(0);"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>

                                            <hr class="spacer-10 no-border"/>

                                            <p>Don't have an account? <a href="#" class="text-white">Register</a></p>

                                        </div><!-- end inner-content -->
                                    </div><!-- end col -->
                                </div><!-- end row -->
                            </div><!-- end modal-body -->
                        </div><!-- end modal-content -->
                    </div><!-- end modal-dialog -->
                </div><!-- end loginModal -->
                
                <!-- Modal Register -->
                <div class="modal fade account registerModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="row display-table text-center">
                                    <div class="col-sm-6 vertical-align">
                                        <div class="inner-content">
                                            <h3>Register</h3>
                                            <p class="lead">Create an account</p>

                                            <hr class="spacer-5 no-border">

                                            <div class="form-group">
                                                <input type="text" class="form-control input-lg" placeholder="Your Name">
                                            </div><!-- end form-group -->
                                            <div class="form-group">
                                                <input type="email" class="form-control input-lg" placeholder="Email">
                                            </div><!-- end form-group -->
                                            <div class="form-group">
                                                <input type="password" class="form-control input-lg" placeholder="Password">
                                            </div><!-- end form-group -->
                                            <div class="form-group text-left">
                                                <div class="checkbox-input mb-10 pull-left">
                                                    <input id="remember" class="styled" type="checkbox">
                                                    <label for="remember">
                                                        Remember me
                                                    </label>
                                                </div><!-- end checkbox-input -->
                                            </div><!-- end form-group -->
                                            <div class="form-group">
                                                <input type="submit" class="btn btn-default btn-block round btn-lg" value="Log In">
                                            </div><!-- end form-group -->

                                            <div class="or hidden-xs">or</div>

                                        </div><!-- inner-content -->

                                    </div><!-- end col -->

                                    <div class="col-sm-6 vertical-align image-background layer-dark" style="background-image: url('img/bg_01.jpg');">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                        <div class="inner-content">
                                            <h3 class="text-white">Sign Up</h3>
                                            <p class="lead text-white">with one of your social profiles</p>

                                            <ul class="social-icons style2">
                                                <li class="facebook"><a class="semi-circle" href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li>
                                                <li class="twitter"><a class="semi-circle" href="javascript:void(0);"><i class="fa fa-twitter"></i></a></li>
                                                <li class="google-plus"><a class="semi-circle" href="javascript:void(0);"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>

                                            <hr class="spacer-10 no-border"/>

                                            <p>Do you have an account? <a href="#" class="text-white">Log In</a></p>

                                        </div><!-- end inner-content -->
                                    </div><!-- end col -->
                                </div><!-- end row -->
                            </div><!-- end modal-body -->
                        </div><!-- end modal-content -->
                    </div><!-- end modal-dialog -->
                </div><!-- end registerModal -->
            </div><!-- end container -->
        </section>
        <!-- end section -->
        
        <!-- start section -->
        <section class="section light-background">
            <div class="container">
                <div id="owl-demo" class="owl-carousel column-5 owl-theme">
                    <div class="item">
                        <figure class="zoom-out">
                            <img src="img/brands/brand_01.jpg" alt="">
                        </figure>
                    </div><!-- end item -->
                    <div class="item">
                        <figure class="zoom-out">
                            <img src="img/brands/brand_02.jpg" alt="">
                        </figure>
                    </div><!-- end item -->
                    <div class="item">
                        <figure class="zoom-out">
                            <img src="img/brands/brand_03.jpg" alt="">
                        </figure>
                    </div><!-- end item -->
                    <div class="item">
                        <figure class="zoom-out">
                            <img src="img/brands/brand_04.jpg" alt="">
                        </figure>
                    </div><!-- end item -->
                    <div class="item">
                        <figure class="zoom-out">
                            <img src="img/brands/brand_01.jpg" alt="">
                        </figure>
                    </div><!-- end item -->
                    <div class="item">
                        <figure class="zoom-out">
                            <img src="img/brands/brand_02.jpg" alt="">
                        </figure>
                    </div><!-- end item -->
                    <div class="item">
                        <figure class="zoom-out">
                            <img src="img/brands/brand_03.jpg" alt="">
                        </figure>
                    </div><!-- end item -->
                    <div class="item">
                        <figure class="zoom-out">
                            <img src="img/brands/brand_04.jpg" alt="">
                        </figure>
                    </div><!-- end item -->
                </div><!-- end owl carousel -->
            </div><!-- end container -->
        </section>
        <!-- end section -->
        
        <!-- start section -->
        <section class="section image-background layer-dark" style="background-image: url(img/bg_01.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="icon-boxes style2">
                            <div class="icon">
                                <i class="fa fa-book text-primary"></i>
                            </div><!-- end icon -->
                            <div class="box-content">
                                <h5 class="text-white">Customer Service</h5>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div><!-- icon-box -->
                    </div><!-- end col -->
                    <div class="col-sm-4">
                        <div class="icon-boxes style2">
                            <div class="icon">
                                <i class="fa fa-lightbulb-o text-info"></i>
                            </div><!-- end icon -->
                            <div class="box-content">
                                <h5 class="text-white">Seller Satisfaction</h5>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div><!-- icon-box -->
                    </div><!-- end col -->
                    <div class="col-sm-4">
                        <div class="icon-boxes style2">
                            <div class="icon">
                                <i class="fa fa-bullhorn text-warning"></i>
                            </div><!-- end icon -->
                            <div class="box-content">
                                <h5 class="text-white">Best Offers</h5>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div><!-- icon-box -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>
        <!-- end section -->
        
        <!-- start footer -->
        <footer class="footer light">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h5 class="title">Plus</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
                        
                        <hr class="spacer-10 no-border">
                        
                        <ul class="social-icons">
                            <li class="facebook"><a href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li>
                            <li class="twitter"><a href="javascript:void(0);"><i class="fa fa-twitter"></i></a></li>
                            <li class="dribbble"><a href="javascript:void(0);"><i class="fa fa-dribbble"></i></a></li>
                            <li class="linkedin"><a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a></li>
                            <li class="youtube"><a href="javascript:void(0);"><i class="fa fa-youtube"></i></a></li>
                            <li class="behance"><a href="javascript:void(0);"><i class="fa fa-behance"></i></a></li>
                        </ul>
                    </div><!-- end col -->
                    <div class="col-sm-3">
                        <h5 class="title">My Account</h5>
                        <ul class="list alt-list">
                            <li><a href="my-account.html"><i class="fa fa-angle-right"></i>My Account</a></li>
                            <li><a href="wishlist.html"><i class="fa fa-angle-right"></i>Wishlist</a></li>
                            <li><a href="cart.html"><i class="fa fa-angle-right"></i>My Cart</a></li>
                            <li><a href="checkout.html"><i class="fa fa-angle-right"></i>Checkout</a></li>
                        </ul>
                    </div><!-- end col -->
                    <div class="col-sm-3">
                        <h5 class="title">Information</h5>
                        <ul class="list alt-list">
                            <li><a href="about-us-v1.html"><i class="fa fa-angle-right"></i>About Us</a></li>
                            <li><a href="faq.html"><i class="fa fa-angle-right"></i>FAQ</a></li>
                            <li><a href="privacy-policy.html"><i class="fa fa-angle-right"></i>Privacy Policy</a></li>
                            <li><a href="contact-v1.html"><i class="fa fa-angle-right"></i>Contact Us</a></li>
                        </ul>
                    </div><!-- end col -->
                    <div class="col-sm-3">
                        <h5 class="title">Payment Methods</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <ul class="list list-inline">
                            <li class="text-dark"><i class="fa fa-cc-visa fa-2x"></i></li>
                            <li class="text-dark"><i class="fa fa-cc-paypal fa-2x"></i></li>
                            <li class="text-dark"><i class="fa fa-cc-mastercard fa-2x"></i></li>
                            <li class="text-dark"><i class="fa fa-cc-discover fa-2x"></i></li>
                        </ul>
                    </div><!-- end col -->
                </div><!-- end row -->
                
                <hr class="spacer-30">
                
                <div class="row text-center">
                    <div class="col-sm-12">
                        <p class="text-sm">&COPY; 2017. Made with <i class="fa fa-heart text-danger"></i> by <a href="javascript:void(0);">DiamondCreative.</a></p>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </footer>
        <!-- end footer -->
        
        
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
        <script type="text/javascript" src="design1js/swiper.min.js"></script>
        <script type="text/javascript" src="design1/js/main.js"></script>
        
        <!-- Initialize Swiper slide -->
        <script>
            var swiperH = new Swiper('.swiper-coverflow', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                effect: 'coverflow',
                centeredSlides: true,
                slidesPerView: 'auto',
                loop: true,
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true
                }
            });
        </script>
        
    </body>
</html>

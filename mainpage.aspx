<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="mainpage.aspx.cs" CodeFile="~/mainpage.aspx.cs" Inherits="trial.mainpage" %>

<!DOCTYPE html>
<html lang="en">
<head>

    <!-- SITE TITTLE -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kisan Seva</title>

    <!-- PLUGINS CSS STYLE -->
    <link href="design1/css/mains/jquery-ui.min.css" rel="stylesheet" />
    <link href="design1/css/mains/bootstrap.min.css" rel="stylesheet" />
    <link href="design1/css/font-awesome.min.css" rel="stylesheet" />
    <link href="assets/plugins/listtyicons/style.css" rel="stylesheet">
    <link href="design1/css/mains/bootstrap-thumbnail.css" rel="stylesheet" />
    <link href="design1/css/mains/select_option1.css" rel="stylesheet" />
    <link href="design1/css/owl.carousel.min.css" rel="stylesheet" />
    <link href="design1/css/animate.css" rel="stylesheet" />
    <!-- CUSTOM CSS -->
    <link href="design1/css/mains/app.css" rel="stylesheet" />
    <link href="design1/css/mains/default.css" rel="stylesheet" />


</head>

<body id="body" class="body-wrapper boxed-menu">
    <form id="form1" runat="server">
        <!-- <div class="page-loader" style="background: url(img/preloader.gif) center no-repeat #fff;"></div> -->
        <!-- Preloader -->

        <div class="main-wrapper">
            <!-- HEADER -->
            <header id="pageTop" class="header">

                <!-- TOP INFO BAR -->

                <div class="nav-wrapper">
                    <!-- NAVBAR -->
                    <nav id="menuBar" class="navbar navbar-default transparent-navbar " role="navigation">
                        <div class="container">

                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">

                                <a class="navbar-brand" href="index.html">
                                    <img class="logo-svg" src="design1/images/logo.png" style="width=140px;" />
                                  <%--  <svg class="logo-svg" version="1" xmlns="design1/images/logo.png" width="140" height="44">
                                  --%>      <path class="path-1" fill="" d="M0 44V0h139.813v44H0zM137.346 2.467H2.467v39.065h134.879V2.467z" />
                                        <path class="path-1" fill="" d="M120.927 22.389v11.095h-4.566V22.389a371.288 371.288 0 0 0-2.086-2.888 347.047 347.047 0 0 1-2.2-3.053 386.86 386.86 0 0 0-2.201-3.053c-.7-.959-1.395-1.922-2.086-2.888h5.617l5.255 7.287 5.222-7.287h5.649c.002 0-8.604 11.882-8.604 11.882zM98.034 33.484h-4.565V15.069h-6.372v-4.562h17.244v4.562h-6.306v18.415zm-21.908 0H71.56V15.069h-6.372v-4.562h17.244v4.562h-6.306v18.415zm-17.425-1.789c-.69.623-1.511 1.116-2.463 1.477-.953.361-1.987.542-3.104.542-1.007 0-1.982-.143-2.923-.427a10.814 10.814 0 0 1-2.661-1.214h.033a9.928 9.928 0 0 1-1.577-1.215 18.73 18.73 0 0 1-.953-.952l3.416-3.151c.153.197.399.432.739.706.339.274.728.537 1.166.788.44.253.902.467 1.38.64.481.175.941.262 1.379.262.372 0 .744-.044 1.117-.131.359-.082.703-.22 1.018-.41.305-.185.564-.437.755-.739.197-.306.296-.689.296-1.149 0-.175-.06-.366-.181-.574-.12-.208-.329-.432-.624-.673-.296-.241-.706-.498-1.232-.771a20.567 20.567 0 0 0-1.971-.87 25.42 25.42 0 0 1-2.562-1.132 8.896 8.896 0 0 1-2.053-1.428 5.903 5.903 0 0 1-1.347-1.871c-.317-.7-.476-1.51-.476-2.429 0-.94.175-1.822.526-2.642a6.21 6.21 0 0 1 1.494-2.133c.646-.602 1.423-1.072 2.332-1.412.908-.339 1.911-.509 3.006-.509.591 0 1.22.077 1.889.23.668.153 1.319.35 1.954.591a12.95 12.95 0 0 1 1.79.837c.558.317 1.023.64 1.396.968l-2.825 3.545a15.71 15.71 0 0 0-1.281-.788 10.316 10.316 0 0 0-1.281-.558 4.311 4.311 0 0 0-1.478-.263c-.919 0-1.637.181-2.151.542-.515.361-.772.881-.772 1.559 0 .307.093.586.279.837.186.252.438.482.756.689.348.225.717.417 1.1.574.416.176.854.34 1.314.492 1.314.504 2.42 1.013 3.318 1.526.898.514 1.62 1.062 2.168 1.642s.936 1.204 1.166 1.871c.23.668.345 1.395.345 2.183 0 .963-.197 1.871-.591 2.724a6.803 6.803 0 0 1-1.626 2.216zM34.839 10.507h4.532v22.977h-4.532V10.507zm-20.036 0h4.566v18.415h9.263v4.563H14.803V10.507z" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </nav>
                </div>
            </header>


            <!-- BANNER SECTION -->
            <section class="clearfix homeBanner" style="background-image: url('design1/images/pexels-photo-709817.jpeg');">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="banerInfo">
                                <h1>Buy. Sell. Donate</h1>
                                <p>Kisan Seva helps you to buy quality produce from the farmers.Not only we provide you with the best quality that is specially handpicked for you by our farmers but also we provide the products at the market price

                                </p>
                                <p>Kisan Seva is a direct pathway for you to our farmers. </p>
                                <p>You can also donate to our farmers and help them.</p>
                                <asp:Button ID="Button1" runat="server" class="btn btn-primary" Text="Retailer and Customer Login" OnClick="Button1_Click" />
                              <%--    <i class="fa fa-user" aria-hidden="true"></i></button>--%>
                                <asp:Button ID="Button2" runat="server" Text="Farmer Login" CssClass="btn btn-primary" OnClick="Button2_Click1" />      <span>
                                    <a href="https://rzp.io/l/DaBBAud" class="btn btn-primary" target="_blank">Donate <i class="fa fa-hand-grab-o" aria-hidden="true"></i></a>
                                        <div style="margin-top: 4px; text-align: center">
                                            <img height="16px" src="https://cdn.razorpay.com/static/assets/powered_by_razorpay.png" />
                                        </div>
                                    </span>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>


        <!-- JAVASCRIPTS -->
        <script src="design1/css/mains/jquery.min.js"></script>
        <script src="design1/css/mains/jquery-ui.min.js"></script>
        <script src="design1/css/mains/bootstrap.min.js"></script>
        <script src="design1/css/mains/jquery.counterup.min.js"></script>
        <script src="design1/css/mains/jquery.selectbox-0.1.3.min.js"></script>
        <script src="design1/js/owl.carousel.min.js"></script>
        <script src="design1/css/mains/map.js"></script>
        <script src="design1/css/mains/app.js"></script>
    </form>
</body>

</html>


<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LoginNew.aspx.cs" Inherits="trial.LoginNew" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
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
    <form id="form1" runat="server">
        <section>
            <div class="container">
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
        
    </form>
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
                    slideShadows: true
                }
            });
        </script>
</body>
</html>

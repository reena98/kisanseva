<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="confirmfarmer.aspx.cs" CodeFile="~/confirmfarmer.aspx.cs" Inherits="trial.confirmfarmer" %>

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

    <!-- this is default skin you can replace that with: dark.css, yellow.css, red.css ect -->
    <link id="pagestyle" rel="stylesheet" type="text/css" href="design1/css/default.css" />

    
    <style type="text/css">
        
      .auto-style1 {
            width: 100%;
            height: 758px;
        }
        .auto-style2 {
            height: 77px;
            text-align: center;
        }
        .auto-style3 {
            height: 126px;
        }
        .auto-style5 {
            height: 204px;
        }
        .auto-style4 {
            width: 100%;
            height: 211px;
            margin-top: 0px;
        }
        .auto-style6 {
            width: 497px;
            height: 241px;
        }
        .auto-style8 {
            height: 241px;
        }
        .auto-style9 {
            height: 145px;
            text-align: center;
        }
        .auto-style10 {
            height: 82px;
        }
        .auto-style11 {
            background-color: #FF00FF;
        }
    
.table {
	width: 100%;
	max-width: 100%;
	margin-bottom: 20px
}

	.table {
		border-collapse: collapse !important
	}

		* {
	font-family: 'Source Sans Pro', sans-serif;
}

* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box
}

	*, :after, :before {
		color: #000 !important;
		text-shadow: none !important;
		background: 0 0 !important;
		-webkit-box-shadow: none !important;
		box-shadow: none !important
	}

	th {
	text-align: left
}

.text-primary {
	color: #1e88e5;
}

.fa {
	display: inline-block;
	font: normal normal normal 14px/1 FontAwesome;
	font-size: inherit;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.text-primary {
	color: #337ab7
}

.minusquantity {
	background-color: #555555;
	border-radius: 30px;
	padding: 1px 8px 1px 8px;
	/* width: 0px; */
	/* height: 20px; */
	color: #ffffff;
}

a {
  color: #35404f;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out; }
	
a {
	color: #337ab7;
	text-decoration: none
}

	a, a:visited {
		text-decoration: underline
	}

		a {
	background-color: transparent
}

	.addquantity {
	background-color: #555555;
	border-radius: 30px;
	padding: 1px 7px 1px 7px;
	/* width: 0px; */
	/* height: 20px; */
	color: #ffffff;
}

.close {
	float: right;
	font-size: 18px;
	font-weight: 700;
	line-height: 1;
	color: #000;
	text-shadow: 0 1px 0 #fff;
	filter: alpha(opacity=20);
	opacity: .2
}

	     .auto-style12 {
             border-collapse: collapse;
             background-color: transparent;
         }
         .auto-style13 {
             padding: 0;
         }
     </style>
    <script type = "text/javascript" >
function changeHashOnLoad() {
     window.location.href += "#";
     setTimeout("changeHashAgain()", "50"); 
}

function changeHashAgain() {
  window.location.href += "1";
}

var storedHash = window.location.hash;
window.setInterval(function () {
    if (window.location.hash != storedHash) {
         window.location.hash = storedHash;
    }
}, 50);


</script>
</head>
<body>
    <form id="form1" runat="server">
       
        <div class="middleBar">
            <div class="container">
                <div class="row display-table">
                    <div class="col-sm-3 vertical-align text-left hidden-xs">
                        <a href="javascript:void(0);">
                            <img src="design1/images/logo.png" /> </a>
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
             <br />
            <br />
            <asp:Panel ID="Panel1" runat="server" Height="873px">
                     <table border="1" class="table table-striped">
                <tr>
                            <td>
                            <p>  Order ID:<asp:Label ID="Label1" runat="server"></asp:Label>
</p>   </td>
                        </tr>
                        <tr>
                            <td>Retail Invoice</td>

                        </tr>
                <tr>
                        <td class="auto-style3">Buyer Name:
                            <asp:Label ID="Label9" runat="server" Text="Label"></asp:Label>
                            <br />
                            Order Date:<asp:Label ID="Label3" runat="server"></asp:Label>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td class="auto-style5">
                            <table class="auto-style4" style="border-style: 3; border-color: #000000; border-width: 2px;">
                                <tr>
                                    <td class="auto-style6">Buyer Address:<asp:Label ID="Label4" runat="server"></asp:Label>
                                        <asp:Label ID="Label7" runat="server" Text="Label"></asp:Label>
                                        <asp:Label ID="Label8" runat="server" Text="Label"></asp:Label>
                                    </td>
                                    <td class="auto-style8" style="border-width: 3px">Seller Address:&nbsp; Farmers warehouse.</td>
                                </tr>
                            </table>
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
                &nbsp;
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </asp:Panel>
                
        </div>
        <br />
            
    </div>
        </div>
            </section>
        <asp:Button ID="Button1" runat="server" Text="Go Back to Home Page" OnClick="Button1_Click1" />
    </form>
</body>
</html>

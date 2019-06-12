<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs"  Inherits="trial.Login" CodeFile="~/Login.aspx.cs" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="design1/css/bootstrap.min.css" rel="stylesheet" />
    <link href="design1/css/style.css" rel="stylesheet" />
    <link href="design1/css/blue.css" rel="stylesheet" />
    <style type="text/css">
        .login-box {
            width: 400px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px 20px 10px 20px;
        }
    </style>
</head>
<body>
              
         


    <section id="wrapper">
        <div class="login-register" style="background-image: url('design1/images/pexels-photo-1093837.jpeg');">
            <div class="login-box card">
                <div class="card-body">
                    <form class="form-horizontal form-material" id="loginform" runat="server" autocomplete="off">
                        <h3 class="box-title m-b-20">RETAILER & CUSTOMER LOGIN</h3>
                        <div class="form-group" style="margin-bottom:20px;">
                            <div class="col-xs-12">
                                <asp:TextBox ID="TextBox1" runat="server" class="form-control" placeholder="Username" OnTextChanged="TextBox1_TextChanged"></asp:TextBox>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">

                                <asp:TextBox ID="TextBox2" runat="server" TextMode="Password" class="form-control" placeholder="Password" OnTextChanged="TextBox2_TextChanged"></asp:TextBox>
                            </div>
                        </div>

                        <div class="form-group text-center m-t-20"  style="margin-bottom: 25px;">
                            <div class="col-xs-12">
                                <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" Text="Login" OnCommand="Button1_Command" />
                               <%-- <asp:Label ID="Label1" runat="server"></asp:Label>--%>

                            </div>
                            <asp:Label ID="Label1" runat="server"></asp:Label>
                        </div>

                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Don't have an account? <a href="retailerreg.aspx" class="text-info m-l-5"><b>Sign Up</b></a>
                            </div>
                        </div>
                    </form>
                  
                </div>
            </div>
        </div>
    </section>
    <script src="design1/js/jquery.min.js"></script>
    <script src="design1/js/bootstrap.min.js"></script>
    <script src="design1/js/popper.min.js"></script>
    <script src="design1/js/custom.min.js"></script>
</body>
</html>

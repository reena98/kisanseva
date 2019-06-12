<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="farmlog.aspx.cs" Inherits="trial.farmlog" CodeFile="~/farmlog.aspx.cs" %>

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
                        <h3 class="box-title m-b-20">FARMER LOGIN</h3>
                        <div class="form-group" style="margin-bottom:20px;">
                            <div class="col-xs-12">
                                <asp:TextBox ID="txtusername" runat="server" class="form-control" placeholder="Username"></asp:TextBox>
                                             <asp:RequiredFieldValidator ID="RequirerfvusernamedFieldValidator1" runat="server" ControlToValidate="txtusername" ErrorMessage="Required"></asp:RequiredFieldValidator>

                                </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">

                                <asp:TextBox ID="txtpwd" runat="server" TextMode="Password" class="form-control" placeholder="Password"></asp:TextBox>
                                              <asp:RequiredFieldValidator ID="rfvpwd" runat="server" ControlToValidate="txtpwd" ErrorMessage="Required"></asp:RequiredFieldValidator>

                                </div>
                        </div>

                        <div class="form-group text-center m-t-20"  style="margin-bottom: 25px;">
                            <div class="col-xs-12">
                                <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" Text="Login"
                                     />
                               <%-- <asp:Label ID="Label1" runat="server"></asp:Label>--%>

                            </div>
                            <asp:Label ID="Label1" runat="server"></asp:Label>
                        </div>

                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Don't have an account? <a href="farmerreg.aspx" class="text-info m-l-5"><b>Sign Up</b></a>
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

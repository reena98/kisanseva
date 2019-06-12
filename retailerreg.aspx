<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="retailerreg.aspx.cs" CodeFile="~/retailerreg.aspx.cs" Inherits="trial.WebForm3" %>

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
                        <h3 class="box-title m-b-20">RETAILER & CUSTOMER SIGNUP</h3>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <asp:TextBox ID="TextBox1" runat="server" class="form-control" placeholder="Name" Width="293px"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1" ErrorMessage="Required"></asp:RequiredFieldValidator>
                      
                                </div>
                            </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <asp:TextBox ID="TextBox9" runat="server" class="form-control" placeholder="E-Mail" Width="293px"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="TextBox9" ErrorMessage="Required"></asp:RequiredFieldValidator>
                            <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ControlToValidate="TextBox9" ErrorMessage="invalid email" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
                      
                                </div>
                           </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <asp:TextBox ID="TextBox10" runat="server" placeholder="User Name" class="form-control" Width="293px"></asp:TextBox>
                                   <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ControlToValidate="TextBox10" ErrorMessage="Required"></asp:RequiredFieldValidator>

                            </div>
                                                 </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <asp:TextBox ID="TextBox4" runat="server" placeholder="Password" class="form-control" Width="293px" TextMode="Password"></asp:TextBox>
                                       <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="TextBox4" ErrorMessage="Required"></asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="RegularExpressionValidator3" runat="server" ControlToValidate="TextBox4" ErrorMessage="Password should be between 7 to 10 characters" ValidationExpression="^[a-zA-Z0-9'@&.\s]{7,10}$" ></asp:RegularExpressionValidator>
                            </div>
                          </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <asp:TextBox ID="TextBox5" runat="server" placeholder="Confirm Pasword" class="form-control" TextMode="Password" Width="293px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="TextBox5" ErrorMessage="Required"></asp:RequiredFieldValidator>
                            <asp:CompareValidator ID="CompareValidator1" runat="server" ControlToCompare="TextBox4" ControlToValidate="TextBox5" ErrorMessage="pass and confirm not same"></asp:CompareValidator>
                      
                            </div>
                          </div>

                        <div class="form-group">
                            <div class="col-xs-12">
                                <asp:TextBox ID="TextBox8" runat="server" placeholder="Mobile" class="form-control"  Width="293px" TextMode="Phone" MaxLength="10"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator8" ControlToValidate="TextBox8" runat="server" ErrorMessage="Required"></asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="RegularExpressionValidator4" runat="server" ErrorMessage="Invalid number" ValidationExpression="^([7-9]{1})([0-9]{9})$" ControlToValidate="TextBox8"></asp:RegularExpressionValidator>
                                </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-12">
                                <asp:TextBox ID="TextBox7" runat="server" placeholder="Address" class="form-control" Width="293px"  MaxLength="100"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ControlToValidate="TextBox7" ErrorMessage="Required"></asp:RequiredFieldValidator>
                    
                            </div>
                        </div>
                         
                        <div class="form-group text-center m-t-20"  style="margin-bottom: 25px;">
                            <div class="col-xs-12">
                                <asp:Button ID="btnSubmit" runat="server" OnClick="btnSubmit_Click" class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" Text="SignUp" />
                             <%--   <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>--%>

                            </div>
                            <asp:Label ID="Label1" runat="server"></asp:Label>
                        </div>



                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Already have an account? <a href="Login.aspx" class="text-info m-l-5"><b>Login In </b></a>
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

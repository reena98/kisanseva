<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="farmerreg.aspx.cs" Inherits="trial.farmerreg" CodeFile="~/farmerreg.aspx.cs" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="design1/css/bootstrap.min.css" rel="stylesheet" />
    <link href="design1/css/style.css" rel="stylesheet" />
    <link href="design1/css/blue.css" rel="stylesheet" />
    <style type="text/css">
        .login-box {
            width: 560px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px 20px 10px 20px;
        }
    </style>
</head>
<body>
    <section id="wrapper">
        <div class="login-register" style="background-image: url('design1/images/pexels-photo-1093837.jpeg');">
            <div class="login-box card" >
                <div class="card-body">
                    <form class="form-horizontal form-material" id="loginform" runat="server">
                        <h3 class="box-title m-b-20">FARMER SIGNUP</h3>

                        <div class="form-group ">
                            <div class="col-xs-6">
                                <asp:TextBox ID="txtname" runat="server" class="form-control" placeholder="Name"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvname" runat="server" ControlToValidate="txtname" ErrorMessage="Required"></asp:RequiredFieldValidator>

                            </div>
                            <div class="col-xs-6">
                                <asp:TextBox ID="txtage" runat="server" class="form-control" placeholder="Age" ></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvage" runat="server" ControlToValidate="txtage" ErrorMessage="Required"></asp:RequiredFieldValidator>
                                <asp:RangeValidator ID="RangeValidator1"  ControlToValidate="txtage" MinimumValue="18" MaximumValue="100" Type="Integer" runat="server" ErrorMessage="Age should be more than 18 and less than 100"></asp:RangeValidator>
                                </div>
                            <div class="col-xs-6">
                                <asp:TextBox ID="txtexp" runat="server" class="form-control" placeholder="Years of Experience"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvexp" runat="server" ControlToValidate="txtexp" ErrorMessage="Required"></asp:RequiredFieldValidator>

                            </div>
                            <div class="col-xs-6">
                                <asp:DropDownList ID="ddlgender" runat="server" CssClass="form-control">
                                    <asp:ListItem>Male</asp:ListItem>
                                    <asp:ListItem>Female</asp:ListItem>
                                </asp:DropDownList>
                                <asp:RequiredFieldValidator ID="rfvgender" runat="server" ControlToValidate="ddlgender" ErrorMessage="Required"></asp:RequiredFieldValidator>

                            </div>
                            
                           
                            <div class="col-xs-6">
                                <asp:TextBox ID="txtusername" runat="server" placeholder="User Name" MaxLength="15" class="form-control"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvusername" runat="server" ControlToValidate="txtusername" ErrorMessage="Required"></asp:RequiredFieldValidator>

                            </div>
                            <div class="col-xs-6">
                                <asp:TextBox ID="txtpwd" runat="server" placeholder="Password" class="form-control"  TextMode="Password"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvpwd" runat="server" ControlToValidate="txtpwd" ErrorMessage="Required"></asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ControlToValidate="txtpwd" ValidationExpression="^[a-zA-Z0-9'@&.\s]{7,10}$" ErrorMessage="Password should be between 7 and 10 characters only"></asp:RegularExpressionValidator>
                            </div>
                             <div class="col-xs-6">
                                <asp:TextBox ID="txtcpwd" runat="server" placeholder="Confirm Pasword" class="form-control" TextMode="Password"></asp:TextBox>
                                                            <asp:RequiredFieldValidator ID="rfvcpwd" runat="server" ControlToValidate="txtcpwd" ErrorMessage="Required"></asp:RequiredFieldValidator>
                            <asp:CompareValidator ID="revcpwd" runat="server" ControlToCompare="txtpwd" ControlToValidate="txtcpwd" ErrorMessage="password do not match"></asp:CompareValidator>

                            </div>
                             <div class="col-xs-6">
                                <asp:TextBox ID="txtcontactno" runat="server" placeholder="Contact Number" class="form-control" MaxLength="10"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvcontactno" runat="server" ControlToValidate="txtcontactno" ErrorMessage="Required"></asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="revcontactno" runat="server" ControlToValidate="txtcontactno" ErrorMessage="Invalid contact number" ValidationExpression="^([7-9]{1})([0-9]{9})$"></asp:RegularExpressionValidator>

                            </div>
                            <div class="col-xs-12">
                                <asp:TextBox ID="txtaddress" runat="server" placeholder="Address" class="form-control" MaxLength="100"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvaddress" runat="server" ControlToValidate="txtaddress" ErrorMessage="Required"></asp:RequiredFieldValidator>

                            </div>
                        </div>

                    

                        <div class="form-group text-center m-t-20" style="margin-bottom: 25px;">
                            <div class="col-xs-12">
                                <asp:Button ID="btnSubmit" runat="server" OnClick="btnSubmit_Click" class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" Text="Register" />
                                <%--   <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>--%>
                            </div>
                            <asp:Label ID="lblerror" runat="server" ForeColor="Black"></asp:Label>
                        </div>



                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Already have an account? <a href="farmlog.aspx" class="text-info m-l-5"><b>Login In </b></a>
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

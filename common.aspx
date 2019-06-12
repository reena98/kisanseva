<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="common.aspx.cs" Inherits="trial.common" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="Design/css/preload.min.css" rel="stylesheet" />
    <link href="Design/css/style.light-blue-500.min.css" rel="stylesheet" />
    <title></title>
        <style>
        body {
	margin: 0;
	background: url(../main-imgs/pexels-photo-708798.jpeg);
	background-size: cover;
}

.nav {
	width: 100%;
	background: #299540;
	height: 90px;
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
  max-width: 400px;
}

.container img {
  width: 100%;
  height: auto;
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
    padding:20px;
}
.con{
    position:relative;
    text-align:center;
    color:white;
}
.centered{
    position:absolute;
    top:30%;
    left:50%;
    transform:translate(-50%,-50%);
}
            .auto-style1 {
                font-size: xx-large;
            }
            .auto-style2 {
                color: #00CC00;
            }
            .auto-style3 {
                font-size: large;
            }
           
            .column{
                float:left;
                width:50%;
                padding:10px;
                height:300px;
            }
            .row:after{
                content:"";
                display:table;
                clear:both;
            }
            .auto-style4 {
                color: #009933;
            }
            </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
             <div class="nav">
             <h1 class="animated fadeInRight animation-delay-6">
                            Kisan
                            <span>Seva</span>
                        </h1>
                   </div>
            <div class="con">
                <img src="images/sli1.jpg" style="width:100%; height:493px;" />
                <div class="centered">
                    <span class="auto-style1"><strong>100% NATURAL <span class="auto-style2">VEGETABLES</span></strong></span>
                    <hr />
                    <span class="auto-style3">Looking for vegetables and pulses at low price which benefits you and the farmers
                    <br />
                   Have a look at our farm
                    <br />
                    <br />
                </span>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h1 class="auto-style4"><strong>If your a retailer...
                        <br />have a look at the benefits for you</strong></h1>
                    <p class="auto-style3">Ever thought if you could get fresh crops at your doorstep at the present market price. Here is a platform for you to buy crops directly from the farmers.</p>
                    <p class="auto-style3">
                        <asp:Button ID="Button2" runat="server" Text="Login " />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <asp:Button ID="Button3" runat="server" Text="Sign Up" />
                    </p>
                    <p class="auto-style3">&nbsp;</p>
                    <p class="auto-style3">&nbsp;</p>
                    <p class="auto-style3">&nbsp;</p>
                </div>
                 <div class="column">
                    <h1 class="auto-style4"><strong>If your a Farmer...
                        <br />have a look at the benefits for you</strong></h1>
                     <span class="auto-style3">Farmers are the feeders of our country. We have a bunch of benefits for you from a number of schemes and programmes,to buying farming tools from governmental manufactures.<br />
                     <br />
                     </span>
                     <asp:Button ID="Button4" runat="server" Text="Login" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <asp:Button ID="Button5" runat="server" Text="sign up" />
                </div>
            </div>
           
                   

               
                   
                   
        </div>
    </form>
</body>
</html>

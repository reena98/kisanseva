<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="farmerhome.aspx.cs" Inherits="trial.Farmer.farmerhome" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
         <style>
        body {
	margin: 0;
	background-image: url("~/images/pexels-photo-708798.jpeg");
	background-size: cover;
}

.nav {
	width: 100%;
	background: #3da4a5;
	height: 70px;
	opacity: 0.9;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
	position: absolute;
        top:101px;
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
    color:black;
    padding:20px;
}
         </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            
                  <h1 class="animated fadeInRight animation-delay-6">
                            Kisan
                            <span>Seva</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome
                            <asp:Label ID="Label1" runat="server"></asp:Label>
                        </h1>
                   </div>
               
                <div class="nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                         <li><a href="schemes.aspx">Programmes & Schemes</a></li>
                         <li><a href="#">Tutorials</a></li>
                         <li><a href="#">Crops Posted</a></li>
          
                         <li><a href="Farmer%20prod.aspx">Sell Crops</a></li>
                         <li><a href="#">Buy Tools</a></li>
                         <li><a href="#">Profile</a></li>
                          <li><a href="#">Weather Reports</a></li>
                       <li> <asp:Button ID="logout" runat="server" Text="LogOut" OnClick="logout_Click" style="height: 29px" />
                    </li></ul>
        </div>
    </form>
</body>
</html>

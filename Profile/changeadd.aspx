<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="changeadd.aspx.cs" Inherits="project.changeadd" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    
    <link href="css/my-account.css" rel="stylesheet" />
    <script src="js/jquery.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            
        <div class="uiv2-myaccount-wrapper"><input type="hidden" value="{&quot;EventName&quot;:&quot;MyAccount_Shown&quot;, &quot;ScreenType&quot;:&quot;myaccount&quot;, &quot;PageTemplate&quot;:&quot;default&quot;}" data-scrv="ScreenViews"><input type="hidden" value="MicroInteractionPlower" id="secondarySnowPlowers">
            <!--begin Left Column --><div class="uiv2-left-nav-container">
                <div class="uiv2-left-nav-block">
                    <a href="/member/" id="link-my-account" class="main" qa="myAccountLink">MY ACCOUNT</a><ul><li>
                        <a href="editprof.aspx" id="link-personal-details" qa="personalDetail">Personal Details</a><ul><li>
                            <a id="link-edit-profile" href="editprof.aspx" qa="editProfile">- Edit Profile</a></li><li>
                                <a href="address.aspx" id="link-delivery-addresses" qa="addressDelivery">- Delivery Addresses</a></li><li>
                                    <a href="changep.aspx" id="link-change-passwd" qa="changePswd">- Change Password</a></li></ul></li>
                        <li><a title="Shop From" qa="shopFrom">Shop From</a></li>
                            <ul>
                                <li><a href="/shopping-lists/?nc=ma" target="_blank" qa="shopList">- Shopping List</a></li>
                                <li><a href="/order/previous-orders/?nc=ma" target="_blank" qa="previousOrders">- Past Order</a></li>
                                                <!-- Commenting this as part of BB-33475 --><!--<li><a href="/member/recommendations/?nc=ma" target="_blank" qa="recomProd">- Recommended Products</a></li>-->
                            </ul>
                        <li><a href="/member/active-orders/" id="link-my-orders" qa="myOrders">My Orders</a></li>
                        <li><a qa="self-service" href="/member/self-service/" id="self_service">Customer Service</a></li>
                        <li><a href="/member/address-book/" id="link-referral" qa="locateMap">Locate On Map</a></li>
                        <li><a href="/member/notifications/" id="link-view-notifications" qa="alerts">Alerts &amp; Notification</a></li>
                    </ul>
                </div></div><!--end Left Column --><!--begin Right Column --><div class="auto-style1"><div class="uiv2-profile-details-header"><div class="uiv2-profile-details-span uiv2-mar-rt-8">Address Details</div><input type="hidden" value="{&quot;EventName&quot;:&quot;MyAccount_Shown&quot;, &quot;ScreenType&quot;:&quot;myaccount&quot;, &quot;PageTemplate&quot;:&quot;default&quot;}" data-scrv="ScreenViews"></div><div class="uiv2-profile-details-wrapper"><!--end Right Column --></div>
     <fieldset><div class="legend">
                    <asp:Label ID="Label1" runat="server" Text="Name:"></asp:Label>
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                <br />
                <asp:Label ID="Label2" runat="server" Text="Contact No:"></asp:Label>
                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                    <br />
                    Current Address:<asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                <br />
                Enter New Address:<asp:TextBox ID="radd" runat="server"></asp:TextBox>
                <br />
                    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click1" Text="Button" />
                    <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
                </div></div></div><!--end Right Column --></div>
    </form>
</body>
</html>

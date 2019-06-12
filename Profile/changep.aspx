<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="changep.aspx.cs" Inherits="project.changep" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    
    <link href="css/my-account.css" rel="stylesheet" />
    <script src="js/jquery.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <input type="hidden" value="{&quot;EventName&quot;:&quot;MyAccount_Shown&quot;, &quot;ScreenType&quot;:&quot;myaccount&quot;, &quot;PageTemplate&quot;:&quot;default&quot;}" data-scrv="ScreenViews">
        <div>
            
        <div class="uiv2-myaccount-wrapper"><input type="hidden" value="{&quot;EventName&quot;:&quot;MyAccount_Shown&quot;, &quot;ScreenType&quot;:&quot;myaccount&quot;, &quot;PageTemplate&quot;:&quot;default&quot;}" data-scrv="ScreenViews"><input type="hidden" value="MicroInteractionPlower" id="secondarySnowPlowers">
            <!--begin Left Column --><div class="uiv2-left-nav-container">
                <div class="uiv2-left-nav-block">
                    <a href="/member/" id="link-my-account" class="main" qa="myAccountLink">MY ACCOUNT</a><ul><li>
                        <a href="first.aspx" id="link-personal-details" qa="personalDetail">Personal Details</a><ul><li>
                            <a id="link-edit-profile" href="editprof.aspx" qa="editProfile">- Edit Profile</a></li><li>
                                <a href="changeadd.aspx" id="link-delivery-addresses" qa="addressDelivery">- Delivery Addresses</a></li><li>
                                    <a href="changep" id="link-change-passwd" qa="changePswd">- Change Password</a></li></ul></li>
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
                </div></div><!--end Left Column --><!--begin Right Column --><div class="auto-style1">
                    </div>
        <input type="hidden" name="csrfmiddlewaretoken" value="jNw0MMjcEJId4m2tlCtN9NJgTogHUygo318V5RSxhNrmdionzFsU3xbnTXlsG2rV"><fieldset><div class="legend">Change Password</div><div class="uiv2-form-row"><span class="uiv2-form-label" style="font-size:13px">Old Password </span><div class="uiv2-form-input">
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <span class="uiv2-field-required">*</span></div></div><div class="uiv2-form-row"><span class="uiv2-form-label" style="font-size:13px">New Password </span><div class="uiv2-form-input">
                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                <span class="uiv2-field-required">*</span><div class="password-meter" style="display: none;"><div class="password-meter-message">&nbsp;</div><div class="password-meter-bg"><div class="password-meter-bar"></div></div></div></div></div><div class="uiv2-form-row"><span class="uiv2-form-label" style="font-size:13px">Confirm Password </span><div class="uiv2-form-input">
            <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
            <span class="uiv2-field-required">*</span></div></div></fieldset><div class="uiv2-form-button-wrapper"><div class="uiv2-push-left">
            <asp:Button ID="Button1" runat="server" Text="Update" />
            </div>
                <asp:Button ID="Button2" runat="server" Text="Cancel" />
            </div>
    </form>
    </form>
</body>
</html>

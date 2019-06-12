<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="first.aspx.cs" Inherits="project.first" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="css/my-account.css" rel="stylesheet" />
    <script src="js/jquery.min.js"></script>
    <title></title>

</style>
    <style type="text/css">
        .auto-style1 {
            padding: 0 0 65px 25px;
            float: left;
            height: auto;
            min-height: 600px;
            max-height: 100%;
            border-left: 1px solid #dbdbdb;
            width: 642px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
     

        <div class="uiv2-myaccount-wrapper">rr<input type="hidden" value="{&quot;EventName&quot;:&quot;MyAccount_Shown&quot;, &quot;ScreenType&quot;:&quot;myaccount&quot;, &quot;PageTemplate&quot;:&quot;default&quot;}" data-scrv="ScreenViews"><input type="hidden" value="MicroInteractionPlower" id="secondarySnowPlowers"><!--begin Left Column --><div class="uiv2-left-nav-container">
                <div class="uiv2-left-nav-block">
                    <a href="/member/" id="link-my-account" class="main" qa="myAccountLink">MY ACCOUNT</a><ul><li>
                        <a href="editprof.aspx" id="link-personal-details" qa="personalDetail">Personal Details</a><ul><li>
                            <a id="link-edit-profile" href="editprof.aspx" qa="editProfile">- Edit Profile</a></li><li>
                                <a href="changeadd.aspx" id="link-delivery-addresses" qa="addressDelivery">- Delivery Addresses</a></li><li>
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
                </div></div><!--end Left Column --><!--begin Right Column --><div class="auto-style1"><div class="uiv2-profile-details-header"><div class="uiv2-profile-details-span uiv2-mar-rt-8">Profile Details</div><input type="hidden" value="{&quot;EventName&quot;:&quot;MyAccount_Shown&quot;, &quot;ScreenType&quot;:&quot;myaccount&quot;, &quot;PageTemplate&quot;:&quot;default&quot;}" data-scrv="ScreenViews"></div><div class="uiv2-profile-details-wrapper"><div class="uiv2-profile-details-block">
                <div class="uiv2-user-details">
                    <asp:DetailsView ID="DetailsView1" runat="server" AutoGenerateRows="False" DataSourceID="SqlDataSource1" Height="50px" Width="125px">
                        <Fields>
                            <asp:BoundField DataField="rname" HeaderText="rname" SortExpression="rname" />
                            <asp:BoundField DataField="remail" HeaderText="remail" SortExpression="remail" />
                            <asp:BoundField DataField="rcontact" HeaderText="rcontact" SortExpression="rcontact" />
                        </Fields>
                    </asp:DetailsView>
                    <span class="uiv2-change-passwd"><a href="changep.aspx" qa="changePswdLinkMA">CHANGE PASSWORD</a></span></div></div></div><div class="uiv2-myorders-wrapper uiv2-unset-width-min-ht"><div class="uiv2-myorders-block"><h5><a href="/member/active-orders/" qa="myOrdersLinkMA">My Orders</a></h5><p class="uiv2-para-text uiv2-mar-top-20">You haven't placed any order yet,
            <a href="/" qa="startShopMA">Start Shopping!

            </a></p></div></div></div><!--end Right Column -->
            <br />
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT [rname], [remail], [rcontact] FROM [Register] WHERE ([ruser] = @ruser)">
                <SelectParameters>
                    <asp:SessionParameter Name="ruser" SessionField="username" Type="String" />
                </SelectParameters>
            </asp:SqlDataSource>
        </div>
       
    </form>
</body>
</html>

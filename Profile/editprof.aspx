<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="editprof.aspx.cs" Inherits="project.editprof" %>

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
            

        <div class="uiv2-myaccount-wrapper">s<input type="hidden" value="{&quot;EventName&quot;:&quot;MyAccount_Shown&quot;, &quot;ScreenType&quot;:&quot;myaccount&quot;, &quot;PageTemplate&quot;:&quot;default&quot;}" data-scrv="ScreenViews"><input type="hidden" value="MicroInteractionPlower" id="secondarySnowPlowers"><!--begin Left Column --><div class="uiv2-left-nav-container">
                <div class="uiv2-left-nav-block">
                    <a href="#" id="link-my-account" class="main" qa="myAccountLink">MY ACCOUNT</a><ul><li>
                        <a href="first.aspx" id="link-personal-details" qa="personalDetail">Personal Details</a><ul><li>
                            <a id="editprof.aspx" href="/member/profile/edit/" qa="editProfile">- Edit Profile</a></li><li>
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
                    </ul>
                </div></div><!--end Left Column --><!--begin Right Column -->
            <div class="uiv2-myaccount-right-col"><div class="uiv2-profile-details-header"><span class="uiv2-profile-details-span">Edit Profile Details</span></div>
        </div>
        <input type="hidden" name="csrfmiddlewaretoken" value="mHExYRucCGlQ5T3u62HOb9OkuDWhgtg26iv9m7tnAffLg2MyTSmF1h5hi0TbQupw"><fieldset><div class="legend">Personal Details</div><div class="uiv2-form-row"><br></div><!-- other area field check --><div class="uiv2-form-row">Full<span class="uiv2-form-label"><label for="id_first_name"> Name:</label><span class="uiv2-field-required">*</span></span><div class="uiv2-form-input">
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            </div>
                <br></div>
                <!-- other area field check --><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_email">Email Address:</label><span class="uiv2-field-required">*</span></span><div class="uiv2-form-input">
            <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
            </div><br></div><!-- other area field check --><div class="uiv2-form-row"><br></div><!-- other area field check --><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_mobile_no">Mobile Number:</label><span class="uiv2-field-required">*</span></span><div class="uiv2-form-input"><span class="uiv2-input-prepend" style="margin-left: 20px;">+91</span><asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                </div>
                <br></div>
                <!-- other area field check --></fieldset><fieldset style="display: none;"><div class="legend">Address Details</div><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_address1">House no &amp; Details:</label></span><div class="uiv2-form-input"><span><input type="text" name="address1" value="SWTFSEGT" id="id_address1" size="30" autocomplete="false"></span></div><br></div><!-- other area field check --><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_address2">Street Details:</label></span><div class="uiv2-form-input"><span><input type="text" name="address2" value="GTZWE" id="id_address2" size="30" autocomplete="false"></span></div><br></div><!-- other area field check --><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_zipcode">Pin Code:</label></span><div class="uiv2-form-input"><span><span class="twitter-typeahead" style="position: relative; display: inline-block;"><input type="text" value="400607" autocomplete="off" maxlength="6" size="15" onkeypress="return isNumberKey(event)" class="tt-hint" readonly="" spellcheck="false" tabindex="-1" dir="ltr" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"><input type="text" name="zipcode" value="400607" autocomplete="off" id="id_zipcode" maxlength="6" size="15" onkeypress="return isNumberKey(event)" class="tt-input" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Arial; font-size: 13.3333px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><div class="uiv2_pincode_menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;"><div class="tt-dataset tt-dataset-0"></div></div></span></span></div><br></div><!-- other area field check --><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_area">Area:</label></span><div class="uiv2-form-input"><span><span class="twitter-typeahead" style="position: relative; display: inline-block;"><input type="text" value="400607" autocomplete="off" size="30" class="tt-hint" readonly="" spellcheck="false" tabindex="-1" dir="ltr" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"><input type="text" name="area" value="400607" autocomplete="off" id="id_area" size="30" class="tt-input" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Arial; font-size: 13.3333px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><div class="uiv2_pincode_menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;"><div class="tt-dataset tt-dataset-1"></div></div></span></span><span id="area_options"></span></div><br></div><!-- other area field check --><div class="uiv2-form-row" id="other_area_row" style="display:none;"><span class="uiv2-form-label"></span><div class="uiv2-form-input"><input type="text" name="other_area" placeholder="Enter your area name" id="id_other_area" size="30" autocomplete="false"><span class="uiv2-err-text" id="error_other_area"></span></div></div><!-- other area field check --><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_residential_complex">Residential Complex:</label></span><div class="uiv2-form-input"><span><span class="twitter-typeahead" style="position: relative; display: inline-block;"><input type="text" size="30" autocomplete="off" class="tt-hint" readonly="" spellcheck="false" tabindex="-1" dir="ltr" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"><input type="text" name="residential_complex" id="id_residential_complex" size="30" autocomplete="off" class="tt-input" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Arial; font-size: 13.3333px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><div class="uiv2_pincode_menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;"><div class="tt-dataset tt-dataset-2"></div></div></span></span></div><br></div><!-- other area field check --><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_landmark">Landmark:</label></span><div class="uiv2-form-input"><span><input type="text" name="landmark" value="WTG" id="id_landmark" size="30" autocomplete="false"></span></div><br></div><!-- other area field check --><div class="uiv2-form-row"><span class="uiv2-form-label"><label for="id_city">City:</label><span class="uiv2-field-required">*</span></span><div class="uiv2-form-input"><span class="uiv2-push-left"><select name="city" id="id_city" disabled="" style="color: rgb(105, 105, 105);"><option value="1">Bangalore</option><option value="3">Hyderabad</option><option value="4" selected="">Mumbai</option><option value="5">Pune</option><option value="6">Chennai</option><option value="9">Delhi</option><option value="10">Mysore</option><option value="12">Coimbatore</option><option value="13">Vijayawada-Guntur</option><option value="14">Kolkata</option><option value="15">Ahmedabad-Gandhinagar</option><option value="17">Lucknow-Kanpur</option><option value="18">Gurgaon</option><option value="19">Vadodara</option><option value="20">Visakhapatnam</option><option value="21">Surat</option><option value="22">Nagpur</option><option value="23">Patna</option><option value="24">Indore</option><option value="26">Chandigarh Tricity</option><option value="27">Jaipur</option><option value="29">Bhopal</option><option value="31">Noida-Ghaziabad</option></select></span><span class="uiv2-push-left"><!-- <a href="javascript://" id="uiv2-pin-help"
                                 class="icon icon-question-mark uiv2-question-mark-icon-light" onclick="togglePopUp();"
                                 onmouseover="showPopUp()"></a> --><script type="text/javascript"></script><div class="uiv2-small-pop-up" id="small_popup_pin_info"><span class="uiv2-pop-up-pointer"></span><div class="uiv2-div100"><div class="uiv2-div20"><span class="icon icon-bulb-pop-up uiv2-push-left"></span></div><div class="uiv2-div80"><span class="uiv2-pop-up-text">
                                              Currently we serve the cities - 
                                               Bangalore,  
                                               Hyderabad,  
                                               Mumbai,  
                                               Pune,  
                                               Chennai,  
                                               Delhi,  
                                               Mysore,  
                                               Coimbatore,  
                                               Vijayawada-Guntur,  
                                               Kolkata,  
                                               Ahmedabad-Gandhinagar,  
                                               Lucknow-Kanpur,  
                                               Gurgaon,  
                                               Vadodara,  
                                               Visakhapatnam,  
                                               Surat,  
                                               Nagpur,  
                                               Patna,  
                                               Indore,  
                                               Chandigarh Tricity,  
                                               Jaipur,  
                                               Bhopal,  
                                               and Noida-Ghaziabad  .
                                              <br><br>
                                              Once registered, the delivery city on the account cannot be changed.
                                              In case you relocate a new city you will have to register afresh e.g.
                                              if you have registered in Bangalore city and if you relocate to Hyderabad,
                                              you will have to register afresh in Hyderabad with your Hyderabad address.
                                              <br><br>
                                              Also if you are registered in one city and would like us to deliver
                                              in other cities you will have to register in each city with a different
                                              email id and the delivery address in that city.
                                          </span></div></div></div></span></div><br></div><!-- other area field check --></fieldset><div class="uiv2-form-row"><div class="uiv2-form-input"><span><input type="hidden" name="location" id="id_location" value=""></span></div><br></div><!-- other area field check --><div class="uiv2-form-button-wrapper">
        <asp:Button ID="Button1" runat="server" Text="save changes" OnClick="Button1_Click" />
            <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
            </div>
    </form>
    </div>

    </form>
</body>
</html>

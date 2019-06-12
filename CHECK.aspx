<%@ Page Title="" Language="C#" MasterPageFile="~/Homepage.Master" AutoEventWireup="true" CodeBehind="CHECK.aspx.cs" Inherits="trial.CHECK" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="viewport" content="width=device-width">
   
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="middlebar" runat="server">
     <form action="/purchase" method="POST">
         
<!-- Note that the amount is in its subunit value = 599 -->
<script
    src="https://checkout.razorpay.com/v1/checkout.js"
    data-key="rzp_test_LTLdsBwZF4LTyu"
    data-amount="59900" // The amount is shown in currency subunits. Actual amount is ₹599.
    data-order_id="123456" // Pass the order ID if you are using Razorpay Orders.
    data-currency="INR" // Optional. Same as Order currency
    data-buttontext="Pay with Razorpay"
    data-name="Merchant Name"
    data-description="Purchase Description"
    data-image="https://your-awesome-site.com/your_logo.jpg"
    data-prefill.name="Rlston"
    data-prefill.email="test@test.com"
    data-theme.color="#F37254"
></script>
<input type="hidden" value="Hidden Element" name="hidden">
</form>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Collections" runat="server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="customerService" runat="server">
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="footer" runat="server">
</asp:Content>

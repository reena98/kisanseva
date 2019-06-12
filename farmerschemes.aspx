<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" AutoEventWireup="true" CodeBehind="farmerschemes.aspx.cs" Inherits="trial.farmerschemes" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .auto-style1 {
            color: #000000;
            font-size: x-large;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <p class="auto-style1"> Programmes And Schemes</p><hr />
    <p>
        1.<asp:HyperLink ID="HyperLink1" runat="server">Agricultural Marketing</asp:HyperLink>
        <br />
          2.<asp:HyperLink ID="HyperLink2" runat="server">Rashtriya Krishi Vikas Yojhna</asp:HyperLink>
          3.<asp:HyperLink ID="HyperLink3" runat="server">Rainfed Farming Systmem</asp:HyperLink>
          4.<asp:HyperLink ID="HyperLink4" runat="server"></asp:HyperLink>
    </p>
</asp:Content>

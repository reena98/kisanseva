<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" AutoEventWireup="true" CodeBehind="cropsposted.aspx.cs" Inherits="trial.cropsposted" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    
            <asp:DataList ID="DataList1" runat="server" RepeatColumns="4"
                RepeatDirection="Horizontal" OnItemCommand="DataList1_ItemCommand" OnItemDataBound="DataList1_ItemDataBound"
                OnUpdateCommand="DataList1_UpdateCommand">
                <ItemTemplate>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail store style3">
                            <div class="header">

                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("productimage") %>' Width="400" Height="200" />

                                    </a>
                                    &nbsp;
                                </figure>

                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">
                                   
                                    <asp:Label ID="lblProductId" runat="server" Text='<%# Eval("productid") %>'  Visible="false"></asp:Label>
                                    <asp:Label ID="lblProductName" runat="server" Text='<%# Eval("productname") %>'></asp:Label></a></h6>
                                <div class="price">
                                    <span class="amount text-primary">
                                        <i class=" fa fa-rupee"></i>
                                        <asp:Label ID="lblPrice" runat="server" Text='<%# Eval("price") %>'></asp:Label></span>
                                </div>
                            </div>
                            <!-- end caption -->
                        </div>
                    </div>
                </ItemTemplate>
            </asp:DataList>

</asp:Content>

<%@ Page Title="" Language="C#" MasterPageFile="~/Farmer/Site1.Master" AutoEventWireup="true" CodeBehind="mainpage.aspx.cs" Inherits="trial.Farmer.homefarm" CodeFile="~/Farmer/mainpage.aspx.cs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <asp:DataList ID="DataList1" runat="server" OnSelectedIndexChanged="DataList1_SelectedIndexChanged" RepeatColumns="4"
                RepeatDirection="Horizontal" OnItemCommand="DataList1_ItemCommand" OnItemDataBound="DataList1_ItemDataBound"
                OnUpdateCommand="DataList1_UpdateCommand">
                <ItemTemplate>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail store style3">
                            <div class="header">

                                <figure class="layer">
                                    <a href="javascript:void(0);">
                                        <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("Image") %>' Width="400" Height="200" />

                                    </a>
                                    &nbsp;
                                </figure>

                            </div>
                            <div class="caption">
                                <h6 class="regular"><a href="shop-single-product-v1.html">
                                    <asp:Label ID="lblProductId" runat="server" Text='<%# Eval("productid") %>'></asp:Label>
                                    <asp:Label ID="lblProductName" runat="server" Text='<%# Eval("Name") %>'></asp:Label></a></h6>
                                <div class="price">
                                    <span class="amount text-primary">
                                        <i class=" fa fa-rupee"></i>
                                        <asp:Label ID="lblPrice" runat="server" Text='<%# Eval("Price") %>'></asp:Label></span>
                                </div>
                                <asp:DropDownList ID="DropDownList1" runat="server" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged" CssClass="form-control">
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                    <asp:ListItem>4</asp:ListItem>
                                    <asp:ListItem>5</asp:ListItem>
                                    <asp:ListItem></asp:ListItem>
                                </asp:DropDownList>
</div>
                            <div class="caption" style="text-align: center; padding-bottom: 10px;">

                                <asp:Button ID="btnaddcart" runat="server" CommandName="viewcart" Text="Add to Cart" CssClass="btn btn-default btn-md round"
                                    CommandArgument='<%#Eval("productid")%>' OnClick="btnaddcart_Click1" />
                            </div>
                            <!-- end caption -->
                        </div>
                    </div>
                </ItemTemplate>
            </asp:DataList>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    <br />
    <br />
    <br />
</asp:Content>

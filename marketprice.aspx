<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" CodeFile="~/marketprice.aspx.cs" AutoEventWireup="true" CodeBehind="marketprice.aspx.cs" Inherits="trial.marketprice" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        .headersblue {
            color: #1e88e5;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <section class="section white-background">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-wrap">
                        <h2 class="title"><span class="text-primary">Market </span>Price</h2>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row column-4">
                <p>
                    <span class="headersblue">Objectives</span>


                </p>
                <p>To provide the farmers with the knowledge of whats the price going on in the market for particular crops.This way farmers won't have to stay unaware of the price thats going around in the market.


                </p>
                <br />
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <asp:Label ID="Label5" runat="server" Text="State"></asp:Label>
                            <asp:DropDownList ID="DropDownList2" runat="server" CssClass="form-control">
                                <asp:ListItem Enabled="False">Select</asp:ListItem>
                                <asp:ListItem>Maharashtra</asp:ListItem>
                            </asp:DropDownList>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <asp:Label ID="Label7" runat="server" Text="District"></asp:Label>
                            <asp:DropDownList ID="DropDownList3" runat="server" CssClass="form-control">
                                <asp:ListItem Enabled="False">Select</asp:ListItem>
                                <asp:ListItem>Thane</asp:ListItem>
                            </asp:DropDownList>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <asp:Label ID="Label6" runat="server" Text="Market"></asp:Label>
                            <asp:DropDownList ID="DropDownList4" runat="server" CssClass="form-control">
                                <asp:ListItem Enabled="False">Select</asp:ListItem>
                                <asp:ListItem>Vasai</asp:ListItem>
                                <asp:ListItem>Kalyan</asp:ListItem>
                            </asp:DropDownList>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <asp:Label ID="Label8" runat="server" Text="Commodity"></asp:Label>
                            <asp:DropDownList ID="DropDownList5" runat="server"
                                OnSelectedIndexChanged="DropDownList5_SelectedIndexChanged" CssClass="form-control">
                                <asp:ListItem Enabled="False">Select</asp:ListItem>
                                <asp:ListItem>Rice</asp:ListItem>
                                <asp:ListItem>Wheat</asp:ListItem>
                                <asp:ListItem>Peas Wet</asp:ListItem>
                            </asp:DropDownList>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align: center; margin-top: 20px; margin-bottom: 20px;">

                            <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click" CssClass="btn btn-default btn-md round" />
                        </div>

                    </div>
                    <br />
                    <div class="row">
                        <div class="col-sm-12">

                            <div class="table-responsive">
                                <asp:GridView ID="GridView3" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" CellPadding="1" CellSpacing="1" CssClass="table table-striped" AllowPaging="true">
                                    <Columns>
                                        <asp:BoundField DataField="description" HeaderText="Description" SortExpression="description" />
                                    </Columns>
                                </asp:GridView>
                                <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" SelectCommand="SELECT [description] FROM [market] WHERE (([state] = @state) AND ([district] = @district) AND ([market] = @market) AND ([commodity] = @commodity))">
                                    <SelectParameters>
                                        <asp:ControlParameter ControlID="DropDownList2" Name="state" PropertyName="SelectedValue" Type="String" />
                                        <asp:ControlParameter ControlID="DropDownList3" Name="district" PropertyName="SelectedValue" Type="String" />
                                        <asp:ControlParameter ControlID="DropDownList4" Name="market" PropertyName="SelectedValue" Type="String" />
                                        <asp:ControlParameter ControlID="DropDownList5" Name="commodity" PropertyName="SelectedValue" Type="String" />
                                    </SelectParameters>
                                </asp:SqlDataSource>
                            </div>
                        </div>
                    </div>


                </div>
                <!-- end row -->

            </div>
        </div>
        <!-- end container -->
    </section>

</asp:Content>

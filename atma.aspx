<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" CodeFile="~/atma.aspx.cs" AutoEventWireup="true" CodeBehind="atma.aspx.cs" Inherits="trial.atma" %>

<%@ Register Assembly="System.Web.DataVisualization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" Namespace="System.Web.UI.DataVisualization.Charting" TagPrefix="asp" %>
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
                        <h2 class="title"><span class="text-primary">ATMA   </span>Dashboard</h2>
                        <p>
                            Agriculture Technology Management Agency(ATMA) is a registered society at the district level  which provides training to the farmers on agriculture and related subjects.
                            It als takes care  about farm schools amd centers.
                            The below chart depicts the various things that took place in Maharashtra and Karnataka.
                        </p>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row column-4">
                <p>
                    <span class="headersblue">FINANCIAL YEAR:&nbsp;&nbsp; 2018-19</span>


                </p>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <asp:Label ID="Label5" runat="server" Text="STATE"></asp:Label>
                            <asp:DropDownList ID="DropDownList2" runat="server" AutoPostBack="True" CssClass="form-control">
                                <asp:ListItem Enabled="False">Select</asp:ListItem>
                                <asp:ListItem>Maharashtra</asp:ListItem>
                                <asp:ListItem>Karnataka</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>
                </div>

                <br />
                <p class="headersblue">
                    Physical Progress
                </p>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">

                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="table-responsive" style="text-align: center;">

                                <asp:GridView ID="GridView3" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" class="table table-striped">
                                    <Columns>
                                        <asp:BoundField DataField="ATMA_activities" HeaderText="ATMA_activities" SortExpression="ATMA_activities" />
                                        <asp:BoundField DataField="Numbers" HeaderText="Numbers" SortExpression="Numbers" />
                                    </Columns>
                                </asp:GridView>
                            </div>
                            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" OnSelecting="SqlDataSource1_Selecting" SelectCommand="SELECT [ATMA_activities], [Numbers] FROM [atma] WHERE ([state] = @state)">
                                <SelectParameters>
                                    <asp:ControlParameter ControlID="DropDownList2" Name="state" PropertyName="SelectedValue" Type="String" />
                                </SelectParameters>
                            </asp:SqlDataSource>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <asp:Chart ID="Chart1" runat="server" DataSourceID="SqlDataSource1" Height="283px" Width="655px">
                                <Series>
                                    <asp:Series Name="Series1" XValueMember="ATMA_activities" YValueMembers="Numbers">
                                    </asp:Series>
                                </Series>
                                <ChartAreas>
                                    <asp:ChartArea Name="ChartArea1">
                                    </asp:ChartArea>
                                </ChartAreas>
                            </asp:Chart>
                        </div>
                    </div>
                </div>
                <br />

            </div>
        </div>
        <!-- end container -->
    </section>


</asp:Content>

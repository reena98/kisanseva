<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" CodeFile="~/regpest.aspx.cs" AutoEventWireup="true" CodeBehind="regpest.aspx.cs" Inherits="trial.regpest" %>

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
                        <h2 class="title"><span class="text-primary">Registered    </span>Pesticides</h2>
                        <p>A registered list of pesticides is available when you search for a particular crop here.</p>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row column-4">

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">

                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <asp:Label ID="Label5" runat="server" Text="Enter the Crop Name or part of the Name (starting with)"></asp:Label><br />
                            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                            <asp:Button ID="Button1" runat="server" CssClass="btn btn-default btn-md round" OnClick="Button1_Click" Text="Search" />

                        </div>
                    </div>
                </div>

                <br />

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">

                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="table-responsive">
                                <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" class="table table-striped">
                                    <Columns>
                                        <asp:BoundField DataField="Type" HeaderText="Type" SortExpression="Type" />
                                        <asp:BoundField DataField="Pesticide_Name" HeaderText="Pesticide_Name" SortExpression="Pesticide_Name" />
                                        <asp:BoundField DataField="column1" HeaderText="column1" SortExpression="column1" />
                                        <asp:BoundField DataField="Toxicity" HeaderText="Toxicity" SortExpression="Toxicity" />
                                    </Columns>
                                </asp:GridView>
                               
                            </div>
                            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" SelectCommand="SELECT [Type], [Pesticide_Name], [Shelf_life(years/months)] AS column1, [Toxicity] FROM [reg_pest] WHERE ([category] LIKE '%' + @category + '%')">
                                <SelectParameters>
                                    <asp:ControlParameter ControlID="TextBox1" Name="category" PropertyName="Text" Type="String" />
                                </SelectParameters>
                            </asp:SqlDataSource>
                        </div>

                    </div>
                </div>
                <br />

            </div>
        </div>
        <!-- end container -->
    </section>

</asp:Content>

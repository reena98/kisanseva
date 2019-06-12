<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" AutoEventWireup="true" CodeFile="~/majorschemes.aspx.cs" CodeBehind="majorschemes.aspx.cs" Inherits="trial.majorschemes" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="section white-background">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-wrap">
                            <div class="row column-4">
                <p>
                    <span class="headersblue">Objectives</span>


                </p>
                <p>These are some of the major schemes provided by the government for the knowledge of the farmers.

                </p>
                <br />
                                </div>
                        <h2 class="title"><span class="text-primary">Major Ministry  </span>Schemes</h2>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row column-4">

                <div class="table-responsive">
                    <table class="table table-striped" >
                        <thead>
                            <tr>
                                <td>Schemes</td>
                                <td>Links</td>
                               
                            </tr>
                        </thead>
                        <tr>
                            <td>ATMA(Agriculture Technology Management Agency)</td>
                            <td>
                                <asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click">Link</asp:LinkButton></td>

                        </tr>
                        <tr>
                            <td>Online Pesticide Registration</td>
                            <td>
                                <asp:LinkButton ID="LinkButton2" runat="server" OnClick="LinkButton2_Click">Link</asp:LinkButton>
                            </td>

                        </tr>
                        <tr>
                            <td>Kisan Call Center</td>
                            <td>
                                <asp:LinkButton ID="LinkButton3" runat="server" OnClick="LinkButton3_Click">Link</asp:LinkButton>
                            </td>

                        </tr>
                       
                    </table>
                </div>

            </div>
            <!-- end row -->


        </div>
        <!-- end container -->
    </section>


</asp:Content>

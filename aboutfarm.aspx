<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master"  AutoEventWireup="true" CodeFile="~/aboutfarm.aspx.cs" CodeBehind="aboutfarm.aspx.cs" Inherits="trial.aboutfarm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
       <section class="section white-backgorund">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7 vertical-align">
                        <h2 class="title">About Kisan Seva</h2>
                        <p>Kisan Seva is a government assisted platform which connects farmers,customers and retailers directly.Our Retailers and customers are greatly benefitted beacuse they don't have to search around for purchasing produce at low cost and good quality.
                            We provide an easy way to shop at the correct market price infact even lower than the market price as the products are directly sent from farmers warehouse. The quality of the goods will be the best.

                        </p>
                   </div> <div class="col-sm-5 vertical-align">
                        <figure class="zoom-in">
                            <img src="img/grains.jpeg" />
                           
                        </figure>
                    </div><!-- end col -->
                </div><!-- end row -->
                
                <hr class="spacer-100">
                
                <div class="row">
                   <%-- <div class="col-sm-5 vertical-align">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/NrmMk1Myrxc"></iframe>
                        </div>--%>
                    </div><!-- end col -->
                    <div class="col-sm-7 vertical-align">
                        <h2 class="title">Our Mission</h2>
                        <p>Our Mission is to help farmers get the correct price for their produce thereby eliminating middlemen cost.The retailer and customer also gets benefit by getting fresh produce. The farmers not only can sell their produce but can also register for various schemes. </p>
                        <hr class="spacer-10 no-border">
                        
                        <h6 class="regular">Features:</h6>
                        <ul class="list alt-list">
                            <li><i class=""></i> Buy</li>
                            <li><i class="fa fa-hand-grab-o"></i> Sell</li>
                            <li><i class="fa fa-hand-grab-o"></i> Donate</li>
                            <li><i class="fa fa-hand-grab-o"></i> Schemes</li>
                            <li><i class="fa fa-hand-grab-o"></i> Know Pesticides</li>
                        </ul>
                    </div><!-- end col -->
                </div><!-- end row -->
                
                <hr class="spacer-100">
                
            </div><!-- end container -->
        </section>
     
</asp:Content>

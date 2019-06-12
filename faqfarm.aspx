<%@ Page Title="" Language="C#" MasterPageFile="~/Farmers.Master" AutoEventWireup="true" CodeFile="~/faqfarm.aspx.cs" CodeBehind="faqfarm.aspx.cs" Inherits="trial.faqfarm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
         <section class="section white-backgorund">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Frequently asked Questions</h2>
                        <p>We are here to solve your queries...</p> </div><!-- end col -->
                </div><!-- end row -->
                
                <hr class="spacer-20 no-border">
                
                <div class="row">
                    <div class="col-sm-9">
                        <div class="panel-group accordion style1" id="question" role="tablist" aria-multiselectable="true">
          <%--                  <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="questionOne">
                                    <h4 class="panel-title">
                                        <a class="" data-toggle="collapse" data-parent="#question" href="#collapseQuestionOne" aria-expanded="true" aria-controls="collapseOne">
                                            I have forgotten my password, now what?
                                        </a>
                                    </h4>
                                </div><!-- end panel-heading -->
                                <div id="collapseQuestionOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="questionOne">
                                    <div class="panel-body">
                                        <p>Lorem ipsum dolor sit amet, link adipisicing elit. Dicta voluptatem, tenetur eum tempore minus libero voluptates eos doloremque. Dolore minima rem consequuntur exercitationem quaerat deleniti repellendus enim necessitatibus mollitia tenetur?</p>
                                    </div><!-- end panel-body -->
                                </div><!-- end collapse -->
                            </div><!-- end panel -->--%>

             <%--               <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="questionTwo">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#question" href="#collapseQuestionTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            I have forgotten my username, now what?
                                        </a>
                                    </h4>
                                </div><!-- end panel-heading -->
                                <div id="collapseQuestionTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionTwo">
                                    <div class="panel-body">
                                        <p>Lorem ipsum dolor sit amet, link adipisicing elit. Dicta voluptatem, tenetur eum tempore minus libero voluptates eos doloremque. Dolore minima rem consequuntur exercitationem quaerat deleniti repellendus enim necessitatibus mollitia tenetur?</p>
                                    </div><!-- end panel-body -->
                                </div><!-- end collapse -->
                            </div><!-- end panel -->--%>

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="questionThree">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#question" href="#collapseQuestionThree" aria-expanded="false" aria-controls="collapseThree">
                                            What methods of payment are accepted?
                                        </a>
                                    </h4>
                                </div><!-- end panel-heading -->
                                <div id="collapseQuestionThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionThree">
                                    <div class="panel-body">
                                        <p>Cash On Delivery is available. Payment Gateway is also available</p> </div><!-- end panel-body -->
                                </div><!-- end collapse -->
                            </div><!-- end panel -->
                            
               <%--             <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="questionFour">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#question" href="#collapseQuestionFour" aria-expanded="false" aria-controls="collapseThree">
                                            Why don't you ship to my country?
                                        </a>
                                    </h4>
                                </div><!-- end panel-heading -->
                                <div id="collapseQuestionFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionFour">
                                    <div class="panel-body">
                                        <p>Lorem ipsum dolor sit amet, link adipisicing elit. Dicta voluptatem, tenetur eum tempore minus libero voluptates eos doloremque. Dolore minima rem consequuntur exercitationem quaerat deleniti repellendus enim necessitatibus mollitia tenetur?</p>
                                    </div><!-- end panel-body -->
                                </div><!-- end collapse -->
                            </div><!-- end panel -->
               --%>             
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="questionFive">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#question" href="#collapseQuestionFive" aria-expanded="false" aria-controls="collapseThree">
                                            How long will it take for my items to arrive?
                                        </a>
                                    </h4>
                                </div><!-- end panel-heading -->
                                <div id="collapseQuestionFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionFive">
                                    <div class="panel-body">
                                       <p>The items will arrive to you in 2 to 3 days.</p>   </div><!-- end panel-body -->
                                </div><!-- end collapse -->
                            </div><!-- end panel -->
                            
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="questionSix">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#question" href="#collapseQuestionSix" aria-expanded="false" aria-controls="collapseThree">
                                      I have placed the order but i need to know where it has reached?  </a>
                                    </h4>
                                </div><!-- end panel-heading -->
                                <div id="collapseQuestionSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="questionSix">
                                    <div class="panel-body">
                                     <p>You can contact us on our email or  call us on the given number.</p>  </div><!-- end panel-body -->
                                </div><!-- end collapse -->
                            </div><!-- end panel -->
                        </div><!-- end panel-group -->    
                    </div><!-- end col -->
                    <div class="col-sm-3">
                        
                        <div class="widget">
                            <h6 class="subtitle">If you have Questions please contact us</h6>
                            <ul class="list list-unstyled">
                                <li><b>Phone Number:</b> 7715834660</li>
                                <li><b>Email Us:</b>kisanseva.com</li>
                            </ul>
                        </div><!-- end widget -->
                    </div>
     
        </section>
   
</asp:Content>

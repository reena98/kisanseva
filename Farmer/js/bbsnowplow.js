(function(window){
    "use strict";
    window.webViewToAppSpData = {};
    window.transferWebViewDataToApp = function(){
        return JSON.stringify(window.webViewToAppSpData);
    }
    var AbstractbbSnowplow = (function(){
        var types = {};
        return {
            getbbSnowplow: function(type) {
                var Snowplower = types[type];
                return Snowplower;
            },
            registerbbSnowplow: function(type, Snowplower){
                types[type] = Snowplower;
            },
            manualInvocation: function(type, plowerData) {
                types[type].manualStart(plowerData);
            }
        };
    })();
    window.AbstractbbSnowplow = AbstractbbSnowplow;

    /* Helper Methods*/
    function PlowerHelper() {
        //add on prototype object.
    }
    PlowerHelper.prototype = {
        clean : function clean(obj) {
                  for (var propName in obj) {
                    if (obj[propName] == '' || obj[propName] == undefined) {
                      delete obj[propName];
                    }
                  }
                  this.setAppropriateTypes(obj);
                  return obj;
        },
        setAppropriateTypes: function(obj){
                if(obj.ReferrerInPagePosition !== undefined){
                    obj.ReferrerInPagePosition = Number(obj.ReferrerInPagePosition);
                }
                if(obj.ReferrerSectionItemPosition !== undefined){
                    obj.ReferrerSectionItemPosition = Number(obj.ReferrerSectionItemPosition);
                }
                if(obj.ReferrerSectionItemPosition !== undefined){
                    obj.ReferrerSectionItemPosition = Number(obj.ReferrerSectionItemPosition);
                }
                if(obj.ReferrerTypeID !== undefined){
                    obj.ReferrerTypeID = Number(obj.ReferrerTypeID);
                }
                if(obj.ScreenTypeID !== undefined){
                    obj.ScreenTypeID = Number(obj.ScreenTypeID);
                }
                if(obj.ResultsCount !== undefined){
                    obj.ResultsCount = Number(obj.ResultsCount);
                }
        },

        isTablet: function(){
            //check
            if ($(document).width() > 767 && $(document).width() < 991){
                return true;
            }
            else{
                return false;
            }
        },
        deviceType: function(){
        //check
        if ($(document).width() > 767) {
                return "desktopWeb";
            } else {
                if($.cookie("User-Agent")){
                    var userAgent = $.cookie("User-Agent").split("/");
                    return (userAgent[0].split(" ")[1] === "iOS")?"iosApp":"androidApp";
                }else{
                    return "mobileWeb";
                }
            }
        },
        appVersion: function(){
            if($.cookie("User-Agent")){
                 var version = $.cookie("User-Agent");
                 if (version!= undefined){
                     return version.split("/")[1];
                 }
                 else{
                    return "";
                 }
            }else{
                return "Web";
            }
        },
        storageAvailable: function(type){
            try {
                var storage = window[type],
                    x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                return true;
        } catch(e) {
                console.error('Too sad Snowplow partial support. No localstorage found');
                return false;
        }
        },
        savePageViewsReferralData: function(data){
            var currentDate = new Date();
            if (this.storageAvailable('localStorage')) {
                var currentDateString = currentDate.toDateString();
                if(!window.localStorage.getItem(currentDateString)){
                    //Yepee I am starting point.
                    window.localStorage.setItem(currentDateString,JSON.stringify(data));
                }else{
                    var oldReferrals = JSON.parse(window.localStorage.getItem(currentDateString));
                    window.localStorage.setItem(currentDateString,JSON.stringify($.extend( oldReferrals, data )));
                }
            }
        },
        getPageViewsRefferalData: function() {
            var currentDateString = new Date().toDateString();
            return (window.localStorage.getItem(currentDateString) === null)?{}: JSON.parse(window.localStorage.getItem(currentDateString));
        },

        getParameterByName: function(name,url){
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
            if (!results) return "";
            if (!results[2]) return "";
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },

        getUTMString: function(){
            var utm_source = this.getParameterByName("utm_source",window.location.href);
            var utm_medium = this.getParameterByName("utm_medium",window.location.href);
            var utm_campaign = this.getParameterByName("utm_campaign",window.location.href);
            var utm_term = this.getParameterByName("utm_term",window.location.href);
            var utm_content = this.getParameterByName("utm_content",window.location.href);
            if(utm_source+utm_medium+utm_campaign+utm_term+utm_content === ""){
                return "";
            }else {
                return "utm_source="+utm_source+"&utm_medium="+utm_medium+"&utm_campaign="+utm_campaign+"&utm_term="+utm_term+"&utm_content="+utm_content;
            }
        }
    };
    var plowerHelper = new PlowerHelper();


    // The main Snowplower
    function Snowplower(customization) {
        this.customization = customization;
    }
    Snowplower.prototype = {
        context: function(){
            var context = {
                "CityId":   Number($.cookie('_bb_cid')),
                "DeviceType": plowerHelper.deviceType(),
                "IsTablet": plowerHelper.isTablet(),
                "Vid": ($.cookie('_bb_vid') === undefined)?'1':$.cookie('_bb_vid'),
                "EventChannel": "snowplow",
                "Mid": $.cookie('_bb_mid'),
                "AppVersion": plowerHelper.appVersion(),
                "HubId": ($.cookie('_bb_hid') === undefined)?1:Number($.cookie('_bb_hid')),
                "UtmString": plowerHelper.getUTMString(),
                "TrueTimestamp": $.cookie('ts')//$('#TRUE_TIME_STAMP').val()
            };
            if($.cookie('_bb_device_id'))
            {
                context.DeviceID = $.cookie('_bb_device_id');
            }
            if($("#pwa_version").length > 0) {
              context.AppVersion = "1.0.0";
            }
            var data = {schema : 'iglu:com.bigbasket/bb_context/jsonschema/1-0-0', data: context };
            return data;
        },
        referrer: function(screenViews) {

        },
        startToPlow: function() {
            console.log('Your inherited class has to implement / override this function');
        },
        trackUnstructEvent: function(data,context){
            window.snowplow('trackUnstructEvent', data, this.context());
        },
        manualStart: function(data) {
            console.log('Starting snowplow manually');
        }

    }; //end of Snowplower prototype.

    // *** The ScreenViewsPlower ***
    function ScreenViewsPlower(customization) {
        Snowplower.call(this,customization);
        this.schema = 'iglu:com.bigbasket/screen_views/jsonschema/1-0-0';
        /* Object Declerations */
        this.screenView = {EventName : '', ScreenType : '', ScreenTypeID : '',
            ScreenURL : window.location.href, ScreenSlug : window.location.pathname, ReferrerURL : '',
            ReferrerSlug : '', ReferrerType : '', ReferrerTypeID : '',
            ReferrerInPageContext : '', ReferrerInPagePosition : '', ReferrerSectionItemName : '',
            ReferrerSectionItemPosition : '', ReferrerBannerSlideID : '',ReferrerSearchAdID : '', PageTemplate : '',
            AdditionalInfo1 : [], AdditionalInfo2 : '', ResultsCount: '0', 'SearchQuery': '', 'SearchTerm':''
        };
    }
    ScreenViewsPlower.prototype = Object.create(Snowplower.prototype);
    ScreenViewsPlower.prototype.constructor = ScreenViewsPlower;
    ScreenViewsPlower.prototype.startToPlow = function(){
        var trackScreenViews = function(){
            if($("[data-scrv-mul]").length > 0){
                var screenViews = $.parseJSON(($($("[data-scrv-mul]")[$("[data-scrv-mul]").length-1]).val()));
                this.screenView = jQuery.isEmptyObject(plowerHelper.getPageViewsRefferalData())? this.screenView: plowerHelper.getPageViewsRefferalData();
                this.screenView.ScreenURL = window.location.href;
                this.screenView.ScreenSlug = window.location.pathname;
                this.screenView.ScreenTypeID = '';
                this.screenView.SearchQuery = $.query.get('q'); //($('#spSearchQuery').val() === undefined)?'': $('#spSearchQuery').val();
                this.screenView.SearchTerm = ($('#spSearchTerm').val() === undefined)?'': $('#spSearchTerm').val();
                this.screenView.ReferrerInPageContext = $.query.get('nc'); //($.query.get('nc') === "")?this.screenView.ReferrerInPageContext:$.query.get('nc');
                this.screenView.ReferrerBannerSlideID = $.query.get('t_from_ban');
                this.screenView.ReferrerSearchAdID = $.query.get('t_adid');
                this.screenView.ResultsCount = ($('#snowplow_screen_view_totalcount').val() === undefined || !$.isNumeric($('#snowplow_screen_view_totalcount').val()))?'':Number($('#snowplow_screen_view_totalcount').val());
                $.extend(this.screenView, screenViews);
                plowerHelper.savePageViewsReferralData(this.screenView);
                // a special case for UTM Strings
                if(plowerHelper.getUTMString() !== ""){
                    this.screenView.ReferrerInPageContext = '';
                    this.screenView.ReferrerBannerSlideID = '';
                    this.screenView.ReferrerSearchAdID = '';
                    this.screenView.ReferrerType = '';
                    this.screenView.ReferrerInPagePosition = '';
                    this.screenView.ReferrerSlug = '';
                    this.screenView.ReferrerTypeID = '';
                    this.screenView.ReferrerSectionItemName = '';
                    this.screenView.ReferrerSectionItemPosition = '';
                }
                this.screenView.ReferrerURL = (this.screenView.ReferrerURL === "")?document.referrer: this.screenView.ReferrerURL;
                plowerHelper.clean(this.screenView);
                var data = {schema : this.schema, data: this.screenView};
                if($.query.get('ReferrerSlug')){
                    this.screenView.ReferrerInPageContext = $.query.get('ReferrerInPageContext');
                    this.screenView.ReferrerSlug = $.query.get('ReferrerSlug');
                    this.screenView.ReferrerType = $.query.get('ReferrerType');
                    if($.query.get('ReferrerTypeID'))
                    {
                        this.screenView.ReferrerTypeID = $.query.get('ReferrerTypeID');
                    }
                }
                this.trackUnstructEvent(data);
            }

            if($($("[data-scrv]")[$("[data-scrv]").length-1]).val() === undefined){
                var addressInteractionPlower = AbstractbbSnowplow.getbbSnowplow('AddressInteractionPlower');
            }//first time user

            var screenViews = {};
            if(window.ctype == 'customtemplates'){
                var data = JSON.parse(window.snowplow_type);
                screenViews.EventName = data.EventName;
                screenViews.ScreenType = data.ScreenType;
                screenViews.ScreenTypeID = data.ScreenTypeID;
                screenViews.SearchTerm = (data.SearchTerm === undefined)? '' : data.SearchTerm;
                screenViews.PageTemplate = 'custom-template';
                if(screenViews.EventName == "Ps_Shown"){
                    screenViews.ResultsCount = ""+data.ResultsCount;
                    if (data.ResultsCount > 0) {
                        var search_data = JSON.parse(window.SEARCH_JSON_DATA);
                        screenViews.SearchTerm =  (data.SearchTerm === undefined)? ((search_data.suggestion_message.show_message)? '':$.query.get('q')) : data.SearchTerm;
                    }
                }
            }else{
                screenViews = $.parseJSON(($($("[data-scrv]")[$("[data-scrv]").length-1]).val() === undefined)?'{"EventName":"Others", "ScreenType":"others", "PageTemplate":"default"}':$($("[data-scrv]")[$("[data-scrv]").length-1]).val());
            }
            if (screenViews.skipScreenView && screenViews.skipScreenView === 'true') {
                return;
            }
            if (screenViews.skipScreenView && screenViews.skipScreenView === 'false') {
                delete screenViews.skipScreenView;
            }
            this.screenView = jQuery.isEmptyObject(plowerHelper.getPageViewsRefferalData())? this.screenView: plowerHelper.getPageViewsRefferalData();
            this.screenView.SearchTerm = ($('#spSearchTerm').val() === undefined)?'': $('#spSearchTerm').val();
            this.screenView.ScreenURL = window.location.href;
            this.screenView.ScreenSlug = window.location.pathname;
            this.screenView.ScreenTypeID = '';
            this.screenView.SearchQuery = $.query.get('q'); //($('#spSearchQuery').val() === undefined)?'': $('#spSearchQuery').val();
            this.screenView.ReferrerInPageContext = $.query.get('nc'); //($.query.get('nc') === "")?this.screenView.ReferrerInPageContext:$.query.get('nc');
            this.screenView.ReferrerBannerSlideID = $.query.get('t_from_ban');
            this.screenView.ReferrerSearchAdID = $.query.get('t_adid');
            if($.query.get('ReferrerSlug')){
                this.screenView.ReferrerInPageContext = $.query.get('ReferrerInPageContext');
                this.screenView.ReferrerSlug = $.query.get('ReferrerSlug');
                this.screenView.ReferrerType = $.query.get('ReferrerType');
                if($.query.get('ReferrerTypeID'))
                {
                    this.screenView.ReferrerTypeID = $.query.get('ReferrerTypeID');
                }
            }
            if(!screenViews.ResultsCount) {
                this.screenView.ResultsCount = ($('#snowplow_screen_view_totalcount').val() === undefined || !$.isNumeric($('#snowplow_screen_view_totalcount').val())) ? '' : $('#snowplow_screen_view_totalcount').val();
            }

            $.extend(this.screenView, screenViews);
            plowerHelper.savePageViewsReferralData(this.screenView);
            if(plowerHelper.getUTMString() !== ''){
                    this.screenView.ReferrerInPageContext = '';
                    this.screenView.ReferrerBannerSlideID = '';
                    this.screenView.ReferrerSearchAdID = '';
                    this.screenView.ReferrerType = '';
                    this.screenView.ReferrerInPagePosition = '';
                    this.screenView.ReferrerSlug = '';
                    this.screenView.ReferrerTypeID = '';
                    this.screenView.ReferrerSectionItemName = '';
                    this.screenView.ReferrerSectionItemPosition = '';
                }
            this.screenView.ReferrerURL = (this.screenView.ReferrerURL === "")?document.referrer: this.screenView.ReferrerURL;
            plowerHelper.clean(this.screenView);
            var data = {schema : this.schema, data: this.screenView};
            window.webViewToAppSpData = data;
            this.trackUnstructEvent(data);
        }
        trackScreenViews.call(this);
        var _this = this;
        var updateReferrerContext = function(){
            var storedreferrer = plowerHelper.getPageViewsRefferalData();
            storedreferrer.ReferrerURL = storedreferrer.ScreenURL;
            storedreferrer.ReferrerSlug = storedreferrer.ScreenSlug;
            storedreferrer.ReferrerType = storedreferrer.ScreenType;
            storedreferrer.ReferrerTypeID = '';
            plowerHelper.savePageViewsReferralData(storedreferrer);
        }
        $(document).on('ScreenViewLoginClose',function(){
          //updateReferrerContext();
            history.replaceState(history.state,'','?nc=close');
            $.query.SET('nc','close');
            trackScreenViews.call(_this);
        });
        $(document).on('OADetailsShown',function(){
            trackScreenViews.call(_this);
        });
        $(document).on('AddonOrderClosed',function(){
            //history.replaceState(history.state, '' , window.location.origin + window.location.pathname);
            history.replaceState(history.state,'','?nc=close');
            $.query.SET('nc','close');
            trackScreenViews.call(_this);
            updateReferrerContext();
        });
        //For checkout interaction accordion shown events
        var trackAccordionShownEventsforScreenView = function(event,attr){
            var screenViewsPlower = AbstractbbSnowplow.getbbSnowplow('ScreenViewsPlower');
            var tmp = $.extend(plowerHelper.getPageViewsRefferalData(), attr);
            plowerHelper.clean(tmp);
            plowerHelper.savePageViewsReferralData(tmp);
            var storedreferrer = plowerHelper.getPageViewsRefferalData();
            storedreferrer.ReferrerURL = window.location.origin + '/co/checkout/' + attr.ScreenType;
            storedreferrer.ReferrerSlug = 'co/checkout/' + attr.ScreenType;
            storedreferrer.ReferrerType =  attr.ScreenType;
            plowerHelper.savePageViewsReferralData(storedreferrer);
            var data ={schema: screenViewsPlower.schema, data: tmp};
            screenViewsPlower.trackUnstructEvent(data);
         }
         $(document).on('accordionShownforScreenView',trackAccordionShownEventsforScreenView);
        //For checkout interaction accordion shown events

        //Promo Shown for Screen View
        var trackPromoShownEvents = function(event,attr){
            var screenViewValue = JSON.parse($($("[data-scrv]")[$("[data-scrv]").length-1]).val());
            var referrals = {};
            referrals.ReferrerURL = window.location.href;
            referrals.ReferrerSlug = window.location.pathname;
            referrals.ReferrerType = (screenViewValue.ScreenType === undefined)?'':screenViewValue.ScreenType;
            //referrals.ReferrerInPageContext = ($.query.get('nc') === "")?referrals.ReferrerInPageContext:$.query.get('nc');
            referrals.ReferrerInPageContext = screenViewValue.ReferrerInPageContext;
            referrals.ReferrerTypeID = (screenViewValue.ScreenTypeID === undefined)?'': screenViewValue.ScreenTypeID;
            if(screenViewValue.ScreenType !== 'cp' && screenViewValue.ScreenType !== 'hp') {
                referrals.ReferrerInPagePosition = "";
                referrals.ReferrerSectionItemName ="";
                referrals.ReferrerSectionItemPosition = "";
            }
            plowerHelper.savePageViewsReferralData(referrals);
         }
         $(document).on('promoShownforScreenView',trackPromoShownEvents);


        //For evoucher shown on checkout page
        var trackVoucherShownEvents = function() {
            var screenVoucher = AbstractbbSnowplow.getbbSnowplow('ScreenViewsPlower');
            var voucherShown = $.extend(screenVoucher.screenView,JSON.parse(this.getAttribute("data-checkoutvouchershown")));
            plowerHelper.clean(voucherShown);
            var storedreferrer = plowerHelper.getPageViewsRefferalData();
            storedreferrer.ReferrerInPageContext = '';
            plowerHelper.savePageViewsReferralData(storedreferrer);
            var data ={schema: screenVoucher.schema, data: voucherShown};
            screenVoucher.trackUnstructEvent(data);
         };

         $("[data-checkoutvouchershown]").each(function(index, element){
                $(element).click(trackVoucherShownEvents);
         });

         var trackLoginShownEvents = function(event, screenSlug, pageContext){
             var screenViewsPlower = AbstractbbSnowplow.getbbSnowplow('ScreenViewsPlower');
             var screenViews = {};
             screenViews = JSON.parse($($("[data-scrv-login]")[$("[data-scrv-login]").length-1]).val());
             screenViews.ScreenURL = window.location.protocol+'//'+window.location.hostname + screenSlug + ((pageContext!=undefined)?('/?nc=' + pageContext):'');
             screenViews.ScreenSlug = screenSlug;
             screenViews.EventName = (screenSlug.includes('signup'))?'SignUp_Shown':screenViews.EventName;
             screenViews.ScreenType = (screenSlug.includes('signup'))?'signup':screenViews.ScreenType;
             var storedreferrer = plowerHelper.getPageViewsRefferalData();
             screenViews.ReferrerURL = storedreferrer.ScreenURL;
             screenViews.ReferrerSlug = storedreferrer.ScreenSlug;
             screenViews.ReferrerInPageContext = (pageContext!=undefined)?pageContext:'';
             screenViews.ReferrerType = storedreferrer.ScreenType;
             screenViews.ReferrerTypeID = storedreferrer.ScreenTypeID;
             plowerHelper.clean(screenViews);
             plowerHelper.savePageViewsReferralData(screenViews);
             var data ={schema: screenViewsPlower.schema, data:screenViews };
             screenViewsPlower.trackUnstructEvent(data);
             setTimeout(function(){ updateReferrerContext();},10);
         }
         $(document).on('LoginScreenView',trackLoginShownEvents);
         var trackAddonOrderShownEvents = function(event, screenviews) {
             var screenViewsPlower = AbstractbbSnowplow.getbbSnowplow('ScreenViewsPlower');
             var screenViews = screenviews;
             var storedreferrer = plowerHelper.getPageViewsRefferalData();
             screenViews.ReferrerURL = storedreferrer.ReferrerURL;
             screenViews.ReferrerSlug = storedreferrer.ReferrerSlug;
             screenViews.ReferrerType = storedreferrer.ReferrerType;
             screenViews.ReferrerTypeID = storedreferrer.ReferrerTypeID;
             plowerHelper.clean(screenViews);
             plowerHelper.savePageViewsReferralData(screenViews);
             var data ={schema: screenViewsPlower.schema, data:screenViews };
             screenViewsPlower.trackUnstructEvent(data);
             updateReferrerContext();
         }
         $(document).on('AddonOrderScreenView',trackAddonOrderShownEvents);
        /////////////////

    };
    ScreenViewsPlower.prototype.manualStart = function(data){
        console.log('manual start....');
    };
    // *** The End ScreenViewsPlower ***

    // *** The SectionInteractionPlower ***
    function SectionInteractionPlower(customization) {
        Snowplower.call(this, customization);
        this.schema = 'iglu:com.bigbasket/section_interactions/jsonschema/1-0-0';
        this.sectionInteraction = {'EventName' : '', 'ScreenURL' :window.location.href, 'ScreenType':'', 'ScreenTypeID': '',
        'ScreenSlug':window.location.pathname, 'CustomPageGroup':'', 'CustomPage':'', 'ScreenInPageContext':'',
        'ScreenInPagePosition':'', 'SectionItemName': '', 'SectionItemPosition': '', 'ReferrerType': '',
        'ReferrerSlug':'', 'ReferrerURL':'', 'ReferrerTypeID':'', 'ReferrerInPageContext':'',
        'ReferrerInPagePosition':'', 'AdditionalInfo1':'', 'AdditionalInfo2':''};

    }
    SectionInteractionPlower.prototype = Object.create(Snowplower.prototype);
    SectionInteractionPlower.prototype.constructor = SectionInteractionPlower;
    SectionInteractionPlower.prototype.startToPlow = function(){

         var trackSectionInteractionEvents = function() {
            var sectionInteractionPlower = AbstractbbSnowplow.getbbSnowplow('SectionInteractionPlower');
            var sectionData = JSON.parse(this.getAttribute("data-sectioninteractionplower"));
            $.extend(sectionInteractionPlower.sectionInteraction, sectionData);
            sectionInteractionPlower.sectionInteraction.SectionItemPosition = (sectionInteractionPlower.sectionInteraction.SectionItemPosition === "")?"":Number(sectionInteractionPlower.sectionInteraction.SectionItemPosition);
            sectionInteractionPlower.sectionInteraction.ScreenInPagePosition = (sectionInteractionPlower.sectionInteraction.ScreenInPagePosition === "")?"":Number(sectionInteractionPlower.sectionInteraction.ScreenInPagePosition);
            var storedreferrer = plowerHelper.getPageViewsRefferalData();
            storedreferrer.ReferrerURL = window.location.href;
            storedreferrer.ReferrerSlug = window.location.pathname;
            storedreferrer.ReferrerInPagePosition = (sectionInteractionPlower.sectionInteraction.ScreenInPagePosition === "")?"":Number(sectionInteractionPlower.sectionInteraction.ScreenInPagePosition);
            storedreferrer.ReferrerSectionItemName = sectionInteractionPlower.sectionInteraction.SectionItemName;
            storedreferrer.ReferrerSectionItemPosition = (sectionInteractionPlower.sectionInteraction.SectionItemPosition === "")?"":Number(sectionInteractionPlower.sectionInteraction.SectionItemPosition);
            storedreferrer.ReferrerInPageContext = ($.query.get('nc') === "")?sectionData.ScreenInPageContext:$.query.get('nc');
            sectionInteractionPlower.sectionInteraction.ScreenType = storedreferrer.ScreenType;
            plowerHelper.savePageViewsReferralData(storedreferrer);
            sectionInteractionPlower.sectionInteraction.EventName = 'ItemClicked';
            plowerHelper.clean(sectionInteractionPlower.sectionInteraction);
            var data ={schema: sectionInteractionPlower.schema, data: sectionInteractionPlower.sectionInteraction};
            sectionInteractionPlower.trackUnstructEvent(data);
         };
         setTimeout(function(){
            $("[data-sectioninteractionplower]").each(function(index, element){
                $(element).click(trackSectionInteractionEvents);
            });

        },3000);
    };
    // *** The End SectionInteractionPlower ***


    // *** The CheckoutInteractionPlower ***
    function CheckoutInteractionPlower(customization) {
        Snowplower.call(this, customization);
        this.schema = 'iglu:com.bigbasket/checkout_interactions/jsonschema/1-0-0';
    }
    CheckoutInteractionPlower.prototype = Object.create(Snowplower.prototype);
    CheckoutInteractionPlower.prototype.constructor = CheckoutInteractionPlower;
    CheckoutInteractionPlower.prototype.startToPlow = function(){

         var trackCheckoutEvents = function() {
            var checkoutInteractionPlower = AbstractbbSnowplow.getbbSnowplow('CheckoutInteractionPlower');
            var checkoutData = JSON.parse(this.getAttribute("data-checkoutinteractionplower"));
            var storedreferrer = plowerHelper.getPageViewsRefferalData();
            storedreferrer.ReferrerInPageContext = '';
            plowerHelper.savePageViewsReferralData(storedreferrer);
            plowerHelper.clean(checkoutData);
            var data ={schema: checkoutInteractionPlower.schema, data: checkoutData};
            checkoutInteractionPlower.trackUnstructEvent(data);
         };

         var trackCheckoutEventsPAY = function(event,attr) {
            var checkoutInteractionPlower = AbstractbbSnowplow.getbbSnowplow('CheckoutInteractionPlower');
            var checkoutData = attr;
            var storedreferrer = plowerHelper.getPageViewsRefferalData();
            storedreferrer.ReferrerInPageContext = '';
            plowerHelper.savePageViewsReferralData(storedreferrer);
            plowerHelper.clean(checkoutData);
            var data ={schema: checkoutInteractionPlower.schema, data: checkoutData};
            checkoutInteractionPlower.trackUnstructEvent(data);
         };

         $("[data-checkoutinteractionplower]").each(function(index, element){
                $(element).click(trackCheckoutEvents);
         });

        $(document).on('checkoutinteractionplowerPAY',trackCheckoutEventsPAY);

         //Accordion Shown Events
         var trackAccordionShownEvents = function(event,attr){
            var checkoutInteractionPlower = AbstractbbSnowplow.getbbSnowplow('CheckoutInteractionPlower');
            plowerHelper.clean(attr);
            var data ={schema: checkoutInteractionPlower.schema, data: attr};
            checkoutInteractionPlower.trackUnstructEvent(data);
         }
         $(document).on('accordionShown',trackAccordionShownEvents);

         //Checkout Click Events
         var trackCheckoutClickEvents = function(event,attr){
            var checkoutInteractionPlower = AbstractbbSnowplow.getbbSnowplow('CheckoutInteractionPlower');
            plowerHelper.clean(attr);
            var data ={schema: checkoutInteractionPlower.schema, data: attr};
            checkoutInteractionPlower.trackUnstructEvent(data);
         }
         $(document).on('checkoutClickEvents',trackCheckoutClickEvents);
    };
    // *** The End LoginPlower ***


    // *** The LoginPlower ***
    function LoginPlower(customization) {
        Snowplower.call(this, customization);
        this.schema = 'iglu:com.bigbasket/login_interactions/jsonschema/1-0-0';
    }
    LoginPlower.prototype = Object.create(Snowplower.prototype);
    LoginPlower.prototype.constructor = LoginPlower;
    LoginPlower.prototype.startToPlow = function(){
         var trackLoginEvents = function() {
            var loginPlower = AbstractbbSnowplow.getbbSnowplow('LoginPlower');
            var data ={schema: loginPlower.schema, data: JSON.parse(this.getAttribute("data-loginplower"))};
            loginPlower.trackUnstructEvent(data);
         };
         var addLoginEventListeners = function(){
             $("[data-loginplower]").each(function(index, element){
                    $(element).click(trackLoginEvents);
             });
         };
        setTimeout(addLoginEventListeners,3000);

        var trackLoginInteractions = function(event, attr) {
            var loginPlower = AbstractbbSnowplow.getbbSnowplow('LoginPlower');
            var data ={schema: loginPlower.schema, data: JSON.parse(attr)};
            loginPlower.trackUnstructEvent(data);
        }
        $(document).on('loginInteractions',trackLoginInteractions);

        //Track OTP Error
         var trackOTPEvents = function(event,attr){
            var otpvalidator = AbstractbbSnowplow.getbbSnowplow('LoginPlower');
            var data ={schema: otpvalidator.schema, data: attr};
            otpvalidator.trackUnstructEvent(data);
         }
         $(document).on('otpValidation',trackOTPEvents);
    };
    // *** The End LoginPlower ***

    // *** The BannerPlower ***
    function BannerPlower(customization) {
        Snowplower.call(this, customization);
        this.schema = 'iglu:com.bigbasket/banner_impressions/jsonschema/1-0-0';
        this.bannerInteraction = {'EventName' :'Banner_Impressions', 'ScreenType':plowerHelper.getPageViewsRefferalData().ScreenType, 'ScreenTypeID':plowerHelper.getPageViewsRefferalData().ScreenTypeID ,'ScreenURL':window.location.href, 'ScreenSlug':window.location.pathname,
            'BannerImpsClicks':[], 'SearchAdImps':[], 'PromoImps':[], 'AdditionalInfo1':'', 'AdditionalInfo2':''};
        this.listOfBannerImpressionSent = []
    }
    BannerPlower.prototype = Object.create(Snowplower.prototype);
    BannerPlower.prototype.constructor = BannerPlower;
    BannerPlower.prototype.startToPlow = function(){

         var trackBannerImpressions = function(result_list,impsList, screenSlug, pageContext) {
            var bannerPlower = AbstractbbSnowplow.getbbSnowplow('BannerPlower');

            if(bannerPlower.listOfBannerImpressionSent.length === 0){
               bannerPlower.listOfBannerImpressionSent= bannerPlower.listOfBannerImpressionSent.concat(result_list);
            }else{
               result_list = $(result_list).not(bannerPlower.listOfBannerImpressionSent).get();
               bannerPlower.listOfBannerImpressionSent= bannerPlower.listOfBannerImpressionSent.concat(result_list);
               if(result_list.length === 0){
                   return false;
               }
            }

             if (impsList === undefined) {
                 bannerPlower.bannerInteraction.BannerImpsClicks = result_list;
             }
             else {
                 bannerPlower.schema = 'iglu:com.bigbasket/searchad_impressions/jsonschema/1-0-0';
                 bannerPlower.bannerInteraction.EventName = 'SearchAd_Impressions';
                 if (window.snowplow_type != undefined) {
                    var data = JSON.parse(window.snowplow_type);
                 }
                 else{
                     var data = {};
                     data.ResultsCount = ($('#snowplow_screen_view_totalcount').val() === undefined || !$.isNumeric($('#snowplow_screen_view_totalcount').val())) ? '' : $('#snowplow_screen_view_totalcount').val();
                 }
                 bannerPlower.bannerInteraction.SearchQuery = $.query.get('q');
                 //bannerPlower.bannerInteraction.SearchTerm = (data.SearchTerm === undefined)? '' : data.SearchTerm;
                 if (data.ResultsCount > 0) {
                     if(window.SEARCH_JSON_DATA!=undefined) {
                        var search_data = JSON.parse(window.SEARCH_JSON_DATA);
                        bannerPlower.bannerInteraction.SearchTerm =  (data.SearchTerm === undefined)? ((search_data.suggestion_message.show_message)? '':$.query.get('q')) : data.SearchTerm;
                     }
                     else {
                        bannerPlower.bannerInteraction.SearchTerm = $('#spSearchTerm').val();
                     }
                }
                 if(impsList === 'SearchAdImps') {
                     bannerPlower.bannerInteraction.SearchAdImps = result_list;
                     bannerPlower.bannerInteraction.PromoImps = [];
                 }
                 else {
                     bannerPlower.bannerInteraction.PromoImps = result_list;
                     bannerPlower.bannerInteraction.SearchAdImps = [];
                 }
             }
             var savedPageData = plowerHelper.getPageViewsRefferalData();
             bannerPlower.bannerInteraction.ScreenType = savedPageData.ScreenType;
             bannerPlower.bannerInteraction.ScreenTypeID = savedPageData.ScreenTypeID;
             //track new login and signup banners
             if(screenSlug && pageContext) {
                 bannerPlower.bannerInteraction.ScreenURL = window.location.protocol+'//'+window.location.hostname + screenSlug + ((pageContext!=undefined)?('/?nc=' + pageContext):'');
             bannerPlower.bannerInteraction.ScreenSlug = screenSlug;
             bannerPlower.bannerInteraction.ScreenTypeID = '';
             }
             plowerHelper.clean(bannerPlower.bannerInteraction);
             if(result_list.length > 0){
                 var data ={schema: bannerPlower.schema, data: bannerPlower.bannerInteraction};
                 bannerPlower.trackUnstructEvent(data);
             }
         };
         setTimeout(function(){
            var result_list = [];
            var result_list_banner = [];
            var result_list_promo = [];
            var impsListName = ''
            $("[data-bannerplower]").each(function(index, element){
                var bannerData = element.getAttribute('data-bannerplower');
                if (element.hasAttribute('data-imps-list')) {
                    impsListName = element.getAttribute('data-imps-list');
                    if (impsListName=='SearchAdImps') {
                        if(result_list_banner.indexOf(bannerData) === -1){
                            result_list_banner.push(bannerData);
                        }
                    }
                    if (impsListName=='PromoImps') {
                        if(result_list_promo.indexOf(bannerData) === -1){
                            result_list_promo.push(bannerData);
                        }
                    }
                }
                else if(result_list.indexOf(bannerData) === -1){
                    result_list.push(bannerData);
                }
            });
            if (impsListName == 'SearchAdImps' || impsListName == 'PromoImps') {
                trackBannerImpressions(result_list_banner,'SearchAdImps');
                trackBannerImpressions(result_list_promo,'PromoImps');
            }
            else {
                trackBannerImpressions(result_list);
            }

        },3000);

        $(document).on('bannersOnScroll',{},function(){
            var result_list = [];
            var result_list_banner = [];
            var result_list_promo = [];
            var impsListName = ''
            $("[data-bannerplower]").each(function(index, element){
                var bannerData = element.getAttribute('data-bannerplower');
                if (element.hasAttribute('data-imps-list')) {
                    impsListName = element.getAttribute('data-imps-list');
                    if (impsListName=='SearchAdImps') {
                        if(result_list_banner.indexOf(bannerData) === -1){
                            result_list_banner.push(bannerData);
                        }
                    }
                    if (impsListName=='PromoImps') {
                        if(result_list_promo.indexOf(bannerData) === -1){
                            result_list_promo.push(bannerData);
                        }
                    }
                }
                else if(result_list.indexOf(bannerData) === -1){
                    result_list.push(bannerData);
                }
            });

            if (impsListName == 'SearchAdImps' || impsListName == 'PromoImps') {
                trackBannerImpressions(result_list_banner,'SearchAdImps');
                trackBannerImpressions(result_list_promo,'PromoImps');
            }
            else {
                trackBannerImpressions(result_list);
            }
        });
        var trackLoginBanners = function(event, bannerId, screenSlug, pageContext) {
            if (bannerId) {
                trackBannerImpressions([bannerId + ":1"], undefined, screenSlug, pageContext);
            }
        }
        $(document).on('trackLSBanners', trackLoginBanners);
    };
    // *** The End BannerPlower ***


    // *** The AppDownloadPlower ***
    /*function AppDownloadPlower(customization) {
        Snowplower.call(this, customization);
        this.schema = 'iglu:com.bigbasket/app_download/jsonschema/1-0-0';
        this.appDownloadEventInteraction = {'EventName':'', 'EventGroup':'', 'EventSubGroup':'', 'Action':'',
        'AdditionalInfo1':[], 'AdditionalInfo2':''};
    }
    AppDownloadPlower.prototype = Object.create(Snowplower.prototype);
    AppDownloadPlower.prototype.constructor = AppDownloadPlower;
    AppDownloadPlower.prototype.startToPlow = function(){

         var trackAppDownloadEvents = function() {
            var appDownloadPlower = AbstractbbSnowplow.getbbSnowplow('AppDownloadPlower');
            var temp =  JSON.parse(this.getAttribute("data-appdownloadplower"));
            var addinfo = temp.AdditionalInfo1;
            temp.AdditionalInfo1 = []; temp.AdditionalInfo1.push(addinfo);
            var tmp = $.extend(appDownloadPlower.appDownloadEventInteraction, temp);
            plowerHelper.clean(tmp);
            var data ={schema: appDownloadPlower.schema, data: tmp};
            appDownloadPlower.trackUnstructEvent(data);
         };
         setTimeout(function(){
            $("[data-appdownloadplower]").each(function(index, element){
                $(element).click(trackAppDownloadEvents);
            });

        },3000);

        var trackAppDownloadEventShown = function(event,attr){
            var appDownloadPlower = AbstractbbSnowplow.getbbSnowplow('AppDownloadPlower');
            var data ={schema: appDownloadPlower.schema, data: attr};
            appDownloadPlower.trackUnstructEvent(data);
         }
        $(document).on('appDownloadShown',trackAppDownloadEventShown);
    };*/
    // *** The End AppDownloadPlower ***

    // *** The ScrollPlower ***
    function ScrollEventPlower(customization) {
        Snowplower.call(this, customization);
        this.schema = 'iglu:com.bigbasket/scroll_events/jsonschema/1-0-0';
        this.scrollEventData = {EventName : 'Scroll_Happened', ScreenType : '', ScreenTypeID : '',
            ScreenURL : window.location.href, ScreenSlug : window.location.pathname,
            AdditionalInfo1 : '', AdditionalInfo2 : '', PageNumber: 0
        };
    }
    ScrollEventPlower.prototype = Object.create(Snowplower.prototype);
    ScrollEventPlower.prototype.constructor = ScrollEventPlower;
    ScrollEventPlower.prototype.startToPlow = function(){

         var trackScrollEvents = function(pagenumber) {
            var scrollEventPlower = AbstractbbSnowplow.getbbSnowplow('ScrollEventPlower');
             scrollEventPlower.saveScrollInteractions(pagenumber);

         };
         $(document).on('snowscroll',{},function(event, pagenumber){
             trackScrollEvents(pagenumber);
        });
    };
    ScrollEventPlower.prototype.saveScrollInteractions = function(pagenumber) {
        this.scrollEventData.PageNumber = pagenumber;
        var savedEventAndReferralData = plowerHelper.getPageViewsRefferalData();
            this.scrollEventData.PageTemplate = '';
            this.scrollEventData.ResultsCount = '';
            this.scrollEventData.EventName = 'Scroll_Happened';
            this.scrollEventData.ScreenType = savedEventAndReferralData.ScreenType;
            this.scrollEventData.ScreenTypeID = savedEventAndReferralData.ScreenTypeID;
            plowerHelper.clean(this.scrollEventData);
            var data ={schema: this.schema, data: this.scrollEventData};
            this.trackUnstructEvent(data);
    };
    // *** The End ScrollPlower ***

    // *** The FilterInteractionsPlower ***
    function FilterInteractionsPlower(customization){
        Snowplower.call(this,customization);
        this.schema = 'iglu:com.bigbasket/filter_interactions/jsonschema/1-0-0';
        this.appliedFilters = {'EventName':'',  'ScreenURL': window.location.href, 'ScreenSlug': window.location.pathname, 'ScreenType':'','ScreenTypeID':'',
            'ScreenInPageContext':'', 'ScreenInPagePosition':'', 'ReferrerURL':'', 'ReferrerSlug':'', 'ReferrerType':'',
            'ReferrerTypeID':'', 'ReferrerInPageContext':'', 'ReferrerInPagePosition':'', 'ReferrerSectionItemName':'', 'ReferrerSectionItemPosition':'', 'ReferrerBannerSlideID':'','ReferrerSearchAdID':'', 'InPageContext': '',
            'FilterByBrand':[], 'FilterByPrice':[], 'FilterByRefine': [], 'FilterByCookingTime':[], 'FilterByRecipeType':[], 'FilterByCourse':[],
            'FilterByDiscount':[], 'FilterByCategory':[], 'FilterByTags':[], 'FilterByMain':[], 'SortBy':'', 'AutoTags':[], 'AdditionalInfo1':[], 'AdditionalInfo2':''};
      //  this.filterRemove = $.extend(true, {}, this.appliedFilters);

    }
    FilterInteractionsPlower.prototype = Object.create(Snowplower.prototype);
    FilterInteractionsPlower.prototype.constructor = FilterInteractionsPlower;
    FilterInteractionsPlower.prototype.startToPlow = function(){

        $(document).on('clearAll',{},function(event){
            var filterInteractionsPlower = AbstractbbSnowplow.getbbSnowplow('FilterInteractionsPlower');
            filterInteractionsPlower.appliedFilters = {'EventName':'',  'ScreenURL': window.location.href, 'ScreenSlug': window.location.pathname, 'ScreenType':'','ScreenTypeID':'',
            'ScreenInPageContext':'', 'ScreenInPagePosition':'', 'ReferrerURL':'', 'ReferrerSlug':'', 'ReferrerType':'', 'ReferrerTypeID':'', 'ReferrerInPageContext':'', 'ReferrerInPagePosition':'', 'ReferrerSectionItemName':'', 'ReferrerSectionItemPosition':'', 'ReferrerBannerSlideID':'','ReferrerSearchAdID':'', 'InPageContext': '', 'FilterByBrand':[], 'FilterByPrice':[], 'FilterByRefine': [], 'FilterByCookingTime':[], 'FilterByRecipeType':[], 'FilterByCourse':[], 'FilterByDiscount':[], 'FilterByCategory':[], 'FilterByTags':[], 'FilterByMain':[], 'SortBy':'', 'AutoTags':[], 'AdditionalInfo1':[], 'AdditionalInfo2':''};

        })

        $(document).on('filterInteractionsPlower',{},function(event, filterData){
            var filterInteractionsPlower = AbstractbbSnowplow.getbbSnowplow('FilterInteractionsPlower');
                filterInteractionsPlower.setFilter(filterData);
        });
        $(document).on('filterInteractionsPlowerMobile',{},function(event, filterData){
            var filters = filterData;
            var filterInteractionsPlower = AbstractbbSnowplow.getbbSnowplow('FilterInteractionsPlower');
            filterInteractionsPlower.setMobileFilters(filters);
        });
        $(document).on('filterInteractionsPlowerMobileWebSort',{},function(event, sortEnum){
            var filterInteractionsPlower = AbstractbbSnowplow.getbbSnowplow('FilterInteractionsPlower');
                filterInteractionsPlower.appliedFilters.EventName = 'Sort_Done';
                filterInteractionsPlower.appliedFilters.SortBy = sortEnum;
            var storedreferrer = plowerHelper.getPageViewsRefferalData();
            //filterInteractionsPlower.appliedFilters.ScreenType = storedreferrer.ScreenType;
            //filterInteractionsPlower.appliedFilters.ScreenTypeID = storedreferrer.ScreenTypeID;
            //filterInteractionsPlower.appliedFilters.ScreenInPageContext = storedreferrer.ScreenInPageContext;
            //filterInteractionsPlower.appliedFilters.ScreenInPagePosition = storedreferrer.ScreenInPagePosition;
            //filterInteractionsPlower.appliedFilters.ReferrerURL = storedreferrer.ReferrerURL;
            //filterInteractionsPlower.appliedFilters.ReferrerSlug = storedreferrer.ReferrerSlug;
            //filterInteractionsPlower.appliedFilters.ReferrerTypeID = storedreferrer.ReferrerTypeID;
            //filterInteractionsPlower.appliedFilters.ReferrerInPageContext =storedreferrer.ReferrerInPageContext;
            //filterInteractionsPlower.appliedFilters.ReferrerInPagePosition = storedreferrer.ReferrerInPagePosition;
            //$.extend(this.appliedFilters,storedreferrer);
            //filterInteractionsPlower.saveFilterInteractions();
        });
    };
    FilterInteractionsPlower.prototype.setMobileFilters = function(filterData){
         var storedreferrer = plowerHelper.getPageViewsRefferalData();
         this.appliedFilters.EventName = 'Filter_Applied';
         this.appliedFilters.ScreenType = storedreferrer.ScreenType;
         this.appliedFilters.ScreenTypeID = storedreferrer.ScreenTypeID;
         this.appliedFilters.SortBy = "";
         if(filterData['o'] === undefined) {
             var filterType = 'FilterBy' + filterData.filter_type.substr(0, 1).toUpperCase() + filterData.filter_type.substr(1);
             if (this.appliedFilters[filterType] !== undefined) {
                 this.appliedFilters[filterType] = filterData.labels;
             } else if (filterData.filter_type === "AdditionalInfo1") {
                 this.appliedFilters.AdditionalInfo1 = filterData.labels;
             }
         }else{
             this.appliedFilters.SortBy = filterData['sortCriteria'];
         }
        var appliedFiltersClone = jQuery.extend(true, {}, this.appliedFilters);
        var data ={schema: this.schema, data: plowerHelper.clean(appliedFiltersClone)};
        this.trackUnstructEvent(data);
    };
    FilterInteractionsPlower.prototype.removeFilter = function(filterData){
        var storedreferrer = plowerHelper.getPageViewsRefferalData();
        if(filterData['o'] === undefined){
            this.appliedFilters.EventName = (filterData.apply)?'Filter_Applied': 'FilterRemove';
            this.appliedFilters.ScreenType = storedreferrer.ScreenType;
            this.appliedFilters.ScreenTypeID = storedreferrer.ScreenTypeID;
            if(filterData.filter_type === "manual_tag"){
                var manualTagType = $('#manual_tags_'+filterData.filter).val();
                    var existingValue = '';
                    var newValue = '';
                    var indexValue = 0;
                    $.each(this.appliedFilters.FilterByTags, function(index, value){
                       if(value.includes(manualTagType)){
                          indexValue = index;
                          existingValue = value;
                       }
                    });
                    var splitExistingValue = existingValue.split(':')[1].split(',');
                    splitExistingValue.splice(splitExistingValue.indexOf(filterData.label),1);
                    newValue = manualTagType + ":" + splitExistingValue.join(',');
                    if(splitExistingValue.length === 0){
                        this.appliedFilters.FilterByTags.splice(indexValue,1);
                    }else{
                        this.appliedFilters.FilterByTags.splice(indexValue,1);
                        this.appliedFilters.FilterByTags.push(newValue);
                    }
            } else if(filterData.filter_type === "auto_tag"){
                var autoTagType = $('#auto_tags_'+filterData.filter).val();
                    var autoexistingValue = '';
                    var autonewValue = '';
                    var autoIndexValue = 0;
                    $.each(this.appliedFilters.AutoTags, function(index, value){
                       if(value.includes(autoTagType)){
                          autoIndexValue = index;
                          autoexistingValue = value;
                       }
                    });
                        var autoSplitExistingValue = autoexistingValue.split(':')[1].split(',');
                        autoSplitExistingValue.splice(autoSplitExistingValue.indexOf(filterData.label),1);
                        autonewValue = autoTagType + ":" + autoSplitExistingValue.join(',');
                        if(autoSplitExistingValue.length === 0){
                            this.appliedFilters.AutoTags.splice(autoIndexValue,1);
                        }else{
                            this.appliedFilters.AutoTags.splice(autoIndexValue,1);
                            this.appliedFilters.AutoTags.push(autonewValue);
                        }

            } else if (filterData.filter_type === 'express'){
                   this.appliedFilters.FilterByMain.splice(this.appliedFilters.FilterByMain.indexOf(filterData.filter_type),1);
            } else if(filterData.filter_type === 'ol') {
                this.appliedFilters.FilterByRefine.splice(this.appliedFilters.FilterByRefine.indexOf((filterData.label === undefined)?filterData.filter_type: filterData.label),1);
            }else{
                var filterType = 'FilterBy'+filterData.filter_type.substr(0,1).toUpperCase() + filterData.filter_type.substr(1);
                if(this.appliedFilters[filterType] !== undefined){
                    this.appliedFilters[filterType].splice(this.appliedFilters[filterType].indexOf((filterData.label === undefined)?filterData.filter_type: filterData.label),1);
                }else{
                    this.appliedFilters.AdditionalInfo1.splice(this.appliedFilters.AdditionalInfo1.indexOf((filterData.label === undefined)?filterData.filter_type: filterData.label),1);
                }
            }
            this.appliedFilters.SortBy = '';
        }
    };
    FilterInteractionsPlower.prototype.setFilter = function(filterData){
        if(filterData.apply === false) {
            this.removeFilter(filterData);
        }else {
        var storedreferrer = plowerHelper.getPageViewsRefferalData();
        if(filterData['o'] === undefined){
            this.appliedFilters.EventName = (filterData.apply)?'Filter_Applied': 'FilterRemove';


            /* New Addition for quick-filter */
            if(filterData.referrerInPageContext === 'quick-filter'){
              this.appliedFilters.InPageContext = 'quick-filter';
            }
            else if(filterData.filter_type=='All Products'||filterData.filter_type=='Express'||filterData.filter_type=='Bought by You' || filterData.filter_type=='express_delivery'){
              this.appliedFilters.InPageContext = '';
            }
            else{
                this.appliedFilters.InPageContext = 'left-filter';
                this.appliedFilters.ReferrerInPageContext = (filterData.referrerInPageContext !== undefined)?filterData.referrerInPageContext:"";
            }
            /* New Addition for quick-filter */

            this.appliedFilters.ScreenType = storedreferrer.ScreenType;
            this.appliedFilters.ScreenTypeID = storedreferrer.ScreenTypeID;
            if(filterData.filter_type === "manual_tag"){
                var manualTagType = $('#manual_tags_'+filterData.filter).val();
                if(this.appliedFilters.FilterByTags.length === 0){
                    var newFilterByTags = manualTagType +':'+filterData.label;
                    this.appliedFilters.FilterByTags.push(newFilterByTags);
                }else{
                    var existingValue = '';
                    var newValue = '';
                    var isExisting = false;
                    $.each(this.appliedFilters.FilterByTags, function(index, value){
                       if(value.includes(manualTagType)){
                          existingValue = value;
                          newValue = existingValue + ',' + filterData.label;
                          isExisting = true;
                       }
                    });
                    if(isExisting === true){
                        this.appliedFilters.FilterByTags.splice(this.appliedFilters.FilterByTags.indexOf(existingValue),1);
                        this.appliedFilters.FilterByTags.push(newValue);
                    }else{
                        this.appliedFilters.FilterByTags.push(manualTagType +':'+filterData.label);
                    }

                }

            } else if(filterData.filter_type === "auto_tag"){
                var autoTagType = $('#auto_tags_'+filterData.filter).val();
                if(this.appliedFilters.AutoTags.length === 0){
                    var newAutoFilterByTags = autoTagType +':'+filterData.label;
                    this.appliedFilters.AutoTags.push(newAutoFilterByTags);
                }else{
                    var autoexistingValue = '';
                    var autonewValue = '';
                    var autoisExisting = false;
                    $.each(this.appliedFilters.AutoTags, function(index, value){
                       if(value.includes(autoTagType)){
                          autoexistingValue = value;
                          autonewValue = autoexistingValue + ',' + filterData.label;
                          autoisExisting = true;
                       }
                    });
                    if(autoisExisting === true){
                        this.appliedFilters.AutoTags.splice(this.appliedFilters.AutoTags.indexOf(autoexistingValue),1);
                        this.appliedFilters.AutoTags.push(autonewValue);
                    }else{
                        this.appliedFilters.AutoTags.push(autoTagType +':'+filterData.label);
                    }

                }
            } else if (filterData.filter_type === 'All Products'){
                if(this.appliedFilters.FilterByMain.indexOf(filterData.filter_type) === -1){
                   this.appliedFilters.FilterByMain = [];
                   this.appliedFilters.FilterByMain.push('all');
                  // this.appliedFilters.ScreenInPageContext = (filterData.apply)?'bbe':'allp';
                   var savedContext = plowerHelper.getPageViewsRefferalData();
                }
            } else if (filterData.filter_type === 'Express' || filterData.filter_type === 'express_delivery'){
                if(this.appliedFilters.FilterByMain.indexOf(filterData.filter_type) === -1){
                   this.appliedFilters.FilterByMain = [];
                   this.appliedFilters.FilterByMain.push('express');
                  // this.appliedFilters.ScreenInPageContext = (filterData.apply)?'bbe':'allp';
                   var savedContext = plowerHelper.getPageViewsRefferalData();
                }
            } else if (filterData.filter_type === 'Bought by You'){
                if(this.appliedFilters.FilterByMain.indexOf(filterData.filter_type) === -1){
                   this.appliedFilters.FilterByMain = [];
                   this.appliedFilters.FilterByMain.push('bby');
                  // this.appliedFilters.ScreenInPageContext = (filterData.apply)?'bbe':'allp';
                   var savedContext = plowerHelper.getPageViewsRefferalData();
                }
            }

            else if(filterData.filter_type === 'ol') {
                this.appliedFilters.FilterByRefine.push((filterData.label === undefined)?filterData.filter_type: filterData.label);
            }else{
                var filterType = 'FilterBy'+filterData.filter_type.substr(0,1).toUpperCase() + filterData.filter_type.substr(1);
                if(this.appliedFilters[filterType] !== undefined){
                    if(this.appliedFilters[filterType].indexOf(filterData.label) === -1){
                        this.appliedFilters[filterType].push((filterData.label === undefined)?filterData.filter_type: filterData.label);
                    }
                }else {
                    if(this.appliedFilters.AdditionalInfo1.indexOf(filterData.label) === -1){
                        this.appliedFilters.AdditionalInfo1.push((filterData.label === undefined)?filterData.filter_type: filterData.label);
                    }
                }
            }
            this.appliedFilters.SortBy = '';
        }else{
            this.appliedFilters.EventName = 'Filter_Applied';
            this.appliedFilters.SortBy = filterData['sortCriteria'];
            this.appliedFilters.ScreenType = storedreferrer.ScreenType;
            this.appliedFilters.ScreenTypeID = storedreferrer.ScreenTypeID;
        }

            var appliedFiltersClone = jQuery.extend(true, {}, this.appliedFilters);
            var data ={schema: this.schema, data: plowerHelper.clean(appliedFiltersClone)};
            this.trackUnstructEvent(data);
        }
    };
    // ** The End FilterInteractionsPlower ***

    // ** The BasketInteractionPlower ***
    function BasketInteractionPlower(customization){
        Snowplower.call(this,customization);
        this.schema = 'iglu:com.bigbasket/basket_interactions/jsonschema/1-0-0';
        this.basketData = {'EventName':'',  'ScreenURL': window.location.href, 'ScreenSlug': window.location.pathname, 'ScreenType':'','ScreenTypeID':'',
            'ScreenInPageContext':'', 'ScreenInPagePosition':'', 'ReferrerURL':'', 'ReferrerSlug':'', 'ReferrerType':'',
            'ReferrerTypeID':'', 'ReferrerInPageContext':'','ReferrerSearchAdID':'', 'ReferrerInPagePosition':'', 'SkuID':'', 'UnitMrp':0.0,
            'UnitSalePrice':0.0, 'Quantity':0, 'Offer':'', 'AdditionalInfo1':'', 'AdditionalInfo2':''};
    }
    BasketInteractionPlower.prototype = Object.create(Snowplower.prototype);
    BasketInteractionPlower.prototype.constructor = BasketInteractionPlower;
    BasketInteractionPlower.prototype.startToPlow = function(){
        $(document).on('basketInteractionsPlower',{},function(event, basketData){
            var basketInteractionPlower = AbstractbbSnowplow.getbbSnowplow('BasketInteractionPlower');
            basketInteractionPlower.setBasketData(basketData);
        });
        $(document).on('basketInteractionsPlowerWithAngular',{},function(event, basketData){
            var basketInteractionPlower = AbstractbbSnowplow.getbbSnowplow('BasketInteractionPlower');
            basketData.Offer = (Number(basketData.UnitMrp) === Number(basketData.UnitSalePrice))? 'None': 'Discount';
            basketInteractionPlower.setBasketData(basketData);
        });
    };
    BasketInteractionPlower.prototype.setBasketData = function(basketData){
        $.extend(this.basketData, basketData);
        var storedreferrer = plowerHelper.getPageViewsRefferalData();
        var filterInteractionsPlower = AbstractbbSnowplow.getbbSnowplow('FilterInteractionsPlower');

        this.basketData.ReferrerURL = storedreferrer.ReferrerURL;
        this.basketData.ReferrerSlug = storedreferrer.ReferrerSlug;
        this.basketData.ReferrerType = storedreferrer.ReferrerType;
        this.basketData.ReferrerTypeID = storedreferrer.ReferrerTypeID;
        this.basketData.Offer = ($('#snowplow_offer_type_'+basketData.SkuID).val() === undefined)?'None':$('#snowplow_offer_type_'+basketData.SkuID).val();
        this.basketData.ScreenType = storedreferrer.ScreenType;
        this.basketData.ScreenTypeID = storedreferrer.ScreenTypeID;

        if(filterInteractionsPlower.appliedFilters.FilterByMain[0]){
            this.basketData.ScreenInPageContext = filterInteractionsPlower.appliedFilters.FilterByMain[0];
        }

        this.basketData.UnitMrp = Number(this.basketData.UnitMrp);
        this.basketData.UnitMrp = (this.basketData.UnitMrp === 0)?Number(this.basketData.UnitSalePrice):Number(this.basketData.UnitMrp);
        this.basketData.UnitSalePrice = Number(this.basketData.UnitSalePrice);
        this.basketData.Quantity = Number(this.basketData.Quantity);
        this.basketData.SkuID = Number(this.basketData.SkuID);
        this.basketData.ReferrerInPageContext = storedreferrer.ReferrerInPageContext;
        this.basketData.ReferrerSearchAdID = storedreferrer.ReferrerSearchAdID;
        this.saveBasketInteraction();

    };
    BasketInteractionPlower.prototype.saveBasketInteraction = function(){
        var basketDataClone = jQuery.extend(true, {}, this.basketData);
        plowerHelper.clean(basketDataClone);
        if(basketDataClone.Quantity === undefined){
            basketDataClone.Quantity = 0;
        }
        var data ={schema: this.schema, data: basketDataClone};
        this.trackUnstructEvent(data);
    };
    // ** The End BasketInteractionPlower ***

    // *** The AddressInteractionPlower ***
    function AddressInteractionPlower(customization){
        Snowplower.call(this,customization);
        this.schema = 'iglu:com.bigbasket/address_interactions/jsonschema/1-0-0';
        this.addressInteractionData = {'Location':'',
            'AdditionalInfo1':'', 'AdditionalInfo2':''};
    }
    AddressInteractionPlower.prototype = Object.create(Snowplower.prototype);
    AddressInteractionPlower.prototype.constructor = AddressInteractionPlower;
    AddressInteractionPlower.prototype.startToPlow = function(){
        $(document).on('addressInteractionPlower',{},function(event, addressData){
            var addressInteractionPlower = AbstractbbSnowplow.getbbSnowplow('AddressInteractionPlower');
            addressInteractionPlower.saveAddressInteraction(addressData);
        });

        var trackAddressClickEvents = function() {
            var addressInteractionPlower = AbstractbbSnowplow.getbbSnowplow('AddressInteractionPlower');
            var addressData = JSON.parse(this.getAttribute("data-addressInteractionplower"));
            addressData.AdditionalInfo2 = $.cookie('_bb_locSrc');
            var storedreferrer = plowerHelper.getPageViewsRefferalData();
            storedreferrer.ReferrerInPageContext = '';
            plowerHelper.savePageViewsReferralData(storedreferrer);
            var data ={schema: addressInteractionPlower.schema, data: addressData};
            addressInteractionPlower.trackUnstructEvent(data);
         };

         $("[data-addressInteractionplower]").each(function(index, element){
                $(element).click(trackAddressClickEvents);
         });


        //Event triggers when Akamai City Widget is shown - For First Time User
        var widgetShown = function(widgetData) {
            var addressInteractionPlower = AbstractbbSnowplow.getbbSnowplow('AddressInteractionPlower');
            widgetData.AdditionalInfo2 = $.cookie('_bb_locSrc');
            var data ={schema: addressInteractionPlower.schema, data: widgetData};
            addressInteractionPlower.trackUnstructEvent(data);
         };

        setTimeout(function(){
            if($.cookie('_bb_ftvid') && $(document).width() > 991){
                var widgetData = JSON.parse(document.getElementById("cityWidget").getAttribute("data-cityWidget"));
                widgetShown(widgetData);
            }
        },3000);
        //Event triggers when Akamai City Widget is shown
    };
    AddressInteractionPlower.prototype.manualStart = function (addressData) {
        $.extend(this.addressInteractionData, addressData);
        this.saveAddressInteraction(addressData);
    };
    AddressInteractionPlower.prototype.saveAddressInteraction = function(addressInteractionData){
        var data ={schema: this.schema, data: plowerHelper.clean(addressInteractionData)};
        this.trackUnstructEvent(data);
    };
    // *** The End AddressInteractionPlower ***

    // *** The MicorInteractionPlower ***
    function MicroInteractionPlower(customization){
        Snowplower.call(this,customization);
        this.schema = 'iglu:com.bigbasket/micro_interactions/jsonschema/1-0-0';
        this.microInteractionData = {'EventName':'', 'EventSubGroup':'', 'UserFlow':'',
            'AdditionalInfo1':'', 'AdditionalInfo2':''};

    }
    MicroInteractionPlower.prototype = Object.create(Snowplower.prototype);
    MicroInteractionPlower.prototype.constructor = MicroInteractionPlower;
    MicroInteractionPlower.prototype.startToPlow = function(){
        $(document).on('microInteractionPlower',{},function(event, microInteractionData){
            var micorInteractionPlower = AbstractbbSnowplow.getbbSnowplow('MicroInteractionPlower');
            micorInteractionPlower.saveMicroInteraction(microInteractionData);
        });
    };
    MicroInteractionPlower.prototype.saveMicroInteraction = function(microInteractionData){

        $.extend(this.microInteractionData, microInteractionData);
        var data ={schema: this.schema, data: plowerHelper.clean(this.microInteractionData)};
        this.trackUnstructEvent(data);
    };
    // *** The End MicroInteractionPlower ***

    function SelfServiceInteractionPlower(customization){
        Snowplower.call(this,customization);
        this.schema = 'iglu:com.bigbasket/selfservice_interactions/jsonschema/1-0-0';
        this.selfServiceInteractionData = {'EventName':'', 'UserFlow':'', 'OrderId':'',
            'OrderNumber':'', 'AdditionalInfo1':'', 'AdditionalInfo2':''};
    }
    SelfServiceInteractionPlower.prototype = Object.create(Snowplower.prototype);
    SelfServiceInteractionPlower.prototype.constructor = SelfServiceInteractionPlower;
    SelfServiceInteractionPlower.prototype.startToPlow = function(){
        $(document).on('selfServiceInteractionPlower',{}, function(event, selfServiceInteractionData, update_referral){
            var selfServiceInteractionPlower = AbstractbbSnowplow.getbbSnowplow('SelfServiceInteractionPlower');
            if(update_referral) {
                $(document).trigger('screenViewReferralsEvent', [{}]);
            }
            selfServiceInteractionPlower.saveSelfServiceInteraction(selfServiceInteractionData);
        });
    };
    SelfServiceInteractionPlower.prototype.saveSelfServiceInteraction = function(selfServiceInteractionData){
        var selfServiceInteractionCloneData = $.extend({}, selfServiceInteractionData);
        var data = {schema: this.schema, data: plowerHelper.clean(selfServiceInteractionCloneData)};
        this.trackUnstructEvent(data);
    };


    // ** The ScreenViewsReferrals ***
    var ScreenViewsReferrals = (function(){
        function saveScreenViewsReferrals(){
            var referrals = (this.getAttribute('data-plowerreferral') === null)? {} :JSON.parse(this.getAttribute('data-plowerreferral'));
            saveReferrals(referrals);
        }
        function saveReferrals(referrals, is_back_btn) {
            var screenViewValue = {};
//            if($($("[data-scrv]")[$("[data-scrv]").length-1]).val() !== undefined){
//                screenViewValue = JSON.parse($($("[data-scrv]")[$("[data-scrv]").length-1]).val());
//            }
            if(window.ctype === 'customtemplates'){
                var data = JSON.parse(window.snowplow_type);
                screenViewValue.EventName = data.EventName;
                screenViewValue.ScreenType = data.ScreenType;
                screenViewValue.ScreenTypeID = data.ScreenTypeID;
                screenViewValue.SearchTerm = (data.SearchTerm === undefined)? '' : data.SearchTerm;
                screenViewValue.PageTemplate = 'custom-template';
            }else{
                if($($("[data-scrv]")[$("[data-scrv]").length-1]).val() !== undefined){
                screenViewValue = JSON.parse($($("[data-scrv]")[$("[data-scrv]").length-1]).val());
                }
            }
            referrals.AdditionalInfo2 = '';
            referrals.ReferrerURL = window.location.href;
            referrals.ReferrerSlug = window.location.pathname;
            referrals.ReferrerType = (screenViewValue.ScreenType === undefined)?'':screenViewValue.ScreenType;
            //referrals.ReferrerInPageContext = ($.query.get('nc') === "")?referrals.ReferrerInPageContext:$.query.get('nc');
            if(is_back_btn) {
                referrals.ReferrerInPageContext = 'backBtn';
            }
            referrals.SearchQuery = $.query.get('q'); //($('#spSearchQuery').val() === undefined)?'': $('#spSearchQuery').val();
            referrals.SearchTerm = ($('#spSearchTerm').val() === undefined)?'': $('#spSearchTerm').val();
            referrals.ReferrerTypeID = (screenViewValue.ScreenTypeID === undefined)?'': screenViewValue.ScreenTypeID;
            if(screenViewValue.ScreenType !== 'cp' && screenViewValue.ScreenType !== 'hp') {
                referrals.ReferrerInPagePosition = "";
                referrals.ReferrerSectionItemName ="";
                referrals.ReferrerSectionItemPosition = "";
            }
            plowerHelper.savePageViewsReferralData(referrals);
        }
        function onEventScreenViewsReferrals(){
             saveReferrals({});
        }

        function rightClickData(event){
            var screenViewValue = JSON.parse($($("[data-scrv]")[$("[data-scrv]").length-1]).val());
            if(screenViewValue.ScreenType === 'cp' || screenViewValue.ScreenType === 'hp'){
                var sectionInteractionData = $.parseJSON($(event.target).closest('a')[0].getAttribute('data-sectioninteractionplower'))
                if(!$.isEmptyObject(sectionInteractionData)){
                 screenViewValue.ReferrerInPagePosition = sectionInteractionData.ScreenInPagePosition;
                 screenViewValue.ReferrerSectionItemName = sectionInteractionData.SectionItemName;
                 screenViewValue.ReferrerSectionItemPosition = sectionInteractionData.SectionItemPosition;
                }
                saveReferrals(screenViewValue);
            }else{
                saveReferrals({});
            }
        }

        return {
            init: function () {
                setTimeout(function(){
                    $("[data-plowerreferral]").each(function(index, element){
                            $(element).click(saveScreenViewsReferrals);
                        });

                    $('a:not(.muiv2-addbtn, .uiv2-add-button, .uiv2-notify-button, .dk_toggle, #alert_ok, [data-dk-dropdown-value], .num)').click(saveScreenViewsReferrals);
                    $('.saveReferral').click(saveScreenViewsReferrals);
                    $('a:not(.muiv2-addbtn, .uiv2-add-button, .uiv2-notify-button, .dk_toggle, #alert_ok, [data-dk-dropdown-value], .num)').contextmenu(rightClickData);

                    $('a:not(.muiv2-addbtn, .uiv2-add-button, .uiv2-notify-button, .dk_toggle, #alert_ok, [data-dk-dropdown-value], .num)').mousedown(function(e){
                        if (e.which === 2){
                            $(document).trigger('screenViewReferralsEvent', [{}]);
                        }
                    })

                    $(document).on('screenViewReferralsEvent',{},onEventScreenViewsReferrals);
                    // $( document ).ready(function() {
                    //     if (window.history) {
                    //         if (window.history.pushState) {
                    //             $(window).on('popstate', function (e) {
                    //                 var hashLocation = location.hash;
                    //                 var hashSplit = hashLocation.split("#!/");
                    //                 var hashName = hashSplit[1];
                    //                 if (hashName !== '' && e.originalEvent.state) {
                    //                     var hash = window.location.hash;
                    //                     if (hash === '') {
                    //                         saveReferrals({}, true);
                    //                         if (document.referrer.indexOf("nc=backBtn") == -1) {
                    //                             if (document.referrer.indexOf("nc=") == -1) {
                    //                                 var a = document.referrer;
                    //                                 var seperator = document.referrer.indexOf('?') !== -1 ? "&" : "?";
                    //                                 location.href = a + seperator + "nc=backBtn";
                    //                             } else {
                    //                                 var a = removeURLParameter(document.referrer, 'nc');;
                    //                                 var seperator = a.indexOf('?') !== -1 ? "&" : "?";
                    //                                 location.href = a + seperator + "nc=backBtn";
                    //                             }
                    //
                    //                         } else {
                    //                             location.href = document.referrer;
                    //                         }
                    //                     }
                    //                 }
                    //             });
                    //             window.history.pushState('forward','forward', window.location.href);
                    //             window.history.pushState('forward','forward', window.location.href);
                    //         }
                    //     }
                    // });

                },3000);
            }
        };
    })();


    // Register all plowers
    AbstractbbSnowplow.registerbbSnowplow('ScrollEventPlower', new ScrollEventPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('LoginPlower', new LoginPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('BannerPlower', new BannerPlower({}));
    /*AbstractbbSnowplow.registerbbSnowplow('AppDownloadPlower', new AppDownloadPlower({}));*/
    AbstractbbSnowplow.registerbbSnowplow('CheckoutInteractionPlower', new CheckoutInteractionPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('ScreenViewsPlower', new ScreenViewsPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('SectionInteractionPlower', new SectionInteractionPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('FilterInteractionsPlower', new FilterInteractionsPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('BasketInteractionPlower', new BasketInteractionPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('AddressInteractionPlower', new AddressInteractionPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('MicroInteractionPlower', new MicroInteractionPlower({}));
    AbstractbbSnowplow.registerbbSnowplow('SelfServiceInteractionPlower', new SelfServiceInteractionPlower({}));

    // Let's start plowing //
    function letsStartPlowing() {
        var plowers = $('#snowPlowers').val(); //plowers like ScreenViewsPlower (Used across pages).
        var secondaryPlowers = $('#secondarySnowPlowers').val(); //plowers like FilterInteractionsPlower. (Not used on all pages)
        var plow = function(plowers){
            plowers.split(',').forEach(function(plowerType){
                var plower = AbstractbbSnowplow.getbbSnowplow(plowerType);
                plower.startToPlow();
            });
        };
        if(plowers !== undefined){
            plow(plowers);
        }
        if(secondaryPlowers !== undefined){
            plow(secondaryPlowers);
        }
    }
    function removeURLParameter(url, parameter) {
        //prefer to use l.search if you have a location/link object
        var urlparts= url.split('?');
        if (urlparts.length>=2) {

            var prefix= encodeURIComponent(parameter)+'=';
            var pars= urlparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (var i= pars.length; i-- > 0;) {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }

            url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
            return url;
        } else {
            return url;
        }
    }

    if(window.ENABLE_SNOWPLOW_FOR_WEB === 'True'){
     ScreenViewsReferrals.init();
     letsStartPlowing();
    }
})(window);

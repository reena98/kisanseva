var mapStyles=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#2196f3"}]}];var mapId=document.getElementById("map-canvas")
if(mapId){var mapListingUrl="assets/js/listings.json";var center=new google.maps.LatLng(-33.924351,151.156788);function initialize(){var mapOptions={center:center,zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:mapStyles,scrollwheel:false};var map=new google.maps.Map(mapId,mapOptions);var mapdata={format:"json"};function getContent(data){var markers=[];var infobox=new InfoBox({content:"",maxWidth:0,pixelOffset:new google.maps.Size(-135,-45),zIndex:null,closeBoxURL:"",infoBoxClearance:new google.maps.Size(1,1),isHidden:false,isOpen:false,pane:"floatPane",enableEventPropagation:true,disableAutoPan:true,alignBottom:true});$.each(data,function(i,item){var markerCenter=new google.maps.LatLng(item.lat,item.lng);var verified="";if(item.verified){verified='<div class="marker-verified"><i class="fa fa-check"></i></div>';}
var markerContent='<div id="marker-'+
item.id+
'" data-id="'+
item.id+
'" class="flip-container">'+
verified+
'<div class="flipper">'+
'<div class="front">'+
'<img src="'+
item.thumbnail+
'">'+
"</div>"+
'<div class="back">'+
'<i class="fa fa-eye"></i>'+
"</div>"+
"</div>"+
"</div>";var marker=new RichMarker({id:item.id,data:item,flat:true,position:markerCenter,map:map,shadow:0,content:markerContent,title:"Marker Title",is_logged_in:item.is_logged_in});markers.push(marker);var infoboxTimeout;google.maps.event.addListener(marker,"mouseover",function(){var infoboxContent='<a class="list-link"  href="listing-details-right.html?lat='+item.lat+'&lng='+item.lng+'">'+
'<div id="iw-container" style="background-image: url('+
marker.data.thumbnail+
');">'+
'<div class="iw-content">'+
'<ul class="list-inline rating">'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
"</ul>"+
'<div class="iw-subTitle">'+
marker.data.title+
"</div>"+
"<p>"+
marker.data.address+
"</p>"+
"</div>"+
'<div class="iw-bottom-gradient"></div>'+
"</div>"+
"</a>";clearTimeout(infoboxTimeout);infobox.setContent(infoboxContent);infobox.open(map,this);infobox.isOpen=true;});google.maps.event.addListener(marker,"mouseout",function(){infoboxTimeout=setTimeout(function(){infobox.close(map,this);infobox.isOpen=false;},150);});google.maps.event.addListener(marker,"mouseoutForList",function(){if(infobox.isOpen){infobox.close(map,this);infobox.isOpen=false;}});google.maps.event.addListener(infobox,"domready",function(e){$(".infoBox").on("mouseenter",function(e){clearTimeout(infoboxTimeout);}).on("mouseleave",function(e){clearTimeout(infoboxTimeout);infobox.close();});});});var markerCluster=new MarkerClusterer(map,markers,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",gridSize:60,maxZoom:16,});$(".listContent, .thingsBox").on("mouseenter",function(){var id=$(this).attr("data-marker-id");$(".map-container #marker-"+id).toggleClass("hover");var markerHovered=markers.filter(item=>{return item.data.id==id;})[0];google.maps.event.trigger(markerHovered,"mouseover");});$(".listContent, .thingsBox").on("mouseleave",function(){var id=$(this).attr("data-marker-id");$(".map-container #marker-"+id).toggleClass("hover");var markerHovered=markers.filter(item=>{return item.data.id==id;})[0];google.maps.event.trigger(markerHovered,"mouseoutForList");});}
$.getJSON(mapListingUrl,mapdata,getContent);}
var existId=document.getElementById("map-canvas");if(existId){google.maps.event.addDomListener(window,"load",initialize);}
$.getJSON(mapListingUrl,function(data){var $listItems=$('#list-items')
var listItems=$('<div/>')
var length=data.length;$.each(data,function(index,item){if(index===(length-1)){var isLastElement=true}
var item='<div class="listContent '+(isLastElement?'borderRemove':'')+'" data-marker-id="'+item.id+'">'+
'<div class="row">'+
'<div class="col-sm-5 col-xs-12">'+
'<div class="categoryImage">'+
'<img src="'+item.thumbnail+'" alt="Image category" class="img-responsive img-rounded">'+
'<span class="label label-primary">'+(item.verified?'verified':'')+'</span>'+
'</div>'+
'</div>'+
'<div class="col-sm-7 col-xs-12">'+
'<div class="categoryDetails">'+
'<ul class="list-inline rating">'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li> '+
'<li><i class="fa fa-star" aria-hidden="true"></i></li> '+
'<li><i class="fa fa-star" aria-hidden="true"></i></li> '+
'<li><i class="fa fa-star" aria-hidden="true"></i></li> '+
'<li><i class="fa fa-star" aria-hidden="true"></i></li> '+
'</ul>'+
'<h2><a href="listing-details-right.html?lat='+item.lat+'&lng='+item.lng+'" style="color: #222222">'+item.title+'</a> <span class="likeCount">'+
'<i class="fa fa-heart-o" aria-hidden="true"></i> '+item.likes+'</span></h2>'+
'<p>'+item.address+'</p>'+
'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua. </p>'+
'<ul class="list-inline list-tag">'+
'<li><a href="listings-half-screen-map-list.html">'+item.category+'</a></li> '+
'</ul>'+
'</div>'+
'</div>'+
'</div>'+
'</div>';var $listItem=$(item)
listItems.append($listItem)});$listItems.html(listItems.html())});$.getJSON(mapListingUrl,function(data){var $gridItems=$('#grid-items')
var gridItems=$('<div/>')
$.each(data,function(index,item){var gridItem='<div class="col-xs-12 col-sm-6 col-md-12 col-lg-6">'+
'<div class="thingsBox thinsSpace" data-marker-id="'+item.id+'">'+
'<div class="thingsImage">'+
'<img src="'+item.thumbnail+'" alt="Image things">'+
'<div class="thingsMask">'+
'<ul class="list-inline rating">'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
'<li><i class="fa fa-star" aria-hidden="true"></i></li>'+
'<li><i class="fa fa-star-o" aria-hidden="true"></i></li>'+
'</ul>'+
'<a href="listing-details-right.html?lat='+item.lat+'&lng='+item.lng+'"><h2>'+item.title+'<i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>'+
'<p>'+item.address+'</p>'+
'</div>'+
'</div>'+
'<div class="thingsCaption">'+
'<ul class="list-inline captionItem">'+
'<li><i class="fa fa-heart-o" aria-hidden="true"></i> '+item.likes+'</li>'+
'<li><a href="listings-half-screen-map-grid.html"> '+item.category+'</a></li>'+
'</ul>'+
'</div>'+
'</div>'+
'</div>';var $gridItem=$(gridItem)
gridItems.append($gridItem)});$gridItems.html(gridItems.html())});}
var listingDetails=document.getElementById('listing-details');if(listingDetails){const urlParams=new URLSearchParams(window.location.search);var lat=urlParams.has('lat')?parseFloat(urlParams.get('lat')):-33.8699;var lng=urlParams.has('lng')?parseFloat(urlParams.get('lng')):151.2195;var mapIdSingle=document.getElementById('map');if(mapIdSingle){var marker;function initMap(){var map=new google.maps.Map(mapIdSingle,{zoom:16,styles:mapStyles,center:{lat:lat,lng:lng}});marker=new google.maps.Marker({map:map,draggable:true,animation:google.maps.Animation.BOUNCE,position:{lat:lat,lng:lng}});}
initMap()}}
var mapAddEdit=document.getElementById('map-add-edit')
if(mapAddEdit){function initAutocomplete(){var map=new google.maps.Map(mapAddEdit,{center:{lat:-33.8688,lng:151.2195},zoom:13,mapTypeId:'roadmap'});var input=document.getElementById('listingAddress');var searchBox=new google.maps.places.SearchBox(input);map.addListener('bounds_changed',function(){searchBox.setBounds(map.getBounds());});var markers=[];searchBox.addListener('places_changed',function(){var places=searchBox.getPlaces();if(places.length==0){return;}
markers.forEach(function(marker){marker.setMap(null);});markers=[];var bounds=new google.maps.LatLngBounds();places.forEach(function(place){if(!place.geometry){console.log("Returned place contains no geometry");return;}
var icon={url:place.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(25,25)};markers.push(new google.maps.Marker({map:map,icon:icon,title:place.name,position:place.geometry.location}));if(place.geometry.viewport){bounds.union(place.geometry.viewport);}else{bounds.extend(place.geometry.location);}
input.setAttribute('data-location',place.geometry.location)
document.getElementById('location').innerHTML=place.geometry.location});map.fitBounds(bounds);});google.maps.event.addListener(map,'click',function(event){placeMarker(event.latLng);});function placeMarker(location){if(typeof marker=='undefined'){marker=new google.maps.Marker({position:location,map:map,animation:google.maps.Animation.DROP,});}
else{marker.setPosition(location);}
input.setAttribute('data-location',location)
document.getElementById('location').innerHTML=location}}}
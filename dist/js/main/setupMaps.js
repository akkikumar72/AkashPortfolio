/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function setupMap(){var e=$("#map-canvas");if(e.length){var a=e.data("latitude"),l=e.data("longitude"),t=e.data("zoom"),o=e.data("marker-image"),r={zoom:t,disableDefaultUI:!0,center:new google.maps.LatLng(a,l),styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2e5d4"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{lightness:20}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#acbcc9"}]}]},s=document.getElementById("map-canvas"),n=new google.maps.Map(s,r),y=(o=o,new google.maps.MarkerImage(o,null,null,null,new google.maps.Size(120,90)));new google.maps.Marker({position:new google.maps.LatLng(a,l),map:n,icon:y,title:"Hey, I am here"})}}
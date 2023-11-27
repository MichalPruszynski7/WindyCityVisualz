 function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 13,
     center: {lat: 52.2296756, lng: 21.0122287} 
   });


google.maps.event.addDomListener(window, 'load', initMap);
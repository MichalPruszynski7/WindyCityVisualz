 function initMap() {
   var map = new google.maps.Map(document.getElementById('AIzaSyDqhQeqAGHCKzs4xwuX20T_LeNf1ZOGEaQ'), {
     zoom: 13,
     center: {lat: 52.2296756, lng: 21.0122287} 
   });
   var marker = new google.maps.Marker({
     position: {lat: 52.2296756, lng: 21.0122287}, 
     map: map
   });
}
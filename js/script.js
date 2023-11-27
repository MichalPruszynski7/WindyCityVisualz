 function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.229, lng: 21.012},
      zoom: 6
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
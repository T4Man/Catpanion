var map;
var service;
var infowindow;



function initMap() {
  var burien = {lat: 47.466575, lng: -122.341207};
      map = new google.maps.Map(document.getElementById('map'), {
    center: burien,
    zoom: 11
  });
    infowindow = new google.maps.InfoWindow();

  var request = {
    location: burien,
    radius: '10000',
    query: 'animal rescue'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

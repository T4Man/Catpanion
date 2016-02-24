
var map;
var service;
var infowindow;

function initMap(searchParam) {
  var burien = {lat: 47.466575, lng: -122.341207};
      map = new google.maps.Map(document.getElementById('map'), {
    center: burien,
    zoom: 11
  });
    infowindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infowindow.setPosition(pos);
      infowindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
  var request = {
    location: burien,
    radius: '10000',
    query: searchParam
  };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  details = service.placeDetails;
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
  marker.setPlace({
    placeId: place.place_id,
    location: place.geometry.location,
  });
  marker.setVisible(true);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      place.formatted_address);
    infowindow.open(map, this);
  });
}

function getDetails(){
  $.ajax({
    type: 'GET',
    url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=place.place_id&key=AIzaSyCNGaZBoUTqLZleHdf3OvLhjl3-mTDgvhc",
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(data){
      console.log(data);
    }
    //JSON.parse(localStorage.rawData);
  })
};

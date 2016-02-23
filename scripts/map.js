
var map;
var service;
var infowindow;

function initMap(searchParam) {
  var burien = {lat: 47.466575, lng: -122.341207};
  // var pos;
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
      var request = {
        location: pos,
        radius: '10000',
        query: searchParam
      };
      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
      details = service.placeDetails;
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
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
    type: "GET",
    url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyCNGaZBoUTqLZleHdf3OvLhjl3-mTDgvhc",
    success: function(data, message, xhr){
      console.log(data);
    }
    //JSON.parse(localStorage.rawData);
  })
};

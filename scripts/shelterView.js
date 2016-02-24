var map,
    infowindow,
    shelterView = {};

shelterView.createMarker = function(loc, placeContent, map, infowindow) {
  var marker = new google.maps.Marker({
    map: map,
    position: loc,
  });
  marker.setVisible(true);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(placeContent);
    infowindow.open(map, this);
  });
};

function initShelterMap() {
  var burien = {lat: 47.466575, lng: -122.341207};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: burien,
    zoom: 11
  });
  var infowindow = new google.maps.InfoWindow();

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
  };

  Shelter.all.forEach(function(cur) {
    var shelterLoc = new google.maps.LatLng(parseFloat(cur.latitude),parseFloat(cur.longitude));
    console.log(shelterLoc);
    shelterView.createMarker(shelterLoc, cur.name, map, infowindow);
  });

}

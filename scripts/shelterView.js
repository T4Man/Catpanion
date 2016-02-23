var map,
    infowindow,
    shelterView = {};

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
      console.log(pos);

      infowindow.setPosition(pos);
      infowindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  };

}

Shelter.all.forEach(function() {
  var shelterLoc = {
    lat: this.latitude,
    lng: this.longitude
  }
});

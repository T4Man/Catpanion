var map,
    infowindow,
    shelterView = {};

shelterView.createMarker = function(loc, placeContent, map, infowindow) {
  var marker = new google.maps.Marker({
    map: map,
    position: loc,
    visible: true
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(placeContent);
    infowindow.open(map, this);
  });
};

function loadMarkers() {
  Shelter.all.forEach(function(cur) {
    var shelterLoc = new google.maps.LatLng(parseFloat(cur.latitude),parseFloat(cur.longitude));
    shelterView.createMarker(shelterLoc, cur.name, map, infowindow);
  });
}

function initShelterMap() {
  var burien = {lat: 47.466575, lng: -122.341207};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: burien,
    zoom: 10
  });
  var infowindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pLat = position.coords.latitude;
      var pLng = position.coords.longitude;
      var pos = {
        lat: pLat,
        lng: pLng
      };
      PostalCode.requestList(pLat, pLng, function(zipData) {
        var zipHere = zipData.postalCodes[0].postalCode;
        Shelter.requestShelterList(zipHere, function(shelterData) {
          var shelterList = shelterData.petfinder.shelters.shelter;
          Shelter.loadAll(shelterList);
          loadMarkers();
        })
      })

      infowindow.setPosition(pos);
      infowindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

loadMarkers();

  // Shelter.all.forEach(function(cur) {
  //   // var shelterLoc = {
  //   //   lat: parseFloat(cur.latitude),
  //   //   lng: parseFloat(cur.longitude)
  //   // };
  //   var shelterLoc = new google.maps.LatLng(parseFloat(cur.latitude),parseFloat(cur.longitude));
  //   // console.log(cur.latitude);
  //   // console.log('lng: ' + this.longitude);
  //   shelterView.createMarker(shelterLoc, cur.name, map, infowindow);
  // });

}

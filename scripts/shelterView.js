var map,
    infowindow,
    shelterView = {};

shelterView.zipHere = 0;

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

function loadMarkers() {
  Shelter.all.forEach(function(cur) {
    var shelterLoc = new google.maps.LatLng(parseFloat(cur.latitude),parseFloat(cur.longitude));
    shelterView.createMarker(shelterLoc, cur.name, map, infowindow);
  });
}


function initShelterMap() {
  infowindow = new google.maps.InfoWindow();

  if (!curLocation.pos) {
    curLocation.getLocation();
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: curLocation.pos,
    zoom: 11
  })
  PostalCode.requestList(curLocation.latitude, curLocation.longitude, function(zipData) {
    console.log(zipData);
    var zipHere = zipData.postalCodes[0].postalCode;
    Shelter.requestShelterList(zipHere, function(shelterData) {
      var shelterList = shelterData.petfinder.shelters.shelter;
      Shelter.loadAll(shelterList);
      loadMarkers();
    });
  });
  infowindow.setPosition(curLocation.pos);
  infowindow.setContent('Location found.');
  map.setCenter(curLocation.pos);
};

//   navigator.geolocation.getCurrentPosition(function(position) {
//     var latHere = position.coords.latitude;
//     var lngHere = position.coords.longitude
//     var pos = {
//       lat: latHere,
//       lng: lngHere
//     };
//   }, function() {
//     handleLocationError(true, infoWindow, map.getCenter());
//   });
// } else {
//   handleLocationError(false, infoWindow, map.getCenter());
//   var burien = {lat: 47.466575, lng: -122.341207};
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: burien,
//     zoom: 11
//   });


// <<<<<<< HEAD
//   Shelter.all.forEach(function(cur) {
//     var shelterLoc = new google.maps.LatLng(parseFloat(cur.latitude),parseFloat(cur.longitude));
//     console.log(shelterLoc);
//     shelterView.createMarker(shelterLoc, cur.name, map, infowindow);
//   });
// =======
// >>>>>>> 29_geolocate_shelters

  loadMarkers();

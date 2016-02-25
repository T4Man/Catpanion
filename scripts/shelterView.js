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

  map = new google.maps.Map(document.getElementById('map'), {
    // center: curLocation.pos,
    zoom: 11
  })
  // if (!curLocation.latitude) {
  // }
  curLocation.getLocation(map, function() {
    PostalCode.requestList(curLocation.latitude, curLocation.longitude, function(zipData) {
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
    
  });
};

loadMarkers();

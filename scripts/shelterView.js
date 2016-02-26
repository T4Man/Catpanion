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
    var shelterLoc = {
      lat: parseFloat(cur.latitude),
      lng: parseFloat(cur.longitude)
    };
    var markerContent = '';
    if(cur.name) {
      markerContent += '<div><strong>' + cur.name + '</strong><br>';
    }
    if(cur.address1) {
      markerContent += cur.address1 + '<br>';
    }
    if(cur.address2) {
      markerContent += cur.address2 + '<br>';
    }
    shelterView.createMarker(shelterLoc, markerContent, map, infowindow);
  });
}

function initShelterMap() {
  var burien = {lat: 47.466575, lng: -122.341207};
  map = new google.maps.Map(document.getElementById('map'), {
    center: burien,
    zoom: 11
  });
  infowindow = new google.maps.InfoWindow();

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

}

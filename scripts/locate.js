(function(module) {
  curLocation = {};

  curLocation.getLocFromZip = function(map) {
    curLocation.zipCode = prompt('Please enter your Zip Code', '98019');
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: curLocation.zipCode }, function(results, status) {
      if(status === 'OK') {
        curLocation.gLocation = results[0].geometry.location;
        curLocation.latitude = curLocation.gLocation.lat();
        curLocation.longitude = curLocation.gLocation.lng();
        curLocation.pos = {
          lat: curLocation.latitude,
          lng: curLocation.longitude
        };
        map.setCenter(curLocation.gLocation);
      } else {
        console.log('geocode Not OK');
      }
    });
  }

  curLocation.getLocFromBrowser = function(map) {
    navigator.geolocation.getCurrentPosition(function(position) {
      curLocation.latitude = position.coords.latitude;
      curLocation.longitude = position.coords.longitude;
      curLocation.pos = {
        lat: curLocation.latitude,
        lng: curLocation.longitude
      };
      console.log(curLocation.pos);
      map.setCenter(curLocation.pos)
      curLocation.gLocation = new google.maps.LatLng(curLocation.latitude, curLocation.longitude);
    }, function() {
      console.log('Geolocation failed');
      // curLocation.getLocFromZip(map);
    });
  }

  curLocation.getLocation = function(map, callback) {
    var pos;
    if (navigator.geolocation) {
      curLocation.getLocFromBrowser(map);
    } else {
      curLocation.getLocFromZip(map);
    };
    if(callback) {
      callback();
    };
  }

  module.curLocation = curLocation;
})(window);
// curLocation.getLocation();

(function(module) {
  curLocation = {};

  curLocation.getLocFromZip = function() {
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
      } else {
        console.log('geocode Not OK');
      }
    });
  }

  curLocation.getLocFromBrowser = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      curLocation.latitude = position.coords.latitude;
      curLocation.longitude = position.coords.longitude;
      curLocation.pos = {
        lat: curLocation.latitude,
        lng: curLocation.longitude
      };
      curLocation.gLocation = new google.maps.LatLng(curLocation.latitude, curLocation.longitude);
    });
  }

  curLocation.getLocation = function(callback) {
    var pos;
    if (navigator.geolocation) {
      curLocation.getLocFromBrowser();
    } else {
      curLocation.getLocFromZip();
    };
    if(callback) {
      callback();
    };
  }

  module.curLocation = curLocation;
})(window);

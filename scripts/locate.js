(function(module) {

  curLocation = {};

  curLocation.getLocation = function(callback) {
    var pos;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('lat ' + position.coords.latitude);
        console.log('lng ' + position.coords.longitude);
        curLocation.pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        callback();
      });
    }
  }

  module.curLocation = curLocation;
})(window);

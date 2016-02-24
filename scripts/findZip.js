function PostalCode(opts) {
  Object.keys(opts).forEach(function(ele, index, keys) {
    this[ele] = opts[ele];
  }, this);
}

PostalCode.all = [];

PostalCode.requestList = function(lat, lng, callback) {
  var geonamesApiCall = 'http://api.geonames.org/findNearbyPostalCodesJSON?' +
      'lat=' + lat + '&lng=' + lng + '&username=catpanion';
      // 'lat=' + lat + '&lng=' + lng + '&username=catpanion&maxRows=1';
  $.getJSON(geonamesApiCall)
    .done(function(postalData) {callback(postalData);})
    .error(function(err) {console.log('Error: ' + JSON.stringify(err));})
}

var inLat = 47.6201451;
var inLng = -122.3298646;

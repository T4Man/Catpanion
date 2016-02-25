function PostalCode(opts) {
  Object.keys(opts).forEach(function(ele, index, keys) {
    this[ele] = opts[ele];
  }, this);
}

PostalCode.all = [];

PostalCode.requestList = function(lat, lng, callback) {
  var geonamesApiCall = 'http://api.geonames.org/findNearbyPostalCodesJSON?' +
      'lat=' + lat + '&lng=' + lng + '&username=catpanion';

      $.ajax({
        url: geonamesApiCall,
        dataType: 'json',
        async: false,
        success: function(postalData) {
          if(callback) {
            callback(postalData);
          }
        },
        error: function(err) {
          console.log('error' + JSON.stringify(err));
        }
      });
    }

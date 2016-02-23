function Shelter(opts) {
  Object.keys(opts).forEach(function(ele, index, keys) {
    this[ele] = opts[ele].$t;
  }, this);
}

Shelter.all = [];

var map,
    infowindow;

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
  }

  Shelter.requestShelterList = function(location, callback) {
    var petFinderKey = 'fc112f63a02888e709b52b7778826df7';
    var petFinderApi = 'http://api.petfinder.com/shelter.find?format=json&key='
    + petFinderKey + '&location=' + location +'&callback=?';
    $.getJSON(petFinderApi)
    .done(function(petApiData) {callback(petApiData);})
    .error(function(err) {console.log('Error: ' + JSON.stringify(err));});
  }

  Shelter.requestShelterList('98026', function(data) {
    var shelterList = data.petfinder.shelters.shelter;
    Shelter.loadAll(shelterList);
  });

  Shelter.loadAll = function(list) {
    Shelter.all = list.map(function(ele) {
      return new Shelter(ele);
    })
  }

}

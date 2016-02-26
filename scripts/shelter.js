function Shelter(opts) {
  Object.keys(opts).forEach(function(ele, index, keys) {
    this[ele] = opts[ele].$t;
  }, this);
}

Shelter.all = [];

Shelter.requestShelterList = function(location, callback) {
  var petFinderKey = 'fc112f63a02888e709b52b7778826df7';
  var petFinderApi = 'http://api.petfinder.com/shelter.find?format=json&key='+
  petFinderKey + '&location=' + location +'&callback=?';
  $.getJSON(petFinderApi, function(petApiData) {callback(petApiData);})
  // .done(function(petApiData) {callback(petApiData);})
  .error(function(err) {console.log('Error: ' + JSON.stringify(err));});
};

Shelter.requestShelterList('98109', function(data) {
  var shelterList = data.petfinder.shelters.shelter;
  Shelter.loadAll(shelterList);
});

Shelter.loadAll = function(list) {
  Shelter.all = list.map(function(ele) {
    return new Shelter(ele);
  });
};

function showShelters(){
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

          Shelter.all.forEach(function(a){
            $('#shelters').append(a.toHtml());
          });
        })
      })
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
} showShelters();

Shelter.prototype.toHtml = function(){
  var template = Handlebars.compile($('#shelter-template').html());
  return template(this);
};

$(function(){
  $('#shelter-list-button').click(function(){
  console.log('click');
  $('.breed-articles').hide();
  $('#breeds').hide();
  $('#shelters').show();
  });
});

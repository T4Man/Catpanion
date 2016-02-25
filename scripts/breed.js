
function Breed(opts) {
  Object.keys(opts).forEach(function(e, index, keys) {
    this[e] = opts[e];
  },this);
}

Breed.all = [];

Breed.requestBreeds = function(callback) {
  var petFinderKey = 'fc112f63a02888e709b52b7778826df7';
  var petFinderApi = 'http://api.petfinder.com/breed.list?format=json&key=' + petFinderKey + '&animal=cat&location=98026&callback=?'
  $.getJSON(petFinderApi, function(petApiData) { callback(petApiData); })
    .error(function(err) {console.log('Error: ' + JSON.stringify(err));});
}

Breed.loadAll = function(list) {
  Breed.all = list.map(function(ele) {
    return ele.$t
  });
}

Breed.requestBreeds(function(data){
  var breedList = data.petfinder.breeds.breed;
  Breed.loadAll(breedList);

// DOM stuff is here because of latency issues

  Breed.all.forEach(function(breed) {
    $('#breeds').append($('<li>').text(breed));
  });
});

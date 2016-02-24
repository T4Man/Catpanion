function PfBreed(opts) {
  Object.keys(opts).forEach(function(e, index, keys) {
    this[e] = opts[e];
  },this);
}

PfBreed.all = [];

PfBreed.requestBreeds = function(callback) {
  var petFinderKey = 'fc112f63a02888e709b52b7778826df7';
  var petFinderApi = 'http://api.petfinder.com/breed.list?format=json&key=' + petFinderKey + '&animal=cat&location=98026&callback=?'
  $.getJSON(petFinderApi)
    .done(function(petApiData) {callback(petApiData);})
    // .done(function(petApiData) {console.log('petApiData is'); console.log(petApiData);})
    .error(function(err) {console.log('Error: ' + err);});
}

PfBreed.loadAll = function(list) {
  PfBreed.all = list.map(function(ele) {
    return ele.$t
  })
}

PfBreed.requestBreeds(function(data){
  var breedList = data.petfinder.breeds.breed;
  PfBreed.loadAll(breedList);
});

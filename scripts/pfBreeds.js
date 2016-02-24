function Breed(opts) {
  Object.keys(opts).forEach(function(e, index, keys) {
    this[e] = opts[e];
  },this);
}

Breed.all = [];

Breed.requestBreeds = function(callback) {
  var petFinderApi = 'http://api.petfinder.com/breed.list?format=json&key=' + petFinderKey + '&animal=cat&location=98026&callback=?'
  $.getJSON(petFinderApi)
    .done(function(petApiData) {callback(petApiData);})
    // .done(function(petApiData) {console.log('petApiData is'); console.log(petApiData);})
    .error(function(err) {console.log('Error: ' + err);});
}

Breed.loadAll = function(list) {
  Breed.all = list.map(function(ele) {
    return ele.$t
  })
}

Breed.requestBreeds(function(data){
  var breedList = data.petfinder.breeds.breed;
  Breed.loadAll(breedList);
});

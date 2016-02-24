var breedView = {};

var renderBreed = function(breed) {
  return $('<li>').text(breed);
}

breedView.index = function(breedArray) {
  Breed.all.forEach(function(breed) {
    console.log(breed);
    console.log(renderBreed(breed));
    $('#breeds').append(renderBreed(breed));
  });
}

breedView.index();

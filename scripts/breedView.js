var breedView = {};

var renderBreed = function(breed) {
  return $('<li>').text(breed);
}

breedView.index = function(breedArray) {
  Breed.all.forEach(function(breed) {
    $('#breeds').append(renderBreed(breed));
  });
}

breedView.index();

$(function(){
  $('#breed-list-button').click(function(){
  console.log('click');
  $('.breed-articles').hide();
  $('#shelters').hide();
  $('#breeds').fadeToggle();
  });
});

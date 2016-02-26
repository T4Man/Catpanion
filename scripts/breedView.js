$(function(){

  var breedView = {};

  var renderBreed = function(breed) {
    return $('<li>').text(breed);
  };

  breedView.index = function(breedArray) {
    // :::: REFACTORED INTO BREED.JS - TOO MANY CALLS?? :::::

    // setTimeout(function() {
    //   Breed.all.forEach(function(breed) {
    //     $('#breeds').append(renderBreed(breed));
    //   });
    // }, 500);
  };

  breedView.index();

});

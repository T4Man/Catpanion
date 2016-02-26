(function(module) {
  var breedListPage = {};

  breedListPage.index = function(){
    $('#shelters').hide();
    $('.breed-articles').hide();
    $('#breeds').show();
    $('.scrollup').show();
  };

  module.breedListPage = breedListPage;
})(window);

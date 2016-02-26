(function(module) {
  var shelterListPage = {};

  shelterListPage.index = function(){
    $('.breed-articles').hide();
    $('#breeds').hide();
    $('#shelters').show();
    $('.scrollup').show();
  };

  module.shelterListPage = shelterListPage;
})(window);

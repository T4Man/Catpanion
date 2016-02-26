(function(module) {
  var startPage = {};

  startPage.index = function(){
    $('#map').hide();
    $('#breeds').hide();
    $('#shelters').hide();
    $('.breed-articles').hide();
    $('.selector-cats').hide();
    $('.scrollup').hide();
    $('#intro-wrapper').show();
  };

  module.startPage = startPage;
})(window);

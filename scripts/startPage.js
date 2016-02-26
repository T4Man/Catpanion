(function(module) {
  startPage = {};
  startPage.index = function() {
    $('#wrapper').hide();
    $('#map').hide();
    //$('#breeds').hide();
    //$('#shelters').hide();
    $('.breed-articles').hide();
    $('.selector-cats').hide();
  }
    module.startPage = startPage;
})(window);

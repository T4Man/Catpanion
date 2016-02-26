(function(module) {
  var seeTheCatsPage = {};

  seeTheCatsPage.index = function(){
    $('#breeds').hide();
    $('#shelters').hide();
    $('.breed-articles').show();
    $('.scrollup').show();
  };

  module.seeTheCatsPage = seeTheCatsPage;
})(window);

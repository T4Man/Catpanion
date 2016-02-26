(function(module) {
  var nannyController = {};

  nannyController.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initMap('pet sitter');
  };

  module.nannyController = nannyController;
})(window);

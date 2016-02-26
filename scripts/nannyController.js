(function(module) {
  var nannyController = {};

  nannyController.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initShelterMap();
  };

  module.nannyController = nannyController;
})(window);

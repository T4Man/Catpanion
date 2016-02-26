(function(module) {
  var adoptController = {};

  adoptController.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initShelterMap();
  };

  module.adoptController = adoptController;
  })(window);

(function(module) {
  var donateController = {};

  donateController.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initShelterMap();
  };

  module.donateController = donateController;
  })(window);

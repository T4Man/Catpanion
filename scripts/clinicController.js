(function(module) {
  var clinicController = {};

  clinicController.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initShelterMap();
  };

  module.clinicController = clinicController;
})(window);

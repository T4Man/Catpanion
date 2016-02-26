(function(module) {
  var clinicController = {};

  clinicController.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initMap('veterinarian');
  };

  module.clinicController = clinicController;
})(window);

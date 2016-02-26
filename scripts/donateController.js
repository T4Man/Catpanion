(function(module) {
  var donateController = {};

  donateController.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initMap('animal rescue');
  };

  module.donateController = donateController;
})(window);

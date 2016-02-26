  // $('#map').hide();
  //
  // $('#donate-button').on('click', function(){
  //   $('#intro-wrapper').hide();
  //   $('#map').fadeIn(200);
  //   initMap('animal rescue');
  // });
  //
  // $('#clinic-button').on('click', function(){
  //   $('#intro-wrapper').hide();
  //   $('#map').fadeIn(200);
  //   initMap('veterinarian');
  // });
  //
  // $('#adopt-button').on('click', function(){
  //   $('#intro-wrapper').hide();
  //   $('#map').fadeIn(200);
  //   initShelterMap();
  // });
  //
  // $('#sitter-button').on('click', function(){
  //   $('#intro-wrapper').hide();
  //   $('#map').fadeIn(200);
  //   initMap('pet sitter');
  // });
navController = {};

navController.donate = function() {
  $('#intro-wrapper').hide();
  $('#map').fadeIn(200);
  initMap('animal rescue');
};

navController.clinic = function() {
  $('#intro-wrapper').hide();
  $('#map').fadeIn(200);
  initMap('veterinarian');
};

navController.adopt = function() {
  $('#intro-wrapper').hide();
  $('#map').fadeIn(200);
  initShelterMap();
};

navController.sitter = function() {
  $('#intro-wrapper').hide();
  $('#map').fadeIn(200);
  initMap('pet sitter');
};

/*(function(module) {
  var navControllers = {};

  adoptPage.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initShelterMap();
  };

  donatePage.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initMap('animal rescue');
  };

  clinicPage.index = function(){
    $('#intro-wrapper').hide();
    $('#map').show();
    initMap('veterinarian');
  };

  nannyPage.index = function(){
    ('#intro-wrapper').hide();
    $('#map').show();
    initMap('pet sitter');
  };

  module.navControllers = navControllers;
})(window);


//$('#map').hide();

$('#donate-button').on('click', function(){
  $('#intro-wrapper').hide();
  $('#map').fadeIn(200);
  initMap('animal rescue');
});

$('#clinic-button').on('click', function(){
  $('#intro-wrapper').hide();
  $('#map').fadeIn(200);
  initMap('veterinarian');
});

$('#adopt-button').on('click', function(){
  $('#intro-wrapper').hide();
  $('#map').fadeIn(200);
  initShelterMap();
});

$('#sitter-button').on('click', function(){
  $('#intro-wrapper').hide();
  $('#map').fadeIn(200);
  initMap('pet sitter');
});

//Attempted refactor but had roadblocks and ran out of time. Focused on client
//side routing instead.
*/

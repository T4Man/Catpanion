  $('#map').hide();

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

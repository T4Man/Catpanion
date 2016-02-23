$('#map').hide();

$('#donate-button').on('click', function(){
  $('#map').fadeIn(200);
  initMap('animal rescue');
});

$('#clinic-button').on('click', function(){
  $('#map').fadeIn(200);
  initMap('veterinarian');
  getDetails();
});

$('#adopt-button').on('click', function(){
  $('#map').fadeIn(200);
  initShelterMap();
});

$('#sitter-button').on('click', function(){
  $('#map').fadeIn(200);
  initMap('pet sitter');
});

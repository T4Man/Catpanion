$('#map').hide();
$('#donate-button').on('click', function(){
  $('.cat-div').hide();
  $('#map').fadeIn(200);
  initMap();
});

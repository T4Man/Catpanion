charView = {};
//display cat articles by characteristic

charView.displayFiltered = function(){
  $('#charFilter').on('change', function(){
    var $this = $(this).val();
    $('article').hide();

    console.log($this);
    if ($(this).val() === "affList"){
      affList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($(this).val() === "groomList"){
      groomList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($(this).val() === "shedList"){
      shedList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($(this).val() === "playList"){
      playList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($(this).val() === "intelList"){
      intelList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($(this).val() === "vocalList"){
      vocalList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($(this).val() === "kidsList"){
      kidsList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($(this).val() === "animList"){
      animList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($(this).val() === "healthList"){
      healthList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else {
      console.log('something went wrong');
    }

  });
};
charView.displayFiltered();

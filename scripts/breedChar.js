charView = {};
//display cat articles by characteristic

charView.displayFiltered = function(){
  $('#charFilter').on('change', function(){
    var $this = $(this).val();
    $('article').hide();

    console.log($this);
    if ($this === "affList"){
      affList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($this === "groomList"){
      groomList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($this === "shedList"){
      shedList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($this === "playList"){
      playList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($this === "intelList"){
      intelList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($this === "vocalList"){
      vocalList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($this === "kidsList"){
      kidsList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($this === "animList"){
      animList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else if ($this === "healthList"){
      healthList.forEach(function(el) {
        $('div.breedArticles').append(el.toHtml());
      });
    } else {
      console.log('something went wrong');
    }

  });
};
charView.displayFiltered();

var selectorView = {};

var template = Handlebars.compile($('#question-template').html());
var temp = template(questions);
$('div.questionBox').append(temp);
//$('div.questionBox').hide();

$('#selectorButton').click(function(){
  $('.breedArticles').hide();
  $('div.questionBox').fadeToggle(200);
});

answers = [];
matches = [];

selectorView.collect = function() {
  $('#submitButton').click(function(event){
    var selected = $('input[type="radio"]:checked').each(function(){
    var userInput = parseInt($(this).attr("value").toString(), 10);
    answers.push(userInput);
    }); event.preventDefault();

    for (i=0; i<catProperties.length; i++){
    var aff = catProperties[i].affectionate;
    var affBreed = catProperties[i].breed;
      if (answers[0] === aff){
      matches.push(affBreed);
      }
    }
    for (i=0; i<catProperties.length; i++){
    var groom = catProperties[i].grooming;
    var groomBreed = catProperties[i].breed;
      if (answers[1] === groom){
      matches.push(groomBreed);
      }
    }
    for (i=0; i<catProperties.length; i++){
    var shed = catProperties[i].shedding;
    var shedBreed = catProperties[i].breed;
      if (answers[2] === shed){
      matches.push(shedBreed);
      }
    }
    for (i=0; i<catProperties.length; i++){
    var play = catProperties[i].playfulness;
    var playBreed = catProperties[i].breed;
      if (answers[3] === play){
      matches.push(playBreed);
      }
    }
    for (i=0; i<catProperties.length; i++){
    var intel = catProperties[i].intelligence;
    var intelBreed = catProperties[i].breed;
      if (answers[4] === intel){
      matches.push(intelBreed);
      }
    }
    for (i=0; i<catProperties.length; i++){
    var vocal = catProperties[i].vocality;
    var vocalBreed = catProperties[i].breed;
      if (answers[5] === vocal){
      matches.push(vocalBreed);
      }
    }
    for (i=0; i<catProperties.length; i++){
    var toler = catProperties[i].toleranceWithKids;
    var tolerBreed = catProperties[i].breed;
      if (answers[6] === toler){
      matches.push(tolerBreed);
      }
    }
    for (i=0; i<catProperties.length; i++){
    var health = catProperties[i].generalHealth;
    var healthBreed = catProperties[i].breed;
      if (answers[7] === health){
      matches.push(healthBreed);
      }
    }
    $('.questionBox').hide();
    $('article.allBreeds').hide();

    for (i=0; i<catProperties.length; i++){
    var name = catProperties[i].breed;
      getCount(name, matches);
    }
  });
};
function getCount(word, arr) {
  var i = matches.length,
      j = 0;
      catId = word;
  while (i) if (matches[--i] === word) ++j;
    if (j >= 4){
      console.log(catId);
      $('article[id="' + catId + '"]').fadeIn();
    }
}

selectorView.collect();



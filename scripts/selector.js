var selectorView = {};

var template = Handlebars.compile($('#question-template').html());
var temp = template(questions);
$('div.questionBox').append(temp);
$('div.questionBox').hide();

$('#selectorButton').click(function(){
  $('.breedArticles').hide();
  $('div.questionBox').fadeToggle(200);
});

answers = [];
matches = [];

selectorView.collect = function() {
  $('#submitButton').click(function(e){
    var selected = $('input[type="radio"]:checked').each(function(){
    var userInput = parseInt($(this).attr("value").toString(), 10);
    answers.push(userInput);
    }); e.preventDefault();

    $('catProperties').each(function(i){
    var aff = catProperties[i].affectionate;
    var affBreed = catProperties[i].breed;
      if (answers[0] === aff){
      matches.push(affBreed);
      }
    });
    $('catProperties').each(function(i){
    var groom = catProperties[i].grooming;
    var groomBreed = catProperties[i].breed;
      if (answers[1] === groom){
      matches.push(groomBreed);
      }
    });
    $('catProperties').each(function(i){
    var shed = catProperties[i].shedding;
    var shedBreed = catProperties[i].breed;
      if (answers[2] === shed){
      matches.push(shedBreed);
      }
    });
    $('catProperties').each(function(i){
    var play = catProperties[i].playfulness;
    var playBreed = catProperties[i].breed;
      if (answers[3] === play){
      matches.push(playBreed);
      }
    });
    $('catProperties').each(function(i){
    var intel = catProperties[i].intelligence;
    var intelBreed = catProperties[i].breed;
      if (answers[4] === intel){
      matches.push(intelBreed);
      }
    });
    $('catProperties').each(function(i){
    var vocal = catProperties[i].vocality;
    var vocalBreed = catProperties[i].breed;
      if (answers[5] === vocal){
      matches.push(vocalBreed);
      }
    });
    $('catProperties').each(function(i){
    var toler = catProperties[i].toleranceWithKids;
    var tolerBreed = catProperties[i].breed;
      if (answers[6] === toler){
      matches.push(tolerBreed);
      }
    });
    $('catProperties').each(function(i){
    var health = catProperties[i].generalHealth;
    var healthBreed = catProperties[i].breed;
      if (answers[7] === health){
      matches.push(healthBreed);
      }
    });
    $('.questionBox').hide();
    $('article.allBreeds').hide();

    $('catProperties').each(function(i){
    var name = catProperties[i].breed;
      getCount(name, matches);
    });
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

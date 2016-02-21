function CatConstr (opts){
  Object.keys(opts).forEach(function(e, index, keys) {
    this[e] = opts[e];
  },this);
}
 /*//UNDER CONSTRUCTION
CatConstr.all = [];

CatConstr.createTable = function(callback) {
  webDB.execute(
    'CREATE TABLE IF NOT EXISTS catArticles (' +
      'id INTEGER PRIMARY KEY, ' +
      'breed VARCHAR(255) NOT NULL, ' +
      'affectionate INTEGER, ' +
      'grooming INTEGER, ' +
      'shedding INTEGER, ' +
      'playfulness INTEGER, ' +
      'intelligence INTEGER, ' +
      'vocality INTEGER, ' +
      'toleranceWithKids INTEGER, ' +
      'toleranceWithOtherAnimals INTEGER, ' +
      'generalHealth INTEGER, ' +
      'image TEXT NOT NULL, ' +
      'personality TEXT NOT NULL, ' +
      'traits TEXT NOT NULL);',
    callback
  );
};

CatConstr.showAllCats = function(callback) {
  webDB.execute('SELECT * FROM catArticles ORDER BY breed ASC', function(rows){
    if (rows.length) {
      catArticle.loadAll(rows);
      callback();
    } else {
      $.getJSON('/data/catabase.json', function(rawData){
        rawData.forEach(function(item){
          var article = new CatConstr(item);
          article.insertRecord();
        });
        webDB.execute('SELECT * FROM catArticles', function(row) {
          CatConstr.loadAll(rows);
          callback();
        });
      });
    }
  });
};
//for use by breedChar.js
CatConstr.allCategories = function(callback) {
  webDB.execute('SELECT DISTINCT category FROM articles;', callback);
};
*/

var catArticles = [];
var affList = [];
var groomList = [];
var shedList = [];
var playList = [];
var intelList = [];
var vocalList = [];
var kidsList = [];
var animList = [];
var healthList = [];

$('.breedArticles').hide();
$('#charList').hide();

function showAllCats(){
  catArticles.forEach(function(a) {
  $('div.breedArticles').append(a.toHtml());
  });
  $('#charList').fadeToggle(200);
}

CatConstr.prototype.toHtml = function(){
  var template = Handlebars.compile($('#breed-template').html());
  return template(this);
};

catProperties.forEach(function(ele){
  catArticles.push(new CatConstr(ele));
});

filterAffectCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.affectionate > 4;
  });
  filterList.forEach(function(ele){
    affList.push(new CatConstr(ele));
  });
}; filterAffectCats();

filterGroomCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.grooming > 4;
  });
  filterList.forEach(function(ele){
    groomList.push(new CatConstr(ele));
  });
}; filterGroomCats();

filterShedCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.shedding > 4;
  });
  filterList.forEach(function(ele){
    shedList.push(new CatConstr(ele));
  });
}; filterShedCats();

filterPlayCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.playfulness > 4;
  });
  filterList.forEach(function(ele){
    playList.push(new CatConstr(ele));
  });
}; filterPlayCats();

filterIntelCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.intelligence > 4;
  });
  filterList.forEach(function(ele){
    intelList.push(new CatConstr(ele));
  });
}; filterIntelCats();

filterVocalCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.vocality > 4;
  });
  filterList.forEach(function(ele){
    vocalList.push(new CatConstr(ele));
  });
}; filterVocalCats();

filterKidCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.toleranceWithKids > 4;
  });
  filterList.forEach(function(ele){
    kidsList.push(new CatConstr(ele));
  });
}; filterKidCats();

filterAnimCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.toleranceWithOtherAnimals > 4;
  });
  filterList.forEach(function(ele){
    animList.push(new CatConstr(ele));
  });
}; filterAnimCats();

filterHealthCats = function(){
  var filterList = catProperties.filter(function(el){
    return el.generalHealth > 4;
  });
  filterList.forEach(function(ele){
    healthList.push(new CatConstr(ele));
  });
}; filterHealthCats();

$(function(){
  showAllCats();
  $('#breedButton').click (function(){
    $('questionBox').hide();
    $('.selectorCats').hide();
  $('.breedArticles').fadeToggle(200);
  });
});

(function(module) {

function CatConstr (opts){
  Object.keys(opts).forEach(function(e, index, keys) {
    this[e] = opts[e];
  },this);
}

CatConstr.all = [];

CatConstr.getAll = function() {
  $.getJSON('scripts/catabase.json', function(data){
    localStorage.rawData = JSON.stringify(data);
    CatConstr.loadAll(data);

  });
};

CatConstr.loadAll = function(rawData) {
  CatConstr.all = rawData.map(function(ele){
    return new CatConstr(ele);
  });
};

CatConstr.fetchAll = function() {
  if (localStorage.rawData) {
    CatConstr.loadAll(JSON.parse(localStorage.rawData));
  }else {
    $.getJSON('scripts/catabase.json', function(rawData) {
      CatConstr.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
    });
  }
};

CatConstr.fetchAll();


function showAllCats(){
  CatConstr.all.forEach(function(a) {
  $('.breed-articles').append(a.toHtml());
  });
}

CatConstr.prototype.toHtml = function(){
  var template = Handlebars.compile($('#breed-template').html());
  return template(this);
};

$(function(){
  showAllCats();
  $('#breedButton').click (function(){
  $('.breed-articles').fadeToggle(200);
  });
});
  module.CatConstr = CatConstr;
})(window);

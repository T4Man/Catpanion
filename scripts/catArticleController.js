(function(module) {

  var catArticlesController = {};

    $('#char-filter').on('change', function() {
      var attr = $(this).val();
        $('.breed-articles').empty();
        $('#breeds').hide();
        $('#shelters').hide();
        $('.breed-articles').show();
        CatConstr.all.filter(function(o){
          return o[attr] === 5;
        }).map(function(a){
          $('.breed-articles').append(a.toHtml());
        });
      });

  module.catArticlesController = catArticlesController;
})(window);

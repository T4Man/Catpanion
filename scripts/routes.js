page('/', startPage.index);

page('/adoption',
  initMap(),
  navcontroller.adopt);

page('/donate')
  initMap(),
  navController.donate);

page('/clinics')
  initMap(),
  navController.clinic);

page('/nanny')
  initMap(),
  navController.sitter);

// page('/Cat-Selector',
  // selectorView.index);

// page('/allBreeds',
  //showAllCats(),
  // CatConstr.index);

// page('/filterCharacteristics',
  // catArticlesController.index);

page();

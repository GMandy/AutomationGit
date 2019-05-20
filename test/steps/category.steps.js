const { defineSupportCode }     = require('cucumber');
const page                      = require('../../test/src/pages/category.page');

defineSupportCode(function({Given, When, Then}){
    
    Given('The menu display after loggin', function() {
        page.menuLoad();
    });

    When('I click a category link', function(){
         page.mainCategoryPage();
        var sub =  page.subCategoryPage();
        console.log('category is opened: '+ sub);

    });

    Then('The category page opened', function(){
        var list = page.productList();
        console.log(list);
    });
})
const { defineSupportCode }     = require('cucumber');
const page                      = require('../../test/src/pages/product.page');

defineSupportCode(function({Given, When, Then}){
    
    Given('I opened a product page', function() {
        page.load();
    });

    When('I select options and click add to cart button', function(){
        page.selectOption();
    });

    Then('The product is added to shopping cart', function(){
        page.addToCart();
    });
})
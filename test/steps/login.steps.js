const { defineSupportCode }     = require('cucumber');
const page                      = require('../../test/src/pages/login.page');
const pageOut                     = require('../../test/src/pages/loginOutline.page');


defineSupportCode(function({Given, When, Then}){
    
    Given('I am on the login page', function() {
        page.load();
    });

    When ('I login using {username} and {password}',function(username,password){
        pageOut.inputAccount(username,password);
    })

    When('I login using correct account {String}', function(account){
        page.login(account);
    
    });

    When('I click singin button',function(){
        pageOut.login();
    })

    Then('I can logout', function(){
        page.logout();
   
   });

   Then('I login successful', function(){
    pageOut.logout();

});
})
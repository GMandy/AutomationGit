const { defineSupportCode }     = require('cucumber');
const page                      = require('../../test/src/pages/home.page');

defineSupportCode(function({When}){

    When('I open baidu home page', function(){
        page.load();
    });
})
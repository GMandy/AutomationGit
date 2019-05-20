const page      = require('./page');
const should    = require('should');

const categoryPage = Object.create(page,{
    //href: {get: function(){return'/sashes';}},
    
    supermenu: {get: function(){return $('#supermenu');}},
    categlink: {get: function(){return $$('.Top-Nav')[3];}},
    lftNav: {get: function(){return $('#lftNav_Category');}},
    subcateglink: {get: function(){return $('#lftNav_Category').$$('li')[5].$('a');}},
    productlist: {get: function(){return $('.product_list_header_outer_table');}},


    menuLoad: {value: function(){
        return this.supermenu.waitForVisible();
    }},

    mainCategoryPage: {value: function(){
        this.categlink.click();
       // return browser.getUrl().should.eql('https://cms.andersons.com/royalty');
        console.log(browser.getUrl());
    }},

    subCategoryPage: {value: function(){
        this.lftNav.waitForVisible();
        this.subcateglink.click();
        this.supermenu.waitForVisible();
        return browser.getUrl();
    }},

    productList: {value: function(){
        return this.productlist.waitForVisible();
    }}
    
})
module.exports = categoryPage;
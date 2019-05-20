const page      = require('./page');
const should    = require('should');

const productPage = Object.create(page,{
    opitons: {get: function(){return $('.swatch');}},
    attrib1: {get: function(){return $$('.carousel_image')[0];}},
    customize: {get: function(){return $('=Customize');}},
    add_to_cart: {get: function(){return $('=Add to Cart');}},
    popup: {get: function(){return $('#done');}},
    check_out: {get: function(){return $('.pdp_btn_cancel');}},
    cart: {get: function(){return $('h4=Cart');}},

    load: {value: function(){
        browser.url('/royalty/crowns/velvet-crowns/black-grandeur-crown');
        return this.customize.waitForVisible();
    }},

    selectOption: {value: function(){
        this.opitons.waitForVisible();
        this.attrib1.click(); 
        this.checkout();  
    }},

    checkout: {value: function(){
        this.add_to_cart.waitForVisible();
        this.add_to_cart.click();
        this.popup.waitForVisible();
        console.log('66666');
        this.check_out.click();
    }},

    addToCart: {value: function(){
        this.cart.waitForVisible();
        browser.getUrl().should.eql('https://cms.andersons.com/shopping-cart');
        console.log('Add to cart successful!');
    }}
})


module.exports = productPage;
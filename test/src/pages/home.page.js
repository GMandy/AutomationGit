const page      = require('./page');
//const should    = require('should');

const homepage = Object.create(page,{
    href: {get: function(){return'/';}},

    hao123: {get: function(){return $('#u1').$$('a')[1];}},

    load: {value: function(){
       // page.load.call(this,this.href);
        this.linkDisplay();
    }},

    linkDisplay: {value: function(){
        this.hao123.waitForVisible();
       // browser.waitUntil(function(){
          //  return this.hao123.getText() === 'hao123';
      //  },'open unsuccessful', 5000);
    }}

})

module.exports = homepage;
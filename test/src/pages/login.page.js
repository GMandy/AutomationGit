const page      = require('./page');
const userParse = require('../../../test/support/user.parse');
//const should    = require('should');

const loginPage = Object.create(page,{
    href: {get: function(){return'/login';}},
    
    header: {get: function(){return $('#header');}},
    singin: {get: function(){return $('.signinLink');}},
    email: {get: function(){return $('#login_user_name');}},
    password: {get: function(){return $('#login_user_pass');}},
    submit: {get: function(){return $('#btnLogin');}},
    myaccount: {get: function(){return $('=My Account');}},
    log_out: {get: function(){return $('=Log Out');}},

    load: {value: function(){
        this.open();
        page.load.call(this,this.href);
    }},
    open: {value: function(){
        this.header.waitForVisible();
        this.singin.click();
    }},

    login: {value: function(account){
         let user = userParse.getUser(account);
         this.email.waitForVisible();
         this.email.setValue(user.username);
         this.password.setValue(user.password);
         this.submit.click();
         browser.waitUntil( this.myaccount.getText() == 'My Account','Login unsuccessful', 5000);
         return this.myaccount.getText();
    }},

   // waitForLogin: {value: function(){

       // browser.waitUntil(function(){
          //  return this.myaccount.getText() === 'My Account';
        //},'Login unsuccessful', 100000);
  //  }},

    logout: {value: function(){
        this.log_out.click();
        this.singin.waitForVisible();
        console.log(this.singin.getText());
    }}
})
module.exports = loginPage;
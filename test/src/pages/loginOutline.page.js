const page      = require('./page');
const userParse = require('../../../test/support/user.parse');
//const should    = require('should');

const loginOutlinePage = Object.create(page,{
    href: {get: function(){return'/login';}},
    
    header: {get: function(){return $('#header');}},
    singin: {get: function(){return $('.signinLink');}},
    email: {get: function(){return $('#login_user_name');}},
    password: {get: function(){return $('#login_user_pass');}},
    submit: {get: function(){return $('#btnLogin');}},
    myaccount: {get: function(){return $('=My Account');}},
    log_out: {get: function(){return $('=Log Out');}},
    login_hrd: {get: function(){return $('#hdr_login');}},

    load: {value: function(){
        this.open();
        page.load.call(this,this.href);
    }},
    open: {value: function(){
        this.header.waitForVisible();
        console.log('Home page is opened');
        this.singin.click();
    }},

    inputAccount: {value: function(username,password){
         this.email.waitForVisible();
         this.email.setValue(username);
         this.password.setValue(password);
    }},

    login: {value: function(){
        this.submit.click();
        browser.waitUntil( this.myaccount.getText() == 'My Account','Login unsuccessful', 5000);
        console.log('login: ' + this.myaccount.getText());
    }},


   // waitForLogin: {value: function(){

       // browser.waitUntil(function(){
          //  return this.myaccount.getText() === 'My Account';
        //},'Login unsuccessful', 100000);
  //  }},

    logout: {value: function(){
        this.log_out.click();
        console.log(browser.getUrl());
        return browser.getUrl() == 'https://cms.andersons.com/';
    }}
})
module.exports = loginOutlinePage;
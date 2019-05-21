const config = require('./wdio.conf').config;

/**
 * custom options for test
 *
 * this file is for implementing and debugging locally
 *
 */
config.baseUrl = 'https://cms.andersons.com';
config.specs = [ './test/features/user/product.feature'];

/*
 * selenium config
 *
 * browserName: browser we connect to, can be desktop browser or resolution by width
 * chromeOptions: Useful for setting browser configuration, EG: '--window-size=<width>,<height>'
 *
 */

//config.services = [ 'selenium-standalone' ];
//config.seleniumLogs = './logs/selenium.log';
config.maxInstances = 4;
config.capabilities = [
    {
        browserName: 'chrome',
        chromeOptions: {
            args: [ '--window-size=1920,1080','--user-data-dir=C:\\Users\\rmgao\\AppData\\Local\\Google\\Chrome\\User Data\\']
        }

        
    }
];

exports.config = config;
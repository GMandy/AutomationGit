const path          = require('path');
const mkdirp        = require('mkdirp');
const glob          = require('glob').sync;

exports.config = {

    /**
     * server configurations
     */
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',


    /**
     * features
     */
    specs: [
        './test/features/**/*.feature'
    ],


    /**
     * baseUrl
     */
    baseUrl: 'https://cms.andersons.com',


    /**
     * capabilities
     */
    maxInstances: 4,
    capabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: [ '--window-size=1920,1080','--profile-directory="Profile 1"' ]
            }
        },
    ],


    /**
     * test configurations
     * logLevel: silent | verbose | command | data | result | error
     */
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    screenshotPath: './results/screenshots',
    waitforTimeout:10000,
    framework: 'cucumber',
    cucumberOpts: {
        timeout: 50000,
        require: glob(path.join(__dirname, '/test/steps/*.steps.js')),
        ignoreUndefinedDefinitions: false,
        snippetSyntax: 'synchronous',
        snippets: false
    },
    reporters: [
        'spec',
        'junit'
    ],
    reporterOptions: {
        junit: {
            outputDir: './results/junit'
        }
    },

    before: function (capabilities, specs) {
        mkdirp.sync(browser.options.screenshotPath);
    },

    // Runs before each test scenario
    beforeScenario: function (scenario) {
        browser.url('/');
    },

    afterStep: function(result) {
        if (result.status === 'failed') {
            let browserName = browser.desiredCapabilities.browserName;
            let scenarioName = result.step.scenario.name.replace(/\s/g, '_').toLowerCase();
            let stepName = result.step.name.replace(/\s/g, '_').toLowerCase();
            let screenshot = `${browserName}.${scenarioName}.${stepName}.png`;
            let fileName = path.join(browser.options.screenshotPath, screenshot);
            browser.saveScreenshot(fileName);
        }
    },
    //debug: true,
   // execArgv: ['--debug=127.0.0.1:8585'],
};
const users = require('../../test/resources/users.json');

function UserParse (){}

UserParse.prototype.getUser = function(account){

    if (typeof this.user === 'undefined'){

        let browserName = browser.desiredCapabilities.browserName;
        try {
            this.user = users[account][browserName];
        } catch (err){
            throw `User is invalid: ${account}`;
        }

        console.log('type of users:' + typeof users)
    }
    return this.user;
}

module.exports = new UserParse();
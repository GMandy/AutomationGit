
function Page(){}

Page.prototype.load = function(href){
    browser.getUrl().should.containEql(href);
}

module.exports = new Page();
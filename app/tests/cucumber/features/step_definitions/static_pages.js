(function () {

  'use strict';

  module.exports = function () {

    var url = require('url');

    this.Given(/^I am a new user$/, function (callback) {
      callback();
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
      return this.client.
        url(url.resolve(process.env.ROOT_URL, relativePath)).
        waitForExist('h1');
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle) {
      return this.client.
        waitForExist('h1').
        getText('h1').should.become(expectedTitle);
    });

  }
})();

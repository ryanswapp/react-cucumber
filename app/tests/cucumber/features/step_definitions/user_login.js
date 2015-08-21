(function () {

  'use strict';

  module.exports = function () {

    this.Given(/^I am an existing user$/, function () {
      var self = this;

      return this.server.call('fixtures/reset').then(function() {
        return self.server.call('fixtures/seedData');
      });
    });

    this.When(/^I enter my email "([^"]*)" and password "([^"]*)"$/, function (email, password) {
      return this.client.
        setValue("[name='email']", email).
        setValue("[name='password']", password);
    });

    this.When(/^I submit the form$/, function () {
      return this.client.
        submitForm('form');
    });

    this.Then(/^I should see the home page$/, function () {
      return this.client.
        waitForExist('.jumbotron').
        getText('h1').should.become('React Meteor Template');
    });

  }
})();

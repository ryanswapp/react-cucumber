Meteor.methods({

  'fixtures/reset': function () {
    Meteor.users.remove({});
  },

  'fixtures/seedData': function () {
    Accounts.createUser({
      email: "ryancswapp@gmail.com",
      password: "foodbars"
    }); 
  }

});

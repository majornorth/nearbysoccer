Template.gamePlan.helpers({ 
  ownGame: function() {
    return this.userId == Meteor.userId(); 
  }
});
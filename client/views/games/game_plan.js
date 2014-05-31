Template.gamePlan.helpers({ 
  ownGame: function() {
    return this.userId == Meteor.userId(); 
  },
  submitted: function() {
    return new Date(this.submitted).toString(); 
  },
  commentsCount: function() {
    return Comments.find({gameId: this._id}).count();
  }
});
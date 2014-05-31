Template.gamePage.helpers({ 
  comments: function() {
    return Comments.find({gameId: this._id}); 
  }
});
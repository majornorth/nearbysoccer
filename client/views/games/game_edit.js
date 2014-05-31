Template.gameEdit.events({ 
  'submit form': function(e) {
    e.preventDefault();
    
    var currentGameId = this._id;
    
    var gameProperties = {
      message: $(e.target).find('[name=message]').val()
    }

    Games.update(currentGameId, {$set: gameProperties}, function(error) { 
      if (error) {
        // display the error to the user
        alert(error.reason); 
      } else {
        Router.go('gamePage', {_id: currentGameId});
      }
    });
  },

  'click .delete': function(e) { 
    e.preventDefault();

    if (confirm("Delete this game?")) { 
      var currentGameId = this._id; 
      Games.remove(currentGameId); 
      Router.go('gamesList');
} }
});
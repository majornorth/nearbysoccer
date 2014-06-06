Template.gameSubmit.events({ 
  'submit form': function(e) {
    e.preventDefault();
    
    var game = {
      message: $(e.target).find('[name=message]').val(),
      location: SessionAmplify.get("userLocation")
    }

    console.log(game);
    Meteor.call('game', game, function(error, id) {
      if (error)
        return alert(error.reason);

      Router.go('gamePage', {_id: id});
    });
  }
});
Games = new Meteor.Collection('games');

Games.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Games.deny({
  update: function(userId, game, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'message').length > 0);
  }
})

Meteor.methods({
  game: function(gameAttributes) {
    var user = Meteor.user(),
      gameWithSameMessage = Games.findOne({message: gameAttributes.message});
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to suggest new games");
    
    // ensure the plan has a message
    if (!gameAttributes.message)
      throw new Meteor.Error(422, 'Please add your message');
    
    // check that there are no previous posts with the same link
    //if (gameAttributes.url && gameWithSameMessage) { throw new Meteor.Error(302,
    //  'This plan has already been proposed',
    //  gameWithSameMessage._id);
    //}

    // pick out the whitelisted keys
    var game = _.extend(_.pick(gameAttributes, 'message'), { 
      userId: user._id,
      organizer: user.username,
      submitted: new Date().getTime()
    });

    var gameId = Games.insert(game);
    
    return gameId; 
  }
});
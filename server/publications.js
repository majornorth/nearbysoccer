Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});
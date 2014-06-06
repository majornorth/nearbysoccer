Meteor.publish('games', function(userLocation) {
  return Games.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [userLocation.coords.longitude, userLocation.coords.latitude]},
        $maxDistance: 96560.6
        }
      }
  });
});

// Meteor.publish('games', function(userLocation) {
//   return Games.find();
// });

Meteor.publish('singleGame', function(gameId) {
  return Games.find({_id: gameId});
});


Meteor.publish('comments', function(gameId) {
  return Comments.find({gameId: gameId});
});
Meteor.startup(function() {
  Games._ensureIndex({'location.geometry.coordinates' : '2d'});
});
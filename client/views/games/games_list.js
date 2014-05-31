Template.gamesList.helpers({
  games: function() {
    return Games.find({}, {sort: {submitted: -1}});
  }
});

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('games'), Meteor.subscribe('comments');}
});

Router.map(function() { 
  this.route('gamesList', {path: '/'});

  this.route('gamePage', { 
    path: '/games/:_id',
    waitOn: function() {
      return Meteor.subscribe('comments', this.params._id);
    },
    data: function() { return Games.findOne(this.params._id);}
  });

  this.route('gameEdit', {
    path: '/games/:_id/edit',
    data: function() { return Games.findOne(this.params._id);}
  });

  this.route('gameSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render('loading')
    else
      this.render('accessDenied');

    this.stop();
  }
}

Router.onBeforeAction(requireLogin, {only: 'gameSubmit'});
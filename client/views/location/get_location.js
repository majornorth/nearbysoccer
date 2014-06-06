Template.getLocation.events({
  'click #getLocation' : function(event, template) {
    event.preventDefault();

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        SessionAmplify.set("userLocation", position);
      });
    }
  }
});

Template.getLocation.helpers({
  userLocationSet : function() {
    if(SessionAmplify.get("userLocation")) {
      return true;
    } else {
      return false;
    }
  }
});
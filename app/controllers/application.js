import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clicked: function() {
      console.log("Clicked in application");
    }
  }
});

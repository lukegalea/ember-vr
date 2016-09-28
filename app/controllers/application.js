import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clicked: function() {
      alert("clicked");
    }
  }
});

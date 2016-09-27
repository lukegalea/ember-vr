import Ember from 'ember';

const {
  inject: { service },
  computed
} = Ember;

export default Ember.Component.extend({
  clock: service('clock'),

  tagName: '',

  time: computed('clock.time', function() {
    return this.get('clock.time');
  }),

  degrees: computed('time', function() {
    let time = this.get('time');

    return time * Math.PI / 180;
  }),

  rotation: computed('degrees', function() {
    let degrees = this.get('degrees');

    return `0 0 ${degrees}`;
  })
});

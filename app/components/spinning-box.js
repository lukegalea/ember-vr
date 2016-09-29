import Ember from 'ember';

const {
  inject: { service },
  computed
} = Ember;

import EmberABox from 'ember-cli-aframe/components/ember-a-box';

export default EmberABox.extend({
  color: "#6173F4",
  width: "4",
  height: "10",
  depth: "2",
  position: "-10 3 -5",
  scale: "2 0.5 3",

  clock: service('clock'),

  click: function() {
    this.set('color', 'red');
    console.log('I was clicked!');
  },

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

import Ember from 'ember';

const { computed } = Ember;

export default Ember.Object.extend({
  x: undefined,
  y: undefined,
  z: undefined,

  position: computed('x', 'y', 'z', function() {
    let { x, y, z } = this.getProperties('x', 'y', 'z');
    return `${x} ${y} ${z}`;
  })
});

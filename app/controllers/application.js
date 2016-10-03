import Ember from 'ember';

import Sphere from 'ember-vr/models/sphere';

export default Ember.Controller.extend({
  spheres: [
    Sphere.create({
      x: 0,
      y: 1.25,
      z: -1
    })
  ],

  actions: {
    clicked: function(aSphere) {
      let sphere = aSphere.get('sphere');

      let { x, y, z } = sphere.getProperties('x', 'y', 'z');

      let newX = x + Math.floor((Math.random() * 3) - 1) / 2;
      let newY = y + Math.floor((Math.random() * 3) - 1) / 2;

      this.get('spheres').pushObject(
        Sphere.create({
          x: newX,
          y: y + 1.25,
          z: newY
        })
      );
    }
  }
});

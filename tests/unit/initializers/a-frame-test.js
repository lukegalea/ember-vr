import Ember from 'ember';
import AFrameInitializer from 'ember-vr/initializers/a-frame';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | a frame', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AFrameInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

import EmberAEntity from 'ember-cli-aframe/components/ember-a-entity';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');

  EmberAEntity.reopen({
    click: function() {
      this.get('onClick')();      
    }
  });
}

export default {
  name: 'a-frame',
  initialize
};

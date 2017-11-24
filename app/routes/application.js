import Ember from 'ember';

export default Ember.Route.extend({
  fastboot: Ember.inject.service(),
  isFastBoot: Ember.computed.reads('fastboot.isFastBoot')
});

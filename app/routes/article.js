import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.createRecord('article', {
        headline: "Rick rolling making a comeback",
        category: "Nation",
        video: "1",
        options: this.store.findAll('video')
      });
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.createRecord('article', {
        headline: "",
        category: "Nation",
        video: "1",
        options: this.store.findAll('video')
      });
  }
});

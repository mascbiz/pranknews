import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.createRecord('article', {
        headline: "",
        placeholderHeadline: "Your sensational news article headline",
        category: "World",
        video: "1",
        options: this.store.query('video', {front:true})
      });
  }
});

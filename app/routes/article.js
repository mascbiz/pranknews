import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('video').then(function(response) {
      return {
        headline: "Rick rolling making a comeback",
        category: "Nation",
        video: "1",
        url: Ember.computed('headline', 'category', 'video', function() {
          return ["http://latlmes.com", Ember.String.dasherize(this.category), Ember.String.dasherize(this.headline).replace(/[^a-zA-Z\-]/g, '') + "-" + this.video].join("/");
        }),
        options: response
      };
    });
  }
});

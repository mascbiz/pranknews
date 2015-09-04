import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'article',
  setupController: function(controller, video) {
    controller.set('model', video);
  },
  model: function(params) {
    var videoId = params.title.match(/\-([0-9])$/)[1];
    return this.store.find('video', videoId);
  }
});

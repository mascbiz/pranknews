import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let ytid = params.title.match(/\-([0-9A-Za-z]+)$/);
    if (ytid && ytid[1] && ytid[1].length > 1) {
      return this.store.createRecord('video', {
          id: ytid[1],
          name: "",
          url: `https://www.youtube.com/embed/${ytid[1]}?autoplay=true&iv_load_policy=3`,
          ytid: ytid[1],
          imageName: ""
        });
    }
    else {
      var videoId = params.title.match(/\-([0-9])+$/)[1];
      return this.store.find('video', videoId);
    }
  }
});

import Route from '@ember/routing/route';
import data from '../lib/data';

export default Route.extend({
  model() {
    return {
      videos: data.slice(0,3)
    };
  },

  afterModel() {
    var headTags = [
      {
        type: "meta",
        tagId: "facebook-og-title",
        attrs: {
          property: "og:title",
          content: "La Tlmes"
        }
      },
      {
        type: "meta",
        tagId: "facebook-og-image",
        attrs: {
          property: "og:image",
          content: 'http://latlmes.com/assets/images/site-share-icon.png'
        }
      }
    ];

    this.set("headTags", headTags);
  }
});

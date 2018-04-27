import Ember from "ember";
import { get, computed } from "@ember/object";
import { inject } from "@ember/service";
import data from '../lib/data';

export default Ember.Route.extend({
  fastboot: inject(),
  isFastBoot: computed.reads("fastboot.isFastBoot"),

  model: function(params) {
    this.setHeadTags(params);
    if (!get(this, "isFastBoot")) {
      let matches = params.title.match(/-([0-9A-Za-z]+)$/)
      let id      = matches ? matches[1] : null;
      let video   = data.videos.filter(d => (d['id'] == id))[0];
      if (video) {
        return video;
      }
      else if (id) {
        return { ytid: id }; // This is a youtube id
      }
      else {
        return data.videos[0];
      }
    }
  },

  setHeadTags: function(params) {
    let title = params.title.split('-').map(d => d.capitalize()).slice(0, -1).join(" ");
    var headTags = [
      {
        type: "meta",
        tagId: "facebook-og-title",
        attrs: {
          property: "og:title",
          content: title
        }
      },
      {
        type: "meta",
        tagId: "facebook-og-type",
        attrs: {
          property: "og:type",
          content: "article"
        }
      },
      {
        type: "meta",
        tagId: "facebook-og-image",
        attrs: {
          property: "og:image",
          content: 'http://latlmes.com/assets/images/article-share-icon.png'
        }
      }
    ];

    this.set("headTags", headTags);
  }
});

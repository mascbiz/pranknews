import Ember from "ember";
import { get, computed } from "@ember/object";
import { inject } from "@ember/service";

export default Ember.Route.extend({
  fastboot: inject(),
  isFastBoot: computed.reads("fastboot.isFastBoot"),

  model: function(params) {
    this.setHeadTags(params);
    if (!get(this, "isFastBoot")) {
      let ytid = params.title.match(/-([0-9A-Za-z]+)$/);
      if (ytid && ytid[1] && ytid[1].length > 1) {
        return this.store.createRecord("video", {
          id: ytid[1],
          name: "",
          url: `https://www.youtube.com/embed/${ytid[1]}?autoplay=true&iv_load_policy=3`,
          ytid: ytid[1],
          imageName: ""
        });
      } else {
        let videoId = params.title.match(/-([0-9])+$/)[1];
        return this.store.find("video", videoId);
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
      },
      {
        type: "meta",
        tagId: "facebook-og-url",
        attrs: {
          property: "og:url",
          content: `http://latlmes.com/${params.title}`
        }
      }
    ];

    this.set("headTags", headTags);
  }
});

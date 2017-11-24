import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('article', {
      headline: "",
      placeholderHeadline: "Your sensational news article headline",
      category: "World",
      video: "1",
      options: this.store.query('video', {front:true})
    });
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
      },
      {
        type: "meta",
        tagId: "facebook-og-url",
        attrs: {
          property: "og:url",
          content: `http://latlmes.com/`
        }
      }
    ];

    this.set("headTags", headTags);
  }
});

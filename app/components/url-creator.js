import Component from "@ember/component";
import { set } from "@ember/object"
import { computed } from '@ember/object';
import { dasherize } from '@ember/string';
import { inject } from '@ember/service';

export default Component.extend({
  fastboot: inject(),
  classNames: ["url-creator"],
  categories: [
    "Arts",
    "Autos",
    "Breaking",
    "Business",
    "Culture",
    "Entertainment",
    "Food",
    "Local",
    "Movies",
    "Music",
    "Nation",
    "Obituaries",
    "Opinion",
    "Science",
    "Sports",
    "Style",
    "Tech",
    "Travel",
    "World"
  ],

  headline: "",

  category: "Breaking",

  video: 1,

  relativePath: computed('headline', 'placeholder', 'category', 'video', function() {
    var category = dasherize(this.get('category')).replace(/[^\w\s-]/g, '');
    var headline = dasherize(this.get('headline') || this.get('placeholder')).replace(/[^\w\s-]/g, '');
    var video    = "-" + this.get('video');

    return [category, headline + video].join("/").replace(/[-]+/g, '-');
  }),

  url: computed("relativePath", function() {
    if (!this.get('fastboot.isFastboot')) {
      return `${window.location.origin}/${this.get('relativePath')}`;
    }
  }),

  ready: computed('headline', function() {
    return this.get('headline').length > 0;
  }),

  actions: {
    updateCategory(category) {
      set(this, "category", category)
    }
  }
});

import Component from "@ember/component";
import { set } from "@ember/object"

export default Component.extend({
  classNames: ["url-creator"],
  video: 1,

  actions: {
    updateCategory(category) {
      set(this, "category", category);
    }
  }
});

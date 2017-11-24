import Component from "@ember/component";
import { set } from "@ember/object"
export default Component.extend({
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

  actions: {
    updateCategory(category) {
      set(this, "model.category", category)
    }
  }
});

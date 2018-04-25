import Component from "@ember/component";
import { later } from "@ember/runloop";
export default Component.extend({
  classNameBindings:['ready:isReady', 'showSuccess'],

  actions: {
    onSuccess() {
      this.set('showSuccess', true);
      later(() => {
        this.set('showSuccess', false)
      }, 5000);
    },
    onError() {

    }
  }
});

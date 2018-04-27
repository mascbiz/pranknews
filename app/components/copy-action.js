import { alias } from '@ember/object/computed';
import Component from "@ember/component";
import { later } from "@ember/runloop";
import { inject } from '@ember/service';
import { computed } from '@ember/object';
export default Component.extend({
  classNames: ['copy-action'],
  classNameBindings:['ready:isReady', 'showSuccess'],
  fastboot: inject(),
  isFastBoot: alias('fastboot.isFastBoot'),
  actions: {
    onSuccess() {
      this.set('showSuccess', true);
      later(() => {
        this.set('showSuccess', false)
      }, 3000);
    },
    onError() {

    }
  }
});

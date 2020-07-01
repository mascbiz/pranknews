import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { getWithDefault } from '@ember/object';

export default Route.extend({
  metrics: service(),
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),

  init() {
    this._super(...arguments);
    this._trackPage();
  },

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = document.location.href;
      const title = getWithDefault(this, 'routeName', 'unknown');

      get(this, 'metrics').trackPage({ page, title });
    });
  }
});

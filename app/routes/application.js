import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  metrics: service(),
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),

  init() {
    this._super(...arguments);

    let router = this.router;
    router.on('routeDidChange', () => {
      const page = router.currentURL;
      const title = router.currentRouteName || 'unknown';

      this.metrics.trackPage({ page, title });
    });
  },

});

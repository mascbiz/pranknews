import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot')
});

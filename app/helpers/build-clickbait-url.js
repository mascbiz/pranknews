import { helper } from '@ember/component/helper';
import { dasherize } from '@ember/string';

export function buildClickbaitUrl(params, options) {
  let origin = (typeof FastBoot === 'undefined' && window) ? window.location.origin : 'https://latlmes.com';
  var category = dasherize(options.category.replace(/[^\w\s-]/g, ''));
  var headline = dasherize(params[0]).replace(/[^\w\s-]/g, '');

  return `${origin}/${category}/${headline}-${options.video}`.replace(/[-]+/g, '-')
}

export default helper(buildClickbaitUrl);

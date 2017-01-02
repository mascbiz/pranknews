import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('url-creator', 'Integration | Component | url creator', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{url-creator}}`);
  assert.equal(this.$('.title-info select option').map((i, v) => v.value).length, 15, "should have 15 options");
});

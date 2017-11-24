import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('url-creator', 'Integration | Component | url creator', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {});
  this.render(hbs`{{url-creator model=model}}`);
  assert.ok(this.$('.title-info select option').map((i, v) => v.value).length > 0, "should have options");
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site-header', 'Integration | Component | site header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{site-header type="small" slogan="whatever it takes"}}`);
  assert.equal(this.$('header.small').length, 1);
  assert.equal(this.$('header h1').text().trim(), "La Tlmes");

  assert.equal(this.$('header h2').text().trim(), "whatever it takes");
});

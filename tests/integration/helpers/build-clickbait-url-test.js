
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('build-clickbait-url', 'helper:build-clickbait-url', {
  integration: true
});

test('it converts headline category and video into a clickbait url', function(assert) {
  this.set('headline', "10 clickbait titles you won't believe");
  this.set('category', 'Trash')
  this.set('video', '5')

  this.render(hbs`{{build-clickbait-url headline category=category video=video}}`);

  assert.equal(this.$().text().trim(), `${window.location.origin}/trash/10-clickbait-titles-you-wont-believe-5`);
});

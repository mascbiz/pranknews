import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('video-player', 'Integration | Component | video player', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{video-player}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#video-player}}
      template block text
    {{/video-player}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

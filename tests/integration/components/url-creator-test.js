import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import data from 'latlmes/lib/data';

moduleForComponent('url-creator', 'Integration | Component | url creator', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {
    defaultCategory: "Breaking",
    defaultHeadline: "Your sensational news headline here",
    categories: data.categories,
    videos: data.videos.slice(0,3)
  });

  this.render(hbs`{{url-creator videos=model.videos
    categories=model.categories
    defaultHeadline=model.defaultHeadline
    defaultCategory=model.defaultCategory
  }}`);

  assert.ok(this.$('.url-creator-title-info select option').map((i, v) => v.value).length > 0, "should have category options");

  assert.ok(this.$('.url-creator-video-selector input').length > 0, "should have video options");

});

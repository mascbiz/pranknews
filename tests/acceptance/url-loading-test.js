import { test } from 'qunit';
import moduleForAcceptance from 'latlmes/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | url-loading-test', {
  beforeEach() {
    let id = "dQw4w9WgXcQ";
    server.create("video", {
      id: 1,
      name: "Rick Astley",
      url: `https://www.youtube.com/embed/${id}?autoplay=true&iv_load_policy=3`,
      startSeconds: "0",
      ytid: id,
      imageName: "rick.jpg",
      slogan: `You got Rick Rolled in 2017!`,
      front: true
    });

    server.create("video", {
      id: 3,
      name: "Test Video",
      url: `https://www.youtube.com/embed/xxx?autoplay=true&iv_load_policy=3`,
      startSeconds: "0",
      ytid: "xxx",
      imageName: "rick.jpg",
      slogan: `Test!`,
      front: true
    });
  }
});

test('visiting a nested url ending in -id loads correct thing', function(assert) {
  visit('/category-name/this-is-only-a-test-1');

  andThen(function() {
    assert.equal(currentURL(), '/category-name/this-is-only-a-test-1');
    assert.equal(window.$('iframe').attr('src').match("dQw4w9WgXcQ").length, 1, "iframe should have specified id for url");

    visit('/category-name/this-is-only-a-test-3');

    andThen(function() {
      assert.equal(currentURL(), '/category-name/this-is-only-a-test-3');
      assert.equal(window.$('iframe').attr('src').match("xxx").length, 1, "iframe should have specified id for url");
    });
  });
});

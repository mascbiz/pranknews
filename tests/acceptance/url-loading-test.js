import { test } from 'qunit';
import moduleForAcceptance from 'latlmes/tests/helpers/module-for-acceptance';
import wait from 'ember-test-helpers/wait';

moduleForAcceptance('Acceptance | url-loading-test', {});

test('visiting a nested url ending in -1 loads correct thing', function(assert) {
  let done = assert.async();
  visit('/category-name/this-is-only-a-test-1');

  return wait().then(function() {
    assert.equal(currentURL(), '/category-name/this-is-only-a-test-1');
    assert.ok(window.$('iframe').attr('src').match("dQw4w9WgXcQ"), "iframe should have specified id for url");
    done();
  });
});

test('visiting a nested url ending in -3 loads correct thing', function(assert) {
  visit('/category-name/this-is-only-a-test-3');

  andThen(function() {
    assert.equal(currentURL(), '/category-name/this-is-only-a-test-3');
    assert.ok(window.$('iframe').attr('src').match("kxopViU98Xo"), "iframe should have specified id for url");
  });
});

test('visiting a nested url without a numerical/id ending loads rick astley', function(assert) {
  visit('/category-name/this-is-only-a-test');

  andThen(function() {
    assert.equal(currentURL(), '/category-name/this-is-only-a-test');
    assert.ok(window.$('iframe').attr('src').match("dQw4w9WgXcQ"), "iframe should have specified id for url");
  });
});

test('visiting a nested url without a matching numerical ending loads youtube video', function(assert) {
  visit('/category-name/this-is-only-a-test');

  andThen(function() {
    assert.equal(currentURL(), '/category-name/this-is-only-a-test-d364w512W2cQ');
    assert.ok(window.$('iframe').attr('src').match("d364w512W2cQ"), "iframe should have specified id for url");
  });
});

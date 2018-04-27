import { module, test } from 'qunit';
import { visit, find, currentURL, waitFor } from '@ember/test-helpers';

import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | url loading test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting a nested url ending in -1 loads correct thing', async function(assert) {
    await visit('/breaking/this-is-only-a-test-1');
    await waitFor('.video-player-embed iframe');
    assert.equal(currentURL(), '/breaking/this-is-only-a-test-1');
    let ytid = find('.video-player').getAttribute('data-ytid')
    assert.equal(ytid, "DLzxrzFCyOs", "should have loaded id for url");
  });

  test('visiting a nested url ending in -3 loads correct thing', async function(assert) {
    await visit('/breaking/this-is-only-a-test-3');
    await waitFor('.video-player-embed iframe');
    assert.equal(currentURL(), '/breaking/this-is-only-a-test-3');
    let ytid = find('.video-player').getAttribute('data-ytid')
    assert.equal(ytid, "kxopViU98Xo", "should have loaded id for url");
  });

  test('visiting a nested url without a numerical/id ending loads rick astley', async function(assert) {
    await visit('/category-name/this-is-only-a-test');
    await waitFor('.video-player-embed iframe');

    assert.equal(currentURL(), '/category-name/this-is-only-a-test');
    let ytid = find('.video-player').getAttribute('data-ytid')
    assert.equal(ytid, "DLzxrzFCyOs", "should have loaded id for url");
  });

  test('visiting a nested url without a numerical/id but ending in an 11 character word loads rick astley', async function(assert) {
    await visit('/category-name/this-is-only-a-highjacking');
    await waitFor('.video-player-embed iframe');

    assert.equal(currentURL(), '/category-name/this-is-only-a-highjacking');
    let ytid = find('.video-player').getAttribute('data-ytid')
    assert.equal(ytid, "DLzxrzFCyOs", "should have loaded id for url");
  });

  test('visiting a nested url without a matching numerical ending loads youtube video', async function(assert) {
    await visit('/category-name/this-is-only-a-test-DLzxrzFCyOq');
    await waitFor('.video-player-embed iframe');

    assert.equal(currentURL(), '/category-name/this-is-only-a-test-DLzxrzFCyOq');
    let ytid = find('.video-player').getAttribute('data-ytid')
    assert.equal(ytid, "DLzxrzFCyOq", "should have loaded id for url");
  });

});

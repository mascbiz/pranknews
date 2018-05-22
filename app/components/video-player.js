import Component from '@ember/component';
import { computed } from '@ember/object';
import { run } from '@ember/runloop';
import config from 'latlmes/config/environment';
import { task, waitForEvent, waitForQueue, waitForProperty, timeout } from 'ember-concurrency';

export default Component.extend({
  classNames: ['video-player'],
  attributeBindings: ['ytid:data-ytid'],
  classNameBindings: ['hasPlayed', 'isMobileDevice', 'useDeceptionToPlay:is-deceptive'],
  useDeceptionToPlay: false,

  isMobileDevice: computed({
    get() {
      return ('ontouchstart' in window);
    },
    set(k, v) { return v; }
  }),

  init() {
    this._super(...arguments);
    this.set('playerVars', {
      autoplay: 1,
      showinfo: 0,
      fs: 0,
      iv_load_policy: 1,
      playsinline: 1,
      modestbranding: 1,
      rel: 0,
      mute: 1,
    });
  },

  forceInitialPlay: task(function * () {
    yield waitForProperty(this, 'ytPlayer', v => !!v);
    this.set('ytPlayer.playerVars', this.get('playerVars'));
    yield waitForProperty(this, 'ytPlayer.playerState', v => v === 'ready');
    yield timeout(200);
    this.get('ytPlayer').send('seekTo', this.get('startSeconds'));
    yield waitForProperty(this, 'ytPlayer.playerState', v => v === 'playing');

    if (!this.get('isMobileDevice')) {
      // mobile restrictions are strict
      yield this.get('tryUnmuting').perform();
    }
    this.get('onPlay')(true);
  }).on('didInsertElement'),

  tryUnmuting: task(function * () {
    yield timeout(500)
    this.get('ytPlayer').send('unMute');
    yield timeout(200);
    if (this.get('ytPlayer.playerState') === 'playing') {
      this.set('playingUnmuted', true);
    }
    else {
      this.get('ytPlayer').send('mute');
      this.get('ytPlayer').send('play');
      this.set('ytPlayer.playerVars', this.get('playerVars'));
    }
  }),

  // getCurrentTime: task(function * () {
  //   yield waitForProperty(this, 'ytPlayer.player', v => !!v);
  //   return this.get('ytPlayer.player').getCurrentTime();
  // }),

  // isActuallyPlaying: task(function * () {
  //   let firstTime = yield this.get('getCurrentTime').perform();
  //   yield timeout(1000);
  //   let secondTime = yield this.get('getCurrentTime').perform();
  //   return firstTime === secondTime;
  // }).drop(),
  //
  // pollForChanges: task(function * () {
  //   while(true) {
  //     yield this.get('isActuallyPlaying').perform();
  //     yield timeout(500);
  //   }
  // }).on('didInsertElement'),
  //
  // didReceiveAttrs() {
  //   if (this.get('startSeconds')) {
  //     this.set('playerVars.start', this.get('startSeconds') || 0);
  //   }
  // },

  actions: {
    triggerPlay() {
      this.get('ytPlayer').send('unMute');
      this.get('ytPlayer').send('play');
      this.set('playingUnmuted', true);
    },
    ytPlaying() {

    },
    ytEnded() {

    },
    ytBuffering() {},
    ytPaused() {}
  }
});

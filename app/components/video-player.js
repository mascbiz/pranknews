import Component from '@ember/component';
import { computed } from '@ember/object';
import { run } from '@ember/runloop';
import config from 'latlmes/config/environment';

export default Component.extend({
  classNames: ['video-player'],
  classNameBindings: ['hasPlayed', 'isMobileDevice'],
  playerVars: {
    autoplay: 1,
    showinfo: 0,
    fs: 0,
    iv_load_policy: 1,
    playsinline: 1,
    modestbranding: 1,
    rel: 0
  },
  isMobileDevice: computed({
    get() {
      return ('ontouchstart' in window);
    },
    set(k, v) { return v; }
  }),

  forceInitialPlay() {
    if (this.get('ytPlayer')) {
      this.set('ytPlayer.playerVars', this.get('playerVars'));
    }
  },

  didReceiveAttrs() {
    if (this.get('startSeconds')) {
      this.set('playerVars.start', this.get('startSeconds'));
    }
  },

  didRender() {
    run.schedule('afterRender', () => this.forceInitialPlay());
  },

  actions: {
    triggerPlay() {
      this.forceInitialPlay();
    },
    ytPlaying() {
      if (!this.get('hasPlayed')) {
        this.get('ytPlayer').send('seekTo', this.get('playerVars.start'));

        run.next(() => {
          this.set('firstTime', this.get('ytPlayer.player').getCurrentTime());
          run.later(() => {
            let nextTime = this.get('ytPlayer.player').getCurrentTime();
            if (this.get('firstTime') !== nextTime) {
              this.set('hasPlayed', true);
            }
          }, 500)
        })

      }
      if (config.environment === 'development') {
        // this.get('ytPlayer').send('mute');
      }

    }
  }
});

<template>
  <div class="video-frame wrapper">
    <client-only>
      <youtube
        v-bind="{...$attrs}"
        v-on="$listeners"
        class="yt-container"
        @playing="wasStarted = true"
      />

      <button v-show="!wasStarted" class="play-btn">
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="41" cy="41" r="39.5" fill="#EFE1D3" stroke="black" stroke-width="3" />
          <path d="M51 42.5L36 51.5933L36 33.4067L51 42.5Z" fill="black" stroke="black" stroke-width="3" stroke-linejoin="round" />
        </svg>
      </button>
    </client-only>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutubeEmbed, { YouTubePlayer as Youtube } from 'vue-youtube-embed'

Vue.use(VueYoutubeEmbed, { global: false })

export default {
  components: {
    Youtube
  },

  inheritAttrs: false,

  props: {
    iframeStyle: {
      type: String,
    },
    iframeClass: {
      type: String,
    },
  },

  data() {
    return {
      wasStarted: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.yt-container, /deep/ iframe {
  display: block;
  height: 100%;
}

.video-frame {
  display: inline-block;
  border: 3px solid #000;
  border-radius: 20px;
  overflow: hidden;
}

.wrapper {
  position: relative;
}

.wrapper iframe {
  display: none;
}

.play-btn {
  position: absolute;
  z-index: 666;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 0;
  pointer-events: none;
}

.play-btn:hover {
  cursor: pointer;
}

.play-btn:focus {
  outline: 0;
}
</style>
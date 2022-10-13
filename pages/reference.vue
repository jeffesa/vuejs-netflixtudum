<template>
  <main class="home has-background-black is-clipped p-b-32 p-l-16 p-r-16">
    <div class="container has-background-pink">
      <h1 class="title has-text-purple">
        HOME<br>Title text
      </h1>
      <p class="has-text-purple">
        Body text
      </p>

      <!-- resize the page -->
      <ResponsiveImage :sources="image.src" :lazyload="false" :alt="image.alt" />


      <LazyImage :src="image2.src" alt="" role="presentation" class="icon-image" />

      <section class="m-t-60 m-b-50">
        <CardSlider :queries="slider_config" class="m-b-50">
          <div v-for="index in 10" :key="index" class="p-12">
            <div class="generic-card">
              {{ index }}
            </div>
          </div>
        </CardSlider>
      </section>

      <p class="has-text-purple m-t-96 m-b-96">
        Body text
      </p>

      <!-- Spotify Embed -->
      <iframe
        src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <!-- Share used at the bottom of the page -->
      <Share
        text-class="has-text-yellow"
        button-class="is-secondary"
      />

      <!-- Youtube Video Frame -->
      <VideoFrame
        video-id="5qap5aO4i9A"
        style="height: 500px"
      />
    </div>
  </main>
</template>

<script>
import baseImage from '~/utils/baseImage'
// optional imports
// import ResponsiveImage from '~/components/shared/ResponsiveImage'
// import CardSlider from '~/components/shared/CardSlider'

export default {
  head () {
    return this.$createHeadFunction(
      {
        title: 'title',
        description: 'Referencia de como usar componentes e classes'
      }, 
      null, 
      this.$route.path, 
      null
    );
  },

  // optional component declarations
  // components: {
  //   ResponsiveImage,
  //   CardSlider,
  // },

  data() {
    return {
      image: baseImage([
        {src:'/images/page_1/section_1/mobile.png, /images/page_1/section_1/mobile@2x.png 2x', query: '(max-width: 1023px)'},
        {src:'/images/page_1/section_1/desktop.png, /images/page_1/section_1/desktop@2x.png 2x', query: ''}
      ], 'Alternative text'),

      image2: baseImage('/images/shared/success.svg', 'Success', 'Success'),

      // all options: https://flickity.metafizzy.co/options.html
      slider_config:[
        {
          max_width: 1024, // apply config above 1025px
          config: {
            imagesLoaded:false,
            cellAlign: 'left',
            contain: true,
            draggable:true, 
            freeScroll: false,
            prevNextButtons: false,
            pageDots: true,
            wrapAround: false,
            arrowShape: "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15
          }
        },
        {
          max_width: 9999, // apply config to all sizes, except to <1024
          config: {
            imagesLoaded:false,
            cellAlign: 'center',
            initialIndex: 1,
            contain: true,
            draggable:true, 
            freeScroll: false,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: false,
            arrowShape: "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15
          }
        }
      ]
    }
  }
}

</script>

<style lang="scss">
@import "~assets/css/overrides";

.generic-card {
  width: 300px;
  height: 400px;
  background: red;
}

// Scroll to top customization
.scroll-top-btn {
  background: $black;
  border-color: $pink;;
}
.scroll-top-btn .icon{
  stroke: $pink;
}
</style>

<template>
  <div class="responsive-background-image" ref="background_img" :class="{'loadings': loading}" :style="bgImage">
    <picture>
      <source 
        v-for="(source, index) in filteredSources"
        :key="index"
        :data-srcset="source.src"
        :media="source.query"
      >
      <img 
        class="lazyload" 
        data-srcset="data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
        typeof="foaf:Image"
        @lazyloaded="changeSrc"
        @load="changeSrc"
        :alt="alt"
      >
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    sources: {
      type: Array,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    webp:{
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      currentSrc: null,
      loading: true,
      isIE: false
    }
  },
  computed: {
    bgImage () {
      let src = (this.currentSrc) ? { 'background-image' : 'url("' + this.currentSrc + '")' } : ''
      return src
    },
    filteredSources(){
      let filter = [].concat(this.$props.sources).map((a)=>{
        let b = JSON.parse(JSON.stringify(a))
        b.src = this.convertToWebp(b.src)
        return b
      })
        .concat(this.$props.sources)
      return this.$props.webp 
        ? filter
        : this.$props.sources
    }
  },
  mounted () {
    this.isIE = /*@cc_on!@*/false || !!document.documentMode
  },
  methods: {
    changeSrc (e) {
      this.currentSrc  = ''
      let _img = e.currentTarget
      let src = typeof _img.currentSrc !== 'undefined' ? _img.currentSrc : _img.src
      this.currentSrc  = src
      let fixedSrc = this.currentSrc !== src ? src : this.currentSrc
      let sourcesLength = this.sources.length - 1
      this.currentSrc = fixedSrc.includes('base64') ? this.sources[sourcesLength]['src'] : fixedSrc
      this.$emit('load', this.currentSrc)
      this.loading = false
    },
    convertToWebp (image) {
      let converted = image.replace(/.png/g, '.png.webp').replace(/.jpg/g, '.jpg.webp')
      return converted
    }
  }
}
</script>
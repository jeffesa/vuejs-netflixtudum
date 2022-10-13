<template>
  <img 
    :data-src="img_src" 
    :data-srcset="srcset" 
    :alt="alt"
    :title="title"
    @lazyloaded="loaded"
    class="lazyload" 
  >
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: ''
    },
    srcset: {
      type: String,
      required: false,
      default: ''
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  computed:{
    img_src(){
      return this.$props.src.length > 0  ? this.$props.src : this.$props.srcset.split(`,`)[0]
    }
  },
  methods: {
    loaded (e) {
      let _img = e.currentTarget.src
      this.$emit('imgLoad', _img)
    }
  }
}
</script>
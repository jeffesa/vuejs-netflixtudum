<template>
  <picture class="responsive-image" :class="lazyload ? 'lazyload' : ''">
    <source
      v-for="(source, index) in sources"
      :key="index"
      :data-srcset="lazyload ? source.src : null"
      :srcset="lazyload ? null : source.src"
      :media="source.query"
    >
    <img
      v-if="lazyload"
      class="lazyload"
      :class="imgClass"
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      data-srcset="data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      typeof="foaf:Image"
      @lazyloaded="loaded"
      :alt="alt"
      :role="role"
    >
    <img
      v-else
      :class="imgClass"
      :src="sources[0].src.split(',')[0]"
      :srcset="sources[0].src"
      :alt="alt"
      :role="role"
      @load="loaded"
    >
  </picture>
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
    imgClass: {
      type: String,
      required: false
    },
    lazyload: {
      type: Boolean,
      required: false,
      default: true
    },
    role: {
      type: String,
      required: false,
    },
  },
  methods: {
    loaded (e) {
      let _img = e.currentTarget.src
      this.$emit('imgLoad', _img)
    }
  }
};
</script>

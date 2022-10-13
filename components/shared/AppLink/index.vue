<template>
  <a
    v-if="type == 'link'"
    :href="to"
    :target="target"
    :rel="target == '_blank' ? 'noopener' : false "
    :aria-label="`Link para ${to}`"
    v-bind="trackData"
  ><slot /></a>
  <a
    v-else-if="type == 'smooth'"
    :href="`${to}`"
    @click.prevent="smoothScroll(to)"
    :aria-label="`Link para ${to}`"
    v-bind="trackData"
  ><slot /></a>
  <nuxt-link v-else :to="to" v-bind="trackData">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    to: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: false
    },
    trackData: {
      type: Object,
      default: null,
      required: false
    }
  },
  data () {
    return {
      type: null,
      base: this.$router.options.base
    }
  },
  created () {
    this.type = this.checkUrl(this.to)
  },
  methods: {
    checkUrl (url) {
      if (url.match(/^(http(s)?|ftp):\/\//)) {
        return 'link'
      } else if (url.match(/#/)) {
        return 'smooth'
      } else {
        return 'nuxt'
      }
    },
    smoothScroll (id) {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      })
      setTimeout(() => window.location.hash = id, 1000)
    }
  }
}
</script>

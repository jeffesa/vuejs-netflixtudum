<template>
  <component v-if="component" :is="component" />
</template>

<script>
export default {
  computed: {
    component() {
      return () => import(`~/components/${this.$route.path.replace(/^\/+|\/+$/g, '')}/index.vue`);
    }
  }
}
</script>
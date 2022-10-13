<template>
  <main class="home is-clipped">
    HOME
    <br>
    <nuxt-link to="/internal-page">
      go to "internal page"
    </nuxt-link>
    <br>
    <nuxt-link to="/internal-page/nested-page">
      go to "nexted internal page"
    </nuxt-link>
    <br>
    <nuxt-link to="/reference">
      go to "reference"
    </nuxt-link>
    <!-- <NavCard to="/other">
      go to "other page"
    </NavCard> -->
    <!-- <LazyInternalPage /> -->
  </main>
</template>

<script>
export default {
  layout: 'no_float_buttons',

  head () {
    return this.$createHeadFunction(
      {
        title: 'HOME',
        description: 'home desc'
      },
      null, 
      this.$route.path, 
      null
    );
  },

  // transition: "intro"
}
</script>

<style lang="scss">
</style>

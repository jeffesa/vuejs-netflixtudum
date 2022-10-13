<template>
  <div>
    <!-- <Header /> -->
    <div class="container">
      Página não encontrada
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Header from '~/partials/Header'
// import Footer from '~/partials/Footer'
export default {
  components: {
    // Header,
    // Footer
  },
  head () {
    return {
      title: `Página não encontrada`,
      link: [
        { rel: 'icon', type: 'content', href: this.$store.state.headerFooterContent.header.favicon }
      ]
    }
  }
}
</script>

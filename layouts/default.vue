<template>
  <div class="default">
    <nuxt-link to="/" class="close-btn button">
      <svg width="35" height="36" viewBox="0 0 35 36" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 9.24902L26.2496 26.7486" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.75 26.7485L26.2496 9.24896" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </nuxt-link>

    <nuxt />

    <button @click="scrollToTop" class="scroll-top-btn button" aria-label="Ir para o topo da página">
      <svg focusable="false" width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="icon" d="M11.4996 16.75V1M11.4996 1L3.09961 9.4375M11.4996 1L19.8996 9.4375" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path class="icon" d="M1 15.175V19.9C1 20.6 1.525 22 3.625 22C5.725 22 15.35 22 19.9 22C20.6 22 22 21.58 22 19.9C22 18.22 22 16.05 22 15.175" stroke="black" stroke-width="1.5" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(this.scrollToTop);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-top-btn, .close-btn {
  position: fixed;
  right: 20px;
  padding: 4px;
  height: 44px;
  width: 44px;
  z-index: 100;
}
.close-btn {
  top: 20px;
}
.scroll-top-btn {
  bottom: 20px;
  padding-top: 2px;
}
</style>

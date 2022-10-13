<template lang="html">
  <div class="loading-page" v-if="loading">
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="" cx="25" cy="25" r="20" fill="none" stroke="#979797" stroke-width="4.9" />
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5.5" />
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>

.loading-page{
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,.7);
}

.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  
  
}
.path {
  stroke: #DE3039;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>

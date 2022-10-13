<template>
  <div 
    ref="anchor"
    class="intersection-observer-element"
    :style="'position: absolute; width: 20px; height: ' + height + 'px;'"
  />
</template>

<script>

export default {
  props: {
    elemIndex: {
      default: 0,
      type: Number
    },
    height: {
      default: 10,
      type: Number,
      required: true
    },
    delay: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {
      observer: null
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      const element = entries[0];
      this.$emit('observe', element.isIntersecting);
    });
    this.observer.observe(this.$el);
  }
}
</script>


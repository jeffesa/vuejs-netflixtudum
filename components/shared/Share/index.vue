<template>
  <section class="share has-text-centered">
    <p class="text is-size-8 has-text-weight-medium" :class="textClass">
      COMPARTILHA PRO MUNDÃO
    </p>
    <div class="button-list is-flex m-t-18">
      <button 
        v-for="button in buttons"
        class="button m-4 is-medium"
        :class="[buttonClass, button.classList]"
        :key="button.label"
        v-html="button.label"
        @click="share(button.label)"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    textClass: String,
    buttonClass: String
  },

  data() {
    return {
      buttons: [
        {
          label: 'Stories'
        },
        {
          label: 'Facebook'
        },
        {
          label: 'Twitter'
        },
      ]
    }
  },

  methods: {
    share(network) {
      let desc = document.querySelector("meta[name='description']").getAttribute('content') || 'Netflix Tadum'
      console.log(desc);
      switch (network) {
      case 'Twitter':
        window.open('https://twitter.com/share?url='+encodeURI(window.location.href)+'&text=' + desc, '_blank')
        break;
      case 'Facebook':
        window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURI(window.location.href)+'&text=' + desc, '_blank')
        break;
      case 'Stories':
        window.open('https://www.instagram.com/', '_blank')
        break;
      default:
        break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/overrides";
.share {
  padding: 124px 0;
}
.text {
  font-family: 'Netflix Sans';
  color: $black;
}
.button-list {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @include from($tablet) {
    flex-direction: row;
  }
}
</style>
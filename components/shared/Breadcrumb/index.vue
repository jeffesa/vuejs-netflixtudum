<template>
  <div class="container breadcrumb-container">
    <nav class="breadcrumb p-t-12 p-b-12 is-size-8 has-bar-separator" aria-label="breadcrumbs">
      <ul>
        <li 
          v-for="(b, i) in links"
          :key="i"
        >
          <AppLink :to="b.href" :target="b.target">
            <p v-html="b.label" />
          </AppLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  props:{
    links: {
      type: Array,
      required: true
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/mixins";
@import "~assets/css/overrides";

.container{
  position: relative;
  z-index: 10;
  &:after{
    display: block;
    content: '';
    position: absolute;
    top: 45px;
    left: -25%;
    width: 150%;
    height: 1px;
    background-color: #fff;
    opacity: .4;

    @include until($desktop){
      display: none;
    }
  }
}

.breadcrumb{
  position: absolute;
  opacity: .4;
  

  @include until($desktop){
    position: relative;
  }

  /deep/span{
    padding: 2px;
    border: 1px solid rgba(255,255,255,.7);
  }
}
</style>

<template>
  <main class="">
    <h1 class="title">
      internal-page
    </h1>
  </main>
</template>

<script>
export default {
  head () {
    return this.$createHeadFunction(
      {
        title: 'internal page',
        description: 'internal page desc'
      },
      null, 
      this.$route.path, 
      null
    );
  },
}
</script>
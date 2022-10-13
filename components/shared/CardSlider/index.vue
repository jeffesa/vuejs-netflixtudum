<template>
  <flickity ref="flick" :options="flickityConfig" class="card-slider">
    <slot />
  </flickity>
</template>

<script>

export default {
  components: {
  },
  props:{
    // queries: [{'max_width': 800, config: {flickityOptions}}] -> max_width always <=
    queries: {
      type: Array,
      required: true,
      default: ()=>[]
    },
    fade:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  data(){
    return {
      resizeTimeout: null,
      flickityConfig: null,
      cWidth: 0
    }
  },
  computed:{
    size_queries(){
      let sizes = [].concat(this.queries).sort((a,b)=>b.max_width-a.max_width)
      return sizes
    }
  },
  mounted(){
    setTimeout(this.addListeners, 10)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    this.$emit('flickDestroy')
    if(this.fade && this.flickityConfig && this.$refs.flick) {
      this.$refs.flick.off('select', this.onSelect)
    }
  },
  methods:{
    onInit($flickity) {
      $flickity.on('staticClick', this.onStaticClick)
    },
    onDestroy($flickity) {
      $flickity.off('staticClick', this.onStaticClick)
    },
    select(index){
      this.$refs.flick.select(index)
    },
    next(){
      this.$refs.flick.next()
    },
    addListeners(){
      window.addEventListener('resize', this.onResize)
      this.onResize()
    },
    onResize(e){
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(this.checkQueries, 100)
    },
    forceRender(){
      if(this.flickityConfig && this.$refs.flick){
        this.$refs.flick.resize()
        this.renderFlickity()
      }
    },
    checkQueries(){
      if(this.cWidth == window.innerWidth) return
      
      let c = null
      this.cWidth = window.innerWidth
      this.size_queries.map((q)=>{
        c = window.innerWidth <= q.max_width ? q.config : c 
      })

      this.flickityConfig = c;
      setTimeout(this.renderFlickity,100)
    },
    renderFlickity(){
      if(this.flickityConfig && this.$refs.flick){
        this.$refs.flick.rerender()
        this.$emit('flickRender', this.$refs.flick)
        this.$refs.flick.on('select', this.onSelect)
      }else if(this.$refs.flick){
        this.$refs.flick.off('select', this.onSelect)
        this.$refs.flick.destroy()
        this.$emit('flickDestroy')
      }
    },
    onSelect(index){
      this.$emit('onSelect', index)

      if(this.fade){
        this.$refs.flick.getCellElements().map((card, i)=>{
          if(i == index){
            card.classList.remove('hidden')
          }else{
            card.classList.add('hidden')
          }
        })
      }
    },
    onStaticClick(event, pointer, cellElement, cellIndex) {
      this.$emit('staticClick', {event, pointer, cellElement, cellIndex})
    }
  }
}
</script>


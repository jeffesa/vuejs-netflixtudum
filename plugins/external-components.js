// Importar libs que serão usadas em todas as páginas e que não usam ssr
import Vue from 'vue';

import Flickity from '~/components/shared/Flickity'
import 'flickity-imagesloaded'
Vue.component('flickity', Flickity);

// import SmartBanner from 'smart-app-banner'
// Vue.use(SmartBanner);

// https://github.com/matheusgrieger/vue-clazy-load
// import { VueClazyLoad } from 'vue-clazy-load'
// import VueClazyLoad from 'vue-clazy-load'
// Vue.use(VueClazyLoad);
// Vue.component('clazy-load', VueClazyLoad);

// https://github.com/ocordeiro/vue-smooth-scroll
// import vueSmoothScroll from 'vue-smooth-scroll'
// Vue.use(vueSmoothScroll)

// https://github.com/hilongjw/vue-lazyload
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)

// https://monterail.github.io/vuelidate/
// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)

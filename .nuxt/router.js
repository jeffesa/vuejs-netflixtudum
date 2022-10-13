import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fdb76d9c = () => interopDefault(import('../pages/reference.vue' /* webpackChunkName: "pages/reference" */))
const _3d92528e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _08bf7dc0 = () => interopDefault(import('../pages/_index/_switch.vue' /* webpackChunkName: "pages/_index/_switch" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/reference",
    component: _fdb76d9c,
    name: "reference"
  }, {
    path: "/",
    component: _3d92528e,
    name: "index"
  }, {
    path: "/:index/:switch?",
    component: _08bf7dc0,
    name: "index-switch"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

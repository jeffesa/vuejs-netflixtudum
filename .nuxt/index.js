import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_049c382f from 'nuxt_plugin_plugin_049c382f' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_buefy_e0f61dd4 from 'nuxt_plugin_buefy_e0f61dd4' // Source: ./buefy.js (mode: 'all')
import nuxt_plugin_libplugin50f5e97a_6cc5ffe1 from 'nuxt_plugin_libplugin50f5e97a_6cc5ffe1' // Source: ./lib.plugin.50f5e97a.js (mode: 'all')
import nuxt_plugin_axios_64b41c76 from 'nuxt_plugin_axios_64b41c76' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_directives_5f2656fc from 'nuxt_plugin_directives_5f2656fc' // Source: ../plugins/directives.js (mode: 'all')
import nuxt_plugin_injectedfunctions_af481c7c from 'nuxt_plugin_injectedfunctions_af481c7c' // Source: ../plugins/injected-functions.js (mode: 'all')
import nuxt_plugin_globalcomponents_44e888ce from 'nuxt_plugin_globalcomponents_44e888ce' // Source: ../plugins/global-components.js (mode: 'all')
import nuxt_plugin_externalcomponents_b2456d94 from 'nuxt_plugin_externalcomponents_b2456d94' // Source: ../plugins/external-components.js (mode: 'client')
import nuxt_plugin_lazysizesmin_2a5a52e8 from 'nuxt_plugin_lazysizesmin_2a5a52e8' // Source: ../plugins/lazysizes.min.js (mode: 'client')
import nuxt_plugin_intersectionpolyfillmin_9aeb0c12 from 'nuxt_plugin_intersectionpolyfillmin_9aeb0c12' // Source: ../plugins/intersection-polyfill.min.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"","htmlAttrs":{"lang":"pt-br"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"hid":"robots","name":"robots","content":"index, follow"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"\u002F\u002Ffonts.googleapis.com","crossorigin":"true"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Open+Sans:300,400,700","crossorigin":"true"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_049c382f === 'function') {
    await nuxt_plugin_plugin_049c382f(app.context, inject)
  }

  if (typeof nuxt_plugin_buefy_e0f61dd4 === 'function') {
    await nuxt_plugin_buefy_e0f61dd4(app.context, inject)
  }

  if (typeof nuxt_plugin_libplugin50f5e97a_6cc5ffe1 === 'function') {
    await nuxt_plugin_libplugin50f5e97a_6cc5ffe1(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_64b41c76 === 'function') {
    await nuxt_plugin_axios_64b41c76(app.context, inject)
  }

  if (typeof nuxt_plugin_directives_5f2656fc === 'function') {
    await nuxt_plugin_directives_5f2656fc(app.context, inject)
  }

  if (typeof nuxt_plugin_injectedfunctions_af481c7c === 'function') {
    await nuxt_plugin_injectedfunctions_af481c7c(app.context, inject)
  }

  if (typeof nuxt_plugin_globalcomponents_44e888ce === 'function') {
    await nuxt_plugin_globalcomponents_44e888ce(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_externalcomponents_b2456d94 === 'function') {
    await nuxt_plugin_externalcomponents_b2456d94(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lazysizesmin_2a5a52e8 === 'function') {
    await nuxt_plugin_lazysizesmin_2a5a52e8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_intersectionpolyfillmin_9aeb0c12 === 'function') {
    await nuxt_plugin_intersectionpolyfillmin_9aeb0c12(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }

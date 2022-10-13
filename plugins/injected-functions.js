import Vue from 'vue'


const getSiteName = () => {
  return 'AlmapWeekly'
}

const getSiteUrl = () => {
  return ''
}

Vue.prototype.$createHeadFunction = (metaObject, favicon, path, analyticsData, jsonLd) => {
  return {
    title: metaObject.title,
    meta: [
      { name: 'keywords', content: metaObject.keywords },
      { hid: 'description', name: 'description', content: metaObject.description },
      { hid: 'twitterCard', name: 'twitter:card', content: 'summary' },
      { hid: 'twitterTitle', name: 'twitter:title', content: metaObject.title },
      { hid: 'twitterDescription', name: 'twitter:description', content: metaObject.title },
      { hid: 'twitterImage', name: 'twitter:image', content: metaObject.image || '' },
      { hid: 'ogTitle', property: 'og:title', content: metaObject.title },
      { hid: 'ogUrl', property: 'og:url', content: path },
      { hid: 'ogImage', property: 'og:image', content: metaObject.image || '' },
      { hid: 'ogDescription', property: 'og:description', content: metaObject.title },
      { hid: 'ogSiteName', property: 'og:site_name', content: metaObject.title }
    ],
    link: [
      { rel: 'icon', type: 'content', href: favicon },
      { rel: 'canonical', href: metaObject.canonical || path }
    ],
    // script: [
    //   {
    //     innerHTML: `
    //       window.analyticsData = ${analyticsData}`
    //   },
    //   {
    //     type: 'application/ld+json',
    //     innerHTML: `${JSON.stringify(jsonLd)}`
    //   }
    // ],
    // __dangerouslyDisableSanitizers: ['script']
  }
}

Vue.prototype.$createDynamicHeadFunction = (title, description, image, favicon, path) => {
  return {
    title: title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'twitterCard', name: 'twitter:card', content: description },
      { hid: 'ogTitle', property: 'og:title', content: title },
      { hid: 'ogUrl', property: 'og:url', content: getSiteUrl(path) },
      { hid: 'ogImage', property: 'og:image', content: image },
      { hid: 'ogDescription', property: 'og:description', content: description },
      { hid: 'ogSiteName', property: 'og:site_name', content: getSiteName() }
    ],
    link: [
      { rel: 'icon', type: 'content', href: favicon },
      { rel: 'canonical', href: metaObject.canonical || getSiteUrl() }
    ]
  }
}

// https://nuxtjs.org/guide/plugins/
// https://moz.com/blog/meta-data-templates-123

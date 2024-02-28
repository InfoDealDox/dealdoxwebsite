import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1481495c = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _0e2534e6 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _dd1e32a6 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _7d839f3a = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _bc235102 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _3210d200 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _88815188 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _6f94a6f7 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _4c12a279 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _4469f35c = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _c6a941f4 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _503072d0 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _7879911e = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _41de7f3d = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _209bb5f6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4796492c = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _b05dec5c = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _7074872b = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _62556862 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _79ff345e = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _0029cbd4 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _3d365bc9 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _0613dceb = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _7e8cda76 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _d9b99e28 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _2b4ea3dc = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _b0003db6 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _65d5244c = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _60ea22ab = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _7125c650 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _6bfcf6be = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _1263af4f = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _8400731c = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _9deaac0c = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _94ff7a54 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _af3cd234 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _ad33e78c = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _c59171da = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _4101a30f = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _260a81ee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/App",
    component: _1481495c,
    name: "App"
  }, {
    path: "/approval-software",
    component: _0e2534e6,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _dd1e32a6,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _7d839f3a,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _bc235102,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _3210d200,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _88815188,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _6f94a6f7,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _4c12a279,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _4469f35c,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _c6a941f4,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _503072d0,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _7879911e,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _41de7f3d,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _209bb5f6,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _4796492c,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _b05dec5c,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _7074872b,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _62556862,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _79ff345e,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _0029cbd4,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _3d365bc9,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _0613dceb,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _7e8cda76,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _d9b99e28,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _2b4ea3dc,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _b0003db6,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _65d5244c,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _60ea22ab,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _7125c650,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _6bfcf6be,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _1263af4f,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _8400731c,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _9deaac0c,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _94ff7a54,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _af3cd234,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _ad33e78c,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _c59171da,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _4101a30f,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _260a81ee,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

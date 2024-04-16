import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7dc1e2fc = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _38ed56ba = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _2fda46c3 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _0ee8a7f9 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _d828d5ae = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _1cacc116 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _78fe2d66 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _0113ec21 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _7ad54523 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _54dc4c06 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _0147eea0 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _422db07a = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _e98e03f2 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _69218b67 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _cd9b53d8 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _3075a9fc = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _fe324056 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _e7d7bc0e = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _25b10f7b = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _ee632804 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _b64a521a = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _6ef5d095 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _a56105c0 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _7c3458d4 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _77439828 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _b44ec48a = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _174f0bf8 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _6ee2c456 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _535c81ee = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _56422b30 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _1819180e = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _715c4808 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _08cd3f90 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _cf9bc528 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _e9d91d08 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _23721ae4 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _1f8c77bd = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _34662ea5 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _77183bf8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7dc1e2fc,
    name: "App"
  }, {
    path: "/approval-software",
    component: _38ed56ba,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _2fda46c3,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _0ee8a7f9,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _d828d5ae,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _1cacc116,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _78fe2d66,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _0113ec21,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _7ad54523,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _54dc4c06,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _0147eea0,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _422db07a,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _e98e03f2,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _69218b67,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _cd9b53d8,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _3075a9fc,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _fe324056,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _e7d7bc0e,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _25b10f7b,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _ee632804,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _b64a521a,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _6ef5d095,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _a56105c0,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _7c3458d4,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _77439828,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _b44ec48a,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _174f0bf8,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _6ee2c456,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _535c81ee,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _56422b30,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _1819180e,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _715c4808,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _08cd3f90,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _cf9bc528,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _e9d91d08,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _23721ae4,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _1f8c77bd,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _34662ea5,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _77183bf8,
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

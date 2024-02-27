import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f81e436 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _16b37829 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _16a90349 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _31853002 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _719bbc63 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _4fd6e49c = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _61de8120 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _52d886db = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _6dde195d = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _03524640 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _b74b082c = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _1fddd7b4 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _617fe50d = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _5bb78521 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _74ea41a1 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _d2687b64 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _f6cb5094 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _2f5cda0f = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _74f475b3 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _6aa0fa96 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _4619cc90 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _51c3d0a6 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _bddfc462 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _bf4f5d4c = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _9622b060 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _e52f22a4 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _73bc2a7e = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _32231884 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _0a5c42e2 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _f864e918 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _06f937a2 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _41b1ba33 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _fae8bbe4 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _7803cd96 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _4dc63872 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _40a78c82 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _0e6189c4 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _2b09ec12 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _2f3622ab = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _a97ac2ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3f81e436,
    name: "App"
  }, {
    path: "/approval-software",
    component: _16b37829,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _16a90349,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _31853002,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _719bbc63,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _4fd6e49c,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _61de8120,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _52d886db,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _6dde195d,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _03524640,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _b74b082c,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _1fddd7b4,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _617fe50d,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _5bb78521,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _74ea41a1,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _d2687b64,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _f6cb5094,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _2f5cda0f,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _74f475b3,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _6aa0fa96,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _4619cc90,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _51c3d0a6,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _bddfc462,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _bf4f5d4c,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _9622b060,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _e52f22a4,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _73bc2a7e,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _32231884,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _0a5c42e2,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _f864e918,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _06f937a2,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _41b1ba33,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _fae8bbe4,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _7803cd96,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _4dc63872,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _40a78c82,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _0e6189c4,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _2b09ec12,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _2f3622ab,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _a97ac2ec,
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

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _613084e8 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _b545c592 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _91716552 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _e9d920e6 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _3b80e9d6 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _42feecac = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _cff5fb5c = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _793c79e6 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _3deddde2 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _69a9281c = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _35bea69c = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _defcb334 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _539df0ca = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _7d2ab453 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _15888baf = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _ef491c00 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _4e33aa30 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _1194007e = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _a9ca1236 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _5c13ad67 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _313eecea = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _a3edfc42 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _30c9cafe = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _1383490c = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _28199f82 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _d84a6a88 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _0d250962 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _0861a2f0 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _5c866e7e = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _8e07c2fc = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _4d843454 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _4a858836 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _0d603b9c = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _1ebf8b24 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _e3a70200 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _fde459e0 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _596ee260 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _86fe30ae = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _6b51638e = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _4be0e898 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _613084e8,
    name: "App"
  }, {
    path: "/approval-software",
    component: _b545c592,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _91716552,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _e9d920e6,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _3b80e9d6,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _42feecac,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _cff5fb5c,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _793c79e6,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _3deddde2,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _69a9281c,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _35bea69c,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _defcb334,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _539df0ca,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _7d2ab453,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _15888baf,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _ef491c00,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _4e33aa30,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _1194007e,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _a9ca1236,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _5c13ad67,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _313eecea,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _a3edfc42,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _30c9cafe,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _1383490c,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _28199f82,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _d84a6a88,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _0d250962,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _0861a2f0,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _5c866e7e,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _8e07c2fc,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _4d843454,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _4a858836,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _0d603b9c,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _1ebf8b24,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _e3a70200,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _fde459e0,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _596ee260,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _86fe30ae,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _6b51638e,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _4be0e898,
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

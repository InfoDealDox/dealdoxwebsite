import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31c628b0 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _1262706f = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _25f496e2 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _2e858cc5 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _940e3246 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _4b85dce2 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _27ec681a = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _75c4d656 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _631790d7 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _27c1a3ba = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _43d11b38 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _643b022e = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _39edde5a = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _0b53d21b = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _ad8e5c70 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _359bac76 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _1153d8b0 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _53cc3789 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _3b025cad = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _046c792f = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _69ac9ab2 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _78da8ba7 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _1b402e49 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _d4dc6e58 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _abafc16c = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _233a79f4 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _2f9e3c87 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _d2ea7e90 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _c6e35aee = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _e377ac8c = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _fdad6fc8 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _628a38a6 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _4e5da0d4 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _6f7b805c = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _ee09cf90 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _7bdc6c48 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _79a302d0 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _29f4011e = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _2d17fb71 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _98984290 = () => interopDefault(import('..\\pages\\glossary\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary/_slug/accrued-revenue" */))
const _0fc09b0e = () => interopDefault(import('..\\pages\\glossary1\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary1/_slug/accrued-revenue" */))
const _3ba8e731 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\agile-billing.vue' /* webpackChunkName: "pages/glossary1/_slug/agile-billing" */))
const _73f5426b = () => interopDefault(import('..\\pages\\glossary1\\_slug\\annual-contract-value.vue' /* webpackChunkName: "pages/glossary1/_slug/annual-contract-value" */))
const _fcc16060 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _31c628b0,
    name: "App"
  }, {
    path: "/approval-software",
    component: _1262706f,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _25f496e2,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _2e858cc5,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _940e3246,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _4b85dce2,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _27ec681a,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _75c4d656,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _631790d7,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _27c1a3ba,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _43d11b38,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _643b022e,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _39edde5a,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _0b53d21b,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _ad8e5c70,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/news",
    component: _359bac76,
    name: "news"
  }, {
    path: "/our-team",
    component: _1153d8b0,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _53cc3789,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _3b025cad,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _046c792f,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _69ac9ab2,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _78da8ba7,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _1b402e49,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _d4dc6e58,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _abafc16c,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _233a79f4,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _2f9e3c87,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _d2ea7e90,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _c6e35aee,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _e377ac8c,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _fdad6fc8,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _628a38a6,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _4e5da0d4,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _6f7b805c,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _ee09cf90,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _7bdc6c48,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _79a302d0,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _29f4011e,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _2d17fb71,
    name: "success-story-slug"
  }, {
    path: "/glossary/:slug?/accrued-revenue",
    component: _98984290,
    name: "glossary-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/accrued-revenue",
    component: _0fc09b0e,
    name: "glossary1-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/agile-billing",
    component: _3ba8e731,
    name: "glossary1-slug-agile-billing"
  }, {
    path: "/glossary1/:slug?/annual-contract-value",
    component: _73f5426b,
    name: "glossary1-slug-annual-contract-value"
  }, {
    path: "/",
    component: _fcc16060,
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

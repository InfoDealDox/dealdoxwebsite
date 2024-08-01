import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _930b4a36 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _3fb6ed9a = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _5ab74b8c = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _c0c3f3a0 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _56861412 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _78da5a0d = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _5263cce2 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _24e3e46c = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _314da08c = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _36db2e6f = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _53d59599 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _04c82f63 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _0ef7c1be = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _5d3b3e90 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _860a6506 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _0da2a2ba = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _2a44cf25 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _62e5c23e = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _2c37e3bc = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _7a2a9c64 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _fac4ddb2 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _2ad13f9c = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _cf095304 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _63c7d889 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _785e2eff = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _9fcb76c2 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _03b60872 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _2f1ba5a6 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _4e85067e = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _d91bfc36 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _03371f5e = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _259a6462 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _78877f3f = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _2d2928c7 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _250ed9ba = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _3f4c319a = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _6180844d = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _ca0113b4 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _6f1e3edc = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _5e93f3a6 = () => interopDefault(import('..\\pages\\glossary\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary/_slug/accrued-revenue" */))
const _7b6279a4 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary1/_slug/accrued-revenue" */))
const _7e8d05c8 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\agile-billing.vue' /* webpackChunkName: "pages/glossary1/_slug/agile-billing" */))
const _4f1a8554 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\annual-contract-value.vue' /* webpackChunkName: "pages/glossary1/_slug/annual-contract-value" */))
const _673df57b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _930b4a36,
    name: "App"
  }, {
    path: "/approval-software",
    component: _3fb6ed9a,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _5ab74b8c,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _c0c3f3a0,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _56861412,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _78da5a0d,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _5263cce2,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _24e3e46c,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _314da08c,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _36db2e6f,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _53d59599,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _04c82f63,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _0ef7c1be,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _5d3b3e90,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _860a6506,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/news",
    component: _0da2a2ba,
    name: "news"
  }, {
    path: "/our-team",
    component: _2a44cf25,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _62e5c23e,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _2c37e3bc,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _7a2a9c64,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _fac4ddb2,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _2ad13f9c,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _cf095304,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _63c7d889,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _785e2eff,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _9fcb76c2,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _03b60872,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _2f1ba5a6,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _4e85067e,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _d91bfc36,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _03371f5e,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _259a6462,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _78877f3f,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _2d2928c7,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _250ed9ba,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _3f4c319a,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _6180844d,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _ca0113b4,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _6f1e3edc,
    name: "success-story-slug"
  }, {
    path: "/glossary/:slug?/accrued-revenue",
    component: _5e93f3a6,
    name: "glossary-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/accrued-revenue",
    component: _7b6279a4,
    name: "glossary1-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/agile-billing",
    component: _7e8d05c8,
    name: "glossary1-slug-agile-billing"
  }, {
    path: "/glossary1/:slug?/annual-contract-value",
    component: _4f1a8554,
    name: "glossary1-slug-annual-contract-value"
  }, {
    path: "/",
    component: _673df57b,
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

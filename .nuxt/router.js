import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2be9ed9a = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _0b12fa45 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _14f46136 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _717faf1b = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _6eb3bc72 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _443666b8 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _48b84b84 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _75387182 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _6a9ad0c1 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _5a2359a4 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _2e55994e = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _76e83d18 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _05e46229 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _43e2ab85 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _0331e9b2 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _350f47a2 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _4506c61a = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _f3a4251a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _5bce4017 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _54aaa019 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _c540efc8 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _d5b697de = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _38a0df33 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _c5d5ee84 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _9ca94198 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _df95426c = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _497343dd = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _61cccbbc = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _8e4f0a1a = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _5e222ce0 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _c2ec0df4 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _1750f4d2 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _45d9e5ac = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _922cfe9c = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _6e24fd8e = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _6106519e = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _24ceaafc = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _2ef4e54a = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _36c29c72 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _36a0a3bc = () => interopDefault(import('..\\pages\\glossary\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary/_slug/accrued-revenue" */))
const _32c45f62 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary1/_slug/accrued-revenue" */))
const _6cbefaf2 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\agile-billing.vue' /* webpackChunkName: "pages/glossary1/_slug/agile-billing" */))
const _591f27c1 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\annual-contract-value.vue' /* webpackChunkName: "pages/glossary1/_slug/annual-contract-value" */))
const _ebc12ab4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2be9ed9a,
    name: "App"
  }, {
    path: "/approval-software",
    component: _0b12fa45,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _14f46136,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _717faf1b,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _6eb3bc72,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _443666b8,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _48b84b84,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _75387182,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _6a9ad0c1,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _5a2359a4,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _2e55994e,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _76e83d18,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _05e46229,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _43e2ab85,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _0331e9b2,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/news",
    component: _350f47a2,
    name: "news"
  }, {
    path: "/our-team",
    component: _4506c61a,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _f3a4251a,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _5bce4017,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _54aaa019,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _c540efc8,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _d5b697de,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _38a0df33,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _c5d5ee84,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _9ca94198,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _df95426c,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _497343dd,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _61cccbbc,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _8e4f0a1a,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _5e222ce0,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _c2ec0df4,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _1750f4d2,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _45d9e5ac,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _922cfe9c,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _6e24fd8e,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _6106519e,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _24ceaafc,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _2ef4e54a,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _36c29c72,
    name: "success-story-slug"
  }, {
    path: "/glossary/:slug?/accrued-revenue",
    component: _36a0a3bc,
    name: "glossary-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/accrued-revenue",
    component: _32c45f62,
    name: "glossary1-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/agile-billing",
    component: _6cbefaf2,
    name: "glossary1-slug-agile-billing"
  }, {
    path: "/glossary1/:slug?/annual-contract-value",
    component: _591f27c1,
    name: "glossary1-slug-annual-contract-value"
  }, {
    path: "/",
    component: _ebc12ab4,
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

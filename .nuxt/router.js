import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7960dc1b = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _acb9ccb8 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _ce8a7578 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _48f681ba = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _d46a0170 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _3a72f3d2 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _14074445 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _de4dcd00 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _2e0496c2 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _26ab8ea5 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _7db954cf = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _440d1a99 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _09dd8370 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _175d5974 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _3bdb6bb3 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _9e24a320 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _55d1e04a = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _52b62274 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _271d38d8 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _b7e348cc = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _2d6fd1dd = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _a6ef955c = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _6c14abb4 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _607ecebf = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _75152535 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _654205a9 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _0df1aefc = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _7f8841e3 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _5f880798 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _42e7d7ef = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _5c0474f2 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _2c7f9898 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _1818d0c9 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _74ebb35e = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _4aabbbad = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _3d8d0fbd = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _71604e83 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _865d0348 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _fc9b3334 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _99c1f63a = () => interopDefault(import('..\\pages\\glossary\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary/_slug/accrued-revenue" */))
const _33cd5ca4 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary1/_slug/accrued-revenue" */))
const _d30a60b4 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\agile-billing.vue' /* webpackChunkName: "pages/glossary1/_slug/agile-billing" */))
const _35a5e5e0 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\annual-contract-value.vue' /* webpackChunkName: "pages/glossary1/_slug/annual-contract-value" */))
const _2d546085 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7960dc1b,
    name: "App"
  }, {
    path: "/approval-software",
    component: _acb9ccb8,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _ce8a7578,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _48f681ba,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _d46a0170,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _3a72f3d2,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _14074445,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _de4dcd00,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _2e0496c2,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _26ab8ea5,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _7db954cf,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _440d1a99,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _09dd8370,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _175d5974,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _3bdb6bb3,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/news",
    component: _9e24a320,
    name: "news"
  }, {
    path: "/our-team",
    component: _55d1e04a,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _52b62274,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _271d38d8,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _b7e348cc,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _2d6fd1dd,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _a6ef955c,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _6c14abb4,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _607ecebf,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _75152535,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _654205a9,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _0df1aefc,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _7f8841e3,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _5f880798,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _42e7d7ef,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _5c0474f2,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _2c7f9898,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _1818d0c9,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _74ebb35e,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _4aabbbad,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _3d8d0fbd,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _71604e83,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _865d0348,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _fc9b3334,
    name: "success-story-slug"
  }, {
    path: "/glossary/:slug?/accrued-revenue",
    component: _99c1f63a,
    name: "glossary-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/accrued-revenue",
    component: _33cd5ca4,
    name: "glossary1-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/agile-billing",
    component: _d30a60b4,
    name: "glossary1-slug-agile-billing"
  }, {
    path: "/glossary1/:slug?/annual-contract-value",
    component: _35a5e5e0,
    name: "glossary1-slug-annual-contract-value"
  }, {
    path: "/",
    component: _2d546085,
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

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a8405126 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _9eb05fdc = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _40899e9c = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _45a822a8 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _010a889a = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _2c6986f6 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _0909efd2 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _1f868852 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _71dccdd8 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _69821ef7 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _492ffa21 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _a166b82a = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _1822ea36 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _79752518 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _5f7aa605 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _5eecc5ad = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _d4e69a74 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _0e90fcaa = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _6f8500ec = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _9174f0a2 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _460ab224 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _45a6c306 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _0ce85dde = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _0e222787 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _07e1b9d2 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _25ed28ea = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _04ac13b5 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _69be7906 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _186e4746 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _a8e0464e = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _669f44ea = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _70c9a3b7 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _14435d3f = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _ca1868ca = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _e455c0aa = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _7a926cd5 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _5efb72a4 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _25106b54 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _7454cbf3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a8405126,
    name: "App"
  }, {
    path: "/approval-software",
    component: _9eb05fdc,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _40899e9c,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _45a822a8,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _010a889a,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _2c6986f6,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _0909efd2,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _1f868852,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _71dccdd8,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _69821ef7,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _492ffa21,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _a166b82a,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _1822ea36,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _79752518,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _5f7aa605,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _5eecc5ad,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _d4e69a74,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _0e90fcaa,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _6f8500ec,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _9174f0a2,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _460ab224,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _45a6c306,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _0ce85dde,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _0e222787,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _07e1b9d2,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _25ed28ea,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _04ac13b5,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _69be7906,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _186e4746,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _a8e0464e,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _669f44ea,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _70c9a3b7,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _14435d3f,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _ca1868ca,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _e455c0aa,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _7a926cd5,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _5efb72a4,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _25106b54,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _7454cbf3,
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

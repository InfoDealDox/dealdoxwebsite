import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7db936d3 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _59ba1028 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _3e9fcf8c = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _0e2cb602 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _62592200 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _0c46645f = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _576e7cfd = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _3ef4b390 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _44c0d57a = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _350cd546 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _1049f0f2 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _109b3d51 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _51734690 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _6a3053fe = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _152eca6b = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _2dbe8093 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _1184292c = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _6a847190 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _1e300e52 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _f3d17ad6 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _e3ceebec = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _7290966c = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _773b0d77 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _e85d3826 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _9487701e = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _28e47f44 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _15317aca = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _9c675e28 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _01a30392 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _4f0c9f82 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _f6cda160 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _3dcb85de = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _740bface = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _c8779816 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _e2b4eff6 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _a40fc58a = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _4516a514 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _4bc70aae = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _598d2a66 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7db936d3,
    name: "App"
  }, {
    path: "/approval-software",
    component: _59ba1028,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _3e9fcf8c,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _0e2cb602,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _62592200,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _0c46645f,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _576e7cfd,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _3ef4b390,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _44c0d57a,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _350cd546,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _1049f0f2,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _109b3d51,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _51734690,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _6a3053fe,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _152eca6b,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _2dbe8093,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _1184292c,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _6a847190,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _1e300e52,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _f3d17ad6,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _e3ceebec,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _7290966c,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _773b0d77,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _e85d3826,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _9487701e,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _28e47f44,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _15317aca,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _9c675e28,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _01a30392,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _4f0c9f82,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _f6cda160,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _3dcb85de,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _740bface,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _c8779816,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _e2b4eff6,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _a40fc58a,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _4516a514,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _4bc70aae,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _598d2a66,
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

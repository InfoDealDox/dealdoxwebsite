import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4dde30eb = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _6250ea58 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _3dab7e74 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _7438d22c = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _ed62f7d0 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _07faf747 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _6a3025d6 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _3b547a50 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _272b0392 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _1f7fa916 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _2bb9399f = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _37909f69 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _16cfe910 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _2ba42c16 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _c8268668 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5f9a9883 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _1e5588ab = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _1c4abf44 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _44043cb0 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _520e406a = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _76ae4aad = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _658473bc = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _25233ef8 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _59a53b8f = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _6e3b9205 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _5b3e8ed9 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _76f0ac2c = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _9249ca9a = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _1e1ce5f8 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _2178791f = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _53577a57 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _5b609568 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _7c14940e = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _4ad6ab81 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _c25bae46 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _dc990626 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _db99c95a = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _278249a8 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _d8a1c8d4 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _5b75cc96 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4dde30eb,
    name: "App"
  }, {
    path: "/approval-software",
    component: _6250ea58,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _3dab7e74,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _7438d22c,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _ed62f7d0,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _07faf747,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _6a3025d6,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _3b547a50,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _272b0392,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _1f7fa916,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _2bb9399f,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _37909f69,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _16cfe910,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _2ba42c16,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _c8268668,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _5f9a9883,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _1e5588ab,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _1c4abf44,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _44043cb0,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _520e406a,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _76ae4aad,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _658473bc,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _25233ef8,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _59a53b8f,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _6e3b9205,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _5b3e8ed9,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _76f0ac2c,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _9249ca9a,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _1e1ce5f8,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _2178791f,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _53577a57,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _5b609568,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _7c14940e,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _4ad6ab81,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _c25bae46,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _dc990626,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _db99c95a,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _278249a8,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _d8a1c8d4,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _5b75cc96,
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

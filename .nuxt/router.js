import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f6167b30 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _e833a092 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _2e0fc052 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _087c620d = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _72ae4895 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _75ecc7ac = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _0acf9fd2 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _070ca08d = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _351ae2e2 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _3a012d1c = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _2ffb37c8 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _20f063e6 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _d57b8bca = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _bf805c5a = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _47395e2f = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _29222100 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _68e64868 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _0f09fd41 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _1de59465 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _0e576ae7 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _7d81eb2c = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _44834142 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _5b974ffe = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _17ecc68c = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _2c831d02 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _5ad11d3c = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _47cda462 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _2b76c070 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _01722641 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _28ffb102 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _381d71d4 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _21e63965 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _75eeae1c = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _b5ce04b8 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _e4ee9d00 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _ff2bf4e0 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _2c070c50 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _2e0235ae = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _608b40b9 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _7d91bb18 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _f6167b30,
    name: "App"
  }, {
    path: "/approval-software",
    component: _e833a092,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _2e0fc052,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _087c620d,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _72ae4895,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _75ecc7ac,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _0acf9fd2,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _070ca08d,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _351ae2e2,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _3a012d1c,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _2ffb37c8,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _20f063e6,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _d57b8bca,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _bf805c5a,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _47395e2f,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _29222100,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _68e64868,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _0f09fd41,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _1de59465,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _0e576ae7,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _7d81eb2c,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _44834142,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _5b974ffe,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _17ecc68c,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _2c831d02,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _5ad11d3c,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _47cda462,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _2b76c070,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _01722641,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _28ffb102,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _381d71d4,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _21e63965,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _75eeae1c,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _b5ce04b8,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _e4ee9d00,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _ff2bf4e0,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _2c070c50,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _2e0235ae,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _608b40b9,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _7d91bb18,
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

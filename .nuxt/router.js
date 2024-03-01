import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dc1dcf1c = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _37a5c46d = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _1198958d = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _0ddf3743 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _e8be16c2 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _70c930e0 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _31e0c748 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _7368c7d2 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _5e3e60ce = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _a96dff08 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _24bfbc26 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _39e30ff0 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _289e235e = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _17a7a45d = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _6fd9d3e5 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5006888a = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _31c86ef2 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _5158d76a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _0bb4de22 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _4b14c2f1 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _ebbd9e18 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _f6939e2e = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _c3314bea = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _035b0796 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _17f15e0c = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _da59061c = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _1d027805 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _ba42da0c = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _af2c106a = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _7c625bb8 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _045073de = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _de770722 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _301bed52 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _36bd10da = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _88378c94 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _a274e474 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _79140d4c = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _7799d433 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _890e2c22 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _b39b9e64 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _dc1dcf1c,
    name: "App"
  }, {
    path: "/approval-software",
    component: _37a5c46d,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _1198958d,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _0ddf3743,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _e8be16c2,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _70c930e0,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _31e0c748,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _7368c7d2,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _5e3e60ce,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _a96dff08,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _24bfbc26,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _39e30ff0,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _289e235e,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _17a7a45d,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _6fd9d3e5,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _5006888a,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _31c86ef2,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _5158d76a,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _0bb4de22,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _4b14c2f1,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _ebbd9e18,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _f6939e2e,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _c3314bea,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _035b0796,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _17f15e0c,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _da59061c,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _1d027805,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _ba42da0c,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _af2c106a,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _7c625bb8,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _045073de,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _de770722,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _301bed52,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _36bd10da,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _88378c94,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _a274e474,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _79140d4c,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _7799d433,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _890e2c22,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _b39b9e64,
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

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a8c8538 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _1837458a = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _0269194a = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _1ffc0291 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _e792f0de = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _2d07c9ae = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _99589c64 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _010266ee = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _ebeca8ea = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _7017ca6e = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _7c852b18 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _3a78a2e2 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _45e1349f = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _038027cf = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _5d0cb1b3 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2619c708 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _442a1664 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _c7bb4386 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _732cb33e = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _ba4b9c3a = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _c6fa4f34 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _939a614a = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _69fbdafd = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _86f838f0 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _5dcb8c04 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _de2aa680 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _1be6275a = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _e291d328 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _4c32d386 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _9394baf4 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _60361660 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _cd15bb3e = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _51d0eac0 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _48a05228 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _86ebb7f8 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _a1290fd8 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _83c69d68 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _461753b6 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _5c61593d = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _d935e2c8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4a8c8538,
    name: "App"
  }, {
    path: "/approval-software",
    component: _1837458a,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _0269194a,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _1ffc0291,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _e792f0de,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _2d07c9ae,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _99589c64,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _010266ee,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _ebeca8ea,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _7017ca6e,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _7c852b18,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _3a78a2e2,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _45e1349f,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _038027cf,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _5d0cb1b3,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _2619c708,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _442a1664,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _c7bb4386,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _732cb33e,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _ba4b9c3a,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _c6fa4f34,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _939a614a,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _69fbdafd,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _86f838f0,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _5dcb8c04,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _de2aa680,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _1be6275a,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _e291d328,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _4c32d386,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _9394baf4,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _60361660,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _cd15bb3e,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _51d0eac0,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _48a05228,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _86ebb7f8,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _a1290fd8,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _83c69d68,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _461753b6,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _5c61593d,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _d935e2c8,
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

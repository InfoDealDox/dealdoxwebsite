import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d2e45dc = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _174fa866 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _17b9e626 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _3ccaa6a3 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _63da193f = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _2d7b9840 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _60c2c8fc = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _12368e92 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _3fa54439 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _79c255c8 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _8f48be74 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _121c3490 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _53104db1 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _c7979e06 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _52644b45 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _16d07d2a = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _01423b92 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _21ad2e2a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _73d8bd8f = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _429eb0de = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _599afd94 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _3338ad89 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _7801deab = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _721f7c36 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _f2945aa8 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _96bed75c = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _00319136 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _276b1f9a = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _56ec746b = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _c7bbb9d0 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _442a0f04 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _749d110f = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _ec5c069c = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _cfaf3f8c = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _634e4dd4 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _7d8ba5b4 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _e605a40c = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _49f528d3 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _c94ccd62 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _ee86afa4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7d2e45dc,
    name: "App"
  }, {
    path: "/approval-software",
    component: _174fa866,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _17b9e626,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _3ccaa6a3,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _63da193f,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _2d7b9840,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _60c2c8fc,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _12368e92,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _3fa54439,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _79c255c8,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _8f48be74,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _121c3490,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _53104db1,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _c7979e06,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _52644b45,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _16d07d2a,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _01423b92,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _21ad2e2a,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _73d8bd8f,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _429eb0de,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _599afd94,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _3338ad89,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _7801deab,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _721f7c36,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _f2945aa8,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _96bed75c,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _00319136,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _276b1f9a,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _56ec746b,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _c7bbb9d0,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _442a0f04,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _749d110f,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _ec5c069c,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _cfaf3f8c,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _634e4dd4,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _7d8ba5b4,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _e605a40c,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _49f528d3,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _c94ccd62,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _ee86afa4,
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

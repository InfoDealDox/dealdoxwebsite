import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _80463d06 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _4ed36402 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _199da6bc = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _fd652ad0 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _8eb6faac = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _f0125f16 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _00953627 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _28694e62 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _225b1b24 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _70709107 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _c798579e = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _66e69dfb = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _14286bb4 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _54c84328 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _51726afa = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7c902fd6 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _0dde03bd = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _c709b654 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _13ab2aba = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _7aee4a08 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _6636c5bf = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _7f0e6834 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _6cedad16 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _54d55321 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _696ba997 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _38fba1f2 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _06660e4c = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _40019c76 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _ba7ba1d4 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _22ff604d = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _5a52722e = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _fdf0d20c = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _325ffba7 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _438bd52f = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _ff4268ea = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _73401f9b = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _7135cee5 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _e2b70e84 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _3287d344 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _f06a703a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _80463d06,
    name: "App"
  }, {
    path: "/approval-software",
    component: _4ed36402,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _199da6bc,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _fd652ad0,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _8eb6faac,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _f0125f16,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _00953627,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _28694e62,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _225b1b24,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _70709107,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _c798579e,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _66e69dfb,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _14286bb4,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _54c84328,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _51726afa,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _7c902fd6,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _0dde03bd,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _c709b654,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _13ab2aba,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _7aee4a08,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _6636c5bf,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _7f0e6834,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _6cedad16,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _54d55321,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _696ba997,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _38fba1f2,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _06660e4c,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _40019c76,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _ba7ba1d4,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _22ff604d,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _5a52722e,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _fdf0d20c,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _325ffba7,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _438bd52f,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _ff4268ea,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _73401f9b,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _7135cee5,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _e2b70e84,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _3287d344,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _f06a703a,
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

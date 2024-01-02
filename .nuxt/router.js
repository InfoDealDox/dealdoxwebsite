import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e4ac121 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _4b047044 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _674d7a7e = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _2616e374 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _529a7e4e = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _13a13451 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _2e60e6cb = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _02ddd506 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _31c888c8 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _3c0fcaaa = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _34b3f056 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _00dc999f = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _18dad902 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _e089e068 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _74e28e54 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5665c5b9 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _10b2cf3e = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _0e02ae7a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _4176db5e = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _0bfb0ea0 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _4fff5a63 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _73740ad8 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _568fc4ba = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _6442c0c5 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _78d9173b = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _7bd0e0e3 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _8792b894 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _1af1fe69 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _d1b05c8c = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _72496029 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _870e42e6 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _cda14ec4 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _7d00d883 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _ca210bea = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _fd26bb32 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _744df677 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _06fb7489 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _35fc7262 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _175c1420 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _0831d482 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7e4ac121,
    name: "App"
  }, {
    path: "/approval-software",
    component: _4b047044,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _674d7a7e,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _2616e374,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _529a7e4e,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _13a13451,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _2e60e6cb,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _02ddd506,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _31c888c8,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _3c0fcaaa,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _34b3f056,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _00dc999f,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _18dad902,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _e089e068,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _74e28e54,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _5665c5b9,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _10b2cf3e,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _0e02ae7a,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _4176db5e,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _0bfb0ea0,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _4fff5a63,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _73740ad8,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _568fc4ba,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _6442c0c5,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _78d9173b,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _7bd0e0e3,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _8792b894,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _1af1fe69,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _d1b05c8c,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _72496029,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _870e42e6,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _cda14ec4,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _7d00d883,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _ca210bea,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _fd26bb32,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _744df677,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _06fb7489,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _35fc7262,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _175c1420,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _0831d482,
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

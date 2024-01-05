import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e2757710 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _584168b2 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _0847a3c7 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _ce959c06 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _9db88ab6 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _0d02b81a = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _9b69743c = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _427642c6 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _9fd8eec2 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _264d5382 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _4bf1b62c = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _5f65d5f6 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _1e92a20b = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _40fc67e3 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _6688e21f = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7db8ace0 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _0f30fe78 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _5257e751 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _753d8b16 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _7246bcf7 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _6789c07a = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _549f8d6f = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _ed428bde = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _3ae47ec8 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _11b7d1dc = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _7fd49da8 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _028885bf = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _67995300 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _78535451 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _4c0bbcf2 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _21705838 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _7abe0375 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _b7dee3e8 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _08dcfd94 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _6e6b3970 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _614c8d80 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _b7dc3340 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _70bee18e = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _7a8630a9 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _c63d81f0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e2757710,
    name: "App"
  }, {
    path: "/approval-software",
    component: _584168b2,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _0847a3c7,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _ce959c06,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _9db88ab6,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _0d02b81a,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _9b69743c,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _427642c6,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _9fd8eec2,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _264d5382,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _4bf1b62c,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _5f65d5f6,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _1e92a20b,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _40fc67e3,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _6688e21f,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _7db8ace0,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _0f30fe78,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _5257e751,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _753d8b16,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _7246bcf7,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _6789c07a,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _549f8d6f,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _ed428bde,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _3ae47ec8,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _11b7d1dc,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _7fd49da8,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _028885bf,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _67995300,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _78535451,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _4c0bbcf2,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _21705838,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _7abe0375,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _b7dee3e8,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _08dcfd94,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _6e6b3970,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _614c8d80,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _b7dc3340,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _70bee18e,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _7a8630a9,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _c63d81f0,
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

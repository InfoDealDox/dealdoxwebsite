import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e7b549a = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _34a6b345 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _47b1ef36 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _5e92281b = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _22e088c7 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6dca1fb8 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _31497284 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _59376e3f = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _5820b7c1 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _9a5b7eb8 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _2ce2004e = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _5dbab7d0 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _53ed49ae = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _785cd285 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _3a6846bd = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _475bd0b2 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _2ea225cc = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _4246571a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _445f6717 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _53370719 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _4107af1c = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _4a615b11 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _41844633 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _eaca2084 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _c19d7398 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _fae4d06c = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _06a13cdd = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _0393c122 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _6e1521f3 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _bb68bae0 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _b1253ff4 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _78586c97 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _1ec6f3ac = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _3b3e0c9c = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _a19012e4 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _bbcd6ac4 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _78709182 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _984f174a = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _90c1aa72 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _70c0a3a6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1e7b549a,
    name: "App"
  }, {
    path: "/approval-software",
    component: _34a6b345,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _47b1ef36,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _5e92281b,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _22e088c7,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _6dca1fb8,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _31497284,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _59376e3f,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _5820b7c1,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _9a5b7eb8,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _2ce2004e,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _5dbab7d0,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _53ed49ae,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _785cd285,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _3a6846bd,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _475bd0b2,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _2ea225cc,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _4246571a,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _445f6717,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _53370719,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _4107af1c,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _4a615b11,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _41844633,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _eaca2084,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _c19d7398,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _fae4d06c,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _06a13cdd,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _0393c122,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _6e1521f3,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _bb68bae0,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _b1253ff4,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _78586c97,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _1ec6f3ac,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _3b3e0c9c,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _a19012e4,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _bbcd6ac4,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _78709182,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _984f174a,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _90c1aa72,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _70c0a3a6,
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

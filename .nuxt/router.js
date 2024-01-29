import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _269dd4f6 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _b8c0212e = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _f9c34aee = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _40b76182 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _691aed23 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _46794848 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _55e621e0 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _3a8970ca = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _dfd8abc6 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _5b69d200 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _16e02caa = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _175d0874 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _66f42766 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _517265e1 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _3d40ce3e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _608e530e = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _20a28f14 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _0354aa62 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _68fc1673 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _3d353375 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _48077a78 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _28d7cf26 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _9c9ae2e2 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _7ae43bcc = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _51b78ee0 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _07b285ee = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _53799bfe = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _46ad5704 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _0f47df4f = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _7b4542b4 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _179ba862 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _b71dea1a = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _f3916d64 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _800e1654 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _8754809c = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _a191d87c = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _1d4b4bde = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _f7fe4a92 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _0d6689eb = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _17b7f5ca = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _269dd4f6,
    name: "App"
  }, {
    path: "/approval-software",
    component: _b8c0212e,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _f9c34aee,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _40b76182,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _691aed23,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _46794848,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _55e621e0,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _3a8970ca,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _dfd8abc6,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _5b69d200,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _16e02caa,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _175d0874,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _66f42766,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _517265e1,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _3d40ce3e,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _608e530e,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _20a28f14,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _0354aa62,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _68fc1673,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _3d353375,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _48077a78,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _28d7cf26,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _9c9ae2e2,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _7ae43bcc,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _51b78ee0,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _07b285ee,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _53799bfe,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _46ad5704,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _0f47df4f,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _7b4542b4,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _179ba862,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _b71dea1a,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _f3916d64,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _800e1654,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _8754809c,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _a191d87c,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _1d4b4bde,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _f7fe4a92,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _0d6689eb,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _17b7f5ca,
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

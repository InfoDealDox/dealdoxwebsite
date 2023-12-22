import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59082c66 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _944e9c9c = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _4af98252 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _99ea8770 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _361e3afa = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _2207c3b6 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _7c511b12 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _5f30fa9c = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _0631178f = () => interopDefault(import('..\\pages\\ebook.vue' /* webpackChunkName: "pages/ebook" */))
const _a294bd52 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _5452ec81 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _7e7d85ed = () => interopDefault(import('..\\pages\\glossary.vue' /* webpackChunkName: "pages/glossary" */))
const _3967d854 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _13712f78 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _ad8a7eac = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _14e50865 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _6809900d = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _4a7f95b4 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _562531ec = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _7aa7f34c = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _7f3b5be2 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _f60966f8 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _32dbd534 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _13d0991e = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _0aae09e7 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _c99c5692 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _f1ac1aec = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _c2afc3d6 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _aea1d934 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _0e455dfd = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _35a8c86e = () => interopDefault(import('..\\pages\\blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/blog-details/_slug/index" */))
const _6842074a = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _fda58ee8 = () => interopDefault(import('..\\pages\\ebook-details\\_slug\\index.vue' /* webpackChunkName: "pages/ebook-details/_slug/index" */))
const _77db16df = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _da54958a = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _f491ed6a = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _06896c6a = () => interopDefault(import('..\\pages\\glossary-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-details/_slug/index" */))
const _4814490e = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _7347d547 = () => interopDefault(import('..\\pages\\success-stories-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-details/_slug/index" */))
const _40d9c4da = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _59082c66,
    name: "App"
  }, {
    path: "/approval-software",
    component: _944e9c9c,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _4af98252,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _99ea8770,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _361e3afa,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _2207c3b6,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _7c511b12,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _5f30fa9c,
    name: "demo"
  }, {
    path: "/ebook",
    component: _0631178f,
    name: "ebook"
  }, {
    path: "/ForgetPassword",
    component: _a294bd52,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _5452ec81,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossary",
    component: _7e7d85ed,
    name: "glossary"
  }, {
    path: "/hubspot-cpq-integration",
    component: _3967d854,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _13712f78,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _ad8a7eac,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _14e50865,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _6809900d,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _4a7f95b4,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _562531ec,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _7aa7f34c,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _7f3b5be2,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _f60966f8,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _32dbd534,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _13d0991e,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _0aae09e7,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _c99c5692,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _f1ac1aec,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _c2afc3d6,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _aea1d934,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _0e455dfd,
    name: "thank-you"
  }, {
    path: "/blog-details/:slug",
    component: _35a8c86e,
    name: "blog-details-slug"
  }, {
    path: "/category-details/:slug",
    component: _6842074a,
    name: "category-details-slug"
  }, {
    path: "/ebook-details/:slug",
    component: _fda58ee8,
    name: "ebook-details-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _77db16df,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _da54958a,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _f491ed6a,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary-details/:slug",
    component: _06896c6a,
    name: "glossary-details-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _4814490e,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-stories-details/:slug",
    component: _7347d547,
    name: "success-stories-details-slug"
  }, {
    path: "/",
    component: _40d9c4da,
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

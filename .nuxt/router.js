import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63646b74 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _42069fce = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _7892a339 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _0d0b53ef = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _752edb1a = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _18201c8c = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _70968b30 = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _5e4328eb = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _4928776d = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _59a59450 = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _2b4d9c0c = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _73aaadc4 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _1d9b68fd = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _230c7f31 = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _52583cde = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _42cc3f44 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _92751c74 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _f49fafc2 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _f8a7007a = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _10ae38c5 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _0f1e33c8 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _6b0da9bd = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _3c243842 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _7ba2af6a = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _df8df440 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _776b1e9e = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _3a385eb1 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _a3792464 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _e27d1ec2 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _d1f49938 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _47d6fdb2 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _5e46e843 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _5d669dfe = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _ea6e2cf4 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _0088473c = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _1ac59f1c = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _6a3b792e = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _64dbcff2 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _ade3a2ca = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _0d2c3e7a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _63646b74,
    name: "App"
  }, {
    path: "/approval-software",
    component: _42069fce,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _7892a339,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _0d0b53ef,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _752edb1a,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _18201c8c,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _70968b30,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _5e4328eb,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _4928776d,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _59a59450,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _2b4d9c0c,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _73aaadc4,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _1d9b68fd,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _230c7f31,
    name: "localized-deal-documents"
  }, {
    path: "/login",
    component: _52583cde,
    name: "login"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _42cc3f44,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _92751c74,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _f49fafc2,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _f8a7007a,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _10ae38c5,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _0f1e33c8,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _6b0da9bd,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _3c243842,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _7ba2af6a,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _df8df440,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _776b1e9e,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _3a385eb1,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _a3792464,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _e27d1ec2,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _d1f49938,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _47d6fdb2,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _5e46e843,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _5d669dfe,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _ea6e2cf4,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _0088473c,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _1ac59f1c,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _6a3b792e,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _64dbcff2,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _ade3a2ca,
    name: "success-story-slug"
  }, {
    path: "/",
    component: _0d2c3e7a,
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

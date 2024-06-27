import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65327f50 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _152a05cf = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _197a59ef = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _6e80aa25 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _65749d7d = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _4e4d7242 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _65a6b28c = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _62627916 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _7590d112 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _a17deb4c = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _6591e904 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _13b6b8ce = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _4b631e33 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _a3891e8a = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _40965868 = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _22394f36 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _6b8cb750 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _4968c3ae = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _3f7ac966 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _e8322062 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _78350d5c = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _38431a47 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _716b44e9 = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _109c6118 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _0c4825ea = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _50e3bf54 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _cfe8ac32 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _39725f58 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _5bf6e129 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _7b271f1a = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _51574288 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _de4deb66 = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _84d54398 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _394c7dbc = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _456334d0 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _5fa08cb0 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _4aad4538 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _5242e611 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _d6274e5e = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _66e2dd58 = () => interopDefault(import('..\\pages\\glossary\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary/_slug/accrued-revenue" */))
const _aa5ef04e = () => interopDefault(import('..\\pages\\glossary1\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary1/_slug/accrued-revenue" */))
const _8560d6de = () => interopDefault(import('..\\pages\\glossary1\\_slug\\agile-billing.vue' /* webpackChunkName: "pages/glossary1/_slug/agile-billing" */))
const _6f6ee06a = () => interopDefault(import('..\\pages\\glossary1\\_slug\\annual-contract-value.vue' /* webpackChunkName: "pages/glossary1/_slug/annual-contract-value" */))
const _a3d815a0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _65327f50,
    name: "App"
  }, {
    path: "/approval-software",
    component: _152a05cf,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _197a59ef,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _6e80aa25,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _65749d7d,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _4e4d7242,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _65a6b28c,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _62627916,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _7590d112,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _a17deb4c,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _6591e904,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _13b6b8ce,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _4b631e33,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _a3891e8a,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _40965868,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/news",
    component: _22394f36,
    name: "news"
  }, {
    path: "/our-team",
    component: _6b8cb750,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _4968c3ae,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _3f7ac966,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _e8322062,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _78350d5c,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _38431a47,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _716b44e9,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _109c6118,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _0c4825ea,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _50e3bf54,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _cfe8ac32,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _39725f58,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _5bf6e129,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _7b271f1a,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _51574288,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _de4deb66,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _84d54398,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _394c7dbc,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _456334d0,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _5fa08cb0,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _4aad4538,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _5242e611,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _d6274e5e,
    name: "success-story-slug"
  }, {
    path: "/glossary/:slug?/accrued-revenue",
    component: _66e2dd58,
    name: "glossary-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/accrued-revenue",
    component: _aa5ef04e,
    name: "glossary1-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/agile-billing",
    component: _8560d6de,
    name: "glossary1-slug-agile-billing"
  }, {
    path: "/glossary1/:slug?/annual-contract-value",
    component: _6f6ee06a,
    name: "glossary1-slug-annual-contract-value"
  }, {
    path: "/",
    component: _a3d815a0,
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

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2bc0dc74 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _56f93c2b = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _4a833a4b = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _301ed581 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _73f596a1 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _dfc6aec4 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _5baf34de = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _2b3a6799 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _956a7aca = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _3498d17e = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _04e41a28 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _2237b1f2 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _492f1f8f = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _69ef9adf = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _1393f38c = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _4b4efc89 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _b8fcad18 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _60a3654d = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _6ec52971 = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _2b3920f3 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _084b2914 = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _ab2b4b2a = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _6982da0d = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _30760ad0 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _07495de4 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _23a483b0 = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _84a6717a = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _15b2ed08 = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _63c3bd66 = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _41d07176 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _61281840 = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _28b3ed1e = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _6f1f24e0 = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _1f355518 = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _6a042ef4 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _5ce58304 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _d624af48 = () => interopDefault(import('..\\pages\\glossary\\_slug\\index.vue' /* webpackChunkName: "pages/glossary/_slug/index" */))
const _21151d35 = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _403f67a6 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _426ca37c = () => interopDefault(import('..\\pages\\glossary\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary/_slug/accrued-revenue" */))
const _407f8635 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary1/_slug/accrued-revenue" */))
const _87bb0c26 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\agile-billing.vue' /* webpackChunkName: "pages/glossary1/_slug/agile-billing" */))
const _54fe5927 = () => interopDefault(import('..\\pages\\glossary1\\_slug\\annual-contract-value.vue' /* webpackChunkName: "pages/glossary1/_slug/annual-contract-value" */))
const _41c654e8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2bc0dc74,
    name: "App"
  }, {
    path: "/approval-software",
    component: _56f93c2b,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _4a833a4b,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _301ed581,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _73f596a1,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _dfc6aec4,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _5baf34de,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _2b3a6799,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _956a7aca,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _3498d17e,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _04e41a28,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _2237b1f2,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _492f1f8f,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _69ef9adf,
    name: "localized-deal-documents"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _1393f38c,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/news",
    component: _4b4efc89,
    name: "news"
  }, {
    path: "/our-team",
    component: _b8fcad18,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _60a3654d,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _6ec52971,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _2b3920f3,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _084b2914,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _ab2b4b2a,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _6982da0d,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _30760ad0,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _07495de4,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _23a483b0,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _84a6717a,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _15b2ed08,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _63c3bd66,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _41d07176,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _61281840,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _28b3ed1e,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _6f1f24e0,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _1f355518,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _6a042ef4,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _5ce58304,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossary/:slug",
    component: _d624af48,
    name: "glossary-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _21151d35,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _403f67a6,
    name: "success-story-slug"
  }, {
    path: "/glossary/:slug?/accrued-revenue",
    component: _426ca37c,
    name: "glossary-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/accrued-revenue",
    component: _407f8635,
    name: "glossary1-slug-accrued-revenue"
  }, {
    path: "/glossary1/:slug?/agile-billing",
    component: _87bb0c26,
    name: "glossary1-slug-agile-billing"
  }, {
    path: "/glossary1/:slug?/annual-contract-value",
    component: _54fe5927,
    name: "glossary1-slug-annual-contract-value"
  }, {
    path: "/",
    component: _41c654e8,
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

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7388d931 = () => interopDefault(import('..\\pages\\App.js' /* webpackChunkName: "pages/App" */))
const _712ae464 = () => interopDefault(import('..\\pages\\approval-software.vue' /* webpackChunkName: "pages/approval-software" */))
const _e780af24 = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _5dcadd64 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _4ef0f344 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _008dfa41 = () => interopDefault(import('..\\pages\\cookie-preference.vue' /* webpackChunkName: "pages/cookie-preference" */))
const _4ecba2db = () => interopDefault(import('..\\pages\\cpq-integrations.vue' /* webpackChunkName: "pages/cpq-integrations" */))
const _be13add4 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _a9c7ce50 = () => interopDefault(import('..\\pages\\ebooks.vue' /* webpackChunkName: "pages/ebooks" */))
const _1b029abb = () => interopDefault(import('..\\pages\\ForgetPassword.vue' /* webpackChunkName: "pages/ForgetPassword" */))
const _4b20efe5 = () => interopDefault(import('..\\pages\\freshworks-cpq-integration.vue' /* webpackChunkName: "pages/freshworks-cpq-integration" */))
const _f26cbca2 = () => interopDefault(import('..\\pages\\glossaries.vue' /* webpackChunkName: "pages/glossaries" */))
const _68376af2 = () => interopDefault(import('..\\pages\\hubspot-cpq-integration.vue' /* webpackChunkName: "pages/hubspot-cpq-integration" */))
const _2bf0bbdc = () => interopDefault(import('..\\pages\\localized-deal-documents.vue' /* webpackChunkName: "pages/localized-deal-documents" */))
const _5ee09c7e = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages/media" */))
const _0a15d46e = () => interopDefault(import('..\\pages\\microsoft-dynamics-365-cpq-integration.vue' /* webpackChunkName: "pages/microsoft-dynamics-365-cpq-integration" */))
const _6a566471 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _470d2e8a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _61e1976e = () => interopDefault(import('..\\pages\\quoting-software.vue' /* webpackChunkName: "pages/quoting-software" */))
const _7175f6b0 = () => interopDefault(import('..\\pages\\salesforce-cpq-integration.vue' /* webpackChunkName: "pages/salesforce-cpq-integration" */))
const _7aa1b31a = () => interopDefault(import('..\\pages\\security.vue' /* webpackChunkName: "pages/security" */))
const _323f4ee8 = () => interopDefault(import('..\\pages\\services-cpq.vue' /* webpackChunkName: "pages/services-cpq" */))
const _073bbcca = () => interopDefault(import('..\\pages\\sign-up-free-trial.vue' /* webpackChunkName: "pages/sign-up-free-trial" */))
const _44d35e56 = () => interopDefault(import('..\\pages\\SignIn.vue' /* webpackChunkName: "pages/SignIn" */))
const _1ba6b16a = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _d323c25a = () => interopDefault(import('..\\pages\\subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _b707b4b4 = () => interopDefault(import('..\\pages\\success-stories.vue' /* webpackChunkName: "pages/success-stories" */))
const _91b0ab0e = () => interopDefault(import('..\\pages\\sugarcrm-cpq-integration.vue' /* webpackChunkName: "pages/sugarcrm-cpq-integration" */))
const _55f315ca = () => interopDefault(import('..\\pages\\terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _55931619 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _6d24d69d = () => interopDefault(import('..\\pages\\blog\\_slug\\index.vue' /* webpackChunkName: "pages/blog/_slug/index" */))
const _77d7b8ae = () => interopDefault(import('..\\pages\\category-details\\_slug\\index.vue' /* webpackChunkName: "pages/category-details/_slug/index" */))
const _3c583b1a = () => interopDefault(import('..\\pages\\ebook\\_slug\\index.vue' /* webpackChunkName: "pages/ebook/_slug/index" */))
const _dc5eb80a = () => interopDefault(import('..\\pages\\featured-blog-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-blog-details/_slug/index" */))
const _6ec75457 = () => interopDefault(import('..\\pages\\featured-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/featured-category-details/_slug/index" */))
const _61a8a867 = () => interopDefault(import('..\\pages\\glossary-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/glossary-category-details/_slug/index" */))
const _3714b800 = () => interopDefault(import('..\\pages\\glossaryy\\_slug\\index.vue' /* webpackChunkName: "pages/glossaryy/_slug/index" */))
const _fafa9b1c = () => interopDefault(import('..\\pages\\success-stories-category-details\\_slug\\index.vue' /* webpackChunkName: "pages/success-stories-category-details/_slug/index" */))
const _613e2e10 = () => interopDefault(import('..\\pages\\success-story\\_slug\\index.vue' /* webpackChunkName: "pages/success-story/_slug/index" */))
const _75badc59 = () => interopDefault(import('..\\pages\\glossary\\_slug\\account-based-sales.vue' /* webpackChunkName: "pages/glossary/_slug/account-based-sales" */))
const _ee21110e = () => interopDefault(import('..\\pages\\glossary\\_slug\\accrued-revenue.vue' /* webpackChunkName: "pages/glossary/_slug/accrued-revenue" */))
const _50b4279e = () => interopDefault(import('..\\pages\\glossary\\_slug\\agile-billing.vue' /* webpackChunkName: "pages/glossary/_slug/agile-billing" */))
const _4fc2b147 = () => interopDefault(import('..\\pages\\glossary\\_slug\\software-as-a-service-saa-s.vue' /* webpackChunkName: "pages/glossary/_slug/software-as-a-service-saa-s" */))
const _20d943af = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7388d931,
    name: "App"
  }, {
    path: "/approval-software",
    component: _712ae464,
    name: "approval-software"
  }, {
    path: "/blogs",
    component: _e780af24,
    name: "blogs"
  }, {
    path: "/coming-soon",
    component: _5dcadd64,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _4ef0f344,
    name: "contact-us"
  }, {
    path: "/cookie-preference",
    component: _008dfa41,
    name: "cookie-preference"
  }, {
    path: "/cpq-integrations",
    component: _4ecba2db,
    name: "cpq-integrations"
  }, {
    path: "/demo",
    component: _be13add4,
    name: "demo"
  }, {
    path: "/ebooks",
    component: _a9c7ce50,
    name: "ebooks"
  }, {
    path: "/ForgetPassword",
    component: _1b029abb,
    name: "ForgetPassword"
  }, {
    path: "/freshworks-cpq-integration",
    component: _4b20efe5,
    name: "freshworks-cpq-integration"
  }, {
    path: "/glossaries",
    component: _f26cbca2,
    name: "glossaries"
  }, {
    path: "/hubspot-cpq-integration",
    component: _68376af2,
    name: "hubspot-cpq-integration"
  }, {
    path: "/localized-deal-documents",
    component: _2bf0bbdc,
    name: "localized-deal-documents"
  }, {
    path: "/media",
    component: _5ee09c7e,
    name: "media"
  }, {
    path: "/microsoft-dynamics-365-cpq-integration",
    component: _0a15d46e,
    name: "microsoft-dynamics-365-cpq-integration"
  }, {
    path: "/our-team",
    component: _6a566471,
    name: "our-team"
  }, {
    path: "/privacy-policy",
    component: _470d2e8a,
    name: "privacy-policy"
  }, {
    path: "/quoting-software",
    component: _61e1976e,
    name: "quoting-software"
  }, {
    path: "/salesforce-cpq-integration",
    component: _7175f6b0,
    name: "salesforce-cpq-integration"
  }, {
    path: "/security",
    component: _7aa1b31a,
    name: "security"
  }, {
    path: "/services-cpq",
    component: _323f4ee8,
    name: "services-cpq"
  }, {
    path: "/sign-up-free-trial",
    component: _073bbcca,
    name: "sign-up-free-trial"
  }, {
    path: "/SignIn",
    component: _44d35e56,
    name: "SignIn"
  }, {
    path: "/SignUp",
    component: _1ba6b16a,
    name: "SignUp"
  }, {
    path: "/subscriptions",
    component: _d323c25a,
    name: "subscriptions"
  }, {
    path: "/success-stories",
    component: _b707b4b4,
    name: "success-stories"
  }, {
    path: "/sugarcrm-cpq-integration",
    component: _91b0ab0e,
    name: "sugarcrm-cpq-integration"
  }, {
    path: "/terms-of-use",
    component: _55f315ca,
    name: "terms-of-use"
  }, {
    path: "/thank-you",
    component: _55931619,
    name: "thank-you"
  }, {
    path: "/blog/:slug",
    component: _6d24d69d,
    name: "blog-slug"
  }, {
    path: "/category-details/:slug",
    component: _77d7b8ae,
    name: "category-details-slug"
  }, {
    path: "/ebook/:slug",
    component: _3c583b1a,
    name: "ebook-slug"
  }, {
    path: "/featured-blog-details/:slug",
    component: _dc5eb80a,
    name: "featured-blog-details-slug"
  }, {
    path: "/featured-category-details/:slug",
    component: _6ec75457,
    name: "featured-category-details-slug"
  }, {
    path: "/glossary-category-details/:slug",
    component: _61a8a867,
    name: "glossary-category-details-slug"
  }, {
    path: "/glossaryy/:slug",
    component: _3714b800,
    name: "glossaryy-slug"
  }, {
    path: "/success-stories-category-details/:slug",
    component: _fafa9b1c,
    name: "success-stories-category-details-slug"
  }, {
    path: "/success-story/:slug",
    component: _613e2e10,
    name: "success-story-slug"
  }, {
    path: "/glossary/:slug?/account-based-sales",
    component: _75badc59,
    name: "glossary-slug-account-based-sales"
  }, {
    path: "/glossary/:slug?/accrued-revenue",
    component: _ee21110e,
    name: "glossary-slug-accrued-revenue"
  }, {
    path: "/glossary/:slug?/agile-billing",
    component: _50b4279e,
    name: "glossary-slug-agile-billing"
  }, {
    path: "/glossary/:slug?/software-as-a-service-saa-s",
    component: _4fc2b147,
    name: "glossary-slug-software-as-a-service-saa-s"
  }, {
    path: "/",
    component: _20d943af,
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

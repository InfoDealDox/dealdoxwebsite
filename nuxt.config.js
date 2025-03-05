import axios from "axios";
// import redirect from "./middleware/redirect";

export default {
  server: {
    host: "0.0.0.0",
  },
  serverMiddleware: [
    { path: '/', handler: './middleware/redirect' }
  ],
  modules: ["@nuxtjs/feed"],

  feed: [
    {
      path: "/feed.xml", // The path to your RSS feed
      type: "rss2", // RSS2 feed type
      async create(feed) {
        try {
          feed.options = {
            title: "DealDox",
            link: "https://www.dealdox.io/feed.xml", // Replace with your full feed URL
            description: "Effortlessly streamline your Quote Generation process with DealDox",
          };

          // Fetch posts from Strapi
          const response = await axios.get("https://cms.dealdox.io/api/blogs?populate=*");

          // Check the API response
          if (response.status !== 200) throw new Error("Failed to fetch posts");

          const posts = response.data.data;

          // Add each post to the feed
          posts.forEach((post) => {
            feed.addItem({
              title: post.attributes.title,
              id: `https://www.dealdox.io/blog/${post.attributes.slug}`,
              link: `https://www.dealdox.io/blog/${post.attributes.slug}`,
              description: post.attributes.longDesc, // Ensure longDesc exists in Strapi model
              content: post.attributes.seo.metaDescription, // Ensure metaDescription exists in Strapi model
              date: new Date(post.attributes.publishedAt), // Ensure publishedAt exists and is in correct format
            });
          });
        } catch (error) {
          console.error("Error creating RSS feed:", error);
        }
      },
      cacheTime: 1000 * 60 * 15, // Cache duration in milliseconds
    },
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DealDox",
    htmlAttrs: {
      lang: "en-us",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { hid: "keywords", name: "keywords", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "alternate",
        type: "application/rss+xml",
        href: "/feed.xml",
        title: "RSS Feed",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/pages-css/home-one.css',
    // '~/assets/css/pages-css/home-one.scss',
    // '~/assets/css/pages-css/home-two.css',
    // '~/assets/css/pages-css/home-two.scss',
    // '~/assets/css/pages-css/home-three.css',
    // '~/assets/css/pages-css/home-three.scss',
    // '~/assets/css/pages-css/home-four.css',
    // '~/assets/css/pages-css/home-four.scss',
    // '~/assets/css/pages-css/home-five.css',
    // '~/assets/css/pages-css/home-five.scss',
    // '~/assets/css/pages-css/home-six.css',
    // '~/assets/css/pages-css/home-six.scss',
    "~/assets/css/pages-css/footer.css",
    "~/assets/css/pages-css/footer.scss",
    "~/assets/css/pages-css/navbar.css",
    "~/assets/css/pages-css/navbar.scss",
    "~/assets/css/style.css",
    "~/assets/css/style.scss",
    "~/assets/css/remixicon.css",
    "~/assets/css/bootstrap.min.css",
    // '~/assets/css/pages-css/profile-authentication.css',
    // '~/assets/css/pages-css/profile-authentication.scss',
    "~/assets/css/pages-css/blog-details.css",
    "~/assets/css/pages-css/blog-details.scss",
    "~/assets/custom.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-carousel", ssr: false },
    { src: "~/plugins/vue-backtotop", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "nuxt-seo",
    "@nuxtjs/redirect-module",
    // '@nuxtjs/strapi',
  ],
  // redirect: [
  //   // Redirect options here
  //   {from: '^/efficient-dynamic-pricing-management', to: 'glossary/efficient-dynamic-pricing-management', statusCode: 200},
  //   {from: '^/glossary-details/advanced-predictable-revenue-solutions', to: 'glossary/advanced-predictable-revenue-solutions', statusCode: 200},
  //   {from: '^/glossary-details/innovative-digital-pricing-approaches', to: 'glossary/innovative-digital-pricing-approaches', statusCode: 200},
  //   {from: '^/glossary-details/unleash-sales-potential-opportunity-management', to: 'glossary/unleash-sales-potential-opportunity-management', statusCode: 200},
  //   {from: '^/glossary-details/automated-billing', to: 'glossary/automated-billing', statusCode: 200},
  //   {from: '^/glossary-details/weighted-pipeline', to: 'glossary/weighted-pipeline', statusCode: 200},
  //   {from: '^/cpq', to: 'glossary/cpq', statusCode: 200},
  //   {from: '^/glossary-details/account-based-sales', to: 'glossary/account-based-sales', statusCode: 200},
  //   {from: '^/glossary-details/the-b2-b-business-to-business-customer-journey', to: 'glossary/the-b2-b-business-to-business-customer-journey', statusCode: 200},
  //   {from: '^/glossary-details/streamlining-business-operations-with-process-automation', to: 'glossary/streamlining-business-operations-with-process-automation', statusCode: 200},
  //   {from: '^/glossary-details/driving-digital-growth-digital-data', to: 'glossary/driving-digital-growth-digital-data', statusCode: 200},
  //   {from: '^/glossary-details/automated-document-generation-solutions', to: 'glossary/automated-document-generation-solutions', statusCode: 200},
  //   {from: '^/glossary-details/dynamic-price-waterfall-analysis', to: 'glossary/dynamic-price-waterfall-analysis', statusCode: 200},
  //   {from: '^/glossary-details/advanced-personalization-solutions', to: 'glossary/advanced-personalization-solutions', statusCode: 200},
  //   {from: '^/glossary-details/advanced-pricing-analytics', to: 'glossary/advanced-pricing-analytics', statusCode: 200},
  //   {from: '^/glossary-details/customizable-product-catalog-solutions', to: 'glossary/customizable-product-catalog-solutions', statusCode: 200},
  //   {from: '^/www.dealdox.io/quote-to-cash-solution-solution', to: '/', statusCode: 200},
  //   {from: '^/glossary-details/effective-partner-relationship-management', to: 'glossary/effective-partner-relationship-management', statusCode: 200},
  //   {from: '^/glossary-details/phased-implementation', to: 'glossary/phased-implementation', statusCode: 200},
  //   {from: '^/glossary-details/value-added-reseller', to: 'glossary/value-added-reseller', statusCode: 200},
  //   {from: '^/accelerate-revenue-growth', to: 'accelerate-revenue-growth', statusCode: 200},
  //   {from: '^/cpq-tools', to: 'glossary/cpq-tools', statusCode: 200},
  //   {from: '^/subscription', to: 'pricing', statusCode: 200},
  //   {from: '^/glossary-details/empowering-digital-sales-transformation', to: 'glossary/empowering-digital-sales-transformation', statusCode: 200},
  //   {from: '^/blog-details/cpq-multilingual-capabilities', to: 'blog/cpq-multilingual-capabilities', statusCode: 200},
  //   {from: '^/glossary-details/maximize-efficiency-order-fulfilment', to: 'glossary/maximize-efficiency-order-fulfilment', statusCode: 200},
  //   {from: '^/glossary-details/dealdox-io', to: 'glossary/dealdox-io', statusCode: 200},
  //   {from: '^/glossary-details/co-term', to: 'glossary/co-term', statusCode: 200},
  //   {from: '^/glossary-details/accurate-product-forecasting', to: 'glossary/accurate-product-forecasting', statusCode: 200},
  //   {from: '^/glossary-details/streamlined-flexible-pricing-strategies', to: 'glossary/streamlined-flexible-pricing-strategies', statusCode: 200},
  //   {from: '^/glossary-details/unlocking-experience-led-growth', to: 'glossary/unlocking-experience-led-growth', statusCode: 200},
  //   {from: '^/glossary-details/guide-to-proration-and-usage-based-pricing', to: 'glossary/guide-to-proration-and-usage-based-pricing', statusCode: 200},
  //   {from: '^/glossary-details/data-driven-product-pricing-optimization', to: 'glossary/data-driven-product-pricing-optimization', statusCode: 200},
  //   {from: '^/glossary-details/innovative-marketing-collateral-strategies', to: 'glossary/innovative-marketing-collateral-strategies', statusCode: 200},
  //   {from: '^/glossary-details/efficient-product-configuration-solutions', to: 'glossary/efficient-product-configuration-solutions', statusCode: 200},
  //   {from: '^/glossary-details/churn-rate', to: 'glossary/churn-rate', statusCode: 200},
  //   {from: '^/glossary-details/efficient-payment-reconciliation-solutions', to: 'glossary/efficient-payment-reconciliation-solutions', statusCode: 200},
  //   {from: '^/glossary-details/boost-efficiency-multithreading-strategies', to: 'glossary/boost-efficiency-multithreading-strategies', statusCode: 200},
  //   {from: '^/glossary-details/agile-billing', to: 'glossary/agile-billing', statusCode: 200},
  //   {from: '^/glossary-details/maximize-revenue-cross-selling', to: 'glossary/maximize-revenue-cross-selling', statusCode: 200},
  //   {from: '^/glossary-details/average-deal-size', to: 'glossary/average-deal-size', statusCode: 200},
  //   {from: '^/glossary-details/financial-controller', to: 'glossary/financial-controller', statusCode: 200},
  //   {from: '^/dynamic-real-time-pricing-solutions', to: 'dynamic-real-time-pricing-solutions', statusCode: 200},
  //   {from: '^/cpq-integration', to: 'cpq-integrations', statusCode: 200},
  //   {from: '^/glossary-details/quote-to-order-workflow', to: 'glossary/quote-to-order-workflow', statusCode: 200},
  //   {from: '^/glossary-details/effortless-proposal-tracking', to: 'glossary/effortless-proposal-tracking', statusCode: 200},
  //   {from: '^/glossary-details/optimized-rebate-management-strategy', to: 'glossary/optimized-rebate-management-strategy', statusCode: 200},
  //   {from: '^/glossary-details/variable-pricing', to: 'glossary/variable-pricing', statusCode: 200},
  //   {from: '^/glossary-details/streamline-order-to-cash-process', to: 'glossary/streamline-order-to-cash-process', statusCode: 200},
  //   {from: '^/glossary-details/guide-to-professional-services-automation', to: 'glossary/guide-to-professional-services-automation', statusCode: 200},
  //   {from: '^/glossary-details/optimize-pricing-efficiency-powerful-engine', to: 'glossary/optimize-pricing-efficiency-powerful-engine', statusCode: 200},
  //   {from: '^/erp', to: 'glossary/erp', statusCode: 200},
  //   {from: '^/glossary-details/efficient-order-management-solutions', to: 'glossary/efficient-order-management-solutions', statusCode: 200},
  //   {from: '^/glossary-details/centralized-information-repository', to: 'glossary/centralized-information-repository', statusCode: 200},
  //   {from: '^/glossary-details/at-risk-customers', to: 'glossary/at-risk-customers', statusCode: 200},
  //   {from: '^/glossary-details/efficient-recurring-billing-solutions', to: 'glossary/efficient-recurring-billing-solutions', statusCode: 200},
  //   {from: '^/cpq-crm-integration-solutions', to: 'glossary/cpq-crm-integration-solutions', statusCode: 200},
  //   {from: '^/glossary-details/drive-growth-product-led-engagement', to: 'glossary/drive-growth-product-led-engagement', statusCode: 200},
  //   {from: '^/integration', to: 'glossary/integration', statusCode: 200},
  //   {from: '^/glossary-details/dynamic-real-time-pricing-solutions', to: 'glossary/dynamic-real-time-pricing-solutions', statusCode: 200},
  //   {from: '^/glossary-details/competitive-pricing', to: 'glossary/competitive-pricing', statusCode: 200},
  //   {from: '^/glossary-details/effective-pricing-strategies', to: 'glossary/effective-pricing-strategies', statusCode: 200},
  //   {from: '^/glossary-details/effortless-product-data-management', to: 'glossary/effortless-product-data-management', statusCode: 200},
  //   {from: '^/glossary-details/unlock-sales-potential-omnichannel-selling', to: 'glossary/unlock-sales-potential-omnichannel-selling', statusCode: 200},
  //   {from: '^/glossary-details/solutions-for-complex-product-management', to: 'glossary/solutions-for-complex-product-management', statusCode: 200},
  //   {from: '^/glossary', to: 'glossary', statusCode: 200},
  //   {from: '^/blog-details/guide-to-cpq-for-services', to: 'blog/guide-to-cpq-for-services', statusCode: 200},
  //   {from: '^/blog-details/the-evolution-of-cpq', to: 'blog/the-evolution-of-cpq', statusCode: 200},
  //   {from: '^/blog-details/empowering-sales-in-the-post-digital-era', to: 'blog/empowering-sales-in-the-post-digital-era', statusCode: 200},
  //   {from: '^/glossary-details/flexible-consumption-model-solutions', to: 'glossary/flexible-consumption-model-solutions', statusCode: 200},
  //   {from: '^/ns', to: '/', statusCode: 200},
  //   {from: '^/glossary-details/asset-based-ordering', to: 'glossary/asset-based-ordering', statusCode: 200},
  //   {from: '^/blog-details/choosing-cpq-vendors', to: 'blog/choosing-cpq-vendors', statusCode: 200},
  //   {from: '^/glossary-details/empowering-marketing-strategy', to: 'glossary/empowering-marketing-strategy', statusCode: 200},
  //   {from: '^/glossary-details/microsoft-dynamics-crm', to: 'glossary/microsoft-dynamics-crm', statusCode: 200},
  //   {from: '^/glossary-details/quote-management-platform', to: 'glossary/quote-management-platform', statusCode: 200},
  //   {from: '^/glossary-details/b2-b-customer-experience', to: 'glossary/b2b-customer-experience', statusCode: 200},
  //   {from: '^/glossary-details/streamlined-deferred-billing-process', to: 'glossary/streamlined-deferred-billing-process', statusCode: 200},
  //   {from: '^/glossary-details/automated-product-bundling', to: 'glossary/automated-product-bundling', statusCode: 200},
  //   {from: '^/glossary-details/strategic-targeting-ideal-customer-profile', to: 'glossary/strategic-targeting-ideal-customer-profile', statusCode: 200},
  //   {from: '^/glossary-details/b2-b-selling-experience', to: 'glossary/b2b-selling-experience', statusCode: 200},
  //   {from: '^/glossary-details/efficient-management-multiple-element-arrangements', to: 'glossary/efficient-management-multiple-element-arrangements', statusCode: 200},
  //   {from: '^/success-stories-details/revolutionizing-sales-with-dealdox', to: 'success-stories/revolutionizing-sales-with-dealdox', statusCode: 200},
  //   {from: '^/glossary-details/strategies-optimizing-deferred-revenue', to: 'glossary/strategies-optimizing-deferred-revenue', statusCode: 200},
  //   {from: '^/glossary-details/approval-workflows', to: 'glossary/approval-workflows', statusCode: 200},
  //   {from: '^/glossary-details/quote-to-cash-solution', to: 'glossary/quote-to-cash-solution', statusCode: 200},
  //   {from: '^/glossary-details/volume-discount', to: 'glossary/volume-discount', statusCode: 200},
  //   {from: '^/glossary-details/seamless-opportunity-to-cash-process', to: 'glossary/seamless-opportunity-to-cash-process', statusCode: 200},
  //   {from: '^/glossary-details/pricing', to: 'glossary/pricing', statusCode: 200},
  //   {from: '^/glossary-details/billing', to: 'glossary/billing', statusCode: 200},
  //   {from: '^/glossary-details/efficient-management-monthly-recurring-revenue', to: 'glossary/efficient-management-monthly-recurring-revenue', statusCode: 200},
  //   {from: '^/glossary-details/innovative-flexible-billing-solutions', to: 'glossary/innovative-flexible-billing-solutions', statusCode: 200},
  //   {from: '^/glossary-details/achieve-frictionless-sales', to: 'glossary/achieve-frictionless-sales', statusCode: 200},
  //   {from: '^/glossary-details/annual-contract-value', to: 'glossary/annual-contract-value', statusCode: 200},
  //   {from: '^/glossary-details/b2-b-buying-experience', to: 'glossary/b2-b-buying-experience', statusCode: 200},
  //   {from: '^/glossary-details/accrual-based-accounting', to: 'glossary/accrual-based-accounting', statusCode: 200},
  //   {from: '^/glossary-details/comprehensive-dunning-management-solutions', to: 'glossary/comprehensive-dunning-management-solutions', statusCode: 200},
  //   {from: '^/glossary-details/data-driven-product-pricing-optimization-1', to: 'glossary/data-driven-product-pricing-optimization-1', statusCode: 200},
  //   {from: '^/glossary-details/discounting-boosting-sales-and-revenue-with-strategic-pricing', to: 'glossary/discounting-boosting-sales-and-revenue-with-strategic-pricing', statusCode: 200},
  //   {from: '^/glossary-details/optimize-sales-performance-multiple-quotes', to: 'glossary/optimize-sales-performance-multiple-quotes', statusCode: 200},
  //   {from: '^/microsoft-dynamics-integration', to: 'microsoft-dynamics-integration', statusCode: 200},
  //   {from: '^/glossary-details/annual-recurring-revenue', to: 'glossary/annual-recurring-revenue', statusCode: 200},
  //   {from: '^/glossary-details/streamlined-dispute-management-processes', to: 'glossary/streamlined-dispute-management-processes', statusCode: 200},
  //   {from: '^/glossary-details/maximizing-recurring-revenue', to: 'glossary/maximizing-recurring-revenue', statusCode: 200},
  //   {from: '^/enhancing-customer-satisfaction', to: 'glossary/enhancing-customer-satisfaction', statusCode: 200},
  //   {from: '^/revenuegeneration', to: 'glossary/revenuegeneration', statusCode: 200},
  //   {from: '^/glossary-details/product', to: 'glossary/product', statusCode: 200},
  //   {from: '^/glossary-details/effective-discount-management-solutions', to: 'glossary/effective-discount-management-solutions', statusCode: 200},
  //   {from: '^/strategies-successful-customer-retention', to: 'strategies-successful-customer-retention', statusCode: 200},
  //   {from: '^/glossary-details/empowering-finance-operations-with-digital-transformation', to: 'glossary/empowering-finance-operations-with-digital-transformation', statusCode: 200},
  //   {from: '^/glossary-details/quote-to-revenue-automation', to: 'glossary/quote-to-revenue-automation', statusCode: 200},
  //   {from: '^/glossary-details/value-proposition', to: 'glossary/value-proposition', statusCode: 200},
  //   {from: '^/glossary-details/optimize-product-discovery-process', to: 'glossary/optimize-product-discovery-process', statusCode: 200},
  //   {from: '^/glossary-details/accrued-revenue', to: 'glossary/accrued-revenue', statusCode: 200},
  //   {from: '^/glossary-details/flexible-dynamic-discounting-solutions', to: 'glossary/flexible-dynamic-discounting-solutions', statusCode: 200},
  //   {from: '^/glossary-details/accelerate-deal-velocity-with-ramp-deal', to: 'glossary/accelerate-deal-velocity-with-ramp-deal', statusCode: 200},
  //   {from: '^/glossary-details/guided-selling-solutions', to: 'glossary/guided-selling-solutions', statusCode: 200},
  //   {from: '^/ebook', to: '/', statusCode: 200},

  // ],

  // site map configuration
  // sitemap: {
  //   hostname: 'https://dealdox.io',
  //   gzip: true,
  //   exclude: [
  //     '/secret',
  //     '/coming-soon/**',
  //     '/careers/**',
  //     '/case-studies/**',
  //     '/sitemap/**'
  //   ],
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://cms.dealdox.io/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },
  // seo: {
  //   // My custom configuration
  //   baseUrl: 'https://domain',
  //   name: '<name of site>',
  //   title: '<title default>',
  //   templateTitle: '%name% - %title%',
  //   description: '<description default>',
  //   canonical: 'auto',
  //   isForcedTrailingSlash: false
  // }
};

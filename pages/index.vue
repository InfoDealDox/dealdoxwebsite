<template>
  <div>
    <Navbar class="navbar-style-two" />
    <MainBanner />
    <Partner />
    <TransformYourSales />
    <WithOurSubscrip />
    <EasyIntegration />
    <LightningFast />
    <ImproveSales />
    <EasyCPQ />
    <!-- <AdditionalFeature /> -->
    <!-- <AutomatedQuotes /> -->
    <!-- <GetInTouch /> -->
    <Faq />
    <DealDoxFooter />
  </div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import MainBanner from '../components/IndexPage/MainBanner.vue';
import Partner from '../components/Common/Partner.vue';
import TransformYourSales from '../components/IndexPage/TransformYourSales.vue';
import WithOurSubscrip from '../components/IndexPage/WithOurSubscrip.vue';
import EasyIntegration from '../components/IndexPage/EasyIntegration.vue';
import LightningFast from '../components/IndexPage/LightningFast.vue';
import ImproveSales from '../components/IndexPage/ImproveSales.vue';
import EasyCPQ from '../components/IndexPage/EasyCPQ.vue';
// import AdditionalFeature from '../components/IndexPage/AdditionalFeature';
// import AutomatedQuotes from '../components/IndexPage/AutomatedQuotes';
// import GetInTouch from '../components/IndexPage/GetInTouch';
import Faq from '../components/Common/Faq.vue';
import DealDoxFooter from '../layouts/DealDoxFooter.vue';
import axios from 'axios';



export default {
  components: {
    Navbar,
    MainBanner,
    Partner,
    TransformYourSales,
    WithOurSubscrip,
    EasyIntegration,
    LightningFast,
    ImproveSales,
    EasyCPQ,
    // AdditionalFeature,
    // AutomatedQuotes,
    // GetInTouch,
    Faq,
    DealDoxFooter,
  },
  data() {
    return {
      seoData: [],
    }
  },
  created: async function () {
    const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=index&populate=deep,5')
    const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    if (pageData?.attributes?.seo?.length > 0) {
      this.seoData = pageData.attributes.seo[0];
    }
  },
  head: {
    title: 'Generate Quotations in Less Than a Minute with DealDox',
    htmlAttrs: {
      lang: 'en-us'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dealdox offer you effortless Quote Generation: Automated Quoting Solutions. Transform your quote generation process with our automated quoting tool. Discover the best quotation software for seamless quotes and quotations.' },
      { hid: 'keywords', name: 'keywords', content: 'automated quoting solution, quote generation process, automated quoting tool, Automated Quotes, Automated Quotations, Quotation software, Quoting software' },
      { property: 'og:url', content: 'https://www.dealdox.io/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Generate Quotations in Less Than a Minute with DealDox' },
      { property: 'og:description', content: 'Generate Automated Quotes in a few Seconds! Save Time and Close More Deals' },
      { property: 'og:image', content: '' },
      // Twitter Meta Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:domain', content: 'dealdox.io' },
      { property: 'twitter:url', content: 'https://www.dealdox.io/' },
      { name: 'twitter:title', content: 'Generate Quotations in Less Than a Minute with DealDox' },
      { name: 'twitter:description', content: 'Generate Automated Quotes in a few Seconds! Save Time and Close More Deals' },
      { name: 'twitter:image', content: '' },
    ],
    script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "DealDox",
            "url": "https://www.dealdox.io/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.dealdox.io/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        },
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DealDox",
            "image": "https://www.dealdox.io/_nuxt/img/DDWebsite.3a3e832.png",
            "@id": "",
            "url": "https://www.dealdox.io/",
            "telephone": "91-9741429514",
            "priceRange": "30 day Free Trial",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "63/3, Arham Towers 3rd Floor, AK colony, Krishna Rajendra Rd, 7th Block,Jayanagar",
              "addressLocality": "Bengaluru, Karnataka",
              "postalCode": "560070",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.9264063,
              "longitude": 77.5735908
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/dealdox.io",
              "https://www.instagram.com/dealdox.io/",
              "https://www.youtube.com/channel/UCUyG5sKBn2yVwLG0PbbE8IA",
              "https://www.linkedin.com/company/dealdox",
              "https://twitter.com/i/flow/login?redirect_after_login=%2FDealdox_io",
              "https://www.dealdox.io/"
            ]
          }
        }
      ],
    link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io' }
    ],
  },

  // head({ $seo }) {
  //   return $seo({
  //     title: this.seoData.metaTitle || 'Generate Quotations in Less Than a Minute with DealDox',
  //     description: this.seoData.metaDescription,
  //     keywords: this.seoData.keywords,
  //     // image: this.post.image || '',
  //     meta: [
  //       // Facebook Meta Tags
  //       { property: 'og:url', content: 'https://www.dealdox.io/' },
  //       { property: 'og:type', content: 'website' },
  //       { property: 'og:title', content: 'Generate Quotations in Less Than a Minute with DealDox' },
  //       { property: 'og:description', content: 'Generate Automated Quotes in a few Seconds! Save Time and Close More Deals' },
  //       { property: 'og:image', content: '' },
  //       // Twitter Meta Tags
  //       { name: 'twitter:card', content: 'summary_large_image' },
  //       { property: 'twitter:domain', content: 'dealdox.io' },
  //       { property: 'twitter:url', content: 'https://www.dealdox.io/' },
  //       { name: 'twitter:title', content: 'Generate Quotations in Less Than a Minute with DealDox' },
  //       { name: 'twitter:description', content: 'Generate Automated Quotes in a few Seconds! Save Time and Close More Deals' },
  //       { name: 'twitter:image', content: '' },
  //     ],
  //     script: [
  //       {
  //         type: 'application/ld+json',
  //         json: {
  //           "@context": "https://schema.org/",
  //           "@type": "WebSite",
  //           "name": "DealDox",
  //           "url": "https://www.dealdox.io/",
  //           "potentialAction": {
  //             "@type": "SearchAction",
  //             "target": "https://www.dealdox.io/search?q={search_term_string}",
  //             "query-input": "required name=search_term_string"
  //           }
  //         }
  //       },
  //       {
  //         type: 'application/ld+json',
  //         json: {
  //           "@context": "https://schema.org",
  //           "@type": "ProfessionalService",
  //           "name": "DealDox",
  //           "image": "https://www.dealdox.io/_nuxt/img/DDWebsite.3a3e832.png",
  //           "@id": "",
  //           "url": "https://www.dealdox.io/",
  //           "telephone": "08035376744",
  //           "priceRange": "30 day Free Trial",
  //           "address": {
  //             "@type": "PostalAddress",
  //             "streetAddress": "63/3, Arham Towers 3rd Floor, AK colony, Krishna Rajendra Rd, 7th Block,Jayanagar",
  //             "addressLocality": "Bengaluru, Karnataka",
  //             "postalCode": "560070",
  //             "addressCountry": "IN"
  //           },
  //           "geo": {
  //             "@type": "GeoCoordinates",
  //             "latitude": 12.9264063,
  //             "longitude": 77.5735908
  //           },
  //           "openingHoursSpecification": {
  //             "@type": "OpeningHoursSpecification",
  //             "dayOfWeek": [
  //               "Monday",
  //               "Tuesday",
  //               "Wednesday",
  //               "Thursday",
  //               "Friday",
  //               "Saturday",
  //               "Sunday"
  //             ],
  //             "opens": "00:00",
  //             "closes": "23:59"
  //           },
  //           "sameAs": [
  //             "https://www.facebook.com/dealdox.io",
  //             "https://www.instagram.com/dealdox.io/",
  //             "https://www.youtube.com/channel/UCUyG5sKBn2yVwLG0PbbE8IA",
  //             "https://www.linkedin.com/company/dealdox",
  //             "https://twitter.com/i/flow/login?redirect_after_login=%2FDealdox_io",
  //             "https://www.dealdox.io/"
  //           ]
  //         }
  //       }
  //     ]
  //   });

  // },
   head: {
        title: 'Generate Quotations in Less Than a Minute with DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Dealdox offer you effortless Quote Generation: Automated Quoting Solutions. Transform your quote generation process with our automated quoting tool. Discover the best quotation software for seamless quotes and quotations.' },
            { hid: 'keywords', name: 'keywords', content: 'what is cpq software, best cpq software for small business, best cpq software, configure price quote cpq software, cpq software for manufacturing, Services CPQ, CPQ tools, CPQ Software, CPQ for services' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/' }
        ],
    },
}
</script>

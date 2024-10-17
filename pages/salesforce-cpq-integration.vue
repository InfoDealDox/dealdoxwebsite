<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerLoacalized/>
        <HowLocalizedDeal />
        <KeyBenefitsof />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerLoacalized from '../components/Salesforce/MainBannerLoacalized.vue'
import HowLocalizedDeal from '../components/Salesforce/HowLocalizedDeal.vue'
import KeyBenefitsof from '../components/Salesforce/KeyBenefitsof.vue'
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerLoacalized,
        HowLocalizedDeal,
        KeyBenefitsof,
        DealDoxFooter,
    },
 //   data() {
//        return {
//            seoData: [],
//        }
//    },
 //   created: async function () {
 //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=salesforce-cpq-integration&populate=deep,5')
 //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
 //       if (pageData?.attributes?.seo?.length > 0) {
 //           this.seoData = pageData.attributes.seo[0];
 //       }
  //  },
  //  head({ $seo }) {
  //      return $seo({
  //          title: this.seoData.metaTitle ||'Salesforce CPQ Integration | DealDox',
  //          description: this.seoData.metaDescription,
  //          keywords: this.seoData.keywords,
            // image: this.post.image || '',
  //      });
  //  },
    head: {
        title: 'Salesforce CPQ Integration | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Achieve seamless Salesforce CPQ integration with DealDox. Streamline sales processes and enhance efficiency with our advanced integration solutions' },
            { hid: 'keywords', name: 'keywords', content: 'Salesforce CRM, Salesforce, quotations, Deal Cycle, CPQ, Sales activity, CPQ enables quotations easier and faster, modern analytics and reporting, delegate approvals easily' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/salesforce-cpq-integration' }
        ],
    },
}
</script>

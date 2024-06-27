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
import MainBannerLoacalized from '../components/HubSpot/MainBannerLoacalized'
import HowLocalizedDeal from '../components/HubSpot/HowLocalizedDeal'
import KeyBenefitsof from '../components/HubSpot/KeyBenefitsof'
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
//    data() {
 //       return {
 //           seoData: [],
 //       }
 //   },
 //   created: async function () {
 //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=hubspot-cpq-integration&populate=deep,5')
 //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
  //      if (pageData?.attributes?.seo?.length > 0) {
  //          this.seoData = pageData.attributes.seo[0];
  //      }
 //   },
 //   head({ $seo }) {
 //       return $seo({
 //           title: this.seoData.metaTitle ||'Maximize Efficiency with HubSpot CRM Integration',
 //           description: this.seoData.metaDescription,
 //           keywords: this.seoData.keywords,
            // image: this.post.image || '',
  //      });
  //  },
    head: {
        title: 'HubSpot CPQ Integration | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Streamline sales processes with HubSpot CPQ integration by DealDox. Enhance efficiency and drive revenue with our advanced integration solutions.' },
            { hid: 'keywords', name: 'keywords', content: 'HubSpot Integration, DealDox and HubSpot, HubSpot CRM, native integration between DealDox and HubSpot, SaaS quotation Software, Simplify CPQ implementation, CPQ Systems, Code-free CPQ solution, CPQs best practices, Guided Selling, swiftly create personalized quotes, seamless data synchronization, Streamline Sales Processes, Swift Deal Closures, sales workflow, automated approval workflows, Unified CPQ, Deal Management, User-friendly CPQ Solution, generate complex quotes within HubSpot CRM, dynamic guided selling approach, generate a complete and accurate price quote, Quick and Professional Quote Generation, Generate professional quotes and proposals in seconds, Centralized digital environment' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/hubspot-cpq-integration' }
        ],
    },
}
</script>

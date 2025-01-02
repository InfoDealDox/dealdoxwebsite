<template>
    <div :style="{ width: '100%' }">
        <Navbar class="navbar-style-two" />
        <PageHeader />
        <Stats />
        <Funfacts />
        <IAQSolutions />

        <TransformDealsWith />
        <integrationfaq />
        <DealDoxFooter />
    </div>
</template>

<script>



import Navbar from '../layouts/Navbar'
import PageHeader from '../components/CPQIntegration/PageHeader.vue'
import IAQSolutions from '../components/CPQIntegration/IAQSolutions.vue'
import Funfacts from '../components/CPQIntegration/Funfacts.vue'
import Stats from '../components/CPQIntegration/Stats.vue'

import TransformDealsWith from "../components/RequestDemo/TransformDealsWith.vue"
import integrationfaq from '../components/CPQIntegration/integrationfaq.vue'
import DealDoxFooter from '../layouts/DealDoxFooter.vue'
import axios from 'axios';

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        PageHeader,
        IAQSolutions,
        Funfacts,
        Stats,


        TransformDealsWith,
        DealDoxFooter,
        integrationfaq,
    },
    //   data() {
    //       return {
    //           seoData: [],
    //       }
    //   },
    // created: async function () {
    //      const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=cpq-integrations&populate=deep,5')
    //      const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    //      if (pageData?.attributes?.seo?.length > 0) {
    //         this.seoData = pageData.attributes.seo[0];
    //       }
    //   },
    //    head({ $seo }) {
    //      return $seo({
    //          title: this.seoData.metaTitle ||'CPQ Integration | CPQ CRM & ERP Integration | DealDox',
    //         description: this.seoData.metaDescription,
    //           keywords: this.seoData.keywords,
    // image: this.post.image || '',
    //       });
    //  },
    head: {
        title: 'Best CPQ Integrations with HubSpot CRM | Dealdox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Optimize your sales process with CPQ integration for midsize businesses. Easily integrate enterprise CPQ Integration with Salesforce, hubspot, sugarcrm, freshworks, micro dynmaics 365.' },
            { hid: 'keywords', name: 'keywords', content: 'Salesforce CPQ Integration, CPQ Integration for Midsize business, Best CPQ Integrations with HubSpot CRM,hubspot cpq integration,Enterprise CPQ Integration,Microsoft Dynamics 365 CPQ Integration,CPQ Integration work,Easy CPQ Integration,CPQ integration with Salesforce, hubspot, sugarcrm, freshworks, micro dynmaics 365' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/cpq-integrations' }
        ],
    },
}
</script>

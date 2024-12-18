<template>
    <div>
        <Navbar class="navbar-style-two" />
        <!-- <PricingHeader /> -->
        <!-- <MainBannerSubscription /> -->
        <!-- <OnbaordingAssistance /> -->
        <!-- <Pricing /> -->
        <PricingDetails />
        <!-- <AutomatedQuotes /> -->
        <!-- <GetInTouch /> -->
        <PricingFooter />
        <DealDoxFooter />
    </div>
</template>

<script>

import Navbar from '../layouts/Navbar';

import PricingDetails from '../components/Subscriptions/PricingDetails.vue';
import PricingFooter from '../components/Subscriptions/PricingFooter.vue';
import DealDoxFooter from '../layouts/DealDoxFooter';

//import MainBannerSubscription from '../components/Subscriptions/MainBannerSubscription.vue';
// import OnbaordingAssistance from '../components/Subscriptions/OnbaordingAssistance';
// import Pricing from '../components/Common/Pricing';
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
// import GetInTouch from '../components/Common/GetInTouch';
// import SubscriptionLayout from '../layouts/Subscription.vue'
// import axios from 'axios';
// import PricingHeader from '../components/Subscriptions/PricingHeader.vue'

export default {
    components: {
        Navbar,
        // PricingHeader,
        PricingFooter,
        DealDoxFooter,
        // AutomatedQuotes,
        // MainBannerSubscription,
        // OnbaordingAssistance,
        // Pricing,
        PricingDetails,


        // GetInTouch,

    },
    //   data() {
    //       return {
    //           seoData: [],
    //       }
    //  },
    //   created: async function () {
    //        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=subscriptions&populate=deep,5')
    //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    //       if (pageData?.attributes?.seo?.length > 0) {
    //            this.seoData = pageData.attributes.seo[0];
    //        }
    //   },
    //   head({ $seo }) {
    //     return $seo({
    //          title: this.seoData.metaTitle ||'Maximize Revenue with Subscription Services',
    //            description: this.seoData.metaDescription,
    //            keywords: this.seoData.keywords,
    // image: this.post.image || '',
    //       });
    //   },
    head: {
        title: 'DealDox CPQ Pricing | Affordable Solutions with Advanced Sales Configurator',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore DealDox CPQ Pricing: Find the best plans to suit your business and leverage advanced features, including sales configurator functionalities.' },
            { hid: 'keywords', name: 'CPQ software pricing, configure price quote pricing, CPQ for sales teams, CPQ pricing strategy, enterprise CPQ pricing, CPQ pricing system, how much does CPQ software cost, pricing model for CPQ tools, affordable CPQ software for small businesses, CPQ pricing for SaaS companies, CPQ pricing structure for enterprises, CPQ pricing automation for sales teams' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/pricing' }
        ],
    },
}
</script>

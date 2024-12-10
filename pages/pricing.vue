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
      <PricingFooter/>
        <DealDoxFooter />
    </div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import PricingHeader from '../components/Subscriptions/PricingHeader.vue'

// import MainBannerSubscription from '../components/Subscriptions/MainBannerSubscription.vue';
// import OnbaordingAssistance from '../components/Subscriptions/OnbaordingAssistance';
// import Pricing from '../components/Common/Pricing';
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
// import GetInTouch from '../components/Common/GetInTouch';
import PricingDetails from '../components/Subscriptions/PricingDetails.vue';
import PricingFooter from '../components/Subscriptions/PricingFooter.vue';
import DealDoxFooter from '../layouts/DealDoxFooter';
// import SubscriptionLayout from '../layouts/Subscription.vue'
// import axios from 'axios';


export default {
    components: {
        Navbar,
        PricingHeader,
        // AutomatedQuotes,
        // MainBannerSubscription,
        // OnbaordingAssistance,
        // Pricing,
        PricingDetails,
    
        PricingFooter,
        // GetInTouch,
        DealDoxFooter,
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
        title: 'Subscription Management Software | Dealdox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Effortlessly handle subscription billing and boost subscription revenue with our top subscription management software for subscription businesses.' },
            { hid: 'keywords', name: 'subscription management software, subscription billing, Subscription Revenue, Subscription businesses, subscription software' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/pricing' }
        ],
    },
}
</script>

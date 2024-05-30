<template>
  <div>
  <Navbar class="navbar-style-two"/>
  <MainBannerSubscription />
  <OnbaordingAssistance />
  <!-- <Pricing /> -->
  <!-- <AutomatedQuotes /> -->
  <!-- <GetInTouch /> -->
  <DealDoxFooter/>
</div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import MainBannerSubscription from '../components/Subscriptions/MainBannerSubscription';
import OnbaordingAssistance from '../components/Subscriptions/OnbaordingAssistance';
// import Pricing from '../components/Common/Pricing';
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
// import GetInTouch from '../components/Common/GetInTouch';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
components: {
    Navbar,
    // AutomatedQuotes,
    MainBannerSubscription,
    OnbaordingAssistance,
    // Pricing,
    // GetInTouch,
    DealDoxFooter,
},
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=subscriptions&populate=deep,5')
        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
        if (pageData?.attributes?.seo?.length > 0) {
            this.seoData = pageData.attributes.seo[0];
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle ||'',
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            // image: this.post.image || '',
        });
    },
}
</script>
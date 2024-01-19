<template>
  <div>
  <Navbar class="navbar-style-two"/>
  <MainBanner />
  <TransformYourSales />
  <WithOurSubscrip />
  <EasyIntegration />
  <LightningFast />
  <ImproveSales />
  <EasyCPQ />
  <AdditionalFeature />
  <AutomatedQuotes />
  <GetInTouch />
  <Faq />
  <DealDoxFooter/>
</div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import MainBanner from '../components/IndexPage/MainBanner';
import TransformYourSales from '../components/IndexPage/TransformYourSales';
import WithOurSubscrip from '../components/IndexPage/WithOurSubscrip';
import EasyIntegration from '../components/IndexPage/EasyIntegration';
import LightningFast from '../components/IndexPage/LightningFast';
import ImproveSales from '../components/IndexPage/ImproveSales';
import EasyCPQ from '../components/IndexPage/EasyCPQ';
import AdditionalFeature from '../components/IndexPage/AdditionalFeature';
import AutomatedQuotes from '../components/IndexPage/AutomatedQuotes';
import GetInTouch from '../components/IndexPage/GetInTouch';
import Faq from '../components/Common/Faq';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';



export default {
components: {
    Navbar,
    MainBanner,
    TransformYourSales,
    WithOurSubscrip,
    EasyIntegration,
    LightningFast,
    ImproveSales,
    EasyCPQ,
    AdditionalFeature,
    AutomatedQuotes,
    GetInTouch,
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
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle,
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            // image: this.post.image || '',
        });
    },
}
</script>
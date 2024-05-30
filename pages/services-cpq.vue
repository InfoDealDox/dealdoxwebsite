<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerCPQ />
        <WhatisCPQService />
        <TransformYourSales />
        <QuickandAccurate />
      
        <TransformDealsWith/>
        <servicefaq/>    
        <DealDoxFooter />
        
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerCPQ from '../components/CPQ/MainBannerCPQ'
import TransformYourSales from '../components/CPQ/TransformYourSales'
import QuickandAccurate from '../components/CPQ/QuickandAccurate'
import WhatisCPQService from '../components/CPQ/WhatisCPQService'

import TransformDealsWith  from "../components/RequestDemo/TransformDealsWith"
import servicefaq from '../components/CPQ/servicefaq'
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerCPQ,
        TransformYourSales,
        QuickandAccurate,
        WhatisCPQService,
      
        TransformDealsWith,
        DealDoxFooter,
         servicefaq,
    },

    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=services-cpq&populate=deep,5')
        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
        if (pageData?.attributes?.seo?.length > 0) {
            this.seoData = pageData.attributes.seo[0];
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle ||'Streamline Sales Quotes: Best CPQ Software Solutions',
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            // image: this.post.image || '',
        });
    },
}
</script>
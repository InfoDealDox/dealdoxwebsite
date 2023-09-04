<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerCPQ />
        <WhatisCPQService />
        <TransformYourSales />
        <QuickandAccurate />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerCPQ from '../components/CPQ/MainBannerCPQ'
import TransformYourSales from '../components/CPQ/TransformYourSales'
import QuickandAccurate from '../components/CPQ/QuickandAccurate'
import WhatisCPQService from '../components/CPQ/WhatisCPQService'
import FreeTrial from '../components/CPQ/FreeTrial'
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
        FreeTrial,
        DealDoxFooter,
    },

    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/pages?filters[slug][$eq]=cpq&populate=deep,5')
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
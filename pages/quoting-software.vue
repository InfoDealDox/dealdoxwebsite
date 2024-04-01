<template>
    <div>
        <Navbar class="navbar-style-two" />
        <Banner />
        <AccelerateYourSales />
        <Experiencethefuture />
        <YourBusiness />
       
     <PageHeader />
        <quotefaq/>
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import Banner from '../components/AutomatedQuotesGeneration/Banner'
import AccelerateYourSales from '../components/AutomatedQuotesGeneration/AccelerateYourSales'
import Experiencethefuture from '../components/AutomatedQuotesGeneration/Experiencethefuture'
import YourBusiness from '../components/AutomatedQuotesGeneration/YourBusiness'

import PageHeader from '../components/ContactUs/PageHeader'
import quotefaq from '../components/AutomatedQuotesGeneration/quotefaq'
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';


export default {
    name: 'AutomatedQuotesGeneration',
    components: {
        Navbar,
        Banner,
        AccelerateYourSales,
        Experiencethefuture,
        YourBusiness,
        
         PageHeader,
        quotefaq,
        DealDoxFooter,
    },
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=quoting-software&populate=deep,5')
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

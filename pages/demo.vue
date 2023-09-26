<template>
    <div>
        <Navbar class="navbar-style-two" />
        <TransformDealsWith />
        <Partner />
        <DealDoxFooter />
        <!-- <PageHeader /> -->
        <!-- <Blog /> -->
        <!-- <Faq /> -->
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import PageHeader from '../components/ContactUs/PageHeader'
import TransformDealsWith from '../components/RequestDemo/TransformDealsWith'
import Partner from '../components/Common/Partner'
import Blog from '../components/Common/Blog'
import Faq from '../components/Common/Faq';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
    components: {
        Navbar,
        PageHeader,
        TransformDealsWith,
        Partner,
        Blog,
        Faq,
        DealDoxFooter,
    },
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=demo&populate=deep,5')
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
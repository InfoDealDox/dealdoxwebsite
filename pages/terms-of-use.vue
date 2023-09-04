<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-termsofuse" pageTitle="" />
        <PrivacyPolicy />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
import PrivacyPolicy from '../components/TermsConditions/TermsConditions';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
    components: {
        Navbar,
        PageTitle,
        PrivacyPolicy,
        DealDoxFooter,
    },
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://dealdoxstrapi.pbwebvision.com/api/pages?filters[slug][$eq]=terms-conditions&populate=deep,5')
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
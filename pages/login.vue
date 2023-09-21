<template>
    <div>
        <Navbar class="navbar-style-two" />
        <SignUpHeader />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import SignUpHeader from '../components/loginpage/SignUpHeader'
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
    components: {
        Navbar,
        SignUpHeader,
        DealDoxFooter,
    },
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=contactus&populate=deep,5')
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
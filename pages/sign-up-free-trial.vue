<template>
    <div>
        <Navbar class="navbar-style-two" />
        <SignUpHeader />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import SignUpHeader from '../components/SignUp/SignUpHeader'
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
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=sign-up-free-trial&populate=deep,5')
        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
        if (pageData?.attributes?.seo?.length > 0) {
            this.seoData = pageData.attributes.seo[0];
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle ||'www.dealdox.io',
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            // image: this.post.image || '',
        });
    },
     head: {
        title: 'Sign Up for a Free Trial | Streamline Your Quotation.',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Start your free trial with DealDox today and experience seamless document management. Simplify collaboration, track changes, and enhance productivity' },
            { hid: 'keywords', name: 'keywords', content: 'Try It Free, Start Your Experience, Risk-Free Trial' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/sign-up-free-trial' }
        ],
    },
}
</script>
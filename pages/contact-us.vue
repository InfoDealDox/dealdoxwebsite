<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageHeader />
        <Blog />
        <!-- <Faq /> -->
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import PageHeader from '../components/ContactUs/PageHeader'

import Blog from '../components/Common/Blog'
// import Faq from '../components/Common/Faq';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
    components: {
        Navbar,
        PageHeader,
     
        Blog,
        // Faq,
        DealDoxFooter,
    },
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=contact-us&populate=deep,5')
        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
        if (pageData?.attributes?.seo?.length > 0) {
            this.seoData = pageData.attributes.seo[0];
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle ||'Transform Sales Efficiency with DealDox',
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            // image: this.post.image || '',
        });
    },
     head: {
        title: 'Contact Us | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Reach out to the DealDox team for any inquiries or assistance. We are here to provide you with exceptional support and solutions for your sales needs' },
            { hid: 'keywords', name: 'keywords', content: 'Contact Us, Get in Touch, Guided Selling, quotations, Advanced Quoting Solution, Efficient Sales Processes, Generate Accurate and Comprehensive Quotes, effortlessly generate accurate deal documents.' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/contact-us' }
        ],
    },
}
</script>
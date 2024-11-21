<template>
    <div>
        <Navbar class="navbar-style-two" />
        <!-- <Stats /> -->
        <IAQSolutions />
        <OurTeam />
        <!-- <Feedback /> -->
        <Blog />
        <GetInTouch />
        <DealDoxFooter />
    </div>
</template>

<script>

import Navbar from '../layouts/Navbar';
import IAQSolutions from '../components/AboutUs/IAQSolutions.vue';
import OurTeam from '../components/Common/OurTeam.vue';
// import Feedback from '../components/Common/Feedback.vue';
import Blog from '../components/Common/Blog.vue';
// import Stats from '../components/AboutUs/Stats';
import GetInTouch from '../components/Common/GetInTouch.vue';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
    components: {
        Navbar,
        IAQSolutions,
        OurTeam,
        // Feedback,
        Blog,
        // Stats,
        GetInTouch,
        DealDoxFooter,
    },
    //   data() {
    //        return {
    //            seoData: [],
    //        }
    //    },
    //   created: async function () {
    //        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=our-team&populate=deep,5')
    //        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    //        if (pageData?.attributes?.seo?.length > 0) {
    //           this.seoData = pageData.attributes.seo[0];
    //        }
    //    },
    //   head({ $seo }) {
    //       return $seo({
    //           title: this.seoData.metaTitle ||'Empower Your Team with DealDox Guided Selling',
    //          description: this.seoData.metaDescription,
    //           keywords: this.seoData.keywords,
    // image: this.post.image || '',
    //       });
    //    },
    head: {
        title: 'Meet Our Team at DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Discover the dedicated team behind DealDox, revolutionizing sales with AI-driven solutions for an enhanced sales process' },
            { hid: 'keywords', name: 'keywords', content: 'Our Team, Team, About Us, Stellar Line Up of Professionals, Complex approval processes, automation solutions, Streamlined Workflows, CPQ Systems, Integrating CPQ, CPQ Software, CPQ, CPQ (Configure, Price, Quote), CPQ Processes, Sales process automation, state-of-the-art software solutions, creating innovative and scalable software, CPQ automated quotation idea' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/our-team' }
        ],
    },
}
</script>

<style>
@import url('../assets/css/pages-css/OurTeams.css');
</style>

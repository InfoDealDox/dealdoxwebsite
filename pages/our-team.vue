<template>
    <div>
        <Navbar class="navbar-style-two" />
        <Stats />
        <IAQSolutions />
        <OurTeam />
        <Feedback />
    
        <Blog />
        <GetInTouch />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import IAQSolutions from '../components/AboutUs/IAQSolutions';
import OurTeam from '../components/Common/OurTeam';
import Feedback from '../components/Common/Feedback';

import Blog from '../components/Common/Blog';
import Stats from '../components/AboutUs/Stats';
import GetInTouch from '../components/Common/GetInTouch';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
    components: {
        Navbar,
        IAQSolutions,
        OurTeam,
        Feedback,
   
        Blog,
        Stats,
        GetInTouch,
        DealDoxFooter,
    },
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=our-team&populate=deep,5')
        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
        if (pageData?.attributes?.seo?.length > 0) {
            this.seoData = pageData.attributes.seo[0];
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle ||'Empower Your Team with DealDox Guided Selling',
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            // image: this.post.image || '',
        });
    },
}
</script>
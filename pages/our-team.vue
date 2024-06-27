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
        title: 'Empower Your Team with DealDox Guided Selling',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore our diverse collection of blogs for valuable insights, tips, and inspiration. Stay informed and entertained with our latest posts.' },
            { hid: 'keywords', name: 'keywords', content: 'Blogging Tips, Content Creation, Blog Writing, Blog Posts' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/our-team' }
        ],
    },
}
</script>

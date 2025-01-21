<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="new-app-main-banner-wrap-image" id="new-app-main-banner-wrap-image">
                        <img src="../assets/images/banner/success-stories.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <!-- <SuccesStoryBanner /> -->
        <SuccessStories />
        <!-- <AutomatedQuotes /> -->
        <!-- <Blog />
        <GetInTouch /> -->
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle.vue';
// import SuccesStoryBanner from '../components/success-stories/SuccesStoryBanner'
import SuccessStories from '../components/success-stories/SuccessStories.vue'
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
// import Blog from '../components/Common/Blog';
// import GetInTouch from '../components/Common/GetInTouch';
import DealDoxFooter from '../layouts/DealDoxFooter.vue'
import axios from 'axios';


export default {
    components: {
        Navbar,
        PageTitle,
        // SuccesStoryBanner,
        SuccessStories,
        // AutomatedQuotes,
        // Blog,
        // GetInTouch,
        DealDoxFooter,
    },
    //    data() {
    //       return {
    //           seoData: [],
    //       }
    //   },
    //   created: async function () {
    //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=success-stories&populate=deep,5')
    //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    //       if (pageData?.attributes?.seo?.length > 0) {
    //           this.seoData = pageData.attributes.seo[0];
    //       }
    //   },
    //   head({ $seo }) {
    //      return $seo({
    //           title: this.seoData.metaTitle ||'Unlock Success Stories for Inspiration',
    //          description: this.seoData.metaDescription,
    //          keywords: this.seoData.keywords,
    // image: this.post.image || '',
    //       });
    //    },
    head: {
        title: 'Unlock Success Stories for Inspiration',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore our diverse collection of blogs for valuable insights, tips, and inspiration. Stay informed and entertained with our latest posts.' },
            { hid: 'keywords', name: 'keywords', content: 'Blogging Tips, Content Creation, Blog Writing, Blog Posts' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/success-stories' }
        ],
    },
    head: {
        title: 'Unlock Success Stories for Inspiration',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore real-life success stories for inspiration and motivation. Discover how others achieved their goals.' },
            { hid: 'keywords', name: 'keywords', content: 'Inspirational Journeys Achieved Goals Client Wins Impactful Results Case Studies' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/success-stories' }
        ],
    },
}
</script>

<style>
@media (max-width:750px) {
    #new-app-main-banner-wrap-image {
        margin-top: 46px !important;
    }
}
</style>

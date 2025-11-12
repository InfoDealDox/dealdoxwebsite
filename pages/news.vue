<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="new-app-main-banner-wrap-image" id="new-app-main-banner-wrap-image">
                        <img src="../assets/images/news-header-img.png" alt="News Page Image">
                    </div>
                </div>
            </div>
        </div>
        <!-- <PageTitle class="page-title-style-two-ebook" pageTitle=""
            pageDesc="" /> -->
        <!-- <PageTitle class="page-title-style-two-ebook" pageTitle="Ebook"
            pageDesc="Stay Up-to-Date with Our Latest Insights, Tips, and News" /> -->
        <MediaMain />
        <!-- <AutomatedQuotes /> -->
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
// import PageTitle from '../components/Common/PageTitle';
import MediaMain from '../components/MediaFolder/MediaMain.vue'
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
import DealDoxFooter from '../layouts/DealDoxFooter.vue'
import axios from 'axios';


export default {
    components: {
        Navbar,
        // PageTitle,
        MediaMain,
        // AutomatedQuotes,
        DealDoxFooter,
    },
    //   data() {
    //       return {
    //           seoData: [],
    //        }
    //   },
    //   created: async function () {
    //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=news&populate=deep,5')
    //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    //       if (pageData?.attributes?.seo?.length > 0) {
    //           this.seoData = pageData.attributes.seo[0];
    //       }
    //   },
    //   head({ $seo }) {
    //       return $seo({
    //          title: this.seoData.metaTitle ||'www.dealdox.io',
    //          description: this.seoData.metaDescription,
    //          keywords: this.seoData.keywords,
    // image: this.post.image || '',
    //       });
    //   },
    head: {
        title: 'Latest News & Updates | DealDox Quotation Software Insights',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Stay informed with the latest news, updates, and insights about DealDox quotation software. Explore new features, industry trends, and expert tips.' },
            { hid: 'keywords', name: 'keywords', content: 'Blogging Tips, Content Creation, Blog Writing, Blog Posts' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/news' }
        ],
    },
    head: {
        title: 'Latest News & Updates | DealDox Quotation Software Insights',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Stay informed with the latest news, updates, and insights about DealDox quotation software. Explore new features, industry trends, and expert tips.' },
            { hid: 'keywords', name: 'keywords', content: 'Definitions Specific Domain Alphabetical List Technical Terms' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/news' }
        ],
    },
}
</script>


<!-- <style>
@media (max-width:750px) {
    #new-app-main-banner-wrap-image {
        margin-top: 46px !important;
    }
}
</style> -->

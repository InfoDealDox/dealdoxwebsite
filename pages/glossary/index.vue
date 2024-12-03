<template>
    <!-- <div> -->
        <!-- <div style="margin-top: 150px;">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora eaque voluptatem nostrum
                molestias maxime voluptates sit nam. Facere iste veniam inventore alias aliquam non soluta obcaecati a
                illum. Ut?</h1>
                </div> -->
            <div>
                <div>
                    <Navbar class="navbar-style-two" />
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 col-md-12">
                                <div class="new-app-main-banner-wrap-image">
                                    <img src="../../assets/images/banner/glossary.png" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <PageTitle class="page-title-style-two-glossary" pageTitle=""
            pageDesc="" /> -->
                    <!-- <PageTitle class="page-title-style-two-glossary" pageTitle="Glossary"
            pageDesc="Stay Up-to-Date with Our Latest Insights, Tips, and News" /> -->
                    <GlossaryPage />
                    <!-- <AutomatedQuotes /> -->
                    <DealDoxFooter />
                </div>
            </div>
            <!-- </div> -->
</template>

<script>
import Navbar from '../../layouts/Navbar';
// import PageTitle from '../../components/GlossaryFolder/PageTitle';
import GlossaryPage from '../../components/GlossaryFolder/GlossaryPage.vue'
// import AutomatedQuotes from '../../components/Common/AutomatedQuotes';
import DealDoxFooter from '../../layouts/DealDoxFooter'
import axios from 'axios';


export default {
    components: {
        Navbar,
        // PageTitle,
        GlossaryPage,
        // AutomatedQuotes,
        DealDoxFooter,
    },
    //    data() {
    //        return {
    //            seoData: [],
    //        }
    //    },
    //    created: async function () {
    //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=glossaries&populate=deep,5')
    //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    //        if (pageData?.attributes?.seo?.length > 0) {
    //           this.seoData = pageData.attributes.seo[0];
    //       }
    //    },
    //   head({ $seo }) {
    //        return $seo({
    //           title: this.seoData.metaTitle ||'Comprehensive Glossaries for Easy Understanding',
    //           description: this.seoData.metaDescription,
    //           keywords: this.seoData.keywords,
    // image: this.post.image || '',
    //     });
    //   },
    head: {
        title: 'Comprehensive Glossaries for Easy Understanding',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Access our extensive glossaries for clear definitions and explanations. Enhance your understanding with our comprehensive resources.' },
            { hid: 'keywords', name: 'keywords', content: 'Definitions Specific Domain Alphabetical List Technical Terms' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/glossary' }
        ],
    },
}
</script>

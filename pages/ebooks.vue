<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="new-app-main-banner-wrap-image">
                        <img src="../assets/images/banner/ebook.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <!-- <PageTitle class="page-title-style-two-ebook" pageTitle=""
            pageDesc="" /> -->
        <!-- <PageTitle class="page-title-style-two-ebook" pageTitle="Ebook"
            pageDesc="Stay Up-to-Date with Our Latest Insights, Tips, and News" /> -->
        <EbookMain />
        <!-- <AutomatedQuotes /> -->
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
// import PageTitle from '../components/Common/PageTitle';
import EbookMain from '../components/EbookFolder/EbookMain'
// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';


export default {
    components: {
        Navbar,
        // PageTitle,
        EbookMain,
        // AutomatedQuotes,
        DealDoxFooter,
    },
    //   data() {
    //       return {
    //           seoData: [],
    //       }
    //   },
    //   created: async function () {
    //      const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=ebooks&populate=deep,5')
    //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    //       if (pageData?.attributes?.seo?.length > 0) {
    //           this.seoData = pageData.attributes.seo[0];
    //       }
    //   },
    //    head({ $seo }) {
    //       return $seo({
    //           title: this.seoData.metaTitle ||'Unlock Knowledge with Our eBooks',
    //           description: this.seoData.metaDescription,
    //           keywords: this.seoData.keywords,
    //           // image: this.post.image || '',
    //       });
    //   },
    head() {
        return {
            meta: [
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex, nofollow'
                }
            ]
        };
    }

}
</script>
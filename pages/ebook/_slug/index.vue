<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="new-app-main-banner-wrap-image">
                        <img src="../../../assets/images/banner/ebook.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <!-- <PageTitle class="page-title-style-two-ebook" pageTitle=""
            pageDesc="" /> -->
        <!-- <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.name" pageDesc="News and Insights" /> -->
        <div v-if="details !== null">
            <EbookDetails v-bind:detailsContent="details" />
        </div>
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar';
// import PageTitle from '../../../components/Common/PageTitle';
import EbookDetails from '../../../components/EbookFolder/EbookDetails'
import DealDoxFooter from '../../../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    components: {
        Navbar,
        // PageTitle,
        EbookDetails,
        DealDoxFooter,
    },

    data() {
        return {
            details: null,
            seoData: null,

        }
    },

    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://cms.dealdox.io/api/ebooks?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data;
        const pageData = this.details.length > 0 ? this.details[0] : {};
        if (pageData?.attributes?.seo) {
            this.seoData = pageData.attributes.seo;
            // console.log( this.seoData ,' this.seoData ');
        }
        // console.log("this.details....", this.details);
    },
    head({ $seo }) {

        return $seo({
            title: this.seoData?.metaTitle ||'www.dealdox.io',
            description: this.seoData?.metaDescription,
            keywords: this.seoData?.keywords,
            // image: this.post.image || '',
        });
    },

};
</script>
<template>
    <div>
    
        <div>
            <Navbar class="navbar-style-two" />
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12">
                        <div class="new-app-main-banner-wrap-image">
                            <img src="../../../assets/images/banner/glossary.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
            <!-- <PageTitle class="page-title-style-two-glossary" pageTitle=""
            pageDesc="" /> -->
            <!-- <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" /> -->
            <div v-if="details !== null">
                <GlossaryDetails v-bind:detailsContent="details" />
            </div>
            <DealDoxFooter />
        </div>
        </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar';
// import PageTitle from '../../../components/Common/PageTitle';
import GlossaryDetails from '../../../components/GlossaryFolder/GlossaryDetails'
import DealDoxFooter from '../../../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    components: {
        Navbar,
        // PageTitle,
        GlossaryDetails,
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
        const reaponse = await axios.get(`https://cms.dealdox.io/api/glossaries?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data
        const pageData = this.details.length > 0 ? this.details[0] : {};
        if (pageData?.attributes?.seo) {
            this.seoData = pageData.attributes.seo;
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData?.metaTitle || 'www.dealdox.io',
            description: this.seoData?.metaDescription,
            keywords: this.seoData?.keywords,
        });
    },
};
</script>
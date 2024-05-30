<template>
    <div>
        <Navbar class="navbar-style-two" />
        <!-- <SuccesStoryBannerPage v-if="details !== null" :pageTitle="details[0].attributes.title"
        :shortDesc="details[0].attributes.shortDesc"/> -->
        <!-- <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" /> -->
        <div v-if="details !== null">
            <SuccessStories v-bind:detailsContent="details" />
        </div>
        <Partner />
        <Blog />
        <GetInTouch />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar';
// import PageTitle from '../../../components/Common/PageTitle';
// import SuccesStoryBannerPage from '../../../components/success-stories/SuccesStoryBannerPage'
import SuccessStories from '../../../components/success-stories/SuccessStoriesDetails'
import Partner from '../../../components/Common/Partner'
import Blog from '../../../components/Common/Blog';
import GetInTouch from '../../../components/Common/GetInTouch';
import DealDoxFooter from '../../../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    components: {
        Navbar,
        // PageTitle,
        // SuccesStoryBannerPage,
        SuccessStories,
        Partner,
        Blog,
        GetInTouch,
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
        const reaponse = await axios.get(`https://cms.dealdox.io/api/successstories?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data;
        const pageData = this.details.length > 0 ? this.details[0] : {};
        if (pageData?.attributes?.seo) {
            this.seoData = pageData.attributes.seo;
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData?.metaTitle ||'www.dealdox.io',
            description: this.seoData?.metaDescription,
            keywords: this.seoData?.keywords,
        });
    },
};
</script>
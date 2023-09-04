<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two" pageTitle=""
            pageDesc="" />
        <!-- <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" /> -->
        <div v-if="details !== null">
            <FeaturedBlogDetails v-bind:detailsContent="details" />
        </div>
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import FeaturedBlogDetails from '../../../components/blogs/FeaturedBlogDetails'
import DealDoxFooter from '../../../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    components: {
        Navbar,
        PageTitle,
        FeaturedBlogDetails,
        DealDoxFooter,
    },

    data() {
        return {
            details: null
        }
    },

    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://dealdoxstrapi.pbwebvision.com/api/featuredblogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data;
    }
};
</script>
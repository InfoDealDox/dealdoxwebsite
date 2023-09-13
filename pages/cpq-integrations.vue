<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageHeader />
        <Stats />
        <Funfacts />
        <IAQSolutions />
        <FreeTrial />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageHeader from '../components/CPQIntegration/PageHeader'
import IAQSolutions from '../components/CPQIntegration/IAQSolutions'
import Funfacts from '../components/CPQIntegration/Funfacts'
import Stats from '../components/CPQIntegration/Stats'
import FreeTrial from '../components/CPQIntegration/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        PageHeader,
        IAQSolutions,
        Funfacts,
        Stats,
        FreeTrial,
        DealDoxFooter,
    },
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=integration&populate=deep,5')
        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
        if (pageData?.attributes?.seo?.length > 0) {
            this.seoData = pageData.attributes.seo[0];
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle,
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            // image: this.post.image || '',
        });
    },
}
</script>
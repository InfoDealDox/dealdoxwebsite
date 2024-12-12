<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerCPQ />
        <WhatisCPQService />
        <QuickandAccurate />
        <TransformYourSales />
        <!-- <FreeTrial /> -->
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerCPQ from '../components/Security/MainBannerCPQ'
import TransformYourSales from '../components/Security/TransformYourSales'
import QuickandAccurate from '../components/Security/QuickandAccurate'
import WhatisCPQService from '../components/Security/WhatisCPQService'
import FreeTrial from '../components/Security/FreeTrial'
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerCPQ,
        TransformYourSales,
        QuickandAccurate,
        WhatisCPQService,
        FreeTrial,
        DealDoxFooter,
    },
 //   data() {
 //       return {
 //           seoData: [],
 //       }
 //   },
 //   created: async function () {
 //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=security&populate=deep,5')
//        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
//        if (pageData?.attributes?.seo?.length > 0) {
 //           this.seoData = pageData.attributes.seo[0];
 //       }
 //   },
 //   head({ $seo }) {
//        return $seo({
 //           title: this.seoData.metaTitle ||'www.dealox.io',
 //           description: this.seoData.metaDescription,
  //          keywords: this.seoData.keywords,
            // image: this.post.image || '',
  //      });
 //   },
     head: {
        title: 'www.dealdox.io',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Start your free trial with DealDox today and experience seamless document management. Simplify collaboration, track changes, and enhance productivity.' },
            { hid: 'keywords', name: 'keywords', content: 'Try It Free, Start Your Experience, Risk-Free Trial' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/security' }
        ],
    },
}
</script>
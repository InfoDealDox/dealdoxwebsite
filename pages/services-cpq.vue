<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerCPQ />
        <WhatisCPQService />
        <TransformYourSales />
        <QuickandAccurate />
      
        <TransformDealsWith/>
        <servicefaq/>    
        <DealDoxFooter />
        
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerCPQ from '../components/CPQ/MainBannerCPQ'
import TransformYourSales from '../components/CPQ/TransformYourSales'
import QuickandAccurate from '../components/CPQ/QuickandAccurate'
import WhatisCPQService from '../components/CPQ/WhatisCPQService'

import TransformDealsWith  from "../components/RequestDemo/TransformDealsWith"
import servicefaq from '../components/CPQ/servicefaq'
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
      
        TransformDealsWith,
        DealDoxFooter,
         servicefaq,
    },

 //   data() {
 //       return {
 //           seoData: [],
 //       }
 //   },
 //   created: async function () {
 //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=services-cpq&populate=deep,5')
//        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
 //       if (pageData?.attributes?.seo?.length > 0) {
 //           this.seoData = pageData.attributes.seo[0];
 //       }
 //   },
//    head({ $seo }) {
//        return $seo({
//            title: this.seoData.metaTitle ||'Streamline Sales Quotes: Best CPQ Software Solutions',
  //          description: this.seoData.metaDescription,
 //           keywords: this.seoData.keywords,
            // image: this.post.image || '',
 //       });
//    },
    head: {
        title: 'CPQ | configure price quote software | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Streamline Sales with Top CPQ Software Solutions. Discover the best CPQ solutions for services and sales automation. CPQ software for efficient quoting provided by dealdox.' },
            { hid: 'keywords', name: 'keywords', content: 'CPQ, CPQ(Configure Price Quote), CPQ Software, CPQ for Services, best CPQ Solutions, best cpq software, CPQ sales automation' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/services-cpq' }
        ],
    },
}
</script>

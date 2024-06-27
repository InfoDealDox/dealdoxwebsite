<template>
    <div>
        <Navbar class="navbar-style-two" />
        <Banner />
        <AccelerateYourSales />
        <Experiencethefuture />
        <YourBusiness />
       
     <PageHeader />
        <quotefaq/>
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import Banner from '../components/AutomatedQuotesGeneration/Banner'
import AccelerateYourSales from '../components/AutomatedQuotesGeneration/AccelerateYourSales'
import Experiencethefuture from '../components/AutomatedQuotesGeneration/Experiencethefuture'
import YourBusiness from '../components/AutomatedQuotesGeneration/YourBusiness'

import PageHeader from '../components/ContactUs/PageHeader'
import quotefaq from '../components/AutomatedQuotesGeneration/quotefaq'
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';


export default {
    name: 'AutomatedQuotesGeneration',
    components: {
        Navbar,
        Banner,
        AccelerateYourSales,
        Experiencethefuture,
        YourBusiness,
        
         PageHeader,
        quotefaq,
        DealDoxFooter,
    },
//    data() {
//        return {
 //           seoData: [],
//        }
 //   },
 //   created: async function () {
 //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=quoting-software&populate=deep,5')
 //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
 //       if (pageData?.attributes?.seo?.length > 0) {
 //           this.seoData = pageData.attributes.seo[0];
 //       }
 //   },
   // head({ $seo }) {
 //       return $seo({
 //           title: this.seoData.metaTitle ||'Automated Quotation Software | Sales Quote Automation',
  //          description: this.seoData.metaDescription,
 //           keywords: this.seoData.keywords,
            // image: this.post.image || '',
 //       });
 //   },
    head: {
        title: 'Automated Quotation Software | Sales Quote Automation',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore our diverse collection of blogs for valuable insights, tips, and inspiration. Stay informed and entertained with our latest posts.' },
            { hid: 'keywords', name: 'keywords', content: 'Blogging Tips, Content Creation, Blog Writing, Blog Posts' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/quoting-software' }
        ],
    },
}
</script>


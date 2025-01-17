<template>
    <div>
        <Navbar class="navbar-style-two" />
        <Banner />
        <AccelerateYourSales />
        <Experiencethefuture />
        <YourBusiness />
        <quotefaq />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import Banner from '../components/AutomatedQuotesGeneration/Banner.vue'
import AccelerateYourSales from '../components/AutomatedQuotesGeneration/AccelerateYourSales.vue'
import Experiencethefuture from '../components/AutomatedQuotesGeneration/Experiencethefuture.vue'
import YourBusiness from '../components/AutomatedQuotesGeneration/YourBusiness.vue'


import quotefaq from '../components/AutomatedQuotesGeneration/quotefaq.vue'
import DealDoxFooter from '../layouts/DealDoxFooter.vue'
import axios from 'axios';


export default {
    name: 'AutomatedQuotesGeneration',
    components: {
        Navbar,
        Banner,
        AccelerateYourSales,
        Experiencethefuture,
        YourBusiness,


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
        title: 'Automate the process of generating proposals | Dealdox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Easily generating custom quotes in any desired language with quote automation software. Quick and Accurate DealDox Automation Software for automate billing process &automates the document creation process.' },
            { hid: 'keywords', name: 'keywords', content: 'Quote Automation, Automated Quotations, Quote Automation software, Quotation software, Automated Quotes Generation, Automate contracts and renewals, Automated Quoting Solutions, intelligent quoting solution, Automated Document Generation, DealDox Automation Software, automate billing process, Quick and Accurate Quoting, Pricing & Quote Generator, create quotations, Maximize Profit Margins, create quotes using, automation software automates the document creation process, Switch between price listings, easily generating custom quotes in any desired language, automate the process of generating proposals, smart and automated agreement of deals, automated quotation solution' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/quoting-software' }
        ],
    },
}
</script>

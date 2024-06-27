<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerLoacalized/>
        <HowLocalizedDeal />
        <KeyBenefitsof />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerLoacalized from '../components/Microsoft-Dynamics/MainBannerLoacalized'
import HowLocalizedDeal from '../components/Microsoft-Dynamics/HowLocalizedDeal'
import KeyBenefitsof from '../components/Microsoft-Dynamics/KeyBenefitsof'
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';


export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerLoacalized,
        HowLocalizedDeal,
        KeyBenefitsof,
        DealDoxFooter,
    },
 //   data() {
 //       return {
  //          seoData: [],
 //       }
 //   },
 //   created: async function () {
 //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=microsoft-dynamics-365-cpq-integration&populate=deep,5')
  //      const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
  //      if (pageData?.attributes?.seo?.length > 0) {
  //          this.seoData = pageData.attributes.seo[0];
  //      }
  //  },
 //   head({ $seo }) {
 //       return $seo({
  //          title: this.seoData.metaTitle ||'Microsoft Dynamics 365 CPQ Integration | DealDox',
 //           description: this.seoData.metaDescription,
 //           keywords: this.seoData.keywords,
            // image: this.post.image || '',
//        });
 //   },
     head: {
        title: 'Microsoft Dynamics 365 CPQ Integration | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Experience smooth CPQ integration with Microsoft Dynamics 365. Enhance sales processes and improve efficiency with DealDox's integration solutions' },
            { hid: 'keywords', name: 'keywords', content: 'Microsoft Integration, Dynamics 365 CRM, automated workflows, advanced quotes, deal structures, automate approvals, Generate Lightning-fast Professional Quotes, Microsoft Dynamics 365 for Sales and DealDox, simple-to-implement and simple-to-maintain CPQ, Closing Deals at Lightning Speed through CPQ Automation, simplified pricing with DealDox, digital sales proposal solution' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/microsoft-dynamics-365-cpq-integration' }
        ],
    },
}
</script>
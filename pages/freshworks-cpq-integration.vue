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
import MainBannerLoacalized from '../components/Freshworks/MainBannerLoacalized'
import HowLocalizedDeal from '../components/Freshworks/HowLocalizedDeal'
import KeyBenefitsof from '../components/Freshworks/KeyBenefitsof'
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
   //     return {
//       seoData: [],
 //       }
 //   },
 //   created: async function () {
  //      const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=freshworks-cpq-integration&populate=deep,5')
 //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
 //       if (pageData?.attributes?.seo?.length > 0) {
  //          this.seoData = pageData.attributes.seo[0];
 //       }
//    },
 //   head({ $seo }) {
 //       return $seo({
 //           title: this.seoData.metaTitle ||'Freshworks CPQ Integration | DealDox',
  //          description: this.seoData.metaDescription,
 //           keywords: this.seoData.keywords,
 //           // image: this.post.image || '',
//        });
 //   },
    head: {
        title: 'Freshworks CPQ Integration | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Simplify sales processes with Freshworks CPQ integration by DealDox. Improve efficiency and achieve better results with our advanced integration solutions.' },
            { hid: 'keywords', name: 'keywords', content: 'DealDox and Freshworks, Freshworks CRM, CRM Potential, ease and speed of quoting, Advanced CPQ tool, CPQ tool, Buyer experience, CPQ capabilities, Freshworks CRM and DealDox integrated solutions, centralized deal management system within Freshworks CRM, Automatic Delegation to Decision-Makers' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/freshworks-cpq-integration' }
        ],
    },
}
</script>

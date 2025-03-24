<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-privacy" pageTitle="" />
        <PrivacyPolicy />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy.vue';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
    components: {
        Navbar,
        PageTitle,
        PrivacyPolicy,
        DealDoxFooter,
    },
 //   data() {
 //       return {
//            seoData: [],
 //       }
 //   },
  //  created: async function () {
  //      const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=privacy-policy&populate=deep,5')
  //      const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
  //      if (pageData?.attributes?.seo?.length > 0) {
  //          this.seoData = pageData.attributes.seo[0];
  //      }
 //   },
 //   head({ $seo }) {
 //       return $seo({
 //           title: this.seoData.metaTitle ||'Dealdox Privacy Policy: Ensuring Data Protection',
 //           description: this.seoData.metaDescription,
 //           keywords: this.seoData.keywords,
            // image: this.post.image || '',
 //       });
//    },
    head: {
        title: 'DealDox CPQ Privacy Policy | Data Protection',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Your privacy matters. Review the DealDox CPQ privacy policy to understand our commitment to protecting your personal information and data security.' },
            { hid: 'keywords', name: 'keywords', content: 'Your privacy matters. Review the DealDox CPQ privacy policy to understand our commitment to protecting your personal information and data security.' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/privacy-policy' }
        ],
    },
}
</script>

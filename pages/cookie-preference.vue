<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle pageTitle="" />
        <Cookie />
        <DealDoxFooter />
    </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import PageTitle from '../components/Common/PageTitle.vue';
import Cookie from '../components/Cookies/Cookie.vue';
import DealDoxFooter from '../layouts/DealDoxFooter';
import axios from 'axios';


export default {
    components: {
        Navbar,
        PageTitle,
        Cookie,
        DealDoxFooter,
    },
 //   data() {
  //      return {
  //          seoData: [],
  //      }
 //   },
//    created: async function () {
 //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=cookie-preference&populate=deep,5')
 //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
 //       if (pageData?.attributes?.seo?.length > 0) {
 //           this.seoData = pageData.attributes.seo[0];
 //       }
 //   },
  //  head({ $seo }) {
  //      return $seo({
  //          title: this.seoData.metaTitle ||'www.dealdox.io',
 //           description: this.seoData.metaDescription,
//            keywords: this.seoData.keywords,
            // image: this.post.image || '',
 //       });
 //   },
     head: {
        title: ' Manage Your Cookie Preferences | DealDox CPQ',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Learn how Dealdox Privacy Policy safeguards your data with comprehensive protection measures and compliance standards.' },
            { hid: 'keywords', name: 'keywords', content: 'Manage your cookie preferences for DealDox CPQ. Control the data we collect and how we use it to personalize your experience.' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/cookie-preference' }
        ],
    },
}
</script>
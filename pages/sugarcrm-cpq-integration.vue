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
import MainBannerLoacalized from '../components/Sugar-CRM/MainBannerLoacalized'
import HowLocalizedDeal from '../components/Sugar-CRM/HowLocalizedDeal'
import KeyBenefitsof from '../components/Sugar-CRM/KeyBenefitsof'
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
 //           seoData: [],
//        }
//    },
 //   created: async function () {
 //       const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=sugarcrm-cpq-integration&populate=deep,5')
 //       const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
 //       if (pageData?.attributes?.seo?.length > 0) {
 //           this.seoData = pageData.attributes.seo[0];
//        }
//    },
 //   head({ $seo }) {
 //       return $seo({
 //           title: this.seoData.metaTitle ||'Sugar CPQ Integration | DealDox',
 //           description: this.seoData.metaDescription,
 //           keywords: this.seoData.keywords,
            // image: this.post.image || '',
 //       });
 //   },
    head: {
        title: 'Sugar CPQ Integration | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore our diverse collection of blogs for valuable insights, tips, and inspiration. Stay informed and entertained with our latest posts.' },
            { hid: 'keywords', name: 'keywords', content: 'Blogging Tips, Content Creation, Blog Writing, Blog Posts' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/sugarcrm-cpq-integration' }
        ],
    },
}
</script>


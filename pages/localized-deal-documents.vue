<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBannerLoacalized/>
        <HowLocalizedDeal />
        <KeyBenefitsof />
        <HowLocalized />
        <EmpoerGlobal />
      
              <TransformDealsWith/>
        <faq/>
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBannerLoacalized from '../components/LocalizedDealDocuments/MainBannerLoacalized'
import HowLocalizedDeal from '../components/LocalizedDealDocuments/HowLocalizedDeal'
import KeyBenefitsof from '../components/LocalizedDealDocuments/KeyBenefitsof'
import HowLocalized from '../components/LocalizedDealDocuments/HowLocalized'
import EmpoerGlobal from '../components/LocalizedDealDocuments/EmpoerGlobal'

import TransformDealsWith  from "../components/RequestDemo/TransformDealsWith"
import faq from '../components/LocalizedDealDocuments/faq'
import DealDoxFooter from '../layouts/DealDoxFooter'
import axios from 'axios';

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        MainBannerLoacalized,
        HowLocalizedDeal,
        KeyBenefitsof,
        HowLocalized,
        EmpoerGlobal,
      
          TransformDealsWith,
        faq,
        DealDoxFooter,
    },
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=localized-deal-documents&populate=deep,5')
        const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
        if (pageData?.attributes?.seo?.length > 0) {
            this.seoData = pageData.attributes.seo[0];
        }
    },
    head({ $seo }) {
        return $seo({
            title: this.seoData.metaTitle ||'',
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            link: [{ hid: 'canonical', rel: 'canonical', href: this.seoData.canonicalURL }
        ],
            // image: this.post.image || '',
        });
    },
}
</script>
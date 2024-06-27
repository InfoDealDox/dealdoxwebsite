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
            title: this.seoData.metaTitle ||'Localized Deal Documents Services | DealDox',
            description: this.seoData.metaDescription,
            keywords: this.seoData.keywords,
            link: [{ hid: 'canonical', rel: 'canonical', href: this.seoData.canonicalURL }
        ],
            // image: this.post.image || '',
        });
    },
     head: {
        title: 'Localized Deal Documents Services | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Unlock global markets with DealDoxs localized deal documents services. Streamline multilingual deal processes for seamless international business' },
            { hid: 'keywords', name: 'keywords', content: 'Localized Deal Documents, Non-English CPQ for services, Area-specific deal documents, regionally customed agreements, Geographically Customized Quotations, Deal management , Deal documents, DealDox CPQ, Close deals faster, Regional CPQ automated quote generation, localized versions of deal documents, customized automated quotation, How Localized Deal Documents Work, multilingual document creation capability' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/localized-deal-documents' }
        ],
    },
}
</script>
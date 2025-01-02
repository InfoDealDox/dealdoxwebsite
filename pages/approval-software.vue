<template>
    <div>
        <Navbar class="navbar-style-two" />
        <BannerLighteningFast />
        <AchieveSalesExcellence />
        <EffortlessAutomation />
        <RoutingCapabilitiess />
        <ModesofApprovals />
        <ApprovalsInsights />

        <TransformDealsWith />
        <approvalsfaq />
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import BannerLighteningFast from '../components/LightningFastQuoteApprovals/BannerLighteningFast.vue'
import AchieveSalesExcellence from '../components/LightningFastQuoteApprovals/AchieveSalesExcellence.vue'
import EffortlessAutomation from '../components/LightningFastQuoteApprovals/EffortlessAutomation.vue'
import RoutingCapabilitiess from '../components/LightningFastQuoteApprovals/RoutingCapabilitiess.vue'
import ModesofApprovals from '../components/LightningFastQuoteApprovals/ModesofApprovals.vue'
import ApprovalsInsights from '../components/LightningFastQuoteApprovals/ApprovalsInsights.vue'

import TransformDealsWith from "../components/RequestDemo/TransformDealsWith.vue"
import approvalsfaq from '../components/LightningFastQuoteApprovals/approvalsfaq.vue'
import DealDoxFooter from '../layouts/DealDoxFooter.vue'
import axios from 'axios';


export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        BannerLighteningFast,
        AchieveSalesExcellence,
        EffortlessAutomation,
        RoutingCapabilitiess,
        ModesofApprovals,
        ApprovalsInsights,
        TransformDealsWith,
        approvalsfaq,
        DealDoxFooter,
    },
    // data() {
    //     return {
    //         seoData: [],
    //     }
    // },
    // created: async function () {
    //     const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=approval-software&populate=deep,5')
    //     const pageData = response.data.data?.length > 0 ? response.data.data[0] : {};
    //     if (pageData?.attributes?.seo?.length > 0) {
    //         this.seoData = pageData.attributes.seo[0];
    //     }
    // },
    // head({ $seo }) {
    //     return $seo({
    //         title: this.seoData.metaTitle ||'CPQ Quick Approval Software | Quick Approval solutions',
    //         description: this.seoData.metaDescription,
    //         keywords: this.seoData.keywords,
    //         // image: this.post.image || '',
    //     });
    // },

    head: {
        title: 'Lightening Fast Quote Approvals Digital Quoting Tool | Dealdox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Experience streamlined CPQ advanced approvals process with lightning-fast automation. Enable smart, advanced approvals for quick quote processing.Accelerate quote to cash platform and integrate seamlessly with CPQ CRM integration.' },
            { hid: 'keywords', name: 'keywords', content: 'Quote Automation CPQ Quick Approvals, Lightening fast approvals, Smart approval in CPQ, CPQ advanced approvals, Fast Quote Approvals, quote-to-cash platform, automated quoting tool, Integrating CPQ, CPQ Integration work, Quote approvals, Digital Quoting Tool, CPQ Approval process, streamlined approvals, quotation software, CPQ for Services, CPQ CRM integration, Quote-to-cash cycle, deal closures quote-to-delivery process, revenue forecasting, smart and automated agreement of deals, automated quotation solution automate sales quoting process, CPQ guided selling configuration, Quoting & Order Management CPQ, generate detailed statements of work, convert opportunities into cash, CPQ software integrated with other platforms like CRM, ERP and e-commerce' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/approval-software' }
        ],
    },
}
</script>

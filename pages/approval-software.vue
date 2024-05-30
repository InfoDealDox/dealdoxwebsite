<template>
    <div>
        <Navbar class="navbar-style-two" />
        <BannerLighteningFast />
        <AchieveSalesExcellence />
        <EffortlessAutomation />
        <RoutingCapabilitiess />
        <ModesofApprovals />
        <ApprovalsInsights />
       
               <TransformDealsWith/>
        <approvalsfaq/>
        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import BannerLighteningFast from '../components/LightningFastQuoteApprovals/BannerLighteningFast'
import AchieveSalesExcellence from '../components/LightningFastQuoteApprovals/AchieveSalesExcellence'
import EffortlessAutomation from '../components/LightningFastQuoteApprovals/EffortlessAutomation'
import RoutingCapabilitiess from '../components/LightningFastQuoteApprovals/RoutingCapabilitiess'
import ModesofApprovals from '../components/LightningFastQuoteApprovals/ModesofApprovals'
import ApprovalsInsights from '../components/LightningFastQuoteApprovals/ApprovalsInsights'

import TransformDealsWith  from "../components/RequestDemo/TransformDealsWith"
import approvalsfaq from '../components/LightningFastQuoteApprovals/approvalsfaq'
import DealDoxFooter from '../layouts/DealDoxFooter'
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
    data() {
        return {
            seoData: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=approval-software&populate=deep,5')
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
            // image: this.post.image || '',
        });
    },
}
</script>

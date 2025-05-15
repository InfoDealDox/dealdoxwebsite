<template>
    <div v-if="Object.keys(compareData).length" >
        <Navbar class="navbar-style-two" />
        <div class="comparisionAllTop" >
            <div class="comparision-h1-container">
                <h1 class="comparision-h1-tag">{{ compareData.h1_tag }}</h1>
                <div v-html="compareData.h1_Content" class="comparision-h1-content"></div>
                <NuxtLink to='/demo' class="compare-new-banner-link-nav"><button class="compare-new-banner-link">Request
                        Demo</button></NuxtLink>
            </div>
            <div class="compareData-h2-container" id="customize-entry">
                <h2 class="compare-h2-tags-css">{{ compareData.h2_first_tag }}</h2>
                <div class="compareData-h2-boxes">
                    <div v-html="compareData.Point_1" class="compare-points"></div>
                    <div v-html="compareData.Point_2" class="compare-points"></div>
                    <div v-html="compareData.Point_3" class="compare-points"></div>
                    <div v-html="compareData.Point_4" class="compare-points"></div>
                    <div v-html="compareData.Point_5" class="compare-points"></div>
                </div>
            </div>
            <div class="compareData-h3-container">
                <h2 class="compare-h2-tags-css">{{ compareData.h2_second_tag }}</h2>
                <div v-html="compareData.h2_second_content"></div>
            </div class="compareData-h2-container">
            <div class="compareData-h3-container">
                <h2 class="compare-h2-tags-css">{{ compareData.h2_third_tag }}</h2>
                <div v-html="compareData.h3_third_content"></div>
            </div>
            <div class="compareData-h3-container"">
                <h2 class="compare-h2-tags-css">{{ compareData.h2_fourth_tag }}</h2>
                <FirstTable headerOne="DealDox CPQ" headerTwo="Salesforce CPQ " :firstColumn="DealDoxs"
                    :secondColumn="salesforces" />

            </div>
     
            <div class="compareData-h3-container">
                <h2 class="compare-h2-tags-css">{{ compareData.h2_sixth_tag }}</h2>
                <div v-html="compareData.h2_sixth_content"></div>
            </div>
        </div>
        <DealDoxFooter />
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from "../layouts/Navbar.vue";
import DealDoxFooter from "../layouts/DealDoxFooter.vue";
import FirstTable from '../components/comparision/FirstTable.vue';



export default {
    data() {

        return {
            compareData: {},
            DealDoxs: [
                "Unified platform for all sales activities in company's existing CRM.",
                "Integrate with third-party tools such as Freshworks CRM, Microsoft Dynamics 365, HubSpot, and ERP systems.",
                "Achieve rapid integration and setup within weeks, without any coding needed.",
                "Guided selling helps sales reps quickly make successful proposals with an easy quoting process.",
                "Easy to scale for growing sales teams.",
                "Automated approval workflows speed up turnaround.",
                "Support is available by phone, mobile, online, and through knowledge articles."
            ],
            salesforces: [

                "Easily configure complex products within only Salesforce CRM.",
                "Access real-time insights on customers, deals, and prospects within Salesforce CRM.",
                "IT implementations typically take more than 3 months.",
                "Salesforce has built-in guided selling, but complex workflows need custom coding.",
                "Changes and maintenance often need experts, which can cost more.",
                "Complete quote-to-cash automation.",
                "Phone support only."


            ],
      

        };

    },
    components: {
        Navbar,
        DealDoxFooter,
        FirstTable,

    },
    mounted() {
        this.getComparisonData();
    },
    methods: {
        async getComparisonData() {
            try {
                const response = await axios.get("https://cms.dealdox.io/api/all-compare-table?populate=*");
                console.log("New Compare Data", response.data?.data?.attributes?.comparingall[0]);
                this.compareData = response.data?.data?.attributes?.comparingall[0];
            } catch (error) {
                console.error("Error fetching comparison data:", error);
            }
        },
    },
    head: {
        title: 'DealDox CPQ vs Salesforce CPQ: Best Customizable Quote-to-Cash Alternative | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore Dealdox CPQ as the top alternative to Salesforce CPQ. Offering better customization, flexibility, and seamless quote-to-cash solutions, Dealdox outperforms Salesforce CPQ for your business needs.' },
            { hid: 'keywords', name:'keywords', content: 'Salesforce CPQ, alternative to salesforce cpq, competitors of Salesforce CPQ, the best alternative to salesforce cpq, best customizable quoting and configuration solution, other alternatives to salesforce cpq, CPQ alternatives, Salesforce CPQ alternative, CPQ in salesforce, Quote-to-cash solutions in salesforce, CPQ Pricing Comparison, DealDox CPQ vs Salesforce CPQ ' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/alternative-to-salesforce-cpq' }
        ],
    },
};


</script>

<style>
@import url(../assets/css/pages-css/Comparision.css);
</style>
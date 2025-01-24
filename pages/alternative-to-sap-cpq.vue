<template>
    <div v-if="Object.keys(compareData).length">
        <Navbar class="navbar-style-two" />
        <div class="comparisionAllTop" style="font-family: Montserrat !important;">
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
            <div class="compareData-h3-container">
                <h2 class=" compare-h2-tags-css">{{ compareData.h2_fourth_tag }}</h2>
                <FirstTable headerOne="DealDox CPQ" headerTwo="SAP CPQ" :firstColumn="DealDoxs"
                    :secondColumn="salesforces" />

            </div>
            <div class="compareData-h3-container">
                <h2 class="compare-h2-tags-css">{{ compareData.h2_fivth_tag }}</h2>
                <FirstTable headerOne="DealDox CPQ" headerTwo="SAP CPQ" :firstColumn="pricingPlans"
                    :secondColumn="salesforcePricingPlans" />

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
                "Aimed at businesses of all sizes, offering greater flexibility and accurate quotes for small to mid-sized companies while still being scalable for larger enterprises.",
                "Known for its simple, intuitive interface, which reduces training time for users.",
                "Allows easy access for a larger number of users without the complexity of SAP's licensing and setup.",
                "Works well with a variety of CRM platforms, not limited to SAP, making it versatile for businesses with different CRM systems.",
                "Easier and faster to deploy compared to SAP CPQ, making it ideal for businesses seeking a faster time-to-market."
            ],
            salesforces: [
                "Primarily designed for large enterprises with complex sales processes and integrations across multiple departments.",
                "Seamlessly integrates with other SAP products like SAP ERP and SAP CRM, making it ideal for companies already using SAP solutions.",
                "Best suited for handling intricate product configurations, customized pricing rules, and enterprise-level workflows.",
                "Can handle high volumes of quotes and sales transactions, suitable for large-scale businesses.",
                "Highly customizable but requires expertise in the SAP ecosystem, making setup and maintenance more complex."
            ],
            pricingPlans: [

                "Pay-as-you-go: $1 per quote",
                "Standard Plan: ₹499/user/month, billed annually",
                "Premium Plan: ₹799/user/ month, billed annually",
                "Enterprise Plan: Custom Pricing, Contact sales"
            ],
            salesforcePricingPlans: [
                "Standard: $67 per user per month.",
                "Professional is $106 per user per month."

            ]

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
                console.log("New Compare Data", response.data?.data?.attributes?.comparingall[1]);
                this.compareData = response.data?.data?.attributes?.comparingall[1];
            } catch (error) {
                console.error("Error fetching comparison data:", error);
            }
        },
    },
    head: {
        title: 'DealDox CPQ Pricing | Affordable Solutions with Advanced Sales Configurator',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Explore DealDox CPQ Pricing: Find the best plans to suit your business and leverage advanced features, including sales configurator functionalities.' },
            { hid: 'Keywords', name: 'Salesforce CPQ, alternative to salesforce cpq, competitors of Salesforce CPQ, the best alternative to salesforce cpq, best customizable quoting and configuration solution, other alternatives to salesforce cpq, CPQ alternatives, Salesforce CPQ alternative, CPQ in salesforce, Quote-to-cash solutions in salesforce, CPQ Pricing Comparison, DealDox CPQ vs Salesforce CPQ ' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/alternative-to-sap-cpq' }
        ],
    },
};


</script>

<style>
@import url(../assets/css/pages-css/Comparision.css);
</style>
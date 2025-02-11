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
                <FirstTable headerOne="DealDox CPQ" headerTwo="HubSpot CPQ" :firstColumn="DealDoxs"
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
                "Suited for businesses of all sizes, from startups to large enterprises.",
                "Highly scalable, supporting growing business needs.",
                "Offers multi- language capabilities for global teams.",
                "Easily integrates with a wide variety of CRM and ERP systems.",
                "Offers flexible, affordable pricing with pay - as - you - go and tiered plans."
            ],
            salesforces: [
                "Primarily focused on small to mid-sized businesses. ",
                "Better suited for small businesses with less scalability for larger enterprises. ",
                "Lacks robust multi-language support. ",
                "Primarily integrates within the HubSpot ecosystem ",
                "More fixed pricing, which may become expensive as your business grows.  ",
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
                console.log("New Compare Data", response.data?.data?.attributes?.comparingall[4]);
                this.compareData = response.data?.data?.attributes?.comparingall[4];
            } catch (error) {
                console.error("Error fetching comparison data:", error);
            }
        },
    },

    
    head: {
        title: 'DealDox CPQ vs HubSpot CPQ: Best Alternative for Customizable Quoting Solutions|DealDox.',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Looking for a HubSpot CPQ alternative? DealDox CPQ offers advanced customization, better pricing, and seamless quote-to-cash solutions that outperform HubSpot CPQ. Discover the top CPQ choice for your business.' },
            { hid: 'keywords', name: 'keywords', content: 'Hubspot CPQ, alternative to hubspot cpq, competitors of hubspot CPQ, the best alternative to hubspot cpq, best customizable quoting and configuration solution, other alternatives to hubspot cpq, CPQ alternatives, Hubspot CPQ alternative, CPQ in Hubspot, Quote-to-cash solutions in Hubspot, CPQ Pricing Comparison, DealDox CPQ vs HubSpot CPQ' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/alternative-to-hubspot-cpq' }
        ],
    },
};


</script>

<style>
@import url(../assets/css/pages-css/Comparision.css);
</style>
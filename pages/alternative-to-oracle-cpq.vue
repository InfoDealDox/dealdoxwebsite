<template>
    <div v-if="Object.keys(compareData).length">
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
            <div class="compareData-h3-container">
                <h2 class=" compare-h2-tags-css">{{ compareData.h2_fourth_tag }}</h2>
                <FirstTable headerOne="DealDox CPQ" headerTwo=" Oracle CPQ " :firstColumn="DealDoxs"
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
                "Ideal for businesses of all sizes, offering scalability.",
                "Supports a wider range of CRM platforms, not limited to a specific ecosystem.",
                "Focused on simplicity and user- friendliness.",
                "Easier to implement and use, reducing time to go live.",
                "Affordable pricing with flexible tiers to accommodate varying business budgets.",
            ],
            salesforces: [
                "Best suited for large enterprises with complex configurations.",
                "Extensive integration capabilities with other Oracle products.",
                "More advanced features, such as advanced pricing models and configuration rules.",
                "Longer implementation time due to its complexity.",
                "Higher pricing, making it more expensive for smaller businesses.",
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
                console.log("New Compare Data", response.data?.data?.attributes?.comparingall[2]);
                this.compareData = response.data?.data?.attributes?.comparingall[2];
            } catch (error) {
                console.error("Error fetching comparison data:", error);
            }
        },
    },
    head: {
        title: 'DealDox CPQ vs Oracle CPQ: Best Alternative for Customizable Quoting Solutions|DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Looking for an Oracle CPQ alternative? DealDox CPQ offers superior customization, flexible pricing, and efficient quote-to-cash solutions, making it the top choice over Oracle CPQ for your business needs.' },
            { hid: 'keywords', name: 'keywords', content: 'Oracle CPQ, alternative to oracle cpq, competitors of oracle CPQ, the best alternative to oracle cpq, best customizable quoting and configuration solution, other alternatives to oracle cpq, CPQ alternatives, Oracle CPQ alternative, CPQ in Oracle, Quote-to-cash solutions in Oracle, CPQ Pricing Comparison, DealDox CPQ vs Oracle CPQ' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/alternative-to-oracle-cpq' }
        ],
    },
};


</script>

<style>
@import url(../assets/css/pages-css/Comparision.css);
</style>
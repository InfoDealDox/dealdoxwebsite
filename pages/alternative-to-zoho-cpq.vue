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
                <FirstTable headerOne="DealDox CPQ" headerTwo="Zoho CPQ " :firstColumn="DealDoxs"
                    :secondColumn="Zoho_CPQ" />

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
                "Ideal for businesses of all sizes, from small startups to large enterprises, offering flexibility and scalability.",
                "Known for its intuitive, easy-to-navigate interface, reducing the learning curve and enabling faster implementation.",
                "Offers multi-language capabilities, making it ideal for global businesses.",
                "Seamlessly integrates with a wide range of CRM and ERP systems, providing greater flexibility.",
                "Offers flexible, competitive pricing with a pay-as-you-go model and tiered plans, making it more cost-effective for businesses of all sizes.",
            ],
            Zoho_CPQ: [
                "Primarily designed for small to mid-sized businesses, with less focus on scalability for larger enterprises.",
                "While user-friendly, it may require a bit more training due to its broader functionality, especially for complex configurations.",
                "Limited support for multi-language functionality, making it less suitable for international operations.",
                "Best integrates within the Zoho ecosystem but may require additional customization for integration with external systems.",
                "Has a more fixed pricing model, typically more affordable for smaller businesses but can become expensive as your needs grow."
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
                console.log("New Compare Data", response.data?.data?.attributes?.comparingall[3]);
                this.compareData = response.data?.data?.attributes?.comparingall[3];
            } catch (error) {
                console.error("Error fetching comparison data:", error);
            }
        },
    },
    head: {
        title: 'DealDox CPQ vs Zoho CPQ: Best Alternative for Customizable Quoting Solutions|DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Looking for a Zoho CPQ alternative? Dealdox CPQ offers better customization, flexible pricing, and seamless quote-to-cash solutions, making it the top choice over Zoho CPQ for your business.' },
            { hid: 'keywords', name: 'keywords', content: 'Zoho CPQ, alternative to zoho cpq, competitors of zoho CPQ, the best alternative to zoho cpq, best customizable quoting and configuration solution, other alternatives to zoho cpq, CPQ alternatives, Zoho CPQ alternative, CPQ in Zoho, Quote-to-cash solutions in Zoho, CPQ Pricing Comparison, DealDox CPQ vs Zoho CPQ ' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/alternative-to-zoho-cpq' }
        ],
    },
};


</script>

<style>
@import url(../assets/css/pages-css/Comparision.css);
</style>
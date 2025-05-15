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
                <FirstTable headerOne="DealDox CPQ" headerTwo="DealHub CPQ" :firstColumn="DealDoxs"
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

                "Often praised for its intuitive drag-and-drop editor, making it easier for sales teams to navigate and create quotes. ",
                "Strong emphasis on automation with features like auto-reminders, document expiration, and automated workflows. ",
                "Robust security features including granular role-based permissions to control data access and maintain compliance. ",
                "Integrates seamlessly with a wide range of CRM and other business applications. ",
                "Designed to scale with your business growth, accommodating increasing complexity and data volumes."


            ],
            salesforces: [

                "May have a steeper learning curve for some users. ",
                "Offers automation capabilities, but may not be as extensive as DealDox. ",
                "Provides security features, but the level of granularity may vary. ",
                "Offers integrations with various systems, but the breadth and depth may differ. ",
                "Offers scalability, but the ease of scaling may vary based on specific business needs.   "


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
                console.log("New Compare Data", response.data?.data?.attributes?.comparingall[5]);
                this.compareData = response.data?.data?.attributes?.comparingall[5];
            } catch (error) {
                console.error("Error fetching comparison data:", error);
            }
        },
    },

    head: {
        title: 'DealDox CPQ vs DealHub CPQ: The Top Customizable Quoting Solution| DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Switch to DealDox CPQ for better customization and flexibility. Compare it with DealHub CPQ to see why DealDox is the superior choice for quote-to-cash solutions.' },
            { hid: 'keywords', name: 'keywords', content: 'DealHub CPQ, alternative to DealHub cpq, competitors of DealHub CPQ, the best alternative to dealhub cpq, best customizable quoting and configuration solution, other alternatives to dealhub cpq, CPQ alternatives, DealHub CPQ alternative, CPQ in DealHub, Quote-to-cash solutions in DealHub, CPQ Pricing Comparison, DealDox CPQ vs DealHub CPQ' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/alternate-to-dealhub-cpq' }
        ],
    },
};


</script>

<style>
@import url(../assets/css/pages-css/Comparision.css);
</style>
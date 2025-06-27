<template>

    <div class="app-download-area ">
        <div class="">
            <h2 class="pricing-faq-freq-question">Frequently Asked Questions</h2>
            <p style="text-align: center;">
                Can’t find your query listed?
                <span class="">
                    <NuxtLink to="/contact" class="pricing-write-us">Write us</NuxtLink> your query
                </span>
            </p>
        </div>



        <div class="pricing-faq-accordion">
            <div v-for="(faq, index) in faqs" :key="index" class="pricing-accordion-item">
                <div class="pricing-answer-question-body" @click="toggle(index)">
                    <div class="pricing-accordion-header">
                        <button class="pricing-accordion-title">

                            <span style="text-align: left;">{{ faq.question }} </span>

                            <span class="pricing-accordion-toggle-icon">
                                <i v-if="activeIndex === index" class="bi bi-dash-circle-fill"
                                    id="dash-circle-pricing"></i> <i v-else class="bi bi-plus-circle-fill"
                                    id="dash-circle-pricing"></i>
                            </span>
                        </button>
                    </div>
                    <div class="pricing-accordion-body" v-show="activeIndex === index">
                        <p class="pricing-accordion-body-p">
                            {{ faq.answer }}
                            <NuxtLink v-if="faq.link" :to="faq.link.url" class="pricing-write-us"
                                style="text-decoration: none;">{{ faq.link.text }}
                            </NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>



    </div>

</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0, // Track which FAQ is currently active
            faqs: [
                {
                    question: "How can automated document generation improve quote-to-cash process? ",
                    answer: `Automated document creation speeds up the generation of accurate and professional documents. It minimizes errors, ensures compliance, and accelerates deal closure.<br/>  This efficiency boosts revenue by shortening the time it takes to generate income, supporting your overall quote-to-cash process. `
                },
                {
                    question: "What types of business processes do DealDox’s document automation feature automate? ",
                    answer: `DealDox’s document generation feature helps businesses with a wide range of deal documents, including proposals, quotations, costing sheets, and delivery reports.  `,
                    
                },

                {
                    question: "Does DealDox document generation meet brand guidelines? ",
                    answer: `You can use document automation tools with templates that match your brand guidelines. These templates ensure that all documents consistently use the same logos, fonts, and color schemes.  `
                },
                {
                    question: "What is document generation? ",
                    answer: `Document generation simplifies the generation of deal documents. It pulls data from various sources to generate a document filled with the necessary information. This way, you get a ready-to-share document without the hassle of manual creation. `

                },
               

            ]
        };
    },
    methods: {
        // Toggle the active FAQ index when clicked
        toggle(index) {
            // Toggle the active index, or close the open FAQ if it's clicked again
            this.activeIndex = this.activeIndex === index ? null : index;
        }
    }
};
</script>


<style>
@import url('../../assets/css/pages-css/PricingHeaderFooter.css');
</style>

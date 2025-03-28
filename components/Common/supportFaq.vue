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
                    question: "What support can I expect? ",
                    answer: `At DealDox, we are committed to ensuring that you have the best experience using our Configure, Price, and Quote (CPQ) platform. Our support team is here to assist you with any questions, issues, or configuration needs you may have. Here's what you can expect from DealDox support: Email Support, Phone Support, Dedicated Account Manager and Regular Product Updates & Enhancements. `
                },
                {
                    question: "How is my data managed? ",
                    answer: `At DealDox, we prioritize the security, privacy, and control of your data. By using best practices and adhering to international standards, we ensure that your data is managed in a secure and responsible way.You can find useful information by visting this page: `,
                    link: { url: "/security", text: "security" },
                },

                {
                    question: " Is there any demo available for using Dealdox CPQ?  ",
                    answer: `Yes, we offer product demos to help you and your team get the most out of the Dealdox CPQ platform. Our experts can guide you through setup, advanced features, and best practices. `
                },
                {
                    question: "How quickly can I expect a response from support? ",
                    answer: `Our support team provides timely assistance and will respond to your inquiry as quickly as possible. We prioritize urgent issues and aim to resolve them promptly.  `,


                },
                {
                    question: "What if I need assistance with system integrations? ",
                    answer: `If you require help with integrating DealDox CPQ with other systems (CRM, ERP, etc.), our support team can provide guidance. We recommend providing specific details about your integration needs when reaching out to ensure we can assist you effectively. `

                },
                {
                    question: "Does DealDox CPQ support multiple languages? ",
                    answer: `Yes, DealDox CPQ supports multiple languages. We support 46 languages (24 Global and 22 Indian). Afrikaans, Akan, Albanian, Amharic, Arabic, Armenian, Assamese, Azerbaijani, Basque, Belarusian, Bengali, Bislama, Bosnian, Bulgarian, Burmese, Cantonese, Catalan, Chichewa, Chinese (Mandarin), Croatian, Czech, Danish, Dari, Dhivehi, Dutch, Dzongkha, English, Estonian, Fijian, Finnish, French, Georgian, German, Greek, Gujarati, Haitian Creole, Hausa, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Irish, Italian, Japanese, Javanese, Kannada, Kazakh, Khmer, Kinyarwanda, Korean, Kurdish, Kyrgyz, Lao, Latvian, Lithuanian, Luxembourgish, Macedonian, Malagasy, Malay, Malayalam, Maltese, Maori, Marathi, Mongolian, Nepali, Norwegian, Pashto, Persian, Polish, Portuguese, Punjabi, Quechua, Romanian, Russian, Samoan, Serbian, Shona, Sindhi, Sinhala, Slovak, Slovenian, Somali, Spanish, Swahili, Swedish, Tagalog, Tajik, Tamil, Telugu, Thai, Tibetan, Tigrinya, Tok Pisin, Turkish, Turkmen, Ukrainian, Urdu, Uzbek, Vietnamese, Welsh, Xhosa, Yoruba, Zulu.  `
                },
                {
                    question: "More Questions?  ",
                    answer: `Mail us your query to `,
                    link: { url: "/demo", text: " support@dealdox.io." },
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

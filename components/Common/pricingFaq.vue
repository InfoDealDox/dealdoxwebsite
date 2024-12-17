<template>

    <div class="app-download-area ">
        <div class="">
            <h2 class="pricing-faq-freq-question">Frequently Asked Questions</h2>
            <p style="text-align: center;">
                Can’t find your query listed?
                <span class="">
                    <NuxtLink to="/contact-us" class="pricing-write-us">Write us</NuxtLink> your query
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
                    question: "Is DealDox a registered company? ",
                    answer: `Yes, DealDox Software Private Limited is a registered company & the CIN is U62090KA2024PTC192045. You can verify this with the Indian Ministry of Corporate Affairs. We are registered with Startup India and DUN & Bradstreet.`
                },
                {
                    question: "Can I get a demo of DealDox CPQ? ",
                    answer: `Yes, we would be happy to demonstrate DealDox CPQ with personalized proof of concept in a 60-minute virtual meeting. To schedule your personalized session, you can email us at `,
                    link: { url: "/demo", text: "support@dealdox.io." },
                },

                {
                    question: "Will you be able to offer all the services listed in the subscription? ",
                    answer: `Yes, you will receive all the services listed in the subscription. Our dynamic R&D team and expert CPQ consultants are dedicated to meeting your needs and providing custom solutions. `
                },
                {
                    question: "How do you secure my data? Is it safe?",
                    answer: `Your data security is our top priority. We ensure 24/7/365 monitoring of our facilities with video surveillance and biometric access controls. We also have sophisticated systems to detect fire, flood, and theft. Our network security system utilizes cutting-edge encryption, along with advanced intrusion detection and prevention technologies.  Discover more about `,
                    link: { url: "/security", text: "DealDox’s data protection measures." },

                },
                {
                    question: "What payment methods do you accept? ",
                    answer: `We accept the following payment methods Debit and Credit Cards (Mastercard, RuPay, Visa), EMI (Instacred), Wallets (Airtel Money, Freecharge, Jio Money, Ola Money, and Mobikwik), and UPI. For more details, please contact us at`,
                    link: { url: "/demo", text: " support@dealdox.io." },

                },
                {
                    question: "Does DealDox CPQ support multiple languages? ",
                    answer: `Yes, DealDox CPQ supports multiple languages. We support 46 languages (24 Global and 22 Indian). Afrikaans, Akan, Albanian, Amharic, Arabic, Armenian, Assamese, Azerbaijani, Basque, Belarusian, Bengali, Bislama, Bosnian, Bulgarian, Burmese, Cantonese, Catalan, Chichewa, Chinese (Mandarin), Croatian, Czech, Danish, Dari, Dhivehi, Dutch, Dzongkha, English, Estonian, Fijian, Finnish, French, Georgian, German, Greek, Gujarati, Haitian Creole, Hausa, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Irish, Italian, Japanese, Javanese, Kannada, Kazakh, Khmer, Kinyarwanda, Korean, Kurdish, Kyrgyz, Lao, Latvian, Lithuanian, Luxembourgish, Macedonian, Malagasy, Malay, Malayalam, Maltese, Maori, Marathi, Mongolian, Nepali, Norwegian, Pashto, Persian, Polish, Portuguese, Punjabi, Quechua, Romanian, Russian, Samoan, Serbian, Shona, Sindhi, Sinhala, Slovak, Slovenian, Somali, Spanish, Swahili, Swedish, Tagalog, Tajik, Tamil, Telugu, Thai, Tibetan, Tigrinya, Tok Pisin, Turkish, Turkmen, Ukrainian, Urdu, Uzbek, Vietnamese, Welsh, Xhosa, Yoruba, Zulu.  `
                },
                {
                    question: "Are your contracts flexible? ",
                    answer: `You have no contractual obligations with DealDox CPQ. It's a flexible pay-as-you-go service & subscription plans, available on a monthly or yearly basis, allowing you to adjust your plan as needed. `
                },
                {
                    question: "Can I switch the pricing plans? ",
                    answer: `Absolutely! You can log in to DealDox CPQ, click on the Upgrade link on the Home page, and follow the instructions on the Pricing page to change your plan. `
                },
                {
                    question: "How do you support businesses signing up for DealDox CPQ? ",
                    answer: `For our paid subscribers, we offer round-the-clock support. Additionally, specific paid plans are available if you require dedicated support. `
                },
                {
                    question: "Is there any guidance available for setting up DealDox CPQ for our business?  ",
                    answer: `Absolutely, we provide end-to-end services covering all aspects from requirement gathering to setup and onboarding. We offer knowledge articles and set up DealDox yourself, which are available for the respective subscription plans.   `
                },
                {
                    question: "Does DealDox CPQ have a free trial? ",
                    answer: "There is no free trial version, but you can opt for the pay-as-you-go option. And, the Enterprise plan comes with a 30-day free trial period. "
                },
                {
                    question: "More Questions?  ",
                    answer: `You can email us at `,
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

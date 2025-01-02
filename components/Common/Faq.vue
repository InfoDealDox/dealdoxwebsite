<template>
    <div class="app-download-area tb-20">
        <div class="container">
            <div class="row align-items-center">
                <div class="section-title-home pt-175" id="Home-frequently-faq">
                    <span class="removed-h1">Frequently asked questions</span>
                    <p>Can’t find your query listed? <span class="sub-title-faq">
                            <NuxtLink to="/contact-us">
                                Write us</NuxtLink>
                        </span> your query</p>
                </div>
                <div class="col-lg-2 col-md-12"></div>
                <div class="col-lg-8 col-md-12">
                    <div class="faq-accordion">
                        <accordion class="home">
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        What is CPQ? </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>CPQ stands for Configure, Price, Quote solution that streamlines the sales
                                            process by allowing users to create accurate quotes quickly and efficiently.
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        How does DealDox CPQ ensure pricing accuracy?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>DealDox CPQ automates pricing rules and applies configurable logic to ensure
                                            that quotes are generated based on the most current pricing information and
                                            customer-specific requirements.
                                        </p>

                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        Is there multi-language support in DealDox CPQ?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Absolutely! DealDox CPQ supports multiple languages for quote generation,
                                            helping you cater to a diverse clientele.
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        How secure is DealDox CPQ?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>DealDox CPQ is committed to maintaining high-security standards, including
                                            data encryption and compliance with industry regulations such as HIPAA and
                                            GDPR.
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        Can I access DealDox CPQ on mobile devices?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Yes, DealDox CPQ offers a mobile app that allows users to create and manage
                                            quotes on the go, ensuring flexibility and productivity.
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>



                        </accordion>
                    </div>
                </div>
                <div class="col-lg-2 col-md-12"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/Accordion";
import AccordionItem from "../Common/AccordionItem";

export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem,
    },
}
</script>
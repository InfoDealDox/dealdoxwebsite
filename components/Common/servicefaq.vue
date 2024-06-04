<template>
    <div class="app-download-area pt-70">
        <div class="container">
            <div class="features-content-improve-sales">
                <div class="section-title">
                    <h2>Frequently asked questions</h2>
                    <p>Can’t find your query listed? <span class="sub-title-faq"><NuxtLink to="/contact-us">
                            Write us</NuxtLink></span> your query</p>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-2 col-md-12"></div>
                <div class="col-lg-8 col-md-12">
                    <div class="faq-accordion">
                        <accordion>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                     What is CPQ software, and why is it important for my business? </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>CPQ software streamlines sales processes by configuring products, setting pricing, and generating quotes, making it vital for improving sales operations and driving revenue. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                      How can I choose the best CPQ software for my business? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Select the best CPQ software by assessing your specific needs, industry fit, user-friendliness, scalability, integration capabilities, and seeking recommendations. 
                                        </p>
                                 </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                       What are some of the best CPQ tools available in the market? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Top CPQ tools include Salesforce CPQ, Oracle CPQ Cloud, SAP CPQ, PROS Smart CPQ, and Apptivo, each with unique features and advantages. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                     How can the best CPQ software benefit the services industry?              
                                     </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>The best CPQ software helps service providers configure customized service packages, price accurately, and generate quotes efficiently, improving the sales process and service delivery. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                        Can CPQ software integrate with other business systems? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>  Yes, CPQ software can integrate with CRM, ERP, and e-commerce platforms, ensuring a unified and efficient sales process throughout your organization. 
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
</div></template>

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
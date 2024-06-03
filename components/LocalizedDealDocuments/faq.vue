<template>
    <div class="app-download-area pt-65">
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
                                     What is the significance of DealDox CPQ's multilingual document capabilities?   </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>DealDox CPQ's multilingual capabilities enable users to create deal documents in various languages, facilitating effective communication and negotiation in international markets. 

   
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                     How does multilingual document creation in DealDox quotation software benefit businesses in global markets?  
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>It allows businesses to navigate diverse linguistic landscapes, expand their reach, and close deals faster by tailoring documents to the language preferences of international clients.  
                                        </p>
                                 </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                     How does using multilingual documents enhance sales effectiveness in DealDox quoting tool?  
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>By speaking the language of prospects, businesses demonstrate a deep understanding of their needs and preferences, elevating the overall effectiveness of sales communication and negotiation.  
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                  Is there a limit to the number of languages supported by DealDox CPQ for document creation?              
                                     </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>DealDox CPQ is designed to support a wide range of languages, and the platform can be configured to include additional languages based on specific business requirements.  
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                       Can users customize the language preferences in DealDox CPQ for different clients?  
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p> Yes, users have the flexibility to customize language preferences based on individual client requirements, allowing for a personalized and tailored approach in deal document creation. 
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
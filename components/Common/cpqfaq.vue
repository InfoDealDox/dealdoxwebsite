<template>
    <div class="app-download-area pt-65">
        <div class="container">
            <div class="features-content-improve-sales">
                <div class="section-title">
                    <h1>Frequently asked questions</h1>
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
                                     

What is CPQ, and how does it integrate with CRM?   </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>CPQ automates quoting; integration with CRM syncs data for seamless quoting and proposal processes. 

   
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                     Which CRM systems are compatible with CPQ integration? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>CPQ integrates with popular CRMs like Salesforce, Hubspot, Zoho and Microsoft Dynamics; compatibility varies. 
                                        </p>
                                 </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                    How does CPQ integration improve sales processes within CRM? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>CPQ enhances efficiency by eliminating manual data entry, reducing errors, and ensuring consistency in quotes. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                 Can CPQ integration help in maintaining pricing consistency across CRM and other systems?        
                                     </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Yes, it synchronizes pricing and discounting rules, ensuring consistency in CPQ and CRM. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                       How does CPQ integration impact quote and proposal generation? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p> CPQ Integration optimizes the process by accessing CRM data, speeding up accurate quote and proposal creation. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                              <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                       Is CPQ integration with CRM scalable for growing businesses? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p> Yes, it's scalable, adapting to business growth by handling increased data volumes and evolving requirements. 
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
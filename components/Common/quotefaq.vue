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
                                    What is an automated quotation software, and how does it work?  </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>An automated quotation system is a technology that uses algorithms and predefined rules to generate price quotes without manual intervention. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                      How does automated quotation software work? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>It works by analyzing input data, such as product details and customer requirements, to produce accurate and timely quotations. 
                                        </p>
                                 </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                       What are the key benefits of using an automated quotation tool for businesses?  
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Automated quotation tool offer advantages such as increased operational efficiency, reduced errors, faster response times, and improved customer satisfaction. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                    Can an automated quotation software be customized to fit the specific needs of my business?               
                                     </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Yes, automated quotation systems are designed to be customizable. 
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                       What types of businesses or industries can benefit from automated quotations? 
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p> Whether in manufacturing, services, or other sectors, the adaptability of these systems makes them valuable for enhancing efficiency and accuracy in generating quotes. 
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
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
Why is the implementation of approval workflows crucial in business processes?     </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Approval workflows are vital to business processes as they ensure that documents, such as quotes or proposals, meet established criteria before finalization. Their importance lies in maintaining consistency, compliance, and overall document quality, leading to informed decision-making and increased accountability. 

   
                                        </p>
                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
                                 What exactly is an approval workflow engine?  
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>An approval workflow engine is a system that automates and manages the sequence of steps involved in approving documents or processes within an organization. It orchestrates the flow of information and approvals, enhancing efficiency and reducing the likelihood of errors. 
                                        </p>
                                 </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-title">
What sets workflows and the approval process apart?  
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>Workflows encompass a broader range of processes, defining how tasks move through various stages. On the other hand, the approval process specifically focuses on obtaining authorization for a document or action. While workflows are more general, approval processes are a subset designed for specific decision points within a workflow. 
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
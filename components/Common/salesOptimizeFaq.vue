<template>
    <div class="app-download-area tb-20">
        <div class="container">
            <div class="row align-items-center">
                <div class="section-title-home pt-175" id="Home-frequently-faq">
                    <span class="removed-h1">Frequently asked questions</span>
                    <p style="text-align: center;">Can’t find your query listed? <span class="sub-title-faq">
                            <NuxtLink to="/contact">
                                Write us</NuxtLink>
                        </span> your query</p>
                </div>
                <div class="col-lg-2 col-md-12"></div>
                <div class="col-lg-8 col-md-12">
                    <div class="faq-accordion">
                        <accordion class="home">
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <h3><button class="accordion-title">
                                            How do DealDox and Salesforce work together? </button></h3>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>DealDox CPQ's <NuxtLink to='/salesforce-cpq-integration'>integration with
                                                Salesforce</NuxtLink> enhances your CRM capabilities
                                            through seamless workflow automation.
                                        </p>
                                        <span>Using DealDox CPQ with Salesforce helps you: </span>
                                        <ul>

                                            <li>
                                                <NuxtLink to='/quoting-software'>Streamline workflows</NuxtLink> to
                                                minimize manual tasks and improve efficiency.
                                            </li>
                                            <li> Save time with automated business processes in Salesforce. </li>
                                            <li>Save time with automated business processes in Salesforce. </li>
                                        </ul>

                                        <span>These features allow you to focus more on driving revenue, without the
                                            need to switch between different platforms. </span>

                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <h3><button class="accordion-title">
                                            Who could benefit from DealDox CPQ for Salesforce?
                                        </button></h3>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>DealDox CPQ's integration with Salesforce enhances your CRM capabilities
                                            through seamless workflow automation.
                                        </p>

                                        <ul>

                                            <li><b>Sales:</b> Automate quote generation, <NuxtLink
                                                    to='/quoting-software'>simplify approvals,</NuxtLink> and
                                                accelerate deal closures with precise pricing.</li>
                                            <li><b>Operations: </b>Optimize Salesforce workflows for smoother, more
                                                efficient internal processes.</li>
                                            <li><b>Finance: </b>Gain reliable customer and sales data to improve revenue
                                                forecasting and financial planning.</li>
                                            <li><b>Legal: </b>Manage contracts effortlessly with built-in compliance and
                                                approval features.</li>

                                        </ul>

                                        <span>Any team using Salesforce can maximize their process efficiency with
                                            DealDox CPQ. </span>

                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <h3><button class="accordion-title">
                                            How can DealDox CPQ for Salesforce accelerate the revenue cycle?
                                        </button></h3>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>DealDox CPQ for Salesforce accelerates the revenue cycle by:
                                        </p>

                                        <ul>

                                            <li><b>Automating data updates: </b>Keep Salesforce records current without
                                                manual input.</li>
                                            <li><b>Streamlining workflow automation: </b> Ensure every step of the sales
                                                process moves efficiently and without delay.</li>
                                            <li><b>Streamlining approvals: </b>Accelerate the approval process to close
                                                deals faster. </li>
                                            <li><b>Enhancing accuracy: </b>Minimize errors and maintain data consistency
                                                across your system.</li>

                                        </ul>

                                        <span>By automating these essential tasks, your team can close deals faster,
                                            capture revenue more efficiently, and eliminate bottlenecks in the sales
                                            cycle. </span>

                                    </div>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <h3><button class="accordion-title">
                                            Does DealDox optimize other customer relationship management (CRM) software
                                            besides Salesforce?
                                        </button></h3>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body">
                                        <p>DealDox primarily focuses on optimizing Salesforce, but our solutions are
                                            designed to integrate seamlessly with various CRM platforms, providing
                                            enhanced efficiency and automation to meet your business needs.
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
import Accordion from "../Common/Accordion.vue";
import AccordionItem from "../Common/AccordionItem.vue";

export default {
    name: 'salesOptimizeFaq',
    components: {
        Accordion,
        AccordionItem,
    },
}
</script>

<style>
@media (max-width:750px) {
    .accordion-title {
        padding: 0 13px 10px 0px !important;
    }



}

.removed-h1 {
    color: black !important;
}
</style>
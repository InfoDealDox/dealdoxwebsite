<template>
    <div>
        <div class="design-ui-header">

            <span class="so-left-first-part-h1" style="color: black;">Optimize pre-sales, customers, and data with
                Salesforce Optimization software</span>

            <span class="salesforce-optimization-lowercontent">DealDox’s <NuxtLink to="/salesforce-cpq-integration">
                    integration with Salesforce</NuxtLink> makes data
                management easy. <br class="no-break-rquired"> Navigate, automate, and handle your
                data efficiently from a single platform. </span>
        </div>
        <div class="sales-optimize-new-background-image">
            <div class="sales-optimize-new-background-image-subcontainer">
                <div class="sales-optimize-new-background-sub-image">
                    <div v-for="(data, index) in questionAndAnswer" :key="index" class="sales-optimize-indivisual-new"
                        v-if="index == 0" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave"
                        @click="toggleAnswer(index)">
                        <div v-if="index % 2 == 0" class="q_a_image_div"><img :src="data.image" alt=""
                                class="q_a_image">
                        </div>
                        <div v-if="isMobile ? clickedIndex === index : hoveredIndex === index"
                            class="q_a_answer_content"><span>{{ data.answer }}</span><i class="bi bi-check-circle-fill"
                                id="so-green-fill"></i></div>
                        <div v-else class="q_a_question_content"><span>{{ data.question }}</span><i
                                class="bi bi-question-circle-fill" id="sales-optimize-bg"></i></div>
                        <div v-if="index % 2 != 0" class="q_a_image_div"><img :src="data.image" alt=""
                                class="q_a_image">
                        </div>

                    </div>
                </div>
                <div class="sales-optimize-second-sub-image">
                    <div v-for="(data, index) in questionAndAnswer" :key="index" class="sales-optimize-indivisuals"
                        v-if="index != 0" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave"
                        @click="toggleAnswer(index)">
                        <div v-if="index % 2 == 0" class="q_a_image_div"><img :src="data.image" alt=""
                                class="q_a_image">
                        </div>
                        <div v-if="isMobile ? clickedIndex === index : hoveredIndex === index"
                            class="q_a_answer_content"><span>{{ data.answer }}</span><i class="bi bi-check-circle-fill"
                                id="so-green-fill"></i></div>
                        <div v-else class="q_a_question_content"><span>{{ data.question }}</span><i
                                class="bi bi-question-circle-fill" id="sales-optimize-bg"></i></div>


                        <div v-if="index % 2 != 0" class="q_a_image_div"><img :src="data.image" alt=""
                                class="q_a_image">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: "SalesDynamic",
    data() {
        return {
            hoveredIndex: null,
            clickedIndex: null,
            isMobile: false,
            questionAndAnswer: [

                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_1.png'),
                    question: "How to ease Excel to Salesforce data transfers?",
                    answer: "With DealDox, you can handle and update Salesforce records from Excel, saving time and eliminating duplicate entries."
                },
                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_2.png'),
                    question: " How can I automate Salesforce workflows without coding skills?",
                    answer: "You can build and automate Salesforce workflows without coding, saving time and minimizing manual effort with DealDox."
                },
                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_3.png'),
                    question: "How do I optimize complex sales workflows and eliminate manual tasks in Salesforce?",
                    answer: "Optimize data management and automate workflows for quicker sales using DealDox Salesforce automation."
                }
            ]
        }
    },
    methods: {
        handleMouseOver(index) {
            if (!this.isMobile) {
                this.hoveredIndex = index;
            }
        },
        handleMouseLeave() {
            if (!this.isMobile) {
                this.hoveredIndex = null;
            }
        },
        toggleAnswer(index) {
            if (this.isMobile) {
                this.clickedIndex = this.clickedIndex === index ? null : index;
            }
        }
    },
    mounted() {
        this.isMobile = window.innerWidth <= 768; // Detect mobile device
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth <= 768;
        });
    }
}

</script>

<style>
@import url('../../assets/css/pages-css/salesOptimize.css');
</style>

<!-- 
<template>
    <div>
        <div class="design-ui-header">
            <span class="so-left-first-part-h1" style="color: black;">Optimize pre-sales, customers, and data with
                Salesforce Optimization Software</span>

            <span class="salesforce-optimization-lowercontent">
                DealDox’s <NuxtLink to="/salesforce-cpq-integration">integration with Salesforce</NuxtLink> makes data
                management easy. <br class="no-break-rquired"> Navigate, automate, and handle your data efficiently from a single platform.
            </span>
        </div>

        <div class="sales-optimize-new-background-image">
            <div class="sales-optimize-new-background-image-subcontainer">
                <div class="sales-optimize-new-background-sub-image">
                    <div v-for="(data, index) in questionAndAnswer" :key="index" class="sales-optimize-indivisual-new"
                        v-if="index == 0"
                        @mouseover="handleMouseOver(index)"
                        @mouseleave="handleMouseLeave"
                        @click="toggleAnswer(index)">
                        
                        <div v-if="index % 2 == 0" class="q_a_image_div">
                            <img :src="data.image" alt="" class="q_a_image">
                        </div>

                        <div v-if="isMobile ? clickedIndex === index : hoveredIndex === index" class="q_a_answer_content">
                            <span>{{ data.answer }}</span>
                            <i class="bi bi-check-circle-fill" id="so-green-fill"></i>
                        </div>
                        <div v-else class="q_a_question_content">
                            <span>{{ data.question }}</span>
                            <i class="bi bi-question-circle-fill" id="sales-optimize-bg"></i>
                        </div>

                        <div v-if="index % 2 != 0" class="q_a_image_div">
                            <img :src="data.image" alt="" class="q_a_image">
                        </div>
                    </div>
                </div>

                <div class="sales-optimize-second-sub-image">
                    <div v-for="(data, index) in questionAndAnswer" :key="index" class="sales-optimize-indivisuals"
                        v-if="index != 0"
                        @mouseover="handleMouseOver(index)"
                        @mouseleave="handleMouseLeave"
                        @click="toggleAnswer(index)">

                        <div v-if="index % 2 == 0" class="q_a_image_div">
                            <img :src="data.image" alt="" class="q_a_image">
                        </div>

                        <div v-if="isMobile ? clickedIndex === index : hoveredIndex === index" class="q_a_answer_content">
                            <span>{{ data.answer }}</span>
                            <i class="bi bi-check-circle-fill" id="so-green-fill"></i>
                        </div>
                        <div v-else class="q_a_question_content">
                            <span>{{ data.question }}</span>
                            <i class="bi bi-question-circle-fill" id="sales-optimize-bg"></i>
                        </div>

                        <div v-if="index % 2 != 0" class="q_a_image_div">
                            <img :src="data.image" alt="" class="q_a_image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SalesDynamic",
    data() {
        return {
            hoveredIndex: null,
            clickedIndex: null,
            isMobile: false,
            questionAndAnswer: [
                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_1.png'),
                    question: "How to ease Excel to Salesforce data transfers?",
                    answer: "With DealDox, you can handle and update Salesforce records from Excel, saving time and eliminating duplicate entries."
                },
                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_2.png'),
                    question: "How can I automate Salesforce workflows without coding skills?",
                    answer: "You can build and automate Salesforce workflows without coding, saving time and minimizing manual effort with DealDox."
                },
                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_3.png'),
                    question: "How do I optimize complex sales workflows and eliminate manual tasks in Salesforce?",
                    answer: "Optimize data management and automate workflows for quicker sales using DealDox Salesforce automation."
                }
            ]
        };
    },
    methods: {
        handleMouseOver(index) {
            if (!this.isMobile) {
                this.hoveredIndex = index;
            }
        },
        handleMouseLeave() {
            if (!this.isMobile) {
                this.hoveredIndex = null;
            }
        },
        toggleAnswer(index) {
            if (this.isMobile) {
                this.clickedIndex = this.clickedIndex === index ? null : index;
            }
        }
    },
    mounted() {
        this.isMobile = window.innerWidth <= 768; // Detect mobile device
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth <= 768;
        });
    }
};
</script>

<style>
@import url('../../assets/css/pages-css/salesOptimize.css');

/* Optional: Add smooth transition */
.q_a_answer_content, .q_a_question_content {
    transition: all 0.3s ease-in-out;
}

</style> -->

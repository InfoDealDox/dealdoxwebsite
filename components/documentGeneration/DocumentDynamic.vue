<template>
    <div>
        <div class="design-ui-header">

            <span class="so-left-first-part-h1" style="color: black;">Optimize pre-sales, customers, and data with
                Salesforce Optimization software</span>


        </div>
        <div class="sales-optimize-new-background-image">
            <div class="sales-optimize-new-background-image-subcontainer">
                <div class="sales-optimize-new-background-sub-image">
                    <div v-for="(data, index) in questionAndAnswer" :key="index" class="sales-optimize-indivisual-new"
                        v-if="index == 0" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave"
                        @click="toggleAnswer(index)">
                        <div v-if="index % 2 == 0" class="q_a_image_div"><img :src="data.image" alt="" class="q_a_image"
                                loading="lazy">
                        </div>
                        <div v-if="isMobile ? clickedIndex === index : hoveredIndex === index"
                            class="q_a_answer_content"><span>{{ data.answer }}</span><i class="bi bi-check-circle-fill"
                                id="so-green-fill"></i></div>
                        <div v-else class="q_a_question_content"><span>{{ data.question }}</span><i
                                class="bi bi-question-circle-fill" id="sales-optimize-bg"></i></div>
                        <div v-if="index % 2 != 0" class="q_a_image_div"><img :src="data.image" alt="" class="q_a_image"
                                loading="lazy">
                        </div>

                    </div>
                </div>
                <div class="sales-optimize-second-sub-image">
                    <div v-for="(data, index) in questionAndAnswer" :key="index" class="sales-optimize-indivisuals"
                        v-if="index != 0" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave"
                        @click="toggleAnswer(index)">
                        <div v-if="index % 2 == 0" class="q_a_image_div"><img :src="data.image" alt="" class="q_a_image"
                                loading="lazy">
                        </div>
                        <div v-if="isMobile ? clickedIndex === index : hoveredIndex === index"
                            class="q_a_answer_content"><span>{{ data.answer }}</span><i class="bi bi-check-circle-fill"
                                id="so-green-fill"></i></div>
                        <div v-else class="q_a_question_content"><span>{{ data.question }}</span><i
                                class="bi bi-question-circle-fill" id="sales-optimize-bg"></i></div>


                        <div v-if="index % 2 != 0" class="q_a_image_div"><img :src="data.image" alt="" class="q_a_image"
                                loading="lazy">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: "DocumentDynamic",
    data() {
        return {
            hoveredIndex: null,
            clickedIndex: null,
            isMobile: false,
            questionAndAnswer: [

                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_1.png'),
                    question: "How can I combine data from different platforms into a single document? ",
                    answer: "DealDox makes it easy to pull data from any platform and combine it into one seamless document. "
                },
                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_2.png'),
                    question: "Can I generate multiple file formats instead of just one? ",
                    answer: "Yes, you can generate multiple file formats like PDF, Word, and Excel. "
                },
                {
                    image: require('../../assets/images/sales-optimize/salesforce_optimization_3.png'),
                    question: "How can I choose software that will scale with my growing business needs? ",
                    answer: "DealDox easily handles a large number of documents with dynamic imagery; you'll never need to switch vendors again! "
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

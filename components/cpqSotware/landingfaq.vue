<template>
    <div style="width: 90%;">
      <h2>Frequently Asked Questions</h2>
  

      <div v-for="(faq, index) in faqs" :key="index"  class="landing-qp-ans">
        <div @click="toggleFAQ(index)"  class="landing-faq-divs">
          <span class="landing-qp">{{ faq.question }}</span>
          <div class="bg-colorss">
          <span v-if="faq.open">-</span>
          <span v-else>+</span>
          </div>
        </div>
        <!-- Show answer if the question is open -->
        <div v-if="faq.open"  >
          <p class="landing-ans">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"LoadingFaq",
    data() {
      return {
    
        faqs: [
          {
            question: "What is CPQ software?",
            answer:
              "CPQ stands for Configure, Price, Quote. It's software designed to automate the sales quoting process.",
            open: false,
          },
          {
            question: "Why use CPQ instead of Excel?",
            answer:
              "DealDox CPQ, a sales quotation software, offers greater accuracy, efficiency, and scalability compared to Excel.",
            open: false,
          },
          {
            question: "Can CPQ handle complex product configurations?",
            answer:
              "Yes, CPQ is designed for complex products with multiple options and features.",
            open: false,
          },
          {
            question: "Does CPQ integrate with other systems?",
            answer:
              "Yes, CPQ software can integrate with CRM, ERP, and other business systems.",
            open: false,
          },
        ],
      };
    },
    methods: {
      // Toggle open/close state of a specific FAQ
      toggleFAQ(index) {
        this.faqs[index].open = !this.faqs[index].open;
      },
    },
  
  };
  </script>
  
  <style scoped>
  .faq-item {
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .faq-question {
    display: flex;
    justify-content: space-between;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
  }
  
  .faq-answer {
    margin-top: 10px;
    padding-left: 20px;
  }

.landing-faq-divs{
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px 0px;
}
.bg-colorss{
  background: #8272e7;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
.landing-ans{
  font-size: 14px;
}

  </style>
  
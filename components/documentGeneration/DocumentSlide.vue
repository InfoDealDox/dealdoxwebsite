<template>
  <div>
    <h2 class="Acheive_flwaless_document">Achieve flawless document accuracy with automated precision</h2>

    <!-- Navigation Buttons -->
    <div class="button-controls">
      <button v-for="(item, index) in contentList" :key="'btn' + index" @click="scrollToSection(index)"
        :class="{ active: currentIndex === index }">
        {{ item.header }}
      </button>
    </div>

    <div class="document_slide_container_box">
      <!-- Left Scrollable Content -->
      <div class="scroller-container" @scroll.passive="handleScroll" ref="container">
        <div v-for="(item, index) in contentList" :key="index" :ref="el => contentRefs[index] = el" class="content-box">
          <h3 class="content_box_title">{{ item.title }}</h3>
          <h4 class="content_box_subtitle_1">{{ item.subtitle_1 }}</h4>
          <span class="content_box_subContent_1">{{ item.subContent_1 }}</span>
          <h4 class="content_box_subtitle_2">{{ item.subtitle_2 }}</h4>
          <span class="content_box_subContent_2">{{ item.subContent_2 }}</span>
        </div>
      </div>

      <!-- Right Image Panel -->
      <div class="right-panel">
        <div class="right_panel_container">
          <img v-if="currentImage" :src="currentImage" :alt="'Image ' + (currentIndex + 1)" class="image-display" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentSlide",
  data() {
    return {
      currentIndex: 0,
      contentRefs: [],

      contentList: [
        {
          header: "Retrieve",
          title: "Retrieve data from any platform",
          subtitle_1: "Merge Data from Any Platform",
          subContent_1:
            "Easily integrate data from any platform, including your CRM, ERP, and other systems, directly into your documents.",
          subtitle_2: "Utilize Multiple Data Sources",
          subContent_2:
            "Access and combine data from various systems across your business into a single document, ensuring you deliver the right information to your customers seamlessly.",
          image: require('@/assets/images/document_automation/document_interlinks.png')
        },
        {
          header: "Generate",
          title: "Generate all types of documents",
          subtitle_1: "Versatile Document Creation at Your Fingertips",
          subContent_1:
            "You can easily create various documents in formats like PDF, Word, and Excel to meet all your business needs.",
          subtitle_2: "Grow your business easily",
          subContent_2:
            "Our solution addresses your business's immediate needs during growth and adapts to handle any volume and complexity as you grow.",
          image: require('@/assets/images/document_automation/document_type.png')
        },
        {
          header: "Share",
          title: "Share your documents",
          subtitle_1: "Send your documents across the globe",
          subContent_1:
            "Deliver your documents to any platform your business uses, from standard CRM systems to personalized customer portals.",
          subtitle_2: "Automatically email or WhatsApp your documents",
          subContent_2:
            "Get rid of the need for several steps to email a custom document. Our solution is integrated with WhatsApp and supports your email provider. You can send the documents with just one click.",
          image: require('@/assets/images/document_automation/cpq_document_share.png')
        }
      ]
    };
  },
  computed: {
    currentImage() {
      return this.contentList[this.currentIndex]?.image;
    }
  },
  methods: {
    handleScroll() {
      const containerTop = this.$refs.container.getBoundingClientRect().top;
      let closestIndex = 0;
      let closestDistance = Infinity;

      this.contentRefs.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      this.currentIndex = closestIndex;
    },
    scrollToSection(index) {
      const container = this.$refs.container;
      const el = this.contentRefs[index];
      if (el && container) {
        const containerTop = container.getBoundingClientRect().top;
        const elementTop = el.getBoundingClientRect().top;
        const scrollOffset = elementTop - containerTop + container.scrollTop;

        container.scrollTo({
          top: scrollOffset,
          behavior: 'smooth'
        });

        this.currentIndex = index;
      }
    }
  },
  mounted() {
    this.handleScroll();
  }
};
</script>

<style scoped>
.document_slide_container_box {
  display: flex;
}

.scroller-container {
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow-y: auto;
  padding: 1rem;
  scrollbar-width: none;
  flex: 1;
}

.right-panel {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.right_panel_container {
  padding: 1rem;
}

.image-display {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.content-box {
  padding: 1rem;
  min-height: 390px;
}

.button-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 1rem 0;
}

.button-controls button {
  padding: 4px 10px;
  border: none;
  background-color: #ccc;
  cursor: pointer;
  border-radius: 30px;
  font-size: 15px;
}

.button-controls button.active {
  background-color: #320157;
  color: white;
  font-weight: 500;
}

.content_box_title {
  font-size: 24px;
}

.content_box_subtitle_1,
.content_box_subtitle_2 {
  font-size: 18px;
}

.content_box_subContent_1,
.content_box_subContent_2 {
  font-size: 14px;
  color: #242424b3;
}

.Acheive_flwaless_document {
  text-align: center;
  font-family: 'Montserrat';
  padding: 0px 5px;
  width: 93%;
  margin: auto;
}

@media screen and (max-width:750px) {
  .scroller-container {
    max-height: 300px;
  }



}
</style>

<template>
  <div>
    <h2>Achieve flawless document accuracy with automated precision </h2>
    <div class="scroller-container" @scroll.passive="handleScroll" ref="container" >
      <!-- Left Content Section -->
      <div class="left-pane">
        <div v-for="(item, index) in contentList" :key="index" :ref="'content' + index" class="content-box">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>

      <!-- Right Image Section -->
      <div class="right-pane">
        <img v-if="currentImage" :src="currentImage" class="image-display" :alt="'Image ' + (currentIndex + 1)" />
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
      contentList: [
        {
          title: "Salesforce Optimization 1",
          text: "Streamline your lead management and automate workflows.",
          image: require('@/assets/images/sales-optimize/salesforce_optimization_1.png')
        },
        {
          title: "Salesforce Optimization 2",
          text: "Improve customer interactions and increase retention using data insights.",
          image: require('@/assets/images/sales-optimize/salesforce_optimization_2.png')
        },
        {
          title: "Salesforce Optimization 3",
          text: "Integrate third-party tools and enable real-time reporting.",
          image: require('@/assets/images/sales-optimize/salesforce_optimization_3.png')
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

      this.contentList.forEach((_, index) => {
        const el = this.$refs['content' + index][0]; // Vue 2 returns arrays for v-for refs
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerTop);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      this.currentIndex = closestIndex;
    }
  },
  mounted() {
    this.handleScroll(); // Initialize image on mount
  }
};
</script>


<style>
.scroller-container{
  height: 400px;
  
}



</style>
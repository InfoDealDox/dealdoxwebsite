<!-- <template>
  <div  style="display: flex; flex-direction: column;">
    <landingTwoPage1 :ebookref="ebookref" />
    <ebookDemo ref="ebookref" />
    <DealDoxFooter />
  </div>
</template>

<script>
import DealDoxFooter from '../layouts/DealDoxFooter.vue';
import landingTwoPage1 from '../components/cpqSotware/landingTwoPage1.vue';
import ebookDemo from '../components/cpqSotware/ebookDemo.vue';

export default {
  name: "dealdox-cpq-handbook",
  components: {
    landingTwoPage1,
    ebookDemo,
    DealDoxFooter
  },
  data() {
    return {
      ebookref: null,
      isReady: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.ebookref = this.$refs.ebookref;
      this.isReady = true;
    });
  }
};
</script> -->


<template>
  <div  style="display: flex; flex-direction: column;">
    <landingTwoPage1 :ebookref="ebookref" />
    <ebookDemo ref="ebookref" />
    <DealDoxFooter />
  </div>
</template>

<script>
import DealDoxFooter from '../layouts/DealDoxFooter.vue';
import landingTwoPage1 from '../components/cpqSotware/landingTwoPage1.vue';
import ebookDemo from '../components/cpqSotware/ebookDemo.vue';

export default {
  name: "dealdox-cpq-handbook",
  components: {
    landingTwoPage1,
    ebookDemo,
    DealDoxFooter
  },
  data() {
    return {
      ebookref: null,
      isReady: false,
    };
  },
  mounted() {
    // Use $nextTick to ensure ebookref is properly initialized after the DOM update
    this.$nextTick(() => {
      this.ebookref = this.$refs.ebookref;
      this.isReady = true; // Set isReady to true only after ebookref is initialized
    });
  }
};
</script>

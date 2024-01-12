<template>
  <div>
    <Navbar class="navbar-style-two" />
    <ThankYouPage />
    <TrackingImage />
    <DealDoxFooter />
  </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import ThankYouPage from '../components/ThankYou/ThankYouPage'
import DealDoxFooter from '../layouts/DealDoxFooter';
import TrackingImage from '~/components/ThankYou/TrackingImage.vue';

export default {
  components: {
    Navbar,
    ThankYouPage,
    TrackingImage,
    DealDoxFooter,
  },
  // created() {
  //   setTimeout(() => this.$router.push({ path: '/' }), 5000)
  // }
}
</script>
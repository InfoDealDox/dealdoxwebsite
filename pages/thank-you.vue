<template>
  <div>
    <Navbar class="navbar-style-two" />
    <ThankYouPage />
    <DealDoxFooter />
  </div>
</template>
  
<script>

import Navbar from '../layouts/Navbar';
import ThankYouPage from '../components/ThankYou/ThankYouPage'
import DealDoxFooter from '../layouts/DealDoxFooter';


export default {
  components: {
    Navbar,
    ThankYouPage,
    DealDoxFooter,
  },
  // created() {
  //   setTimeout(() => this.$router.push({ path: '/' }), 5000)
  // }
}
</script>
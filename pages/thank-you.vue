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
  head: {
    title: 'Thank You for Choosing Us | DealDox',
        htmlAttrs: {
            lang: 'en-us'
        },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'capterra-tracker' },
      { innerHTML: '<img src="https://ct.capterra.com/capterra_tracker.gif?vid=2303870&vkey=41e06c8a66e8d4b929a001ad446feb0d" alt="Capterra Tracker">' }, 
      { hid: 'description', name: 'description', content: 'Thank you for choosing DealDox. We help you streamline your deal process. Access your documents and manage your deal efficiently from your dashboard.' },

        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/thank-you' }
        ],
  },
}
</script>
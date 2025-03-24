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
    title: 'Thank You for Connecting with DealDox | We’ll Reach Out Soon',
        htmlAttrs: {
            lang: 'en-us'
        },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'capterra-tracker' },
      { innerHTML: '<img src="https://ct.capterra.com/capterra_tracker.gif?vid=2303870&vkey=41e06c8a66e8d4b929a001ad446feb0d" alt="Capterra Tracker">' }, 
      { hid: 'description', name: 'description', content: ' We appreciate your interest in DealDox! Our team will contact you shortly to assist with your needs. Stay tuned for our response.' },

        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/thank-you' }
        ],
  },
}
</script>
<template>
  <div class="brand-trust-us">
    <h2 style="text-align: center; font-size: 24px; padding:0px">Brands That Trust Us</h2>
    <div class="slide-tracker-container">
      <div class="slider-2">

        <div class="slide-tracker-1">
          <div v-for="partner in partners" class="slide">
            <img :src="partner.image.data.attributes.url" :alt="partner.image.data.attributes.url.alternativeText"
              class="slide-span-texts">
          </div>
          <div v-for="partner in partners" class="slide">
            <img :src="partner.image.data.attributes.url" :alt="partner.image.data.attributes.url.alternativeText"
              class="slide-span-texts">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Partner',
  data() {
    return {
      partners: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('https://cms.dealdox.io/api/partner?populate=partnerSlides.image');
      this.partners = response.data.data.attributes.partnerSlides;
    } catch (error) {
      console.error('Error fetching partner data:', error);
    }
  }
};




</script>

<style>
.slide-tracker-container {
  display: grid;
  place-items: center;
  overflow: hidden;

  max-width: 1440px;

}

.slider-2 {
  height: 110px;
  margin: auto;
  position: relative;
  width: 80%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slider-2::after,
.slider-2::before {
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  content: '';
  height: 100%;
  position: relative;
  width: 15%;
  z-index: 2;
}

.slide {
  height: 100px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px;
}

.slider-2::before {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider-2::after {
  left: 0;
  top: 0;
}

.slide-tracker {
  display: flex;
  width: calc(260px*18);
  animation: scroll 40s linear infinite;
}

.slide-tracker-1 {
  display: flex;
  width: calc(260px*18);
  animation: scrolls 40s linear infinite;
}

img.slide-span-texts {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
}

@keyframes scrolls {
  0% {

    transform: translateX(calc(-260px *9));
  }

  100% {
    transform: translateX(0);
  }
}

.brand-trust-us {
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

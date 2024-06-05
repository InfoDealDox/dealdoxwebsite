<template>
  <div class="partner-area pt-70">
    <div class="container">
      <div class="partner-title">
        Industry-Preferred CPQ SaaS Solution at Your Fingertips
      </div>

      <!-- <div class="partner-slides">
        <carousel :autoplay="true" :loop="true" :paginationEnabled="false"
          :perPageCustom="[[0, 3], [576, 3], [768, 3], [1200, 7]]" v-if="partners !== null">
          <slide v-for="slide in partners.partnerSlides" :key="slide.id">
            <div class="single-partner-item">
              <a>
                <img :src="slide.image.data.attributes.url" alt="image">
              </a>
            </div>
          </slide>
        </carousel>
      </div> -->


      <div class="features-area">
        <div class="container">
          <div class="row justify-content-center" v-if="partners !== null">
            <div class="col-xl-2 col-lg-2 col-sm-6 col-md-6" v-for="slide in partners.partnerSlides" :key="slide.id">
              <div class="single-features-box">
                <div class="partner-item"><img :src="slide.image.data.attributes.url" alt="image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Partner',
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    partners: null,
  }),
  created: async function () {
    const response = await axios.get('https://cms.dealdox.io/api/partner?populate=partnerSlides.image')
    const { data: { attributes } } = response.data
    this.partners = attributes
  },
}
</script>
<template>
  <div class="partner-area">
    <div class="container mb-5">
      <!-- <div class="partner-title">
        <div class="tb-30">
          <NuxtLink to="/success-stories" required class="default-btn"><i class='bx bx-paper-plane'></i>
            View all customers</NuxtLink>
        </div>
      </div> -->

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
          <VueSlickCarousel v-bind="carouselSettings" v-if="partners !== null">
            <div v-for="slide in partners.partnerSlides" :key="slide.id" style="margin: 0 15px;">
              <div class="single-features-box">
                <div class="partner-item"><img :src="slide.image.data.attributes.url"
                    :alt="slide.image.data.attributes.alternativeText"></div>
              </div>
            </div>
          </VueSlickCarousel>
          <!-- <div class="row justify-content-center" v-if="partners !== null">
            <div class="col-xl-2 col-lg-2 col-sm-6 col-md-6" v-for="slide in partners.partnerSlides" :key="slide.id">
              <div class="single-features-box">
                <div class="partner-item"><img :src="slide.image.data.attributes.url" alt="image"></div>
              </div>
            </div>
          </div> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import axios from 'axios'

export default {
  name: 'Partner',
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    partners: null,
    carouselSettings: {
      "dots": true,
      "infinite": true,
      "speed": 500,
      "slidesToShow": 6,
      "slidesToScroll": 2,
      "initialSlide": 0,
      "autoplay": true,
      "responsive": [
        {
          "breakpoint": 1024,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "infinite": true,
            "dots": true
          }
        },
        {
          "breakpoint": 600,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "initialSlide": 2
          }
        },
        {
          "breakpoint": 480,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }
      ]
    }
  }),
  created: async function () {
    const response = await axios.get('https://cms.dealdox.io/api/partner?populate=partnerSlides.image')
    const { data: { attributes } } = response.data
    this.partners = attributes
  },
}
</script>
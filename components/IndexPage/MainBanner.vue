<template>
  <div>
    <div class="new-bannner-ui-design-container pt-50">
      <div class="Not-AFFORDABLE-cpq">
        <div><small class="new-banner-first-content">Not just faster</small></div>


        <div class="image-container">
          <img src="../../assets/images/affordableTestNew.webp" alt="DealDox Affordable" class="zoom-image">
        </div>
        <div><small class="new-banner-cpqforAll-content">CPQ FOR ALL</small></div>
      </div>
      <div class="new-banner-third-content-div">
        <small class="new-banner-third-content">Sell more with less effort using
          an easy-to-use guided selling solution to create proposals, estimations, contracts, and approval
          workflows.</small>
      </div>
      <div class="banner-new-button">
        <button class="transition-new-banner">
          <NuxtLink to="/demo" style="text-decoration: none;" class="transition-new-banner-link">Request Demo<div
              class="new-bi-chevron-right"><i class="bi bi-chevron-right"></i></div>
          </NuxtLink>
        </button>
      </div>

      <footer class="banner-logo-footer">
        <div class="banner-logo-container"><img src="../../assets/images/BannerAssets/G2.png"
            class="banner-logo-images-first customize-banner" alt="G2-Company"></div>
        <div class="banner-logo-container"><img src="../../assets/images/capterrawhitelogo.jpg"
            class="banner-logo-images  customize-banner-capterra" alt="Capterra-Company"></div>
        <div class="banner-logo-container"><img src="../../assets/images/Gartnerwhitelogo.png"
            class="banner-logo-images  customize-banner-gartner" alt="Gartner-Company"></div>
        <div class="banner-logo-container"><img src="../../assets/images/software_advice_webp.webp"
            class="banner-logo-images " alt="Software Advice Company" style="border-right: none;padding:1px 10px;">
        </div>
      </footer>
    </div>



  </div>
</template>

<script>
export default {
  name: "HomeBanner",

  data() {
    return {
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    };
  },
};
</script>


<style>
@import "../../assets/css/pages-css/MainBannerCss.css";

</style>
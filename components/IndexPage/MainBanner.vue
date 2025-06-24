<template>
  <div style="position: relative;">
    <div class="new-bannner-ui-design-container pt-50">
      <div class="Not-AFFORDABLE-cpq">
        <div><small class="new-banner-first-content">Not just faster</small></div>


        <div class="image-container">
          <img src="../../assets/images/CPQ .webp" alt="DealDox Affordable" class="zoom-image" loading="lazy">
        </div>
        <div>
          <h1 class="new-banner-cpqforAll-content" style="padding-bottom: 0px;margin-bottom: 0px;">CPQ FOR ALL</h1>
        </div>
      </div>
      <div class="new-banner-third-content-div">
        <small class="new-banner-third-content">An easy-to-use guided selling approach to creating proposals,
          estimations, contracts, and approval workflows.</small>
      </div>
      <div class="banner-new-button">
        <button class="transition-new-banner">
          <NuxtLink to="/demo" style="text-decoration: none;" class="transition-new-banner-link">Request Demo<div
              class="new-bi-chevron-right"><i class="bi bi-chevron-right"></i></div>
          </NuxtLink>
        </button>
      </div>
      <div class="mobile-app-banner-logos">
        <img src="../../assets/images/Startup_left.webp" alt="" class="recognized-left-image" loading="lazy">

      </div>

      <div class="recognized-dealdox">

        <img src="../../assets/images/MainBannerStartupLogo.png" alt="CPQ Software Startup" class="recognized-image" loading="lazy">

      </div>

      <footer class="banner-logo-footer">

        <div class="banner-footer-logo-body">
          <div class="banner-logo-container"><img loading="lazy" src="../../assets/images/BannerAssets/G2.png"
              class="banner-logo-images-first customize-banner" alt="G2-Company"></div>
          <div class="banner-logo-container"><img loading="lazy" src="../../assets/images/capterrawhitelogo.jpg"
              class="banner-logo-images  customize-banner-capterra" alt="Capterra-Company"></div>
          <div class="banner-logo-container"><img loading="lazy" src="../../assets/images/Gartnerwhitelogo.png"
              class="banner-logo-images  customize-banner-gartner" alt="Gartner-Company"></div>
          <div class="banner-logo-container"><img loading="lazy" src="../../assets/images/software_advice_webp.webp"
              class="banner-logo-images " alt="Software Advice Company" style="border-right: none;padding:1px 10px;">
          </div>
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
  methods: {
    navigateToAppStore() {
      window.open('https://apps.apple.com/in/app/dealdox/id6737757798', '_blank');
    },
    navigateToPlayStore() {
      window.open('https://play.google.com/store/apps/details?id=com.dealdox.io.dealdox', '_blank');
    },
  },
};
</script>


<style>
@import "../../assets/css/pages-css/MainBannerCss.css";

@media (max-width:750px) {
  .mobile-app-banner-logos {
    display: none;

  }

  .recognized-dealdox {
    position: relative;
    right: 0px;
    bottom: 0px;
  }

  .recognized-image {

    padding: 0px;
  }


}
</style>
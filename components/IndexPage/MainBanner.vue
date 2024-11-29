<!-- <template>
  <div>
    <div class="new-bannner-ui-design-container pt-50">
      <div class="Not-AFFORDABLE-cpq">
        <div><small class="new-banner-first-content">Not just faster</small></div>
        <div><small class="new-banner-second-content">AFFORDABLE</small></div>
        <div><small class="new-banner-cpqforAll-content">CPQ FOR ALL</small></div>
      </div>
      <div class="new-banner-third-content-div"><small class="new-banner-third-content">Sell more with less effort using
          an easy-to-use guided selling solution to create proposals, estimations, contracts, and approval
          workflows.</small>
      </div>
      <button class="transition-new-banner">
        <NuxtLink to="/demo" style="text-decoration: none;" class="transition-new-banner-link">Request Demo<div
            class="new-bi-chevron-right"><i class="bi bi-chevron-right"></i></div>
        </NuxtLink>
      </button>

      <footer class="banner-logo-footer">

        <div class="banner-logo-container"><img src="../../assets/images/BannerAssets/G2.png"
            class="banner-logo-images-first customize-banner" alt="G2-Company"></div>
        <div class="banner-logo-container"><img src="../../assets/images/BannerAssets/Capterra.png"
            class="banner-logo-images customize-banner" alt="Capterra-Company"></div>
        <div class="banner-logo-container"><img src="../../assets/images/BannerAssets/Gartner.png"
            class="banner-logo-images customize-banner" alt="Gartner-Company"></div>
        <div class="banner-logo-container"><img src="../../assets/images/BannerAssets/Software Advice.png"
            class="banner-logo-images " alt="Software Advice-Company" style="border-right: none;"></div>



      </footer>

    </div>
    <div class="new-app-main-banner-wrap-area bg-white pt-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="new-app-main-banner-wrap-image" data-aos="fade-left" data-aos-duration="2000">
              <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696577/cpq-banner_chwd0d.png"
                alt="home banner" loading="lazy" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="new-app-main-banner-wrap-content">
              <h1>
                Effortlessly streamline your
                <span style="color: rgb(113, 92, 243)">Quote Generation</span>
                process with DealDox
              </h1>
              <p>
                Are you still stuck with outdated spreadsheet calculations,
                spending precious time manually shifting estimates from Excel to
                Word, and then converting them to PDFs? Say goodbye to these
                tedious tasks and welcome effortless quoting with DealDox also
                called DD CPQ.
              </p>
              <div class="tb-30">
                <a href="https://www.dealdox.io/demo" target="_blank">
                  <button class="default-btn">
                    <i class="bx bx-paper-plane"></i>Get a Demo
                  </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  }

};
</script>


<style>
.new-bannner-ui-design-container {
 
  background-color: #715cf3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 125px 30px 20px 30px;
  color: white;
}

.new-banner-first-content {
  font-size: 50px;
  font-weight: 400;

}



.new-banner-second-content {
  position: relative;
  font-size: 10vw;
  color: transparent;
  -webkit-text-stroke: 3px #8675f4;
  text-transform: uppercase;

}

.new-banner-second-content::before {
  content: "AFFORDABLE";
  position: absolute;
  color: white;

  border-right: 1px solid whitesmoke;
  width: 0;
  height: 100%;
  overflow: hidden;
  animation: animate 6s linear infinite;
  -webkit-text-stroke: 3px white;

}




@keyframes animate {

  0%,
  10%,
  100% {
    width: 0%;
  }

  70%,
  100% {
    width: 100%;
  }
}

.new-banner-third-content-div {
  width: 46%;
  margin: auto;
  text-align: center;
}

.new-banner-third-content {
  text-align: center;

}

.transition-new-banner {
  background: linear-gradient(99.01deg, #715cf3 20.98%, #5c99f3 94.62%);
  border: none;
  color: white;
  padding: 10px 51px 10px 20px;
  text-decoration: none;
  border-radius: 23px;
  position: relative;
}

.transition-new-banner:hover {
  color: white;
}

.transition-new-banner-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.transition-new-banner-link:hover {
  color: white;
}

.new-bi-chevron-right {
  background-color: #3881ee;
  border-radius: 50px;
  position: absolute;
  right: 4px;
  padding: 10px;
}

.banner-logo-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;

}


.banner-logo-container {
  height: 34px;
  display: flex;
}

.banner-logo-images {}

.banner-logo-images-first {
  width: 75px;
}

.new-banner-cpqforAll-content {
  font-size: 22px;
}

.customize-banner {
  border-right: 0.1px solid #acacac;
  padding: 0px 10px;
}

.Not-AFFORDABLE-cpq{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style> -->
<template>
  <div>
    <div class="new-bannner-ui-design-container pt-50">
      <div class="Not-AFFORDABLE-cpq">
        <div><small class="new-banner-first-content">Not just faster</small></div>
        <!-- <div><small class="new-banner-second-content">AFFORDABLE</small></div>-->

        <div class="image-container">
          <img src="../../assets/images/AfooradableBanner.webp" alt="Zooming Image" class="zoom-image">
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
            class="banner-logo-images customize-banner" alt="Capterra-Company"></div>
        <div class="banner-logo-container"><img src="../../assets/images/Gartnerwhitelogo.png"
            class="banner-logo-images customize-banner" alt="Gartner-Company"></div>
        <div class="banner-logo-container"><img src="../../assets/images/BannerAssets/Software Advice.png"
            class="banner-logo-images " alt="Software Advice-Company" style="border-right: none;padding-left: 10px;">
        </div>
      </footer>
    </div>

    <!-- <div class="new-app-main-banner-wrap-area bg-white pt-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="new-app-main-banner-wrap-image" data-aos="fade-left" data-aos-duration="2000">
              <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696577/cpq-banner_chwd0d.png"
                alt="home banner" loading="lazy" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="new-app-main-banner-wrap-content">
              <h1>
                Effortlessly streamline your
                <span style="color: rgb(113, 92, 243)">Quote Generation</span>
                process with DealDox
              </h1>
              <p>
                Are you still stuck with outdated spreadsheet calculations,
                spending precious time manually shifting estimates from Excel to
                Word, and then converting them to PDFs? Say goodbye to these
                tedious tasks and welcome effortless quoting with DealDox also
                called DD CPQ.
              </p>
              <div class="tb-30">
                <a href="https://www.dealdox.io/demo" target="_blank">
                  <button class="default-btn">
                    <i class="bx bx-paper-plane"></i>Get a Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
export default {
  name: "HomeBanner",

  data() {
    return {
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video source
    };
  },
};
</script>

<style>
.new-bannner-ui-design-container {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 70%),
    linear-gradient(to bottom, #7200ca, #3b0065);
  background-blend-mode: overlay;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 125px 30px 20px 30px;
  color: white;

}

.new-banner-first-content {
  font-size: 39px;
  font-weight: 200;

}

/* .new-banner-second-content {
  position: relative;
  font-size: 7vw;
  color: transparent;
  -webkit-text-stroke: 3px #8675f4;
  text-transform: uppercase;
  opacity: 0;
  animation: fadeInContent 2s ease-in-out forwards 1s;
  font-family: Montserrat;
  font-weight: 500;
}

.new-banner-second-content::before {
  content: "AFFORDABLE";
  position: absolute;
  color: white;
  -webkit-text-stroke: 3px white;
  clip-path: inset(0 100% 0 0);
  animation: clipReveal 6s ease-in-out forwards;
} */

/* @keyframes clipReveal {
  0% {
    clip-path: inset(0 100% 0 0);
  }

  100% {
    clip-path: inset(0 0 0 0);
  }
} */

.new-banner-third-content-div {
  width: 46%;
  margin: auto;
  text-align: center;

}

.new-banner-third-content {
  text-align: center;
}

.transition-new-banner {
  margin: 20px 0;
  background: linear-gradient(90deg, #715cf3 20.98%, #5c99f3 94.62%);
  border: none;
  color: white;
  padding: 10px 51px 10px 20px;
  text-decoration: none;
  border-radius: 23px;
  position: relative;
  transition: background-color 0.3s ease, transform 0.3s ease;
  overflow: hidden;
}

.transition-new-banner:hover {
  color: white;
  transform: scale(1.05);
  transition-delay: 0.1s;
  /* Adds slight delay for smoother hover effect */
}

.transition-new-banner-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transition: all 0.3s ease;
}

.transition-new-banner-link i {
  font-size: 18px;

}

.transition-new-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/SparkleForBannner.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s ease;
  animation: light-pass 1s linear infinite;
  overflow: hidden;
}

@keyframes light-pass {
  0% {
    left: 0;
  }

  70% {
    left: 50%;
  }

  100% {
    left: 100%;
  }
}

.new-bi-chevron-right {
  background-color: #3881ee;
  border-radius: 55px;
  position: absolute;
  right: 9px;
  justify-content: center;
  display: flex;
  padding: 4%;
  align-items: center;
}

.banner-logo-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
}

.banner-logo-container {
  height: 23px;
  display: flex;

}

.banner-logo-images {
  transition: transform 0.3s ease-in-out;
}

.banner-logo-container:hover .banner-logo-images {
  transform: scale(1.1);
}

.new-banner-cpqforAll-content {
  font-size: 22px;

}

.customize-banner {
  border-right: 0.1px solid #acacac;
  padding: 0px 10px;
}

.Not-AFFORDABLE-cpq {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* @keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeInContent {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
} */


/* Container to hold the image */
.image-container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Image with animation */
.zoom-image {
  width: 77%;
  height: 117px;
  animation: zoomIn 5s ease-out forwards;
  transform: translateZ(0) scale(1);
}

/* Keyframe animation to zoom the image */
@keyframes zoomIn {
  0% {
    transform: scale(0.50)
  }

  100% {
    transform: scale(1);
    /* End state, back to original size */
  }

}

@media (max-width: 750px) {
  .zoom-image {
    width: 100%;
    height: 60px;
    animation: zoomIn 5s ease-out forwards;
  }

  .new-banner-third-content-div {
    width: 96%;
    margin: auto;
    text-align: center;
  }

  .new-banner-first-content {
    font-size: 29px;
    font-weight: 200;
  }

  .banner-logo-container {
    height: 14px;
    display: flex;
  }
}
</style>

<!-- <template>
  <div class="features-area pt-500 bg-FAFAFA">
    <div class="container customize-new-home-container">
      <h2 class="new-home-card">Problems We Fix at Economical CPQ Pricing Plans </h2>
      <div class="new-home-design-body">
        <div class="new-home-left">
          <img src="../../assets/images/PainsSolveLeft.webp" alt="the_best_CPQ_solution" class="new-home-left-image" />
        </div>
        <div class="new-home-design-right">

          <ul class="solution-line-container">

            <li v-for="(item, index) in items" :key="index" class="solution-line-content">
              <i class="ri-check-line ri-check-line-styling"></i><span>{{ item }}</span>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EasyIntegration',
  data() {
    return {
      items: [
        "Quote approvals are excessively slow",
        "Sales team quotes vary significantly",
        "Complex product configuration is error-prone",
        "CPQ project success and team adoption are concerns",
        "Manual discounting is prone to errors",
        "Complex product costing is inaccurate"
      ]
    };
  }
};
</script>

<style>
@import url(../../assets/css/pages-css/HomeNew.css);


@media (max-width:750px) {
  .solution-line-content span {
    font-size: 15px;
  }
}
</style> -->


<template>
  <div class="features-area pt-500 bg-FAFAFA">
    <div class="container">
      <div class="software-integrations-inner bg-gradient-color" id="new-problem-ehnance">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="features-content">
              <ul class="features-list">
                <h2>Problems We Fix at <span class="sub-title">
                    <NuxtLink to="/pricing">Economical CPQ Pricing Plans</NuxtLink>
                  </span> </h2>
                <li>
                  <div class="icon">
                    <i class="ri-check-line"></i>
                  </div>
                  <p class="with-top-border">
                    Quote approvals are excessively slow</p>
                </li>
                <li>
                  <div class="icon">
                    <i class="ri-check-line"></i>
                  </div>
                  <p class="with-top-border">
                    Sales team quotes vary significantly</p>
                </li>





                <li>
                  <div class="icon">
                    <i class="ri-check-line"></i>
                  </div>
                  <p>
                    Complex product configuration is error-prone</p>
                </li>
              </ul>

              <div class="btn-box">
                <NuxtLink to="/pricing" class="default-btn">Know more</NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="software-integrations-list">
              <img src="../../assets/images/PainsSolveLeft.webp" alt="Deal management" style="padding: 9%;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EasyIntegration'
}
</script>

<style>
@media (min-width:500px) {
  #new-problem-ehnance {
    padding-top: 25px !important;
  }

}
</style>
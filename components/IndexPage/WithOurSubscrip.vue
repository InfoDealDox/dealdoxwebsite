<template>
  <div class="features-area pt-500 bg-FAFAFA">
    <div class="container customize-new-home-container">
      <h2 class="new-home-card">Problems We Fix at Economical CPQ Pricing Plans </h2>
      <div class="new-home-design-body">
        <div class="new-home-left">
          <img src="../../assets/images/PainsSolveLeft.webp" alt="the_best_CPQ_solution"
            class="new-home-left-image" />
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
</style>

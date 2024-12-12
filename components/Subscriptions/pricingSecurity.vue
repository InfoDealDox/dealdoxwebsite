<template>

    <div class="privacy-pricing-body">
        <div class="privacy-pricing-body-img">
            <img src="../../assets/images/PricingAssests/PricingSecurity.webp" alt="DealDox Security"
                class="DealDox-Security">
        </div>
        <div class="your-privacy-three-buynow-btn">
            <span class="Your-privacy-is-our-priority">Your privacy is our priority</span>

            <ul class="privacypriorityulu">
                <li class="privacypriorityul"><i class="bi bi-check2-circle bi-pricing-circle"></i><span
                        class="privacypriorityulspan">Minimal Third-Party Dependencies</span></li>
                <li class="privacypriorityul"><i class="bi bi-check2-circle bi-pricing-circle"></i><span
                        class="privacypriorityulspan">No External Website Trackers or Ads</span></li>
                <li class="privacypriorityul"><i class="bi bi-check2-circle bi-pricing-circle"></i><span
                        class="privacypriorityulspan">Your Data Is Not Sold</span></li>
            </ul>

            <button class="pricing-buy-now-button" style="width: fit-content;" @click="scroollTopPricing">
                BUY NOW
            </button>

        </div>
    </div>

</template>



<script>
export default {
    name: "pricingSecurity",

    methods: {
        scroollTopPricing() {

            const scrollPosition = document.documentElement.scrollHeight * 0.045;
            window.scrollTo(0, scrollPosition);

        }
    }
}
</script>


<style>
@import '../../assets/css/pages-css/PricingHeaderFooter.css'
</style>

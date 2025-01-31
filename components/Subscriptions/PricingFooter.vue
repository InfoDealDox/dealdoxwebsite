    <template>
        <div>
            <div class="pricing-footer-scroll-bars">
                <div class="pricing-Excel-functions-body">
                    <div class="pricing-Excel-functions">
                        <h2 class="pricing-Excel-functions-header">1,000+ functionalities for both product- and
                            service-based industries
                        </h2>

                        <button class="pricing-buy-now-button" @click="scroollTopPricing">
                            BUY NOW
                        </button>

                    </div>
                    <!-- <PricingSliderLeft /> -->
                    <PricingRightScroll />

                </div>
                <PricingClients />
                <pricingSecurity />
                <pricingFaq />
            </div>


        </div>

    </template>


<script>
// import PricingSliderLeft from './PricingSliderLeft.vue'
import PricingRightScroll from './PricingRightScroll.vue';
import pricingFaq from '../Common/pricingFaq.vue';
import PricingClients from '../../components/Subscriptions/PricingClients.vue'
import pricingSecurity from '../../components/Subscriptions/pricingSecurity.vue'

export default {
    components: {
        // PricingSliderLeft,
        PricingRightScroll,
        PricingClients,
        pricingFaq,
        pricingSecurity,

    },

    methods: {
        scroollTopPricing() {

            const scrollPosition = document.documentElement.scrollHeight * 0.045;
            window.scrollTo(0, scrollPosition);

        }
    }
}
</script>

<style>
@import url('../../assets/css/pages-css/PricingHeaderFooter.css');


.pricing-buy-now-button {
    padding: 6px 35px;
    cursor: pointer;
    color: #fff;
    display: inline-block;
    text-decoration: none;
    position: relative;
    transition: all ease .32s;
    border: 0;
    margin: 10px 0;
    text-transform: uppercase;
    z-index: 1;
    background: #f0483e;
    border-radius: 4px;
}

.pricing-buy-now-button:hover {
    scale: 1.2;
    color: white;
    font-weight: 500;
}

.pricing-buy-now-button a:hover {
    color: white;
}

.pricing-footer-scroll-bars {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
}

.pricing-Excel-functions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.pricing-Excel-functions-header {
    letter-spacing: -1.2px;
    font-size: 37px;
    font-weight: 500;
    font-family: "Roboto", serif;
}

.pricing-Excel-functions-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;
}
</style>
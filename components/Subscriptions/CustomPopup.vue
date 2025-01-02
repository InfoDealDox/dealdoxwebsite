<template>
    <div class="custom-popup-overlays">
        <div class="custom-popup-containersss">
            <div class="custom-popup-image-div">
                <div class="popup-icon" @click="onClose" style="cursor: pointer;">
                    <i class="ri-close-fill" style="cursor: pointer;"></i>
                </div>
               
                    <img class="popup-imagess" src="~/assets/images/revised-pop-up-message.png" alt="Popup" />

                    <div class="custom-popup-footer">
                    <button class="animated-button" @click="navigateToPage('Request Callback')">
                        Request a CallBack
                    </button>
                </div>
                
            </div>
     
                <!-- <p class="pricing-you-might">You might be interested in:</p> -->
                <!-- <div class="standard-cpq-integration">
                    <div class="standard-cpq-content">
                        <a style="font-weight: bold;" class="picing-standard-heading" href="/services-cpq">
                            Standalone CPQ
                        </a>
                        <p class="optimize-unify-pricing">Optimize Pricing & Quotes</p>
                    </div>

                    <div class="border"></div>
                    <div class="cpq-integration-content">
                        <a style="font-weight: bold;" class="picing-standard-heading" href="/cpq-integrations">
                            CPQ Integration
                        </a>
                        <p class="optimize-unify-pricing">Unify Systems with CPQ</p>
                    </div>

                </div> -->
                <!-- <div class="spend-time-proposal">
                    <p class="spend-less-time-pricing">
                        Spend less time on proposals, earn more.
                    </p>
                    <p style="text-align: center;" class="pricing-generate-cpq">
                        Generate professional proposals 80% faster with DealDox CPQ.
                    </p>
                </div> -->
              
            </div>
        

    </div>
</template>

<script>

export default {
    name: "CustomPopup",
    methods: {
        onClose() {
            this.$emit('close');
        },
        navigateToPage(paramValue) {
            this.$router.push({ name: 'contact', params: { source: paramValue } });
        }
    }
}
</script>


<style scoped>
@import url(../../assets/css/pages-css/custom-popup.css);
</style>
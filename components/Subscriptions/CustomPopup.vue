<template>
    <div class="custom-popup-overlays">
        <div class="custom-popup-containersss">
            <div class="custom-popup-image-div">
                <div class="popup-icon" @click="onClose">
                    <i class="ri-close-fill" />
                </div>
                <div class="">
                    <img class="popup-imagess" src="~/assets/images/revised-pop-up-message.png" alt="Popup" />
                </div>
            </div>
            <div class="custom-content-div">
                <p class="">You might be interested in:</p>
                <div class="standard-cpq-integration">
                    <div class="standard-cpq-content" style="border-right: 0.1px solid #ccc;">
                        <a style="font-weight: bold;" href="/services-cpq">
                            Standalone CPQ
                        </a>
                        <p style="font-size: 14px;text-align: center;">Optimize Pricing & Quotes</p>
                    </div>


                    <div class="cpq-integration-content">
                        <a style="font-weight: bold;" href="/cpq-integrations">
                            CPQ Integration
                        </a>
                        <p style="font-size: 14px;text-align: center;">Unify Systems with CPQ</p>
                    </div>

                </div>
                <div class="spend-time-proposal">
                    <p style="font-weight: 600; text-align: center; font-size: 18px;">
                        Spend less time on proposals, earn more.
                    </p>
                    <p style="text-align: center;padding-bottom: 5px;">
                        Generate professional proposals 80% faster with DealDox CPQ.
                    </p>
                </div>
                <div class="">
                    <a href="/contact-us">
                        <button class="animated-button">
                            Request a CallBack
                        </button></a>
                </div>
            </div>
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
            this.$router.push({ name: 'contact-us', params: { source: paramValue } });
        }
    }
}
</script>


<style scoped>
@import url(../../assets/css/pages-css/custom-popup.css);
</style>
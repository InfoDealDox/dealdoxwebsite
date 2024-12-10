<template>
    <div class="pricing-header-main-container">
        <div class="pricing-header-container">
            <div class="pricing-flexing-software-container">
                <span class="pricing-flexing-software">Smart software, Smart savings</span>
            </div>
            <div class="pricing-tags-lists-body">
                <ul class="pricing-tags-lists">
                    <li class="pricing-tags-li">
                        <i class="bi bi-check-circle-fill pricing-fill-logos"></i>
                        <div class="pricing-tags-li-container">
                            <span class="pricing-tags-li-container-span">Personalized Demo </span>
                            <small>With proof of concept </small>
                        </div>
                    </li>
                    <li class="pricing-tags-li">
                        <i class="bi bi-check-circle-fill pricing-fill-logos"></i>
                        <div class="pricing-tags-li-container">
                            <span class="pricing-tags-li-container-span">Document Generation</span>
                            <small>Dynamic images, real-time updates </small>
                        </div>
                    </li>
                    <li class="pricing-tags-li">
                        <i class="bi bi-check-circle-fill pricing-fill-logos"></i>
                        <div class="pricing-tags-li-container">
                            <span class="pricing-tags-li-container-span">Rapid Implementation </span>
                            <small>50% faster setup </small>
                        </div>
                    </li>
                    <li class="pricing-tags-li">
                        <i class="bi bi-check-circle-fill pricing-fill-logos"></i>
                        <div class="pricing-tags-li-container">
                            <span class="pricing-tags-li-container-span">Streamline Pricing</span>
                            <small>Real-time cost estimation</small>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="pricing-page-button-container">
                <div class="pricing-page-button-sub-container">
                    <div class="pricing-absolut-button" ref="toggleButton"></div>
                    <button class="pricing-monthly" ref="button1" @click="leftClick">MONTHLY</button>
                    <button class="pricing-yearly" ref="button2" @click="rightClick">YEARLY</button>
                </div>
            </div>


        </div>

        <div class="saveupto80">
            <img src="../../assets/images/PricingAssests/pricingArrow.png" alt="pricing Arrow" class="peicing-Arrow">
            <span class="saveupto80text">save up to 80%</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PricingHeader",
    methods: {
        leftClick() {
            const toggleButton = this.$refs.toggleButton;
            const button1 = this.$refs.button1;
            const button2 = this.$refs.button2;
            if (toggleButton) {
                toggleButton.style.left = "2px";
                button1.style.color = "white";
                button2.style.color = "black";
                toggleButton.style.width = "45.5%"
            }
        },
        rightClick() {
            const toggleButton = this.$refs.toggleButton;
            const button1 = this.$refs.button1;
            const button2 = this.$refs.button2;
            if (toggleButton) {
                toggleButton.style.left = "56%";
                button2.style.color = "white";
                button1.style.color = "black";
                toggleButton.style.width = "44%";
            }
        },
    },
};
</script>

<style>

</style>

<template>
    <div class="custom-popup-overlay">
        <div class="custom-popup-container">
            <div class="custom-popup-content">
                <div class="popup_png_content">
                    <div class="custom-popup-header">
                        <div class="custom-popup-close" @click="onClose">
                            <i class="ri-close-fill" />
                        </div>
                    </div>
                    <div class="popup_png_content22">
                        <img class="image_config" src="~/assets/images/revised-pop-up-message.png" alt="Popup" />
                    </div>

                    <div class="popup_div">
                        <div class="popup_para_div">
                            <p class="popup_para">You might be interested in:</p>
                        </div>

                        <div class="popup_content_rev">
                            <div class="popup_content_rev1">
                                <div class="custom_popup_content_container" style="border-right: 0.1px solid #ccc;">
                                    <nuxt-link style="font-weight: bold;" to="https://www.dealdox.io/services-cpq">
                                        Standalone CPQ
                                    </nuxt-link>
                                    <p style="font-size: 14px;">Optimize Pricing & Quotes</p>
                                </div>
                                <div class="custom_popup_content_container1">
                                    <nuxt-link style="font-weight: bold;" to="https://www.dealdox.io/cpq-integrations">
                                        CPQ Integration
                                    </nuxt-link>
                                    <p style="font-size: 14px;">Unify Systems with CPQ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="padding: 10px 30px 10px;">
                        <div class="popup_contents">
                            <p style="font-weight: 600; font-family: 'Noto Sans'; font-size: 18px;">
                                Spend less time on proposals, earn more.
                            </p>
                            <p style="font-family: 'Noto Sans';">
                                Generate professional proposals 80% faster with DealDox CPQ.
                            </p>
                        </div>
                        <div class="custom-popup-footer">
                            <button class="animated-button" @click="navigateToPage('Request Callback')">
                                Request a CallBack
                            </button>
                        </div>
                    </div>
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
            // Logic to close the popup
            this.$emit('close'); // Emit an event to notify parent component
        },
        navigateToPage(paramValue) {
            this.$router.push({ name: 'contact-us', params: { source: paramValue } });
        }
    }
}
</script>
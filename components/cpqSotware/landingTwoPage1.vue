<template>
    <div class="landing-page-cintainer">
        <div class="handbook-header-container">
            <img src='../../assets/images/footer-logo.svg' alt="logo" width="200px" style="padding: 30px;" />
            <div class="handbook-header">
                <div class="ebook-left">
                    <div class="ebook-inside-content">
                        <span class="ebook-title"><img src="../../assets/images/New-Landing-Images/EbookImage.png" alt="" class="ebook-title-image" width="35px"/>CPQ</span>
                        <span class="ebook-essential">The Essentials of CPQ Software</span>
                        <small class="ebook-winning-deals">Winning deals hinge on accurate quotations. Discover how CPQ
                            software ensures error-free
                            quotations & proposals.</small>
                        <button class="download-ebook-button" @click="sendForm">Get Demo</button>
                    </div>
                </div>

                <div class="ebook-right">
                    <img src="../../assets/images/New-Landing-Images/FirstCpqSoftware.png" alt="" class="ebook-image1">
                </div>

            </div>
        </div>
        <div class="handbook-section">

            <div class="ebook-section-left">
                <div class="ebook-section-second-content">
                    <div class="ebook-summary-content">
                        <span class="ebook-why-adapt">Why Adapt CPQ Software</span>
                        <span class="ebook-admist">Amidst the plethora of sales automation tools, configuring, pricing, and quoting for
                            complex products and services can be a daunting task for many businesses. Discover how CPQ
                            can help you with the following:</span>
                    </div>
                    <ul class="ebook-lists">
                        <li class="ebook-text-check-content"><i class="ri-check-line ebook-checkline"></i> Complex
                            configurations
                        </li>
                        <li class="ebook-text-check-content"><i class="ri-check-line ebook-checkline"></i>Dynamic
                            pricing
                        </li>
                        <li class="ebook-text-check-content"><i class="ri-check-line ebook-checkline"></i>Guided selling
                        </li>
                        <li class="ebook-text-check-content"><i class="ri-check-line ebook-checkline"></i>Document
                            generation</li>
                        <li class="ebook-text-check-content"><i class="ri-check-line ebook-checkline"></i>Maximising
                            Your ROI</li>

                    </ul>
                    <button class="download-ebook-button" @click="sendForm">Get Demo</button>
                </div>

                <div class="ebook-second-image">
                    <img src="../../assets/images/New-Landing-Images/SignsToConsiderCpq1.jpg" alt=""
                        class="ebook-second-images">
                </div>
            </div>

        </div>
        <div class="ebook-third-section">
            <div class="ebook-third-image">
                <img src="../../assets/images/New-Landing-Images/SandyaCoFounder1.jpg" alt=""
                    class="ebook-third-images">
            </div>
            <div class="ebook-founder-section-content">
                <span class="ebook-automation-tool">DealDox CPQ is a must-have sales automation tool</span>
                <small class="ebook-review-content">"DealDox helps maximizing your ROI. It generates accurate quotations
                    and proposals, streamlining
                    your sales process and boosting efficiency. Its web and mobile app versions offer complex estimation
                    capabilities with a simple click."</small>
                <div class="ebook-founder-content">
                    <div class="founder-container">
                        <span class="sandya-s-hegde">Sandhya S Hegde</span>
                        <small>Co-founder</small>
                        <img src="https://res.cloudinary.com/ds6j6gokv/image/upload/v1694695208/logo_m8wwsx.svg"
                            alt="logo" width="80px">
                    </div>
                </div>

            </div>



        </div>
    </div>

</template>


<script>
export default {
    name: "landingTwoPage1",
    props: {
        ebookref: {
            type: Object,
            required: true
        }
    },
    methods: {
        sendForm() {
            // Scroll to the demoForm component using the passed prop
            const ebookform = this.ebookref;


            if (ebookform) {
                ebookform.$el.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log("ebookform is undefined");
            }
        }
    }
}

</script>

<style>
@import '../../assets/css/pages-css/landingTwo.css';
</style>
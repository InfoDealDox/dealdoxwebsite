<template>
    <div class="landing-page-cintainer">
        <div class="div1-header">
            <div class="div1-contents">
                <span class="div1-first-content">Upgrade from <br> Spreadsheets to CPQ</span>
                <span>CPQ Quotation Software offers a streamlined solution to close deals faster and increase
                    revenue.</span>
                <button class="default-btn" style="top:0px;width:fit-content" @click="sendForm">Request Demo</button>

            </div>
            <div class="div1-images">
                <img src="../../assets/images/New-Landing-Images/RecordingQuotation.png" class="landing-new-images"
                    alt="">
            </div>
        </div>
        <div class="div2-header">
            <div class="div1-contents">
                <span class="div1-first-content">Tired of Excel's <br> Limitations for <br> Advanced
                    Quotes</span>
                <span>CPQ Quotation Software offers a streamlined solution to close deals faster and increase
                    revenue.</span>
                <button class="default-btn" style="top:0px;width:fit-content" @click="sendForm">Request Demo</button>

            </div>
            <div class="div1-images">
                <img src="../../assets/images/New-Landing-Images/RevisedRegisterPage.png" alt=""
                    class="landing-new-images">
            </div>
        </div>
        <div class="div2-header">
            <div class="div1-images">
                <span class="div1-firsts-content">Maximize ROI with
                    <br>DealDox CPQ Software</span>
                <img src="../../assets/images/New-Landing-Images/LeverageCpq.png" alt="" class="landing-new-images">
            </div>
            <div class="leverage-div1-contents">
                <div class="leaverge-divs">
                    <span class="leaverge-heading-content">
                        <NuxtLink to="/services-cpq">Streamlined product or service configurations</NuxtLink>
                    </span>
                    <span class="leaverge-heading-main-content">The top CPQ tool and solution helps in customizing your
                        product with options, features, and
                        add-ons.</span>
                </div>
                <div class="leaverge-divs">
                    <span class="leaverge-heading-content">
                        <NuxtLink to="/quoting-software">Automated quotation</NuxtLink>
                    </span>
                    <span class="leaverge-heading-main-content">Cloud-based CPQ software keeps product and service
                        information current and accessible anytime,
                        anywhere, for flexible business needs.</span>
                </div>
                <div class="leaverge-divs">
                    <span class="leaverge-heading-content">
                        <NuxtLink to="/services-cpq">Accurate pricing calculations</NuxtLink>
                    </span>
                    <span class="leaverge-heading-main-content">Quickly calculate accurate prices and avoid errors with
                        the quoting software, protecting
                        revenue and customer satisfaction.</span>
                </div>
                <div class="leaverge-divs">
                    <span class="leaverge-heading-content">
                        <NuxtLink to="/quoting-software">Unified proposal and quote templates</NuxtLink>
                    </span>
                    <span class="leaverge-heading-main-content">Streamline proposal and quote creation with CPQ’s
                        custom-designed templates, maintaining a
                        professional and consistent brand image.</span>
                </div>
                <div class="leaverge-divs">
                    <span class="leaverge-heading-main-content">Advanced CPQ Software recommends complementary products
                        or bundles to enhance the customer's
                        overall experience.</span>
                </div>
                <button class="default-btn" style="top:0px;width:fit-content" @click="sendForm">Request Demo</button>

            </div>

        </div>
    </div>
</template>


<script>



export default {
    name: 'Header',
    props: {
        demoFormRef: {
            type: Object,
            required: true
        }
    },
    methods: {
        sendForm() {
            // Scroll to the demoForm component using the passed prop
            const demoForm = this.demoFormRef;


            if (demoForm) {
                demoForm.$el.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log("demoForm is undefined");
            }
        }
    }
}




</script>

<style>
@import '../../assets/css/pages-css/CpqSotware.css';
</style>

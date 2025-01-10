<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="app-bg">
            <div class="cpq-mobile-app-body">
                <div class="cpq-mobile-app-body-left-1">
                    <h1 class="cpq-mobile-app-body-left-text-1">All-in-one <br>
                        Process <br> Costing App</h1>
                    <NuxtLink to=""><button class="mobile-landing-button">Get DealDox</button></NuxtLink>
                </div>

                <div class="cpq-mobile-app-body-right-1">
                    <img src="../assets/images/Mobile Landing Page/DealDox Mobile App.webp" alt="DealDox Mobile App"
                        class="dealDox-mobile-app-image">
                    <div class="dealDox-mobile-app-stores">
                        <img src="../assets/images/Mobile Landing Page/DD App Store.webp" alt="DealDox Mobile App"
                            class="dealDox-mobile-app-mac">
                        <img src="../assets/images/Mobile Landing Page/DD Play Store.webp" alt="DealDox Mobile App"
                            class="dealDox-mobile-app-mac">

                    </div>
                </div>
            </div>
        </div>

        <div class="landing-bg">
            <div class="cpq-mobile-app-body-left-2">
                <h2 class="about-the-app">About the  <br> app</h2>
                <span class="dealDox-is-a-mobile-app">DealDox is a mobile app enables you to use guided selling
                    templates, simplifies the calculation of
                    costs and estimations, allows quick creation of quotes and proposals, generates any deal documents
                    automatically, and customizes them to close deals faster.</span>
                <div class="big-or-small">
                    <span class="big-or-small-perfect">Perfect for Every Business</span>
                    <small class="big-or-small-content">Big or Small</small>
                </div>
            </div>
            <div class="cpq-mobile-app-body-right-2">
                <img src="../assets/images/Mobile Landing Page/Website Image.webp" alt="Website Image"
                    class="with-mobile-app-you-can">
            </div>

        </div>

        <div class="landing-flex-wrap-bg">
            <h3 class="future-of-B2B-deals" style="text-align: center;">Step into the Future of B2B Deals</h3>
            <div class="landing-bg-container">
                <B2BCard textContent="Sales reps can quickly generate accurate quotes and proposals on the go."
                    :image="require('../assets/images/Mobile Landing Page/Website Image 1.webp')" />
                <B2BCard textContent="Automated processes minimize the risk of errors in pricing and configurations."
                    :image="require('../assets/images/Mobile Landing Page/Website Image 2.webp')" />

                <B2BCard textContent=" Sales reps can upsell and
 cross-sell with Guided Selling
 Template" :image="require('../assets/images/Mobile Landing Page/Website Image 3.webp')" />


            </div>

        </div>
        <div class="landing-flex-wrap-testinomial-bg">
            <h3 class="future-of-B2B-deals">Testimonials</h3>
            <div class="landing-bg-container">


                <Testimonials :image="require('../assets/images/Mobile Landing Page/Testimonial Utkarsh.png')"
                    clientName="Utkarsh Bansal" designation="Founder"
                    company="Utkarsh India - Manufacturer and exporter of Pipes"
                    info="Even with Lead Squared and SAP HANA, we still made quotes manually. DealDox CPQ automated this, saving time and reducing errors." />
                <Testimonials :image="require('../assets/images/Mobile Landing Page/Testimonial Dasspass.png')"
                    clientName="Rajesh Sharma" designation="CEO" company="Daspass - Heating Element Manufacturers"
                    info="DealDox CPQ sped up costing, letting us generate quotes anytime, anywhere, on any device—no back-office needed." />
                <Testimonials clientName="Siva Prakash Alluri" designation="Founder"
                    :image="require('../assets/images/Mobile Landing Page/Testimonial Elemertz.png')"
                    company="Elementz - Limitless Living - Interior & Modular Designer"
                    info="DealDox CPQ streamlined our Modular Wet Kitchens quoting, enabling quick automated quotes and cost estimations, and boosting cross-selling and upselling." />

            </div>

        </div>
        <div class="mobile-app-form-page">
            <div class="form-landing-left">

                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST"
                    class="">
                    <input name="oid" type="hidden" value="00D2v000003PByK" />
                    <input name="retURL" type="hidden" value="https://dealdox.io/thank-you" />
                    <div class="mobile-app-landing-body">
                        <div class="mobile-landing-content-body">
                            <span class="quote-anytime-anywhere">Quote <br> Anytime,<br> Anywhere!</span>
                            <small class="dont-miss-out">Don't miss out! Sign up now to see a demo of DealDox CPQ's
                                mobile app in
                                action.</small>
                        </div>
                        <div class="landing-label-input">
                            <label class="mobile-app-label">Full Name</label>
                            <input type="text" maxlength="40" name="last_name" required class="mobile-app-inputs"
                                id="last_name" placeholder="">
                        </div>


                        <div class="landing-label-input">

                            <label class="mobile-app-label">Email</label>
                            <input type="email" maxlength="40" name="email" required class="mobile-app-inputs"
                                id="email" placeholder="">

                        </div>

                        <div class="landing-label-input">
                            <label class="mobile-app-label">Phone Number</label>
                            <input type="text" v-model="formData.phoneNumber" @input="validatePhoneNumber"
                                @keypress="allowOnlyNumbers" :maxlength="formData.maxPhoneNumberLength" name="phone" required
                                class="mobile-app-inputs" id="phone" maxlength="15" placeholder=""
                                :title="formData.phoneValidationMessage" />
                        </div>
                        <div class="privacy-contents">
                            <input class="" required type="checkbox" value="" id="flexCheckDefault">
                            <label class="" for="flexCheckDefault">
                                By proceeding, I agree to the
                                <NuxtLink to="/privacy-policy">
                                    Terms of Use.</NuxtLink>

                            </label>
                        </div>
                        <div style="display: none;">
                            <label for="lead_source">Lead Source</label>
                            <input id="lead_source" maxlength="40" name="lead_source" size="20" type="text"
                                :value="paramValue ? paramValue : 'CPQ Mobile App'" /><br />
                        </div>
                        <div class="g-recaptcha" data-sitekey="6Lcm03wnAAAAAJ0kn_gkod9i_BiG80TaeGw_xViZ"></div>
                        <div class="loading-submit-button" style="width: 100%;">
                            <button type="submit" name="submit" required class="loading-default-btn"><i
                                    class='bx bx-paper-plane'></i>
                                Submit </button>
                        </div>

                    </div>
                </form>

            </div>
            <div class="form-landing-right">
                <img src="../assets/images/Mobile Landing Page/Website Image Girl.webp" alt=""
                    class="mobile-app-last-image">
            </div>
        </div>







        <DealDoxFooter />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter.vue';
import B2BCard from '../components/MobileAppLanding/B2BCard.vue';
import Testimonials from '../components/MobileAppLanding/Testimonials.vue';


export default {

    components: {
        Navbar,
        DealDoxFooter,
        B2BCard,
        Testimonials
    },
    data() {
        return {
            formData: {
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                country: '',
                message: '',
                agree: false,
                phoneNumber: '',
                maxPhoneNumberLength: 15,
                phoneValidationMessage: 'Please enter exactly 15 numeric digits',
            },
            formErrors: {},
        };
    },
    methods: {

        validatePhoneNumber() {
            // Remove any non-numeric characters from the phone number
            this.formData.phoneNumber = this.formData.phoneNumber.replace(/\D/g, '');
        },
        allowOnlyNumbers(event) {
            // Allow only numeric digits (0-9) in the input field
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                event.preventDefault();
            }
        },
        validateForm() {
            this.formErrors = {};

            const nameRegex = /^[a-zA-Z]+$/;
            const phoneRegex = /^\+?\d{1,4}?\s?\d{6,}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nameRegex.test(this.formData.first_name)) {
                this.formErrors.first_name = 'First Name must contain only letters.';
            }

            if (!nameRegex.test(this.formData.last_name)) {
                this.formErrors.last_name = 'Last Name must contain only letters.';
            }

            if (!phoneRegex.test(this.formData.phoneNumber)) {
                this.formErrors.phoneNumber = 'Please enter a valid phone number.';
            }

            if (!emailRegex.test(this.formData.email)) {
                this.formErrors.email = 'Please enter a valid email address.';
            }





            if (!this.formData.agree) {
                this.formErrors.agree = 'You must agree to the Terms of Use and Privacy Policy.';
            }

            return Object.keys(this.formErrors).length === 0;
        },

        submitForm() {
            if (this.validateForm()) {



                const form = document.querySelector('form');
                form.submit();


            } else {
                console.log('Form validation failed!');
            }
        },
    },
}

</script>

<style>
@import url(../assets/css/MobileLandingCSS.css);
</style>
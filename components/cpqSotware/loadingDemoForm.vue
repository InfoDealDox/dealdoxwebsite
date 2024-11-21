<template>
    <div style="max-width: 1320px;margin: auto;">
        <div class="form-image-landing-container">
            <div class="loadingForms">
                <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST"
                    class="formloadingform">
                    <input name="oid" type="hidden" value="00D2v000003PByK" />
                    <input name="retURL" type="hidden" value="https://dealdox.io/thank-you" />
                    <div class="loaingDemoForm">
                        <span class="loading-get-a-free-demo">Get a free Demo!</span>
                        <div class="label-input-div">
                            <label class="loading-label">Full Name</label>
                            <input type="text" maxlength="40" name="last_name" required class="laoding-input-field"
                                id="last_name" placeholder="">
                        </div>




                        <div class="label-input-div">
                            <label class="loading-label">Phone Number</label>
                            <input type="text" v-model="formData.phoneNumber" @input="validatePhoneNumber"
                                @keypress="allowOnlyNumbers" :maxlength="formData.maxPhoneNumberLength" name="phone"
                                class="laoding-input-field" id="phone" maxlength="15" placeholder=""
                                :title="formData.phoneValidationMessage" />
                        </div>

                        <div class="label-input-div">

                            <label class="loading-label">Email</label>
                            <input type="email" maxlength="40" name="email" required class="laoding-input-field"
                                id="email" placeholder="">

                        </div>

                        <div class="label-input-div">

                            <label class="loading-label">Company</label>
                            <input type="text" maxlength="40" name="company" class="laoding-input-field" id="company"
                                placeholder="">

                        </div>




                        <div class="input-submitting-div">
                            <input class="landing-checkbox" required type="checkbox" value="" id="flexCheckDefault">
                            <label class="loading-privacy-content" for="flexCheckDefault">
                                By submitting this form,you agree to DealDox's
                                <NuxtLink to="/privacy-policy">
                                    privacy policy</NuxtLink>

                            </label>
                        </div>

                        <div style="display: none;">
                            <label for="Contact_us__c">Contact</label>
                            <input id="Contact_us__c" maxlength="40" name="Contact_us__c" size="20" type="text"
                                value="True" /><br />
                        </div>


                        <div style="display: none;">
                            <label for="lead_source">Lead Source</label>
                            <input id="lead_source" maxlength="40" name="lead_source" size="20" type="text"
                                :value="paramValue ? paramValue : 'Google'" /><br />
                        </div>


                        <div class="g-recaptcha" data-sitekey="6Lcm03wnAAAAAJ0kn_gkod9i_BiG80TaeGw_xViZ"></div>

                        <div class="col-lg-12 col-md-12 col-sm-12 loading-submit-button">
                            <button type="submit" name="submit" required class="default-btn"><i
                                    class='bx bx-paper-plane'></i>
                                Submit </button>
                        </div>

                    </div>
                </form>
            </div>
            <div class="loadingDemoImage">
                <div class="landingImageContents">
                    <div class="inside-landing-icon-content">
                        <img src="../../assets/images/dashoardIcon.png" alt="" class="dashboard-loading">
                        <span class="landing-image-discover-content">Discover DealDox CPQ in-depth on your demo
                            call</span>
                    </div>
                    <div class="inside-landing-icon-content">

                        <img src="../../assets/images/brandIconsss.png" alt="" class="dashboard-loading">
                        <span class="landing-image-discover-content">Receive a POC customized to your company's unique
                            needs</span>
                    </div>
                    <div class="inside-landing-icon-content">
                        <img src="../../assets/images/ManLandingDollor.png" alt="" class="dashboard-loading">
                        <span class="landing-image-discover-content">Explore our flexible pricing options at economical
                            rates</span>
                    </div>
                </div>
            </div>
        </div>

    </div>





</template>

<script>





export default {
    name: "loadingDemoForm",
    computed: {
        paramValue() {
            return this.$route.params.source;
        }
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

            if (!nameRegex.test(this.formData.company)) {
                this.formErrors.company = 'Company Name must contain only letters.';
            }

            if (!nameRegex.test(this.formData.country)) {
                this.formErrors.country = 'Country must contain only letters.';
            }

            if (this.formData.message.trim() === '') {
                this.formErrors.message = 'Please leave your message.';
            }

            if (!this.formData.agree) {
                this.formErrors.agree = 'You must agree to the Terms of Use and Privacy Policy.';
            }

            return Object.keys(this.formErrors).length === 0;
        },

        submitForm() {
            if (this.validateForm()) {
                // Submit the form here, e.g., using Axios or fetch API

                const response = grecaptcha.getResponse();

                // Check if reCAPTCHA response is available
                if (response.length === 0) {
                    alert("Please complete the reCAPTCHA.");
                    return;
                }

                // If reCAPTCHA response is available, submit the form
                const form = document.querySelector('form');
                form.submit();


            } else {
                console.log('Form validation failed!');
            }
        },
    },

};

</script>

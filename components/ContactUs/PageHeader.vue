<template>
    <div class="contact-page-header-form-app-download-area pb-80 bg-F7F7FF">
        <div class="container">
            <div class="contact-page-header-form-app-download-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="software-integrations-inner bg-gradient-color">
                            <div class="features-content-improve-sales">
                                <h2>Start Your Free Onboarding Now!</h2>
                                <h6>No credit card or software installation is required.</h6>
                                <h5>With <strong> <a href="https://www.dealdox.io"> Advanced Quoting Solution</a>
                                        , Beyond Invoicing</strong> you can benefit from:
                                </h5>
                                <div class="features-content">
                                    <ul class="features-list">
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription"> <a
                                                    href="https://www.dealdox.io/glossary/guided-selling-solutions">Guided
                                                    selling approach</a>
                                                to empower
                                                sales reps, leaders, and other teams
                                                for efficient sales processes and optimized decision-making.</h6>
                                        </li>

                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">Generate Accurate and Comprehensive
                                                Quotes in Record Time at 10x speed.</h6>
                                        </li>

                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">Effortlessly generate accurate deal
                                                documents like quotations, proposals,
                                                SOWs, orders, and more.</h6>
                                        </li>

                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">Streamline single or <a
                                                    href="https://www.dealdox.io/approval-software">multi-level
                                                    approvals</a>
                                                faster.</h6>
                                        </li>

                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">Get your <a
                                                    href="https://www.dealdox.io/">deal documents in your
                                                    local language,</a> regardless of your country.
                                            </h6>
                                        </li>
                                        <h5>Question? Talk to an expert: <span class="sub-title-faq">+91 8431995645</span>
                                        </h5>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="contact-area">
                            <div class="container">
                                <div class="contact-form">
                                    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                        method="POST">
                                        <input name="oid" type="hidden" value="00D2v000003PByK" />
                                        <input name="retURL" type="hidden" value="https://dealdox.io/thank-you" />
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>First Name</p>
                                                    <input type="text" maxlength="40" name="first_name" required
                                                        class="form-control" id="first_name" placeholder="Eg: David">
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Last Name</p>
                                                    <input type="text" maxlength="40" name="last_name" class="form-control"
                                                        id="last_name" placeholder="Eg: Jhon">
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <p>Phone Number</p>
                                                <input type="text" v-model="phoneNumber" @input="validatePhoneNumber"
                                                    @keypress="allowOnlyNumbers" :maxlength="maxPhoneNumberLength"
                                                    name="phone" class="form-control" id="phone" maxlength="15"
                                                    placeholder="Eg: 123456789012345" :title="phoneValidationMessage" />
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Email</p>
                                                    <input type="email" maxlength="40" name="email" required
                                                        class="form-control" id="email" placeholder="Eg: abc@gmail.com">
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Company</p>
                                                    <input type="text" maxlength="40" name="company" class="form-control"
                                                        id="company" placeholder="Eg: ABC">
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Country</p>
                                                    <input type="country" maxlength="40" name="country" class="form-control"
                                                        id="country" placeholder="Eg: India">
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Leave your message</p>
                                                    <textarea name="00N2v00000XQu8f" id="00N2v00000XQu8f"
                                                        class="form-control" cols="30" rows="6"
                                                        placeholder="This just a dummy message! please dont mind"></textarea>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <input class="form-check-input" required type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        I agree to the <NuxtLink to="/terms-of-use"> Terms of
                                                            Use</NuxtLink>
                                                    </label>
                                                </div>
                                            </div>

                                            <p> By registering, you confirm that you agree to the storing and processing of
                                                your personal data by DealDox as described in the<NuxtLink
                                                    to="/privacy-policy">
                                                    Privacy Statement.</NuxtLink>
                                            </p>

                                            <div style="display: none;">
                                                <label for="Contact_us__c">Contact</label>
                                                <input id="Contact_us__c" maxlength="40" name="Contact_us__c" size="20"
                                                    type="text" value="True" /><br />
                                            </div>

                                            <div class="g-recaptcha"
                                                data-sitekey="6Lcm03wnAAAAAJ0kn_gkod9i_BiG80TaeGw_xViZ"></div>

                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <button type="submit" name="submit" required class="default-btn"><i
                                                        class='bx bx-paper-plane'></i>
                                                    Submit </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
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
            this.phoneNumber = this.phoneNumber.replace(/\D/g, '');
        },
        allowOnlyNumbers(event) {
            // Allow only numeric digits (0-9) in the input field
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                event.preventDefault();
            }
        },
        submitForm() {
            const response = grecaptcha.getResponse();

            // Check if reCAPTCHA response is available
            if (response.length === 0) {
                alert("Please complete the reCAPTCHA.");
                return;
            }

            // If reCAPTCHA response is available, submit the form
            const form = document.querySelector('form');
            form.submit();
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
                console.log('Form submitted successfully!');
            } else {
                console.log('Form validation failed!');
            }
        },
    },
};
</script>
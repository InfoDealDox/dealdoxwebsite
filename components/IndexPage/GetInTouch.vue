<template>
    <div class="app-download-area pt-70">
        <div class="container">
            <div class="app-download-inner bg-gray">
                <div class="contact-page-header-form-app-download-inner">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="software-integrations-inner bg-gradient-color">
                                <div class="features-content-improve-sales">
                                    <h2>Start Your Free Onboarding Now!</h2>
                                    <h6>No credit card or software installation is required.</h6>
                                    <h5>With <strong>Advanced Quoting Solution, Beyond Invoicing</strong> you can benefit
                                        from:
                                    </h5>
                                    <div class="features-content">
                                        <ul class="features-list">
                                            <li>
                                                <div class="icon">
                                                    <i class="ri-check-line"></i>
                                                </div>
                                                <h6 class="with-top-border-subscription">Guided selling approach to empower
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
                                                <h6 class="with-top-border-subscription">Streamline single or multi-level
                                                    approvals faster.</h6>
                                            </li>

                                            <li>
                                                <div class="icon">
                                                    <i class="ri-check-line"></i>
                                                </div>
                                                <h6 class="with-top-border-subscription">Get your deal documents in your
                                                    local language, regardless of your
                                                    country.
                                                </h6>
                                            </li>
                                            <h5>Question? Talk to an expert: <span class="sub-title-faq">8431995645</span>
                                            </h5>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 ptb-100">
                            <div class="contact-area">
                                <div class="container">
                                    <div class="contact-form">
                                        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                            method="POST">
                                            <input name="oid" type="hidden" value="00D2v000003PByK" />
                                            <input name="retURL" type="hidden"
                                                value="https://dealdox.io/thank-you" />
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
                                                        <input type="text" maxlength="40" name="last_name"
                                                            class="form-control" id="last_name" placeholder="Eg: Marsh">
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>Phone Number</p>
                                                        <input type="text" v-model="phoneNumber"
                                                            @input="validatePhoneNumber" @keypress="allowOnlyNumbers"
                                                            :maxlength="maxPhoneNumberLength" name="phone"
                                                            class="form-control" id="phone" maxlength="15"
                                                            placeholder="Eg: 123456789012345"
                                                            :title="phoneValidationMessage" />
                                                    </div>
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
                                                        <p>Job Title</p>
                                                        <input type="text" maxlength="40" name="title"
                                                            class="form-control" id="title"
                                                            placeholder="Eg: Associate Consultant">
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>Company</p>
                                                        <input type="text" maxlength="40" name="company"
                                                            class="form-control" id="company" placeholder="Eg: ABC">
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>Employees</p>
                                                        <select required name="Employees__c" id="Employees__c"
                                                            class="form-control">
                                                            <option>--None--</option>
                                                            <option value="1-20">1-20</option>
                                                            <option value="21-200">21-200</option>
                                                            <option value="201-10000">201-10000</option>
                                                            <option value="10000+">10000+</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Country</p>
                                                    <input type="country" maxlength="40" name="country"
                                                        class="form-control" id="country" placeholder="Eg: India">
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

                                                <p> By registering, you confirm that you agree to the storing and processing
                                                    of
                                                    your personal data by DealDox as described in the<NuxtLink
                                                        to="/privacy-policy">
                                                        Privacy </NuxtLink> Statement. </p>

                                                <div style="display: none;">
                                                    <label for="Sign_Up__c">Start My Free Trial</label>
                                                    <input id="Sign_Up__c" maxlength="40" name="Sign_Up__c" size="20"
                                                        type="text" value="True" /><br />
                                                </div>

                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <button type="submit" name="submit" required class="default-btn"><i
                                                            class='bx bx-paper-plane'></i>
                                                        Start My Free Trial </button>
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
    </div>
</template>

<script>
new Vue({
    el: '#contact-form',
    data: {
        formData: {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            company: '',
            country: '',
            message: '',
            agree_terms: true,
            phoneNumber: '',
            maxPhoneNumberLength: 15,
            phoneValidationMessage: 'Please enter exactly 15 numeric digits',
        },
        errors: {}
    },
});

import Vue from 'vue'

export default {

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

        validateForm() {
            this.errors = {};

            if (!this.formData.first_name) {
                this.errors.first_name = 'First Name is required.';
            }

            if (!this.formData.last_name) {
                this.errors.last_name = 'Last Name is required.';
            }

            if (!this.formData.phoneNumber) {
                this.errors.phoneNumber = 'Phone is required.';
            }

            if (!this.formData.email) {
                this.errors.email = 'Email is required.';
            } else if (!this.isValidEmail(this.formData.email)) {
                this.errors.email = 'Please enter a valid email address.';
            }

            if (!this.formData.company) {
                this.errors.company = 'Company is required.';
            }

            if (!this.formData.country) {
                this.errors.country = 'Country is required.';
            }

            if (!this.formData.message) {
                this.errors.message = 'Message is required.';
            }

            if (!this.formData.agree_terms) {
                this.errors.agree_terms = 'You must agree to the Terms of Use.';
            }

            return Object.keys(this.errors).length === 0;
        },
        isValidEmail(email) {
            // You can implement your own email validation logic here.
            // For a simple example, let's check if the email contains '@'.
            return email.includes('@');
        },
        onSubmit() {
            if (this.validateForm()) {
                // Submit the form
                // For example, you can use axios or fetch to submit the form data to the server.
                // You can also redirect to the 'thank-you' page after successful submission.
                //   alert('Form submitted successfully!');
                // this.$refs.contactForm.submit(); // Uncomment this line if you want to submit the form using HTML form submission.
            }
        }
    },

    name: 'AppDownload',
}
</script>
<template>
    <div class="contact-page-header-form-app-download-area pb-80 bg-F7F7FF">
        <div class="container">
            <div class="contact-page-header-form-app-download-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="software-integrations-inner bg-gradient-color">
                            <div class="features-content-improve-sales">
                                <h2>Sign Up Now and Start Using DealDox CPQ! </h2>
                                <h6>Tired of tedious Quoting? Boost Your Sales with DealDox CPQ. Sign up now and unleash its
                                    power!</h6>
                                <h5><strong>With DD CPQ platform, you'll experience: </strong>
                                </h5>
                                <div class="features-content">
                                    <ul class="features-list">
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">Streamlined Quotation Process
                                            </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Faster Deal Closures </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Dynamic Pricing and Product Bundling</h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">Real-time Pricing and Availability
                                            </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Enhanced Customer Experience
                                            </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Actionable Analytics
                                            </h6>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <h6 class="with-top-border-subscription">
                                                Multi-lingual Deal Document Capabilities
                                            </h6>
                                        </li>
                                        <h5>Sign up Now and Boost Your Sales Process with DealDox CPQ!</h5>
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
            <p>Full Name</p>
            <input type="text" maxlength="40" name="last_name" class="form-control" id="last_name" placeholder="Eg: David" required>      
        </div>
    </div>

     <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p> Business Email</p>
                                                    <input type="email" maxlength="40" name="email" required
                                                        class="form-control" id="email" placeholder="Eg: abc@gmail.com">
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
                                                    <p>Company</p>
                                                    <input type="text" maxlength="40" name="company"
                                                        class="form-control" id="company" placeholder="Eg: ABC">
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

                                            <p> By registering, you confirm that you agree to the storing and processing of
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
</template>

<script>
new Vue({
    el: '#contact-form',
    data: {
        formData: {
            first_name: '',
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

             if (!this.isValidname(this.formData.name)) {
                this.errors.name = 'Please enter a valid full name';
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
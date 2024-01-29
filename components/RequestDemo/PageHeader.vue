<template>
    <div class="contact-page-header-form-app-download-area pb-80 bg-F7F7FF">
        <div class="container">
            <div class="contact-page-header-form-app-download-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="software-integrations-inner bg-gradient-color">
                            <div class="features-content-improve-sales">
                                <h4> Start Your Free Onboarding Now!!</h4>
                                <p>No credit card or software installation is required. </p>
                                <h6> With Advanced Quoting Solution, Beyond Invoicing you can benefit from: </h6>

                                <div class="features-content">
                                    <ul class="features-list">
                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <p>Guided selling approach to empower sales reps, leaders, and other teams for
                                                efficient sales processes and optimized decision-making.</p>
                                        </li>

                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <p>Generate Accurate and Comprehensive Quotes in Record Time at 10x speed.</p>
                                        </li>

                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <p>Effortlessly generate accurate deal documents like quotations, proposals,
                                                SOWs, orders, and more.</p>
                                        </li>

                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <p>Streamline single or multi-level approvals faster.</p>
                                        </li>

                                        <li>
                                            <div class="icon">
                                                <i class="ri-check-line"></i>
                                            </div>
                                            <p>Get your deal documents in your local language, regardless of your country.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="contact-limited-offer">
                                <div class="signup-button">
                                    <div class="btn-box">
                                        <!-- <NuxtLink to="/SignUp" class="default-btn">Sign Up</NuxtLink> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="contact-area pbt-75">
                            <div class="container">
                                <div class="contact-form">
                                    <form id="contactForm">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>First Name</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Last Name</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Job Title</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Company</p>
                                                    <input type="text" name="name" class="form-control" required id="name"
                                                        placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Employees</p>
                                                    <select required name="experience" class="form-select">
                                                        <option>1 – 20</option>
                                                        <option>21 – 200</option>
                                                        <option>201 – 10,000</option>
                                                        <option>10,001 +</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Country Region</p>
                                                    <input type="text" name="name" required class="form-control" id="name"
                                                        placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Phone Number</p>
                                                    <input type="text" v-model="phoneNumber" @input="validatePhoneNumber"
                                                        @keypress="allowOnlyNumbers" :maxlength="maxPhoneNumberLength"
                                                        name="phone" required class="form-control" id="phone" maxlength="15"
                                                        placeholder="" :title="phoneValidationMessage" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Business Email</p>
                                                    <input type="email" name="email" required class="form-control"
                                                        id="email" placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Leave your message</p>
                                                    <textarea name="message" id="message" required class="form-control"
                                                        cols="30" rows="6"
                                                        placeholder="This just a dummy message! please dont mind"></textarea>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="form-group">
                                                        <input class="form-check-input" type="checkbox" value=""
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
                                                    Privacy Statement.  </NuxtLink></p>

                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <button type="submit" required class="default-btn"><i
                                                        class='bx bx-paper-plane'></i>
                                                    Submit</button>
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




    name: 'AppDownload'
}
</script>
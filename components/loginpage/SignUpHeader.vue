<template>
    <div class="contact-page-header-form-app-download-area ptb-100 bg-white">
        <div class="container">
            <div class="contact-page-header-form-app-download-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="software-integrations-inner ">
                            <div class="about-img-login">
                                <img src="../../assets/images/logohome.svg" data-aos="fade-up" alt="about">
                            </div>
                            <div class="features-content-improve-sales">
                                <!-- <h2> Welcome to the entrance Log in to continue </h2> -->
                                <!-- <h5>Login to your account, it takes less than a minute. Enter your email and password</h5> -->
                                <div class="contact-form">
                                    <form id="contact-form"
                                        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                        method="POST">
                                        <input name="oid" type="hidden" value="00D2v000003PByK" />
                                        <input name="retURL" type="hidden" value="https://www.dealdox.io/thank-you" />
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Email</p>
                                                    <input type="email" maxlength="40" name="first_name" required
                                                        class="form-control" id="first_name" placeholder="">
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <p>Password</p>
                                                    <input type="password" maxlength="40" name="last_name" required
                                                        class="form-control" id="last_name" placeholder="">
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Remember me <NuxtLink to="/terms-of-use"> </NuxtLink>
                                                    </label>
                                                    <label class="form-check-label-one" for="flexCheckDefault">
                                                        <NuxtLink to="/sign-up-free-trial"> forgot my password?
                                                        </NuxtLink>

                                                    </label>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <button type="submit" name="submit" required class="default-btn-one"><i
                                                        class='bx bx-paper-plane'></i>
                                                    Log In </button>
                                            </div>
                                            <p> Haven’t joined us as a customer yet? <span class="sub-title-faq">
                                                    <NuxtLink to="/sign-up-free-trial"> Sign Up</NuxtLink>
                                                </span> </p>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">© 2024 DealDox Software Pvt Ltd</div>
                            <div class="col-sm-4">All rights reserved</div>
                            <div class="col-sm-4">Privacy</div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12  bg-f4f4f6">
                        <div class="contact-area">
                            <div class="container">
                                <div class="contact-form ">
                                    <div class="row ">
                                        <div class="section-title-home">
                                        </div>
                                        <div class="app-download-content-one">
                                            <h4>Generate Quotations 10x Faster with DealDox CPQ!</h4>
                                            <h6> Close deals faster now</h6>
                                            <p> Introducing DealDox, your ultimate destination for streamlining
                                                sales processes. Emrace our Lighting Platform, delivering
                                                unparalleled speed and comprehensive automation for your sales
                                                cycle. Say goodbye to lengthy negotiations and welcome a quicker,
                                                more efficient way to close deals.</p>

                                        </div>
                                        <div class="section-title-home">
                                        </div>
                                        <!-- <div class="col-lg-12 col-md-12 col-sm-12">
                                                <button type="submit" name="submit" required class="default-btn-two"><i
                                                        class='bx bx-paper-plane'></i>
                                                    Request Demo </button>
                                            </div> -->
                                        <div class="">
                                            <img src="../../assets/images/logingroup.png" data-aos="fade-up"
                                                alt="about">
                                        </div>
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
// new Vue({
//     el: '#contact-form',
//     data: {
//         formData: {
//             first_name: '',
//             last_name: '',
//             phone: '',
//             email: '',
//             company: '',
//             country: '',
//             message: '',
//             agree_terms: true,
//             phoneNumber: '',
//             maxPhoneNumberLength: 15,
//             phoneValidationMessage: 'Please enter exactly 15 numeric digits',
//         },
//         errors: {}
//     },
// });

// import Vue from 'vue'

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
                agree_terms: true,
                phoneNumber: '',
                maxPhoneNumberLength: 15,
                phoneValidationMessage: 'Please enter exactly 15 numeric digits',
            },
            errors: {}
        }
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
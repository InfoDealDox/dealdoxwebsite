<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                        </div>
                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><i class="ri-calendar-2-line"></i>{{ details[0].attributes.date }}</li>
                                </ul>
                            </div>
                            <h4>{{ details[0].attributes.name }}</h4>
                            <span v-html="details[0].attributes.description"></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 ptb-100">
                    <div class="contact-area">
                        <div class="container">
                            <div class="section-title-about">
                                <h3>Download Now</h3>
                            </div>
                            <div class="contact-form">
                                <form id="contact-form"
                                    action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                    method="POST">
                                    <input name="oid" type="hidden" value="00D2v000003PByK" />
                                    <input name="retURL" type="hidden" value="https://dealdox.io/thank-you" />
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>First Name</p>
                                                <input type="text" maxlength="40" name="first_name" required
                                                    class="form-control" id="first_name" placeholder="">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Last Name</p>
                                                <input type="text" maxlength="40" name="last_name" class="form-control"
                                                    id="last_name" placeholder="">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Phone Number</p>
                                                <input type="text" v-model="formData.phoneNumber" @input="validatePhoneNumber"
                                                    @keypress="allowOnlyNumbers" :maxlength="formData.maxPhoneNumberLength"
                                                    name="phone" class="form-control" id="phone" maxlength="15"
                                                    placeholder="" :title="formData.phoneValidationMessage" />
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Email</p>
                                                <input type="email" maxlength="40" name="email" required
                                                    class="form-control" id="email" placeholder="">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Job Title</p>
                                                <input type="text" maxlength="40" name="title" class="form-control"
                                                    id="title" placeholder="">
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <p>Company</p>
                                                <input type="text" maxlength="40" name="company" class="form-control"
                                                    id="company" placeholder="">
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <p>Country</p>
                                                <input type="country" maxlength="40" name="country" class="form-control"
                                                    id="country" placeholder="">
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
                                                to="/privacy-policy"> Privacy Statement.</NuxtLink>
                                        </p>


                                        <div style="display: none;">
                                            <label for="eBook__c">Contact</label>
                                            <input id="eBook__c" maxlength="40" name="eBook__c" size="20" type="text"
                                                value="True" /><br />
                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <button type="submit" name="submit" required class="default-btn"><i
                                                    class='bx bx-paper-plane'></i>
                                                Download </button>i
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
</template>

<script>
// new Vue({
//     el: '#contact-form',
//     data: {
//       formData: {
//         first_name: '',
//         last_name: '',
//         phone: '',
//         email: '',
//         company: '',
//         country: '',
//         message: '',
//         agree_terms: true,
//         phoneNumber: '',
//       maxPhoneNumberLength: 15,
//       phoneValidationMessage: 'Please enter exactly 15 numeric digits',
//       },
//       errors: {}
//     },
// });

// import Vue from 'vue'
import axios from 'axios'

export default {

    /* Form Code Added for validation purpose */
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


    name: 'BlogDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            blogs: [],
            ebooks: [],
        }
    },
    created: async function () {
        const response = await axios.get('https://cms.dealdox.io/api/ebooks?populate=*')
        this.ebooks = response.data.data;
    },
}
</script>
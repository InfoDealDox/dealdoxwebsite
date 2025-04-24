<template>
    <div class="features-area pb-80 tb-20 bg-FAFAFA customize-padding-top">
        <div class="container">
            <div class="software-integrations-inner">
                <div class="row align-items-center mobile-version-gap-div">
                    <div class="col-lg-6 col-md-12">
                        <div class="features-content">
                            <ul class="features-list">
                                <h2>Transform Deals with <br><span class="sub-title">DealDox</span> in Action!</h2>
                                <p>A centralized platform for Automated Quote Generation, <a
                                        href="https://www.dealdox.io/services-cpq">Accurate Pricing,</a> Product
                                    Bundling
                                    and Upselling, Margin Optimization, Cost Visibility, Efficient Pricing Strategy,
                                    <a href="https://www.dealdox.io/localized-deal-documents">Customize Deal Documents
                                        in your desired language,</a>
                                    and more!
                                </p>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p class="with-top-border">Easy to Use</p>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p class="with-top-border">Totally Unified</p>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <p>Close Deals Faster</p>
                                </li>
                            </ul>
                            <div class="btn-box">
                                <NuxtLink to="/cpq-integrations" class="default-btn">Know more</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="contact-area">
                            <div class="container">
                                <div class="contact-form">
                                    <form id="contact-form" @submit="onSubmit" ref="form" method="POST">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>First Name</p>
                                                    <input type="text" maxlength="40" name="first_name" required
                                                        class="form-control" id="first_name" placeholder=""
                                                        v-model="formData.first_name">
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Last Name</p>
                                                    <input type="text" maxlength="40" name="last_name"
                                                        class="form-control" id="last_name" placeholder=""
                                                        v-model="formData.last_name">
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Phone Number</p>
                                                    <input type="text" v-model="formData.phoneNumber"
                                                        @input="validatePhoneNumber" @keypress="allowOnlyNumbers"
                                                        :maxlength="formData.maxPhoneNumberLength" name="phone"
                                                        class="form-control" id="phone" maxlength="15" placeholder=""
                                                        required :title="formData.phoneValidationMessage" />



                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Email</p>
                                                    <input type="email" maxlength="40" name="email" required
                                                        class="form-control" id="email" placeholder=""
                                                        v-model="formData.email">
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Job Title</p>
                                                    <input type="text" maxlength="40" name="title" class="form-control"
                                                        id="title" placeholder="" v-model="formData.jobtitle">
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Company</p>
                                                    <input type="text" maxlength="40" name="company"
                                                        class="form-control" id="company" placeholder="" required
                                                        v-model="formData.company">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <p>Employees</p>
                                                    <select name="Employees__c" id="Employees__c" required
                                                        class="form-control" v-model="formData.noofemployees">
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
                                                        class="form-control" id="country" placeholder=""
                                                        v-model="formData.country">
                                                </div>
                                            </div>
                                            <div style="display: none;">
                                                <label for="Request_demo__c">Start</label>
                                                <input id="Request_demo__c" maxlength="40" name="Request_demo__c"
                                                    size="20" type="text" value="True" /><br />
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <input class="form-check-input" required type="checkbox" value=""
                                                        id="flexCheckDefault" v-model="formData.agree_terms">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        By proceeding, I agree to the <NuxtLink to="/terms-of-use">
                                                            Terms of Use.</NuxtLink>
                                                    </label>
                                                </div>
                                            </div>

                                            <span style="color: red;font-size: 12px;">{{ this.apiResponseData }}</span>

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

import axios from 'axios';
export default {

    data() {

        return {

            formData: {

                first_name: '',

                last_name: '',

                // phone: '',

                email: '',

                company: '',

                country: '',

                message: '',

                jobtitle: '',

                noofemployees: null,
                phoneNumber: '',

                source: "DealDox demo",

                adminid: "6806315dab518273bbcf04c9",


            },

            apiResponseData: "",

            errors: {},

            num1: this.generateRandomNumber(),

            num2: this.generateRandomNumber(),

            userAnswer: ''

        }

    },

    methods: {

        generateRandomNumber() {

            return Math.floor(Math.random() * 10); // Random number between 0 and 9

        },

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

            // if (!this.formData.last_name) {

            //     this.errors.last_name = 'Last Name is required.';

            // }

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

            // if (!this.formData.country) {

            //     this.errors.country = 'Country is required.';

            // }

            // if (!this.formData.message) {

            //     this.errors.message = 'Message is required.';

            // }

            // if (!this.formData.Employees__c) {

            //     this.errors.Employees__c = 'Message is required.';

            // }

            if (!this.formData.agree_terms) {

                this.errors.agree_terms = 'You must agree to the Terms of Use.';

            }

            // if (!this.userAnswer || parseInt(this.userAnswer) !== this.num1 + this.num2) {

            //     this.errors.recaptcha = "You entered the wrong captcha value.";

            // }

            console.log("demo", this.errors);

            return Object.keys(this.errors).length === 0;

        },

        isValidEmail(email) {

            // You can implement your own email validation logic here.

            // For a simple example, let's check if the email contains '@'.

            return email.includes('@');

        },

        async onSubmit(event) {

            event.preventDefault();

            if (this.validateForm()) {

                try {

                    const response = await axios.post("https://dev-api.dealdox.io/api/weblead/webleadUser", this.formData);

                    if (response.data.status === "Success") {

                        this.$router.push({ name: 'thanks' });

                    } else {

                        this.apiResponseData = response.data.message;

                    }

                } catch (error) {

                    if (error.response && error.response.data) {

                        // Handle specific error from backend

                        this.apiResponseData = error.response.data.message || "Something went wrong";

                    } else {

                        console.log("Unable to create");

                    }

                }

            } else {

                event.preventDefault();

            }

        }

    },

    name: 'EasyIntegration',

}
</script>




<style>
@media (max-width:750px) {
    .customize-padding-top {
        padding-top: 28px !important;
    }



    .mobile-version-gap-div {
        gap: 25px;
    }
}
</style>
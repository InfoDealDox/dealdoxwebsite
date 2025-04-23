<template>
    <div class="contact-us-body-bg">


        <div class="left-contact-us-body">
            <h1 class="contact-us-heading">Contact Us</h1>
            <div class="queries-support">
                <small><b>Call:</b> +91-9741429514</small>

                <small><b>General queries:</b> info@dealdox.io </small>

                <small><b>Support:</b> support@dealdox.io </small>
            </div>
            <div class="contact-us-address-body">

                <h2 class="contact-us-address-keyword">Address</h2>

                <small> HD-253, WeWork Prestige Central,</small>
                <small> 36, Infantry Road,</small>
                <small>Bangalore - 560001,</small>
                <small>Karnataka, India. </small>

            </div>

            <NuxtLink to='/pricing'><button class="get-price-contact-us">Get Pricing</button></NuxtLink>

            <div class="contact-us-logo-body">
                <img src="../../assets/images/BannerAssets/G2.png" class="contact-us-logo-image" alt="G2-Company">
                <img src="../../assets/images/capterrawhitelogo.jpg" class="contact-us-logo-image"
                    alt="Capterra-Company" id="capterra-contact-us">

                <img src="../../assets/images/Gartnerwhitelogo.png" id="gartner-contact-us"
                    class="contact-us-logo-image" alt="Gartner-Company">
                <img src="../../assets/images/software_advice_webp.webp" class="contact-us-logo-image-softwareAdvice"
                    alt="Software Advice Company" style="">

            </div>

        </div>

        <div class="form-field-body" style="color: white;">
            <div class="form-field-body-header" style="color: black;">
                <span class="need-help-keyword">Need help?</span>
                <small class="we-re-assist-you">We're here to assist you…</small>
            </div>
            <div class="contact-area" style="padding: 20px;">
                <div class="container">
                    <div class="contact-form">
                        <form @submit="onSubmit" ref="form" method="POST">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group" id="form-group-id">
                                        <!-- <p>First Name</p> -->
                                        <input type="text" maxlength="40" name="first_name" required
                                            class="form-control" id="first_name" placeholder="First Name*"
                                            v-model="formData.first_name">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group" id="form-group-id">
                                        <!-- <p>Last Name</p> -->
                                        <input type="text" maxlength="40" name="last_name" class="form-control"
                                            id="last_name" placeholder="Last Name*" v-model="formData.last_name">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group" id="form-group-id">
                                        <input type="text" v-model="formData.phoneNumber" @input="validatePhoneNumber"
                                            @keypress="allowOnlyNumbers" :maxlength="formData.maxPhoneNumberLength"
                                            name="phone" class="form-control phone-numner-contact-us-border" id="phone" required
                                            maxlength="15" placeholder="Phone Number"
                                            :title="formData.phoneValidationMessage" />
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group" id="form-group-id">
                                        <!-- <p>Email</p> -->
                                        <input type="email" maxlength="40" name="email" required class="form-control"
                                            id="email" placeholder="Email*" v-model="formData.email">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group" id="form-group-id">
                                        <!-- <p>Company</p> -->
                                        <input type="text" maxlength="40" name="company" class="form-control" required
                                            id="company" placeholder="Company*" v-model="formData.company">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group" id="form-group-id">
                                        <!-- <p>Country</p> -->
                                        <input type="country" maxlength="40" name="country" class="form-control"
                                            id="country" placeholder="Country" v-model="formData.country">
                                    </div>
                                </div>


                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group" id="form-group-id">
                                        <!-- <p></p> -->
                                        <textarea name="00N2v00000XQu8f" id="00N2v00000XQu8f" class="form-control"
                                            cols="30" rows="6" placeholder="Leave your message"
                                            v-model="formData.message" style="height: 75px;"></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group" id="form-group-id">
                                        <input class="form-check-input" required type="checkbox" value=""
                                            id="flexCheckDefault" v-model="formData.agree">
                                        <label class="form-check-label" for="flexCheckDefault"
                                            style="color: black;margin-top: 2px;font-size: 14px;">

                                            By proceeding, I agree to the <NuxtLink to="/terms-of-use">Terms of Use.
                                            </NuxtLink>
                                        </label>
                                    </div>
                                </div>





                                <span :style="{ color: 'red', fontSize: '13px' }">

                                    {{ apiResponseData }}
                                </span>



                                <div class="col-lg-12 col-md-12 col-sm-12" style="width: 100%;justify-content: center;">
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
</template>


<script>

import axios from 'axios'

export default {



    data() {

        return {

            formData: {

                first_name: '',

                last_name: '',

                email: '',

                company: '',

                country: '',

                message: '',

                agree: false,

                formFrom: "DealDox Contact Us",

                adminid: "6806315dab518273bbcf04c9",

                phoneNumber: '',

            },

            formErrors: {},

            num1: this.generateRandomNumber(),

            num2: this.generateRandomNumber(),

            userAnswer: '',

            apiResponseData: ""

        };

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

            this.formErrors = {};

            const nameRegex = /^[a-zA-Z ]+$/;

            const phoneRegex = /^\+?\d{1,4}?\s?\d{6,}$/;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nameRegex.test(this.formData.first_name)) {

                this.formErrors.first_name = 'First Name must contain only letters.';

            }

            // if (!nameRegex.test(this.formData.last_name)) {

            //     this.formErrors.last_name = 'Last Name must contain only letters.';

            // }

            // if (!phoneRegex.test(this.formData.phoneNumber)) {

            //     this.formErrors.phoneNumber = 'Please enter a valid phone number.';

            // }

            if (!emailRegex.test(this.formData.email)) {

                this.formErrors.email = 'Please enter a valid email address.';

            }

            if (!nameRegex.test(this.formData.company)) {

                this.formErrors.company = 'Company Name must contain only letters.';

            }

            // if (!nameRegex.test(this.formData.country)) {

            //     this.formErrors.country = 'Country must contain only letters.';

            // }

            // if (this.formData.message.trim() === '') {

            //     this.formErrors.message = 'Please leave your message.';

            // }

            if (!this.formData.agree) {

                this.formErrors.agree = 'You must agree to the Terms of Use and Privacy Policy.';

            }

            // if (!this.userAnswer || parseInt(this.userAnswer) !== this.num1 + this.num2) {

            //     this.formErrors.recaptcha = "You entered the wrong captcha value.";

            // }

            console.log("formErrors", this.formErrors)


            return Object.keys(this.formErrors).length === 0;

        },

        async onSubmit(event) {

            event.preventDefault();

            if (this.validateForm()) {

                try {

                    const response = await axios.post("http://localhost:4001/api/weblead/webleadUser", this.formData);

                    if (response.data.status === "Success") {

                        this.$router.push({ name: 'thanks' });

                    } else {

                        this.apiResponseData = response.data.message;

                    }

                } catch (error) {

                    if (error.response && error.response.data) {
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

};
</script>




<style>
@import url(../../assets/css/pages-css/ContactUsNew.css);

.contact-us-address-body {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 5px;
}

.honeypot {
    display: none;
}

.error {
    color: red;
    font-size: 12px;
}

.captcha-container {
    display: flex;
    flex-direction: column;

}

.ebook-captcha-container {
    width: 25%;
    background-color: white;
    /* margin: 10px auto; */
    border-radius: 3px;
    color: black;
    display: flex;
    justify-content: center;
    border: 0.1px solid #eeeeee;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;



}

.ebookkss-labellsss {
    color: black;
    font-weight: bold;
    font-style: italic;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 0px;
}

.captcha-inputs-container {
    background-color: white;
    width: 75%;
    padding: 27px 5px;

    border: 0.1px solid #eeeeee;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    outline-color: #715CF3;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

}

.recaptcha-content-rowss {
    display: flex;
}

.captcha-inputs-container::placeholder {
    color: #ccc;
    font-style: italic;
}

.phone-numner-contact-us-border {
    border: 1px solid #eeeeee !important;
}

.contact-us-logo-image-softwareAdvice {
    height: 21px;
}

.form-control::placeholder {
    color: #848484 !important;
    font-size: 15px;
}

#form-group-id {
    margin-bottom: 25px !important;
}


@media (max-width: 750px) {
    .captcha-inputs-container {
        width: 60%;
    }

    .ebook-captcha-container {
        width: 40%;
    }
}
</style>
<template>
    <div class="document-form-body">
        <div class="document_form_wrapper">
            <h2>Get ready to streamline your document generation process </h2>

            <span> How DealDox Drives Your Revenue Growth Beyond Document Generation </span>
        </div>



        <div class="" style="color: white;">
            <div class="" style="padding:14px 20px;">
                <div class="">
                    <div class="">
                        <form @submit="onSubmit" ref="form" method="POST">
                            <div>
                                <div class="document_form_wrapper_inputs">
                                    <div class="">
                                        <div class="">
                                            <label for="">Full Name</label>
                                            <input type="text" maxlength="40" name="first_name" required
                                                class="form-control" id="" placeholder="First Name*"
                                                v-model="formData.first_name">
                                        </div>
                                    </div>



                                    <div class="">
                                        <div class="">
                                            <label for="">Email</label>
                                            <input type="email" maxlength="40" name="email" required
                                                class="form-control" id="email" placeholder="Email*"
                                                v-model="formData.email">
                                        </div>
                                    </div>

                                </div>


                                <div class="form_group_container_proceed" id="">
                                    <input class="form-check-input" required type="checkbox" value=""
                                        id="flexCheckDefault" v-model="formData.agree">
                                    <label class="form-check-label" for="flexCheckDefault"
                                        style="color: black;margin-top: 2px;font-size: 14px;color: white;">

                                        By proceeding, I agree to the <NuxtLink to="/terms-of-use">Terms of Use.
                                        </NuxtLink>
                                    </label>
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

    name: "DocumentForm",

    data() {

        return {

            formData: {

                first_name: '',

                // last_name: '',

                email: '',

                // company: '',

                // country: '',

                // message: '',

                agree: false,

                source: "DealDox Contact Us",

                adminid: "6806315dab518273bbcf04c9",

                // phoneNumber: '',

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



            if (!emailRegex.test(this.formData.email)) {

                this.formErrors.email = 'Please enter a valid email address.';

            }

            // if (!nameRegex.test(this.formData.company)) {

            //     this.formErrors.company = 'Company Name must contain only letters.';

            // }



            if (!this.formData.agree) {

                this.formErrors.agree = 'You must agree to the Terms of Use and Privacy Policy.';

            }



            console.log("formErrors", this.formErrors)


            return Object.keys(this.formErrors).length === 0;

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
.document-form-body {
    display: flex;
    min-height: 250px;
    padding: 31px 3%;
    margin: auto;
    gap: 20px;
    color: white;
    background-image: url(../../assets/images/sales-optimize/salesforceoptimizationBg.webp);
    justify-content: space-between;
    align-items: flex-start;
}

.document-form-body div {
    flex: 1;
}

.document_form_wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.document_form_wrapper h2 {
    color: white;
    font-size: 40px;
    font-family: "Montserrat";
}

.document_form_wrapper_inputs {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.form_group_container_proceed {
    padding: 10px 0px;
    color: white;
}
</style>
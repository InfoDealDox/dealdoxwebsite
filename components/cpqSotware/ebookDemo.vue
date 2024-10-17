<template>
    <div>
        <div style="max-width: 1320px; margin: auto;" class="ebook-demo-background">
            <h2 class="ebook-demo-heading">Get started with DealDox CPQ</h2>

            <!-- Form with natural submission behavior -->
            <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST"
                ref="form" @submit="submitForm" class="ebook-form">
                <input name="oid" type="hidden" value="00D2v000003PByK" />
                <input name="retURL" type="hidden" value="https://dealdox.io/thank-you" />
                <div class="ebook-inputs-container">
                    <div class="ebook-form-container">
                        <label class="ebook-label">Full Name</label>
                        <input type="text" maxlength="40" name="last_name" required id="last_name" placeholder=""
                            class="ebook-inputs" autocomplete="off" v-model="formData.last_name">
                    </div>

                    <div class="ebook-form-container">
                        <label class="ebook-label">Phone Number</label>
                        <input type="text" v-model="formData.phoneNumber" @input="validatePhoneNumber"
                            @keypress="allowOnlyNumbers" :maxlength="formData.maxPhoneNumberLength" name="phone"
                            id="phone" maxlength="15" placeholder="" :title="formData.phoneValidationMessage"
                            class="ebook-inputs" autocomplete="off" />
                    </div>

                    <div class="ebook-form-container">
                        <label class="ebook-label">Email</label>
                        <input type="email" maxlength="40" name="email" required id="email" placeholder=""
                            class="ebook-inputs" autocomplete="off" v-model="formData.email">
                    </div>

                    <div class="ebook-form-container">
                        <label class="ebook-label">Company</label>
                        <input type="text" maxlength="40" name="company" id="company" placeholder=""
                            class="ebook-inputs" autocomplete="off" v-model="formData.company">
                    </div>


                    <div style="display: none;">
                            <label for="lead_source">Lead Source</label>
                            <input id="lead_source" maxlength="40" name="lead_source" size="20" type="text"
                                :value="paramValue ? paramValue : 'CPQ Handbook'" /><br />
                        </div>


                        <div style="display: none;">
                            <label for="Contact_us__c">Contact</label>
                            <input id="Contact_us__c" maxlength="40" name="Contact_us__c" size="20" type="text"
                                value="True" /><br />
                        </div>

                    <!-- Captcha field -->
                    <div class="captcha-container">
                        <label class="ebook-label">Solve the Math Problem</label>
                        <div class="recaptcha-content-rowss">
                            <div class="ebook-captcha-container"><label class="ebookkss-labellsss"
                                    style="font-style: italic;">{{ num1 }} + {{ num2 }} =</label></div>
                            <!-- <input v-model="userAnswer" type="number" required class="ebook-inputs" placeholder="Your answer" /> -->
                            <input type="text" required v-model="userAnswer" @input="validatePhoneNumber"
                                @keypress="allowOnlyNumbers" class="captcha-inputs-container" placeholder="Enter your answer"
                                autocomplete="off" />
                        </div>
                        <span v-if="formErrors.recaptcha" class="error">{{ formErrors.recaptcha }}</span>
                    </div>


                    <div class="ebook-privacy">
                        <input class="ebook-checkbox-button" required type="checkbox" value="" id="flexCheckDefault">
                        <label class="" for="flexCheckDefault">
                            By submitting this form, you agree to DealDox's
                            <NuxtLink to="/privacy-policy"> privacy policy</NuxtLink>
                        </label>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 loading-submit-button"
                        style="display: flex; justify-content: center; align-items: center; padding-bottom: 20px;">
                        <button type="submit" name="submit" class="default-btn"><i class='bx bx-paper-plane'></i> Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <div class="happy-customers-continer">
            <span class="happy-customers">Our Happy Customers</span>
            <div class="ebook-company-logos">
                <img src="../../assets/images/New-Landing-Images/konark_logo.png" alt="" class="ebook-logoss">
                <img src="../../assets/images/New-Landing-Images/daspass-logo.png" alt="" class="ebook-logoss">
                <img src="../../assets/images/New-Landing-Images/SATVIJ INTERNATIONAL logo.png" alt=""
                    class="ebook-logoss">
                <img src="../../assets/images/New-Landing-Images/Girbitss.png" alt="" class="ebook-logoss">
                <img src="../../assets/images/New-Landing-Images/UPSlogo.png" alt="" class="ebook-logoss">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ebookDemo",
    data() {
        return {
            formData: {
                last_name: '',
                phoneNumber: '',
                email: '',
                company: '',
                maxPhoneNumberLength: 15,
                phoneValidationMessage: 'Please enter exactly 15 numeric digits',
            },
            formErrors: {},
            num1: this.generateRandomNumber(),
            num2: this.generateRandomNumber(),
            userAnswer: ''
        };
    },
    methods: {
        generateRandomNumber() {
            return Math.floor(Math.random() * 10); // Random number between 0 and 9
        },
        validatePhoneNumber() {
            this.formData.phoneNumber = this.formData.phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
        },
        allowOnlyNumbers(event) {
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

            if (!this.userAnswer || parseInt(this.userAnswer) !== this.num1 + this.num2) {
                this.formErrors.recaptcha = "You entered the wrong captcha value.";
            }

            // Return true only if no form errors
            return Object.keys(this.formErrors).length === 0;
        },
        submitForm(event) {
            if (this.validateForm()) {
                // Allow the form to submit naturally if validation is successful
            } else {
                event.preventDefault(); // Prevent form submission if there are validation errors
                //   alert("Please correct the errors before submitting the form.");
            }
        },
    },
};
</script>

<style scoped>
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
    background-color: #33385e;
    /* margin: 10px auto; */
    border-radius: 3px;
    color: white;
    display: flex;
    justify-content: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

}

.ebookkss-labellsss {
    color: white;
    font-weight: bold;
    font-style: italic;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 0px;
}

.captcha-inputs-container {
    background-color: #33385e;
    color: white;
    width: 75%;
    padding-left: 5px;
    border: none;
    border-left: 0.1px solid #ccc;
   border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;

}

.recaptcha-content-rowss {
    display: flex;
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
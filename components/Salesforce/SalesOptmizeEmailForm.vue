<template>
    <div class="so-form-body">
        <div class="looking-request">
            <span class="looking-to-optimize">Ready to take your Salesforce CRM to new heights? </span>
            <small class="request-a-personalized"> Request a personalized
                demo and discover how DealDox CPQ can drive your business success. </small>
        </div>
        <div class="so-form-subject">
            <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class=@>
                <input name="oid" type="hidden" value="00D2v000003PByK" />
                <input name="retURL" type="hidden" value="https://dealdox.io/thank-you" />
                <div class="so-gap-container">
                    <div class="so-email-container-body">
                        <label class="so-company-email">Company Email</label>
                        <input type="email" maxlength="40" name="email" required class="" id="email" placeholder="">
                    </div>
                    <div style="display: none;">
                        <label for="Contact_us__c">Contact</label>
                        <input id="Contact_us__c" maxlength="40" name="Contact_us__c" size="20" type="text"
                            value="True" /><br />
                    </div>
                    <div style="display: none;">
                        <label for="lead_source">Lead Source</label>
                        <input id="lead_source" maxlength="40" name="lead_source" size="20" type="text"
                            :value="paramValue ? paramValue : 'Salesforce Optimization'" /><br />
                    </div>
                    <!-- <span class="pr-vacy-so">This site is protected by reCAPTCHA, and Google’s Privacy Policy and Terms
                        of Service apply.
                    </span> -->
                    <div class="" style="padding-left: 0px;margin-left: 0px;">
                        <button type="submit" name="submit" required class="so-default-btn"><i
                                class='bx bx-paper-plane'></i>
                            Submit </button>
                    </div>
                    <span class="pr-vacy-so">

                        By submitting this form you confirm that you agree to the storing and processing of your
                        personal data by DealDox.</span>
                </div>
            </form>
        </div>
    </div>
</template>
<script>





export default {
    name: "loadingDemoForm",
    computed: {
        paramValue() {
            return this.$route.params.source;
        }
    },
    data() {
        return {
            formData: {

                email: '',

                agree: false,
                phoneNumber: '',
                maxPhoneNumberLength: 15,
                phoneValidationMessage: 'Please enter exactly 15 numeric digits',
            },
            formErrors: {},
        };
    },
    methods: {


        allowOnlyNumbers(event) {

            const charCode = event.which ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                event.preventDefault();
            }
        },
        validateForm() {
            this.formErrors = {};


            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



            if (!emailRegex.test(this.formData.email)) {
                this.formErrors.email = 'Please enter a valid email address.';
            }




            return Object.keys(this.formErrors).length === 0;
        },

        submitForm() {
            if (this.validateForm()) {






                const form = document.querySelector('form');
                form.submit();


            } else {
                console.log('Form validation failed!');
            }
        },
    },

};

</script>

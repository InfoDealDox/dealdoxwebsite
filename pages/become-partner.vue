<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="partners-app-container">
            <div class="partner-first-content">
                <img src="../assets/images/BecomePartnerNew.webp" alt="Become a Partner Background" class="partner-imagess">
                <div class="partners-sub-content">
                    <span class="partner-heading">Become a DealDox Partner </span>
                    <small class="partner-heading-content">Partner with DealDox for Success </small>
                    <button class="partner-whyDealdoxDemo">
                        <NuxtLink to="/pricing" style="text-decoration: none;">View Pricing & Features</NuxtLink>
                    </button>
                </div>
            </div>
 
            <!-- <div style="position: relative;">
                <div style="display: flex;justify-content: flex-end;align-items: end;">
                    <img src="../assets/images/PartnerContent.png" alt="">
                </div>
 
 
            </div> -->
 
            <div class="partner-customer-confidence">
                <div class="partner-customer-content partner-customer-content-customize">
                    <span class="partner-customer-header"> Customer Confidence </span>
 
                    <small> The go-to provider for your customers' complex business needs. Help them make their presales
                        processes easier, improve their existing systems, and solve their difficult costing problems,
                        all while being a trusted partner. </small>
 
                    <NuxtLink to='/success-stories'><button class="partner-buttons">Explore Success Stories</button></NuxtLink>
                </div>
 
                <div class="partner-customer-image">
                    <img src="../assets/images/Partners1.webp" alt="Customer Confidence" class="partner-customer-images" />
                </div>
 
 
            </div>
 
            <div class="partner-customer-confidence">
                <div class="partner-customer-image">
                    <img src="../assets/images/Partners2.webp" alt="Build on your CRM and ERP systems" class="partner-customer-images">
                </div>
 
                <div class="partner-customer-content">
                    <span class="partner-customer-header"> Build on your CRM and ERP systems </span>
 
 
                    <small> DealDox, integrated with top-tier CRM and ERP tools, offers a comprehensive solution to
                        boost your customers' operational efficiency. By automating proposal generation and approval
                        workflows, your customers can focus on strategic initiatives and drive revenue growth.
                    </small>
 
                    <NuxtLink to='/cpq-integrations'><button class="partner-buttons">CPQ Integrations</button></NuxtLink>
                </div>
 
 
 
            </div>
 
            <div style="text-align: center;">
                <span class="partner-authorize-heading">Submit a contact request
                </span>
 
 
            </div>
 
 
            <div>
                <div class="partner-loadingForms">
                    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                        <input name="oid" type="hidden" value="00D2v000003PByK" />
                        <input name="retURL" type="hidden" value="https://dealdox.io/thank-you" />
                        <div class="partner-loaingDemoForm">
 
                            <div class="partner-label-input-div">
                                <label class="loading-label" style="color: black;">Full Name</label>
                                <input type="text" maxlength="40" name="last_name" required
                                    class="partner-laoding-input-field" id="last_name" placeholder="">
                            </div>
 
 
 
 
                            <div class="partner-label-input-div">
                                <label class="loading-label" style="color: black;">Phone Number</label>
                                <input type="text" v-model="formData.phoneNumber" @input="validatePhoneNumber"
                                    @keypress="allowOnlyNumbers" :maxlength="formData.maxPhoneNumberLength" name="phone"
                                    class="partner-laoding-input-field" id="phone" maxlength="15" placeholder=""
                                    :title="formData.phoneValidationMessage" />
                            </div>
 
                            <div class="partner-label-input-div">
 
                                <label class="loading-label" style="color: black;">Email</label>
                                <input type="email" maxlength="40" name="email" required
                                    class="partner-laoding-input-field" id="email" placeholder="">
 
                            </div>
 
                            <div class="partner-label-input-div">
 
                                <label class="loading-label" style="color: black;">Company</label>
                                <input type="text" maxlength="40" name="company" class="partner-laoding-input-field"
                                    id="company" placeholder="">
 
                            </div>
 
 
 
 
                            <div class="input-submitting-div">
                                <input class="partner-landing-checkbox" required type="checkbox" value=""
                                    id="flexCheckDefault">
                                <label class="partner-loading-privacy-content" for="flexCheckDefault">
                                    By submitting this form,you agree to DealDox's
                                    <NuxtLink to="/privacy-policy">
                                        privacy policy</NuxtLink>
 
                                </label>
                            </div>
 
                            <div style="display: none;">
                                <label for="Contact_us__c">Contact</label>
                                <input id="Contact_us__c" maxlength="40" name="Contact_us__c" size="20" type="text"
                                    value="True" /><br />
                            </div>
 
 
                            <div style="display: none;">
                                <label for="lead_source">Lead Source</label>
                                <input id="lead_source" maxlength="40" name="lead_source" size="20" type="text"
                                    :value="paramValue ? paramValue : 'Become a Partner'" /><br />
                            </div>
 
 
                            <div class="g-recaptcha" data-sitekey="6Lcm03wnAAAAAJ0kn_gkod9i_BiG80TaeGw_xViZ"></div>
 
                            <div class="col-lg-12 col-md-12 col-sm-12 loading-submit-button">
                                <button type="submit" name="submit" required class="default-btn"><i
                                        class='bx bx-paper-plane'></i>
                                    Submit </button>
                            </div>
 
                        </div>
                    </form>
                </div>
 
 
            </div>
 
         
 
        </div>
 
        <DealDoxFooter />
 
    </div>
 
</template>
<script>
import Navbar from '../layouts/Navbar';
import DealDoxFooter from '../layouts/DealDoxFooter';
 
 
 
export default {
    name: "partners",
    computed: {
        paramValue() {
            return this.$route.params.source;
        }
    },
    components: {
        Navbar,
        DealDoxFooter
    },
    computed: {
        paramValue() {
            return this.$route.params.source;
        }
    },
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
                agree: false,
                phoneNumber: '',
                maxPhoneNumberLength: 15,
                phoneValidationMessage: 'Please enter exactly 15 numeric digits',
            },
            formErrors: {},
        };
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
            this.formErrors = {};
 
            const nameRegex = /^[a-zA-Z]+$/;
            const phoneRegex = /^\+?\d{1,4}?\s?\d{6,}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
            if (!nameRegex.test(this.formData.first_name)) {
                this.formErrors.first_name = 'First Name must contain only letters.';
            }
 
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
 
            if (!nameRegex.test(this.formData.country)) {
                this.formErrors.country = 'Country must contain only letters.';
            }
 
            if (this.formData.message.trim() === '') {
                this.formErrors.message = 'Please leave your message.';
            }
 
            if (!this.formData.agree) {
                this.formErrors.agree = 'You must agree to the Terms of Use and Privacy Policy.';
            }
 
            return Object.keys(this.formErrors).length === 0;
        },
 
        submitForm() {
            if (this.validateForm()) {
                // Submit the form here, e.g., using Axios or fetch API
 
                const response = grecaptcha.getResponse();
 
                // Check if reCAPTCHA response is available
                if (response.length === 0) {
                    alert("Please complete the reCAPTCHA.");
                    return;
                }
 
                // If reCAPTCHA response is available, submit the form
                const form = document.querySelector('form');
                form.submit();
 
 
            } else {
                console.log('Form validation failed!');
            }
        },
    },
 
}
 
</script>
 
<style>
.loading-submit-button {
    margin: 10px auto;
    width: 88%;
    display: flex;
    justify-content: center;
}
 
.partner-loading-privacy-content {
    color: black;
    font-size: 13px;
    margin-bottom: 0px;
}
 
.partner-landing-checkbox {
    accent-color: #715cf3;
}
 
.partners-app-container {
    margin: auto;
    max-width: 1320px;
    width: 100%;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    gap: 30px;
 
 
}
 
.partner-imagess {
    width: 100%;
    height: 320px;
}
 
.partner-first-content {
    position: relative;
}
 
.partner-whyDealdoxDemo {
    background: white;
    color: #715cf3;
    border: none;
    border-radius: 30px;
    padding: 6px 20px;
    width: fit-content;
    margin: 22px 0px;
    font-weight: 700;
}
 
.partners-sub-content {
    position: absolute;
    top: 25%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: white;
    padding-left: 30px;
}
 
.partner-heading {
    font-size: 40px;
    line-height: 39px;
    font-weight: 700;
    letter-spacing: 1px;
}
 
.partner-heading-content {
    font-size: 20px;
}
 
.partner-authorize-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
 
.partner-authorize-heading {
    font-size: 30px;
    font-weight: 700;
}
 
 
 
 
 
 
 
.partner-loadingForms {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #f9f9fd;
}
 
.partner-loaingDemoForm {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    gap: 10px;
}
 
.partner-label-input-div {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
}
 
.partner-laoding-input-field {
    width: 98%;
    border: 0.1px solid #ccc;
    border-radius: 10px;
    padding: 6px;
    font-size: 14px;
    padding-left: 10px;
}
 
.input-submitting-div {
    width: 40%;
    margin: auto;
    display: flex;
    align-items: baseline;
    gap: 4px;
}
 
.partner-customer-confidence {
    display: flex;
    height: 400px;
}
 
 
.partner-customer-content,
.partner-customer-image {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
}
 

.partner-customer-images {
    width: 73%;
    height: 100%;
    margin: auto;
}

.partner-customer-content-customize{
    padding-left: 40px;
}
.partner-customer-header{
    font-size: 22px;
    font-weight: 700;
}
 
.partner-buttons{
    border: none;
    color: white;
    padding: 8px 27px;
    border-radius: 30px;
    margin-top: 20px;
    font-weight: 600;
    background: linear-gradient(99.01deg, #715cf3 20.98%, #5c99f3 94.62%);
   
}
 
@media (max-width: 750px) {
 
    .partner-label-input-div,
    .input-submitting-div {
        width: 95%;
    }
 
    .loading-submit-button {
        margin: 10px auto;
        width: 100%;
    }
 
    .partners-sub-content {
        top: 12%;
        align-items: center;
        padding: 10px;
        margin: auto;
        justify-content: center;
        width: 100%;
    }
 
    .partner-heading {
        font-size: 39px;
        text-align: center;
        line-height: normal;
    }
 
    .partner-heading-content {
        font-size: 16px;
        text-align: center;
    }
 
    .partner-authorize-heading {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }
 
    .Authorized-DealDox-Partners {
        font-size: 0.875em;
        padding: 0px 10px;
    }
 
 
 
 
 
 
    .partners-app-container {
 
        margin-top: 80px;
    }

    .partner-customer-confidence {
   
    flex-direction: column;
    height: auto;

    }
    .partner-customer-content, .partner-customer-image{
        width: 95%;
        margin: auto;
        

    }
    .partner-customer-content-customize {
    padding-left: 1px;
}
.partner-customer-images {
    width: 76%;
    height: 64%;

}


.partner-customer-image{
    align-items: center;
    order: 2;
}
}
</style>
 
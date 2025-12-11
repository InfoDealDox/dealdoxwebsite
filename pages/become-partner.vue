<template>
    <div>
        <Navbar class="navbar-style-two" />
        <div class="partners-app-container">
            <div class="partner-first-content">
                <img src="../assets/images/BecomePartnerNew.webp" alt="Become a Partner Background"
                    class="partner-imagess">
                <div class="partners-sub-content">
                    <h1 class="partner-heading" style="color: white;">Become a DealDox Partner </h1>
                    <small class="partner-heading-content">Partner with DealDox for Success </small>
                    <button class="partner-whyDealdoxDemo">
                        <NuxtLink to="/demo" style="text-decoration: none;">Get a Demo</NuxtLink>
                    </button>
                </div>
            </div>
            <div class="partner-customer-confidence">
                <div class="partner-customer-content partner-customer-content-customize">
                    <h2 class="partner-customer-header"> Customer Confidence </h2>

                    <small> The go-to provider for your customers' complex business needs. Help them make their presales
                        processes easier, improve their existing systems, and solve their difficult costing problems,
                        all while being a trusted partner. </small>

                    <NuxtLink to='/success-stories'><button class="partner-buttons">Explore Success Stories</button>
                    </NuxtLink>
                </div>

                <div class="partner-customer-image">
                    <img src="../assets/images/Partners1.webp" alt="Customer Confidence"
                        class="partner-customer-images" />
                </div>


            </div>

            <div class="partner-customer-confidence">
                <div class="partner-customer-image">
                    <img src="../assets/images/Partners2.webp" alt="Build on your CRM and ERP systems"
                        class="partner-customer-images">
                </div>

                <div class="partner-customer-content">
                    <h2 class="partner-customer-header"> Build on your CRM and ERP systems </h2>


                    <small> DealDox, integrated with top-tier CRM and ERP tools, offers a comprehensive solution to
                        boost your customers' operational efficiency. By automating proposal generation and approval
                        workflows, your customers can focus on strategic initiatives and drive revenue growth.
                    </small>

                    <NuxtLink to='/cpq-integrations'><button class="partner-buttons">CPQ Integrations</button>
                    </NuxtLink>
                </div>
            </div>
            <div style="text-align: center;">
                <span class="partner-authorize-heading">Submit a contact request
                </span>
            </div>
            <div>
                <div class="partner-loadingForms">
                    <form @submit="onSubmit" ref="form" method="POST" novalidate>
                        <div class="partner-loaingDemoForm">
                            <div class="partner-label-input-div">
                                <label class="loading-label" style="color: black;">Full Name</label>
                                <input type="text" maxlength="40" name="last_name" required
                                    class="partner-laoding-input-field" id="last_name" placeholder=""
                                    v-model="formData.first_name">
                                <div class="error" v-if="formErrors.first_name">{{ formErrors.first_name }}
                                </div>
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
                                    class="partner-laoding-input-field" id="email" placeholder=""
                                    v-model="formData.email">
                                <div class="error" v-if="formErrors.email">{{ formErrors.email }}</div>

                            </div>

                            <div class="partner-label-input-div">

                                <label class="loading-label" style="color: black;">Company</label>
                                <input type="text" maxlength="40" name="company" class="partner-laoding-input-field"
                                    id="company" placeholder="" v-model="formData.company">
                                <div class="error" v-if="formErrors.company">{{ formErrors.company }}

                                </div>



                            </div>


                            <div class="input-submitting-div">
                                <input class="partner-landing-checkbox" required type="checkbox" value=""
                                    id="flexCheckDefault" v-model="formData.agree">
                                <label class="partner-loading-privacy-content" for="flexCheckDefault">
                                    By submitting this form,you agree to DealDox's
                                    <NuxtLink to="/privacy-policy">
                                        privacy policy</NuxtLink>

                                </label>
                            </div>



                            <div class="col-lg-12 col-md-12 col-sm-12"
                                style="width: 100%;justify-content: center; display: flex;">
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
import axios from 'axios';



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
                source: "DealDox Become a Partner",
                adminid: "6806315dab518273bbcf04c9",
                phoneValidationMessage: 'Please enter exactly 15 numeric digits',
            },
            formErrors: {},
        };
    },
    methods: {

        validatePhoneNumber() {

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
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\d{7,15}$/; // simple numeric check: 7-15 digits

            // Required: first_name
            if (!this.formData.first_name || this.formData.first_name.trim() === '') {
                this.formErrors.first_name = 'First name is required.';
            } else if (!nameRegex.test(this.formData.first_name)) {
                this.formErrors.first_name = 'First name must contain only letters and spaces.';
            }

            // Email required
            if (!this.formData.email || this.formData.email.trim() === '') {
                this.formErrors.email = 'Email is required.';
            } else if (!emailRegex.test(this.formData.email)) {
                this.formErrors.email = 'Please enter a valid email address.';
            }

            // Company required
            if (!this.formData.company || this.formData.company.trim() === '') {
                this.formErrors.company = 'Company name is required.';
            } else if (!nameRegex.test(this.formData.company)) {
                this.formErrors.company = 'Company name must contain only letters and spaces.';
            }


            console.log("formErrors", this.formErrors)

            return Object.keys(this.formErrors).length === 0;
        },



        async onSubmit(event) {
            event.preventDefault();

            if (this.validateForm()) {
                try {
                    const response = await axios.post("https://devqa-api.dealdox.io/api/autorize/webleadUser", this.formData);
                    if (response.data.status === "Success") {
                        this.$router.push({ name: 'thanks' });
                        this.formData.first_name = "";
                        this.formData.company = '';
                        this.formData.email = '';
                        this.formData.agree = '';
                        this.formData.phoneNumber = ''

                    } else {
                        this.apiResponseData = response.data.message;
                    }
                } catch (error) {
                    if (error.response && error.response.data) {
                        this.apiResponseData = error.response.data.message || "Something went wrong";
                    } else {
                        console.log("Unable to create", error);
                    }
                }

            } else {
                // validation failed — keep user on form and show field errors
            }

        }
    },
    head: {
        title: 'Become a DealDox Partner | Drive Growth with Our CPQ Solutions ',
        htmlAttrs: {
            lang: 'en-us'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Partner with DealDox to offer a powerful CPQ solution that simplifies revenue management and enhances business efficiency. Join our partner program today and unlock new opportunities for growth ' },
            { hid: 'keywords', name: 'keywords', content: 'CPQ partnership, DealDox partner program, CPQ solution provider, CRM ERP integration, revenue lifecycle management, business automation, presales process optimization, CPQ software, sales automation, partner with DealDox ' },
        ],
        link: [{ hid: 'canonical', rel: 'canonical', href: 'https://www.dealdox.io/become-partner' }
        ],
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
    margin-top: 70px;
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

.partner-customer-content-customize {
    padding-left: 40px;
}

.partner-customer-header {
    font-size: 22px;
    font-weight: 700;
}

.partner-buttons {
    border: none;
    color: white;
    padding: 8px 27px;
    border-radius: 30px;
    margin-top: 20px;
    font-weight: 600;
    background: linear-gradient(99.01deg, #715cf3 20.98%, #5c99f3 94.62%);

}

.error {
    color: red;
    font-size: 12px;
    margin-top: 6px;
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

        margin-top: 40px;
    }

    .partner-customer-confidence {

        flex-direction: column;
        height: auto;

    }

    .partner-customer-content,
    .partner-customer-image {
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


    .partner-customer-image {
        align-items: center;
        order: 2;
    }
}
</style>
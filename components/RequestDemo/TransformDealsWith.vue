<template>
    <div class="features-area pb-80 tb-20 bg-FAFAFA customize-padding-top">
        <div class="container">
            <div class="software-integrations-inner">
                <div class="row align-items-center mobile-version-gap-div">

                    <!-- LEFT CONTENT -->
                    <div class="col-lg-6 col-md-12">
                        <div class="features-content">
                            <ul class="features-list">
                                <h2>Transform Deals with <br><span class="sub-title">DealDox</span> in Action!</h2>
                                <p style="margin-bottom: 0px">
                                    A centralized platform for Automated Quote Generation,
                                    <a href="https://www.dealdox.io/services-cpq">Accurate Pricing,</a>
                                    Product Bundling and Upselling, Margin Optimization, Cost Visibility,
                                    Efficient Pricing Strategy,
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
                                    <p style="margin-bottom: 0px">Close Deals Faster</p>
                                </li>
                            </ul>

                            <div class="btn-box">
                                <NuxtLink to="/cpq-integrations" class="default-btn">Know more</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- FORM AREA -->
                    <div class="col-lg-6 col-md-12 form_new_version_body">
                        <div class="contact-area">
                            <div class="container">
                                <div class="contact-form">

                                    <form id="contact-form" @submit="onSubmit" ref="form" method="POST">
                                        <div class="demo-form-header">
                                            <h2 class="features-content"> <span class="sub-title"
                                                    style="font-size: 25px;">REQUEST A DEMO</span>
                                            </h2>

                                        </div>
                                        <div class="row">

                                            <!-- FIRST NAME -->
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <p style="margin-bottom: 0px">First Name</p>
                                                    <input type="text" maxlength="40" name="first_name"
                                                        class="form-control" v-model="formData.first_name" />
                                                    <span v-if="errors.first_name" class="error">
                                                        {{ errors.first_name }}
                                                    </span>
                                                </div>
                                            </div>

                                            <!-- LAST NAME -->
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <p style="margin-bottom: 0px">Last Name</p>
                                                    <input type="text" maxlength="40" name="last_name"
                                                        class="form-control" v-model="formData.last_name" />
                                                </div>
                                            </div>

                                            <!-- PHONE -->
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <p style="margin-bottom: 0px">Phone Number</p>
                                                    <input type="text" v-model="formData.phoneNumber"
                                                        @input="validatePhoneNumber" @keypress="allowOnlyNumbers"
                                                        maxlength="15" class="form-control" />

                                                    <span v-if="errors.phoneNumber" class="error">
                                                        {{ errors.phoneNumber }}
                                                    </span>
                                                </div>
                                            </div>

                                            <!-- EMAIL -->
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <p style="margin-bottom: 0px">Email</p>
                                                    <input type="email" maxlength="40" name="email" class="form-control"
                                                        v-model="formData.email" />
                                                    <span v-if="errors.email" class="error">
                                                        {{ errors.email }}
                                                    </span>
                                                </div>
                                            </div>

                                            <!-- JOB TITLE -->
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <p style="margin-bottom: 0px">Job Title</p>
                                                    <input type="text" maxlength="40" class="form-control"
                                                        v-model="formData.jobtitle" />
                                                </div>
                                            </div>

                                            <!-- COMPANY -->
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <p style="margin-bottom: 0px">Company</p>
                                                    <input type="text" maxlength="40" name="company"
                                                        class="form-control" v-model="formData.company" />
                                                    <span v-if="errors.company" class="error">
                                                        {{ errors.company }}
                                                    </span>
                                                </div>
                                            </div>

                                            <!-- EMPLOYEES -->
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <p style="margin-bottom: 0px">Employees</p>
                                                    <select class="form-control" v-model="formData.noofemployees">
                                                        <option>--None--</option>
                                                        <option value="1-20">1-20</option>
                                                        <option value="21-200">21-200</option>
                                                        <option value="201-10000">201-10000</option>
                                                        <option value="10000+">10000+</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <!-- COUNTRY -->
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <p style="margin-bottom: 0px">Country</p>
                                                    <input type="text" maxlength="40" class="form-control"
                                                        v-model="formData.country" />
                                                </div>
                                            </div>

                                            <!-- TERMS -->
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                 <div class="form-group" style=" margin-bottom: 20px;">
                                                    <input class="form-check-input" type="checkbox"
                                                        v-model="formData.agree_terms" />
                                                    <label class="form-check-label">
                                                        By proceeding, I agree to the <NuxtLink to="/terms-of-use">Terms
                                                            of Use</NuxtLink>.
                                                    </label>
                                                    <span v-if="errors.agree_terms" class="error">
                                                        {{ errors.agree_terms }}
                                                    </span>
                                                </div>
                                            </div>

                                            <!-- MAIN API ERROR -->
                                            <span style="color: red; font-size: 12px;">
                                                {{ apiResponseData }}
                                            </span>

                                            <!-- SUBMIT -->
                                            <div class="col-lg-12 col-md-12 col-sm-12"
                                                style="display: flex;margin: 20px 0px;">
                                                <button type="submit" class="default-btn"
                                                    style="    margin: auto;width: 97%;">
                                                    <i class="bx bx-paper-plane"></i> Submit
                                                </button>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div> <!-- end row -->
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";

export default {
    name: "EasyIntegration",

    data() {
        return {
            formData: {
                first_name: "",
                last_name: "",
                phoneNumber: "",
                email: "",
                company: "",
                country: "",
                jobtitle: "",
                noofemployees: null,
                agree_terms: false,

                source: "DealDox demo",
                adminid: "6806315dab518273bbcf04c9",
            },

            errors: {},
            apiResponseData: "",
        };
    },

    methods: {
        validatePhoneNumber() {
            this.formData.phoneNumber = this.formData.phoneNumber.replace(/\D/g, "");
        },

        allowOnlyNumbers(e) {
            const code = e.which || e.keyCode;
            if (code > 31 && (code < 48 || code > 57)) e.preventDefault();
        },

        validateForm() {
            this.errors = {};

            if (!this.formData.first_name)
                this.errors.first_name = "First name is required.";

            if (!this.formData.phoneNumber)
                this.errors.phoneNumber = "Phone number is required.";

            if (!this.formData.email)
                this.errors.email = "Email is required.";
            else if (!this.formData.email.includes("@"))
                this.errors.email = "Invalid email format.";

            if (!this.formData.company)
                this.errors.company = "Company name is required.";

            if (!this.formData.agree_terms)
                this.errors.agree_terms = "You must agree to the Terms.";

            return Object.keys(this.errors).length === 0;
        },

        async onSubmit(e) {
            e.preventDefault();

            if (!this.validateForm()) return;

            try {
                const res = await axios.post(
                    "https://devqa-api.dealdox.io/api/autorize/webleadUser",
                    this.formData
                );

                if (res.data.status === "Success") {
                    this.$router.push({ name: "thanks" });
                } else {
                    this.apiResponseData = res.data.message;
                }
            } catch (err) {
                this.apiResponseData =
                    err.response?.data?.message || "Something went wrong";
            }
        },
    },
};
</script>


<style>
.error {
    color: red;
    font-size: 12px;
    margin-top: 4px;
    display: block;
}

@media (max-width: 750px) {
    .customize-padding-top {
        padding-top: 28px !important;
    }

    .mobile-version-gap-div {
        gap: 25px;
    }
}

.form_new_version_body {
    border: 0.1px solid #ccc;
    padding: 24px 10px;
    border-radius: 10px;
    background: #fefdfd;
}

.demo-form-header {
    text-align: center;
    margin-bottom: 25px;
}

.demo-title {
    font-size: 28px;
    font-weight: 700;
    color: #000;
    margin-bottom: 8px;
}

.demo-subtitle {
    font-size: 15px;
    color: #555;
}
</style>

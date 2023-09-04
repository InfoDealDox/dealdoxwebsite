<template>
    <div class="app-download-area pt-70">
        <div class="container">
            <div class="app-download-inner bg-gray">
                <div class="contact-page-header-form-app-download-inner">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="software-integrations-inner bg-gradient-color">
                                <div class="features-content-improve-sales">
                                    <h2>Start Your Free Onboarding Now!</h2>
                                    <h6>No credit card or software installation is required.</h6>
                                    <h5>With <strong>Advanced Quoting Solution, Beyond Invoicing</strong> you can benefit
                                        from:
                                    </h5>
                                    <div class="features-content">
                                        <ul class="features-list">
                                            <li>
                                                <div class="icon">
                                                    <i class="ri-check-line"></i>
                                                </div>
                                                <h6 class="with-top-border-subscription">Guided selling approach to empower
                                                    sales reps, leaders, and other teams
                                                    for efficient sales processes and optimized decision-making.</h6>
                                            </li>

                                            <li>
                                                <div class="icon">
                                                    <i class="ri-check-line"></i>
                                                </div>
                                                <h6 class="with-top-border-subscription">Generate Accurate and Comprehensive
                                                    Quotes in Record Time at 10x speed.</h6>
                                            </li>

                                            <li>
                                                <div class="icon">
                                                    <i class="ri-check-line"></i>
                                                </div>
                                                <h6 class="with-top-border-subscription">Effortlessly generate accurate deal
                                                    documents like quotations, proposals,
                                                    SOWs, orders, and more.</h6>
                                            </li>

                                            <li>
                                                <div class="icon">
                                                    <i class="ri-check-line"></i>
                                                </div>
                                                <h6 class="with-top-border-subscription">Streamline single or multi-level
                                                    approvals faster.</h6>
                                            </li>

                                            <li>
                                                <div class="icon">
                                                    <i class="ri-check-line"></i>
                                                </div>
                                                <h6 class="with-top-border-subscription">Get your deal documents in your
                                                    local language, regardless of your
                                                    country.
                                                </h6>
                                            </li>
                                            <h5>Question? Talk to an expert: <span class="sub-title-faq">8482642864</span>
                                            </h5>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 ptb-100">
                            <div class="contact-area">
                                <div class="container">
                                    <div class="contact-form">
                                        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                            method="POST">
                                            <input name="oid" type="hidden" value="00D2v000003PByK" />
                                            <input name="retURL" type="hidden"
                                                value="https://dealdox.pbwebvision.com/thank-you" />
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>First Name</p>
                                                        <input type="text" maxlength="40" name="first_name" required
                                                            class="form-control" id="first_name" placeholder="Eg: David">
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>Last Name</p>
                                                        <input type="text" maxlength="40" name="last_name" required
                                                            class="form-control" id="last_name" placeholder="Eg: Marsh">
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>Phone Number</p>
                                                        <input type="text" v-model="phoneNumber"
                                                            @input="validatePhoneNumber" @keypress="allowOnlyNumbers"
                                                            :maxlength="maxPhoneNumberLength" name="phone" required
                                                            class="form-control" id="phone" maxlength="15"
                                                            placeholder="Eg: 123456789012345"
                                                            :title="phoneValidationMessage" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>e-mail</p>
                                                        <input type="email" maxlength="40" name="email" required
                                                            class="form-control" id="email" placeholder="Eg: abc@gmail.com">
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>Job Title</p>
                                                        <input type="text" maxlength="40" name="title" required
                                                            class="form-control" id="title"
                                                            placeholder="Eg: Associate Consultant">
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>Company</p>
                                                        <input type="text" maxlength="40" name="company" required
                                                            class="form-control" id="company" placeholder="Eg: ABC">
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <p>Employees</p>
                                                        <select required name="Employees__c" id="Employees__c"
                                                            class="form-control">
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
                                                        <select required name="Country_eBook__c" id="Country_eBook__c"
                                                            class="form-control">
                                                            <option>--None--</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="Andorra">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Antigua and">Antigua and</option>
                                                            <option value="Barbuda">Barbuda</option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="The Bahamas">The Bahamas</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="Bhutan">Bhutan</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                                                            </option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="Brunei">Brunei</option>
                                                            <option value="Bulgaria">Bulgaria</option>
                                                            <option value="Burkina Faso">Burkina Faso</option>
                                                            <option value="Burundi">Burundi</option>
                                                            <option value="Cambodia">Cambodia</option>
                                                            <option value="Cameroon">Cameroon</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="Cape Verde">Cape Verde</option>
                                                            <option value="Central African Republic">Central African
                                                                Republic
                                                            </option>
                                                            <option value="Chad">Chad</option>
                                                            <option value="Chile">Chile</option>
                                                            <option value="China">China</option>
                                                            <option value="Colombia">Colombia</option>
                                                            <option value="Comoros">Comoros</option>
                                                            <option value="Congo, Republic of the">Congo, Republic of the
                                                            </option>
                                                            <option value="Congo, Democratic Republic of the">Congo,
                                                                Democratic
                                                                Republic
                                                                of the</option>
                                                            <option value="Costa Rica">Costa Rica</option>
                                                            <option value="Cote d&amp;#39;Ivoire">Cote d'Ivoire</option>
                                                            <option value="Croatia">Croatia</option>
                                                            <option value="Cuba">Cuba</option>
                                                            <option value="Cyprus">Cyprus</option>
                                                            <option value="Czech Republic">Czech Republic</option>
                                                            <option value="Denmark">Denmark</option>
                                                            <option value="Djibouti">Djibouti</option>
                                                            <option value="Dominica">Dominica</option>
                                                            <option value="Dominican Republic">Dominican Republic</option>
                                                            <option value="East Timor (Timor-Leste)">East Timor
                                                                (Timor-Leste)
                                                            </option>
                                                            <option value="Ecuador">Ecuador</option>
                                                            <option value="Egypt">Egypt</option>
                                                            <option value="El Salvador">El Salvador</option>
                                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option value="Eritrea">Eritrea</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="Ethiopia">Ethiopia</option>
                                                            <option value="Fiji">Fiji</option>
                                                            <option value="Finland">Finland</option>
                                                            <option value="France">France</option>
                                                            <option value="Gabon">Gabon</option>
                                                            <option value="The Gambia">The Gambia</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Greece">Greece</option>
                                                            <option value="Grenada">Grenada</option>
                                                            <option value="Guatemala">Guatemala</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="Guyana">Guyana</option>
                                                            <option value="Haiti">Haiti</option>
                                                            <option value="Honduras">Honduras</option>
                                                            <option value="Hungary">Hungary</option>
                                                            <option value="Iceland">Iceland</option>
                                                            <option value="India">India</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Iran">Iran</option>
                                                            <option value="Iraq">Iraq</option>
                                                            <option value="Ireland">Ireland</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Jamaica">Jamaica</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Jordan">Jordan</option>
                                                            <option value="Kazakhstan">Kazakhstan</option>
                                                            <option value="Kenya">Kenya</option>
                                                            <option value="Kiribati">Kiribati</option>
                                                            <option value="Korea, North">Korea, North</option>
                                                            <option value="Korea, South">Korea, South</option>
                                                            <option value="Kosovo">Kosovo</option>
                                                            <option value="Kuwait">Kuwait</option>
                                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="Laos">Laos</option>
                                                            <option value="Latvia">Latvia</option>
                                                            <option value="Lebanon">Lebanon</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Liberia">Liberia</option>
                                                            <option value="Libya">Libya</option>
                                                            <option value="Liechtenstein">Liechtenstein</option>
                                                            <option value="Lithuania">Lithuania</option>
                                                            <option value="Luxembourg">Luxembourg</option>
                                                            <option value="Macedonia">Macedonia</option>
                                                            <option value="Madagascar">Madagascar</option>
                                                            <option value="Malawi">Malawi</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                            <option value="Maldives">Maldives</option>
                                                            <option value="Mali">Mali</option>
                                                            <option value="Malta">Malta</option>
                                                            <option value="Marshall Islands">Marshall Islands</option>
                                                            <option value="Mauritania">Mauritania</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Micronesia, Federated States of">Micronesia,
                                                                Federated
                                                                States
                                                                of</option>
                                                            <option value="Moldova">Moldova</option>
                                                            <option value="Monaco">Monaco</option>
                                                            <option value="Mongolia">Mongolia</option>
                                                            <option value="Montenegro">Montenegro</option>
                                                            <option value="Morocco">Morocco</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                                                            <option value="Namibia">Namibia</option>
                                                            <option value="Nauru">Nauru</option>
                                                            <option value="Nepal">Nepal</option>
                                                            <option value="Netherlands">Netherlands</option>
                                                            <option value="New Zealand">New Zealand</option>
                                                            <option value="Nicaragua">Nicaragua</option>
                                                            <option value="Niger">Niger</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="Oman">Oman</option>
                                                            <option value="Pakistan">Pakistan</option>
                                                            <option value="Palau">Palau</option>
                                                            <option value="Panama">Panama</option>
                                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="Paraguay">Paraguay</option>
                                                            <option value="Peru">Peru</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Poland">Poland</option>
                                                            <option value="Portugal">Portugal</option>
                                                            <option value="Qatar">Qatar</option>
                                                            <option value="Romania">Romania</option>
                                                            <option value="Russia">Russia</option>
                                                            <option value="Rwanda">Rwanda</option>
                                                            <option value="Saint Kitts and">Saint Kitts and</option>
                                                            <option value="Nevis">Nevis</option>
                                                            <option value="Saint Lucia">Saint Lucia</option>
                                                            <option value="Saint Vincent and the Grenadines">Saint Vincent
                                                                and
                                                                the
                                                                Grenadines</option>
                                                            <option value="Samoa">Samoa</option>
                                                            <option value="San Marino">San Marino</option>
                                                            <option value="Sao Tome and">Sao Tome and</option>
                                                            <option value="Principe">Principe</option>
                                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Serbia">Serbia</option>
                                                            <option value="Seychelles">Seychelles</option>
                                                            <option value="Sierra Leone">Sierra Leone</option>
                                                            <option value="Singapore">Singapore</option>
                                                            <option value="Slovakia">Slovakia</option>
                                                            <option value="Slovenia">Slovenia</option>
                                                            <option value="Solomon Islands">Solomon Islands</option>
                                                            <option value="Somalia">Somalia</option>
                                                            <option value="South Africa">South Africa</option>
                                                            <option value="South Sudan">South Sudan</option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="Sri Lanka">Sri Lanka</option>
                                                            <option value="Sudan">Sudan</option>
                                                            <option value="Suriname">Suriname</option>
                                                            <option value="Swaziland">Swaziland</option>
                                                            <option value="Sweden">Sweden</option>
                                                            <option value="Switzerland">Switzerland</option>
                                                            <option value="Syria">Syria</option>
                                                            <option value="Taiwan">Taiwan</option>
                                                            <option value="Tajikistan">Tajikistan</option>
                                                            <option value="Tanzania">Tanzania</option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Tonga">Tonga</option>
                                                            <option value="Trinidad and">Trinidad and</option>
                                                            <option value="Tobago">Tobago</option>
                                                            <option value="Tunisia">Tunisia</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Turkmenistan">Turkmenistan</option>
                                                            <option value="Tuvalu">Tuvalu</option>
                                                            <option value="Uganda">Uganda</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="United Arab Emirates">United Arab Emirates
                                                            </option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="United States of America">United States of
                                                                America
                                                            </option>
                                                            <option value="Uruguay">Uruguay</option>
                                                            <option value="Uzbekistan">Uzbekistan</option>
                                                            <option value="Vanuatu">Vanuatu</option>
                                                            <option value="Vatican City (HolySee)">Vatican City (HolySee)
                                                            </option>
                                                            <option value="Venezuela">Venezuela</option>
                                                            <option value="Vietnam">Vietnam</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="form-group">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="flexCheckDefault">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            I agree to the <router-link to="/terms-of-use"> Terms of
                                                                Use</router-link>
                                                        </label>
                                                    </div>
                                                </div>

                                                <p> By registering, you confirm that you agree to the storing and processing
                                                    of
                                                    your personal data by DealDox as described in the<router-link
                                                        to="/privacy-policy">
                                                        Privacy </router-link> Statement. </p>

                                                <div style="display: none;">
                                                    <label for="Sign_Up__c">Start My Free Trial</label>
                                                    <input id="Sign_Up__c" maxlength="40" name="Sign_Up__c" size="20"
                                                        type="text" value="True" /><br />
                                                </div>

                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <button type="submit" name="submit" required class="default-btn"><i
                                                            class='bx bx-paper-plane'></i>
                                                        Start My Free Trial </button>
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
    </div>
</template>

<script>
new Vue({
    el: '#contact-form',
    data: {
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
    },
});

import Vue from 'vue'

export default {

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
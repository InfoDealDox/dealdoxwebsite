exports.ids = [83];
exports.modules = {

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logohome.fd05a61.svg";

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logingroup.2f5f614.png";

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loginpage/SignUpHeader.vue?vue&type=template&id=f23f2c56&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contact-page-header-form-app-download-area ptb-100 bg-white"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"contact-page-header-form-app-download-inner\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"software-integrations-inner\">", "</div>", [_vm._ssrNode("<div class=\"about-img-login\"><img" + _vm._ssrAttr("src", __webpack_require__(192)) + " data-aos=\"fade-up\" alt=\"about\"></div> "), _vm._ssrNode("<div class=\"features-content-improve-sales\">", "</div>", [_vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<form action=\"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8\" method=\"POST\">", "</form>", [_vm._ssrNode("<input name=\"oid\" type=\"hidden\" value=\"00D2v000003PByK\"> <input name=\"retURL\" type=\"hidden\" value=\"https://www.dealdox.io/thank-you\"> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-md-12 col-sm-12\"><div class=\"form-group\"><p>Email</p> <input type=\"email\" maxlength=\"40\" name=\"first_name\" required=\"required\" id=\"first_name\" placeholder=\"Eg: David\" class=\"form-control\"></div></div> <div class=\"col-lg-12 col-md-12 col-sm-12\"><div class=\"form-group\"><p>Password</p> <input type=\"password\" maxlength=\"40\" name=\"last_name\" required=\"required\" id=\"last_name\" placeholder=\"Eg: Marsh\" class=\"form-control\"></div></div> "), _vm._ssrNode("<div class=\"col-lg-12 col-md-12 col-sm-12\">", "</div>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<input type=\"checkbox\" value id=\"flexCheckDefault\" class=\"form-check-input\"> "), _vm._ssrNode("<label for=\"flexCheckDefault\" class=\"form-check-label\">", "</label>", [_vm._ssrNode("\n                                                    Remember me "), _c('NuxtLink', {
    attrs: {
      "to": "/terms-of-use"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<label for=\"flexCheckDefault\" class=\"form-check-label-one\">", "</label>", [_c('NuxtLink', {
    attrs: {
      "to": "/sign-up-free-trial"
    }
  }, [_vm._v(" forgot my password?")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-12 col-md-12 col-sm-12\"><button type=\"submit\" name=\"submit\" required=\"required\" class=\"default-btn-one\"><i class=\"bx bx-paper-plane\"></i>\n                                                Log In </button></div> "), _vm._ssrNode("<p>", "</p>", [_vm._ssrNode(" Haven’t joined us as a customer yet? "), _vm._ssrNode("<span class=\"sub-title-faq\">", "</span>", [_c('NuxtLink', {
    attrs: {
      "to": "/sign-up-free-trial"
    }
  }, [_vm._v(" Sign Up")])], 1)], 2)], 2)], 2)])])], 2), _vm._ssrNode(" <div class=\"row\"><div class=\"col-sm-4\">© 2023 DealDox Pvt Ltd</div> <div class=\"col-sm-4\">All rights reserved</div> <div class=\"col-sm-4\">Privacy</div></div>")], 2), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12 bg-f4f4f6\"><div class=\"contact-area\"><div class=\"container\"><div class=\"contact-form\"><div class=\"row\"><div class=\"section-title-home\"></div> <div class=\"app-download-content-one\"><h4>Generate Quotations 10x Faster with DealDox CPQ!</h4> <h6> Close deals faster now</h6> <p> Introducing DealDox, your ultimate destination for streamlining\n                                                sales processes. Emrace our Lighting Platform, delivering\n                                                unparalleled speed and comprehensive automation for your sales\n                                                cycle. Say goodbye to lengthy negotiations and welcome a quicker,\n                                                more efficient way to close deals.</p></div> <div class=\"section-title-home\"></div> <div><img" + _vm._ssrAttr("src", __webpack_require__(193)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div></div></div></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/loginpage/SignUpHeader.vue?vue&type=template&id=f23f2c56&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loginpage/SignUpHeader.vue?vue&type=script&lang=js&
new external_vue_default.a({
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
      phoneValidationMessage: 'Please enter exactly 15 numeric digits'
    },
    errors: {}
  }
});

/* harmony default export */ var SignUpHeadervue_type_script_lang_js_ = ({
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
  name: 'AppDownload'
});
// CONCATENATED MODULE: ./components/loginpage/SignUpHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var loginpage_SignUpHeadervue_type_script_lang_js_ = (SignUpHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/loginpage/SignUpHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loginpage_SignUpHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f3452a68"
  
)

/* harmony default export */ var SignUpHeader = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loginpage-sign-up-header.js.map
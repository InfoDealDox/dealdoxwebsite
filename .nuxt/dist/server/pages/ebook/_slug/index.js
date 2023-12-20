exports.ids = [128,52];
exports.modules = {

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EbookFolder/EbookDetails.vue?vue&type=template&id=175fd3cd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-details-area ptb-100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-7 col-md-12\"><div class=\"blog-details-desc\"><div class=\"article-image\"><img" + _vm._ssrAttr("src", _vm.details[0].attributes.image.data.attributes.url) + " alt=\"image\"></div> <div class=\"article-content\"><div class=\"entry-meta\"><ul><li><i class=\"ri-calendar-2-line\"></i>" + _vm._ssrEscape(_vm._s(_vm.details[0].attributes.date)) + "</li></ul></div> <h4>" + _vm._ssrEscape(_vm._s(_vm.details[0].attributes.name)) + "</h4> <span>" + _vm._s(_vm.details[0].attributes.description) + "</span></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-5 col-md-12 ptb-100\">", "</div>", [_vm._ssrNode("<div class=\"contact-area\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title-about\"><h3>Download Now</h3></div> "), _vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<form action=\"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8\" method=\"POST\">", "</form>", [_vm._ssrNode("<input name=\"oid\" type=\"hidden\" value=\"00D2v000003PByK\"> <input name=\"retURL\" type=\"hidden\" value=\"https://dealdox.io/thank-you\"> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>First Name</p> <input type=\"text\" maxlength=\"40\" name=\"first_name\" required=\"required\" id=\"first_name\" placeholder=\"Eg: David\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Last Name</p> <input type=\"text\" maxlength=\"40\" name=\"last_name\" id=\"last_name\" placeholder=\"Eg: Marsh\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Phone Number</p> <input type=\"text\"" + _vm._ssrAttr("maxlength", _vm.maxPhoneNumberLength) + " name=\"phone\" id=\"phone\" maxlength=\"15\" placeholder=\"Eg: 123456789012345\"" + _vm._ssrAttr("title", _vm.phoneValidationMessage) + _vm._ssrAttr("value", _vm.phoneNumber) + " class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Email</p> <input type=\"email\" maxlength=\"40\" name=\"email\" required=\"required\" id=\"email\" placeholder=\"Eg: abc@gmail.com\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Job Title</p> <input type=\"text\" maxlength=\"40\" name=\"title\" id=\"title\" placeholder=\"Eg: Associate Consultant\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Company</p> <input type=\"text\" maxlength=\"40\" name=\"company\" id=\"company\" placeholder=\"Eg: ABC\" class=\"form-control\"></div></div> <div class=\"col-lg-12 col-md-12 col-sm-12\"><div class=\"form-group\"><p>Country</p> <input type=\"country\" maxlength=\"40\" name=\"country\" id=\"country\" placeholder=\"Eg: India\" class=\"form-control\"></div></div> "), _vm._ssrNode("<div class=\"col-lg-12 col-md-12 col-sm-12\">", "</div>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<input type=\"checkbox\" value id=\"flexCheckDefault\" class=\"form-check-input\"> "), _vm._ssrNode("<label for=\"flexCheckDefault\" class=\"form-check-label\">", "</label>", [_vm._ssrNode("\n                                                I agree to the "), _c('NuxtLink', {
    attrs: {
      "to": "/terms-of-use"
    }
  }, [_vm._v(" Terms of\n                                                    Use")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<p>", "</p>", [_vm._ssrNode(" By registering, you confirm that you agree to the storing and processing of\n                                        your personal data by DealDox as described in the"), _c('NuxtLink', {
    attrs: {
      "to": "/privacy-policy"
    }
  }, [_vm._v(" Privacy Statement.")])], 2), _vm._ssrNode(" <div style=\"display: none;\"><label for=\"eBook__c\">Contact</label> <input id=\"eBook__c\" maxlength=\"40\" name=\"eBook__c\" size=\"20\" type=\"text\" value=\"True\"><br></div> <div class=\"col-lg-12 col-md-12 col-sm-12\"><button type=\"submit\" name=\"submit\" required=\"required\" class=\"default-btn\"><i class=\"bx bx-paper-plane\"></i>\n                                            Download </button></div>")], 2)], 2)])], 2)])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/EbookFolder/EbookDetails.vue?vue&type=template&id=175fd3cd&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EbookFolder/EbookDetails.vue?vue&type=script&lang=js&
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


/* harmony default export */ var EbookDetailsvue_type_script_lang_js_ = ({
  /* Form Code Added for validation purpose */
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
  name: 'BlogDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      blogs: [],
      ebooks: []
    };
  },
  created: async function () {
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/ebooks?populate=*');
    this.ebooks = response.data.data;
  }
});
// CONCATENATED MODULE: ./components/EbookFolder/EbookDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var EbookFolder_EbookDetailsvue_type_script_lang_js_ = (EbookDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/EbookFolder/EbookDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  EbookFolder_EbookDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "73877d60"
  
)

/* harmony default export */ var EbookDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ebook/_slug/index.vue?vue&type=template&id=26a48734&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" <div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12 col-md-12\"><div class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(15)) + " alt=\"image\"></div></div></div></div> "), _vm.details !== null ? _vm._ssrNode("<div>", "</div>", [_c('EbookDetails', {
    attrs: {
      "detailsContent": _vm.details
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ebook/_slug/index.vue?vue&type=template&id=26a48734&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/EbookFolder/EbookDetails.vue + 4 modules
var EbookDetails = __webpack_require__(239);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ebook/_slug/index.vue?vue&type=script&lang=js&

// import PageTitle from '../../../components/Common/PageTitle';



/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    // PageTitle,
    EbookDetails: EbookDetails["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      details: null,
      seoData: null
    };
  },
  created: async function () {
    var _pageData$attributes;
    const {
      slug
    } = this.$route.params;
    const reaponse = await external_axios_default.a.get(`https://cms.dealdox.io/api/ebooks?filters[slug][$eq]=${slug}&populate=*`, {
      params: {
        slug
      }
    });
    this.details = reaponse.data.data;
    const pageData = this.details.length > 0 ? this.details[0] : {};
    if (pageData !== null && pageData !== void 0 && (_pageData$attributes = pageData.attributes) !== null && _pageData$attributes !== void 0 && _pageData$attributes.seo) {
      this.seoData = pageData.attributes.seo;
      // console.log( this.seoData ,' this.seoData ');
    }
    // console.log("this.details....", this.details);
  },

  head({
    $seo
  }) {
    var _this$seoData, _this$seoData2, _this$seoData3;
    return $seo({
      title: (_this$seoData = this.seoData) === null || _this$seoData === void 0 ? void 0 : _this$seoData.metaTitle,
      description: (_this$seoData2 = this.seoData) === null || _this$seoData2 === void 0 ? void 0 : _this$seoData2.metaDescription,
      keywords: (_this$seoData3 = this.seoData) === null || _this$seoData3 === void 0 ? void 0 : _this$seoData3.keywords
      // image: this.post.image || '',
    });
  }
});
// CONCATENATED MODULE: ./pages/ebook/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ebook_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/ebook/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ebook_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5bc21160"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {EbookDetails: __webpack_require__(239).default})


/***/ })

};;
//# sourceMappingURL=index.js.map
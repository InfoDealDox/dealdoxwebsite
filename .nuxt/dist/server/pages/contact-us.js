exports.ids = [124,36,46,50];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Partner.vue?vue&type=template&id=eda3a3ae&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "partner-area pt-70"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"partner-title\">\n            Industry-Preferred CPQ SaaS Solution at Your Fingertips\n        </div> "), _vm._ssrNode("<div class=\"partner-slides\">", "</div>", [_vm.partners !== null ? _c('carousel', {
    attrs: {
      "autoplay": true,
      "loop": true,
      "paginationEnabled": false,
      "perPageCustom": [[0, 3], [576, 3], [768, 3], [1200, 7]]
    }
  }, _vm._l(_vm.partners.partnerSlides, function (slide) {
    return _c('slide', {
      key: slide.id
    }, [_c('div', {
      staticClass: "single-partner-item"
    }, [_c('a', [_c('img', {
      attrs: {
        "src": slide.image.data.attributes.url,
        "alt": "image"
      }
    })])])]);
  }), 1) : _vm._e()], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/Partner.vue?vue&type=template&id=eda3a3ae&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Partner.vue?vue&type=script&lang=js&

/* harmony default export */ var Partnervue_type_script_lang_js_ = ({
  name: 'Partner',
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    partners: null
  }),
  created: async function () {
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/partner?populate=partnerSlides.image');
    const {
      data: {
        attributes
      }
    } = response.data;
    this.partners = attributes;
  }
});
// CONCATENATED MODULE: ./components/Common/Partner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Partnervue_type_script_lang_js_ = (Partnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/Partner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Partnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8acffc5a"
  
)

/* harmony default export */ var Partner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Blog.vue?vue&type=template&id=1cf293d9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-area pt-70 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title\"><span class=\"sub-title\"></span> <h1>Our Latest Blogs</h1></div> "), _vm.blogs !== [] ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(_vm.blogs.slice(0, 3), function (blog) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"single-blog-post bg-white\">", "</div>", [_vm._ssrNode("<div class=\"image\">", "</div>", [_c('NuxtLink', {
      staticClass: "d-block",
      attrs: {
        "to": '/blog/' + blog.attributes.slug
      }
    }, [_c('img', {
      attrs: {
        "src": blog.attributes.image.data.attributes.url,
        "alt": "blog"
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
      attrs: {
        "to": '/blog/' + blog.attributes.slug
      }
    }, [_vm._v("\n                                " + _vm._s(blog.attributes.title) + "\n                            ")])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape(_vm._s(blog.attributes.shortDesc)) + "</p> <ul class=\"meta\"><li><i class=\"ri-time-line\"></i>" + _vm._ssrEscape(" " + _vm._s(blog.attributes.date)) + "</li></ul>")], 2)], 2)]);
  }), 0) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/Blog.vue?vue&type=template&id=1cf293d9&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Blog.vue?vue&type=script&lang=js&

/* harmony default export */ var Blogvue_type_script_lang_js_ = ({
  name: 'Blog',
  data() {
    return {
      blogs: []
    };
  },
  created: async function () {
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/blogs?populate=*');
    this.blogs = response.data.data;
  }
});
// CONCATENATED MODULE: ./components/Common/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Blogvue_type_script_lang_js_ = (Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/Blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "45bdf7a7"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactUs/PageHeader.vue?vue&type=template&id=540b577b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contact-page-header-form-app-download-area pb-80 bg-F7F7FF"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"contact-page-header-form-app-download-inner\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\"><div class=\"software-integrations-inner bg-gradient-color\"><div class=\"features-content-improve-sales\"><h2>Start Your Free Onboarding Now!</h2> <h6>No credit card or software installation is required.</h6> <h5>With <strong><a href=\"https://www.dealdox.io\"> Advanced Quoting Solution</a>\n                                    , Beyond Invoicing</strong> you can benefit from:\n                            </h5> <div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\"><a href=\"https://www.dealdox.io/glossary/guided-selling-solutions\">Guided\n                                                selling approach</a>\n                                            to empower\n                                            sales reps, leaders, and other teams\n                                            for efficient sales processes and optimized decision-making.</h6></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Generate Accurate and Comprehensive\n                                            Quotes in Record Time at 10x speed.</h6></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Effortlessly generate accurate deal\n                                            documents like quotations, proposals,\n                                            SOWs, orders, and more.</h6></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Streamline single or <a href=\"https://www.dealdox.io/approval-software\">multi-level\n                                                approvals</a>\n                                            faster.</h6></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Get your <a href=\"https://www.dealdox.io/\">deal documents in your\n                                                local language,</a> regardless of your country.\n                                        </h6></li> <h5>Question? Talk to an expert: <span class=\"sub-title-faq\">+91 8431995645</span></h5></ul></div></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"contact-area\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<form action=\"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8\" method=\"POST\">", "</form>", [_vm._ssrNode("<input name=\"oid\" type=\"hidden\" value=\"00D2v000003PByK\"> <input name=\"retURL\" type=\"hidden\" value=\"https://dealdox.io/thank-you\"> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>First Name</p> <input type=\"text\" maxlength=\"40\" name=\"first_name\" required=\"required\" id=\"first_name\" placeholder=\"Eg: David\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Last Name</p> <input type=\"text\" maxlength=\"40\" name=\"last_name\" id=\"last_name\" placeholder=\"Eg: Jhon\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><p>Phone Number</p> <input type=\"text\"" + _vm._ssrAttr("maxlength", _vm.maxPhoneNumberLength) + " name=\"phone\" id=\"phone\" maxlength=\"15\" placeholder=\"Eg: 123456789012345\"" + _vm._ssrAttr("title", _vm.phoneValidationMessage) + _vm._ssrAttr("value", _vm.phoneNumber) + " class=\"form-control\"></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Email</p> <input type=\"email\" maxlength=\"40\" name=\"email\" required=\"required\" id=\"email\" placeholder=\"Eg: abc@gmail.com\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Company</p> <input type=\"text\" maxlength=\"40\" name=\"company\" id=\"company\" placeholder=\"Eg: ABC\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Country</p> <input type=\"country\" maxlength=\"40\" name=\"country\" id=\"country\" placeholder=\"Eg: India\" class=\"form-control\"></div></div> <div class=\"col-lg-12 col-md-12 col-sm-12\"><div class=\"form-group\"><p>Leave your message</p> <textarea name=\"00N2v00000XQu8f\" id=\"00N2v00000XQu8f\" cols=\"30\" rows=\"6\" placeholder=\"This just a dummy message! please dont mind\" class=\"form-control\"></textarea></div></div> "), _vm._ssrNode("<div class=\"col-lg-12 col-md-12 col-sm-12\">", "</div>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<input required=\"required\" type=\"checkbox\" value id=\"flexCheckDefault\" class=\"form-check-input\"> "), _vm._ssrNode("<label for=\"flexCheckDefault\" class=\"form-check-label\">", "</label>", [_vm._ssrNode("\n                                                    I agree to the "), _c('NuxtLink', {
    attrs: {
      "to": "/terms-of-use"
    }
  }, [_vm._v(" Terms of\n                                                        Use")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<p>", "</p>", [_vm._ssrNode(" By registering, you confirm that you agree to the storing and processing of\n                                            your personal data by DealDox as described in the"), _c('NuxtLink', {
    attrs: {
      "to": "/privacy-policy"
    }
  }, [_vm._v("\n                                                Privacy Statement.")])], 2), _vm._ssrNode(" <div style=\"display: none;\"><label for=\"Contact_us__c\">Contact</label> <input id=\"Contact_us__c\" maxlength=\"40\" name=\"Contact_us__c\" size=\"20\" type=\"text\" value=\"True\"><br></div> <div data-sitekey=\"6Lcm03wnAAAAAJ0kn_gkod9i_BiG80TaeGw_xViZ\" class=\"g-recaptcha\"></div> <div class=\"col-lg-12 col-md-12 col-sm-12\"><button type=\"submit\" name=\"submit\" required=\"required\" class=\"default-btn\"><i class=\"bx bx-paper-plane\"></i>\n                                                Submit </button></div>")], 2)], 2)])])])])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactUs/PageHeader.vue?vue&type=template&id=540b577b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactUs/PageHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var PageHeadervue_type_script_lang_js_ = ({
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
        phoneValidationMessage: 'Please enter exactly 15 numeric digits'
      },
      formErrors: {}
    };
  },
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
    submitForm() {
      const response = grecaptcha.getResponse();

      // Check if reCAPTCHA response is available
      if (response.length === 0) {
        alert("Please complete the reCAPTCHA.");
        return;
      }

      // If reCAPTCHA response is available, submit the form
      const form = document.querySelector('form');
      form.submit();
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
        console.log('Form submitted successfully!');
      } else {
        console.log('Form validation failed!');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ContactUs/PageHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var ContactUs_PageHeadervue_type_script_lang_js_ = (PageHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ContactUs/PageHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ContactUs_PageHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "61952776"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=template&id=2c1d57b6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('PageHeader'), _vm._ssrNode(" "), _c('Partner'), _vm._ssrNode(" "), _c('Blog'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=template&id=2c1d57b6&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/ContactUs/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(158);

// EXTERNAL MODULE: ./components/Common/Partner.vue + 4 modules
var Partner = __webpack_require__(134);

// EXTERNAL MODULE: ./components/Common/Blog.vue + 4 modules
var Blog = __webpack_require__(135);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=script&lang=js&




// import Faq from '../components/Common/Faq';


/* harmony default export */ var contact_usvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    PageHeader: PageHeader["default"],
    Partner: Partner["default"],
    Blog: Blog["default"],
    // Faq,
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=contact-us&populate=deep,5');
    const pageData = ((_response$data$data = response.data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.length) > 0 ? response.data.data[0] : {};
    if ((pageData === null || pageData === void 0 ? void 0 : (_pageData$attributes = pageData.attributes) === null || _pageData$attributes === void 0 ? void 0 : (_pageData$attributes$ = _pageData$attributes.seo) === null || _pageData$attributes$ === void 0 ? void 0 : _pageData$attributes$.length) > 0) {
      this.seoData = pageData.attributes.seo[0];
    }
  },
  head({
    $seo
  }) {
    return $seo({
      title: this.seoData.metaTitle,
      description: this.seoData.metaDescription,
      keywords: this.seoData.keywords
      // image: this.post.image || '',
    });
  }
});
// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contact_usvue_type_script_lang_js_ = (contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/contact-us.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ba602d06"
  
)

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-us.js.map
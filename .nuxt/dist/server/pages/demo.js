exports.ids = [123,32,33,35,38,44,46,89];
exports.modules = {

/***/ 132:
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
  "079be4ba"
  
)

/* harmony default export */ var Partner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 133:
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
  "a62753c0"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Accordion.vue?vue&type=template&id=2de24dc2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', {
    staticClass: "accordion"
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/Accordion.vue?vue&type=template&id=2de24dc2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Accordion.vue?vue&type=script&lang=js&
/* harmony default export */ var Accordionvue_type_script_lang_js_ = ({
  name: 'Accordion',
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    };
  },
  provide() {
    return {
      Accordion: this.Accordion
    };
  }
});
// CONCATENATED MODULE: ./components/Common/Accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Accordionvue_type_script_lang_js_ = (Accordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/Accordion.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Accordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "baeec28c"
  
)

/* harmony default export */ var Accordion = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/AccordionItem.vue?vue&type=template&id=fc85f8fe&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('li', {
    staticClass: "accordion__item"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("accordion__trigger", {
    'accordion__trigger_active': _vm.visible
  }) + ">", "</div>", [_vm._t("accordion-trigger")], 2), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "accordion"
    },
    on: {
      "enter": _vm.start,
      "after-enter": _vm.end,
      "before-leave": _vm.start,
      "after-leave": _vm.end
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.visible,
      expression: "visible"
    }],
    staticClass: "accordion__content"
  }, [_c('ul', [_vm._t("accordion-content")], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/AccordionItem.vue?vue&type=template&id=fc85f8fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/AccordionItem.vue?vue&type=script&lang=js&
/* harmony default export */ var AccordionItemvue_type_script_lang_js_ = ({
  name: 'AccordionItem',
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
});
// CONCATENATED MODULE: ./components/Common/AccordionItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_AccordionItemvue_type_script_lang_js_ = (AccordionItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/AccordionItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_AccordionItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b73db6d"
  
)

/* harmony default export */ var AccordionItem = __webpack_exports__["default"] = (component.exports);

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
  "c731fdc6"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Faq.vue?vue&type=template&id=934f5480&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "app-download-area pt-65"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"features-content-improve-sales\">", "</div>", [_vm._ssrNode("<div class=\"section-title\">", "</div>", [_vm._ssrNode("<h1>Frequently asked questions</h1> "), _vm._ssrNode("<p>", "</p>", [_vm._ssrNode("Can’t find your query listed? "), _vm._ssrNode("<span class=\"sub-title-faq\">", "</span>", [_c('NuxtLink', {
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("\n                            Write us")])], 1), _vm._ssrNode(" your query")], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-2 col-md-12\"></div> "), _vm._ssrNode("<div class=\"col-lg-8 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"faq-accordion\">", "</div>", [_c('accordion', [_c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        What is CPQ SaaS Software? ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("A SaaS-based quotation product is a software-as-a-service (SaaS) solution\n                                            designed to facilitate the process of creating and managing quotes or price\n                                            estimates for products or services. It is typically used by businesses that\n                                            regularly provide quotes to their customers, such as manufacturing, technology,\n                                            professional services, retail/e-commerce, financial services, healthcare, and\n                                            construction/engineering.\n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        What is DealDox?\n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("DealDox is the best CPQ SaaS Software that enables a complete sales life cycle\n                                            process with automation capabilities\n                                        ")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("\n                                                Quote Creation\n                                            ")]), _vm._v(" "), _c('li', [_vm._v("\n                                                Customization\n                                            ")]), _vm._v(" "), _c('li', [_vm._v("\n                                                Price and Cost Management\n                                            ")]), _vm._v(" "), _c('li', [_vm._v("\n                                                Collaboration and Workflow\n                                            ")]), _vm._v(" "), _c('li', [_vm._v("\n                                                Integration and Automation ")]), _vm._v(" "), _c('li', [_vm._v("\n                                                Quote Analytics and Reporting\n                                            ")]), _vm._v(" "), _c('li', [_vm._v("\n                                                Accessibility and Scalability\n                                            ")])])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        I am running a small business and want to automate the quote generation process.\n                                        Does DealDox help small businesses?\n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Yes! DealDox is designed for businesses of all sizes – small, medium and\n                                            enterprises. DealDox CPQ can help streamline sales processes by automating price\n                                            quote generation. This enables small businesses to respond to buyers quickly\n                                            with accurate pricing quotes and contracts. Although your business may be small,\n                                            you can operate as smoothly as larger organizations.\n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        As the business owner of a Midsized Enterprise with an employee range of less than 1000, I struggle with determining the ideal product pricing, discounts, and services to offer. How can CPQ Software benefit me?                  \n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v(" Definitely, CPQ Software is the best possible solution. With DealDox Configure, Price, Quote sales ops teams can easily manage discounts, pricing and product configuration changes and handle the software's day-to-day management without relying on IT assistance with DealDox as implementation is free of cost. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        How does CPQ help large enterprises scale quote generation and deal management? \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("CPQ streamlines sales processes, enables guided selling, accelerates quote management, expands deal opportunities, and unifies sales operations for large enterprises. By leveraging CPQ software, large enterprises can effectively handle the complexities of quote generation, deal management, and sales scalability, leading to increased sales efficiency, improved customer experience, and accelerated revenue growth.\n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        As a non-IT business owner, can my team easily implement and Adaptation DealDox CPQ?\n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Definitely! DealDox CPQ is specifically designed to be user-friendly, allowing sales and operations teams to seamlessly implement and adapt the software without requiring coding knowledge or reliance on internal IT resources.\n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        My business has complex and different pricing models. Can CPQ for Service handle different pricing models for services?\n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Yes, CPQ software supports various pricing models, including time and expense, fixed price, and margin target, providing flexibility to cater to different service offerings.\n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        How does automated quoting tool help in managing complex service quotes?                                   \n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Automated quoting tool enables the configuration of custom quotes based on customers' specific needs, allowing service businesses to handle and manage complex quoting requirements efficiently.")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        We currently use Salesforce CRM and Oracle ERP. Can DealDox integrate with these systems?\n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Absolutely! DealDox provides native integration with leading CRM platforms such as Salesforce, Microsoft Dynamics 365 for sales, Freshworks, HubSpot, and SugarCRM. This seamless integration ensures smooth data synchronization and enhances sales and customer management by bridging the gap between CRM and ERP systems. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        I am currently using Excel and Word for estimation, but it feels like a cumbersome method. How can DealDox help eliminate manual estimation and simplify complex spreadsheets and documents?\n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("With DealDox, you can wave goodbye to manual tasks and embrace the automation and simplicity of a quoting solution.\n                                        ")]), _vm._v(" "), _c('p', [_vm._v("\n                                            By adopting DealDox, you can bid adieu to the endless hours spent manually inputting data and formulas in Excel and grappling with formatting challenges in Word. DealDox automates the entire estimation process, transforming it into a streamlined and efficient experience.\n                                        ")]), _vm._v(" "), _c('p', [_vm._v("\n                                            DealDox's built-in interface and advanced features allow you to create quotes effortlessly. The software handles all the calculations, pricing, and formatting, leaving you with a polished and error-free quote ready to impress your customers.\n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        I am currently using invoicing software; do I need Quotation Software?\n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Yes, you do. While invoicing software is great for generating invoices, it's not designed to handle the automated quote creation process. Quotation software, like DealDox, goes beyond printing invoices. It automates the entire quoting process, from creating accurate quotes to managing pricing, discounts, and customizations. Don't settle for just printing invoices when you can enhance your sales process with dedicated quoting software.\n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        Is DealDox a cloud-based solution and can I access it through mobile? \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Yes, DealDox is a cloud-based quoting solution. It operates as a Software-as-a-Service (SaaS) quoting solution, meaning it is accessible through the Internet without the need for local installations. Enjoy the convenience of accessing DealDox from anywhere, anytime, and on any device with an internet connection.  \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        I want to gain insights into the sales process. Does DealDox offer reporting features? \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Yes, DealDox comes equipped with robust reporting features. You can gain valuable insights into your sales process by generating reports that provide key metrics and analytics. Track the number of quotations generated, monitor conversion rates, and evaluate your team's performance. DealDox ensures you have the reporting tools you need to make informed decisions and drive success. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        I have an isolated sales team spread across the globe. Will DealDox provide the necessary support?\n                                      ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Absolutely! DealDox is designed to foster team collaboration, even if your sales team is geographically dispersed. With DealDox, you can bring your isolated sales team together and enhance their collaboration efforts. The platform offers features that promote visibility and transparency, allowing team members to work seamlessly on quotes, share information, and provide real-time updates. No matter where your team members are located, DealDox ensures they can collaborate effectively, boosting productivity and achieving better results.  \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        Can the higher management and Directors get visibility into the sales team's process?\n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Absolutely! With DealDox, higher management and Directors can have complete visibility into the sales team's process. This includes tracking the number of quotations generated, approved and rejected quotations - providing insights into the team's process. This visibility allows for informed decision-making, identification of areas for improvement, and driving the sales team towards success.    \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        Can I provide a DealDox license to my vendors and distributors for sales activities worldwide?                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("\n                                            Yes! With DealDox, you have the flexibility to distribute licenses to your distributors and vendors. You can easily allocate licenses to external parties, allowing them to access and utilize the quoting software. DealDox empowers you to extend licenses to external stakeholders, fostering stronger partnerships and streamlining your quoting ecosystem.       \n                                         ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        How can I get my deal documents in my native language if I'm not from an English-speaking country?              \n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("\n                                            DealDox CPQ offers localization for multiple languages. Regardless of your country, you can generate documents in your local language.                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        How can I Request a Demo of DealDox?                              \n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("\n                                            Requesting a demo of DealDox is easy and convenient."), _c('NuxtLink', {
          attrs: {
            "to": "/demo"
          }
        }, [_vm._v(" Click here")]), _vm._v(" to know more.\n                                         ")], 1)])];
      },
      proxy: true
    }])
  })], 1)], 1)]), _vm._ssrNode(" <div class=\"col-lg-2 col-md-12\"></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/Faq.vue?vue&type=template&id=934f5480&

// EXTERNAL MODULE: ./components/Common/Accordion.vue + 4 modules
var Accordion = __webpack_require__(147);

// EXTERNAL MODULE: ./components/Common/AccordionItem.vue + 4 modules
var AccordionItem = __webpack_require__(148);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Faq.vue?vue&type=script&lang=js&


/* harmony default export */ var Faqvue_type_script_lang_js_ = ({
  name: 'Faq',
  components: {
    Accordion: Accordion["default"],
    AccordionItem: AccordionItem["default"]
  }
});
// CONCATENATED MODULE: ./components/Common/Faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Faqvue_type_script_lang_js_ = (Faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/Faq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "087b7908"
  
)

/* harmony default export */ var Faq = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RequestDemo/TransformDealsWith.vue?vue&type=template&id=54166214&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pt-60 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"software-integrations-inner\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<ul class=\"features-list\"><h2>Transform Deals with <br><span class=\"sub-title\">DealDox</span> in Action!</h2> <p>A centralized platform for automated quote generation, <a href=\"https://www.dealdox.io/services-cpq\">Accurate Pricing,</a> Product Bundling\n                                   and Upselling, Margin Optimization, Cost Visibility, Efficient Pricing Strategy,\n                                    <a href=\"https://www.dealdox.io/localized-deal-documents\">Customize Deal Documents in your desired language,</a>\nand more! </p> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Easy to Use</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Totally Unified</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Close Deals Faster</p></li></ul> "), _vm._ssrNode("<div class=\"btn-box\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/cpq-integrations"
    }
  }, [_vm._v("Know more")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6 col-md-12 ptb-100\">", "</div>", [_vm._ssrNode("<div class=\"contact-area\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<form action=\"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8\" method=\"POST\">", "</form>", [_vm._ssrNode("<input name=\"oid\" type=\"hidden\" value=\"00D2v000003PByK\"> <input name=\"retURL\" type=\"hidden\" value=\"https://dealdox.io/thank-you\"> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>First Name</p> <input type=\"text\" maxlength=\"40\" name=\"first_name\" required=\"required\" id=\"first_name\" placeholder=\"Eg: David\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Last Name</p> <input type=\"text\" maxlength=\"40\" name=\"last_name\" id=\"last_name\" placeholder=\"Eg: Marsh\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Phone Number</p> <input type=\"text\"" + _vm._ssrAttr("maxlength", _vm.maxPhoneNumberLength) + " name=\"phone\" id=\"phone\" maxlength=\"15\" placeholder=\"Eg: 123456789012345\"" + _vm._ssrAttr("title", _vm.phoneValidationMessage) + _vm._ssrAttr("value", _vm.phoneNumber) + " class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Email</p> <input type=\"email\" maxlength=\"40\" name=\"email\" required=\"required\" id=\"email\" placeholder=\"Eg: abc@gmail.com\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Job Title</p> <input type=\"text\" maxlength=\"40\" name=\"title\" id=\"title\" placeholder=\"Eg: Associate Consultant\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Company</p> <input type=\"text\" maxlength=\"40\" name=\"company\" id=\"company\" placeholder=\"Eg: ABC\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Employees</p> <select name=\"Employees__c\" id=\"Employees__c\" required=\"required\" class=\"form-control\"><option>--None--</option> <option value=\"1-20\">1-20</option> <option value=\"21-200\">21-200</option> <option value=\"201-10000\">201-10000</option> <option value=\"10000+\">10000+</option></select></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Country</p> <input type=\"country\" maxlength=\"40\" name=\"country\" id=\"country\" placeholder=\"Eg: Country\" class=\"form-control\"></div></div> <div style=\"display: none;\"><label for=\"Request_demo__c\">Request a Demo</label> <input id=\"Request_demo__c\" maxlength=\"40\" name=\"Request_demo__c\" size=\"20\" type=\"text\" value=\"True\"><br></div> "), _vm._ssrNode("<div class=\"col-lg-12 col-md-12 col-sm-12\">", "</div>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<input required=\"required\" type=\"checkbox\" value id=\"flexCheckDefault\" class=\"form-check-input\"> "), _vm._ssrNode("<label for=\"flexCheckDefault\" class=\"form-check-label\">", "</label>", [_vm._ssrNode("\n                                                       I agree to the "), _c('NuxtLink', {
    attrs: {
      "to": "/terms-of-use"
    }
  }, [_vm._v(" Terms of\n                                                           Use")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<p>", "</p>", [_vm._ssrNode(" By registering, you confirm that you agree to the storing and processing of\n                                               your personal data by DealDox as described in the"), _c('NuxtLink', {
    attrs: {
      "to": "/privacy-policy"
    }
  }, [_vm._v("\n                                                   Privacy Statement.")])], 2), _vm._ssrNode(" <div class=\"col-lg-12 col-md-12 col-sm-12\"><button type=\"submit\" name=\"submit\" required=\"required\" class=\"default-btn\"><i class=\"bx bx-paper-plane\"></i>\n                                                   Request a Demo </button></div>")], 2)], 2)])])])])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/RequestDemo/TransformDealsWith.vue?vue&type=template&id=54166214&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RequestDemo/TransformDealsWith.vue?vue&type=script&lang=js&
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

/* harmony default export */ var TransformDealsWithvue_type_script_lang_js_ = ({
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
      if (!this.formData.Employees__c) {
        this.errors.Employees__c = 'Message is required.';
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
  name: 'EasyIntegration'
});
// CONCATENATED MODULE: ./components/RequestDemo/TransformDealsWith.vue?vue&type=script&lang=js&
 /* harmony default export */ var RequestDemo_TransformDealsWithvue_type_script_lang_js_ = (TransformDealsWithvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/RequestDemo/TransformDealsWith.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  RequestDemo_TransformDealsWithvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d49f15e4"
  
)

/* harmony default export */ var TransformDealsWith = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/demo.vue?vue&type=template&id=1e9a5ac9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('TransformDealsWith'), _vm._ssrNode(" "), _c('Partner'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/demo.vue?vue&type=template&id=1e9a5ac9&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/ContactUs/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(158);

// EXTERNAL MODULE: ./components/RequestDemo/TransformDealsWith.vue + 4 modules
var TransformDealsWith = __webpack_require__(256);

// EXTERNAL MODULE: ./components/Common/Partner.vue + 4 modules
var Partner = __webpack_require__(132);

// EXTERNAL MODULE: ./components/Common/Blog.vue + 4 modules
var Blog = __webpack_require__(133);

// EXTERNAL MODULE: ./components/Common/Faq.vue + 4 modules
var Faq = __webpack_require__(159);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/demo.vue?vue&type=script&lang=js&








/* harmony default export */ var demovue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    PageHeader: PageHeader["default"],
    TransformDealsWith: TransformDealsWith["default"],
    Partner: Partner["default"],
    Blog: Blog["default"],
    Faq: Faq["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=demo&populate=deep,5');
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
// CONCATENATED MODULE: ./pages/demo.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_demovue_type_script_lang_js_ = (demovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/demo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_demovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fb6ec924"
  
)

/* harmony default export */ var demo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=demo.js.map
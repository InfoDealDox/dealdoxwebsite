exports.ids = [138,32,33,42,80,81,82,83,84,85];
exports.modules = {

/***/ 124:
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
  "f21c4cda"
  
)

/* harmony default export */ var Accordion = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 125:
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
  "10a201c6"
  
)

/* harmony default export */ var AccordionItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/do-you-know-tag.700e777.svg";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Filemanagementbyemployee.61dc3d8.png";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DocumentAnalytics.23450ea.png";

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/LocalizedDealDocuments.3c66342.png";

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Financialdocumentsandforms.9484b8d.png";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Womanearningthroughpassiveincome.5d9aa26.png";

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/MainBannerLoacalized.vue?vue&type=template&id=0f80d6ef&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-app-main-banner-wrap-area bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"new-app-main-banner-wrap-content\">", "</div>", [_vm._ssrNode("<h1>Introducing Localized Deal Documents: Unlocking <span style=\"color: #715CF3\">Multilingual\n                            Communication</span><span class=\"sub-title\"></span> for Global Business</h1> "), _vm._ssrNode("<div class=\"tb-30\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/sign-up-free-trial",
      "required": ""
    }
  }, [_c('i', {
    staticClass: "bx bx-paper-plane"
  }), _vm._v("\n                            Start My Free Trail")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div data-aos=\"fade-left\" data-aos-duration=\"2000\" class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(189)) + " alt=\"image\"></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/MainBannerLoacalized.vue?vue&type=template&id=0f80d6ef&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/MainBannerLoacalized.vue?vue&type=script&lang=js&
/* harmony default export */ var MainBannerLoacalizedvue_type_script_lang_js_ = ({
  name: 'MainBannercpq'
});
// CONCATENATED MODULE: ./components/LocalizedDealDocuments/MainBannerLoacalized.vue?vue&type=script&lang=js&
 /* harmony default export */ var LocalizedDealDocuments_MainBannerLoacalizedvue_type_script_lang_js_ = (MainBannerLoacalizedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/MainBannerLoacalized.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LocalizedDealDocuments_MainBannerLoacalizedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "480de278"
  
)

/* harmony default export */ var MainBannerLoacalized = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/HowLocalizedDeal.vue?vue&type=template&id=288aeef8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-area bg-white ptb-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(128)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h3>Breaking Barriers, Connecting Deals:</h3> <p>Businesses are crossing international boundaries and interacting with partners, clients, and\n                            consumers who come from a variety of language origins. It is essential to get through language\n                            barriers and guarantee clarity in all business contacts in order to promote successful\n                            communication and cooperation. This is where Localized Deal Documents' pioneering functionality\n                            shines.\n                        </p> <h5>Going Global: The Benefits of Multilingual Automated Quotation CPQ Software for Your Business\n                        </h5> <p>Regional CPQ <a href=\"https://www.dealdox.io/quoting-software\">automated quote generation</a>\n                            is an advanced solution designed to support multilingual communication in a global business\n                            environment. This feature enables businesses to create and share deal documents, such as\n                            quotations, contracts, proposals, agreements, SOW and more, in a variety of languages. By\n                            offering support for a wide range of languages, including English, Chinese (Mandarin and\n                            Cantonese), Spanish, Arabic, Hindi, Bengali, Portuguese, Russian, Japanese, German, French,\n                            Italian, Korean, Turkish, Polish, Dutch, Indonesian, Vietnamese, Thai, and Swedish, businesses\n                            can now engage with stakeholders worldwide with ease.</p></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"about-content-right\"><h3>Regional CPQ automated quote <br> generation </h3> <p>is an advanced solution designed to support multilingual communication in a global business\n                            environment. This feature enables businesses to create and share deal documents, such as\n                            quotations, contracts, proposals, agreements, SOW and more, in a variety of languages. By\n                            offering support for a wide range of languages, including English, Chinese (Mandarin and\n                            Cantonese), Spanish, Arabic, Hindi, Bengali, Portuguese, Russian, Japanese, German, French,\n                            Italian, Korean, Turkish, Polish, Dutch, Indonesian, Vietnamese, Thai, and Swedish, businesses\n                            can now engage with stakeholders worldwide with ease.\n                        </p></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(132)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/HowLocalizedDeal.vue?vue&type=template&id=288aeef8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/HowLocalizedDeal.vue?vue&type=script&lang=js&
/* harmony default export */ var HowLocalizedDealvue_type_script_lang_js_ = ({
  name: 'QuickandAccurate'
});
// CONCATENATED MODULE: ./components/LocalizedDealDocuments/HowLocalizedDeal.vue?vue&type=script&lang=js&
 /* harmony default export */ var LocalizedDealDocuments_HowLocalizedDealvue_type_script_lang_js_ = (HowLocalizedDealvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/HowLocalizedDeal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LocalizedDealDocuments_HowLocalizedDealvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "546adbd6"
  
)

/* harmony default export */ var HowLocalizedDeal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/KeyBenefitsof.vue?vue&type=template&id=50c8b047&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "key-features-area bg-FAFAFA pt-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title-pages-full\"><div class=\"new-app-main-banner-wrap-content-full tb-20\"><h3><span class=\"sub-title-effortless\">Key Benefits</span> of Geographically<br> Customized Quotations:\n                </h3></div></div> <div class=\"row justify-content-center\"><div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-card bg-color-two\" style=\"height:300px\"><h3>Enhanced Clarity</h3> <p class=\"text-left\"> By providing localized versions of deal documents, businesses can ensure that\n                        all\n                        parties involved fully understand the terms, conditions, and obligations outlined in the\n                        documents. This minimizes the risk of miscommunication and potential disputes, fostering\n                        smoother business relationships.\n                    </p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-card bg-color-two\" style=\"height:300px\"><h3>Cultural Sensitivity</h3> <p class=\"text-left\">Different cultures have unique business practices and linguistic nuances. By\n                        tailoring\n                        deal documents to specific languages, businesses demonstrate cultural sensitivity and respect\n                        for their counterparts, thereby strengthening trust and rapport.\n                    </p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-card bg-color-two\" style=\"height:300px\"><h3>Improved Efficiency</h3> <p class=\"text-left\">With regionally customed agreements, businesses no longer need to rely on\n                        external translation services or spend valuable time manually translating documents. The feature\n                        streamlines the process by generating accurate translations in real-time, saving time and\n                        resources.</p></div></div></div> <div class=\"row justify-content-center\"><div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-card bg-color-two\" style=\"height:390px\"><h3>Increased Conversion Rates</h3> <p class=\"text-left\">Geographically customized automated quotations can significantly improve\n                        conversion rates. When potential customers receive quotes that are specifically tailored to\n                        their region, they are more likely to perceive the offering as relevant, competitive, and\n                        suitable for their specific needs. This personalized approach can boost customer confidence and\n                        drive higher conversion rates.\n                    </p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-card bg-color-two\" style=\"height:390px\"><h3>Customization Options</h3> <p class=\"text-left\">The feature allows businesses to customize the layout and formatting of their\n                        deal documents, ensuring consistency and brand identity across languages. Companies can also\n                        incorporate region-specific legal requirements and industry-specific terminology, further\n                        enhancing document accuracy and relevance.\n                    </p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-card bg-color-two\" style=\"height:390px\"><h3>Market Expansion Enablement</h3> <p class=\"text-left\">Non-english <a href=\"https://www.dealdox.io/services-cpq\">cpq for services</a>\n                        help businesses adapt to local pricing norms,\n                        regulations, and customer expectations. By tailoring quotes to specific regions, enterprises can\n                        effectively penetrate new markets and establish a strong presence, facilitating their overall\n                        growth and expansion plans.</p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/KeyBenefitsof.vue?vue&type=template&id=50c8b047&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/KeyBenefitsof.vue?vue&type=script&lang=js&
/* harmony default export */ var KeyBenefitsofvue_type_script_lang_js_ = ({
  name: 'WhatisCPQ'
});
// CONCATENATED MODULE: ./components/LocalizedDealDocuments/KeyBenefitsof.vue?vue&type=script&lang=js&
 /* harmony default export */ var LocalizedDealDocuments_KeyBenefitsofvue_type_script_lang_js_ = (KeyBenefitsofvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/KeyBenefitsof.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LocalizedDealDocuments_KeyBenefitsofvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a30b40ba"
  
)

/* harmony default export */ var KeyBenefitsof = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/HowLocalized.vue?vue&type=template&id=3db935a0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pb-85 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"software-integrations-inner bg-gradient-color\"><div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-content\"><ul class=\"features-list\"><h2>How Localized Deal Documents Work:</h2> <p>Using Localized <a href=\"https://www.dealdox.io/localized-deal-documents\">Deal\n                                    Documents</a>\n                                is a straightforward and user-friendly process.</p> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5>Select Language</h5> <p class=\"with-top-border\">Choose the desired language for the deal documentation from a\n                                    comprehensive list of supported languages.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5>Generate Quotation:</h5> <p>Select the preferred services from the catalogue and submit. You will get the\n                                    required documents in your selected language.</p></li></ul></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"software-integrations-list\"><img" + _vm._ssrAttr("src", __webpack_require__(190)) + " alt=\"border\"></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/HowLocalized.vue?vue&type=template&id=3db935a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/HowLocalized.vue?vue&type=script&lang=js&
/* harmony default export */ var HowLocalizedvue_type_script_lang_js_ = ({
  name: 'EasyIntegration'
});
// CONCATENATED MODULE: ./components/LocalizedDealDocuments/HowLocalized.vue?vue&type=script&lang=js&
 /* harmony default export */ var LocalizedDealDocuments_HowLocalizedvue_type_script_lang_js_ = (HowLocalizedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/HowLocalized.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LocalizedDealDocuments_HowLocalizedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ce468b6c"
  
)

/* harmony default export */ var HowLocalized = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/EmpoerGlobal.vue?vue&type=template&id=1a66857e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-area bg-white ptb-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(191)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h3>Empowering Global </h3> <h3>Business Communication</h3> <p>Area-specific deal documents revolutionize the way businesses communicate, collaborate, and conduct transactions across linguistic barriers. By providing support for an extensive array of languages, this feature enables organizations to unlock new opportunities, establish strong relationships, and navigate the global business landscape confidently. Businesses can overcome language barriers using regional contracts, ensuring that all parties are able to understand their agreements.  \n                        </p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/EmpoerGlobal.vue?vue&type=template&id=1a66857e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/EmpoerGlobal.vue?vue&type=script&lang=js&
/* harmony default export */ var EmpoerGlobalvue_type_script_lang_js_ = ({
  name: 'QuickandAccurate'
});
// CONCATENATED MODULE: ./components/LocalizedDealDocuments/EmpoerGlobal.vue?vue&type=script&lang=js&
 /* harmony default export */ var LocalizedDealDocuments_EmpoerGlobalvue_type_script_lang_js_ = (EmpoerGlobalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/EmpoerGlobal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LocalizedDealDocuments_EmpoerGlobalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "80cde8d4"
  
)

/* harmony default export */ var EmpoerGlobal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/FreeTrial.vue?vue&type=template&id=58f7e074&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-free-trial-area bg-FAFAFA ptb-100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-item-free-quotes with-border bg-white\">", "</div>", [_vm._ssrNode("<div class=\"did-you-know\"><img" + _vm._ssrAttr("src", __webpack_require__(126)) + " alt=\"image\"></div> <h3>With the multilingual document creation capability of <a href=\"https://www.dealdox.io\">DealDox</a> CPQ, you can confidently navigate\n                        international markets, expand your customer base, and close deals faster. By speaking your\n                        prospects' language, you demonstrate a deep understanding of their needs, culture, and\n                        preferences, elevating your sales effectiveness to a whole new level. </h3> "), _c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/sign-up-free-trial"
    }
  }, [_vm._v("Start My Free Trial")])], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/FreeTrial.vue?vue&type=template&id=58f7e074&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LocalizedDealDocuments/FreeTrial.vue?vue&type=script&lang=js&
/* harmony default export */ var FreeTrialvue_type_script_lang_js_ = ({
  name: 'FreeTrial'
});
// CONCATENATED MODULE: ./components/LocalizedDealDocuments/FreeTrial.vue?vue&type=script&lang=js&
 /* harmony default export */ var LocalizedDealDocuments_FreeTrialvue_type_script_lang_js_ = (FreeTrialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LocalizedDealDocuments/FreeTrial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LocalizedDealDocuments_FreeTrialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c10d924a"
  
)

/* harmony default export */ var FreeTrial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/localizedfaq.vue?vue&type=template&id=39c49f7e&
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
        }, [_vm._v("\n                                     What is the significance of DealDox CPQ's multilingual document capabilities?   ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("DealDox CPQ's multilingual capabilities enable users to create deal documents in various languages, facilitating effective communication and negotiation in international markets. \n\n   \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                     How does multilingual document creation in DealDox quotation software benefit businesses in global markets?  \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("It allows businesses to navigate diverse linguistic landscapes, expand their reach, and close deals faster by tailoring documents to the language preferences of international clients.  \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                     How does using multilingual documents enhance sales effectiveness in DealDox quoting tool?  \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("By speaking the language of prospects, businesses demonstrate a deep understanding of their needs and preferences, elevating the overall effectiveness of sales communication and negotiation.  \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                  Is there a limit to the number of languages supported by DealDox CPQ for document creation?              \n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("DealDox CPQ is designed to support a wide range of languages, and the platform can be configured to include additional languages based on specific business requirements.  \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                       Can users customize the language preferences in DealDox CPQ for different clients?  \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v(" Yes, users have the flexibility to customize language preferences based on individual client requirements, allowing for a personalized and tailored approach in deal document creation. \n                                        ")])])];
      },
      proxy: true
    }])
  })], 1)], 1)]), _vm._ssrNode(" <div class=\"col-lg-2 col-md-12\"></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/localizedfaq.vue?vue&type=template&id=39c49f7e&

// EXTERNAL MODULE: ./components/Common/Accordion.vue + 4 modules
var Accordion = __webpack_require__(124);

// EXTERNAL MODULE: ./components/Common/AccordionItem.vue + 4 modules
var AccordionItem = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/localizedfaq.vue?vue&type=script&lang=js&


/* harmony default export */ var localizedfaqvue_type_script_lang_js_ = ({
  name: 'Faq',
  components: {
    Accordion: Accordion["default"],
    AccordionItem: AccordionItem["default"]
  }
});
// CONCATENATED MODULE: ./components/Common/localizedfaq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_localizedfaqvue_type_script_lang_js_ = (localizedfaqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/localizedfaq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_localizedfaqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "40e2e420"
  
)

/* harmony default export */ var localizedfaq = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/localized-deal-documents.vue?vue&type=template&id=247b76fe&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('MainBannerLoacalized'), _vm._ssrNode(" "), _c('HowLocalizedDeal'), _vm._ssrNode(" "), _c('KeyBenefitsof'), _vm._ssrNode(" "), _c('HowLocalized'), _vm._ssrNode(" "), _c('EmpoerGlobal'), _vm._ssrNode(" "), _c('FreeTrial'), _vm._ssrNode(" "), _c('localizfaq'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/localized-deal-documents.vue?vue&type=template&id=247b76fe&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/LocalizedDealDocuments/MainBannerLoacalized.vue + 4 modules
var MainBannerLoacalized = __webpack_require__(265);

// EXTERNAL MODULE: ./components/LocalizedDealDocuments/HowLocalizedDeal.vue + 4 modules
var HowLocalizedDeal = __webpack_require__(266);

// EXTERNAL MODULE: ./components/LocalizedDealDocuments/KeyBenefitsof.vue + 4 modules
var KeyBenefitsof = __webpack_require__(267);

// EXTERNAL MODULE: ./components/LocalizedDealDocuments/HowLocalized.vue + 4 modules
var HowLocalized = __webpack_require__(268);

// EXTERNAL MODULE: ./components/LocalizedDealDocuments/EmpoerGlobal.vue + 4 modules
var EmpoerGlobal = __webpack_require__(269);

// EXTERNAL MODULE: ./components/LocalizedDealDocuments/FreeTrial.vue + 4 modules
var FreeTrial = __webpack_require__(270);

// EXTERNAL MODULE: ./components/Common/localizedfaq.vue + 4 modules
var localizedfaq = __webpack_require__(271);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/localized-deal-documents.vue?vue&type=script&lang=js&










/* harmony default export */ var localized_deal_documentsvue_type_script_lang_js_ = ({
  name: 'AboutPageOne',
  components: {
    Navbar: Navbar["a" /* default */],
    MainBannerLoacalized: MainBannerLoacalized["default"],
    HowLocalizedDeal: HowLocalizedDeal["default"],
    KeyBenefitsof: KeyBenefitsof["default"],
    HowLocalized: HowLocalized["default"],
    EmpoerGlobal: EmpoerGlobal["default"],
    FreeTrial: FreeTrial["default"],
    localizfaq: localizedfaq["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=localized-deal-documents&populate=deep,5');
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
      keywords: this.seoData.keywords,
      link: [{
        hid: 'canonical',
        rel: 'canonical',
        href: this.seoData.canonicalURL
      }]
      // image: this.post.image || '',
    });
  }
});
// CONCATENATED MODULE: ./pages/localized-deal-documents.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_localized_deal_documentsvue_type_script_lang_js_ = (localized_deal_documentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/localized-deal-documents.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_localized_deal_documentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13e1bcbb"
  
)

/* harmony default export */ var localized_deal_documents = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=localized-deal-documents.js.map
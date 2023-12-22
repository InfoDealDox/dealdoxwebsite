exports.ids = [146,16,24,25,26,27,32,33];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shape-5.5c9d317.png";

/***/ }),

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

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Productprice.993bad4.png";

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner-home.89a146c.png";

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cpq-banner.a743e89.png";

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Documentwithphone.1b9d76f.png";

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Database.06375f6.png";

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ReductionDocument.978c19f.png";

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/EnhancedMargins.d552132.png";

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SwiftImplementation.b9857c2.png";

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/StremlinedQuoting.ac875c8.png";

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/MainBannerCPQ.vue?vue&type=template&id=9d24657c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-app-main-banner-wrap-area bg-white"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"new-app-main-banner-wrap-content heading-title\">", "</div>", [_vm._ssrNode("<h1>Best <span style=\"color: #715CF3\">CPQ SOFTWARE</span>  Deliver timely Sales Quotes Faster and More\n                        Accurately</h1> <p>Empower your sales team with DealDox for faster and more accurate quotes for timely deal\n                        delivery.</p> "), _vm._ssrNode("<div class=\"tb-30\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/sign-up-free-trial",
      "required": ""
    }
  }, [_c('i', {
    staticClass: "bx bx-paper-plane"
  }), _vm._v("\n                          Start My Free Trail  ")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div data-aos=\"fade-left\" data-aos-duration=\"2000\" class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(220)) + " alt=\"image\"></div></div>")], 2)]), _vm._ssrNode(" <div class=\"new-app-main-banner-wrap-shape\"><img" + _vm._ssrAttr("src", __webpack_require__(123)) + " alt=\"image\"></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CPQ/MainBannerCPQ.vue?vue&type=template&id=9d24657c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/MainBannerCPQ.vue?vue&type=script&lang=js&
/* harmony default export */ var MainBannerCPQvue_type_script_lang_js_ = ({
  name: 'MainBannercpq'
});
// CONCATENATED MODULE: ./components/CPQ/MainBannerCPQ.vue?vue&type=script&lang=js&
 /* harmony default export */ var CPQ_MainBannerCPQvue_type_script_lang_js_ = (MainBannerCPQvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CPQ/MainBannerCPQ.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CPQ_MainBannerCPQvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d525c34a"
  
)

/* harmony default export */ var MainBannerCPQ = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/TransformYourSales.vue?vue&type=template&id=1e9e1d56&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stats-area-pages bg-white ptb-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title-pages-full\"><div class=\"new-app-main-banner-wrap-content-full\"><h1>Transform Your Sales Process with Our <span class=\"sub-title\">Quoting and Order Management\n                        CPQ</span> Solutions</h1></div> <div class=\"stats-map text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(154)) + " alt=\"cpq\"></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CPQ/TransformYourSales.vue?vue&type=template&id=1e9e1d56&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/TransformYourSales.vue?vue&type=script&lang=js&
/* harmony default export */ var TransformYourSalesvue_type_script_lang_js_ = ({
  name: 'TransformYourSales'
});
// CONCATENATED MODULE: ./components/CPQ/TransformYourSales.vue?vue&type=script&lang=js&
 /* harmony default export */ var CPQ_TransformYourSalesvue_type_script_lang_js_ = (TransformYourSalesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CPQ/TransformYourSales.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CPQ_TransformYourSalesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fb66f1fe"
  
)

/* harmony default export */ var TransformYourSales = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/QuickandAccurate.vue?vue&type=template&id=12a046d0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-area bg-FAFAFA ptb-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(128)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h2><a href=\"https://www.dealdox.io/quoting-software\">Quick and Accurate Quoting</a></h2> <p>DealDox excels as the best CPQ software with advanced guided selling. It provides real-time insights, facilitating precise quoting for businesses of all sizes, from small to large, enhancing sales engagement. \n                        \n                    </p> <p>A predetermined questionnaire flow, facilitated by the best CPQ tools, guides the sales team in configuring the ideal product. This process automatically prompts upgrade, upsell, and cross-selling recommendations to enhance deal size. \n                    </p></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"about-content-right\"><h2>Professional Services</h2> <p>With features like role-based pricing, customizable stages, and flexible pricing options, you can\n                        create accurate and detailed quotes. Gain a complete view of your quotes with summaries, stages,\n                        timeframes, and contract durations. Plus, effortlessly switch between different pricing models,\n                        including time and expense, fixed price, and margin target with the best CPQ software.</p></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(132)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(221)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h2>Managed Services</h2> <p>With the best CPQ tools, you can effortlessly generate quotes for an extensive range of managed services, spanning help desk support, hosting, security monitoring, and more. Custom pricing structures to include vital specifics like contract duration, target margin, discounts, setup and exit fees, user counts, and more. \n                        \n                    </p></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"about-content-right\"><h2>Subscription Services</h2> <p>\n                       Best CPQ tools automate quoting with versatility. Handle fixed, tiered, or pay-per-usage pricing, manage discounts, update prices, and adapt contracts with ease. Add-ons enhance flexibility and scalability. \n                    </p></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(147)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(222)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h2>Everything-as-a-Service</h2> <p>We offer everything as a service where you can add services, subscriptions, and items from our\n                        catalogue in a quote. With the best CPQ software automation you can get quotes for all of your services at\n                        once or for each category separately, which is a unique feature.</p></div></div></div> <div class=\"section-title tb-30\"><h2>Discover the benefits of DealDox today!</h2></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"about-content-right\"><h2>Get Rid of Manual Process</h2> <div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p><a href=\"https://www.dealdox.io/quoting-software\"> Automated Quoting Software</a>\n                                    streamlines quoting, configuration, pricing, and proposal\n                                    generation, eliminating manual processes.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p> The best CPQ Software saves time, ensures accuracy, and accelerates sales cycles. </p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Sales teams can focus on building relationships and closing deals instead of\n                                    administrative tasks.</p></li></ul></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(223)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(224)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h2>Optimize Sales Operations</h2> <div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Maintain pricing and discounts consistency.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Services CPQ automates diverse managed service approvals </p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Easily update products and pricing.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Enhance CRM with accurate sales data.</p></li></ul></div></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"about-content-right\"><h2>Swift Implementation</h2> <div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Sales and operational teams can completely install and manage the system.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Handles any quotation complexity level.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Capability for changing goods, configurations, and price.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Salesforce, Microsoft Dynamics 365 for Sales, Freshworks, Hubspot, and Sugar CRMs -\n                                    can be easily integrated.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Salesforce, Microsoft Dynamics 365 for Sales, Freshworks, Hubspot, and Sugar CRMs -\n                                    can be easily integrated.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>The best CPQ tools integrate with ERP systems, facilitating real-time data synchronization and smooth cross-platform communication for operational efficiency. </p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>There is no additional coding or reliance on internal IT resources.</p></li></ul></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(225)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(226)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h2>Streamlined Quoting with Best CPQ Tools</h2> <div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Configure personalized quotes as per customer's requirements</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Generate quotes without errors in any brandable format (such as PDF or Word).</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Modify quantities and apply discounts without needing complicated calculations.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Enhance CRM with accurate sales data</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Implementing automated workflows makes the approval process quicker</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Data is automatically synced with your CRM and ERP for accurate sales tracking and\n                                    reporting</p></li></ul></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CPQ/QuickandAccurate.vue?vue&type=template&id=12a046d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/QuickandAccurate.vue?vue&type=script&lang=js&
/* harmony default export */ var QuickandAccuratevue_type_script_lang_js_ = ({
  name: 'QuickandAccurate'
});
// CONCATENATED MODULE: ./components/CPQ/QuickandAccurate.vue?vue&type=script&lang=js&
 /* harmony default export */ var CPQ_QuickandAccuratevue_type_script_lang_js_ = (QuickandAccuratevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CPQ/QuickandAccurate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CPQ_QuickandAccuratevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "018a365c"
  
)

/* harmony default export */ var QuickandAccurate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/WhatisCPQService.vue?vue&type=template&id=1a43b2ac&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "key-features-area bg-#FAFAFA pt-100 pb-75"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title-about\"><h1> AI-enabled CPQ for Services - Easy to Use and Quick Implementation</h1></div> <div class=\"section-title title-with-bg-text\"><h2>What is CPQ for Services?</h2> <p>Initially, configure, price, quote (CPQ) software applications supported only the automation of product configuration, lacking value for services. This gap led to the emergence of Services CPQ software, addressing the need for service pricing and quotes. Today, the best CPQ tools cater to both products and services. \n              \n            </p> <p> CPQ Services is a sales tool to generate quick quotes accurately. It caters to businesses of all sizes,\n                including small, medium, and large enterprises.Services CPQ automates the presales process of\n                configuring the pricing of services. With CPQ software solutions, you can generate quick and accurate\n                quotes, SOW and proposals in minutes! CPQ tools enable automation and simplify the <a href=\"https://www.dealdox.io/glossary/quote-to-cash-solution\">quote-to-cash </a>process.\n            </p></div> <div class=\"section-title title-with-bg-text\"><h2>CPQ Software: The Ultimate Tool for Multi-Team Collaboration </h2> <p>Empowers teams to work together efficiently, breaking down barriers and enhancing productivity </p></div> <div class=\"row justify-content-center\"><div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-cards\"><h3>Sales</h3> <p class=\"text-left\">\n                        DealDox, the best CPQ software, automates tasks, empowers sales reps, streamlines quotes, and enhances customer interactions.  \n                    </p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-cards\"><h3>Operations</h3> <p class=\"text-left\">\n                       Best CPQ tools empower operations teams without requiring coding skills. They enable quick adjustments to changing business demands, including real-time pricing and service modifications. \n                        </p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"key-features-cards\"><h3>Finance</h3> <p class=\"text-left\">Boost <a href=\"https://www.dealdox.io/glossary/accelerate-revenue-growth\">revenue growth</a>\n                        with enhanced discount Governance, streamlined Quote\n                        Version control, and advanced approval workflows.</p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CPQ/WhatisCPQService.vue?vue&type=template&id=1a43b2ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/WhatisCPQService.vue?vue&type=script&lang=js&
/* harmony default export */ var WhatisCPQServicevue_type_script_lang_js_ = ({
  name: 'WhatisCPQ'
});
// CONCATENATED MODULE: ./components/CPQ/WhatisCPQService.vue?vue&type=script&lang=js&
 /* harmony default export */ var CPQ_WhatisCPQServicevue_type_script_lang_js_ = (WhatisCPQServicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CPQ/WhatisCPQService.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CPQ_WhatisCPQServicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9fa62f1a"
  
)

/* harmony default export */ var WhatisCPQService = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/FreeTrial.vue?vue&type=template&id=164b9a6a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-free-trial-area bg-white ptb-100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-item-free-quotes with-border bg-grey\">", "</div>", [_vm._ssrNode("<div class=\"did-you-know\"><img" + _vm._ssrAttr("src", __webpack_require__(126)) + " alt=\"image\"></div> <h3>\n                       Automated Quote Generation tool speeds up sales cycles, and boosts win rates with precise pricing and timely quotes. \n                        </h3> "), _c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/sign-up-free-trial"
    }
  }, [_vm._v("Start My Free Trial")])], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CPQ/FreeTrial.vue?vue&type=template&id=164b9a6a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CPQ/FreeTrial.vue?vue&type=script&lang=js&
/* harmony default export */ var FreeTrialvue_type_script_lang_js_ = ({
  name: 'FreeTrial'
});
// CONCATENATED MODULE: ./components/CPQ/FreeTrial.vue?vue&type=script&lang=js&
 /* harmony default export */ var CPQ_FreeTrialvue_type_script_lang_js_ = (FreeTrialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CPQ/FreeTrial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CPQ_FreeTrialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48f9edc6"
  
)

/* harmony default export */ var FreeTrial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services-cpq.vue?vue&type=template&id=7c60d707&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('MainBannerCPQ'), _vm._ssrNode(" "), _c('WhatisCPQService'), _vm._ssrNode(" "), _c('TransformYourSales'), _vm._ssrNode(" "), _c('QuickandAccurate'), _vm._ssrNode(" "), _c('FreeTrial'), _vm._ssrNode(" "), _c('serviceFaq'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/services-cpq.vue?vue&type=template&id=7c60d707&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/CPQ/MainBannerCPQ.vue + 4 modules
var MainBannerCPQ = __webpack_require__(294);

// EXTERNAL MODULE: ./components/CPQ/TransformYourSales.vue + 4 modules
var TransformYourSales = __webpack_require__(295);

// EXTERNAL MODULE: ./components/CPQ/QuickandAccurate.vue + 4 modules
var QuickandAccurate = __webpack_require__(296);

// EXTERNAL MODULE: ./components/CPQ/WhatisCPQService.vue + 4 modules
var WhatisCPQService = __webpack_require__(297);

// EXTERNAL MODULE: ./components/CPQ/FreeTrial.vue + 4 modules
var FreeTrial = __webpack_require__(298);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/serviceFaq.vue?vue&type=template&id=1c26ffba&
var serviceFaqvue_type_template_id_1c26ffba_render = function render() {
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
        }, [_vm._v("\n                                     What is CPQ software, and why is it important for my business? ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("CPQ software streamlines sales processes by configuring products, setting pricing, and generating quotes, making it vital for improving sales operations and driving revenue. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                      How can I choose the best CPQ software for my business? \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Select the best CPQ software by assessing your specific needs, industry fit, user-friendliness, scalability, integration capabilities, and seeking recommendations. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                       What are some of the best CPQ tools available in the market? \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Top CPQ tools include Salesforce CPQ, Oracle CPQ Cloud, SAP CPQ, PROS Smart CPQ, and Apptivo, each with unique features and advantages. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                     How can the best CPQ software benefit the services industry?              \n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("The best CPQ software helps service providers configure customized service packages, price accurately, and generate quotes efficiently, improving the sales process and service delivery. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                        Can CPQ software integrate with other business systems? \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("  Yes, CPQ software can integrate with CRM, ERP, and e-commerce platforms, ensuring a unified and efficient sales process throughout your organization. \n                                        ")])])];
      },
      proxy: true
    }])
  })], 1)], 1)]), _vm._ssrNode(" <div class=\"col-lg-2 col-md-12\"></div>")], 2)], 2)]);
};
var serviceFaqvue_type_template_id_1c26ffba_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/serviceFaq.vue?vue&type=template&id=1c26ffba&

// EXTERNAL MODULE: ./components/Common/Accordion.vue + 4 modules
var Accordion = __webpack_require__(124);

// EXTERNAL MODULE: ./components/Common/AccordionItem.vue + 4 modules
var AccordionItem = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/serviceFaq.vue?vue&type=script&lang=js&


/* harmony default export */ var serviceFaqvue_type_script_lang_js_ = ({
  name: 'Faq',
  components: {
    Accordion: Accordion["default"],
    AccordionItem: AccordionItem["default"]
  }
});
// CONCATENATED MODULE: ./components/Common/serviceFaq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_serviceFaqvue_type_script_lang_js_ = (serviceFaqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/serviceFaq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_serviceFaqvue_type_script_lang_js_,
  serviceFaqvue_type_template_id_1c26ffba_render,
  serviceFaqvue_type_template_id_1c26ffba_staticRenderFns,
  false,
  null,
  null,
  "fd259a74"
  
)

/* harmony default export */ var serviceFaq = (component.exports);
// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services-cpq.vue?vue&type=script&lang=js&









/* harmony default export */ var services_cpqvue_type_script_lang_js_ = ({
  name: 'AboutPageOne',
  components: {
    Navbar: Navbar["a" /* default */],
    MainBannerCPQ: MainBannerCPQ["default"],
    TransformYourSales: TransformYourSales["default"],
    QuickandAccurate: QuickandAccurate["default"],
    WhatisCPQService: WhatisCPQService["default"],
    FreeTrial: FreeTrial["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */],
    serviceFaq: serviceFaq
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=services-cpq&populate=deep,5');
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
// CONCATENATED MODULE: ./pages/services-cpq.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_services_cpqvue_type_script_lang_js_ = (services_cpqvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/services-cpq.vue





/* normalize component */

var services_cpq_component = Object(componentNormalizer["a" /* default */])(
  pages_services_cpqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e8093372"
  
)

/* harmony default export */ var services_cpq = __webpack_exports__["default"] = (services_cpq_component.exports);

/***/ })

};;
//# sourceMappingURL=services-cpq.js.map
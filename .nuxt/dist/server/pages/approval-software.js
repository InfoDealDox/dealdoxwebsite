exports.ids = [119,32,33,34,73,74,75,76,77,78,79];
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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DocumentAnalytics.23450ea.png";

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/swiftautomated.79ec144.svg";

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lfqa-banner.3255ad2.png";

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/effortless-automation.e097522.svg";

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/automated-approval.b04222e.png";

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/scope.1282b40.png";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/risk.edb5d03.png";

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/margin.6359416.png";

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Filemanagementbyemployee.f90219e.png";

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/BannerLighteningFast.vue?vue&type=template&id=d706aaee&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-app-main-banner-wrap-area bg-white"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"new-app-main-banner-wrap-content\">", "</div>", [_vm._ssrNode("<h1>Lightening Fast <span style=\"color: #715CF3\"><br>Quote Approvals</span></h1> <p>Unleash the Power of CPQ Quick Approval Process for Rapid Sales, Delighted Customers, and Maximum\n                        Revenue </p> "), _vm._ssrNode("<div class=\"tb-30\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/sign-up-free-trial",
      "required": ""
    }
  }, [_c('i', {
    staticClass: "bx bx-paper-plane"
  }), _vm._v("\n                            Start My Free Trail")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div data-aos=\"fade-left\" data-aos-duration=\"2000\" class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(162)) + " alt=\"image\"></div></div>")], 2)]), _vm._ssrNode(" <div class=\"new-app-main-banner-wrap-shape\"><img" + _vm._ssrAttr("src", __webpack_require__(123)) + " alt=\"image\"></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/BannerLighteningFast.vue?vue&type=template&id=d706aaee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/BannerLighteningFast.vue?vue&type=script&lang=js&
/* harmony default export */ var BannerLighteningFastvue_type_script_lang_js_ = ({
  name: 'LighteningFast'
});
// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/BannerLighteningFast.vue?vue&type=script&lang=js&
 /* harmony default export */ var LightningFastQuoteApprovals_BannerLighteningFastvue_type_script_lang_js_ = (BannerLighteningFastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/BannerLighteningFast.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LightningFastQuoteApprovals_BannerLighteningFastvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f75e5bee"
  
)

/* harmony default export */ var BannerLighteningFast = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/AchieveSalesExcellence.vue?vue&type=template&id=ee09d72a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "key-features-area bg-#FAFAFA pt-100 pb-75"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title title-with-bg-text\"><h3>Achieve Sales Excellence with FAST CPQ Approvals:<br>Fast-Track Your Way to Success</h3></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border bg-FAFAFA\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(149)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h3>Boost Sales with Smart Approval in CPQ for Quick Deal Closures!</h3> <p>CPQ advanced approvals enable sales excellence by simplifying the transaction endorsement process\n                        and considerably shortening the time it takes to close agreements. With quick CPQ quote\n                        approvals - </p> <p></p><div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Sales teams can expedite the approval workflow, eliminating bottlenecks and delays\n                                    that often hinder sales velocity.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Sales professionals can respond to customer inquiries promptly, demonstrate agility,\n                                    and provide a superior buying experience.</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Enables sales teams to close deals faster, increase productivity, and achieve higher\n                                    customer satisfaction. </p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>With CPQ rapid approval system, sales excellence is achieved by optimizing sales\n                                    cycles, improving sales efficiency, and ultimately driving revenue growth. </p></li></ul></div> <p></p></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h3>Maximize Efficiency and Precision with Digital Quoting Tool</h3> <p>Swift and Automated Approvals Seamlessly navigate through the smart and automated agreement of\n                        deals, eliminating complexities and streamlining your operations. With swift CPQ pricing\n                        approvals, the sales process becomes effortless, allowing you to focus on what matters most –\n                        closing deals and serving your customers. Experience the power of automation as it tranforms\n                        your quoting process, ensuring accuracy and consistency while saving you valuable time. </p></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border bg-FAFAFA\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(149)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/AchieveSalesExcellence.vue?vue&type=template&id=ee09d72a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/AchieveSalesExcellence.vue?vue&type=script&lang=js&
/* harmony default export */ var AchieveSalesExcellencevue_type_script_lang_js_ = ({
  name: 'AchieveSalesExcellence'
});
// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/AchieveSalesExcellence.vue?vue&type=script&lang=js&
 /* harmony default export */ var LightningFastQuoteApprovals_AchieveSalesExcellencevue_type_script_lang_js_ = (AchieveSalesExcellencevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/AchieveSalesExcellence.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LightningFastQuoteApprovals_AchieveSalesExcellencevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b675c79"
  
)

/* harmony default export */ var AchieveSalesExcellence = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/EffortlessAutomation.vue?vue&type=template&id=4d2043b4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stats-area-pages bg-white ptb-75"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title-pages-full\"><div class=\"new-app-main-banner-wrap-content-full\"><h3><span class=\"sub-title-effortless\">&quot;Effortless Automation&quot;</span> DealDox let's you Preprogram All\n                    of These and More</h3></div> <div class=\"stats-map text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(163)) + " alt></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/EffortlessAutomation.vue?vue&type=template&id=4d2043b4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/EffortlessAutomation.vue?vue&type=script&lang=js&
/* harmony default export */ var EffortlessAutomationvue_type_script_lang_js_ = ({
  name: 'EffortlessAutomation'
});
// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/EffortlessAutomation.vue?vue&type=script&lang=js&
 /* harmony default export */ var LightningFastQuoteApprovals_EffortlessAutomationvue_type_script_lang_js_ = (EffortlessAutomationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/EffortlessAutomation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LightningFastQuoteApprovals_EffortlessAutomationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5241447a"
  
)

/* harmony default export */ var EffortlessAutomation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/RoutingCapabilitiess.vue?vue&type=template&id=0c135a81&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-area bg-FAFAFA ptb-75"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border bg-FAFAFA\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(164)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h3>Routing Capabilities</h3> <p>Whether you require single or multiple levels of authorization or need to determine the specific\n                        order for notifying authorities, DealDox makes it easy. Our quote-to-cash platform empowers easy\n                        to deal with all your statement approval concerns. With an efficient CPQ approval workflow, you\n                        can\n                        notify every approver responsible for reviewing and approving, ensuring a smooth process that\n                        aligns with your specified routing rules.\n                    </p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/RoutingCapabilitiess.vue?vue&type=template&id=0c135a81&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/RoutingCapabilitiess.vue?vue&type=script&lang=js&
/* harmony default export */ var RoutingCapabilitiessvue_type_script_lang_js_ = ({
  name: 'RoutingCapabilitiess'
});
// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/RoutingCapabilitiess.vue?vue&type=script&lang=js&
 /* harmony default export */ var LightningFastQuoteApprovals_RoutingCapabilitiessvue_type_script_lang_js_ = (RoutingCapabilitiessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/RoutingCapabilitiess.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LightningFastQuoteApprovals_RoutingCapabilitiessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6325e856"
  
)

/* harmony default export */ var RoutingCapabilitiess = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/ModesofApprovals.vue?vue&type=template&id=9ce63188&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-free-trial-area bg-white ptb-75"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title-pages\"><h1>Modes of Approvals</h1></div> <div class=\"row align-items-center\"><div class=\"col-lg-4 col-md-12\"><div class=\"features-item-free-quotes-pb with-border\"><h5>Solo Approval</h5> <div data-aos=\"fade-up\" class=\"app-download-image\"><img" + _vm._ssrAttr("src", __webpack_require__(165)) + " alt=\"app-img\"></div></div></div> <div class=\"col-lg-4 col-md-12\"><div class=\"features-item-free-quotes-pb with-border\"><h5>Succeeding Approval</h5> <div data-aos=\"fade-up\" class=\"app-download-image\"><img" + _vm._ssrAttr("src", __webpack_require__(166)) + " alt=\"app-img\"></div></div></div> <div class=\"col-lg-4 col-md-12\"><div class=\"features-item-free-quotes-pb with-border\"><h5>Collateral Approval</h5> <div data-aos=\"fade-up\" class=\"app-download-image\"><img" + _vm._ssrAttr("src", __webpack_require__(167)) + " alt=\"app-img\"></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/ModesofApprovals.vue?vue&type=template&id=9ce63188&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/ModesofApprovals.vue?vue&type=script&lang=js&
/* harmony default export */ var ModesofApprovalsvue_type_script_lang_js_ = ({
  name: 'ModesofApprovals'
});
// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/ModesofApprovals.vue?vue&type=script&lang=js&
 /* harmony default export */ var LightningFastQuoteApprovals_ModesofApprovalsvue_type_script_lang_js_ = (ModesofApprovalsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/ModesofApprovals.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LightningFastQuoteApprovals_ModesofApprovalsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f66fac7"
  
)

/* harmony default export */ var ModesofApprovals = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/ApprovalsInsights.vue?vue&type=template&id=253652ad&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-area bg-FAFAFA ptb-75"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border bg-FAFAFA\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(168)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h3>Approvals Insights</h3> <p>DealDox makes it possible to have a delegation dashboard with all quotes accessible from a\n                        single, simple insight. <a href=\"https://www.dealdox.io/glossary/configure-price-quote\">CPQ</a>\n                        instant quote approval process includes examining quote details\n                        approval,\n                        commenting on the quotation, and advising changes. DealDox automatically synchronizes data with\n                        CRM and ERP applications following approval.\n                    </p></div></div></div> <div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h3>Reapprove with Ease </h3> <p>DealDox provides a flexible and streamlined approach <a href=\"https://www.dealdox.io/approval-software\">CPQ approval process.</a> Even after\n                        approval,\n                        if\n                        any modifications are require, they can be made easily can be re-approved without any delay.\n                        This feature ensures that deals are always up-to-date and all parties involved are on the same\n                        plate.\n                    </p></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border bg-FAFAFA\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(132)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/ApprovalsInsights.vue?vue&type=template&id=253652ad&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/ApprovalsInsights.vue?vue&type=script&lang=js&
/* harmony default export */ var ApprovalsInsightsvue_type_script_lang_js_ = ({
  name: 'ApprovalsInsights'
});
// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/ApprovalsInsights.vue?vue&type=script&lang=js&
 /* harmony default export */ var LightningFastQuoteApprovals_ApprovalsInsightsvue_type_script_lang_js_ = (ApprovalsInsightsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/ApprovalsInsights.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LightningFastQuoteApprovals_ApprovalsInsightsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "097c0e06"
  
)

/* harmony default export */ var ApprovalsInsights = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/FreeTrial.vue?vue&type=template&id=7a74db5d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-free-trial-area bg-white ptb-75"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-item-free-quotes with-border bg-grey\">", "</div>", [_vm._ssrNode("<div class=\"did-you-know\"><img" + _vm._ssrAttr("src", __webpack_require__(126)) + " alt=\"image\"></div> <h3>Fast approvals can significantly benefit your business by reducing sales cycle time, boosting\n                        <a href=\"https://www.dealdox.io/glossary/enhancing-customer-satisfaction\">customer satisfaction</a>\n                        , increasing win rates, improving sales team productivity, and optimizing\n                        <a href=\"https://www.dealdox.io/glossary/drive-revenue-generation\">revenue generation.</a>\n                        Experience the Power of Quick Approvals. Get started with a free onboarding\n                        today! Sign up now!\n                    </h3> "), _c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/sign-up-free-trial"
    }
  }, [_vm._v("Start My Free Trial")])], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/FreeTrial.vue?vue&type=template&id=7a74db5d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LightningFastQuoteApprovals/FreeTrial.vue?vue&type=script&lang=js&
/* harmony default export */ var FreeTrialvue_type_script_lang_js_ = ({
  name: 'FreeTrial'
});
// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/FreeTrial.vue?vue&type=script&lang=js&
 /* harmony default export */ var LightningFastQuoteApprovals_FreeTrialvue_type_script_lang_js_ = (FreeTrialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LightningFastQuoteApprovals/FreeTrial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LightningFastQuoteApprovals_FreeTrialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "728a4e08"
  
)

/* harmony default export */ var FreeTrial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/approvalfaq.vue?vue&type=template&id=12f9fa5e&
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
        }, [_vm._v("\nWhy is the implementation of approval workflows crucial in business processes?     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Approval workflows are vital to business processes as they ensure that documents, such as quotes or proposals, meet established criteria before finalization. Their importance lies in maintaining consistency, compliance, and overall document quality, leading to informed decision-making and increased accountability. \n\n   \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                 What exactly is an approval workflow engine?  \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("An approval workflow engine is a system that automates and manages the sequence of steps involved in approving documents or processes within an organization. It orchestrates the flow of information and approvals, enhancing efficiency and reducing the likelihood of errors. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\nWhat sets workflows and the approval process apart?  \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Workflows encompass a broader range of processes, defining how tasks move through various stages. On the other hand, the approval process specifically focuses on obtaining authorization for a document or action. While workflows are more general, approval processes are a subset designed for specific decision points within a workflow. \n                                        ")])])];
      },
      proxy: true
    }])
  })], 1)], 1)]), _vm._ssrNode(" <div class=\"col-lg-2 col-md-12\"></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/approvalfaq.vue?vue&type=template&id=12f9fa5e&

// EXTERNAL MODULE: ./components/Common/Accordion.vue + 4 modules
var Accordion = __webpack_require__(124);

// EXTERNAL MODULE: ./components/Common/AccordionItem.vue + 4 modules
var AccordionItem = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/approvalfaq.vue?vue&type=script&lang=js&


/* harmony default export */ var approvalfaqvue_type_script_lang_js_ = ({
  name: 'Faq',
  components: {
    Accordion: Accordion["default"],
    AccordionItem: AccordionItem["default"]
  }
});
// CONCATENATED MODULE: ./components/Common/approvalfaq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_approvalfaqvue_type_script_lang_js_ = (approvalfaqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/approvalfaq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_approvalfaqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "851b6fc4"
  
)

/* harmony default export */ var approvalfaq = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/approval-software.vue?vue&type=template&id=3e2c9baa&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('BannerLighteningFast'), _vm._ssrNode(" "), _c('AchieveSalesExcellence'), _vm._ssrNode(" "), _c('EffortlessAutomation'), _vm._ssrNode(" "), _c('RoutingCapabilitiess'), _vm._ssrNode(" "), _c('ModesofApprovals'), _vm._ssrNode(" "), _c('ApprovalsInsights'), _vm._ssrNode(" "), _c('FreeTrial'), _vm._ssrNode(" "), _c('approvalFaq'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/approval-software.vue?vue&type=template&id=3e2c9baa&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/LightningFastQuoteApprovals/BannerLighteningFast.vue + 4 modules
var BannerLighteningFast = __webpack_require__(241);

// EXTERNAL MODULE: ./components/LightningFastQuoteApprovals/AchieveSalesExcellence.vue + 4 modules
var AchieveSalesExcellence = __webpack_require__(242);

// EXTERNAL MODULE: ./components/LightningFastQuoteApprovals/EffortlessAutomation.vue + 4 modules
var EffortlessAutomation = __webpack_require__(243);

// EXTERNAL MODULE: ./components/LightningFastQuoteApprovals/RoutingCapabilitiess.vue + 4 modules
var RoutingCapabilitiess = __webpack_require__(244);

// EXTERNAL MODULE: ./components/LightningFastQuoteApprovals/ModesofApprovals.vue + 4 modules
var ModesofApprovals = __webpack_require__(245);

// EXTERNAL MODULE: ./components/LightningFastQuoteApprovals/ApprovalsInsights.vue + 4 modules
var ApprovalsInsights = __webpack_require__(246);

// EXTERNAL MODULE: ./components/LightningFastQuoteApprovals/FreeTrial.vue + 4 modules
var FreeTrial = __webpack_require__(247);

// EXTERNAL MODULE: ./components/Common/approvalfaq.vue + 4 modules
var approvalfaq = __webpack_require__(248);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/approval-software.vue?vue&type=script&lang=js&











/* harmony default export */ var approval_softwarevue_type_script_lang_js_ = ({
  name: 'AboutPageOne',
  components: {
    Navbar: Navbar["a" /* default */],
    BannerLighteningFast: BannerLighteningFast["default"],
    AchieveSalesExcellence: AchieveSalesExcellence["default"],
    EffortlessAutomation: EffortlessAutomation["default"],
    RoutingCapabilitiess: RoutingCapabilitiess["default"],
    ModesofApprovals: ModesofApprovals["default"],
    ApprovalsInsights: ApprovalsInsights["default"],
    FreeTrial: FreeTrial["default"],
    approvalFaq: approvalfaq["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=approval-software&populate=deep,5');
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
// CONCATENATED MODULE: ./pages/approval-software.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_approval_softwarevue_type_script_lang_js_ = (approval_softwarevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/approval-software.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_approval_softwarevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "04c139cf"
  
)

/* harmony default export */ var approval_software = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=approval-software.js.map
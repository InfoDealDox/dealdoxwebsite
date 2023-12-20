exports.ids = [143,7,8,9,10,11,32,33,48];
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

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/automatedqutations.7881917.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/robotic-process-automation.cd4ff62.png";

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/Banner.vue?vue&type=template&id=5181acd6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-app-main-banner-wrap-area bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"new-app-main-banner-wrap-content\">", "</div>", [_vm._ssrNode("<h1>Quote Smarter, Sell Faster with <span style=\"color: #715CF3\"><a href=\"https://www.dealdox.io/quoting-software\"> Quote Automation Software</a></span></h1> <p>Streamline sales, accelerate efficiency and enable faster sales cycle</p> "), _vm._ssrNode("<div class=\"tb-30\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/sign-up-free-trial",
      "required": ""
    }
  }, [_c('i', {
    staticClass: "bx bx-paper-plane"
  }), _vm._v("\n                            Start My Free Trail")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div data-aos=\"fade-left\" data-aos-duration=\"2000\" class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(202)) + " alt=\"image\"></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/Banner.vue?vue&type=template&id=5181acd6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/Banner.vue?vue&type=script&lang=js&
/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  name: 'Banner'
});
// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var AutomatedQuotesGeneration_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/Banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AutomatedQuotesGeneration_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56fd7a25"
  
)

/* harmony default export */ var Banner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/AccelerateYourSales.vue?vue&type=template&id=5f877b14&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-area ptb-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"features-item with-border bg-FAFAFA\"><div class=\"about-img\"><img" + _vm._ssrAttr("src", __webpack_require__(203)) + " data-aos=\"fade-up\" alt=\"about\"></div></div></div> <div class=\"col-lg-6 col-md-12\"><div class=\"about-content\"><h3>Accelerate Your Sales Success: Create Quotes using DealDox Automation Software at 10x Speed\n                    </h3> <p>Optimize quote generation speed by leveraging our Quoting software to automate your sales\n                        process. DealDox, also known as DD CPQ, enables seamless and auto-generating content that\n                        captures the scope, assumptions, price, and client needs. Our <a href=\"https://www.dealdox.io/quoting-software\">automated quoting software</a> covers\n                        everything - from detailed scopes of work to precise terms and conditions, licensing agreements,\n                        automated business proposals, order forms, pricing quotes, and every essential document to seal\n                        the deal. When the scope changes, the CPQ quote automation tool dynamically revises all content,\n                        ensuring you are always up to date and saving you from the headache of manual revisions and\n                        automates the document creation process.\n                    </p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/AccelerateYourSales.vue?vue&type=template&id=5f877b14&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/AccelerateYourSales.vue?vue&type=script&lang=js&
/* harmony default export */ var AccelerateYourSalesvue_type_script_lang_js_ = ({
  name: 'AccelerateYourSales'
});
// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/AccelerateYourSales.vue?vue&type=script&lang=js&
 /* harmony default export */ var AutomatedQuotesGeneration_AccelerateYourSalesvue_type_script_lang_js_ = (AccelerateYourSalesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/AccelerateYourSales.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AutomatedQuotesGeneration_AccelerateYourSalesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "52c00bda"
  
)

/* harmony default export */ var AccelerateYourSales = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/Experiencethefuture.vue?vue&type=template&id=64f18308&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area bg-FAFAFA ptb-75"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title title-with-bg-text\"><h2>Experience the future of business efficiency with advanced features of DealDox</h2></div> <div class=\"row justify-content-center\"><div class=\"col-lg-6 col-sm-6 col-md-6\"><div class=\"features-item with-border-one\"><h3><span class=\"sub-title-key-features\">&quot;AutomateDoc&quot;</span><br>Easy &amp; Efficient</h3> <p>With each new service you add, DealDox’s CPQ process automation feature instantly generates all\n                        the vital documents, such as the scope of work, terms and conditions, licensing agreements, and\n                        more, to complete your proposal.</p></div></div> <div class=\"col-lg-6 col-sm-6 col-md-6\"><div class=\"features-item with-border-two\"><h3><span class=\"sub-title-key-features\">Easy Scope </span><br>Adaptation</h3> <p>Experience the ease of adjusting your scope with just a few clicks. Whether it's adding a new\n                        service, subscription, or catalogue item, our sales automation CPQ software allows you to\n                        seamlessly incorporate them into your offerings.</p></div></div> <div class=\"col-lg-6 col-sm-6 col-md-6\"><div class=\"features-item with-border-three\"><h3>Achieve 10x <span class=\"sub-title-key-features\">Faster Quote Generation</span></h3> <p>Experience an incredible 10x speed advancement compared to quotes created in Word and Excel\n                        spreadsheets. DealDox - enables automated sales quotes in seconds, regardless of the number of\n                        line items.\n                    </p></div></div> <div class=\"col-lg-6 col-sm-6 col-md-6\"><div class=\"features-item with-border-four\"><h3><span class=\"sub-title-key-features\">Optimize</span><br>Pricing Strategies</h3> <p>With advanced pricing rules and algorithms, Quoting software ensures automate complex quoting,\n                        consistency, accuracy, and flexibility in pricing, enabling businesses to maximize profit\n                        margins and win more deals.</p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/Experiencethefuture.vue?vue&type=template&id=64f18308&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/Experiencethefuture.vue?vue&type=script&lang=js&
/* harmony default export */ var Experiencethefuturevue_type_script_lang_js_ = ({
  name: 'Experiencethefuture'
});
// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/Experiencethefuture.vue?vue&type=script&lang=js&
 /* harmony default export */ var AutomatedQuotesGeneration_Experiencethefuturevue_type_script_lang_js_ = (Experiencethefuturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/Experiencethefuture.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AutomatedQuotesGeneration_Experiencethefuturevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d277821"
  
)

/* harmony default export */ var Experiencethefuture = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/YourBusiness.vue?vue&type=template&id=4333238e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-free-trial-area-mid-content-senction bg-background"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12 col-md-12\"><div class=\"features-item-mid-content-senction bg-white with-border\"><h3>Your Business, Your Way: Our  <a href=\"https://www.dealdox.io/glossary/configure-price-quote\">CPQ</a> Software Focuses on Customization</h3> <p>We know that every company is different and that customers have different needs. As a result, our\n                            powerful CPQ software to automate their sales processes makes it easier for users to configure a\n                            wide range of services to meet all their requirements.</p> <p>Automate contract and renewal processes, reducing time-consuming manual processes and saving\n                            money and resources.</p> <p>Automate your sales process with pricing and <a href=\"https://www.dealdox.io/approval-software\">quote generator software</a>, assuring <a href=\"https://www.dealdox.io/quoting-software\">quick and\n                            accurate quotes </a>. Bring on efficient and effective operations and eliminate errors and delays.\n                        </p> <p>Effortlessly adapt to global pricing requirements with DealDox CPQ: Switch between price listings\n                            based on country of delivery and contract currency. For example - If your price listing is in\n                            USD for the country of delivery, and the contract country uses Euro, you have the flexibility to\n                            switch and select your preferred currency with ease.</p> <p>Empower your sales process by easily generating custom quotes in any desired language with DD\n                            quotation software. </p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/YourBusiness.vue?vue&type=template&id=4333238e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/YourBusiness.vue?vue&type=script&lang=js&
/* harmony default export */ var YourBusinessvue_type_script_lang_js_ = ({
  name: 'YourBusiness'
});
// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/YourBusiness.vue?vue&type=script&lang=js&
 /* harmony default export */ var AutomatedQuotesGeneration_YourBusinessvue_type_script_lang_js_ = (YourBusinessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/YourBusiness.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AutomatedQuotesGeneration_YourBusinessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "65a2d868"
  
)

/* harmony default export */ var YourBusiness = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/FreeTrial.vue?vue&type=template&id=64c7b7d2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-free-trial-area bg-white ptb-100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-item-free-quotes with-border bg-grey\">", "</div>", [_vm._ssrNode("<div class=\"did-you-know\"><img" + _vm._ssrAttr("src", __webpack_require__(126)) + " alt=\"image\"></div> <h3>By using CPQ software, you can automate the process of generating proposals and eliminate the\n                        burden of manual content creation. Experience streamlined efficiency and unlock more time for\n                        selling. Get started with free onboarding today!</h3> "), _c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/sign-up-free-trial"
    }
  }, [_vm._v("Start My Free Trial")])], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/FreeTrial.vue?vue&type=template&id=64c7b7d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AutomatedQuotesGeneration/FreeTrial.vue?vue&type=script&lang=js&
/* harmony default export */ var FreeTrialvue_type_script_lang_js_ = ({
  name: 'FreeTrial'
});
// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/FreeTrial.vue?vue&type=script&lang=js&
 /* harmony default export */ var AutomatedQuotesGeneration_FreeTrialvue_type_script_lang_js_ = (FreeTrialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AutomatedQuotesGeneration/FreeTrial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AutomatedQuotesGeneration_FreeTrialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c8b38be"
  
)

/* harmony default export */ var FreeTrial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/quotefaq.vue?vue&type=template&id=d9eb1638&
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
        }, [_vm._v("\n                                    What is an automated quotation software, and how does it work?  ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("An automated quotation system is a technology that uses algorithms and predefined rules to generate price quotes without manual intervention. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                      How does automated quotation software work? \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("It works by analyzing input data, such as product details and customer requirements, to produce accurate and timely quotations. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                       What are the key benefits of using an automated quotation tool for businesses?  \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Automated quotation tool offer advantages such as increased operational efficiency, reduced errors, faster response times, and improved customer satisfaction. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                    Can an automated quotation software be customized to fit the specific needs of my business?               \n                                     ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v("Yes, automated quotation systems are designed to be customizable. \n                                        ")])])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c('accordion-item', {
    scopedSlots: _vm._u([{
      key: "accordion-trigger",
      fn: function () {
        return [_c('button', {
          staticClass: "accordion-title"
        }, [_vm._v("\n                                       What types of businesses or industries can benefit from automated quotations? \n                                    ")])];
      },
      proxy: true
    }, {
      key: "accordion-content",
      fn: function () {
        return [_c('div', {
          staticClass: "accordion-body"
        }, [_c('p', [_vm._v(" Whether in manufacturing, services, or other sectors, the adaptability of these systems makes them valuable for enhancing efficiency and accuracy in generating quotes. \n                                        ")])])];
      },
      proxy: true
    }])
  })], 1)], 1)]), _vm._ssrNode(" <div class=\"col-lg-2 col-md-12\"></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/quotefaq.vue?vue&type=template&id=d9eb1638&

// EXTERNAL MODULE: ./components/Common/Accordion.vue + 4 modules
var Accordion = __webpack_require__(124);

// EXTERNAL MODULE: ./components/Common/AccordionItem.vue + 4 modules
var AccordionItem = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/quotefaq.vue?vue&type=script&lang=js&


/* harmony default export */ var quotefaqvue_type_script_lang_js_ = ({
  name: 'Faq',
  components: {
    Accordion: Accordion["default"],
    AccordionItem: AccordionItem["default"]
  }
});
// CONCATENATED MODULE: ./components/Common/quotefaq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_quotefaqvue_type_script_lang_js_ = (quotefaqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/quotefaq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_quotefaqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "604e3702"
  
)

/* harmony default export */ var quotefaq = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/quoting-software.vue?vue&type=template&id=53d1f4c4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('Banner'), _vm._ssrNode(" "), _c('AccelerateYourSales'), _vm._ssrNode(" "), _c('Experiencethefuture'), _vm._ssrNode(" "), _c('YourBusiness'), _vm._ssrNode(" "), _c('FreeTrial'), _vm._ssrNode(" "), _c('quotingfaq'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/quoting-software.vue?vue&type=template&id=53d1f4c4&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/AutomatedQuotesGeneration/Banner.vue + 4 modules
var Banner = __webpack_require__(280);

// EXTERNAL MODULE: ./components/AutomatedQuotesGeneration/AccelerateYourSales.vue + 4 modules
var AccelerateYourSales = __webpack_require__(281);

// EXTERNAL MODULE: ./components/AutomatedQuotesGeneration/Experiencethefuture.vue + 4 modules
var Experiencethefuture = __webpack_require__(282);

// EXTERNAL MODULE: ./components/AutomatedQuotesGeneration/YourBusiness.vue + 4 modules
var YourBusiness = __webpack_require__(283);

// EXTERNAL MODULE: ./components/AutomatedQuotesGeneration/FreeTrial.vue + 4 modules
var FreeTrial = __webpack_require__(284);

// EXTERNAL MODULE: ./components/Common/quotefaq.vue + 4 modules
var quotefaq = __webpack_require__(285);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/quoting-software.vue?vue&type=script&lang=js&









/* harmony default export */ var quoting_softwarevue_type_script_lang_js_ = ({
  name: 'AutomatedQuotesGeneration',
  components: {
    Navbar: Navbar["a" /* default */],
    Banner: Banner["default"],
    AccelerateYourSales: AccelerateYourSales["default"],
    Experiencethefuture: Experiencethefuture["default"],
    YourBusiness: YourBusiness["default"],
    FreeTrial: FreeTrial["default"],
    quotingfaq: quotefaq["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=quoting-software&populate=deep,5');
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
// CONCATENATED MODULE: ./pages/quoting-software.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_quoting_softwarevue_type_script_lang_js_ = (quoting_softwarevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/quoting-software.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_quoting_softwarevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "72163166"
  
)

/* harmony default export */ var quoting_software = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=quoting-software.js.map
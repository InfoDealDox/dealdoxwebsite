exports.ids = [137,32,33,39,46,63,64,65,66,67,68,69,70,71,72];
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shape4.f931a06.png";

/***/ }),

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
var Accordion = __webpack_require__(124);

// EXTERNAL MODULE: ./components/Common/AccordionItem.vue + 4 modules
var AccordionItem = __webpack_require__(125);

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
  "57bc0aa1"
  
)

/* harmony default export */ var Faq = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Financialdocumentsandfor.e9f9a62.png";

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/MainBanner.vue?vue&type=template&id=d67d6104&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-app-main-banner-wrap-area bg-white"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\"><div data-aos=\"fade-left\" data-aos-duration=\"2000\" class=\"new-app-main-banner-wrap-image\"><img src=\"https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696577/cpq-banner_chwd0d.png\" alt=\"image\" loading=\"lazy\"></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"new-app-main-banner-wrap-content\">", "</div>", [_vm._ssrNode("<h1>Effortlessly streamline your <span style=\"color: rgb(113, 92, 243);\">quote generation</span> process with\n                        DealDox</h1> <p>Are you still stuck with outdated spreadsheet calculations, spending precious time manually\n                        shifting estimates from Excel to Word, and then converting them to PDFs? Say goodbye to these\n                        tedious tasks and welcome effortless quoting with DealDox also called DD CPQ.</p> "), _vm._ssrNode("<div class=\"tb-30\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/demo",
      "required": ""
    }
  }, [_c('i', {
    staticClass: "bx bx-paper-plane"
  }), _vm._v("\n                            Request a Demo")])], 1)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/MainBanner.vue?vue&type=template&id=d67d6104&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/MainBanner.vue?vue&type=script&lang=js&
/* harmony default export */ var MainBannervue_type_script_lang_js_ = ({
  name: 'HomeBanner'
});
// CONCATENATED MODULE: ./components/IndexPage/MainBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_MainBannervue_type_script_lang_js_ = (MainBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/MainBanner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_MainBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ebd593c"
  
)

/* harmony default export */ var MainBanner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/TransformYourSales.vue?vue&type=template&id=1267ee10&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stats-area-pages bg-white pt-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title-pages-full\"><div class=\"new-app-main-banner-wrap-content-full\"><span class=\"sub-title\"><h4>Experience Swift Deal Creation, Agile Price List Switching, and Dynamic Discounts with DealDox\n                        CPQ</h4></span></div> <div class=\"stats-map text-center\"><img src=\"https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696703/banner-home_gsvir8.png\" alt=\"cpq\"></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/TransformYourSales.vue?vue&type=template&id=1267ee10&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/TransformYourSales.vue?vue&type=script&lang=js&
/* harmony default export */ var TransformYourSalesvue_type_script_lang_js_ = ({
  name: 'TransformYourSales'
});
// CONCATENATED MODULE: ./components/IndexPage/TransformYourSales.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_TransformYourSalesvue_type_script_lang_js_ = (TransformYourSalesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/TransformYourSales.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_TransformYourSalesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8d7c7af8"
  
)

/* harmony default export */ var TransformYourSales = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/WithOurSubscrip.vue?vue&type=template&id=4c9f81f0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pb-75 bg-white"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"new-app-main-banner-wrap-content-full tb-20\"><h5>With our <strong>subscription-based quoting solution</strong>, you can easily streamline deal</h5> <h5>management.You have the power to generate a wide range of documents, including:</h5></div> <div class=\"software-integrations-inner-home bg-gradient-color\"><div class=\"row align-items-center\"><div class=\"col-lg-5 col-md-12\"><div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Quotations</h5></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Scope Of Work</h5></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Estimations</h5></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Contracts</h5></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Proposals</h5></li></ul></div></div> <div class=\"col-lg-7 col-md-12\"><div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Procurement Services Reports</h5></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Delivery Notes</h5></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Deal Summary Documents</h5></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Service Documents</h5></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h5 class=\"with-top-border-subscription\">Staffing Requirements Document</h5></li></ul></div></div></div></div> <div class=\"new-app-main-banner-wrap-content-full\"><h6>...and many more - all conveniently centralized in one place.</h6> <h6>Get started with SaaS Quoting Software today and generate deal documents in just a few clicks.</h6></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/WithOurSubscrip.vue?vue&type=template&id=4c9f81f0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/WithOurSubscrip.vue?vue&type=script&lang=js&
/* harmony default export */ var WithOurSubscripvue_type_script_lang_js_ = ({
  name: 'EasyIntegration'
});
// CONCATENATED MODULE: ./components/IndexPage/WithOurSubscrip.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_WithOurSubscripvue_type_script_lang_js_ = (WithOurSubscripvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/WithOurSubscrip.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_WithOurSubscripvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e731e30"
  
)

/* harmony default export */ var WithOurSubscrip = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/EasyIntegration.vue?vue&type=template&id=0be616f3&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pt-60 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"software-integrations-inner bg-gradient-color\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<ul class=\"features-list\"><h2>Generate <span class=\"sub-title\"><a href=\"https://www.dealdox.io/quoting-software\"> Automated</a></span> <span class=\"sub-title\"><a href=\"https://www.dealdox.io/quoting-software\"> Quotes</a></span> in a few Seconds! Save Time and Close More\n                                Deals</h2> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Best Solution for quick and accurate quote generation in less\n                                    time</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Eliminate manual quote creation</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Close deals faster and win more business</p></li></ul> "), _vm._ssrNode("<div class=\"btn-box\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/quoting-software"
    }
  }, [_vm._v("Know more")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div class=\"software-integrations-list\"><img src=\"https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696873/Openroboticsoft_qsoyfe.png\" alt=\"border\"></div></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/EasyIntegration.vue?vue&type=template&id=0be616f3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/EasyIntegration.vue?vue&type=script&lang=js&
/* harmony default export */ var EasyIntegrationvue_type_script_lang_js_ = ({
  name: 'EasyIntegration'
});
// CONCATENATED MODULE: ./components/IndexPage/EasyIntegration.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_EasyIntegrationvue_type_script_lang_js_ = (EasyIntegrationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/EasyIntegration.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_EasyIntegrationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42595aea"
  
)

/* harmony default export */ var EasyIntegration = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/LightningFast.vue?vue&type=template&id=316faf05&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pt-60 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"software-integrations-inner bg-gradient-color\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<ul class=\"features-list\"><h2>Lightning-Fast <br><span class=\"sub-title\">Quote Approvals</span></h2> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Enables businesses to shorten the sales cycles</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Expedites <a href=\"https://www.dealdox.io/approval-software\">multi-level approval</a>\n                                    workflow by eliminating bottlenecks</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Real-Time visibility in Approval workflow</p></li></ul> "), _vm._ssrNode("<div class=\"btn-box\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/approval-software"
    }
  }, [_vm._v("Know more")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div class=\"software-integrations-list\"><img src=\"https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696753/lfqa-banner_jscbk9.png\" alt=\"border\"></div></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/LightningFast.vue?vue&type=template&id=316faf05&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/LightningFast.vue?vue&type=script&lang=js&
/* harmony default export */ var LightningFastvue_type_script_lang_js_ = ({
  name: 'EasyIntegration'
});
// CONCATENATED MODULE: ./components/IndexPage/LightningFast.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_LightningFastvue_type_script_lang_js_ = (LightningFastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/LightningFast.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_LightningFastvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9579cac2"
  
)

/* harmony default export */ var LightningFast = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/ImproveSales.vue?vue&type=template&id=5b5ec796&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pt-60 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"software-integrations-inner bg-gradient-color\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<ul class=\"features-list\"><h2>Improve Sales Efficiency with the best <span class=\"sub-title\"><a href=\"https://www.dealdox.io/services-cpq\">CPQ Solutions</a></span></h2> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Reduce mistakes and increase sales productivity with our CPQ solutions</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Replace manual tasks with quick &amp; accurate quote automation</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Increase visibility in revenue and profitability</p></li></ul> "), _vm._ssrNode("<div class=\"btn-box\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/services-cpq"
    }
  }, [_vm._v("Know more")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div class=\"software-integrations-list\"><img src=\"https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696577/cpq-banner_chwd0d.png\" alt=\"border\"></div></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/ImproveSales.vue?vue&type=template&id=5b5ec796&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/ImproveSales.vue?vue&type=script&lang=js&
/* harmony default export */ var ImproveSalesvue_type_script_lang_js_ = ({
  name: 'EasyIntegration'
});
// CONCATENATED MODULE: ./components/IndexPage/ImproveSales.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_ImproveSalesvue_type_script_lang_js_ = (ImproveSalesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/ImproveSales.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_ImproveSalesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "187f47aa"
  
)

/* harmony default export */ var ImproveSales = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/EasyCPQ.vue?vue&type=template&id=23f74fd8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pt-60 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"software-integrations-inner bg-gradient-color\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<ul class=\"features-list\"><h2>Easy CPQ<br><span class=\"sub-title\">Integration</span></h2> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Integrate <a href=\"https://www.dealdox.io/services-cpq\">services CPQ</a>\n                                    with your CRM &amp; ERP system effortlessly</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Auto-sync of accounts, opportunities, price and more</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>DealDox CPQ integration optimizes the sales process</p></li></ul> "), _vm._ssrNode("<div class=\"btn-box\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/cpq-integrations"
    }
  }, [_vm._v("Know more")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div class=\"software-integrations-list\"><img src=\"https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696802/easy-integration_ndti2t.png\" alt=\"border\"></div></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/EasyCPQ.vue?vue&type=template&id=23f74fd8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/EasyCPQ.vue?vue&type=script&lang=js&
/* harmony default export */ var EasyCPQvue_type_script_lang_js_ = ({
  name: 'EasyIntegration'
});
// CONCATENATED MODULE: ./components/IndexPage/EasyCPQ.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_EasyCPQvue_type_script_lang_js_ = (EasyCPQvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/EasyCPQ.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_EasyCPQvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1eacfd4a"
  
)

/* harmony default export */ var EasyCPQ = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/AdditionalFeature.vue?vue&type=template&id=fd459632&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pb-85 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"software-integrations-inner bg-gradient-color\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<ul class=\"features-list\"><h2><span class=\"sub-title\">Localised</span><br> Deal Documents</h2> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Eliminate language barriers for seamless communication with clients and partners</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p class=\"with-top-border\">Conduct business effortlessly in your preferred language with the global reach of DealDox CPQ</p></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <p>Access deal documents in non-English language for enhanced clarity and understanding</p></li></ul> "), _vm._ssrNode("<div class=\"btn-box\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn",
    attrs: {
      "to": "/localized-deal-documents"
    }
  }, [_vm._v("Know more")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12\"><div class=\"software-integrations-list\"><img" + _vm._ssrAttr("src", __webpack_require__(235)) + " alt=\"border\"></div></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/AdditionalFeature.vue?vue&type=template&id=fd459632&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/AdditionalFeature.vue?vue&type=script&lang=js&
/* harmony default export */ var AdditionalFeaturevue_type_script_lang_js_ = ({
  name: 'EasyIntegration'
});
// CONCATENATED MODULE: ./components/IndexPage/AdditionalFeature.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_AdditionalFeaturevue_type_script_lang_js_ = (AdditionalFeaturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/AdditionalFeature.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_AdditionalFeaturevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ac22c28"
  
)

/* harmony default export */ var AdditionalFeature = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/AutomatedQuotes.vue?vue&type=template&id=a9147e1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "app-download-area pt-60"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title-about\"><h1>Enhance Your Quote Generation Process with the best CPQ Solution Now</h1> <h5>Let's get started!</h5></div> "), _vm._ssrNode("<div class=\"app-download-inner\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"section-title-home tb-30\"><h4>Enjoy DealDox At Zero Cost! Including:</h4></div> <div class=\"col-lg-6 col-md-12\"><div data-aos=\"fade-up\" class=\"app-download-images\"><img src=\"https://res.cloudinary.com/ds6j6gokv/image/upload/v1694696847/onboarding-assistance_izkf1q.png\" alt=\"app-img\"></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"app-download-content\">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<ul class=\"features-list\"><li><div class=\"icon-home\"><i class=\"ri-check-line\"></i></div> <h4>Onboarding Assistance</h4></li> <li><div class=\"icon-home\"><i class=\"ri-check-line\"></i></div> <h4>Comprehensive Implementation</h4></li> <li><div class=\"icon-home\"><i class=\"ri-check-line\"></i></div> <h4>Adaptations to meet your needs and so much more</h4></li> <li><div class=\"features-content-home\"><p>Don't miss added perks here</p></div></li></ul> "), _vm._ssrNode("<div class=\"btn-box\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn-home",
    attrs: {
      "to": "/sign-up-free-trial"
    }
  }, [_vm._v("Start My Free Trial")])], 1)], 2)])])], 2), _vm._ssrNode(" <div class=\"shape5\"><img" + _vm._ssrAttr("src", __webpack_require__(130)) + " alt=\"shape4\"></div> <div class=\"lines\"><div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/AutomatedQuotes.vue?vue&type=template&id=a9147e1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/AutomatedQuotes.vue?vue&type=script&lang=js&
/* harmony default export */ var AutomatedQuotesvue_type_script_lang_js_ = ({
  name: 'AppDownload'
});
// CONCATENATED MODULE: ./components/IndexPage/AutomatedQuotes.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_AutomatedQuotesvue_type_script_lang_js_ = (AutomatedQuotesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/AutomatedQuotes.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_AutomatedQuotesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "360606e0"
  
)

/* harmony default export */ var AutomatedQuotes = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/GetInTouch.vue?vue&type=template&id=234ff21c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "app-download-area pt-70"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"app-download-inner bg-gray\">", "</div>", [_vm._ssrNode("<div class=\"contact-page-header-form-app-download-inner\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12\"><div class=\"software-integrations-inner bg-gradient-color\"><div class=\"features-content-improve-sales\"><h2>Start Your Free Onboarding Now!</h2> <h6>No credit card or software installation is required.</h6> <h5>With <strong>Advanced Quoting Solution, Beyond Invoicing</strong> you can benefit\n                                    from:\n                                </h5> <div class=\"features-content\"><ul class=\"features-list\"><li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Guided selling approach to empower\n                                                sales reps, leaders, and other teams\n                                                for efficient sales processes and optimized decision-making.</h6></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Generate Accurate and Comprehensive\n                                                Quotes in Record Time at 10x speed.</h6></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Effortlessly generate accurate deal\n                                                documents like quotations, proposals,\n                                                SOWs, orders, and more.</h6></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Streamline single or multi-level\n                                                approvals faster.</h6></li> <li><div class=\"icon\"><i class=\"ri-check-line\"></i></div> <h6 class=\"with-top-border-subscription\">Get your deal documents in your\n                                                local language, regardless of your\n                                                country.\n                                            </h6></li> <h5>Question? Talk to an expert: <span class=\"sub-title-faq\">+91 8431995645</span></h5></ul></div></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-md-12 ptb-100\">", "</div>", [_vm._ssrNode("<div class=\"contact-area\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"contact-form\">", "</div>", [_vm._ssrNode("<form action=\"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8\" method=\"POST\">", "</form>", [_vm._ssrNode("<input name=\"oid\" type=\"hidden\" value=\"00D2v000003PByK\"> <input name=\"retURL\" type=\"hidden\" value=\"https://dealdox.io/thank-you\"> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>First Name</p> <input type=\"text\" maxlength=\"40\" name=\"first_name\" required=\"required\" id=\"first_name\" placeholder=\"Eg: David\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Last Name</p> <input type=\"text\" maxlength=\"40\" name=\"last_name\" id=\"last_name\" placeholder=\"Eg: Marsh\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Phone Number</p> <input type=\"text\"" + _vm._ssrAttr("maxlength", _vm.maxPhoneNumberLength) + " name=\"phone\" id=\"phone\" maxlength=\"15\" placeholder=\"Eg: 123456789012345\"" + _vm._ssrAttr("title", _vm.phoneValidationMessage) + _vm._ssrAttr("value", _vm.phoneNumber) + " class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Email</p> <input type=\"email\" maxlength=\"40\" name=\"email\" required=\"required\" id=\"email\" placeholder=\"Eg: abc@gmail.com\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Job Title</p> <input type=\"text\" maxlength=\"40\" name=\"title\" id=\"title\" placeholder=\"Eg: Associate Consultant\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Company</p> <input type=\"text\" maxlength=\"40\" name=\"company\" id=\"company\" placeholder=\"Eg: ABC\" class=\"form-control\"></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Employees</p> <select required=\"required\" name=\"Employees__c\" id=\"Employees__c\" class=\"form-control\"><option>--None--</option> <option value=\"1-20\">1-20</option> <option value=\"21-200\">21-200</option> <option value=\"201-10000\">201-10000</option> <option value=\"10000+\">10000+</option></select></div></div> <div class=\"col-lg-6 col-md-6 col-sm-6\"><div class=\"form-group\"><p>Country</p> <input type=\"country\" maxlength=\"40\" name=\"country\" id=\"country\" placeholder=\"Eg: India\" class=\"form-control\"></div></div> "), _vm._ssrNode("<div class=\"col-lg-12 col-md-12 col-sm-12\">", "</div>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<input required=\"required\" type=\"checkbox\" value id=\"flexCheckDefault\" class=\"form-check-input\"> "), _vm._ssrNode("<label for=\"flexCheckDefault\" class=\"form-check-label\">", "</label>", [_vm._ssrNode("\n                                                        I agree to the "), _c('NuxtLink', {
    attrs: {
      "to": "/terms-of-use"
    }
  }, [_vm._v(" Terms of\n                                                            Use")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<p>", "</p>", [_vm._ssrNode(" By registering, you confirm that you agree to the storing and processing\n                                                of\n                                                your personal data by DealDox as described in the"), _c('NuxtLink', {
    attrs: {
      "to": "/privacy-policy"
    }
  }, [_vm._v("\n                                                    Privacy ")]), _vm._ssrNode(" Statement. ")], 2), _vm._ssrNode(" <div style=\"display: none;\"><label for=\"Sign_Up__c\">Start My Free Trial</label> <input id=\"Sign_Up__c\" maxlength=\"40\" name=\"Sign_Up__c\" size=\"20\" type=\"text\" value=\"True\"><br></div> <div class=\"col-lg-12 col-md-12 col-sm-12\"><button type=\"submit\" name=\"submit\" required=\"required\" class=\"default-btn\"><i class=\"bx bx-paper-plane\"></i>\n                                                    Start My Free Trial </button></div>")], 2)], 2)])])])])], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IndexPage/GetInTouch.vue?vue&type=template&id=234ff21c&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexPage/GetInTouch.vue?vue&type=script&lang=js&
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

/* harmony default export */ var GetInTouchvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/IndexPage/GetInTouch.vue?vue&type=script&lang=js&
 /* harmony default export */ var IndexPage_GetInTouchvue_type_script_lang_js_ = (GetInTouchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IndexPage/GetInTouch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IndexPage_GetInTouchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6ef2074a"
  
)

/* harmony default export */ var GetInTouch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=79339520&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('MainBanner'), _vm._ssrNode(" "), _c('TransformYourSales'), _vm._ssrNode(" "), _c('Partner'), _vm._ssrNode(" "), _c('WithOurSubscrip'), _vm._ssrNode(" "), _c('EasyIntegration'), _vm._ssrNode(" "), _c('LightningFast'), _vm._ssrNode(" "), _c('ImproveSales'), _vm._ssrNode(" "), _c('EasyCPQ'), _vm._ssrNode(" "), _c('AdditionalFeature'), _vm._ssrNode(" "), _c('AutomatedQuotes'), _vm._ssrNode(" "), _c('GetInTouch'), _vm._ssrNode(" "), _c('Faq'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=79339520&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/IndexPage/MainBanner.vue + 4 modules
var MainBanner = __webpack_require__(312);

// EXTERNAL MODULE: ./components/IndexPage/TransformYourSales.vue + 4 modules
var TransformYourSales = __webpack_require__(313);

// EXTERNAL MODULE: ./components/Common/Partner.vue + 4 modules
var Partner = __webpack_require__(134);

// EXTERNAL MODULE: ./components/IndexPage/WithOurSubscrip.vue + 4 modules
var WithOurSubscrip = __webpack_require__(314);

// EXTERNAL MODULE: ./components/IndexPage/EasyIntegration.vue + 4 modules
var EasyIntegration = __webpack_require__(315);

// EXTERNAL MODULE: ./components/IndexPage/LightningFast.vue + 4 modules
var LightningFast = __webpack_require__(316);

// EXTERNAL MODULE: ./components/IndexPage/ImproveSales.vue + 4 modules
var ImproveSales = __webpack_require__(317);

// EXTERNAL MODULE: ./components/IndexPage/EasyCPQ.vue + 4 modules
var EasyCPQ = __webpack_require__(318);

// EXTERNAL MODULE: ./components/IndexPage/AdditionalFeature.vue + 4 modules
var AdditionalFeature = __webpack_require__(319);

// EXTERNAL MODULE: ./components/IndexPage/AutomatedQuotes.vue + 4 modules
var AutomatedQuotes = __webpack_require__(320);

// EXTERNAL MODULE: ./components/IndexPage/GetInTouch.vue + 4 modules
var GetInTouch = __webpack_require__(321);

// EXTERNAL MODULE: ./components/Common/Faq.vue + 4 modules
var Faq = __webpack_require__(159);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&















/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    MainBanner: MainBanner["default"],
    TransformYourSales: TransformYourSales["default"],
    Partner: Partner["default"],
    WithOurSubscrip: WithOurSubscrip["default"],
    EasyIntegration: EasyIntegration["default"],
    LightningFast: LightningFast["default"],
    ImproveSales: ImproveSales["default"],
    EasyCPQ: EasyCPQ["default"],
    AdditionalFeature: AdditionalFeature["default"],
    AutomatedQuotes: AutomatedQuotes["default"],
    GetInTouch: GetInTouch["default"],
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
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=index&populate=deep,5');
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
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7fd92930"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
exports.ids = [49,32,33];
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

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/servicefaq.vue?vue&type=template&id=877fbf7a&
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
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/servicefaq.vue?vue&type=template&id=877fbf7a&

// EXTERNAL MODULE: ./components/Common/Accordion.vue + 4 modules
var Accordion = __webpack_require__(124);

// EXTERNAL MODULE: ./components/Common/AccordionItem.vue + 4 modules
var AccordionItem = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/servicefaq.vue?vue&type=script&lang=js&


/* harmony default export */ var servicefaqvue_type_script_lang_js_ = ({
  name: 'Faq',
  components: {
    Accordion: Accordion["default"],
    AccordionItem: AccordionItem["default"]
  }
});
// CONCATENATED MODULE: ./components/Common/servicefaq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_servicefaqvue_type_script_lang_js_ = (servicefaqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/servicefaq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_servicefaqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e349ae6"
  
)

/* harmony default export */ var servicefaq = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-servicefaq.js.map
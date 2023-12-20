exports.ids = [48,32,33];
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

/***/ })

};;
//# sourceMappingURL=common-quotefaq.js.map
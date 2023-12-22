exports.ids = [33];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=common-accordion-item.js.map
exports.ids = [39];
exports.modules = {

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Feedback.vue?vue&type=template&id=2a474377&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "feedback-area bg-white pt-100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"feedback-tabs col-lg-12 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"tab-content\">", "</div>", [_vm._ssrNode("<div class=\"tabs__container\">", "</div>", [_vm._ssrNode("<div class=\"tabs__list\">", "</div>", _vm._l(_vm.customerreviews, function (customerreview) {
    return _vm._ssrNode("<div" + _vm._ssrClass("tabs__list-tab", {
      'active': _vm.activeTab == customerreview.id
    }) + ">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<h1>What does users say about <span class=\"sub-title\">DealDox</span></h1> <br> <br> "), _c('carousel', {
      attrs: {
        "autoplay": 8000,
        "settings": _vm.settings,
        "loop": true,
        "perPageCustom": [[0, 1], [576, 1], [768, 1], [1200, 1], [1400, 1]],
        "paginationEnabled": false,
        "breakpoints": _vm.breakpoints
      }
    }, _vm._l(_vm.customerreviews.singleFeedbacks, function (customerreview) {
      return _c('slide', {
        key: customerreview.id
      }, [_c('h6', [_vm._v(_vm._s(customerreview.quite))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(customerreview.shortDec))]), _vm._v(" "), _c('h6', [_c('span', [_vm._v(_vm._s(customerreview.name))]), _vm._v("\n                                            " + _vm._s(customerreview.designation) + "\n                                        ")]), _vm._v(" "), _c('div', {
        staticClass: "tabs"
      }, [_c('ul', {
        staticClass: "tabs__header"
      }, [_c('li', {
        staticClass: "tabs__header-item"
      }, [_c('img', {
        attrs: {
          "src": customerreview.media.data.attributes.url,
          "alt": "image"
        }
      })])])])]);
    }), 1)], 2)]);
  }), 0)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/Feedback.vue?vue&type=template&id=2a474377&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Feedback.vue?vue&type=script&lang=js&

/* harmony default export */ var Feedbackvue_type_script_lang_js_ = ({
  name: 'CustomerReview',
  data() {
    return {
      customerreviews: null
    };
  },
  created: async function () {
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/customerreview?populate=singleFeedbacks.media');
    const {
      data: {
        attributes
      }
    } = response.data;
    this.customerreviews = attributes;
  }
});
// CONCATENATED MODULE: ./components/Common/Feedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Feedbackvue_type_script_lang_js_ = (Feedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/Feedback.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Feedbackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7dfc8583"
  
)

/* harmony default export */ var Feedback = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-feedback.js.map
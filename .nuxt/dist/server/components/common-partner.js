exports.ids = [44];
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

/***/ })

};;
//# sourceMappingURL=common-partner.js.map
exports.ids = [53];
exports.modules = {

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GlossaryFolder/GlossaryDetails.vue?vue&type=template&id=4d73b9b6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-details-area ptb-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 col-md-12\"><div class=\"blog-details-desc\"><div class=\"article-content\"><h4>" + _vm._ssrEscape(_vm._s(_vm.details[0].attributes.title)) + "</h4> <span>" + _vm._s(_vm.details[0].attributes.longDesc) + "</span></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GlossaryFolder/GlossaryDetails.vue?vue&type=template&id=4d73b9b6&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GlossaryFolder/GlossaryDetails.vue?vue&type=script&lang=js&

/* harmony default export */ var GlossaryDetailsvue_type_script_lang_js_ = ({
  name: 'BlogDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      categories: [],
      glossaries: []
    };
  },
  created: async function () {
    external_axios_default.a.get('https://cms.dealdox.io/api/glossary-categories').then(response => {
      this.categories = response.data.data;
      // console.log("categories....", this.categories)
    }).catch(error => {
      console.error(error);
    });
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/glossaries?populate=*');
    this.glossaries = response.data.data;
  }
});
// CONCATENATED MODULE: ./components/GlossaryFolder/GlossaryDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var GlossaryFolder_GlossaryDetailsvue_type_script_lang_js_ = (GlossaryDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/GlossaryFolder/GlossaryDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  GlossaryFolder_GlossaryDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6cc9f212"
  
)

/* harmony default export */ var GlossaryDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=glossary-details.js.map
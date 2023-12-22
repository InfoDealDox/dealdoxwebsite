exports.ids = [59];
exports.modules = {

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GlossaryFolder/GlossaryPage.vue?vue&type=template&id=a5ba9eba&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-area ptb-100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"pagination-area\">", "</div>", [_vm._ssrNode("<div class=\"nav-links\">", "</div>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<ul>", "</ul>", [_c('NuxtLink', {
      staticClass: "page-numbers",
      attrs: {
        "to": `/glossary-category-details/${category.attributes.slug}`
      }
    }, [_vm._v(_vm._s(category.attributes.name))])], 1);
  }), 0)]), _vm._ssrNode(" <div class=\"section-title\"></div> "), _vm.glossaries !== [] ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(_vm.groupby, function (glossary) {
    return _vm._ssrNode("<div class=\"col-lg-12 col-md-12\">", "</div>", [_vm._ssrNode("<h3 class=\"glossary-category ml-5\">" + _vm._ssrEscape(" " + _vm._s(glossary.value) + " ") + "</h3> "), _vm._ssrNode("<div class=\"single-blog-post bg-FAFAFA pt-1\">", "</div>", [_vm._ssrNode("<div class=\"row contents\">", "</div>", _vm._l(glossary.data, function (glossData) {
      return _vm._ssrNode("<div class=\"col-sm-3\">", "</div>", [_c('NuxtLink', {
        staticClass: "text-decoration-underline",
        attrs: {
          "to": '/glossary/' + glossData.attributes.slug
        }
      }, [_vm._v("\n                                " + _vm._s(glossData.attributes.title) + "\n                            ")])], 1);
    }), 0)])], 2);
  }), 0) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GlossaryFolder/GlossaryPage.vue?vue&type=template&id=a5ba9eba&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GlossaryFolder/GlossaryPage.vue?vue&type=script&lang=js&

/* harmony default export */ var GlossaryPagevue_type_script_lang_js_ = ({
  name: 'BlogDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      categories: [],
      glossaries: [],
      groupby: {}
    };
  },
  created: async function () {
    var _response1$data;
    const response1 = await external_axios_default.a.get('https://cms.dealdox.io/api/glossary-categories');
    const sortCat = response1 === null || response1 === void 0 ? void 0 : (_response1$data = response1.data) === null || _response1$data === void 0 ? void 0 : _response1$data.data.sort((a, b) => a.id - b.id);
    this.categories = sortCat;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/glossaries?populate=*');
    this.glossaries = response.data.data;
    let groupby = {};
    this.categories.map(x => {
      const r = this.glossaries.filter(v => v.attributes.glossary_categories.data.map(e => e.id).includes(x.id));
      groupby = {
        ...groupby,
        [x.attributes.name]: r
      };
    });
    const dd = [];
    Object.keys(groupby).map(key => {
      dd.push({
        value: key,
        data: groupby[key]
      });
    });
    this.groupby = dd;
    console.log(this.groupby, 'groupby');
  }
});
// CONCATENATED MODULE: ./components/GlossaryFolder/GlossaryPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var GlossaryFolder_GlossaryPagevue_type_script_lang_js_ = (GlossaryPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/GlossaryFolder/GlossaryPage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  GlossaryFolder_GlossaryPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "11efb331"
  
)

/* harmony default export */ var GlossaryPage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=glossary-page.js.map
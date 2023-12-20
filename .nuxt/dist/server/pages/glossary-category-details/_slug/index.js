exports.ids = [134,30];
exports.modules = {

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/categories/glossary-categories-details.vue?vue&type=template&id=49a49b32&
var render = function render() {
  var _vm$details$0$attribu, _vm$details$0$attribu2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-area ptb-100 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title\"><h2>Glossary Featured Categories</h2></div> "), _vm.details !== [] ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l((_vm$details$0$attribu = _vm.details[0].attributes) === null || _vm$details$0$attribu === void 0 ? void 0 : (_vm$details$0$attribu2 = _vm$details$0$attribu.glossaries) === null || _vm$details$0$attribu2 === void 0 ? void 0 : _vm$details$0$attribu2.data, function (glossary) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"single-blog-post bg-white\">", "</div>", [_vm._ssrNode("<div class=\"image\"></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
      attrs: {
        "to": '/glossary/' + glossary.attributes.slug
      }
    }, [_vm._v("\n                                " + _vm._s(glossary.attributes.title) + "\n                            ")])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape(_vm._s(glossary.attributes.shortDesc)) + "</p> <ul class=\"meta\"></ul>")], 2)], 2)]);
  }), 0) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/categories/glossary-categories-details.vue?vue&type=template&id=49a49b32&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/categories/glossary-categories-details.vue?vue&type=script&lang=js&

/* harmony default export */ var glossary_categories_detailsvue_type_script_lang_js_ = ({
  name: 'CategoryDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      glossarycategory: []
    };
  }
});
// CONCATENATED MODULE: ./components/categories/glossary-categories-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_glossary_categories_detailsvue_type_script_lang_js_ = (glossary_categories_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/categories/glossary-categories-details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categories_glossary_categories_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "04fa3148"
  
)

/* harmony default export */ var glossary_categories_details = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/glossary-category-details/_slug/index.vue?vue&type=template&id=a68f9f40&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" <div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12 col-md-12\"><div class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(13)) + " alt=\"image\"></div></div></div></div> "), _vm.successcategory !== null ? _vm._ssrNode("<div>", "</div>", [_c('CategoryDetails', {
    attrs: {
      "detailsContent": _vm.successcategory
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/glossary-category-details/_slug/index.vue?vue&type=template&id=a68f9f40&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/categories/glossary-categories-details.vue + 4 modules
var glossary_categories_details = __webpack_require__(309);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/glossary-category-details/_slug/index.vue?vue&type=script&lang=js&

// import PageTitle from '../../../components/Common/PageTitle';



/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    // PageTitle,
    CategoryDetails: glossary_categories_details["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      successcategory: null
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const {
          slug
        } = this.$route.params;
        const reaponse = await external_axios_default.a.get(`https://cms.dealdox.io/api/glossary-categories?filters[slug][$eq]=${slug}&populate=deep,5`, {
          params: {
            slug
          }
        });
        this.successcategory = reaponse.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/glossary-category-details/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var glossary_category_details_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/glossary-category-details/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  glossary_category_details_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39c0c078"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
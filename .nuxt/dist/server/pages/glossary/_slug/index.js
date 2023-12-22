exports.ids = [131,53];
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

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/glossary/_slug/index.vue?vue&type=template&id=ce21fcf2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" <div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12 col-md-12\"><div class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(13)) + " alt=\"image\"></div></div></div></div> "), _vm.details !== null ? _vm._ssrNode("<div>", "</div>", [_c('GlossaryDetails', {
    attrs: {
      "detailsContent": _vm.details
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/glossary/_slug/index.vue?vue&type=template&id=ce21fcf2&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/GlossaryFolder/GlossaryDetails.vue + 4 modules
var GlossaryDetails = __webpack_require__(240);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/glossary/_slug/index.vue?vue&type=script&lang=js&

// import PageTitle from '../../../components/Common/PageTitle';



/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    // PageTitle,
    GlossaryDetails: GlossaryDetails["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      details: null,
      seoData: null
    };
  },
  created: async function () {
    var _pageData$attributes;
    const {
      slug
    } = this.$route.params;
    const reaponse = await external_axios_default.a.get(`https://cms.dealdox.io/api/glossaries?filters[slug][$eq]=${slug}&populate=*`, {
      params: {
        slug
      }
    });
    this.details = reaponse.data.data;
    const pageData = this.details.length > 0 ? this.details[0] : {};
    if (pageData !== null && pageData !== void 0 && (_pageData$attributes = pageData.attributes) !== null && _pageData$attributes !== void 0 && _pageData$attributes.seo) {
      this.seoData = pageData.attributes.seo;
    }
  },
  head({
    $seo
  }) {
    var _this$seoData, _this$seoData2, _this$seoData3;
    return $seo({
      title: (_this$seoData = this.seoData) === null || _this$seoData === void 0 ? void 0 : _this$seoData.metaTitle,
      description: (_this$seoData2 = this.seoData) === null || _this$seoData2 === void 0 ? void 0 : _this$seoData2.metaDescription,
      keywords: (_this$seoData3 = this.seoData) === null || _this$seoData3 === void 0 ? void 0 : _this$seoData3.keywords
    });
  }
});
// CONCATENATED MODULE: ./pages/glossary/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var glossary_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/glossary/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  glossary_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "784b3d66"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GlossaryDetails: __webpack_require__(240).default})


/***/ })

};;
//# sourceMappingURL=index.js.map
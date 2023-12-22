exports.ids = [129,34,55];
exports.modules = {

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shape4.a5ecfff.png";

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/onboarding-assistance.230686e.png";

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/AutomatedQuotes.vue?vue&type=template&id=ed650740&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "app-download-area pt-70"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"app-download-inner\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"section-title-home tb-30\"><h4>Enjoy DealDox At Zero Cost! Including:</h4></div> <div class=\"col-lg-6 col-md-12\"><div data-aos=\"fade-up\" class=\"app-download-images\"><img" + _vm._ssrAttr("src", __webpack_require__(131)) + " alt=\"app-img\"></div></div> "), _vm._ssrNode("<div class=\"col-lg-6 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"app-download-content\">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<ul class=\"features-list\"><li><div class=\"icon-home\"><i class=\"ri-check-line\"></i></div> <h4>Onboarding Assistance</h4></li> <li><div class=\"icon-home\"><i class=\"ri-check-line\"></i></div> <h4>Comprehensive Implementation</h4></li> <li><div class=\"icon-home\"><i class=\"ri-check-line\"></i></div> <h4>Adaptations to meet your needs and so much more</h4></li> <li><div class=\"features-content-home\"><p>Don't miss added perks here</p></div></li></ul> "), _vm._ssrNode("<div class=\"btn-box\">", "</div>", [_c('NuxtLink', {
    staticClass: "default-btn-home",
    attrs: {
      "to": "/sign-up-free-trial"
    }
  }, [_vm._v("Start My Free Trial")])], 1)], 2)])])], 2), _vm._ssrNode(" <div class=\"shape5\"><img" + _vm._ssrAttr("src", __webpack_require__(128)) + " alt=\"shape4\"></div> <div class=\"lines\"><div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/AutomatedQuotes.vue?vue&type=template&id=ed650740&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/AutomatedQuotes.vue?vue&type=script&lang=js&
/* harmony default export */ var AutomatedQuotesvue_type_script_lang_js_ = ({
  name: 'AppDownload'
});
// CONCATENATED MODULE: ./components/Common/AutomatedQuotes.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_AutomatedQuotesvue_type_script_lang_js_ = (AutomatedQuotesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/AutomatedQuotes.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_AutomatedQuotesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b8b61b9"
  
)

/* harmony default export */ var AutomatedQuotes = __webpack_exports__["default"] = (component.exports);

/***/ }),

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
  "462800ac"
  
)

/* harmony default export */ var GlossaryPage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/glossaries.vue?vue&type=template&id=c3327886&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" <div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12 col-md-12\"><div class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(13)) + " alt=\"image\"></div></div></div></div> "), _c('GlossaryPage'), _vm._ssrNode(" "), _c('AutomatedQuotes'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/glossaries.vue?vue&type=template&id=c3327886&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/GlossaryFolder/GlossaryPage.vue + 4 modules
var GlossaryPage = __webpack_require__(237);

// EXTERNAL MODULE: ./components/Common/AutomatedQuotes.vue + 4 modules
var AutomatedQuotes = __webpack_require__(146);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/glossaries.vue?vue&type=script&lang=js&

// import PageTitle from '../components/GlossaryFolder/PageTitle';




/* harmony default export */ var glossariesvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    // PageTitle,
    GlossaryPage: GlossaryPage["default"],
    AutomatedQuotes: AutomatedQuotes["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=glossaries&populate=deep,5');
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
// CONCATENATED MODULE: ./pages/glossaries.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_glossariesvue_type_script_lang_js_ = (glossariesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/glossaries.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_glossariesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5822f207"
  
)

/* harmony default export */ var glossaries = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GlossaryPage: __webpack_require__(237).default})


/***/ })

};;
//# sourceMappingURL=glossaries.js.map
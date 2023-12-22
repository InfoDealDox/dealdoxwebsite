exports.ids = [125,34,49];
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

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EbookFolder/EbookMain.vue?vue&type=template&id=3e39e350&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-area ptb-100 bg-LatestBlog"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-left\"><div class=\"col-lg-12 col-md-6\"><div class=\"section-title\"><h1>Ebook</h1></div></div></div> "), _vm.ebooks !== [] ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._l(_vm.ebooks.slice((_vm.currentPage - 1) * _vm.perPage, _vm.currentPage * _vm.perPage), function (ebook) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"single-blog-post bg-F9F9FD\">", "</div>", [_vm._ssrNode("<div class=\"image\">", "</div>", [_c('NuxtLink', {
      staticClass: "d-block",
      attrs: {
        "to": '/ebook/' + ebook.attributes.slug
      }
    }, [_c('img', {
      attrs: {
        "src": ebook.attributes.image.data.attributes.url,
        "alt": "blog"
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
      attrs: {
        "to": '/ebook/' + ebook.attributes.slug
      }
    }, [_vm._v("\n                                " + _vm._s(ebook.attributes.name) + "\n                            ")])], 1), _vm._ssrNode(" <ul class=\"meta\"><li><i class=\"ri-time-line\"></i>" + _vm._ssrEscape(" " + _vm._s(ebook.attributes.date)) + "</li></ul>")], 2)], 2)]);
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-12 col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"pagination-area\">", "</div>", [_c('b-pagination', {
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      "aria-controls": "itemList",
      "align": "center"
    },
    model: {
      value: _vm.currentPage,
      callback: function ($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)])], 2) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/EbookFolder/EbookMain.vue?vue&type=template&id=3e39e350&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EbookFolder/EbookMain.vue?vue&type=script&lang=js&

/* harmony default export */ var EbookMainvue_type_script_lang_js_ = ({
  name: 'Ebook',
  data() {
    return {
      ebooks: [],
      rows: 0,
      currentPage: 1,
      perPage: 9
    };
  },
  created: async function () {
    var _this$blogs;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/ebooks?populate=*');
    this.ebooks = response.data.data;
    this.rows = (_this$blogs = this.blogs) === null || _this$blogs === void 0 ? void 0 : _this$blogs.length;
  }
});
// CONCATENATED MODULE: ./components/EbookFolder/EbookMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var EbookFolder_EbookMainvue_type_script_lang_js_ = (EbookMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/EbookFolder/EbookMain.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  EbookFolder_EbookMainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fe443558"
  
)

/* harmony default export */ var EbookMain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ebooks.vue?vue&type=template&id=8504ab0c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" <div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12 col-md-12\"><div class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(15)) + " alt=\"image\"></div></div></div></div> "), _c('EbookMain'), _vm._ssrNode(" "), _c('AutomatedQuotes'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ebooks.vue?vue&type=template&id=8504ab0c&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/EbookFolder/EbookMain.vue + 4 modules
var EbookMain = __webpack_require__(236);

// EXTERNAL MODULE: ./components/Common/AutomatedQuotes.vue + 4 modules
var AutomatedQuotes = __webpack_require__(146);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ebooks.vue?vue&type=script&lang=js&

// import PageTitle from '../components/Common/PageTitle';




/* harmony default export */ var ebooksvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    // PageTitle,
    EbookMain: EbookMain["default"],
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
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=ebooks&populate=deep,5');
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
// CONCATENATED MODULE: ./pages/ebooks.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ebooksvue_type_script_lang_js_ = (ebooksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/ebooks.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ebooksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fcc955a0"
  
)

/* harmony default export */ var ebooks = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {EbookMain: __webpack_require__(236).default})


/***/ })

};;
//# sourceMappingURL=ebooks.js.map
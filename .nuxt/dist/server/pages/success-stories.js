exports.ids = [149,45,106];
exports.modules = {

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shape9.09ec238.png";

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/PageTitle.vue?vue&type=template&id=7203a094&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-title-area"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"page-title-content\"><h2>" + _vm._ssrEscape(_vm._s(_vm.pageTitle)) + "</h2></div></div> <div class=\"divider\"></div> <div class=\"lines\"><div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div> <div class=\"line\"></div></div> <div class=\"banner-shape1\"><img" + _vm._ssrAttr("src", __webpack_require__(127)) + " alt=\"image\"></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/PageTitle.vue?vue&type=template&id=7203a094&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/PageTitle.vue?vue&type=script&lang=js&
/* harmony default export */ var PageTitlevue_type_script_lang_js_ = ({
  name: 'PageTitle',
  props: ['pageTitle']
});
// CONCATENATED MODULE: ./components/Common/PageTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_PageTitlevue_type_script_lang_js_ = (PageTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/PageTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_PageTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "21985cd4"
  
)

/* harmony default export */ var PageTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/success-stories/SuccessStories.vue?vue&type=template&id=7fc8f49e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-area ptb-100 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-left\"><div class=\"col-lg-4 col-md-6\"><div class=\"section-title\"><h2>Success Stories</h2></div></div> <div class=\"col-lg-8 col-md-6\"><div id=\"secondary\" class=\"widget-area\"></div></div></div> "), _vm.successstories !== [] ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", [_vm._l(_vm.successstories, function (successstory) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"single-blog-post\">", "</div>", [_vm._ssrNode("<div class=\"image\">", "</div>", [_c('NuxtLink', {
      staticClass: "d-block",
      attrs: {
        "to": '/success-story/' + successstory.attributes.slug
      }
    }, [_c('img', {
      attrs: {
        "src": successstory.attributes.image.data.attributes.url,
        "alt": "blog"
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
      attrs: {
        "to": '/success-story/' + successstory.attributes.slug
      }
    }, [_vm._v("\n                                " + _vm._s(successstory.attributes.title) + "\n                            ")])], 1)])], 2)]);
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

// CONCATENATED MODULE: ./components/success-stories/SuccessStories.vue?vue&type=template&id=7fc8f49e&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/success-stories/SuccessStories.vue?vue&type=script&lang=js&

/* harmony default export */ var SuccessStoriesvue_type_script_lang_js_ = ({
  name: 'successstories',
  data() {
    return {
      successstories: [],
      rows: 0,
      currentPage: 1,
      perPage: 9
    };
  },
  created: async function () {
    var _this$successstories;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/successstories?populate=*');
    this.successstories = response.data.data;
    this.rows = (_this$successstories = this.successstories) === null || _this$successstories === void 0 ? void 0 : _this$successstories.length;
  }
});
// CONCATENATED MODULE: ./components/success-stories/SuccessStories.vue?vue&type=script&lang=js&
 /* harmony default export */ var success_stories_SuccessStoriesvue_type_script_lang_js_ = (SuccessStoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/success-stories/SuccessStories.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  success_stories_SuccessStoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c4b2a9f"
  
)

/* harmony default export */ var SuccessStories = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success-stories.vue?vue&type=template&id=09610834&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" <div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12 col-md-12\"><div class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", __webpack_require__(16)) + " alt=\"image\"></div></div></div></div> "), _c('SuccessStories'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/success-stories.vue?vue&type=template&id=09610834&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Common/PageTitle.vue + 4 modules
var PageTitle = __webpack_require__(129);

// EXTERNAL MODULE: ./components/success-stories/SuccessStories.vue + 4 modules
var SuccessStories = __webpack_require__(157);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success-stories.vue?vue&type=script&lang=js&


// import SuccesStoryBanner from '../components/success-stories/SuccesStoryBanner'

// import AutomatedQuotes from '../components/Common/AutomatedQuotes';
// import Blog from '../components/Common/Blog';
// import GetInTouch from '../components/Common/GetInTouch';


/* harmony default export */ var success_storiesvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    PageTitle: PageTitle["default"],
    // SuccesStoryBanner,
    SuccessStories: SuccessStories["default"],
    // AutomatedQuotes,
    // Blog,
    // GetInTouch,
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=success-stories&populate=deep,5');
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
// CONCATENATED MODULE: ./pages/success-stories.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_success_storiesvue_type_script_lang_js_ = (success_storiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/success-stories.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_success_storiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2bdfdde7"
  
)

/* harmony default export */ var success_stories = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SuccessStories: __webpack_require__(157).default})


/***/ })

};;
//# sourceMappingURL=success-stories.js.map
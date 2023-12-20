exports.ids = [150,31,45];
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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/categories/success-story-categories-details.vue?vue&type=template&id=552388a2&
var render = function render() {
  var _vm$details$0$attribu, _vm$details$0$attribu2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-area ptb-100 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title\"><h2>Success Story Featured Categories</h2></div> "), _vm.details !== [] ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l((_vm$details$0$attribu = _vm.details[0].attributes) === null || _vm$details$0$attribu === void 0 ? void 0 : (_vm$details$0$attribu2 = _vm$details$0$attribu.success_stories) === null || _vm$details$0$attribu2 === void 0 ? void 0 : _vm$details$0$attribu2.data, function (successstory) {
    var _successstory$attribu, _successstory$attribu2, _successstory$attribu3, _successstory$attribu4;
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"single-blog-post bg-white\">", "</div>", [_vm._ssrNode("<div class=\"image\">", "</div>", [_c('NuxtLink', {
      staticClass: "d-block",
      attrs: {
        "to": '/success-stories/' + successstory.attributes.slug
      }
    }, [_c('img', {
      attrs: {
        "src": successstory === null || successstory === void 0 ? void 0 : (_successstory$attribu = successstory.attributes) === null || _successstory$attribu === void 0 ? void 0 : (_successstory$attribu2 = _successstory$attribu.image) === null || _successstory$attribu2 === void 0 ? void 0 : (_successstory$attribu3 = _successstory$attribu2.data) === null || _successstory$attribu3 === void 0 ? void 0 : (_successstory$attribu4 = _successstory$attribu3.attributes) === null || _successstory$attribu4 === void 0 ? void 0 : _successstory$attribu4.url,
        "alt": "blog"
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
      attrs: {
        "to": '/success-stories/' + successstory.attributes.slug
      }
    }, [_vm._v("\n                                " + _vm._s(successstory.attributes.title) + "\n                            ")])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape(_vm._s(successstory.attributes.shortDesc)) + "</p> <ul class=\"meta\"></ul>")], 2)], 2)]);
  }), 0) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/categories/success-story-categories-details.vue?vue&type=template&id=552388a2&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/categories/success-story-categories-details.vue?vue&type=script&lang=js&

/* harmony default export */ var success_story_categories_detailsvue_type_script_lang_js_ = ({
  name: 'CategoryDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      successstories: []
    };
  }
});
// CONCATENATED MODULE: ./components/categories/success-story-categories-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_success_story_categories_detailsvue_type_script_lang_js_ = (success_story_categories_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/categories/success-story-categories-details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categories_success_story_categories_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "198c7867"
  
)

/* harmony default export */ var success_story_categories_details = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success-stories-category-details/_slug/index.vue?vue&type=template&id=49fee608&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('PageTitle', {
    attrs: {
      "pageTitle": "Success Story Category",
      "pageDesc": ""
    }
  }), _vm._ssrNode(" "), _vm.successcategory !== null ? _vm._ssrNode("<div>", "</div>", [_c('CategoryDetails', {
    attrs: {
      "detailsContent": _vm.successcategory
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/success-stories-category-details/_slug/index.vue?vue&type=template&id=49fee608&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Common/PageTitle.vue + 4 modules
var PageTitle = __webpack_require__(129);

// EXTERNAL MODULE: ./components/categories/success-story-categories-details.vue + 4 modules
var success_story_categories_details = __webpack_require__(310);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success-stories-category-details/_slug/index.vue?vue&type=script&lang=js&





/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    PageTitle: PageTitle["default"],
    CategoryDetails: success_story_categories_details["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      successcategory: null
    };
  },
  mounted() {
    this.fetchCategories();
    console.log("I am don");
  },
  methods: {
    async fetchCategories() {
      try {
        const {
          slug
        } = this.$route.params;
        const reaponse = await external_axios_default.a.get(`https://cms.dealdox.io/api/successcategories?filters[slug][$eq]=${slug}&populate=deep,5`, {
          params: {
            slug
          }
        });
        this.successcategory = reaponse.data.data;
        console.log("this.successcategories....", this.successcategory);
      } catch (error) {
        console.error(error);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/success-stories-category-details/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var success_stories_category_details_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/success-stories-category-details/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  success_stories_category_details_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35702b26"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
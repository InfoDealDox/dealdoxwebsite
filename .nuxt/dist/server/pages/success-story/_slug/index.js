exports.ids = [147,35,40,44,102,103];
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

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Blog.vue?vue&type=template&id=1cf293d9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-area pt-70 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title\"><span class=\"sub-title\"></span> <h1>Our Latest Blogs</h1></div> "), _vm.blogs !== [] ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l(_vm.blogs.slice(0, 3), function (blog) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"single-blog-post bg-white\">", "</div>", [_vm._ssrNode("<div class=\"image\">", "</div>", [_c('NuxtLink', {
      staticClass: "d-block",
      attrs: {
        "to": '/blog/' + blog.attributes.slug
      }
    }, [_c('img', {
      attrs: {
        "src": blog.attributes.image.data.attributes.url,
        "alt": "blog"
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c('NuxtLink', {
      attrs: {
        "to": '/blog/' + blog.attributes.slug
      }
    }, [_vm._v("\n                                " + _vm._s(blog.attributes.title) + "\n                            ")])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape(_vm._s(blog.attributes.shortDesc)) + "</p> <ul class=\"meta\"><li><i class=\"ri-time-line\"></i>" + _vm._ssrEscape(" " + _vm._s(blog.attributes.date)) + "</li></ul>")], 2)], 2)]);
  }), 0) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/Blog.vue?vue&type=template&id=1cf293d9&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Blog.vue?vue&type=script&lang=js&

/* harmony default export */ var Blogvue_type_script_lang_js_ = ({
  name: 'Blog',
  data() {
    return {
      blogs: []
    };
  },
  created: async function () {
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/blogs?populate=*');
    this.blogs = response.data.data;
  }
});
// CONCATENATED MODULE: ./components/Common/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Blogvue_type_script_lang_js_ = (Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/Blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a62753c0"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

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
  "22925f86"
  
)

/* harmony default export */ var SuccessStories = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/GetInTouch.vue?vue&type=template&id=bd8a52e6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/GetInTouch.vue?vue&type=template&id=bd8a52e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/GetInTouch.vue?vue&type=script&lang=js&
/* harmony default export */ var GetInTouchvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Common/GetInTouch.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_GetInTouchvue_type_script_lang_js_ = (GetInTouchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/GetInTouch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_GetInTouchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71af043c"
  
)

/* harmony default export */ var GetInTouch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/success-stories/SuccessStoriesDetails.vue?vue&type=template&id=6edabd62&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-app-main-banner-wrap-area bg-white"
  }, [_vm._ssrNode("<div class=\"container pt-100\"><div class=\"row align-items-center\"><div class=\"col-lg-6 col-md-12\"><div class=\"new-app-main-banner-wrap-content heading-title\"><h1>" + _vm._ssrEscape(_vm._s(_vm.details[0].attributes.title)) + "</h1> <p>" + _vm._ssrEscape(" " + _vm._s(_vm.details[0].attributes.shortDesc)) + "</p></div></div> <div class=\"col-lg-6 col-md-12\"><div data-aos=\"fade-left\" data-aos-duration=\"2000\" class=\"new-app-main-banner-wrap-image\"><img" + _vm._ssrAttr("src", _vm.details[0].attributes.image.data.attributes.url) + " alt=\"image\"></div></div></div></div> <div class=\"blog-details-area ptb-100\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 col-md-12\"><div class=\"blog-details-desc\"><div class=\"article-image\"></div> <div class=\"article-content\"><h4>" + _vm._ssrEscape(_vm._s(_vm.details[0].attributes.title)) + "</h4> <span>" + _vm._s(_vm.details[0].attributes.longDesc) + "</span></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/success-stories/SuccessStoriesDetails.vue?vue&type=template&id=6edabd62&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/success-stories/SuccessStoriesDetails.vue?vue&type=script&lang=js&

/* harmony default export */ var SuccessStoriesDetailsvue_type_script_lang_js_ = ({
  name: 'BlogDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      successcategories: [],
      successstories: []
    };
  },
  created: async function () {
    external_axios_default.a.get('https://cms.dealdox.io/api/successcategories').then(response => {
      this.successcategories = response.data.data;
    }).catch(error => {
      console.error(error);
    });
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/successstories?populate=*');
    this.successstories = response.data.data;
  }
});
// CONCATENATED MODULE: ./components/success-stories/SuccessStoriesDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var success_stories_SuccessStoriesDetailsvue_type_script_lang_js_ = (SuccessStoriesDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/success-stories/SuccessStoriesDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  success_stories_SuccessStoriesDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "165631e8"
  
)

/* harmony default export */ var SuccessStoriesDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success-story/_slug/index.vue?vue&type=template&id=80c27900&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _vm.details !== null ? _vm._ssrNode("<div>", "</div>", [_c('SuccessStories', {
    attrs: {
      "detailsContent": _vm.details
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('Partner'), _vm._ssrNode(" "), _c('Blog'), _vm._ssrNode(" "), _c('GetInTouch'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/success-story/_slug/index.vue?vue&type=template&id=80c27900&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/success-stories/SuccessStoriesDetails.vue + 4 modules
var SuccessStoriesDetails = __webpack_require__(308);

// EXTERNAL MODULE: ./components/Common/Partner.vue + 4 modules
var Partner = __webpack_require__(132);

// EXTERNAL MODULE: ./components/Common/Blog.vue + 4 modules
var Blog = __webpack_require__(133);

// EXTERNAL MODULE: ./components/Common/GetInTouch.vue + 4 modules
var GetInTouch = __webpack_require__(160);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success-story/_slug/index.vue?vue&type=script&lang=js&

// import PageTitle from '../../../components/Common/PageTitle';
// import SuccesStoryBannerPage from '../../../components/success-stories/SuccesStoryBannerPage'






/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    // PageTitle,
    // SuccesStoryBannerPage,
    SuccessStories: SuccessStoriesDetails["default"],
    Partner: Partner["default"],
    Blog: Blog["default"],
    GetInTouch: GetInTouch["default"],
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
    const reaponse = await external_axios_default.a.get(`https://cms.dealdox.io/api/successstories?filters[slug][$eq]=${slug}&populate=*`, {
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
// CONCATENATED MODULE: ./pages/success-story/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var success_story_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/success-story/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  success_story_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e0c86258"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SuccessStories: __webpack_require__(157).default})


/***/ })

};;
//# sourceMappingURL=index.js.map
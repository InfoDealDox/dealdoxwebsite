exports.ids = [130,14,45];
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogs/FeaturedBlogDetails.vue?vue&type=template&id=37442e10&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-details-area ptb-100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 col-md-12\"><div class=\"blog-details-desc\"><div class=\"article-image\"><img" + _vm._ssrAttr("src", _vm.details[0].attributes.image.data.attributes.url) + " alt=\"image\"></div> <div class=\"article-content\"><div class=\"entry-meta\"><ul><li><i class=\"ri-calendar-2-line\"></i>" + _vm._ssrEscape(_vm._s(_vm.details[0].attributes.date)) + "</li></ul></div> <h4>" + _vm._ssrEscape(_vm._s(_vm.details[0].attributes.title)) + "</h4> <span>" + _vm._s(_vm.details[0].attributes.longDesc) + "</span></div> <div class=\"comments-area\"></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-4 col-md-12\">", "</div>", [_vm._ssrNode("<aside class=\"widget-area\">", "</aside>", [_vm._ssrNode("<div class=\"widget widget_jexa_posts_thumb\">", "</div>", [_vm._ssrNode("<h3 class=\"widget-title\">Popular Posts</h3> "), _vm._l(_vm.blogs, function (blog) {
    return _vm._ssrNode("<article class=\"item\">", "</article>", [_c('NuxtLink', {
      staticClass: "thumb",
      attrs: {
        "to": '/blog/' + blog.attributes.slug
      }
    }, [_c('img', {
      attrs: {
        "src": blog.attributes.image.data.attributes.url,
        "alt": "blog"
      }
    })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info\">", "</div>", [_vm._ssrNode("<h4 class=\"title usmall\">", "</h4>", [_c('NuxtLink', {
      attrs: {
        "to": '/blog/' + blog.attributes.slug
      }
    }, [_vm._v("\n                                        " + _vm._s(blog.attributes.title) + "\n                                    ")])], 1), _vm._ssrNode(" <span class=\"date\"><i class=\"ri-calendar-2-fill\"></i>" + _vm._ssrEscape(" " + _vm._s(blog.attributes.date)) + "</span>")], 2)], 2);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"widget widget_categories\">", "</div>", [_vm._ssrNode("<h3 class=\"widget-title\">Categories</h3> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
      attrs: {
        "to": `/category-details/${category.attributes.slug}`
      }
    }, [_vm._v(_vm._s(category.attributes.name))])], 1);
  }), 0)], 2)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blogs/FeaturedBlogDetails.vue?vue&type=template&id=37442e10&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogs/FeaturedBlogDetails.vue?vue&type=script&lang=js&

/* harmony default export */ var FeaturedBlogDetailsvue_type_script_lang_js_ = ({
  name: 'BlogDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      categories: [],
      blogs: []
    };
  },
  created: async function () {
    external_axios_default.a.get('https://cms.dealdox.io/api/blog-categories').then(response => {
      this.categories = response.data.data;
      // console.log("categories....", this.categories)
    }).catch(error => {
      console.error(error);
    });
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/blogs?populate=*');
    this.blogs = response.data.data;
  }
});
// CONCATENATED MODULE: ./components/blogs/FeaturedBlogDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var blogs_FeaturedBlogDetailsvue_type_script_lang_js_ = (FeaturedBlogDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/blogs/FeaturedBlogDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blogs_FeaturedBlogDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "765fc50a"
  
)

/* harmony default export */ var FeaturedBlogDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/featured-blog-details/_slug/index.vue?vue&type=template&id=263fbfc2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('PageTitle', {
    staticClass: "page-title-style-two",
    attrs: {
      "pageTitle": "",
      "pageDesc": ""
    }
  }), _vm._ssrNode(" "), _vm.details !== null ? _vm._ssrNode("<div>", "</div>", [_c('FeaturedBlogDetails', {
    attrs: {
      "detailsContent": _vm.details
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/featured-blog-details/_slug/index.vue?vue&type=template&id=263fbfc2&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Common/PageTitle.vue + 4 modules
var PageTitle = __webpack_require__(129);

// EXTERNAL MODULE: ./components/blogs/FeaturedBlogDetails.vue + 4 modules
var FeaturedBlogDetails = __webpack_require__(308);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/featured-blog-details/_slug/index.vue?vue&type=script&lang=js&





/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    PageTitle: PageTitle["default"],
    FeaturedBlogDetails: FeaturedBlogDetails["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      details: null
    };
  },
  created: async function () {
    const {
      slug
    } = this.$route.params;
    const reaponse = await external_axios_default.a.get(`https://cms.dealdox.io/api/featuredblogs?filters[slug][$eq]=${slug}&populate=*`, {
      params: {
        slug
      }
    });
    this.details = reaponse.data.data;
  }
});
// CONCATENATED MODULE: ./pages/featured-blog-details/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var featured_blog_details_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/featured-blog-details/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  featured_blog_details_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "847f4e50"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
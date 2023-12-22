exports.ids = [35];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=common-blog.js.map
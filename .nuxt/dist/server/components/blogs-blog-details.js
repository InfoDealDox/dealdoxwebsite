exports.ids = [13];
exports.modules = {

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogs/BlogDetails.vue?vue&type=template&id=7aefae22&
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

// CONCATENATED MODULE: ./components/blogs/BlogDetails.vue?vue&type=template&id=7aefae22&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogs/BlogDetails.vue?vue&type=script&lang=js&

/* harmony default export */ var BlogDetailsvue_type_script_lang_js_ = ({
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
    }).catch(error => {
      console.error(error);
    });
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/blogs?populate=*');
    this.blogs = response.data.data;
  }
});
// CONCATENATED MODULE: ./components/blogs/BlogDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var blogs_BlogDetailsvue_type_script_lang_js_ = (BlogDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/blogs/BlogDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blogs_BlogDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f530c42"
  
)

/* harmony default export */ var BlogDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blogs-blog-details.js.map
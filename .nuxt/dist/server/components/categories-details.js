exports.ids = [28];
exports.modules = {

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/categories/categories-details.vue?vue&type=template&id=38744295&
var render = function render() {
  var _vm$details$0$attribu, _vm$details$0$attribu2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "blog-area ptb-100 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"section-title\"><h2>Blogs Featured Categories</h2></div> "), _vm.details !== [] ? _vm._ssrNode("<div class=\"row justify-content-center\">", "</div>", _vm._l((_vm$details$0$attribu = _vm.details[0].attributes) === null || _vm$details$0$attribu === void 0 ? void 0 : (_vm$details$0$attribu2 = _vm$details$0$attribu.blogs) === null || _vm$details$0$attribu2 === void 0 ? void 0 : _vm$details$0$attribu2.data, function (blog) {
    var _blog$attributes, _blog$attributes$imag, _blog$attributes$imag2, _blog$attributes$imag3;
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"single-blog-post bg-white\">", "</div>", [_vm._ssrNode("<div class=\"image\">", "</div>", [_c('NuxtLink', {
      staticClass: "d-block",
      attrs: {
        "to": '/blog/' + blog.attributes.slug
      }
    }, [_c('img', {
      attrs: {
        "src": blog === null || blog === void 0 ? void 0 : (_blog$attributes = blog.attributes) === null || _blog$attributes === void 0 ? void 0 : (_blog$attributes$imag = _blog$attributes.image) === null || _blog$attributes$imag === void 0 ? void 0 : (_blog$attributes$imag2 = _blog$attributes$imag.data) === null || _blog$attributes$imag2 === void 0 ? void 0 : (_blog$attributes$imag3 = _blog$attributes$imag2.attributes) === null || _blog$attributes$imag3 === void 0 ? void 0 : _blog$attributes$imag3.url,
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

// CONCATENATED MODULE: ./components/categories/categories-details.vue?vue&type=template&id=38744295&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/categories/categories-details.vue?vue&type=script&lang=js&

/* harmony default export */ var categories_detailsvue_type_script_lang_js_ = ({
  name: 'CategoryDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      categories: []
    };
  }
});
// CONCATENATED MODULE: ./components/categories/categories-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_categories_detailsvue_type_script_lang_js_ = (categories_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/categories/categories-details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categories_categories_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0735aff6"
  
)

/* harmony default export */ var categories_details = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=categories-details.js.map
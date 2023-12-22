exports.ids = [31];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=categories-success-story-categories-details.js.map
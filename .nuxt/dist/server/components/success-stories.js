exports.ids = [102];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=success-stories.js.map
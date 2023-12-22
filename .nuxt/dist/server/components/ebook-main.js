exports.ids = [53];
exports.modules = {

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
  "61748a1b"
  
)

/* harmony default export */ var EbookMain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ebook-main.js.map
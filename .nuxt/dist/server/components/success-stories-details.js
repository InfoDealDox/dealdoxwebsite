exports.ids = [107];
exports.modules = {

/***/ 311:
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
  "6faf1dd3"
  
)

/* harmony default export */ var SuccessStoriesDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=success-stories-details.js.map
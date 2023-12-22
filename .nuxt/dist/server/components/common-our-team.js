exports.ids = [43];
exports.modules = {

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/OurTeam.vue?vue&type=template&id=271cf3d6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "team-area pt-70 bg-FAFAFA"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"partner-title\"><h1>Meet our Extraordinary Individuals who bring Our Values to Life</h1></div> " + (_vm.teams !== null ? "<div class=\"row justify-content-center\">" + _vm._ssrList(_vm.teams.singleTeam, function (team) {
    return "<div class=\"col-lg-4 col-md-4 col-sm-4\"><div class=\"single-team-member bg-white\"><div class=\"image\"><img" + _vm._ssrAttr("src", team.image.data.attributes.url) + " alt=\"teams\"></div> <div class=\"content\"><h3>" + _vm._ssrEscape(_vm._s(team.title)) + "</h3> <span>" + _vm._ssrEscape(_vm._s(team.designation)) + "</span> <p>" + _vm._ssrEscape(_vm._s(team.shortDesc)) + "</p></div> <ul class=\"social-links bg-white\"><li><a" + _vm._ssrAttr("href", team.linkedin) + " target=\"_blank\"><i class=\"ri-linkedin-fill\"></i></a></li></ul></div></div>";
  }) + "</div>" : "<!---->") + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/OurTeam.vue?vue&type=template&id=271cf3d6&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/OurTeam.vue?vue&type=script&lang=js&

/* harmony default export */ var OurTeamvue_type_script_lang_js_ = ({
  name: 'OurTeam',
  data() {
    return {
      teams: null
    };
  },
  created: async function () {
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/team?populate=deep,5');
    const {
      data: {
        attributes
      }
    } = response.data;
    this.teams = attributes;
  }
});
// CONCATENATED MODULE: ./components/Common/OurTeam.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_OurTeamvue_type_script_lang_js_ = (OurTeamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/OurTeam.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_OurTeamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5c189c54"
  
)

/* harmony default export */ var OurTeam = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-our-team.js.map
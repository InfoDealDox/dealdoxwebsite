exports.ids = [37];
exports.modules = {

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.fd05a61.svg";

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/ComingSoon.vue?vue&type=template&id=7e4feecc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "coming-soon-area"
  }, [_vm._ssrNode("<div class=\"container-fluid p-0\">", "</div>", [_vm._ssrNode("<div class=\"row m-0\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-12 p-0\">", "</div>", [_vm._ssrNode("<div class=\"coming-soon-content\">", "</div>", [_vm._ssrNode("<div class=\"d-table\">", "</div>", [_vm._ssrNode("<div class=\"d-table-cell\">", "</div>", [_c('NuxtLink', {
    staticClass: "logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(129),
      "alt": "image"
    }
  })]), _vm._ssrNode(" <h2>We Are Launching Soon</h2> <div id=\"timer\" class=\"flex-wrap justify-content-center d-flex\"><div id=\"days\" class=\"time align-items-center flex-column d-flex justify-content-center\"><h3>" + _vm._ssrEscape(_vm._s(_vm.days)) + "</h3> <p>Days</p></div> <div id=\"hours\" class=\"time align-items-center flex-column d-flex justify-content-center\"><h3>" + _vm._ssrEscape(_vm._s(_vm.hours)) + "</h3> <p>Hours</p></div> <div id=\"minutes\" class=\"time align-items-center flex-column d-flex justify-content-center\"><h3>" + _vm._ssrEscape(_vm._s(_vm.minutes)) + "</h3> <p>Minutes</p></div> <div id=\"seconds\" class=\"time align-items-center flex-column d-flex justify-content-center\"><h3>" + _vm._ssrEscape(_vm._s(_vm.seconds)) + "</h3> <p>Seconds</p></div></div>")], 2)])])]), _vm._ssrNode(" <div class=\"col-lg-6 col-md-12 p-0\"><div class=\"coming-soon-image\"><img" + _vm._ssrAttr("src", __webpack_require__(14)) + " alt=\"coming-soon\"></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/ComingSoon.vue?vue&type=template&id=7e4feecc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/ComingSoon.vue?vue&type=script&lang=js&
/* harmony default export */ var ComingSoonvue_type_script_lang_js_ = ({
  name: 'ComingSoon',
  data() {
    return {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    };
  },
  created() {
    // Turn data into viewable values
    setInterval(() => {
      this.commingSoonTime();
    }, 1000);
  },
  methods: {
    commingSoonTime() {
      let endTime = new Date("July 1, 2023 10:00:00 PDT");
      let endTimeParse = Date.parse(endTime) / 1000;
      let now = new Date();
      let nowParse = Date.parse(now) / 1000;
      let timeLeft = endTimeParse - nowParse;
      let days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - days * 86400) / 3600);
      let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }
  }
});
// CONCATENATED MODULE: ./components/Common/ComingSoon.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_ComingSoonvue_type_script_lang_js_ = (ComingSoonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/ComingSoon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_ComingSoonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7367109a"
  
)

/* harmony default export */ var ComingSoon = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-coming-soon.js.map
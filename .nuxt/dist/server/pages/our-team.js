exports.ids = [137,1,3,35,39,40,41,44];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Partner.vue?vue&type=template&id=eda3a3ae&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "partner-area pt-70"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"partner-title\">\n            Industry-Preferred CPQ SaaS Solution at Your Fingertips\n        </div> "), _vm._ssrNode("<div class=\"partner-slides\">", "</div>", [_vm.partners !== null ? _c('carousel', {
    attrs: {
      "autoplay": true,
      "loop": true,
      "paginationEnabled": false,
      "perPageCustom": [[0, 3], [576, 3], [768, 3], [1200, 7]]
    }
  }, _vm._l(_vm.partners.partnerSlides, function (slide) {
    return _c('slide', {
      key: slide.id
    }, [_c('div', {
      staticClass: "single-partner-item"
    }, [_c('a', [_c('img', {
      attrs: {
        "src": slide.image.data.attributes.url,
        "alt": "image"
      }
    })])])]);
  }), 1) : _vm._e()], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/Partner.vue?vue&type=template&id=eda3a3ae&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Partner.vue?vue&type=script&lang=js&

/* harmony default export */ var Partnervue_type_script_lang_js_ = ({
  name: 'Partner',
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    partners: null
  }),
  created: async function () {
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/partner?populate=partnerSlides.image');
    const {
      data: {
        attributes
      }
    } = response.data;
    this.partners = attributes;
  }
});
// CONCATENATED MODULE: ./components/Common/Partner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Partnervue_type_script_lang_js_ = (Partnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/Partner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Partnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "079be4ba"
  
)

/* harmony default export */ var Partner = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cpq-integration-banner-icon1.c3f453d.png";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cpq-integration-banner-icon2.2bbd018.png";

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Automated-Oppertunity.3a2dcb8.png";

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/GetInTouch.vue?vue&type=template&id=bd8a52e6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/GetInTouch.vue?vue&type=template&id=bd8a52e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/GetInTouch.vue?vue&type=script&lang=js&
/* harmony default export */ var GetInTouchvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Common/GetInTouch.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_GetInTouchvue_type_script_lang_js_ = (GetInTouchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/GetInTouch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_GetInTouchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71af043c"
  
)

/* harmony default export */ var GetInTouch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/predictiona.595cae9.png";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/synca.694694a.png";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/income.558c9fb.png";

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Dealdoxteampic.49ef469.png";

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutUs/IAQSolutions.vue?vue&type=template&id=01725cd0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "features-area pt-100 bg-white"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title-about\"><h1>Our Values</h1> <p>At our core, we have a team of skilled developers and architects who excel in crafting state-of-the-art\n                    software solutions. With their expertise, we specialize in creating innovative and scalable software\n                    that addresses the distinct requirements of every business. </p></div> <div class=\"row justify-content-center pt-60\"><div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"single-features-item\" style=\"height:290px\"><div class=\"icon\"><img" + _vm._ssrAttr("src", __webpack_require__(134)) + " alt=\"image\"></div> <h5>Trust</h5> <p>Trust is paramount for our team. We prioritize it by fostering honest communication, maintaining\n                            transparency, and consistently fulfilling our commitments to each<br> other.</p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"single-features-item\" style=\"height:290px\"><div class=\"icon\"><img" + _vm._ssrAttr("src", __webpack_require__(135)) + " alt=\"image\"></div> <h5>Collaboration</h5> <p>Open communication and collaboration are the pillars of our team's success. We empower team\n                            members to come together, share ideas, solve problems collectively, and make informed decisions.\n                        </p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"single-features-item\" style=\"height:290px\"><div class=\"icon\"><img" + _vm._ssrAttr("src", __webpack_require__(198)) + " alt=\"image\"></div> <h5>Accountability </h5> <p>By taking ownership of our work and holding ourselves and others accountable for our actions, we\n                            ensure to actively contribute to success and <br> work towards achieving our goals.</p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"single-features-item\" style=\"height:290px\"><div class=\"icon\"><img" + _vm._ssrAttr("src", __webpack_require__(136)) + " alt=\"image\"></div> <h5>Adaptability </h5> <p>We embrace change and vulnerability with an adaptable mentality, enabling us to change our course\n                            and approach faster. We actively look for new opportunities and solutions in the face of\n                            changing circumstances.</p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"single-features-item\" style=\"height:290px\"><div class=\"icon\"><img" + _vm._ssrAttr("src", __webpack_require__(199)) + " alt=\"image\"></div> <h5>Innovation</h5> <p>The motivation of originality and creativity in problem-solving and decision-making is at the\n                            heart of our team's ethos. We think outside the box, sparking innovative thinking and\n                            groundbreaking solutions.</p></div></div> <div class=\"col-xl-4 col-lg-6 col-sm-6 col-md-6\"><div class=\"single-features-item\" style=\"height:290px\"><div class=\"icon\"><img" + _vm._ssrAttr("src", __webpack_require__(200)) + " alt=\"image\"></div> <h5>Excellence </h5> <p>Excellence is our relentless pursuit. We set and maintain high standards, driving each team\n                            member to excel in their role, fostering growth, and achieving exceptional outcomes across all\n                            aspects of our work.</p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AboutUs/IAQSolutions.vue?vue&type=template&id=01725cd0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutUs/IAQSolutions.vue?vue&type=script&lang=js&
/* harmony default export */ var IAQSolutionsvue_type_script_lang_js_ = ({
  name: 'IncludedBestFeatures'
});
// CONCATENATED MODULE: ./components/AboutUs/IAQSolutions.vue?vue&type=script&lang=js&
 /* harmony default export */ var AboutUs_IAQSolutionsvue_type_script_lang_js_ = (IAQSolutionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AboutUs/IAQSolutions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AboutUs_IAQSolutionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "97170f56"
  
)

/* harmony default export */ var IAQSolutions = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 275:
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
  "adc7018a"
  
)

/* harmony default export */ var OurTeam = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Feedback.vue?vue&type=template&id=2a474377&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "feedback-area bg-white pt-100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"feedback-tabs col-lg-12 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"tab-content\">", "</div>", [_vm._ssrNode("<div class=\"tabs__container\">", "</div>", [_vm._ssrNode("<div class=\"tabs__list\">", "</div>", _vm._l(_vm.customerreviews, function (customerreview) {
    return _vm._ssrNode("<div" + _vm._ssrClass("tabs__list-tab", {
      'active': _vm.activeTab == customerreview.id
    }) + ">", "</div>", [_vm._ssrNode("<div class=\"features-content\">", "</div>", [_vm._ssrNode("<h1>What does users say about <span class=\"sub-title\">DealDox</span></h1> <br> <br> "), _c('carousel', {
      attrs: {
        "autoplay": 8000,
        "settings": _vm.settings,
        "loop": true,
        "perPageCustom": [[0, 1], [576, 1], [768, 1], [1200, 1], [1400, 1]],
        "paginationEnabled": false,
        "breakpoints": _vm.breakpoints
      }
    }, _vm._l(_vm.customerreviews.singleFeedbacks, function (customerreview) {
      return _c('slide', {
        key: customerreview.id
      }, [_c('h6', [_vm._v(_vm._s(customerreview.quite))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(customerreview.shortDec))]), _vm._v(" "), _c('h6', [_c('span', [_vm._v(_vm._s(customerreview.name))]), _vm._v("\n                                            " + _vm._s(customerreview.designation) + "\n                                        ")]), _vm._v(" "), _c('div', {
        staticClass: "tabs"
      }, [_c('ul', {
        staticClass: "tabs__header"
      }, [_c('li', {
        staticClass: "tabs__header-item"
      }, [_c('img', {
        attrs: {
          "src": customerreview.media.data.attributes.url,
          "alt": "image"
        }
      })])])])]);
    }), 1)], 2)]);
  }), 0)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common/Feedback.vue?vue&type=template&id=2a474377&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common/Feedback.vue?vue&type=script&lang=js&

/* harmony default export */ var Feedbackvue_type_script_lang_js_ = ({
  name: 'CustomerReview',
  data() {
    return {
      customerreviews: null
    };
  },
  created: async function () {
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/customerreview?populate=singleFeedbacks.media');
    const {
      data: {
        attributes
      }
    } = response.data;
    this.customerreviews = attributes;
  }
});
// CONCATENATED MODULE: ./components/Common/Feedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Feedbackvue_type_script_lang_js_ = (Feedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Common/Feedback.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Feedbackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7dfc8583"
  
)

/* harmony default export */ var Feedback = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutUs/Stats.vue?vue&type=template&id=5eabe1f0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stats-area bg-FAFAFA pt-100"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"section-title pt-60\"><h1>Meet the Stellar Lineup of Professionals on Our Team!</h1> <p>At DealDox, we are a team of trustworthy professionals passionate about <strong>sales process\n                    automation</strong> and assisting businesses to grow.</p></div></div> <div class=\"stats-map text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(201)) + " alt=\"cpq\"></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AboutUs/Stats.vue?vue&type=template&id=5eabe1f0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutUs/Stats.vue?vue&type=script&lang=js&
/* harmony default export */ var Statsvue_type_script_lang_js_ = ({
  name: 'Stats'
});
// CONCATENATED MODULE: ./components/AboutUs/Stats.vue?vue&type=script&lang=js&
 /* harmony default export */ var AboutUs_Statsvue_type_script_lang_js_ = (Statsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AboutUs/Stats.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AboutUs_Statsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a26ace8a"
  
)

/* harmony default export */ var Stats = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/our-team.vue?vue&type=template&id=1c088ce8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    staticClass: "navbar-style-two"
  }), _vm._ssrNode(" "), _c('Stats'), _vm._ssrNode(" "), _c('IAQSolutions'), _vm._ssrNode(" "), _c('OurTeam'), _vm._ssrNode(" "), _c('Feedback'), _vm._ssrNode(" "), _c('Partner'), _vm._ssrNode(" "), _c('Blog'), _vm._ssrNode(" "), _c('GetInTouch'), _vm._ssrNode(" "), _c('DealDoxFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/our-team.vue?vue&type=template&id=1c088ce8&

// EXTERNAL MODULE: ./layouts/Navbar.vue + 4 modules
var Navbar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/AboutUs/IAQSolutions.vue + 4 modules
var IAQSolutions = __webpack_require__(274);

// EXTERNAL MODULE: ./components/Common/OurTeam.vue + 4 modules
var OurTeam = __webpack_require__(275);

// EXTERNAL MODULE: ./components/Common/Feedback.vue + 4 modules
var Feedback = __webpack_require__(276);

// EXTERNAL MODULE: ./components/Common/Partner.vue + 4 modules
var Partner = __webpack_require__(132);

// EXTERNAL MODULE: ./components/Common/Blog.vue + 4 modules
var Blog = __webpack_require__(133);

// EXTERNAL MODULE: ./components/AboutUs/Stats.vue + 4 modules
var Stats = __webpack_require__(277);

// EXTERNAL MODULE: ./components/Common/GetInTouch.vue + 4 modules
var GetInTouch = __webpack_require__(160);

// EXTERNAL MODULE: ./layouts/DealDoxFooter.vue + 4 modules
var DealDoxFooter = __webpack_require__(11);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/our-team.vue?vue&type=script&lang=js&










/* harmony default export */ var our_teamvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["a" /* default */],
    IAQSolutions: IAQSolutions["default"],
    OurTeam: OurTeam["default"],
    Feedback: Feedback["default"],
    Partner: Partner["default"],
    Blog: Blog["default"],
    Stats: Stats["default"],
    GetInTouch: GetInTouch["default"],
    DealDoxFooter: DealDoxFooter["a" /* default */]
  },
  data() {
    return {
      seoData: []
    };
  },
  created: async function () {
    var _response$data$data, _pageData$attributes, _pageData$attributes$;
    const response = await external_axios_default.a.get('https://cms.dealdox.io/api/pages?filters[slug][$eq]=our-team&populate=deep,5');
    const pageData = ((_response$data$data = response.data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.length) > 0 ? response.data.data[0] : {};
    if ((pageData === null || pageData === void 0 ? void 0 : (_pageData$attributes = pageData.attributes) === null || _pageData$attributes === void 0 ? void 0 : (_pageData$attributes$ = _pageData$attributes.seo) === null || _pageData$attributes$ === void 0 ? void 0 : _pageData$attributes$.length) > 0) {
      this.seoData = pageData.attributes.seo[0];
    }
  },
  head({
    $seo
  }) {
    return $seo({
      title: this.seoData.metaTitle,
      description: this.seoData.metaDescription,
      keywords: this.seoData.keywords
      // image: this.post.image || '',
    });
  }
});
// CONCATENATED MODULE: ./pages/our-team.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_our_teamvue_type_script_lang_js_ = (our_teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/our-team.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_our_teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c4102a6e"
  
)

/* harmony default export */ var our_team = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=our-team.js.map
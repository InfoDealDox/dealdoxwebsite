(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{597:function(t,e,n){"use strict";n.r(e);n(25);var r,c=n(34),l=(n(90),n(89)),o=n.n(l),d={name:"CustomerReview",data:function(){return{customerreviews:null}},created:(r=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://cms.dealdox.io/api/customerreview?populate=singleFeedbacks.media");case 2:e=t.sent,n=e.data.data.attributes,this.customerreviews=n;case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},v=d,_=n(36),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"feedback-area bg-white pt-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"feedback-tabs col-lg-12 col-md-6"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tabs__container"},[e("div",{ref:"tabsList",staticClass:"tabs__list"},t._l(t.customerreviews,(function(n){return e("div",{key:n.id,staticClass:"tabs__list-tab",class:{active:t.activeTab==n.id}},[e("div",{staticClass:"features-content"},[t._m(0,!0),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("carousel",{attrs:{autoplay:8e3,settings:t.settings,loop:!0,perPageCustom:[[0,1],[576,1],[768,1],[1200,1],[1400,1]],paginationEnabled:!1,breakpoints:t.breakpoints}},t._l(t.customerreviews.singleFeedbacks,(function(n){return e("slide",{key:n.id},[e("h6",[t._v(t._s(n.quite))]),t._v(" "),e("p",[t._v(t._s(n.shortDec))]),t._v(" "),e("h6",[e("span",[t._v(t._s(n.name))]),t._v("\n                                            "+t._s(n.designation)+"\n                                        ")]),t._v(" "),e("div",{staticClass:"tabs"},[e("ul",{staticClass:"tabs__header"},[e("li",{staticClass:"tabs__header-item"},[e("img",{attrs:{src:n.media.data.attributes.url,alt:"image"}})])])])])})),1)],1)])})),0)])])])])])}),[function(){var t=this,e=t._self._c;return e("h1",[t._v("What does users say about "),e("span",{staticClass:"sub-title"},[t._v("DealDox")])])}],!1,null,null,null);e.default=component.exports}}]);
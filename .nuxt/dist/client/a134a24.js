(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{453:function(t,e,r){"use strict";r.r(e);var n,l=r(34),o=(r(90),r(89)),c=r.n(o),d={name:"Partner",data:function(){return{settings:{itemsToShow:1,snapAlign:"center"},partners:null}},created:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://cms.dealdox.io/api/partner?populate=partnerSlides.image");case 2:e=t.sent,r=e.data.data.attributes,this.partners=r;case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},m=d,f=r(36),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"partner-area pt-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"partner-title"},[t._v("\n            Industry-Preferred CPQ SaaS Solution at Your Fingertips\n        ")]),t._v(" "),e("div",{staticClass:"partner-slides"},[null!==t.partners?e("carousel",{attrs:{autoplay:!0,loop:!0,paginationEnabled:!1,perPageCustom:[[0,3],[576,3],[768,3],[1200,7]]}},t._l(t.partners.partnerSlides,(function(t){return e("slide",{key:t.id},[e("div",{staticClass:"single-partner-item"},[e("a",[e("img",{attrs:{src:t.image.data.attributes.url,alt:"image"}})])])])})),1):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{630:function(t,e,n){"use strict";n.r(e);var c,r=n(34),l=(n(90),n(89)),o=n.n(l),d={name:"BlogDetails",props:["detailsContent"],data:function(){return{details:this.detailsContent,successcategories:[],successstories:[]}},created:(c=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.a.get("https://cms.dealdox.io/api/successcategories").then((function(t){n.successcategories=t.data.data})).catch((function(t){console.error(t)})),t.next=3,o.a.get("https://cms.dealdox.io/api/successstories?populate=*");case 3:e=t.sent,this.successstories=e.data.data;case 5:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},v=d,m=n(36),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-app-main-banner-wrap-area bg-white"},[e("div",{staticClass:"container pt-100"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-6 col-md-12"},[e("div",{staticClass:"new-app-main-banner-wrap-content heading-title"},[e("h1",[t._v(t._s(t.details[0].attributes.title))]),t._v(" "),e("p",[t._v(" "+t._s(t.details[0].attributes.shortDesc))])])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-12"},[e("div",{staticClass:"new-app-main-banner-wrap-image",attrs:{"data-aos":"fade-left","data-aos-duration":"2000"}},[e("img",{attrs:{src:t.details[0].attributes.image.data.attributes.url,alt:"image"}})])])])]),t._v(" "),e("div",{staticClass:"blog-details-area ptb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"blog-details-desc"},[e("div",{staticClass:"article-image"}),t._v(" "),e("div",{staticClass:"article-content"},[e("h4",[t._v(t._s(t.details[0].attributes.title))]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.details[0].attributes.longDesc)}})])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);
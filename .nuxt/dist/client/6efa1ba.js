(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{555:function(t,e,r){"use strict";r.r(e);r(21),r(25);var n,o=r(34),l=(r(90),r(89)),c=r.n(l),d={name:"Ebook",data:function(){return{ebooks:[],rows:0,currentPage:1,perPage:9}},created:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://cms.dealdox.io/api/ebooks?populate=*");case 2:r=t.sent,this.ebooks=r.data.data,this.rows=null===(e=this.blogs)||void 0===e?void 0:e.length;case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},v=d,k=r(36),component=Object(k.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-area ptb-100 bg-LatestBlog"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),t.ebooks!==[]?e("div",{staticClass:"row justify-content-center"},[t._l(t.ebooks.slice((t.currentPage-1)*t.perPage,t.currentPage*t.perPage),(function(r){return e("div",{key:r.id,staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"single-blog-post bg-F9F9FD"},[e("div",{staticClass:"image"},[e("NuxtLink",{staticClass:"d-block",attrs:{to:"/ebook/"+r.attributes.slug}},[e("img",{attrs:{src:r.attributes.image.data.attributes.url,alt:"blog"}})])],1),t._v(" "),e("div",{staticClass:"content"},[e("h3",[e("NuxtLink",{attrs:{to:"/ebook/"+r.attributes.slug}},[t._v("\n                                "+t._s(r.attributes.name)+"\n                            ")])],1),t._v(" "),e("ul",{staticClass:"meta"},[e("li",[e("i",{staticClass:"ri-time-line"}),t._v(" "+t._s(r.attributes.date))])])])])])})),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"pagination-area"},[e("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"itemList",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])],2):t._e()])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row justify-content-left"},[t("div",{staticClass:"col-lg-12 col-md-6"},[t("div",{staticClass:"section-title"},[t("h1",[this._v("Ebook")])])])])}],!1,null,null,null);e.default=component.exports}}]);
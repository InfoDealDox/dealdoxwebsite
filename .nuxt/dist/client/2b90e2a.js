(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{450:function(t,e,n){t.exports=n.p+"img/logo.ea827d1.svg"},569:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"col-lg-6 col-md-12 p-0"},[t("div",{staticClass:"coming-soon-image"},[t("img",{attrs:{src:n(181),alt:"coming-soon"}})])])}],c=(n(39),{name:"ComingSoon",data:function(){return{days:"",hours:"",minutes:"",seconds:""}},created:function(){var t=this;setInterval((function(){t.commingSoonTime()}),1e3)},methods:{commingSoonTime:function(){var t=new Date("July 1, 2023 10:00:00 PDT"),e=Date.parse(t)/1e3,n=new Date,o=e-Date.parse(n)/1e3,c=Math.floor(o/86400),l=Math.floor((o-86400*c)/3600),r=Math.floor((o-86400*c-3600*l)/60),d=Math.floor(o-86400*c-3600*l-60*r);l<"10"&&(l="0"+l),r<"10"&&(r="0"+r),d<"10"&&(d="0"+d),this.days=c,this.hours=l,this.minutes=r,this.seconds=d}}}),l=n(36),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"coming-soon-area"},[e("div",{staticClass:"container-fluid p-0"},[e("div",{staticClass:"row m-0"},[e("div",{staticClass:"col-lg-6 col-md-12 p-0"},[e("div",{staticClass:"coming-soon-content"},[e("div",{staticClass:"d-table"},[e("div",{staticClass:"d-table-cell"},[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},[e("img",{attrs:{src:n(450),alt:"image"}})]),t._v(" "),e("h2",[t._v("We Are Launching Soon")]),t._v(" "),e("div",{staticClass:"flex-wrap justify-content-center d-flex",attrs:{id:"timer"}},[e("div",{staticClass:"time align-items-center flex-column d-flex justify-content-center",attrs:{id:"days"}},[e("h3",[t._v(t._s(t.days))]),t._v(" "),e("p",[t._v("Days")])]),t._v(" "),e("div",{staticClass:"time align-items-center flex-column d-flex justify-content-center",attrs:{id:"hours"}},[e("h3",[t._v(t._s(t.hours))]),t._v(" "),e("p",[t._v("Hours")])]),t._v(" "),e("div",{staticClass:"time align-items-center flex-column d-flex justify-content-center",attrs:{id:"minutes"}},[e("h3",[t._v(t._s(t.minutes))]),t._v(" "),e("p",[t._v("Minutes")])]),t._v(" "),e("div",{staticClass:"time align-items-center flex-column d-flex justify-content-center",attrs:{id:"seconds"}},[e("h3",[t._v(t._s(t.seconds))]),t._v(" "),e("p",[t._v("Seconds")])])])],1)])])]),t._v(" "),t._m(0)])])])}),o,!1,null,null,null);e.default=component.exports}}]);
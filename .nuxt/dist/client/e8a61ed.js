(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{558:function(t,e,r){"use strict";r.r(e);var o=r(0),l=(r(25),r(4),r(64),r(34)),n=(r(90),r(12),r(20),r(5),r(70),r(112),r(9)),c=r(89),m=r.n(c);new n.default({el:"#contact-form",data:{formData:{first_name:"",last_name:"",phone:"",email:"",company:"",country:"",message:"",agree_terms:!0,phoneNumber:"",maxPhoneNumberLength:15,phoneValidationMessage:"Please enter exactly 15 numeric digits"},errors:{}}});var d,v={methods:{validatePhoneNumber:function(){this.phoneNumber=this.phoneNumber.replace(/\D/g,"")},allowOnlyNumbers:function(t){var e=t.which?t.which:t.keyCode;e>31&&(e<48||e>57)&&t.preventDefault()},validateForm:function(){return this.errors={},this.formData.first_name||(this.errors.first_name="First Name is required."),this.formData.last_name||(this.errors.last_name="Last Name is required."),this.formData.phoneNumber||(this.errors.phoneNumber="Phone is required."),this.formData.email?this.isValidEmail(this.formData.email)||(this.errors.email="Please enter a valid email address."):this.errors.email="Email is required.",this.formData.company||(this.errors.company="Company is required."),this.formData.country||(this.errors.country="Country is required."),this.formData.message||(this.errors.message="Message is required."),this.formData.agree_terms||(this.errors.agree_terms="You must agree to the Terms of Use."),0===Object.keys(this.errors).length},isValidEmail:function(t){return t.includes("@")},onSubmit:function(){this.validateForm()}},name:"BlogDetails",props:["detailsContent"],data:function(){return{details:this.detailsContent,blogs:[],ebooks:[]}},created:(d=Object(l.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://cms.dealdox.io/api/ebooks?populate=*");case 2:e=t.sent,this.ebooks=e.data.data;case 4:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},h=v,_=r(36),component=Object(_.a)(h,(function(){var t,e=this,r=e._self._c;return r("div",{staticClass:"blog-details-area ptb-100"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-7 col-md-12"},[r("div",{staticClass:"blog-details-desc"},[r("div",{staticClass:"article-image"},[r("img",{attrs:{src:e.details[0].attributes.image.data.attributes.url,alt:"image"}})]),e._v(" "),r("div",{staticClass:"article-content"},[r("div",{staticClass:"entry-meta"},[r("ul",[r("li",[r("i",{staticClass:"ri-calendar-2-line"}),e._v(e._s(e.details[0].attributes.date))])])]),e._v(" "),r("h4",[e._v(e._s(e.details[0].attributes.name))]),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.details[0].attributes.description)}})])])]),e._v(" "),r("div",{staticClass:"col-lg-5 col-md-12 ptb-100"},[r("div",{staticClass:"contact-area"},[r("div",{staticClass:"container"},[e._m(0),e._v(" "),r("div",{staticClass:"contact-form"},[r("form",{attrs:{action:"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST"}},[r("input",{attrs:{name:"oid",type:"hidden",value:"00D2v000003PByK"}}),e._v(" "),r("input",{attrs:{name:"retURL",type:"hidden",value:"https://dealdox.io/thank-you"}}),e._v(" "),r("div",{staticClass:"row"},[e._m(1),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[r("div",{staticClass:"form-group"},[r("p",[e._v("Phone Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"form-control",attrs:(t={type:"text",maxlength:e.maxPhoneNumberLength,name:"phone",id:"phone"},Object(o.a)(t,"maxlength","15"),Object(o.a)(t,"placeholder","Eg: 123456789012345"),Object(o.a)(t,"title",e.phoneValidationMessage),t),domProps:{value:e.phoneNumber},on:{input:[function(t){t.target.composing||(e.phoneNumber=t.target.value)},e.validatePhoneNumber],keypress:e.allowOnlyNumbers}})])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"flexCheckDefault"}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"flexCheckDefault"}},[e._v("\n                                                I agree to the "),r("NuxtLink",{attrs:{to:"/terms-of-use"}},[e._v(" Terms of\n                                                    Use")])],1)])]),e._v(" "),r("p",[e._v(" By registering, you confirm that you agree to the storing and processing of\n                                        your personal data by DealDox as described in the"),r("NuxtLink",{attrs:{to:"/privacy-policy"}},[e._v(" Privacy Statement.")])],1),e._v(" "),e._m(7),e._v(" "),e._m(8)])])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"section-title-about"},[t("h3",[this._v("Download Now")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("First Name")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",maxlength:"40",name:"first_name",required:"",id:"first_name",placeholder:"Eg: David"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Last Name")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",maxlength:"40",name:"last_name",id:"last_name",placeholder:"Eg: Marsh"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Email")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",maxlength:"40",name:"email",required:"",id:"email",placeholder:"Eg: abc@gmail.com"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Job Title")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",maxlength:"40",name:"title",id:"title",placeholder:"Eg: Associate Consultant"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Company")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",maxlength:"40",name:"company",id:"company",placeholder:"Eg: ABC"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Country")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"country",maxlength:"40",name:"country",id:"country",placeholder:"Eg: India"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"none"}},[e("label",{attrs:{for:"eBook__c"}},[t._v("Contact")]),t._v(" "),e("input",{attrs:{id:"eBook__c",maxlength:"40",name:"eBook__c",size:"20",type:"text",value:"True"}}),e("br")])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[t("button",{staticClass:"default-btn",attrs:{type:"submit",name:"submit",required:""}},[t("i",{staticClass:"bx bx-paper-plane"}),this._v("\n                                            Download ")])])}],!1,null,null,null);e.default=component.exports}}]);
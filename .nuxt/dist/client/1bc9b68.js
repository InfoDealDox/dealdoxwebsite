(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{576:function(t,e,r){"use strict";r.r(e);var o=r(0);r(12),r(20),r(5),r(70),r(112);new(r(9).default)({el:"#contact-form",data:{formData:{first_name:"",last_name:"",phone:"",email:"",company:"",country:"",message:"",agree_terms:!0,phoneNumber:"",maxPhoneNumberLength:15,phoneValidationMessage:"Please enter exactly 15 numeric digits"},errors:{}}});var l={methods:{validatePhoneNumber:function(){this.phoneNumber=this.phoneNumber.replace(/\D/g,"")},allowOnlyNumbers:function(t){var e=t.which?t.which:t.keyCode;e>31&&(e<48||e>57)&&t.preventDefault()},validateForm:function(){return this.errors={},this.formData.first_name||(this.errors.first_name="First Name is required."),this.formData.last_name||(this.errors.last_name="Last Name is required."),this.formData.phoneNumber||(this.errors.phoneNumber="Phone is required."),this.formData.email?this.isValidEmail(this.formData.email)||(this.errors.email="Please enter a valid email address."):this.errors.email="Email is required.",this.formData.company||(this.errors.company="Company is required."),this.formData.country||(this.errors.country="Country is required."),this.formData.message||(this.errors.message="Message is required."),this.formData.Employees__c||(this.errors.Employees__c="Message is required."),this.formData.agree_terms||(this.errors.agree_terms="You must agree to the Terms of Use."),0===Object.keys(this.errors).length},isValidEmail:function(t){return t.includes("@")},onSubmit:function(){this.validateForm()}},name:"EasyIntegration"},n=r(36),component=Object(n.a)(l,(function(){var t,e=this,r=e._self._c;return r("div",{staticClass:"features-area pt-60 bg-FAFAFA"},[r("div",{staticClass:"container"},[r("div",{staticClass:"software-integrations-inner"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-lg-6 col-md-12"},[r("div",{staticClass:"features-content"},[e._m(0),e._v(" "),r("div",{staticClass:"btn-box"},[r("NuxtLink",{staticClass:"default-btn",attrs:{to:"/cpq-integrations"}},[e._v("Know more")])],1)])]),e._v(" "),r("div",{staticClass:"col-lg-6 col-md-12 ptb-100"},[r("div",{staticClass:"contact-area"},[r("div",{staticClass:"container"},[r("div",{staticClass:"contact-form"},[r("form",{attrs:{action:"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST"}},[r("input",{attrs:{name:"oid",type:"hidden",value:"00D2v000003PByK"}}),e._v(" "),r("input",{attrs:{name:"retURL",type:"hidden",value:"https://dealdox.io/thank-you"}}),e._v(" "),r("div",{staticClass:"row"},[e._m(1),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[r("div",{staticClass:"form-group"},[r("p",[e._v("Phone Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"form-control",attrs:(t={type:"text",maxlength:e.maxPhoneNumberLength,name:"phone",id:"phone"},Object(o.a)(t,"maxlength","15"),Object(o.a)(t,"placeholder","Eg: 123456789012345"),Object(o.a)(t,"title",e.phoneValidationMessage),t),domProps:{value:e.phoneNumber},on:{input:[function(t){t.target.composing||(e.phoneNumber=t.target.value)},e.validatePhoneNumber],keypress:e.allowOnlyNumbers}})])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),r("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-check-input",attrs:{required:"",type:"checkbox",value:"",id:"flexCheckDefault"}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"flexCheckDefault"}},[e._v("\n                                                       I agree to the "),r("NuxtLink",{attrs:{to:"/terms-of-use"}},[e._v(" Terms of\n                                                           Use")])],1)])]),e._v(" "),r("p",[e._v(" By registering, you confirm that you agree to the storing and processing of\n                                               your personal data by DealDox as described in the"),r("NuxtLink",{attrs:{to:"/privacy-policy"}},[e._v("\n                                                   Privacy Statement.")])],1),e._v(" "),e._m(9)])])])])])])])])])])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"features-list"},[e("h2",[t._v("Transform Deals with "),e("br"),e("span",{staticClass:"sub-title"},[t._v("DealDox")]),t._v(" in Action!")]),t._v(" "),e("p",[t._v("A centralized platform for automated quote generation, "),e("a",{attrs:{href:"https://www.dealdox.io/services-cpq"}},[t._v("Accurate Pricing,")]),t._v(" Product Bundling\n                                   and Upselling, Margin Optimization, Cost Visibility, Efficient Pricing Strategy,\n                                    "),e("a",{attrs:{href:"https://www.dealdox.io/localized-deal-documents"}},[t._v("Customize Deal Documents in your desired language,")]),t._v("\nand more! ")]),t._v(" "),e("li",[e("div",{staticClass:"icon"},[e("i",{staticClass:"ri-check-line"})]),t._v(" "),e("p",{staticClass:"with-top-border"},[t._v("Easy to Use")])]),t._v(" "),e("li",[e("div",{staticClass:"icon"},[e("i",{staticClass:"ri-check-line"})]),t._v(" "),e("p",{staticClass:"with-top-border"},[t._v("Totally Unified")])]),t._v(" "),e("li",[e("div",{staticClass:"icon"},[e("i",{staticClass:"ri-check-line"})]),t._v(" "),e("p",[t._v("Close Deals Faster")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("First Name")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",maxlength:"40",name:"first_name",required:"",id:"first_name",placeholder:"Eg: David"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Last Name")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",maxlength:"40",name:"last_name",id:"last_name",placeholder:"Eg: Marsh"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Email")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",maxlength:"40",name:"email",required:"",id:"email",placeholder:"Eg: abc@gmail.com"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Job Title")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",maxlength:"40",name:"title",id:"title",placeholder:"Eg: Associate Consultant"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Company")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",maxlength:"40",name:"company",id:"company",placeholder:"Eg: ABC"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Employees")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{name:"Employees__c",id:"Employees__c",required:""}},[e("option",[t._v("--None--")]),t._v(" "),e("option",{attrs:{value:"1-20"}},[t._v("1-20")]),t._v(" "),e("option",{attrs:{value:"21-200"}},[t._v("21-200")]),t._v(" "),e("option",{attrs:{value:"201-10000"}},[t._v("201-10000")]),t._v(" "),e("option",{attrs:{value:"10000+"}},[t._v("10000+")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[e("div",{staticClass:"form-group"},[e("p",[t._v("Country")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"country",maxlength:"40",name:"country",id:"country",placeholder:"Eg: Country"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"none"}},[e("label",{attrs:{for:"Request_demo__c"}},[t._v("Request a Demo")]),t._v(" "),e("input",{attrs:{id:"Request_demo__c",maxlength:"40",name:"Request_demo__c",size:"20",type:"text",value:"True"}}),e("br")])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[t("button",{staticClass:"default-btn",attrs:{type:"submit",name:"submit",required:""}},[t("i",{staticClass:"bx bx-paper-plane"}),this._v("\n                                                   Request a Demo ")])])}],!1,null,null,null);e.default=component.exports}}]);
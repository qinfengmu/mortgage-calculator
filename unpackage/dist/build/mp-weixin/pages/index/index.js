(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0c04":function(t,e,n){"use strict";n.r(e);var a=n("cffe"),i=n("2b8f");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},1523:function(t,e,n){"use strict";var a=n("90ca"),i=n.n(a);i.a},1870:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"2b8f":function(t,e,n){"use strict";n.r(e);var a=n("b76a"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"2f9e":function(t,e,n){"use strict";n.r(e);var a=n("82b7"),i=n("9d91");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("1523");var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},3110:function(t,e,n){"use strict";n.r(e);var a=n("c206"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"3fa3":function(t,e,n){"use strict";n.r(e);var a=n("1870"),i=n("3110");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"46ba":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"663b":function(t,e,n){"use strict";(function(t){n("a586"),n("921b");a(n("66fd"));var e=a(n("2f9e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"811e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("acd2")),i=s(n("0c04")),r=s(n("3fa3"));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/nav-tab").then(n.bind(null,"375b"))},o={data:function(){return{type:0,navTabs:[{name:"公积金贷款",type:0},{name:"商业贷款",type:1},{name:"组合贷款",type:2}]}},components:{navTab:u,accumulatedLoan:a.default,commercialLoan:i.default,syndicatedLoan:r.default},onLoad:function(){},created:function(){},methods:{switchTabs:function(t){console.log(t),this.type=t.type}}};e.default=o},"82b7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"87d7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("dcfd"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{loanAmount:"",phaseIndex:19,phase:240,rateIndex:0,rate:3.25,paymentTypeIndex:0,paymentType:1,numReg:/^([1-9]\d*.?\d*|0.\d*[1-9]\d*)$/,accumu_max_loan:12e5}},mixins:[a.default],computed:{phaseArray:function(){for(var t=[],e=1;e<31;e++){var n=12*e,a=e+"年（"+n+"期）";t.push({text:a,value:n})}return t},rateArray:function(){return this.$store.state.rate.accumulation_fund_rate_array},paymentTypeArray:function(){return this.$store.state.rate.payment_type_array}},methods:{bindPhasePickerChange:function(t){this.phaseIndex=t.target.value,this.phase=this.phaseArray[this.phaseIndex].value},bindRatePickerChange:function(t){this.rateIndex=t.target.value,this.rate=this.rateArray[this.rateIndex].value},bindTypePickerChange:function(t){this.paymentTypeIndex=t.target.value,this.paymentType=this.paymentTypeArray[this.paymentTypeIndex].value},calc:function(){if(console.log("total:",this.loanAmount,"phase:",this.phase,"rate:",this.rate,"paymentType:",this.paymentType),""==this.loanAmount)t.showToast({icon:"none",title:"请输入贷款金额"});else{var e="";if(!this.numReg.test(this.loanAmount))return t.showToast({icon:"none",title:"贷款金额格式不正确"}),!1;if(this.ten_thousand(this.loanAmount)>this.accumu_max_loan)return t.showToast({icon:"none",title:"公积金贷款金额不能超过120万"}),!1;e=1==this.paymentType?this.calc_averageInterest(this.loanAmount,this.rate,this.phase):this.calc_averageCapital(this.loanAmount,this.rate,this.phase),this.$store.dispatch("setResult",e),console.log(this.$store.state),t.navigateTo({url:"../caclResult/caclResult",success:function(t){},fail:function(){},complete:function(){}})}}}};e.default=r}).call(this,n("543d")["default"])},"90ca":function(t,e,n){},"9d91":function(t,e,n){"use strict";n.r(e);var a=n("811e"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},acd2:function(t,e,n){"use strict";n.r(e);var a=n("46ba"),i=n("f68b");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},b76a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("dcfd"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{loanAmount:"",phaseIndex:19,phase:240,rateIndex:3,rate:4.9,paymentTypeIndex:0,paymentType:1,numReg:/^([1-9]\d*.?\d*|0.\d*[1-9]\d*)$/,max_loan:1e8}},mixins:[a.default],computed:{phaseArray:function(){for(var t=[],e=1;e<31;e++){var n=12*e,a=e+"年（"+n+"期）";t.push({text:a,value:n})}return t},rateArray:function(){return this.$store.state.rate.business_rate_array},paymentTypeArray:function(){return this.$store.state.rate.payment_type_array}},methods:{bindPhasePickerChange:function(t){this.phaseIndex=t.target.value,this.phase=this.phaseArray[this.phaseIndex].value},bindRatePickerChange:function(t){this.rateIndex=t.target.value,this.rate=this.rateArray[this.rateIndex].value},bindTypePickerChange:function(t){this.paymentTypeIndex=t.target.value,this.paymentType=this.paymentTypeArray[this.paymentTypeIndex].value},calc:function(){if(""==this.loanAmount)t.showToast({icon:"none",title:"请输入贷款金额"});else{var e="";if(!this.numReg.test(this.loanAmount))return t.showToast({icon:"none",title:"贷款金额格式不正确"}),!1;if(this.ten_thousand(this.loanAmount)>this.max_loan)return t.showToast({icon:"none",title:"商业贷款金额不能超过1亿"}),!1;e=1==this.paymentType?this.calc_averageInterest(this.loanAmount,this.rate,this.phase):this.calc_averageCapital(this.loanAmount,this.rate,this.phase),this.$store.dispatch("setResult",e),console.log(this.$store.state),t.navigateTo({url:"../caclResult/caclResult",success:function(t){},fail:function(){},complete:function(){}})}}}};e.default=r}).call(this,n("543d")["default"])},c206:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("dcfd"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{loanAmount:"",acc_loanAmount:"",phaseIndex:19,phase:240,rateIndex:3,rate:4.9,acc_rateIndex:0,acc_rate:3.25,paymentTypeIndex:0,paymentType:1,numReg:/^([1-9]\d*.?\d*|0.\d*[1-9]\d*)$/,max_loan:1e8,accumu_max_loan:12e5}},mixins:[a.default],computed:{phaseArray:function(){for(var t=[],e=1;e<31;e++){var n=12*e,a=e+"年（"+n+"期）";t.push({text:a,value:n})}return t},rateArray:function(){return this.$store.state.rate.business_rate_array},acc_rateArray:function(){return this.$store.state.rate.accumulation_fund_rate_array},paymentTypeArray:function(){return this.$store.state.rate.payment_type_array}},methods:{bindPhasePickerChange:function(t){this.phaseIndex=t.target.value,this.phase=this.phaseArray[this.phaseIndex].value},bindRatePickerChange:function(t){this.rateIndex=t.target.value,this.rate=this.rateArray[this.rateIndex].value},bindAccRatePickerChange:function(t){this.acc_rateIndex=t.target.value,this.acc_rate=this.rateArray[this.acc_rateIndex].value},bindTypePickerChange:function(t){this.paymentTypeIndex=t.target.value,this.paymentType=this.paymentTypeArray[this.paymentTypeIndex].value},calc:function(){var e="";if(""==this.loanAmount)return t.showToast({icon:"none",title:"请输入贷款金额"}),!1;if(!this.numReg.test(this.loanAmount))return t.showToast({icon:"none",title:"商业贷款金额格式不正确"}),!1;if(this.ten_thousand(this.loanAmount)>this.max_loan)return t.showToast({icon:"none",title:"商业贷款金额不能超过1亿"}),!1;if(""==this.acc_loanAmount)return t.showToast({icon:"none",title:"请输入公积金贷款金额!"}),!1;if(!this.numReg.test(this.acc_loanAmount))return t.showToast({icon:"none",title:"公积金贷款金额格式不正确!"}),!1;if(this.ten_thousand(this.acc_loanAmount)>this.accumu_max_loan)return t.showToast({icon:"none",title:"公积金贷款金额不能超过120万!"}),!1;if(console.log(this.loanAmount,this.rate,this.phase),console.log(this.acc_loanAmount,this.acc_rate,this.phase),1==this.paymentType){var n=this.calc_averageInterest(this.loanAmount,this.rate,this.phase),a=this.calc_averageInterest(this.acc_loanAmount,this.acc_rate,this.phase);e=this.resetMixinsData(n,a)}else{n=this.calc_averageCapital(this.loanAmount,this.rate,this.phase),a=this.calc_averageCapital(this.acc_loanAmount,this.acc_rate,this.phase);e=this.resetMixinsData(n,a)}this.$store.dispatch("setResult",e),console.log(this.$store.state),t.navigateTo({url:"../caclResult/caclResult",success:function(t){},fail:function(){},complete:function(){}})}}};e.default=r}).call(this,n("543d")["default"])},cffe:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},f68b:function(t,e,n){"use strict";n.r(e);var a=n("87d7"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a}},[["663b","common/runtime","common/vendor"]]]);
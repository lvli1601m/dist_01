webpackJsonp([11],{"2FzT":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("IvJb"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("C7Lr")({name:"App"},i,!1,function(t){n("rqeB")},null,null).exports,o=n("zO6J");a.a.use(o.a);var c=new o.a({routes:[{path:"/index",name:"Index",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"42Hy"))}},{path:"/detail",name:"detail",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"wHgX"))}},{path:"/color",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"3rbB"))}},{path:"/city",name:"city",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"hVvU"))}},{path:"/type",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"kMqs"))}},{path:"/img",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"b0ui"))}},{path:"/quotation",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"5gQX"))}},{path:"/imgItem",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"Smo8"))}},{path:"/login",name:"login",component:function(){return n.e(8).then(n.bind(null,"xJsL"))}},{path:"*",redirect:"/index"}]});c.beforeEach(function(t,e,n){window.localStorage.getItem("login")||"/login"==t.path||n("/login"),n()});var s=c,u=n("9rMa"),l=n("3cXf"),m=n.n(l),d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};/\?/.test(t)?t+="&_="+new Date:t+="?_"+new Date;var a={method:e};return"POST"==e&&(a.body=m()(n)),fetch(t,a).then(function(t){return t.json()})},h=/localhost:8080/gi.test(window.location.host)?"http://baojia.chelun.com":"https://baojia.chelun.com",f=function(t){var e="";return t&&(e+="provinceid="+t),d(h+"/v1-city-alllist.html?"+e)},p={flag:!1,con:"",letters:[],brand:{},brandId:"",getMakeList:"",makeList:[],isShow:!1},g={namespaced:!0,state:p,mutations:{initState:function(t,e){var n=[],a={};e.forEach(function(t){var e=t.Spelling[0];-1!=n.indexOf(e)?a[e].push(t):(n.push(e),a[e]=[t])}),t.letters=n,t.brand=a},changeMakeList:function(t,e){t.makeList=e.list,t.brandId=e.id,t.isShow=!0}},actions:{initState:function(t,e){var n=t.commit;d(h+"/v2-car-getMasterBrandList.html?_1535698551812").then(function(t){1==t.code?n("initState",t.data):alert(t.msg)})},getMakeList:function(t,e){var n,a=t.commit;e!=p.brandId&&(n=e,d(h+"/v2-car-getMakeListByMasterBrandId.html?MasterID="+n)).then(function(t){a("changeMakeList",{id:e,list:t.data})})}}},v=n("IHPB"),_=n.n(v),b=n("zsLt"),w=n.n(b),y={namespaced:!0,state:{eachData:{},currentYear:"全部"},getters:{years:function(t){if(!t.eachData.list)return[];var e=t.eachData.list.map(function(t){return t.market_attribute.year}),n=new w.a(e);return["全部"].concat(_()(n))},list:function(t){if(!t.eachData.list)return[];function e(t){var e=[],n={};return t.forEach(function(t){var a=t.exhaust_str+"/"+t.max_power_str+t.inhale_type;-1==e.indexOf(a)?(e.push(a),n[a]=[t]):n[a].push(t)}),n}return"全部"==t.currentYear?e(t.eachData.list):e(t.eachData.list.filter(function(e){return e.market_attribute.year==t.currentYear}))}},mutations:{changeYear:function(t,e){t.currentYear=e},initState:function(t,e){t.eachData=e,console.log(e),e.list.sort(function(t,e){return e.market_attribute.year!=t.market_attribute.year?e.market_attribute.year-t.market_attribute.year:e.exhaust_str>t.exhaust_str?-1:e.exhaust_str<t.exhaust_str?1:e.max_power_str>t.max_power_str?-1:e.max_power_str<t.max_power_str?1:e.market_attribute.dealer_price_min>t.market_attribute.dealer_price_min?-1:1})}},actions:{detailList:function(t,e){var n,a=t.commit;(n=e,d(h+"/v2-car-getInfoAndListById.html?SerialID="+n)).then(function(t){1==t.code?a("initState",t.data):alert(t.msg)})}}},I={namespaced:!0,state:{imgData:[],imgList:{}},mutations:{initState:function(t,e){var n=/(\{)([\d])(\})/g;e.map(function(t){t.List.map(function(t){t.Url=t.Url.replace(n,function(e,n,a){return t.LowSize})})}),t.imgData=e},imgItem:function(t,e){console.log(e);var n=/(\{)([\d])(\})/g;e.List.map(function(t){t.Url=t.Url.replace(n,function(e,n,a){return t.LowSize})}),t.imgList=e}},actions:{imgs:function(t,e){var n,a=t.commit;(n=e,d(h+"/v2-car-getImageList.html?SerialID="+n)).then(function(t){1==t.code?a("initState",t.data):alert(t.msg)})},getImgList:function(t,e){var n=t.commit;(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;return d(h+"/v2-car-getCategoryImageList.html?SerialID="+t+"&ImageID="+e+"&Page="+n+"&PageSize="+a)})(e.id,e.imgId).then(function(t){1==t.code?n("imgItem",t.data):alert(t.msg)})}}},S={namespaced:!0,state:{list:[],details:[],isShowCity:!1,currentCity:""},getters:{},mutations:{officialList:function(t,e){t.list=e.list,t.details=e.details},showCity:function(t,e){t.isShowCity=e}},actions:{official:function(t,e){var n=t.commit;(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:201;return d(h+"/v2-dealer-alllist.html?carId="+t+"&cityId="+e)})(e).then(function(t){1==t.code?n("officialList",t.data):alert(t.msg)})}}},L=n("2FzT"),D=n.n(L),x={namespaced:!0,state:{list:[],locationCity:"",provinces:[],cities:[],isShowCity:!1},getters:{},mutations:{updateProvinces:function(t,e){t.provinces=e.data},updateCitied:function(t,e){t.cities=e.data,t.isShowCity=!0},showRransform:function(t,e){t.isShowCity=!e}},actions:{CityList:function(t,e){var n=t.commit;e?f(e).then(function(t){n("updateCitied",t)}):f().then(function(t){n("updateProvinces",t)})}}},k={namespaced:!0,state:{imgDate:[]},mutations:{initState:function(t,e){console.log(e),t.imgData=e,console.log(t.imgData)}},actions:{imgList:function(t,e){var n,a=t.commit;(n=e,d(h+"/v2-car-getModelImageYearColor.html?SerialID="+n)).then(function(t){1==t.code?a("initState",t.data):alert(t.msg)})}}};a.a.use(u.a);var C=new u.a.Store({modules:{Index:g,Details:y,Imgs:I,Quotations:S,Login:D.a,city:x,Color:k}});a.a.config.productionTip=!1,new a.a({el:"#app",router:s,store:C,components:{App:r},template:"<App/>"})},rqeB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.431e43d9f2ba9b44c5cf.js.map
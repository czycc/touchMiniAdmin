(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4de31d12"],{"2a67":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"A"===t.type?a("div",{staticClass:"card-article-A",on:{click:t.goArticle}},[a("div",{staticClass:"header"},[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),a("span",{staticClass:"time"},[t._v(t._s(t.time))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:t.imgURL}})]),a("p",{staticClass:"desc"},[t._v(t._s(t.desc))])])]):"B"===t.type?a("div",{staticClass:"card-article-B",on:{click:t.goArticle}},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"content"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:t.imgURL}})]),a("div",{staticClass:"text"},[a("p",{staticClass:"desc"},[t._v(t._s(t.desc))]),a("p",{staticClass:"time"},[t._v(t._s(t.time))])])])]):t._e()},s=[],n=(a("a481"),{name:"card-article",props:{type:{type:String,default:"A"},title:{type:String,default:"title"},created:{type:String,default:"time"},imgURL:{type:String,default:"https://touchworld.oss-cn-shanghai.aliyuncs.com/touch/img/logo.png"},desc:{type:String,default:"desc"},to:{type:String,default:"/"}},methods:{goArticle:function(){this.$router.replace(this.to)}},computed:{time:function(){var t=(new Date).getTime(),e=new Date(this.created.replace(/-/gi,"/")).getTime(),a=t-e,i=a/1e3,s=parseInt(i/60),n=parseInt(s/60),c=parseInt(n/24),o=parseInt(c/7),r=parseInt(c/30),l=parseInt(r/12);return l>0?"".concat(l,"年前"):r>0?"".concat(r,"月前"):o>0?"".concat(o,"周前"):c>0?"".concat(c,"天前"):n>0?"".concat(n,"小时前"):s>0?"".concat(s,"分钟前"):"刚刚"}}}),c=n,o=(a("75e9"),a("2877")),r=Object(o["a"])(c,i,s,!1,null,"56849e80",null);r.options.__file="CardArticle.vue";e["a"]=r.exports},"4db0":function(t,e,a){"use strict";var i=a("650b"),s=a.n(i);s.a},"650b":function(t,e,a){},7307:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video"},[t.loading?a("div",{staticClass:"loading"},[a("loading",{attrs:{size:"100px",type:"spinner"}})],1):a("div",{staticClass:"container"},[a("div",{staticClass:"video-main"},[a("h1",{staticClass:"video-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"video-time"},[t._v(t._s(t.time))]),a("div",{staticClass:"video-content"},[a("div",{staticClass:"video-wrapper"},[a("video",{attrs:{src:t.videoURL,controls:""}})]),a("van-button",{staticClass:"btn",attrs:{type:"primary",size:"large"}},[t._v("下载视频")]),a("van-button",{staticClass:"btn",attrs:{type:"primary",size:"large"}},[t._v("分享视频")])],1)]),a("div",{staticClass:"other"},[a("h2",[t._v("其他推荐")]),a("card-article",{staticClass:"card-video",attrs:{type:"B",to:"/article"}}),a("card-article",{staticClass:"card-video",attrs:{type:"B"}}),a("card-article",{staticClass:"card-video",attrs:{type:"B"}})],1)]),a("tab-bar",{attrs:{active:-1}})],1)},s=[],n=(a("96cf"),a("1da1")),c=(a("ac1e"),a("543e")),o=(a("68ef"),a("fe7e")),r=Object(o["a"])({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",class:t.b([t.type,t.size,{block:t.block,plain:t.plain,round:t.round,square:t.square,loading:t.loading,disabled:t.disabled,unclickable:t.disabled||t.loading,"bottom-action":t.bottomAction}]),attrs:{type:t.nativeType,disabled:t.disabled},on:{click:t.onClick}},[t.loading?a("loading",{attrs:{size:"20px",color:"default"===t.type?void 0:""}}):a("span",{class:t.b("text")},[t._t("default",[t._v(t._s(t.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(t){this.loading||this.disabled||this.$emit("click",t)}}}),l=a("9d6f"),d=a("2a67"),u=a("4ec3"),p={components:{vanButton:r,Loading:c["a"],TabBar:l["a"],CardArticle:d["a"]},data:function(){return{loading:!0,title:"",time:"",content:"",videoURL:""}},activated:function(){this.loading=!0,this.getVideo()},methods:{getVideo:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].getVideo(this.$route.params.id);case 2:e=t.sent,a=e.data,this.loading=!1,this.title=a.title,this.time=a.created_at,this.videoURL=a.video_url;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},v=p,g=(a("4db0"),a("2877")),m=Object(g["a"])(v,i,s,!1,null,null,null);m.options.__file="Video.vue";e["default"]=m.exports},"75e9":function(t,e,a){"use strict";var i=a("b67c"),s=a.n(i);s.a},ac1e:function(t,e,a){"use strict";a("68ef")},b67c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4de31d12.c2134c2a.js.map
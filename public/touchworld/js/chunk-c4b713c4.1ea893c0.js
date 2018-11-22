(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4b713c4"],{"0b33":function(t,e,i){"use strict";var s=i("fe7e"),n={data:function(){return{parent:null}},methods:{findParent:function(t){var e=this.$parent;while(e){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}};e["a"]=Object(s["a"])({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isSelected,expression:"isSelected"}],class:t.b("pane")},[t.inited?t._t("default"):t._e(),t.$slots.title?i("div",{ref:"title"},[t._t("title")],2):t._e()],2)},name:"tab",mixins:[n],props:{title:String,disabled:Boolean},data:function(){return{inited:!1}},computed:{index:function(){return this.parent.tabs.indexOf(this)},isSelected:function(){return this.index===this.parent.curActive}},watch:{"parent.curActive":function(){this.inited=this.inited||this.isSelected},title:function(){this.parent.setLine()}},created:function(){this.findParent("van-tabs")},mounted:function(){var t=this.parent.tabs,e=this.parent.$slots.default.indexOf(this.$vnode);t.splice(-1===e?t.length:e,0,this),this.$slots.title&&this.parent.renderTitle(this.$refs.title,this.index)},beforeDestroy:function(){this.parent.tabs.splice(this.index,1)}})},"2a67":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"A"===t.type?i("div",{staticClass:"card-article-A",on:{click:t.goArticle}},[i("div",{staticClass:"header"},[i("span",{staticClass:"title"},[t._v(t._s(t.title))]),i("span",{staticClass:"time"},[t._v(t._s(t.time))])]),i("div",{staticClass:"content"},[i("div",{staticClass:"img-wrap"},[i("img",{attrs:{src:t.imgURL}})]),i("p",{staticClass:"desc"},[t._v(t._s(t.desc))])])]):"B"===t.type?i("div",{staticClass:"card-article-B",on:{click:t.goArticle}},[i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{staticClass:"content"},[i("div",{staticClass:"img-wrap"},[i("img",{attrs:{src:t.imgURL}})]),i("div",{staticClass:"text"},[i("p",{staticClass:"desc"},[t._v(t._s(t.desc))]),i("p",{staticClass:"time"},[t._v(t._s(t.time))])])])]):t._e()},n=[],a=(i("a481"),{name:"card-article",props:{type:{type:String,default:"A"},title:{type:String,default:"title"},created:{type:String,default:"time"},imgURL:{type:String,default:"https://touchworld.oss-cn-shanghai.aliyuncs.com/touch/img/logo.png"},desc:{type:String,default:"desc"},to:{type:String,default:"/"}},methods:{goArticle:function(){this.$router.replace(this.to)}},computed:{time:function(){var t=(new Date).getTime(),e=new Date(this.created.replace(/-/gi,"/")).getTime(),i=t-e,s=i/1e3,n=parseInt(s/60),a=parseInt(n/60),r=parseInt(a/24),o=parseInt(r/7),c=parseInt(r/30),l=parseInt(c/12);return l>0?"".concat(l,"年前"):c>0?"".concat(c,"月前"):o>0?"".concat(o,"周前"):r>0?"".concat(r,"天前"):a>0?"".concat(a,"小时前"):n>0?"".concat(n,"分钟前"):"刚刚"}}}),r=a,o=(i("75e9"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"56849e80",null);c.options.__file="CardArticle.vue";e["a"]=c.exports},"553d":function(t,e,i){},"5e46":function(t,e,i){"use strict";var s=i("fe7e"),n=i("8624"),a=i("a142"),r=!1;if(!a["e"])try{var o={};Object.defineProperty(o,"passive",{get:function(){r=!0}}),window.addEventListener("test-passive",null,o)}catch(p){}function c(t,e,i,s){void 0===s&&(s=!1),!a["e"]&&t.addEventListener(e,i,!!r&&{capture:!1,passive:s})}function l(t,e,i){!a["e"]&&t.removeEventListener(e,i)}var u={getScrollEventTarget:function(t,e){void 0===e&&(e=window);var i=t;while(i&&"HTML"!==i.tagName&&"BODY"!==i.tagName&&1===i.nodeType&&i!==e){var s=this.getComputedStyle(i).overflowY;if("scroll"===s||"auto"===s)return i;i=i.parentNode}return e},getScrollTop:function(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset},setScrollTop:function(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)},getElementTop:function(t){return(t===window?0:t.getBoundingClientRect().top)+this.getScrollTop(window)},getVisibleHeight:function(t){return t===window?t.innerHeight:t.getBoundingClientRect().height},getComputedStyle:!a["e"]&&document.defaultView.getComputedStyle.bind(document.defaultView)},h=10;function d(t,e){return t>e&&t>h?"horizontal":e>t&&e>h?"vertical":""}var f={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||d(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}};e["a"]=Object(s["a"])({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.b([t.type])},[i("div",{ref:"wrap",class:[t.b("wrap",{scrollable:t.scrollable}),{"van-hairline--top-bottom":"line"===t.type}],style:t.wrapStyle},[i("div",{ref:"nav",class:t.b("nav",[t.type]),style:t.navStyle},["line"===t.type?i("div",{class:t.b("line"),style:t.lineStyle}):t._e(),t._l(t.tabs,function(e,s){return i("div",{ref:"tabs",refInFor:!0,staticClass:"van-tab",class:{"van-tab--active":s===t.curActive,"van-tab--disabled":e.disabled},style:t.getTabStyle(e,s),on:{click:function(e){t.onClick(s)}}},[i("span",{ref:"title",refInFor:!0,staticClass:"van-ellipsis"},[t._v("\n          "+t._s(e.title)+"\n        ")])])})],2)]),i("div",{ref:"content",class:t.b("content")},[t._t("default")],2)])},name:"tabs",mixins:[f],model:{prop:"active"},props:{color:String,sticky:Boolean,lineWidth:Number,swipeable:Boolean,active:{type:[Number,String],default:0},type:{type:String,default:"line"},duration:{type:Number,default:.2},swipeThreshold:{type:Number,default:4},offsetTop:{type:Number,default:0}},data:function(){return{tabs:[],position:"",curActive:null,lineStyle:{},events:{resize:!1,sticky:!1,swipeable:!1}}},computed:{scrollable:function(){return this.tabs.length>this.swipeThreshold},wrapStyle:function(){switch(this.position){case"top":return{top:this.offsetTop+"px",position:"fixed"};case"bottom":return{top:"auto",bottom:0};default:return null}},navStyle:function(){return{borderColor:this.color}}},watch:{active:function(t){t!==this.curActive&&this.correctActive(t)},color:function(){this.setLine()},tabs:function(t){this.correctActive(this.curActive||this.active),this.scrollIntoView(),this.setLine()},curActive:function(){this.scrollIntoView(),this.setLine(),"top"!==this.position&&"bottom"!==this.position||u.setScrollTop(window,u.getElementTop(this.$el))},sticky:function(){this.handlers(!0)},swipeable:function(){this.handlers(!0)}},mounted:function(){var t=this;this.correctActive(this.active),this.setLine(),this.$nextTick(function(){t.handlers(!0),t.scrollIntoView(!0)})},activated:function(){var t=this;this.$nextTick(function(){t.handlers(!0),t.scrollIntoView(!0)})},deactivated:function(){this.handlers(!1)},beforeDestroy:function(){this.handlers(!1)},methods:{handlers:function(t){var e=this.events,i=this.sticky&&t,s=this.swipeable&&t;if(e.resize!==t&&(e.resize=t,(t?c:l)(window,"resize",this.setLine,!0)),e.sticky!==i&&(e.sticky=i,this.scrollEl=this.scrollEl||u.getScrollEventTarget(this.$el),(i?c:l)(this.scrollEl,"scroll",this.onScroll,!0),this.onScroll()),e.swipeable!==s){e.swipeable=s;var n=this.$refs.content,a=s?c:l;a(n,"touchstart",this.touchStart),a(n,"touchmove",this.touchMove),a(n,"touchend",this.onTouchEnd),a(n,"touchcancel",this.onTouchEnd)}},onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.curActive,s=50;"horizontal"===t&&this.offsetX>=s&&(e>0&&0!==i?this.setCurActive(i-1):e<0&&i!==this.tabs.length-1&&this.setCurActive(i+1))},onScroll:function(){var t=u.getScrollTop(window)+this.offsetTop,e=u.getElementTop(this.$el),i=e+this.$el.offsetHeight-this.$refs.wrap.offsetHeight;this.position=t>i?"bottom":t>e?"top":"";var s={scrollTop:t,isFixed:"top"===this.position};this.$emit("scroll",s)},setLine:function(){var t=this;this.$nextTick(function(){if(t.$refs.tabs&&"line"===t.type){var e=t.$refs.tabs[t.curActive],i=t.isDef(t.lineWidth)?t.lineWidth:e.offsetWidth/2,s=e.offsetLeft+(e.offsetWidth-i)/2;t.lineStyle={width:i+"px",backgroundColor:t.color,transform:"translateX("+s+"px)",transitionDuration:t.duration+"s"}}})},correctActive:function(t){t=+t;var e=this.tabs.some(function(e){return e.index===t}),i=(this.tabs[0]||{}).index||0;this.setCurActive(e?t:i)},setCurActive:function(t){t=this.findAvailableTab(t,t<this.curActive),this.isDef(t)&&t!==this.curActive&&(this.$emit("input",t),null!==this.curActive&&this.$emit("change",t,this.tabs[t].title),this.curActive=t)},findAvailableTab:function(t,e){var i=e?-1:1,s=t;while(s>=0&&s<this.tabs.length){if(!this.tabs[s].disabled)return s;s+=i}},onClick:function(t){var e=this.tabs[t],i=e.title,s=e.disabled;s?this.$emit("disabled",t,i):(this.setCurActive(t),this.$emit("click",t,i))},scrollIntoView:function(t){if(this.scrollable&&this.$refs.tabs){var e=this.$refs.tabs[this.curActive],i=this.$refs.nav,s=i.scrollLeft,n=i.offsetWidth,a=e.offsetLeft,r=e.offsetWidth;this.scrollTo(i,s,a-(n-r)/2,t)}},scrollTo:function(t,e,i,s){if(s)t.scrollLeft+=i-e;else{var a=0,r=Math.round(1e3*this.duration/16),o=function s(){t.scrollLeft+=(i-e)/r,++a<r&&Object(n["a"])(s)};o()}},renderTitle:function(t,e){var i=this;this.$nextTick(function(){var s=i.$refs.title[e];s.parentNode.replaceChild(t,s)})},getTabStyle:function(t,e){var i={},s=this.color,n=e===this.curActive,a="card"===this.type;return s&&(t.disabled||a===n||(i.color=s),!t.disabled&&a&&n&&(i.backgroundColor=s),a&&(i.borderColor=s)),i}}})},"75e9":function(t,e,i){"use strict";var s=i("b67c"),n=i.n(s);n.a},"7fdb":function(t,e,i){"use strict";var s=i("553d"),n=i.n(s);n.a},8624:function(t,e,i){"use strict";(function(t){i.d(e,"a",function(){return c});var s=i("a142"),n=Date.now();function a(t){var e=Date.now(),i=Math.max(0,16-(e-n)),s=setTimeout(t,i);return n=e+i,s}var r=s["e"]?t:window,o=r.requestAnimationFrame||r.webkitRequestAnimationFrame||a;r.cancelAnimationFrame||r.webkitCancelAnimationFrame||r.clearTimeout;function c(t){return o.call(r,t)}}).call(this,i("c8ba"))},"96d0":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.homeInfo,function(e){return i("tab",{key:e.id,staticClass:"tab",attrs:{title:e.category}},t._l(e.articles,function(t){return i("card-article",{key:t.id,staticClass:"card-article",attrs:{to:"/article/"+t.id,title:t.title,imgURL:t.img_url,desc:t.desc,created:t.created_at}})}))})),i("tab-bar",{attrs:{active:0}})],1)},n=[],a=(i("96cf"),i("1da1")),r=(i("bda7"),i("5e46")),o=(i("da3c"),i("0b33")),c=(i("cadf"),i("551c"),i("097d"),i("9d6f")),l=i("2a67"),u=i("4ec3"),h={components:{Tab:o["a"],Tabs:r["a"],TabBar:c["a"],CardArticle:l["a"]},data:function(){return{active:0,homeInfo:[]}},mounted:function(){this.getHomeInfo()},methods:{getHomeInfo:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].getHomeInfo();case 2:e=t.sent,this.homeInfo=e.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},d=h,f=(i("7fdb"),i("2877")),p=Object(f["a"])(d,s,n,!1,null,null,null);p.options.__file="NavHome.vue";e["default"]=p.exports},b67c:function(t,e,i){},b807:function(t,e,i){},bda7:function(t,e,i){"use strict";i("68ef"),i("b807")},da3c:function(t,e,i){"use strict";i("68ef"),i("f319")},f319:function(t,e,i){}}]);
//# sourceMappingURL=chunk-c4b713c4.1ea893c0.js.map
/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10,11,15,16],{201:function(t,e,n){},202:function(t,e,n){},203:function(t,e,n){},204:function(t,e,n){"use strict";var r=n(201);n.n(r).a},205:function(t,e,n){"use strict";var r=n(202);n.n(r).a},208:function(t,e,n){"use strict";n.r(e);var r=n(0);String.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)});var o=/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,l=/t=(\d+)[ms]?(\d+)?s?/;function c(t){var e=t.replace(o,"$1");if(e.includes(";")){var n=e.split(";");if(n[1].includes("%"))e=("http://youtube.com"+decodeURIComponent(n[1])).replace(o,"$1");else e=n[0]}else e.includes("#")&&(e=e.split("#")[0]);return e}function d(t){void 0===t&&(t="");var e=t.match(l);if(!e)return 0;var n=e[0],r=e[1],o=e[2];return void 0!==o?(o=parseInt(o,10),r=parseInt(r,10)):n.includes("m")?(r=parseInt(r,10),o=0):(o=parseInt(r,10),r=0),o+60*r}var f={scripts:[],events:{},run:function(){var t=this;this.scripts.forEach((function(e){e(t.YT)})),this.scripts=[]},register:function(t){var e=this;this.YT?this.Vue.nextTick((function(){t(e.YT)})):this.scripts.push(t)}},h=0,m={name:"YoutubeEmbed",props:{playerHeight:{type:[String,Number],default:"360"},playerWidth:{type:[String,Number],default:"640"},playerVars:{type:Object,default:function(){return{autoplay:0,time:0}}},videoId:{type:String},mute:{type:Boolean,default:!1},host:{type:String,default:"https://www.youtube.com"}},render:function(t){return t("div",[t("div",{attrs:{id:this.elementId}})])},template:'<div><div :id="elementId"></div></div>',watch:{playerWidth:"setSize",playerHeight:"setSize",videoId:"update",mute:"setMute"},data:function(){return{elementId:"youtube-player-"+(h+=1),player:{}}},methods:{setSize:function(){this.player.setSize(this.playerWidth,this.playerHeight)},setMute:function(t){t?this.player.mute():this.player.unMute()},update:function(t){var e=(this.playerVars.autoplay?"load":"cue")+"VideoById";this.player.hasOwnProperty(e)?this.player[e](t):setTimeout(function(){this.update(t)}.bind(this),100)}},mounted:function(){var t=this;f.register((function(e){var n=t,r=n.playerHeight,o=n.playerWidth,l=n.playerVars,c=n.videoId,d=n.host;t.player=new e.Player(t.elementId,{height:r,width:o,playerVars:l,videoId:c,host:d,events:{onReady:function(e){t.setMute(t.mute),t.$emit("ready",e)},onStateChange:function(e){-1!==e.data&&t.$emit(f.events[e.data],e)},onError:function(e){t.$emit("error",e)}}})}))},beforeDestroy:function(){null!==this.player&&this.player.destroy&&this.player.destroy(),delete this.player}},y={install:function(t,e){void 0===e&&(e={}),f.Vue=t,m.ready=m.mounted;var n=e.global;void 0===n&&(n=!0);var r=e.componentId;if(void 0===r&&(r="youtube"),n&&t.component(r,m),t.prototype.$youtube={getIdFromURL:c,getTimeFromURL:d},"undefined"!=typeof window&&"undefined"!=typeof document){var o=document.createElement("script");o.src="https://www.youtube.com/player_api";var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(o,l),window.onYouTubeIframeAPIReady=function(){f.YT=YT;var t=YT.PlayerState;f.events[t.ENDED]="ended",f.events[t.PLAYING]="playing",f.events[t.PAUSED]="paused",f.events[t.BUFFERING]="buffering",f.events[t.CUED]="cued",f.Vue.nextTick((function(){f.run()}))}}}};r.a.use(y,{global:!1});var v={components:{Youtube:m},inheritAttrs:!1,props:{iframeStyle:{type:String},iframeClass:{type:String}},data:function(){return{wasStarted:!1}}},w=(n(205),n(5)),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-frame wrapper"},[n("client-only",[n("youtube",t._g(t._b({staticClass:"yt-container",on:{playing:function(e){t.wasStarted=!0}}},"youtube",Object.assign({},t.$attrs),!1),t.$listeners)),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.wasStarted,expression:"!wasStarted"}],staticClass:"play-btn"},[n("svg",{attrs:{width:"82",height:"82",viewBox:"0 0 82 82",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"41",cy:"41",r:"39.5",fill:"#EFE1D3",stroke:"black","stroke-width":"3"}}),t._v(" "),n("path",{attrs:{d:"M51 42.5L36 51.5933L36 33.4067L51 42.5Z",fill:"black",stroke:"black","stroke-width":"3","stroke-linejoin":"round"}})])])],1)],1)}),[],!1,null,"2e1be752",null);e.default=component.exports},209:function(t,e,n){"use strict";n.r(e);var r={props:{sources:{type:Array,required:!0},alt:{type:String,required:!0},imgClass:{type:String,required:!1},lazyload:{type:Boolean,required:!1,default:!0},role:{type:String,required:!1}},methods:{loaded:function(t){var e=t.currentTarget.src;this.$emit("imgLoad",e)}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",{staticClass:"responsive-image",class:t.lazyload?"lazyload":""},[t._l(t.sources,(function(source,e){return n("source",{key:e,attrs:{"data-srcset":t.lazyload?source.src:null,srcset:t.lazyload?null:source.src,media:source.query}})})),t._v(" "),t.lazyload?n("img",{staticClass:"lazyload",class:t.imgClass,attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-srcset":"data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",typeof:"foaf:Image",alt:t.alt,role:t.role},on:{lazyloaded:t.loaded}}):n("img",{class:t.imgClass,attrs:{src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,role:t.role},on:{load:t.loaded}})],2)}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,n){"use strict";n.r(e);var r={components:{},props:{queries:{type:Array,required:!0,default:function(){return[]}},fade:{type:Boolean,required:!1,default:!1}},data:function(){return{resizeTimeout:null,flickityConfig:null,cWidth:0}},computed:{size_queries:function(){return[].concat(this.queries).sort((function(a,b){return b.max_width-a.max_width}))}},mounted:function(){setTimeout(this.addListeners,10)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize),this.$emit("flickDestroy"),this.fade&&this.flickityConfig&&this.$refs.flick&&this.$refs.flick.off("select",this.onSelect)},methods:{onInit:function(t){t.on("staticClick",this.onStaticClick)},onDestroy:function(t){t.off("staticClick",this.onStaticClick)},select:function(t){this.$refs.flick.select(t)},next:function(){this.$refs.flick.next()},addListeners:function(){window.addEventListener("resize",this.onResize),this.onResize()},onResize:function(t){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.checkQueries,100)},forceRender:function(){this.flickityConfig&&this.$refs.flick&&(this.$refs.flick.resize(),this.renderFlickity())},checkQueries:function(){if(this.cWidth!=window.innerWidth){var t=null;this.cWidth=window.innerWidth,this.size_queries.map((function(q){t=window.innerWidth<=q.max_width?q.config:t})),this.flickityConfig=t,setTimeout(this.renderFlickity,100)}},renderFlickity:function(){this.flickityConfig&&this.$refs.flick?(this.$refs.flick.rerender(),this.$emit("flickRender",this.$refs.flick),this.$refs.flick.on("select",this.onSelect)):this.$refs.flick&&(this.$refs.flick.off("select",this.onSelect),this.$refs.flick.destroy(),this.$emit("flickDestroy"))},onSelect:function(t){this.$emit("onSelect",t),this.fade&&this.$refs.flick.getCellElements().map((function(e,i){i==t?e.classList.remove("hidden"):e.classList.add("hidden")}))},onStaticClick:function(t,e,n,r){this.$emit("staticClick",{event:t,pointer:e,cellElement:n,cellIndex:r})}}},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("flickity",{ref:"flick",staticClass:"card-slider",attrs:{options:this.flickityConfig}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Flickity:n(86).default})},211:function(t,e,n){"use strict";n.r(e);var r={props:{textClass:String,buttonClass:String},data:function(){return{buttons:[{label:"Stories"},{label:"Facebook"},{label:"Twitter"}]}},methods:{share:function(t){var desc=document.querySelector("meta[name='description']").getAttribute("content")||"Netflix Tadum";switch(console.log(desc),t){case"Twitter":window.open("https://twitter.com/share?url="+encodeURI(window.location.href)+"&text="+desc,"_blank");break;case"Facebook":window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURI(window.location.href)+"&text="+desc,"_blank");break;case"Stories":window.open("https://www.instagram.com/","_blank")}}}},o=(n(204),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"share has-text-centered"},[n("p",{staticClass:"text is-size-8 has-text-weight-medium",class:t.textClass},[t._v("\n    COMPARTILHA PRO MUNDÃO\n  ")]),t._v(" "),n("div",{staticClass:"button-list is-flex m-t-18"},t._l(t.buttons,(function(button){return n("button",{key:button.label,staticClass:"button m-4 is-medium",class:[t.buttonClass,button.classList],domProps:{innerHTML:t._s(button.label)},on:{click:function(e){return t.share(button.label)}}})})),0)])}),[],!1,null,"14f47107",null);e.default=component.exports},212:function(t,e,n){"use strict";var r=n(203);n.n(r).a},225:function(t,e,n){"use strict";n.r(e);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,title=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{src:t,alt:e,title:title}}var o={head:function(){return this.$createHeadFunction({title:"title",description:"Referencia de como usar componentes e classes"},null,this.$route.path,null)},data:function(){return{image:r([{src:"/images/page_1/section_1/mobile.png, /images/page_1/section_1/mobile@2x.png 2x",query:"(max-width: 1023px)"},{src:"/images/page_1/section_1/desktop.png, /images/page_1/section_1/desktop@2x.png 2x",query:""}],"Alternative text"),image2:r("/images/shared/success.svg","Success","Success"),slider_config:[{max_width:1024,config:{imagesLoaded:!1,cellAlign:"left",contain:!0,draggable:!0,freeScroll:!1,prevNextButtons:!1,pageDots:!0,wrapAround:!1,arrowShape:"M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",selectedAttraction:.01,friction:.15}},{max_width:9999,config:{imagesLoaded:!1,cellAlign:"center",initialIndex:1,contain:!0,draggable:!0,freeScroll:!1,prevNextButtons:!1,pageDots:!1,wrapAround:!1,arrowShape:"M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",selectedAttraction:.01,friction:.15}}]}}},l=(n(212),n(5)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home has-background-black is-clipped p-b-32 p-l-16 p-r-16"},[n("div",{staticClass:"container has-background-pink"},[t._m(0),t._v(" "),n("p",{staticClass:"has-text-purple"},[t._v("\n      Body text\n    ")]),t._v(" "),n("ResponsiveImage",{attrs:{sources:t.image.src,lazyload:!1,alt:t.image.alt}}),t._v(" "),n("LazyImage",{staticClass:"icon-image",attrs:{src:t.image2.src,alt:"",role:"presentation"}}),t._v(" "),n("section",{staticClass:"m-t-60 m-b-50"},[n("CardSlider",{staticClass:"m-b-50",attrs:{queries:t.slider_config}},t._l(10,(function(e){return n("div",{key:e,staticClass:"p-12"},[n("div",{staticClass:"generic-card"},[t._v("\n            "+t._s(e)+"\n          ")])])})),0)],1),t._v(" "),n("p",{staticClass:"has-text-purple m-t-96 m-b-96"},[t._v("\n      Body text\n    ")]),t._v(" "),n("iframe",{attrs:{src:"https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3",width:"300",height:"380",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}),t._v(" "),n("Share",{attrs:{"text-class":"has-text-yellow","button-class":"is-secondary"}}),t._v(" "),n("VideoFrame",{staticStyle:{height:"500px"},attrs:{"video-id":"5qap5aO4i9A"}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title has-text-purple"},[this._v("\n      HOME"),e("br"),this._v("Title text\n    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ResponsiveImage:n(209).default,LazyImage:n(89).default,CardSlider:n(210).default,Share:n(211).default,VideoFrame:n(208).default})}}]);
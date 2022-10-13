/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{202:function(e,t,n){},205:function(e,t,n){"use strict";var r=n(202);n.n(r).a},208:function(e,t,n){"use strict";n.r(t);var r=n(0);String.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)});var o=/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,d=/t=(\d+)[ms]?(\d+)?s?/;function l(e){var t=e.replace(o,"$1");if(t.includes(";")){var n=t.split(";");if(n[1].includes("%"))t=("http://youtube.com"+decodeURIComponent(n[1])).replace(o,"$1");else t=n[0]}else t.includes("#")&&(t=t.split("#")[0]);return t}function c(e){void 0===e&&(e="");var t=e.match(d);if(!t)return 0;var n=t[0],r=t[1],o=t[2];return void 0!==o?(o=parseInt(o,10),r=parseInt(r,10)):n.includes("m")?(r=parseInt(r,10),o=0):(o=parseInt(r,10),r=0),o+60*r}var y={scripts:[],events:{},run:function(){var e=this;this.scripts.forEach((function(t){t(e.YT)})),this.scripts=[]},register:function(e){var t=this;this.YT?this.Vue.nextTick((function(){e(t.YT)})):this.scripts.push(e)}},h=0,f={name:"YoutubeEmbed",props:{playerHeight:{type:[String,Number],default:"360"},playerWidth:{type:[String,Number],default:"640"},playerVars:{type:Object,default:function(){return{autoplay:0,time:0}}},videoId:{type:String},mute:{type:Boolean,default:!1},host:{type:String,default:"https://www.youtube.com"}},render:function(e){return e("div",[e("div",{attrs:{id:this.elementId}})])},template:'<div><div :id="elementId"></div></div>',watch:{playerWidth:"setSize",playerHeight:"setSize",videoId:"update",mute:"setMute"},data:function(){return{elementId:"youtube-player-"+(h+=1),player:{}}},methods:{setSize:function(){this.player.setSize(this.playerWidth,this.playerHeight)},setMute:function(e){e?this.player.mute():this.player.unMute()},update:function(e){var t=(this.playerVars.autoplay?"load":"cue")+"VideoById";this.player.hasOwnProperty(t)?this.player[t](e):setTimeout(function(){this.update(e)}.bind(this),100)}},mounted:function(){var e=this;y.register((function(t){var n=e,r=n.playerHeight,o=n.playerWidth,d=n.playerVars,l=n.videoId,c=n.host;e.player=new t.Player(e.elementId,{height:r,width:o,playerVars:d,videoId:l,host:c,events:{onReady:function(t){e.setMute(e.mute),e.$emit("ready",t)},onStateChange:function(t){-1!==t.data&&e.$emit(y.events[t.data],t)},onError:function(t){e.$emit("error",t)}}})}))},beforeDestroy:function(){null!==this.player&&this.player.destroy&&this.player.destroy(),delete this.player}},v={install:function(e,t){void 0===t&&(t={}),y.Vue=e,f.ready=f.mounted;var n=t.global;void 0===n&&(n=!0);var r=t.componentId;if(void 0===r&&(r="youtube"),n&&e.component(r,f),e.prototype.$youtube={getIdFromURL:l,getTimeFromURL:c},"undefined"!=typeof window&&"undefined"!=typeof document){var o=document.createElement("script");o.src="https://www.youtube.com/player_api";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(o,d),window.onYouTubeIframeAPIReady=function(){y.YT=YT;var e=YT.PlayerState;y.events[e.ENDED]="ended",y.events[e.PLAYING]="playing",y.events[e.PAUSED]="paused",y.events[e.BUFFERING]="buffering",y.events[e.CUED]="cued",y.Vue.nextTick((function(){y.run()}))}}}};r.a.use(v,{global:!1});var m={components:{Youtube:f},inheritAttrs:!1,props:{iframeStyle:{type:String},iframeClass:{type:String}},data:function(){return{wasStarted:!1}}},w=(n(205),n(5)),component=Object(w.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-frame wrapper"},[n("client-only",[n("youtube",e._g(e._b({staticClass:"yt-container",on:{playing:function(t){e.wasStarted=!0}}},"youtube",Object.assign({},e.$attrs),!1),e.$listeners)),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.wasStarted,expression:"!wasStarted"}],staticClass:"play-btn"},[n("svg",{attrs:{width:"82",height:"82",viewBox:"0 0 82 82",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"41",cy:"41",r:"39.5",fill:"#EFE1D3",stroke:"black","stroke-width":"3"}}),e._v(" "),n("path",{attrs:{d:"M51 42.5L36 51.5933L36 33.4067L51 42.5Z",fill:"black",stroke:"black","stroke-width":"3","stroke-linejoin":"round"}})])])],1)],1)}),[],!1,null,"2e1be752",null);t.default=component.exports}}]);
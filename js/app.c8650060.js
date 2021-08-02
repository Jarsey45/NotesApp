(function(t){function e(e){for(var o,a,i=e[0],l=e[1],s=e[2],u=0,f=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/NotesApp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"229c":function(t,e,n){"use strict";n("d01f")},"24c4":function(t,e,n){},"2a1d":function(t,e,n){"use strict";n("b245")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={id:"container"};function r(t,e,n,r,a,i){var l=Object(o["i"])("AddNote"),s=Object(o["i"])("Note");return Object(o["e"])(),Object(o["c"])("div",c,[Object(o["d"])(l,{id:"addNote",onAddNote:i.addNote},null,8,["onAddNote"]),(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(a.notes,(function(t){return Object(o["e"])(),Object(o["c"])(s,{key:t.id,title:t.title,content:t.content,color:t.color,id:t.id,class:["note-card",{starred:t.starred}],onDiscardNote:i.discardNote,onStarNote:i.starNote},null,8,["title","content","color","id","class","onDiscardNote","onStarNote"])})),128))])}n("4de4"),n("c740");var a=Object(o["m"])("data-v-3912f878");Object(o["g"])("data-v-3912f878");var i={class:"note-title"},l={class:"note-content"};Object(o["f"])();var s=a((function(t,e,n,c,r,a){return Object(o["e"])(),Object(o["c"])("div",{style:a.style},[Object(o["d"])("p",i,Object(o["j"])(n.title),1),Object(o["d"])("p",l,Object(o["j"])(n.content),1),Object(o["d"])("button",{onClick:e[1]||(e[1]=function(){return a.star&&a.star.apply(a,arguments)}),class:"starButton"},"Star"),Object(o["d"])("button",{onClick:e[2]||(e[2]=function(){return a.deletePost&&a.deletePost.apply(a,arguments)}),class:"discardButton"},"Discard")],4)})),d={props:["title","content","color","id"],computed:{style:function(){return"background-color:"+this.color}},methods:{deletePost:function(){this.$emit("discard-note",this.id)},star:function(){this.$emit("star-note",this.id)}}};n("b2cc");d.render=s,d.__scopeId="data-v-3912f878";var u=d,f=Object(o["m"])("data-v-5882d22e");Object(o["g"])("data-v-5882d22e");var b={id:"colors"};Object(o["f"])();var h=f((function(t,e,n,c,r,a){return Object(o["e"])(),Object(o["c"])("div",null,[Object(o["l"])(Object(o["d"])("input",{type:"text",placeholder:"Title",maxlength:"20","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.title=t}),style:{background:r.color}},null,4),[[o["k"],r.title]]),Object(o["l"])(Object(o["d"])("textarea",{name:"content",id:"",cols:"16",rows:"8",maxlength:"150",placeholder:"Your note content","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.content=t}),style:{background:r.color}},null,4),[[o["k"],r.content]]),Object(o["d"])("div",b,[(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(r.colors,(function(t,e){return Object(o["e"])(),Object(o["c"])("div",{class:["color",{active:t.active}],key:e,onClick:function(e){return a.chooseColor(t.hex)},style:{background:t.hex}},"   ",14,["onClick"])})),128))]),Object(o["d"])("button",{onClick:e[3]||(e[3]=function(){return a.getData&&a.getData.apply(a,arguments)}),class:"addButton"},"Add Note")])})),p=(n("159b"),{data:function(){return{title:"",content:"",color:"#FFD523",colors:[{hex:"#b5eaea",active:!1},{hex:"#edf6e5",active:!1},{hex:"#ffbcbc",active:!1},{hex:"#f38ba0",active:!1},{hex:"#515151",active:!1},{hex:"#baca21",active:!1}]}},methods:{getData:function(){var t=this.title,e=this.content,n=this.color;O({title:t,content:e,color:n})&&this.$emit("add-note",{title:t,content:e,color:n})},chooseColor:function(t){this.colors.forEach((function(t){t.active=!1}));var e=this.colors.findIndex((function(e){return e.hex===t}));this.colors[e].active=!0,this.color=t}}}),O=function(t){var e=t.title,n=t.content,o=t.color;return!(0===e.length||0===n.length||0===o.length||e.length>20||n.length>150)};n("229c");p.render=h,p.__scopeId="data-v-5882d22e";var v=p,j={data:function(){return{notes:new Array,lastId:0}},name:"App",components:{Note:u,AddNote:v},methods:{addNote:function(t){this.notes.push({id:this.lastId+1,title:t.title,content:t.content,color:t.color,starred:!1}),this.lastId++},discardNote:function(t){this.notes=this.notes.filter((function(e){return e.id!==t}))},starNote:function(t){var e=this.notes.findIndex((function(e){return e.id===t}));this.notes[e].starred=!this.notes[e].starred}},updated:function(){localStorage.setItem("notes",JSON.stringify(this.notes)),localStorage.setItem("lastId",this.lastId)},mounted:function(){Array.isArray(JSON.parse(localStorage.getItem("notes")))&&(this.notes=JSON.parse(localStorage.getItem("notes"))),null!==this.notes&&0===this.notes.length&&this.notes.push({id:0,title:"Welcome !",content:"Go ahead and try to add new note, you can discard this one too!",color:"#f38ba0",starred:!1}),this.lastId=localStorage.getItem("lastId")}};n("2a1d");j.render=r;var g=j;Object(o["b"])(g).mount("#app")},b245:function(t,e,n){},b2cc:function(t,e,n){"use strict";n("24c4")},d01f:function(t,e,n){}});
//# sourceMappingURL=app.c8650060.js.map
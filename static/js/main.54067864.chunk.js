(this.webpackJsonpcolor=this.webpackJsonpcolor||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=(a(12),a(13),a(3)),i=a(4),s=a(6),m=a(5);a(14);var u=function(e){return r.a.createElement("section",{className:"hexCode",id:"hexCode"},r.a.createElement("h2",{className:"main-text"},"Hex Color: ",e.data),r.a.createElement("h3",{className:"hex-color"},"Click the matching square"))},d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={correctRandomHex:"#"+Math.floor(16777215*Math.random()).toString(16),incorrectRandomHex:"#"+Math.floor(16777215*Math.random()).toString(16),wrong:"Wrong!",right:"Well done!"},e}return Object(i.a)(a,[{key:"render",value:function(){var e=Math.floor(2*Math.random());return 1===e?r.a.createElement("main",{className:"main"},r.a.createElement(u,{data:this.state.correctRandomHex}),r.a.createElement("section",{className:"row"},r.a.createElement("div",{className:"first",style:{background:this.state.correctRandomHex},onClick:function(){alert("Well done!")}}),r.a.createElement("div",{className:"second",style:{background:this.state.incorrectRandomHex},onClick:function(){alert("Wrong!.")}}))):0===e?r.a.createElement("main",{className:"main"},r.a.createElement(u,{data:this.state.correctRandomHex}),r.a.createElement("section",{className:"row"},r.a.createElement("div",{className:"first",style:{background:this.state.incorrectRandomHex},onClick:function(){alert("Wrong")}}),r.a.createElement("div",{className:"second",style:{background:this.state.correctRandomHex},onClick:function(){alert("Well done")}}))):void 0}}]),a}(n.Component);a(15);var h=function(){return r.a.createElement("button",{className:"btn",onClick:function(){return window.location.reload(!1)}},"Try Again")};a(16);var f=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("p",null,"Guessing Game"))};var E=function(){return r.a.createElement("div",{className:"main-app"},r.a.createElement(f,null),r.a.createElement(d,null),r.a.createElement(h,null))};var v=function(){return r.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.54067864.chunk.js.map
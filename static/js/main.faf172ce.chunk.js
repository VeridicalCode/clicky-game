(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,function(e,t,c){e.exports=c(21)},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){e.exports=c.p+"static/media/inst-1.d87108f6.jpg"},function(e,t,c){e.exports=c.p+"static/media/inst-2.e91774bc.jpg"},function(e,t,c){e.exports=c.p+"static/media/inst-3.6507cbae.jpg"},function(e,t,c){e.exports=c.p+"static/media/inst-4.a106513e.jpg"},function(e,t,c){e.exports=c.p+"static/media/inst-5.2ea406dd.jpg"},function(e,t,c){e.exports=c.p+"static/media/inst-6.81476073.jpg"},function(e,t,c){e.exports=c.p+"static/media/inst-7.ae346fd0.jpg"},function(e,t,c){e.exports=c.p+"static/media/inst-8.3062609d.jpg"},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(3),l=c.n(r),i=(c(10),c(4)),o=Object(i.createGlobalState)({score:0,topScore:0}),s=o.GlobalStateProvider,u=o.setGlobalState,f=o.useGlobalState,p=(c(11),c(1));var d=function(e){var t=f("score"),c=Object(p.a)(t,1)[0],n=f("topScore"),r=Object(p.a)(n,1)[0];return a.a.createElement("div",null,a.a.createElement("h1",null,"Welcome to Instrumental Memory!"),a.a.createElement("br",null),a.a.createElement("span",null,"Click the images to increase your score, but don't click the same one twice, or you'll lose!"),a.a.createElement("br",null),a.a.createElement("span",null,"current score = ",c),a.a.createElement("br",null),a.a.createElement("span",null,"top score = ",r))},m=function(e){for(var t,c,n=e.length;0!==n;)c=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[c],e[c]=t},k=[{src:c(12),key:1,clicked:"false"},{src:c(13),key:2,clicked:"false"},{src:c(14),key:3,clicked:"false"},{src:c(15),key:4,clicked:"false"},{src:c(16),key:5,clicked:"false"},{src:c(17),key:6,clicked:"false"},{src:c(18),key:7,clicked:"false"},{src:c(19),key:8,clicked:"false"}];c(20);var b=function(e){return a.a.createElement("img",{value:e.value,src:e.src,alt:e.alt,clicked:e.clicked})};var g=function(){var e=f("score"),t=Object(p.a)(e,1)[0],c=f("topScore"),r=Object(p.a)(c,1)[0],l=Object(n.useState)(k),i=Object(p.a)(l,2),o=i[0],s=i[1];return a.a.createElement("div",null,a.a.createElement("div",null,o.map((function(e,c){return a.a.createElement("a",{value:c,href:"./",clicked:e.clicked,onClick:function(e){if(e.preventDefault(),"true"===e.currentTarget.getAttribute("clicked")){alert("You already clicked that instrument. Resetting game."),t>r&&(a=t,u("topScore",(function(e){return a})));var c=o;!function(e){for(var t=0;t<e.length;t++)e[t].clicked="false"}(c),m(c),s(c),u("score",(function(e){return 0}))}else{var n=o;!function(e,t){e[t].clicked="true"}(n,e.currentTarget.getAttribute("value")),m(n),s(n),u("score",(function(e){return e+1}))}var a}},a.a.createElement(b,{src:e.src}))}))))};var v=function(){return a.a.createElement(s,null,a.a.createElement(d,null),a.a.createElement(g,null))};l.a.render(a.a.createElement(v,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.faf172ce.chunk.js.map
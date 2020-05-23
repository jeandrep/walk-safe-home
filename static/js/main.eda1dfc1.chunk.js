(this["webpackJsonpwalksafe-home"]=this["webpackJsonpwalksafe-home"]||[]).push([[0],{75:function(e,t,a){e.exports=a(88)},80:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(80),a(30)),i=a(65),s=a(134),m=a(135),u=a(144),d=a(145),h=a(46),E=a(148),p=a(133),b=a(48),f=a.n(b),g=a(137),v=a(49),w=a.n(v),y=a(64),x=a.n(y),k=a(150),N=a(147),S=a(140),j=a(141),C=a(142),O=a(143),I=a(63),T=a.n(I),B=a(59),D=a(146),W=a(62),F=a.n(W),R=a(136),A=a(151),G=a(138),P=function(e){return l.a.createElement(E.a,Object.assign({elevation:6,variant:"filled"},e))},H=Object(i.a)({palette:{background:{default:"#F44335"},primary:F.a,secondary:{main:"#F44335"}}}),L=Object(s.a)((function(e){return{root:{flexGrow:1,height:"100%",textAlign:"center",backgroundColor:"#F44335"},menuButton:{},title:{flexGrow:1},callInput:{width:"80%",textAlign:"center"},alertText:{color:"red"},directions:{fontWeight:"bolder",marginTop:"10px"},helpDrawer:{width:"100%",height:"100%",padding:"40px",backgroundColor:"#F44335"},settingsDrawer:{width:"100%",height:"100%",padding:"40px",backgroundColor:"#F44335"},appBar:{},panicButton:{marginTop:"70%",width:"300px",height:"300px",fontSize:"190px"},panicButtonText:{marginTop:"-30px"},hidden:{visibility:"hidden"},divider:{marginTop:"20px",marginBottom:"20px"},links:{textDecoration:"none"}}})),M=function(){var e=L(),t=a(84),r=Object(n.useState)(!1),c=Object(o.a)(r,2),i=c[0],s=c[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),v=b[0],y=b[1],I=Object(n.useState)("911"),W=Object(o.a)(I,2),F=W[0],M=W[1],z=Object(n.useState)(!1),J=Object(o.a)(z,2),U=J[0],V=J[1],$=Object(n.useState)(["No Texting Numbers Stored!"]),q=Object(o.a)($,2),K=q[0],Q=q[1];Object(n.useEffect)((function(){null!=t("wsh-call")&&M(t.get("wsh-call")),null!=t("wsh-text")&&Q(t.get("wsh-text").split(","))}),[]);var X=function(e,t){"clickaway"!==t&&V(!1)};return l.a.createElement(m.a,{theme:H},l.a.createElement(R.a,null),l.a.createElement(k.a,{anchor:"left",className:e.helpDrawer,open:v,onClose:function(){y(!1)}},l.a.createElement("div",{className:e.helpDrawer},l.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start"},l.a.createElement(p.a,{onClick:function(){y(!1)}},l.a.createElement(f.a,null)),l.a.createElement(h.a,{variant:"h3"},"Welcome to WalkSafe \u2302")),l.a.createElement(G.a,{className:e.divider}),l.a.createElement(h.a,{variant:"body1"},"WalkSafe \u2302 is a personal safety app that calls and texts your emergency contacts with the click of just one button! ",l.a.createElement("br",null),"When the panic button is clicked, one contact of your choice will be called from your phone. ",l.a.createElement("br",null),"In addition, up to 10 other numbers will be texted an SOS message automatically from our service about you. ",l.a.createElement("br",null),"To edit the number to call/text automatically, click on the settings gear (",l.a.createElement(w.a,null),") on the top right of the screen. ",l.a.createElement("br",null)),l.a.createElement(G.a,{className:e.divider}),l.a.createElement(h.a,{variant:"body2"},"Made with \u2665 by Shrey Ravi",l.a.createElement("br",null),"WalkSafe \u2302 is not a replacement for law enforcement/safety",l.a.createElement("br",null),l.a.createElement("a",{className:e.links,href:"https://www.shreyravi.com/contact.html"},"Contact")," | ",l.a.createElement("a",{className:e.links,href:"#"},"Legal")," | ",l.a.createElement("a",{className:e.links,href:"https://github.com/ShreyRavi/walk-safe-home"},"GitHub")," | ",l.a.createElement("a",{className:e.links,href:"https://github.com/ShreyRavi/walk-safe-home/commit/cdab0072a54bd6e8f479ee4489367fb4d9f66eed"},"Version 2")))),l.a.createElement(k.a,{anchor:"right",className:e.settingsDrawer,open:i,onClose:function(){s(!1)}},l.a.createElement("div",{className:e.settingsDrawer},l.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start"},l.a.createElement(p.a,{onClick:function(){s(!1)}},l.a.createElement(f.a,null)),l.a.createElement(h.a,{variant:"h3"},"WalkSafe \u2302 Settings")),l.a.createElement(G.a,{className:e.divider}),l.a.createElement(h.a,{className:e.directions,variant:"body2"},"Enter number to call:",l.a.createElement("br",null)),l.a.createElement(N.a,{className:e.callInput,onInput:function(e){/^\d+$/.test(e.target.value)&&(M(e.target.value),t.set("wsh-call",e.target.value))},id:"CallInput",label:"Emergency Number to Call \u260e",variant:"outlined",value:F,inputProps:{style:{textAlign:"center"}}}),l.a.createElement(G.a,{className:e.divider}),l.a.createElement(h.a,{className:e.directions,variant:"body2"},"Enter number(s) to text:",l.a.createElement("br",null)),l.a.createElement(N.a,{className:e.callInput,onInput:function(e){Q(e.target.value.split(",")),t.set("wsh-text",e.target.value)},id:"TextInput",label:"Emergency Number(s) to Text \ud83d\udcf1",variant:"outlined",value:K.join(),inputProps:{style:{textAlign:"center"}}}),l.a.createElement(h.a,{variant:"body2"},"seperate each number with a comma",l.a.createElement("br",null),'e.g. "4408379929,7739939992"',l.a.createElement("br",null)),l.a.createElement(G.a,{className:e.divider}),l.a.createElement(h.a,{variant:"body2"},"Numbers texted when the panic button pressed:"),l.a.createElement(S.a,{dense:!0},K.map((function(e){return l.a.createElement(j.a,null,l.a.createElement(C.a,null,l.a.createElement(T.a,null)),l.a.createElement(O.a,{primary:e}))}))),l.a.createElement(G.a,{className:e.divider}),l.a.createElement(h.a,{variant:"body2"},"Made with \u2665 by Shrey Ravi",l.a.createElement("br",null),"WalkSafe \u2302 is not a replacement for law enforcement/safety",l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.shreyravi.com/contact.html"},"Contact")," | ",l.a.createElement("a",{href:"#"},"Legal")," | ",l.a.createElement("a",{href:"https://github.com/ShreyRavi/walk-safe-home"},"GitHub")," | ",l.a.createElement("a",{href:"https://github.com/ShreyRavi/walk-safe-home/commit/cdab0072a54bd6e8f479ee4489367fb4d9f66eed"},"Version 2")))),l.a.createElement(u.a,{className:e.appBar,position:"fixed",color:"primary"},l.a.createElement(d.a,null,l.a.createElement(p.a,{edge:"start",className:e.helpButton,color:"inherit","aria-label":"menu",onClick:function(){y(!0)}},l.a.createElement(x.a,null)),l.a.createElement(h.a,{variant:"h4",className:e.title},l.a.createElement("center",null," WalkSafe \u2302 ")),l.a.createElement(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){s(!0)}},l.a.createElement(w.a,null)))),l.a.createElement(g.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},l.a.createElement(B.a,{render:function(t){t.fetchingPosition;var a=t.position,n=(a=void 0===a?{}:a).coords,r=(n=void 0===n?{}:n).latitude,c=n.longitude,o=t.error,i=t.getCurrentPosition;return l.a.createElement("div",null,l.a.createElement(D.a,{className:e.panicButton,size:"large",variant:"round",color:"primary",onClick:function(){i(),V(!0),window.location.href="tel://"+F}},l.a.createElement("div",{className:e.panicButtonText},"\u2302")),U?l.a.createElement(A.a,{open:U,autoHideDuration:15e3,onClose:X},l.a.createElement(P,{onClose:X,severity:"success"},"Panic button pressed, help texts sent to selected numbers!")):l.a.createElement("div",null),o&&l.a.createElement(A.a,{open:U,onClose:X,autoHideDuration:15e3},l.a.createElement(P,{onClose:X,severity:"error"},o.message)),l.a.createElement(h.a,{className:e.hidden,variant:"body2"},"LATITUDE:  ",parseFloat(r).toFixed(4),l.a.createElement("br",null),"LONGITUDE: ",parseFloat(c).toFixed(4)))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.eda1dfc1.chunk.js.map
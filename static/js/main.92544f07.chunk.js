(this["webpackJsonptwitch-dashboard"]=this["webpackJsonptwitch-dashboard"]||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(0),r=n.n(c),i=n(9),s=n.n(i),o=(n(85),n(40)),l=n(35),j=n(36),u=n(4),d=n(72),h=n(129),b=n(95),O=n(130),p=n(131),f=n(132),x=n(133),g=n(134),w=n(41),y=n(96),v=n(135),m=n(136),C=n(144),S=n(137),k=n(138),V=n(139),I=n(143),T=n(140),L=n(141),z=n(142),B=n(128),E=n(70),N=n.n(E),R=n(69),F=n.n(R),M=n(67),A=n.n(M),D=n(68),J=n.n(D),P=n(71),W=n(65),q=n.n(W),Y=(n(86),{key:"moderators",display:"Moderators"}),_={key:"vips",display:"VIPs"},G={key:"viewers",display:"Viewers"},H=Object(u.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(a.jsx)(d.a,Object(j.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),K=function(e,t){return e.localeCompare(t)},Q=Object(h.a)((function(e){return{toolbar:{display:"flex",justifyContent:"space-between"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightBold}}}));var U=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)("LindseyRooney"),s=Object(l.a)(i,2),u=s[0],d=s[1],h=Object(c.useState)("LindseyRooney"),E=Object(l.a)(h,2),R=E[0],M=E[1],D=Object(c.useState)(new Set),W=Object(l.a)(D,2),U=W[0],X=W[1],Z=Object(c.useState)(!0),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=function(e){r(null===n?e.target:null)},ae=Object(P.a)(["chatters",u],(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.keys(e).reduce((function(t,n){return(e[n]||[]).forEach((function(e){t.add(e)})),t}),new Set);X(t)}(ce?ce.chatters:{}),q()("https://tmi.twitch.tv/group/user/".concat(u.toLowerCase(),"/chatters")).then((function(e){return e.json()})).then((function(e){return console.log("JSON",e),e.data}))}),{enabled:u&&""!==u&&ee,refetchInterval:2e4}),ce=ae.data,re=ae.isLoading,ie=ae.refetch,se=function(e,t){return Object(a.jsxs)(b.a,{children:[t&&Object(a.jsx)(O.a,{children:Object(a.jsx)(A.a,{color:"primary"})}),Object(a.jsx)(p.a,{primary:e})]},e)},oe=function(e){var t=e.key,n=e.display;if(!ce||!ce.chatters)return null;var c=ce.chatters[t]||[];if(0===c.length)return null;var r=c.reduce((function(e,t){return U.size>0&&!U.has(t)?Object(j.a)(Object(j.a)({},e),{},{newViewers:[].concat(Object(o.a)(e.newViewers),[t])}):Object(j.a)(Object(j.a)({},e),{},{currentViewers:[].concat(Object(o.a)(e.currentViewers),[t])})}),{newViewers:[],currentViewers:[]}),i=r.newViewers,s=r.currentViewers,l="viewers"===t&&s.length>100;if(0===i.length&&(0===s.length||l))return null;i.sort(K),s.sort(K);var u=i.map((function(e){return se(e,!0)})),d=l?[]:s.map((function(e){return se(e,!1)}));return[Object(a.jsx)(f.a,{style:{backgroundColor:"white"},children:n},n)].concat(Object(o.a)(u),Object(o.a)(d))},le=ce?ce.chatter_count:"?",je=Q();return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"TwitchChannel",children:[Object(a.jsxs)(x.a,{position:"static",children:[Object(a.jsxs)(g.a,{className:je.toolbar,children:[Object(a.jsx)(w.a,{variant:"h6",children:"Twitch Dashboard"}),Object(a.jsx)(y.a,{edge:"end","aria-label":"settings","aria-controls":"app-settings","aria-haspopup":"true",onClick:ne,color:"inherit",children:Object(a.jsx)(J.a,{})}),Object(a.jsxs)(H,{id:"settings-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:ne,children:[Object(a.jsx)(v.a,{children:Object(a.jsx)(m.a,{control:Object(a.jsx)(C.a,{checked:ee,disabled:!u,onChange:function(){te(!ee)},name:"autoRefresh",color:"primary"}),label:"Auto refresh ".concat(ee?"enabled":"disabled")})}),Object(a.jsx)(S.a,{}),Object(a.jsxs)(v.a,{disabled:!u,onClick:ie,children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(F.a,{fontSize:"small"})}),Object(a.jsx)(p.a,{primary:"Refresh Now"})]})]})]}),re&&Object(a.jsx)(k.a,{variant:"query"})]}),Object(a.jsxs)(V.a,{container:!0,alignItems:"center",justify:"center",spacing:1,style:{padding:"10px"},children:[Object(a.jsx)(V.a,{item:!0,xs:12,children:Object(a.jsxs)(I.a,{defaultExpanded:!0,children:[Object(a.jsx)(T.a,{expandIcon:Object(a.jsx)(N.a,{}),children:Object(a.jsxs)(w.a,{variant:"h6",children:[u," Channel Members (",le,")"]})}),Object(a.jsxs)(L.a,{style:{display:"flex",flexDirection:"column"},children:[Object(a.jsx)(z.a,{fullWidth:!0,label:"Your Twitch Channel",onBlur:function(){d(R),X(new Set)},onChange:function(e){M(e.target.value)},value:R,variant:"outlined"}),Object(a.jsx)(w.a,{align:"center",variant:"caption",style:{marginTop:"15px"},children:"If you have over 100 viewers, only new viewers will be shown."})]})]})}),Object(a.jsx)(V.a,{item:!0,xs:12,children:Object(a.jsxs)(B.a,{dense:!0,children:[oe(G),oe(_),oe(Y)]})})]})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),X()}},[[93,1,2]]]);
//# sourceMappingURL=main.92544f07.chunk.js.map
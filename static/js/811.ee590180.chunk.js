"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[811],{5904:(e,t,i)=>{i.d(t,{Z:()=>r});i(2791);var s=i(890),n=i(184);const r=()=>(0,n.jsxs)(s.Z,{variant:"body2",color:"white",align:"center",sx:{pb:3},children:["\xa9 ",(new Date).getFullYear()," Jinghan Wang. All rights reserved."]})},7185:(e,t,i)=>{i.d(t,{M:()=>s});const s=(0,i(2791).createContext)({disabled:!1,handleClickOpen:()=>{0}})},7466:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var s=i(2791),n=i(8921),r=i(9256),o=i(7630),a=i(3400),l=i(3060),c=i(7621),d=i(9585),h=i(7924),x=i(9504),p=i(2169),g=i(890),u=i(6125),m=i(493),j=i(4852),Z=i(6259),f=i(2363),b=i(6151),v=i(1131),y=i(7267),k=i(7185),w=i(989),C=i(5717),S=(i(3037),i(8688),i(184));const z=(0,o.ZP)(n.Z)({display:"flex!important",width:"100%",justifyContent:"center"}),H=e=>{const{imageHeight:t}=(0,s.useContext)(w.l),i=(0,o.ZP)("img")({height:t-23}),n={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,style:{height:t-23,width:"80%",margin:"0 auto"}};return(0,S.jsx)(C.Z,{...n,children:e.list.map(((e,t)=>(0,S.jsx)(z,{children:(0,S.jsx)(i,{src:"/static/images/projects/".concat(e)})},t)))})},P=(0,o.ZP)((e=>{const{expand:t,...i}=e;return(0,S.jsx)(a.Z,{...i})}))((e=>{let{theme:t,expand:i}=e;return{transform:i?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),T=e=>e.split("#").map(((e,t)=>e.startsWith(":b")?(0,S.jsx)("b",{children:e.slice(2)},t):e.startsWith(":i")?(0,S.jsx)("i",{children:e.slice(2)},t):e.startsWith(":a")?(0,S.jsx)(l.Z,{href:e.slice(2).split("[")[1].split("]")[0],target:"_blank",children:e.slice(2).split("[")[0]},t):(0,S.jsx)("span",{children:e},t))),W=e=>{var t,i;const{disabled:o,handleClickOpen:a}=s.useContext(k.M),[l,C]=s.useState(!1),{height:z}=s.useContext(w.H),W=(0,s.useRef)(null),A=(0,s.useRef)(null),[_,F]=s.useState(0),{content:O}=(0,s.useContext)(r.A),R=(0,s.useRef)();(0,s.useEffect)((()=>{F(l?(z>800?.33:.25)*z:z>800?140:100)}),[l,z]);return(0,S.jsx)(n.Z,{sx:{p:z>800?2:1,boxSizing:"border-box"},ref:R,children:(0,S.jsxs)(c.Z,{sx:{mb:3},children:[(0,S.jsx)(d.Z,{avatar:(0,S.jsx)("img",{src:"/static/images/logo/".concat(e.logo),style:{height:"20px",width:"auto",margin:0,padding:0},alt:"react logo"}),title:e.type,sx:{color:"black"}}),(0,S.jsx)(h.Z,{}),(0,S.jsx)(x.Z,{children:(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(p.Z,{sx:{height:_,width:"100%",display:"flex",justifyContent:"center",transition:"height 0.3s ease-in-out",alignItems:"center"},ref:A,children:(0,S.jsx)(w.l.Provider,{value:{imageHeight:_},children:l?(0,S.jsx)(H,{list:e.image.slice(1)}):(0,S.jsx)("img",{src:"/static/images/projects/".concat(e.image[0]),style:{height:e.imageSize},alt:"logo"})})}),(0,S.jsxs)(x.Z,{ref:W,children:[(0,S.jsx)(g.Z,{gutterBottom:!0,variant:"h4",component:"div",children:e.title}),(0,S.jsx)(g.Z,{variant:"body2",color:"text.secondary",children:T(e.description)})]}),(0,S.jsx)(u.Z,{in:l,timeout:"auto",unmountOnExit:!0,children:(0,S.jsx)(x.Z,{sx:{height:z-270-(null!==(t=null===(i=W.current)||void 0===i?void 0:i.clientHeight)&&void 0!==t?t:0)-_,overflowY:"auto"},children:e.content.map(((e,t)=>"text"===e.type?(0,S.jsx)(g.Z,{color:"text.secondary",sx:{mb:1},children:T(e.content)},t):"title"===e.type?(0,S.jsx)(g.Z,{gutterBottom:!0,variant:"h6",sx:{fontWeight:600,fontFamily:"Arial"},children:T(e.content)},t):"list"===e.type?(0,S.jsx)(m.Z,{children:e.content.map(((e,i)=>(0,S.jsxs)(j.ZP,{sx:{p:.5},children:[(0,S.jsx)(y.Z,{sx:{fontSize:10,mr:1,color:"text.secondary"}}),(0,S.jsx)(Z.Z,{sx:{color:"text.secondary"},children:T(e)})]},"".concat(t,"-").concat(i))))},t):(0,S.jsx)(S.Fragment,{})))})}),(0,S.jsxs)(f.Z,{disableSpacing:!0,children:[e.link&&(0,S.jsx)(b.Z,{size:"small",onClick:()=>(async e=>{o?window.open(e,"_blank"):a(e)})(e.link),children:O.website}),e.repo&&(0,S.jsx)(b.Z,{size:"small",href:e.repo,target:"_blank",children:O.source}),e.paper&&(0,S.jsx)(b.Z,{size:"small",href:e.paper,target:"_blank",children:O.paper}),(0,S.jsx)(P,{expand:l,onClick:()=>{C(!l),setTimeout((()=>{var e;R.current&&window.scrollTo({top:(null===(e=R.current)||void 0===e?void 0:e.offsetTop)-80,behavior:"smooth"})}),300),document.body.style.overflow=l?"":"hidden"},"aria-expanded":l,"aria-label":"show more",children:(0,S.jsx)(v.Z,{})})]})]})})]})})};var A=i(5904);const _=()=>{const{content:e}=(0,s.useContext)(r.A);return(0,S.jsxs)(n.Z,{height:"calc(100vh - 80px",children:[e.project.map(((e,t)=>(0,S.jsx)(W,{logo:e.logo,type:e.type,title:e.title,description:e.description,content:e.content,link:e.link,repo:e.repo,paper:e.paper,image:e.image,imageSize:e.imageSize},t))),(0,S.jsx)(A.Z,{})]})}}}]);
//# sourceMappingURL=811.ee590180.chunk.js.map
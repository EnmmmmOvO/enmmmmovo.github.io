"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[723],{6585:(e,t,i)=>{i.d(t,{Z:()=>o});i(2791);var s=i(890),n=i(184);const o=()=>(0,n.jsxs)(s.Z,{variant:"body2",color:"white",align:"center",sx:{pb:3},children:["\xa9 ",(new Date).getFullYear()," Jinghan Wang. All rights reserved."]})},475:(e,t,i)=>{i.d(t,{r8:()=>A,ZP:()=>T});var s=i(2791),n=i(7630),o=i(3400),r=i(3060),a=i(8921),l=i(7621),c=i(9585),d=i(7924),h=i(9504),x=i(2169),p=i(890),g=i(6125),m=i(493),j=i(4852),u=i(6259),Z=i(2363),b=i(6151),f=i(1131),v=i(7267),y=i(163),w=i(361),k=i(8737),C=i(5717),z=(i(3037),i(8688),i(184));const S=(0,n.ZP)(a.Z)({display:"flex!important",width:"100%",justifyContent:"center",cursor:"pointer"}),_=e=>{const{imageHeight:t}=(0,s.useContext)(w.l),i=(0,n.ZP)("img")({height:t-23}),o={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,autoplay:!0,style:{height:t-23,width:"80%",margin:"0 auto"}};return(0,z.jsx)(C.Z,{...o,children:e.list.map(((e,t)=>(0,z.jsx)(S,{children:(0,z.jsx)(i,{src:"/static/images/projects/".concat(e),onClick:()=>window.open("/static/images/projects/".concat(e),"_blank")})},t)))})};var H=i(3448);const P=(0,n.ZP)((e=>{const{expand:t,...i}=e;return(0,z.jsx)(o.Z,{...i})}))((e=>{let{theme:t,expand:i}=e;return{transform:i?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),A=e=>e.split("#").map(((e,t)=>e.startsWith(":b")?(0,z.jsx)("b",{children:e.slice(2)},t):e.startsWith(":i")?(0,z.jsx)("i",{children:e.slice(2)},t):e.startsWith(":a")?(0,z.jsx)(r.Z,{href:e.slice(2).split("[")[1].split("]")[0],target:"_blank",children:e.slice(2).split("[")[0]},t):(0,z.jsx)("span",{children:e},t))),T=e=>{var t,i;const{disabled:n,handleClickOpen:o}=(0,s.useContext)(y.M),[r,C]=(0,s.useState)(!1),{height:S}=(0,s.useContext)(w.H),[T,W]=(0,s.useState)(0),{content:F}=(0,s.useContext)(k.A),L=(0,s.useRef)(),B=(0,s.useRef)(null),O=(0,s.useRef)(null);(0,s.useEffect)((()=>{W(r?(S>800?.33:.25)*S:S>800?140:100)}),[r,S]);return(0,z.jsx)(a.Z,{sx:{p:S>800?2:1,boxSizing:"border-box"},ref:L,children:(0,z.jsxs)(l.Z,{sx:{mb:3},children:[(0,z.jsx)(c.Z,{avatar:(0,z.jsx)("img",{src:"/static/images/logo/".concat(e.logo),style:{height:"20px",width:"auto",margin:0,padding:0},alt:"react logo"}),title:e.type,sx:{color:"black"}}),(0,z.jsx)(d.Z,{}),(0,z.jsx)(h.Z,{children:(0,z.jsxs)(l.Z,{children:[(0,z.jsx)(x.Z,{sx:{height:T,width:"100%",display:"flex",justifyContent:"center",transition:"height 0.3s ease-in-out",alignItems:"center"},ref:O,children:(0,z.jsx)(w.l.Provider,{value:{imageHeight:T},children:r?(0,z.jsx)(_,{list:e.image.slice(1)}):(0,z.jsx)("img",{src:"/static/images/projects/".concat(e.image[0]),style:{height:e.imageSize},alt:"logo"})})}),(0,z.jsxs)(h.Z,{ref:B,children:[(0,z.jsx)(p.Z,{gutterBottom:!0,variant:"h4",component:"div",children:e.title}),(0,z.jsx)(p.Z,{variant:"body2",color:"text.secondary",children:A(e.description)})]}),(0,z.jsx)(g.Z,{in:r,timeout:"auto",unmountOnExit:!0,children:(0,z.jsx)(h.Z,{sx:{height:S-270-(null!==(t=null===(i=B.current)||void 0===i?void 0:i.clientHeight)&&void 0!==t?t:0)-T,overflowY:"auto"},children:e.content.map(((e,t)=>"text"===e.type?(0,z.jsx)(p.Z,{color:"text.secondary",sx:{mb:1},children:A(e.content)},t):"title"===e.type?(0,z.jsx)(p.Z,{gutterBottom:!0,variant:"h6",sx:{fontWeight:600,fontFamily:"Arial"},children:A(e.content)},t):"list"===e.type?(0,z.jsx)(m.Z,{children:e.content.map(((e,i)=>(0,z.jsxs)(j.ZP,{sx:{p:.5},children:[(0,z.jsx)(v.Z,{sx:{fontSize:10,mr:1,color:"text.secondary"}}),(0,z.jsx)(u.Z,{sx:{color:"text.secondary"},children:A(e)})]},"".concat(t,"-").concat(i))))},t):(0,z.jsx)(z.Fragment,{})))})}),(0,z.jsxs)(Z.Z,{disableSpacing:!0,children:[e.link&&(0,z.jsx)(b.Z,{size:"small",onClick:()=>(async e=>{n?window.open(e,"_blank"):o(e)})(e.link),children:F.website}),e.repo&&(0,z.jsx)(b.Z,{size:"small",href:e.repo,target:"_blank",children:F.source}),e.paper&&(0,z.jsx)(b.Z,{size:"small",href:H.L+e.paper,target:"_blank",children:F.paper}),(0,z.jsx)(P,{expand:r,onClick:()=>{C(!r),setTimeout((()=>{var e;L.current&&window.scrollTo({top:(null===(e=L.current)||void 0===e?void 0:e.offsetTop)-80,behavior:"smooth"})}),300),document.body.style.overflow=r?"":"hidden"},"aria-expanded":r,"aria-label":"show more",children:(0,z.jsx)(f.Z,{})})]})]})})]})})}},163:(e,t,i)=>{i.d(t,{M:()=>s});const s=(0,i(2791).createContext)({disabled:!1,handleClickOpen:()=>{0}})},7230:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var s=i(2791),n=i(8921),o=i(6585),r=i(361),a=i(8737),l=i(475),c=i(7621),d=i(9585),h=i(7924),x=i(9504),p=i(2169),g=i(890),m=i(2363),j=i(6151),u=i(3448),Z=i(184);const b=e=>{const{height:t}=(0,s.useContext)(r.H),{content:i}=(0,s.useContext)(a.A);return(0,Z.jsx)(n.Z,{sx:{p:t>800?2:1,boxSizing:"border-box"},children:(0,Z.jsxs)(c.Z,{sx:{mb:3},children:[(0,Z.jsx)(d.Z,{avatar:(0,Z.jsx)("img",{src:"/static/images/logo/".concat(e.logo),style:{height:"20px",width:"auto",margin:0,padding:0},alt:"react logo"}),title:e.type,sx:{color:"black"}}),(0,Z.jsx)(h.Z,{}),(0,Z.jsx)(x.Z,{children:(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(p.Z,{sx:{height:t>800?200:160,width:"100%",display:"flex",justifyContent:"center",transition:"height 0.3s ease-in-out",alignItems:"center"},children:(0,Z.jsx)("img",{src:"/static/images/projects/portfolio/".concat(e.image),style:{width:"100%",height:"100%",objectFit:"cover",cursor:"pointer"},alt:"logo",onClick:()=>window.open("/static/images/projects/portfolio/".concat(e.image),"_blank")})}),(0,Z.jsxs)(x.Z,{children:[(0,Z.jsx)(g.Z,{gutterBottom:!0,variant:"h4",component:"div",children:e.title}),(0,Z.jsx)(g.Z,{variant:"body2",color:"text.secondary",children:(0,l.r8)(e.description)})]}),(0,Z.jsxs)(m.Z,{disableSpacing:!0,children:[e.repo&&(0,Z.jsx)(j.Z,{size:"small",href:e.repo,target:"_blank",children:i.source}),e.paper&&(0,Z.jsx)(j.Z,{size:"small",href:u.L+e.paper,target:"_blank",children:i.paper}),e.video&&(0,Z.jsx)(j.Z,{size:"small",href:e.video,target:"_blank",children:i.video})]})]})})]})})},f=()=>{const{content:e}=(0,s.useContext)(a.A);return(0,Z.jsxs)(n.Z,{height:"calc(100vh - 80px)",children:[e.portfolio.map(((e,t)=>(0,Z.jsx)(b,{logo:e.logo,type:e.type,title:e.title,video:e.video,description:e.description,content:e.content,paper:e.paper,repo:e.repo,imageSize:e.imageSize,image:e.image},t))),(0,Z.jsx)(o.Z,{})]})}},3448:(e,t,i)=>{i.d(t,{L:()=>s});const s="https://enmmmmovo.cloudns.be/"}}]);
//# sourceMappingURL=723.1002b093.chunk.js.map
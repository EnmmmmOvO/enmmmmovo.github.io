"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[723],{6585:(e,t,i)=>{i.d(t,{Z:()=>o});i(2791);var s=i(890),n=i(184);const o=()=>(0,n.jsxs)(s.Z,{variant:"body2",color:"white",align:"center",sx:{pb:3},children:["\xa9 ",(new Date).getFullYear()," Jinghan Wang. All rights reserved."]})},475:(e,t,i)=>{i.d(t,{r8:()=>A,ZP:()=>L});var s=i(2791),n=i(7630),o=i(3400),r=i(3060),l=i(8921),a=i(7621),c=i(9585),d=i(7924),h=i(9504),p=i(2169),x=i(890),g=i(6125),m=i(493),j=i(4852),u=i(6259),Z=i(2363),b=i(1333),f=i(6151),v=i(1131),y=i(7267),w=i(163),k=i(361),C=i(8737),S=i(5717),z=(i(3037),i(8688),i(184));const _=(0,n.ZP)(l.Z)({display:"flex!important",width:"100%",justifyContent:"center",cursor:"pointer"}),P=e=>{const{imageHeight:t}=(0,s.useContext)(k.l),i=(0,n.ZP)("img")({height:t-23}),o={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,autoplay:!0,style:{height:t-23,width:"80%",margin:"0 auto"}};return(0,z.jsx)(S.Z,{...o,children:e.list.map(((e,t)=>(0,z.jsx)(_,{children:(0,z.jsx)(i,{src:"/static/images/projects/".concat(e),onClick:()=>window.open("/static/images/projects/".concat(e),"_blank")})},t)))})};var H=i(3448);const W=(0,n.ZP)((e=>{const{expand:t,...i}=e;return(0,z.jsx)(o.Z,{...i})}))((e=>{let{theme:t,expand:i}=e;return{transform:i?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),A=e=>e.split("#").map(((e,t)=>e.startsWith(":b")?(0,z.jsx)("b",{children:e.slice(2)},t):e.startsWith(":i")?(0,z.jsx)("i",{children:e.slice(2)},t):e.startsWith(":a")?(0,z.jsx)(r.Z,{href:e.slice(2).split("[")[1].split("]")[0],target:"_blank",children:e.slice(2).split("[")[0]},t):(0,z.jsx)("span",{children:e},t))),L=e=>{var t,i;const{disabled:n,handleClickOpen:o}=(0,s.useContext)(w.M),[r,S]=(0,s.useState)(!1),{height:_}=(0,s.useContext)(k.H),[L,T]=(0,s.useState)(0),{content:F}=(0,s.useContext)(C.A),B=(0,s.useRef)(),M=(0,s.useRef)(null),O=(0,s.useRef)(null);(0,s.useEffect)((()=>{T(r?(_>800?.33:.25)*_:_>800?140:100)}),[r,_]);return(0,z.jsx)(l.Z,{sx:{p:_>800?2:1,boxSizing:"border-box"},ref:B,children:(0,z.jsxs)(a.Z,{sx:{mb:3},children:[(0,z.jsx)(c.Z,{avatar:(0,z.jsx)("img",{src:"/static/images/logo/".concat(e.logo),style:{height:"20px",width:"auto",margin:0,padding:0},alt:"react logo"}),title:e.type,sx:{color:"black"}}),(0,z.jsx)(d.Z,{}),(0,z.jsx)(h.Z,{children:(0,z.jsxs)(a.Z,{children:[(0,z.jsx)(p.Z,{sx:{height:L,width:"100%",display:"flex",justifyContent:"center",transition:"height 0.3s ease-in-out",alignItems:"center"},ref:O,children:(0,z.jsx)(k.l.Provider,{value:{imageHeight:L},children:r?(0,z.jsx)(P,{list:e.image.slice(1)}):(0,z.jsx)("img",{src:"/static/images/projects/".concat(e.image[0]),style:{height:e.imageSize},alt:"logo"})})}),(0,z.jsxs)(h.Z,{ref:M,children:[(0,z.jsx)(x.Z,{gutterBottom:!0,variant:"h4",component:"div",children:e.title}),(0,z.jsx)(x.Z,{variant:"body2",color:"text.secondary",children:A(e.description)})]}),(0,z.jsx)(g.Z,{in:r,timeout:"auto",unmountOnExit:!0,children:(0,z.jsx)(h.Z,{sx:{height:_-270-(null!==(t=null===(i=M.current)||void 0===i?void 0:i.clientHeight)&&void 0!==t?t:0)-L,overflowY:"auto"},children:e.content.map(((e,t)=>"text"===e.type?(0,z.jsx)(x.Z,{color:"text.secondary",sx:{mb:1},children:A(e.content)},t):"title"===e.type?(0,z.jsx)(x.Z,{gutterBottom:!0,variant:"h6",sx:{fontWeight:600,fontFamily:"Arial"},children:A(e.content)},t):"list"===e.type?(0,z.jsx)(m.Z,{children:e.content.map(((e,i)=>(0,z.jsxs)(j.ZP,{sx:{p:.5},children:[(0,z.jsx)(y.Z,{sx:{fontSize:10,mr:1,color:"text.secondary"}}),(0,z.jsx)(u.Z,{sx:{color:"text.secondary"},children:A(e)})]},"".concat(t,"-").concat(i))))},t):(0,z.jsx)(z.Fragment,{})))})}),(0,z.jsxs)(Z.Z,{disableSpacing:!0,children:[e.link&&(0,z.jsx)(b.Z,{title:F.tipWebsite,placement:"top",children:(0,z.jsx)(f.Z,{size:"small",onClick:()=>(async e=>{n?window.open(e,"_blank"):o(e)})(e.link),children:F.website})}),e.repo&&(0,z.jsx)(b.Z,{title:F.tipSource,placement:"top",children:(0,z.jsx)(f.Z,{size:"small",href:e.repo,target:"_blank",children:F.source})}),e.paper&&(0,z.jsx)(b.Z,{title:F.tipPaper,placement:"top",children:(0,z.jsx)(f.Z,{size:"small",href:H.L+e.paper,target:"_blank",children:F.paper})}),(0,z.jsx)(W,{expand:r,onClick:()=>{S(!r),setTimeout((()=>{var e;B.current&&window.scrollTo({top:(null===(e=B.current)||void 0===e?void 0:e.offsetTop)-80,behavior:"smooth"})}),300),document.body.style.overflow=r?"":"hidden"},"aria-expanded":r,"aria-label":"show more",children:(0,z.jsx)(b.Z,{title:r?F.showLess:F.showMore,placement:"top",children:(0,z.jsx)(v.Z,{})})})]})]})})]})})}},163:(e,t,i)=>{i.d(t,{M:()=>s});const s=(0,i(2791).createContext)({disabled:!1,handleClickOpen:()=>{0}})},7230:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(2791),n=i(8921),o=i(6585),r=i(361),l=i(8737),a=i(475),c=i(7621),d=i(9585),h=i(7924),p=i(9504),x=i(2169),g=i(890),m=i(2363),j=i(1333),u=i(6151),Z=i(3448),b=i(184);const f=e=>{const{height:t}=(0,s.useContext)(r.H),{content:i}=(0,s.useContext)(l.A);return(0,b.jsx)(n.Z,{sx:{p:t>800?2:1,boxSizing:"border-box"},children:(0,b.jsxs)(c.Z,{sx:{mb:3},children:[(0,b.jsx)(d.Z,{avatar:(0,b.jsx)("img",{src:"/static/images/logo/".concat(e.logo),style:{height:"20px",width:"auto",margin:0,padding:0},alt:"react logo"}),title:e.type,sx:{color:"black"}}),(0,b.jsx)(h.Z,{}),(0,b.jsx)(p.Z,{children:(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(x.Z,{sx:{height:t>800?200:160,width:"100%",display:"flex",justifyContent:"center",transition:"height 0.3s ease-in-out",alignItems:"center"},children:(0,b.jsx)("img",{src:"/static/images/projects/portfolio/".concat(e.image),style:{width:"100%",height:"100%",objectFit:"cover",cursor:"pointer"},alt:"logo",onClick:()=>window.open("/static/images/projects/portfolio/".concat(e.image),"_blank")})}),(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(g.Z,{gutterBottom:!0,variant:"h4",component:"div",children:e.title}),(0,b.jsx)(g.Z,{variant:"body2",color:"text.secondary",children:(0,a.r8)(e.description)})]}),(0,b.jsxs)(m.Z,{disableSpacing:!0,children:[e.repo&&(0,b.jsx)(j.Z,{title:i.tipSource,placement:"top",children:(0,b.jsx)(u.Z,{size:"small",href:e.repo,target:"_blank",children:i.source})}),e.paper&&(0,b.jsx)(j.Z,{title:i.tipPaper,placement:"top",children:(0,b.jsx)(u.Z,{size:"small",href:Z.L+e.paper,target:"_blank",children:i.paper})}),e.video&&(0,b.jsx)(j.Z,{title:i.tipVideo,placement:"top",children:(0,b.jsx)(u.Z,{size:"small",href:e.video,target:"_blank",children:i.video})})]})]})})]})})},v=()=>{const{content:e}=(0,s.useContext)(l.A);return(0,b.jsxs)(n.Z,{height:"calc(100vh - 80px)",children:[e.portfolio.map(((e,t)=>(0,b.jsx)(f,{logo:e.logo,type:e.type,title:e.title,video:e.video,description:e.description,content:e.content,paper:e.paper,repo:e.repo,imageSize:e.imageSize,image:e.image},t))),(0,b.jsx)(o.Z,{})]})}},3448:(e,t,i)=>{i.d(t,{L:()=>s});const s="https://enmmmmovo.cloudns.be/"}}]);
//# sourceMappingURL=723.63809fb5.chunk.js.map
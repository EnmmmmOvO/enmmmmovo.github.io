"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[381],{6585:(e,t,o)=>{o.d(t,{Z:()=>l});o(2791);var i=o(890),n=o(184);const l=()=>(0,n.jsxs)(i.Z,{variant:"body2",color:"white",align:"center",sx:{pb:3},children:["\xa9 ",(new Date).getFullYear()," Jinghan Wang. All rights reserved."]})},8381:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(2791),n=o(7630),l=o(8921),r=o(890),s=o(1889),a=o(1333),c=o(2157),h=o(6151),d=o(6585),m=o(8737),g=o(3448),x=o(184);const f=(0,n.ZP)(l.Z)({display:"flex",alignItems:"center",cursor:"pointer","&:hover img":{transform:"rotate(360deg)",transition:"transform 1s"}}),p=()=>{const{content:e}=(0,i.useContext)(m.A),[t,o]=(0,i.useState)(!1),[n,p]=(0,i.useState)(e.copyEmail),[u,b]=(0,i.useState)(e.copyWechat);return(0,x.jsxs)(l.Z,{sx:{height:"calc(100vh - 80px)",width:"100%",color:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",overflowY:"auto"},children:[(0,x.jsx)(l.Z,{children:(0,x.jsx)(r.Z,{sx:{fontSize:50,fontFamily:"Arial",fontWeight:600,textAlign:"center","@media (max-width: 959px)":{marginTop:"300px"}},children:e.wtgit})}),(0,x.jsx)(l.Z,{width:"100%",children:(0,x.jsxs)(s.ZP,{container:!0,mb:4,mt:4,children:[(0,x.jsx)(s.ZP,{item:!0,xs:12,md:6,sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",borderRight:"1px solid white","@media (max-width: 900px)":{borderRight:"none"}},children:(0,x.jsxs)("div",{children:[(0,x.jsx)(r.Z,{sx:{fontSize:16,fontFamily:"Arial",textAlign:"center",fontWeight:600},children:e.ctmt}),(0,x.jsx)(a.Z,{title:e.jumpGithub,placement:"top",children:(0,x.jsxs)(f,{mt:4,onClick:()=>window.open("https://github.com/enmmmmovo","_blank"),children:[(0,x.jsx)("img",{src:"/static/images/logo/github.svg",style:{height:"40px"},alt:"github icon"}),(0,x.jsx)(r.Z,{sx:{color:"white",ml:2},children:"EnmmmmOvO"})]})}),(0,x.jsx)(a.Z,{title:u,placement:"top",onMouseLeave:()=>b(e.copyWechat),children:(0,x.jsxs)(f,{mt:2,onClick:()=>{navigator.clipboard.writeText("wjh20000218").then((()=>b(e.copyWechatSuccess))).catch((e=>console.log(e)))},children:[(0,x.jsx)("img",{src:"/static/images/logo/wechat.svg",style:{height:"40px"},alt:"wechat icon"}),(0,x.jsx)(r.Z,{sx:{color:"white",ml:2},children:"wjh20000218"})]})}),(0,x.jsx)(a.Z,{title:n,placement:"top",onMouseLeave:()=>p(e.copyEmail),children:(0,x.jsxs)(f,{mt:2,onClick:()=>{navigator.clipboard.writeText("wangjinghan0218@gmail.com").then((()=>p(e.copyEmailSuccess))).catch((e=>console.log(e)))},children:[(0,x.jsx)("img",{src:"/static/images/logo/email.svg",style:{height:"40px"},alt:"email icon"}),(0,x.jsx)(r.Z,{sx:{color:"white",ml:2},children:"wangjinghan0218@gmail.com"})]})}),(0,x.jsx)(a.Z,{title:e.jumpLinkedin,placement:"top",children:(0,x.jsxs)(f,{mt:2,onClick:()=>window.open("https://www.linkedin.com/in/wang-jinghan-722144309/"),children:[(0,x.jsx)("img",{src:"/static/images/logo/linkedin.svg",style:{height:"40px"},alt:"linkedin icon"}),(0,x.jsx)(r.Z,{sx:{color:"white",ml:2},children:"Jinghan Wang"})]})})]})}),(0,x.jsxs)(s.ZP,{item:!0,xs:12,md:6,p:3,children:[(0,x.jsx)(r.Z,{sx:{fontSize:16,fontFamily:"Arial",textAlign:"center",fontWeight:600},children:e.leaveMessage}),(0,x.jsxs)("form",{onSubmit:e=>{e.preventDefault();const t=new FormData(e.currentTarget),i=t.get("name"),n=t.get("email"),l=t.get("content");fetch("".concat(g.L,"contact/"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:i,email:n,content:l})}).then((e=>{if(200!==e.status)throw new Error("Message Sent Failed!");o(!0),setTimeout((()=>o(!1)),5e3)})).catch((e=>console.log(e))),e.currentTarget.reset()},children:[(0,x.jsx)(c.Z,{variant:"outlined",fullWidth:!0,label:e.preferredName,name:"name",InputLabelProps:{style:{color:"#fff"}},inputProps:{maxLength:200,style:{color:"#fff",borderColor:"rgba(255, 255, 255, 1)"}},sx:{mt:4,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(255, 255, 255, 1)"},"&:hover fieldset":{borderColor:"rgba(255, 255, 255, 1)"},"&.Mui-focused fieldset":{borderColor:"#fff"}}}}),(0,x.jsx)(c.Z,{variant:"outlined",fullWidth:!0,name:"email",label:e.email,InputLabelProps:{style:{color:"#fff"}},inputProps:{maxLength:200,style:{color:"#fff",borderColor:"rgba(255, 255, 255, 1)"}},sx:{mt:2,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(255, 255, 255, 1)"},"&:hover fieldset":{borderColor:"rgba(255, 255, 255, 1)"},"&.Mui-focused fieldset":{borderColor:"#fff"}}}}),(0,x.jsx)(c.Z,{variant:"outlined",fullWidth:!0,rows:5,multiline:!0,name:"content",label:e.content,InputLabelProps:{style:{color:"#fff"}},inputProps:{maxLength:1e4,style:{color:"#fff",borderColor:"rgb(255, 255, 255)"}},sx:{mt:2,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgb(255, 255, 255)"},"&:hover fieldset":{borderColor:"rgb(255, 255, 255)"},"&.Mui-focused fieldset":{borderColor:"#fff"},"& textarea":{color:"#fff"}}}}),(0,x.jsx)(h.Z,{variant:"contained",sx:{mt:2,width:"100%"},type:"submit",children:e.send}),t&&(0,x.jsx)(r.Z,{sx:{mt:1,textAlign:"center"},children:e.messageSuccess})]})]})]})}),(0,x.jsx)(d.Z,{})]})}},3448:(e,t,o)=>{o.d(t,{L:()=>i});const i="https://enmmmmovo.cloudns.be/"}}]);
//# sourceMappingURL=381.a13f9cf5.chunk.js.map
"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[381],{6585:(e,t,o)=>{o.d(t,{Z:()=>l});o(2791);var i=o(890),n=o(184);const l=()=>(0,n.jsxs)(i.Z,{variant:"body2",color:"white",align:"center",sx:{pb:3},children:["\xa9 ",(new Date).getFullYear()," Jinghan Wang. All rights reserved."]})},8381:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var i=o(2791),n=o(7630),l=o(8921),r=o(890),s=o(1889),a=o(1333),c=o(2157),m=o(6151),h=o(6585),d=o(8737),x=o(184);const g=(0,n.ZP)(l.Z)({display:"flex",alignItems:"center",cursor:"pointer","&:hover img":{transform:"rotate(360deg)",transition:"transform 1s"}}),f=()=>{const[e,t]=(0,i.useState)(!1),[o,n]=(0,i.useState)(!1),[f,u]=(0,i.useState)(!1),{content:p}=(0,i.useContext)(d.A);return(0,x.jsxs)(l.Z,{sx:{height:"calc(100vh - 80px)",width:"100%",color:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",overflowY:"auto"},children:[(0,x.jsx)(l.Z,{children:(0,x.jsx)(r.Z,{sx:{fontSize:50,fontFamily:"Arial",fontWeight:600,textAlign:"center","@media (max-width: 959px)":{marginTop:"300px"}},children:p.wtgit})}),(0,x.jsx)(l.Z,{width:"100%",children:(0,x.jsxs)(s.ZP,{container:!0,mb:4,mt:4,children:[(0,x.jsx)(s.ZP,{item:!0,xs:12,md:6,sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",borderRight:"1px solid white","@media (max-width: 900px)":{borderRight:"none"}},children:(0,x.jsxs)("div",{children:[(0,x.jsx)(r.Z,{sx:{fontSize:16,fontFamily:"Arial",textAlign:"center",fontWeight:600},children:p.ctmt}),(0,x.jsx)(a.Z,{title:p.jumpGithub,placement:"top",children:(0,x.jsxs)(g,{mt:4,onClick:()=>window.open("https://github.com/enmmmmovo","_blank"),children:[(0,x.jsx)("img",{src:"/static/images/logo/github.svg",style:{height:"40px"},alt:"github icon"}),(0,x.jsx)(r.Z,{sx:{color:"white",ml:2},children:"EnmmmmOvO"})]})}),(0,x.jsx)(a.Z,{title:p.copyWechat,placement:"top",children:(0,x.jsxs)(g,{mt:2,onClick:()=>{navigator.clipboard.writeText("wjh20000218").then((()=>{u(!0),n(!1),t(!1),setTimeout((()=>u(!1)),1e3)})).catch((e=>console.log(e)))},children:[(0,x.jsx)("img",{src:"/static/images/logo/wechat.svg",style:{height:"40px"},alt:"wechat icon"}),(0,x.jsx)(r.Z,{sx:{color:"white",ml:2},children:"wjh20000218"})]})}),f&&(0,x.jsx)(r.Z,{sx:{mt:1,textAlign:"center"},children:p.copyWechatSuccess}),(0,x.jsx)(a.Z,{title:p.copyEmail,placement:"top",children:(0,x.jsxs)(g,{mt:2,onClick:()=>{navigator.clipboard.writeText("wangjinghan0218@gmail.com").then((()=>{n(!0),u(!1),t(!1),setTimeout((()=>n(!1)),1e3)})).catch((e=>console.log(e)))},children:[(0,x.jsx)("img",{src:"/static/images/logo/email.svg",style:{height:"40px"},alt:"email icon"}),(0,x.jsx)(r.Z,{sx:{color:"white",ml:2},children:"wangjinghan0218@gmail.com"})]})}),o&&(0,x.jsx)(r.Z,{sx:{mt:1,textAlign:"center"},children:p.copyEmailSuccess}),(0,x.jsx)(a.Z,{title:"Not available at the moment ~ ",placement:"top",children:(0,x.jsxs)(g,{mt:2,children:[(0,x.jsx)("img",{src:"/static/images/logo/linkedin.svg",style:{height:"40px"},alt:"linkedin icon"}),(0,x.jsx)(r.Z,{sx:{color:"white",ml:2}})]})})]})}),(0,x.jsxs)(s.ZP,{item:!0,xs:12,md:6,p:3,children:[(0,x.jsx)(r.Z,{sx:{fontSize:16,fontFamily:"Arial",textAlign:"center",fontWeight:600},children:p.leaveMessage}),(0,x.jsxs)("form",{onSubmit:e=>{e.preventDefault();const o=new FormData(e.currentTarget),i=o.get("name"),n=o.get("email"),l=o.get("content");fetch("https://enmmmmovo.cloudns.be/contact/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:i,email:n,content:l})}).then((e=>{if(200!==e.status)throw new Error("Message Sent Failed!");t(!0),setTimeout((()=>t(!1)),5e3)})).catch((e=>console.log(e))),e.currentTarget.reset()},children:[(0,x.jsx)(c.Z,{variant:"outlined",fullWidth:!0,label:p.preferredName,name:"name",InputLabelProps:{style:{color:"#fff"}},inputProps:{maxLength:200,style:{color:"#fff",borderColor:"rgba(255, 255, 255, 1)"}},sx:{mt:4,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(255, 255, 255, 1)"},"&:hover fieldset":{borderColor:"rgba(255, 255, 255, 1)"},"&.Mui-focused fieldset":{borderColor:"#fff"}}}}),(0,x.jsx)(c.Z,{variant:"outlined",fullWidth:!0,name:"email",label:p.email,InputLabelProps:{style:{color:"#fff"}},inputProps:{maxLength:200,style:{color:"#fff",borderColor:"rgba(255, 255, 255, 1)"}},sx:{mt:2,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(255, 255, 255, 1)"},"&:hover fieldset":{borderColor:"rgba(255, 255, 255, 1)"},"&.Mui-focused fieldset":{borderColor:"#fff"}}}}),(0,x.jsx)(c.Z,{variant:"outlined",fullWidth:!0,rows:5,multiline:!0,name:"content",label:p.content,InputLabelProps:{style:{color:"#fff"}},inputProps:{maxLength:1e4,style:{color:"#fff",borderColor:"rgb(255, 255, 255)"}},sx:{mt:2,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgb(255, 255, 255)"},"&:hover fieldset":{borderColor:"rgb(255, 255, 255)"},"&.Mui-focused fieldset":{borderColor:"#fff"},"& textarea":{color:"#fff"}}}}),(0,x.jsx)(m.Z,{variant:"contained",sx:{mt:2,width:"100%"},type:"submit",children:p.send}),e&&(0,x.jsx)(r.Z,{sx:{mt:1,textAlign:"center"},children:p.messageSuccess})]})]})]})}),(0,x.jsx)(h.Z,{})]})}}}]);
//# sourceMappingURL=381.5e0d9626.chunk.js.map
"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[135],{5135:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var r=i(2791),o=i(3967),n=i(7294),s=i(184);class a{constructor(e,t,i,r){r=Object.assign({antialias:!1,depthTest:!1,mousemove:!1,autosize:!0,msaa:0,vertex:"\n        precision highp float;\n\n        attribute vec4 a_position;\n        attribute vec4 a_color;\n\n        uniform float u_time;\n        uniform vec2 u_resolution;\n        uniform vec2 u_mousemove;\n        uniform mat4 u_projection;\n\n        varying vec4 v_color;\n\n        void main() {\n\n          gl_Position = u_projection * a_position;\n          gl_PointSize = (10.0 / gl_Position.w) * 100.0;\n\n          v_color = a_color;\n\n        }",fragment:"\n        precision highp float;\n\n        uniform sampler2D u_texture;\n        uniform int u_hasTexture;\n\n        varying vec4 v_color;\n\n        void main() {\n\n          if ( u_hasTexture == 1 ) {\n\n            gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n\n          } else {\n\n            gl_FragColor = v_color;\n\n          }\n\n        }",uniforms:{},buffers:{},camera:{},texture:null,onUpdate:()=>{},onResize:()=>{}},r);const o=Object.assign({time:{type:"float",value:0},hasTexture:{type:"int",value:0},resolution:{type:"vec2",value:[0,0]},mousemove:{type:"vec2",value:[0,0]},projection:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},r.uniforms),n=Object.assign({position:{size:3,data:[]},color:{size:4,data:[]}},r.buffers),s=Object.assign({fov:60,near:1,far:1e4,aspect:1,z:100,perspective:!0},r.camera);this.count=0,this.gl=i,this.canvas=t,this.camera=s,this.holder=e,this.msaa=r.msaa,this.onUpdate=r.onUpdate,this.onResize=r.onResize,this.data={},e.appendChild(t),this.createProgram(r.vertex,r.fragment),this.createBuffers(n),this.createUniforms(o),this.updateBuffers(),this.updateUniforms(),this.createTexture(r.texture),i.enable(i.BLEND),i.enable(i.CULL_FACE),i.blendFunc(i.SRC_ALPHA,i.ONE),i[r.depthTest?"enable":"disable"](i.DEPTH_TEST),r.autosize&&window.addEventListener("resize",(e=>this.resize(e)),!1),r.mousemove&&window.addEventListener("mousemove",(e=>this.mousemove(e)),!1),this.resize(),this.update=this.update.bind(this),this.time={start:performance.now(),old:performance.now()},this.update()}mousemove(e){let t=e.pageX/this.width*2-1,i=e.pageY/this.height*2-1;this.uniforms.mousemove=[t,i]}resize(e){const t=this.holder,i=this.canvas,r=this.gl,o=this.width=t.offsetWidth,n=this.height=t.offsetHeight,s=this.aspect=o/n,a=this.dpi=Math.max(this.msaa?2:1,devicePixelRatio);i.width=o*a,i.height=n*a,i.style.width=o+"px",i.style.height=n+"px",r.viewport(0,0,o*a,n*a),r.clearColor(0,0,0,0),this.uniforms.resolution=[o,n],this.uniforms.projection=this.setProjection(s),this.onResize(o,n,a)}setProjection(e){const t=this.camera;if(t.perspective){t.aspect=e;const i=t.fov*(Math.PI/180),r=Math.tan(.5*Math.PI-.5*i),o=1/(t.near-t.far),n=[r/t.aspect,0,0,0,0,r,0,0,0,0,(t.near+t.far)*o,-1,0,0,t.near*t.far*o*2,0];return n[14]+=t.z,n[15]+=t.z,n}return[2/this.width,0,0,0,0,-2/this.height,0,0,0,0,1,0,-1,1,0,1]}createShader(e,t){const i=this.gl,r=i.createShader(e);if(i.shaderSource(r,t),i.compileShader(r),i.getShaderParameter(r,i.COMPILE_STATUS))return r;i.deleteShader(r)}createProgram(e,t){const i=this.gl,r=this.createShader(i.VERTEX_SHADER,e),o=this.createShader(i.FRAGMENT_SHADER,t),n=i.createProgram();i.attachShader(n,r),i.attachShader(n,o),i.linkProgram(n),i.getProgramParameter(n,i.LINK_STATUS)?(i.useProgram(n),this.program=n):i.deleteProgram(n)}createUniforms(e){const t=this.gl,i=this.data.uniforms=e,r=this.uniforms={};Object.keys(i).forEach((e=>{i[e].location=t.getUniformLocation(this.program,"u_"+e),Object.defineProperty(r,e,{set:t=>{i[e].value=t,this.setUniform(e,t)},get:()=>i[e].value})}))}setUniform(e,t){const i=this.gl,r=this.data.uniforms[e];switch(r.value=t,r.type){case"int":i.uniform1i(r.location,t);break;case"float":i.uniform1f(r.location,t);break;case"vec2":i.uniform2f(r.location,...t);break;case"vec3":i.uniform3f(r.location,...t);break;case"vec4":i.uniform4f(r.location,...t);break;case"mat2":i.uniformMatrix2fv(r.location,!1,t);break;case"mat3":i.uniformMatrix3fv(r.location,!1,t);break;case"mat4":i.uniformMatrix4fv(r.location,!1,t)}}updateUniforms(){this.gl;const e=this.data.uniforms;Object.keys(e).forEach((t=>{const i=e[t];this.uniforms[t]=i.value}))}createBuffers(e){this.gl;const t=this.data.buffers=e,i=this.buffers={};Object.keys(t).forEach((e=>{const r=t[e];r.buffer=this.createBuffer("a_"+e,r.size),Object.defineProperty(i,e,{set:i=>{t[e].data=i,this.setBuffer(e,i),"position"==e&&(this.count=t.position.data.length/3)},get:()=>t[e].data})}))}createBuffer(e,t){const i=this.gl,r=this.program,o=i.getAttribLocation(r,e),n=i.createBuffer();return i.bindBuffer(i.ARRAY_BUFFER,n),i.enableVertexAttribArray(o),i.vertexAttribPointer(o,t,i.FLOAT,!1,0,0),n}setBuffer(e,t){const i=this.gl,r=this.data.buffers;(null!=e||i.bindBuffer(i.ARRAY_BUFFER,null))&&(i.bindBuffer(i.ARRAY_BUFFER,r[e].buffer),i.bufferData(i.ARRAY_BUFFER,new Float32Array(t),i.STATIC_DRAW))}updateBuffers(){this.gl;const e=this.buffers;Object.keys(e).forEach((t=>e[t]=e[t].data)),this.setBuffer(null)}createTexture(e){const t=this.gl,i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),this.texture=i,e&&(this.uniforms.hasTexture=1,this.loadTexture(e))}loadTexture(e){const t=this.gl,i=this.texture,r=new Image;r.onload=()=>{t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},r.src=e}update(){const e=this.gl,t=performance.now(),i=(t-this.time.start)/5e3,r=t-this.time.old;this.time.old=t,this.uniforms.time=i,this.count>0&&(e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawArrays(e.POINTS,0,this.count)),this.onUpdate(r),requestAnimationFrame(this.update)}}const u=()=>{const e=r.useRef(null),t=r.useRef(null);(0,o.Z)();return(0,r.useEffect)((()=>{const i=t.current,r=i.getContext("webgl");new a(e.current,i,r,{texture:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC",uniforms:{size:{type:"float",value:2.5},field:{type:"vec3",value:[0,0,0]},speed:{type:"float",value:5}},vertex:"\n        #define M_PI 3.1415926535897932384626433832795\n    \n        precision highp float;\n    \n        attribute vec4 a_position;\n        attribute vec4 a_color;\n    \n        uniform float u_time;\n        uniform float u_size;\n        uniform float u_speed;\n        uniform vec3 u_field;\n        uniform mat4 u_projection;\n    \n        varying vec4 v_color;\n    \n        void main() {\n    \n          vec3 pos = a_position.xyz;\n    \n          pos.y += (\n            cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +\n            sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)\n          ) * u_field.y;\n    \n          gl_Position = u_projection * vec4( pos.xyz, a_position.w );\n          gl_PointSize = ( u_size / gl_Position.w ) * 100.0;\n    \n          v_color = a_color;\n    \n        }",fragment:"\n        precision highp float;\n    \n        uniform sampler2D u_texture;\n    \n        varying vec4 v_color;\n    \n        void main() {\n    \n          gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n    \n        }",onResize(e,t,i){const r=[],o=[],n=e/t*400,s=400;for(let a=0;a<n;a+=5)for(let e=0;e<s;e+=5)r.push(-n/2+a,-30,-200+e),o.push(0,1-a/n,.5+a/n*.5,e/s);this.uniforms.field=[n,3,s],this.buffers.position=r,this.buffers.color=o,this.uniforms.size=t/400*2.5*i}})}),[]),(0,s.jsx)("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,background:"black"},ref:e,children:(0,s.jsx)("canvas",{ref:t})})},c=()=>{(0,o.Z)();return(0,s.jsx)(n.Z,{sx:{height:"100vh",position:"relative"},children:(0,s.jsx)(u,{})})}}}]);
//# sourceMappingURL=135.0215ec7a.chunk.js.map
"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[367],{8367:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var o=i(2791),r=i(184);class n{constructor(e,t,i,o){o=Object.assign({antialias:!1,depthTest:!1,mousemove:!1,autosize:!0,msaa:0,vertex:"\n        precision highp float;\n\n        attribute vec4 a_position;\n        attribute vec4 a_color;\n\n        uniform float u_time;\n        uniform vec2 u_resolution;\n        uniform vec2 u_mousemove;\n        uniform mat4 u_projection;\n\n        varying vec4 v_color;\n\n        void main() {\n          gl_Position = u_projection * a_position;\n          gl_PointSize = (10.0 / gl_Position.w) * 100.0;\n          v_color = a_color;\n        }",fragment:"\n        precision highp float;\n\n        uniform sampler2D u_texture;\n        uniform int u_hasTexture;\n\n        varying vec4 v_color;\n\n        void main() {\n          if ( u_hasTexture == 1 ) {\n            gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n          } else {\n            gl_FragColor = v_color;\n          }\n        }",uniforms:{},buffers:{},camera:{},texture:null,onUpdate:()=>{},onResize:()=>{}},o);const r=Object.assign({time:{type:"float",value:0},hasTexture:{type:"int",value:0},resolution:{type:"vec2",value:[0,0]},mousemove:{type:"vec2",value:[0,0]},projection:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},o.uniforms),n=Object.assign({position:{size:3,data:[]},color:{size:4,data:[]}},o.buffers),s=Object.assign({fov:60,near:1,far:1e4,aspect:1,z:100,perspective:!0},o.camera);this.count=0,this.gl=i,this.canvas=t,this.camera=s,this.holder=e,this.msaa=o.msaa,this.onUpdate=o.onUpdate,this.onResize=o.onResize,this.data={},e.appendChild(t),this.createProgram(o.vertex,o.fragment),this.createBuffers(n),this.createUniforms(r),this.updateBuffers(),this.updateUniforms(),this.createTexture(o.texture),i.enable(i.BLEND),i.enable(i.CULL_FACE),i.blendFunc(i.SRC_ALPHA,i.ONE),i[o.depthTest?"enable":"disable"](i.DEPTH_TEST),o.autosize&&window.addEventListener("resize",(e=>this.resize(e)),!1),o.mousemove&&window.addEventListener("mousemove",(e=>this.mousemove(e)),!1),this.resize(),this.update=this.update.bind(this),this.time={start:performance.now(),old:performance.now()},this.update()}mousemove(e){let t=e.pageX/this.width*2-1,i=e.pageY/this.height*2-1;this.uniforms.mousemove=[t,i]}resize(){const e=this.holder,t=this.canvas,i=this.gl,o=this.width=e.offsetWidth,r=this.height=e.offsetHeight,n=this.aspect=o/r,s=this.dpi=Math.max(this.msaa?2:1,devicePixelRatio);t.width=o*s,t.height=r*s,t.style.width=o+"px",t.style.height=r+"px",i.viewport(0,0,o*s,r*s),i.clearColor(0,0,0,0),this.uniforms.resolution=[o,r],this.uniforms.projection=this.setProjection(n),this.onResize(o,r,s)}setProjection(e){const t=this.camera;if(t.perspective){t.aspect=e;const i=t.fov*(Math.PI/180),o=Math.tan(.5*Math.PI-.5*i),r=1/(t.near-t.far),n=[o/t.aspect,0,0,0,0,o,0,0,0,0,(t.near+t.far)*r,-1,0,0,t.near*t.far*r*2,0];return n[14]+=t.z,n[15]+=t.z,n}return[2/this.width,0,0,0,0,-2/this.height,0,0,0,0,1,0,-1,1,0,1]}createShader(e,t){const i=this.gl,o=i.createShader(e);if(i.shaderSource(o,t),i.compileShader(o),i.getShaderParameter(o,i.COMPILE_STATUS))return o;i.deleteShader(o)}createProgram(e,t){const i=this.gl,o=this.createShader(i.VERTEX_SHADER,e),r=this.createShader(i.FRAGMENT_SHADER,t),n=i.createProgram();i.attachShader(n,o),i.attachShader(n,r),i.linkProgram(n),i.getProgramParameter(n,i.LINK_STATUS)?(i.useProgram(n),this.program=n):i.deleteProgram(n)}createUniforms(e){const t=this.gl,i=this.data.uniforms=e,o=this.uniforms={};Object.keys(i).forEach((e=>{i[e].location=t.getUniformLocation(this.program,"u_"+e),Object.defineProperty(o,e,{set:t=>{i[e].value=t,this.setUniform(e,t)},get:()=>i[e].value})}))}setUniform(e,t){const i=this.gl,o=this.data.uniforms[e];o.value=t,"int"===o.type?i.uniform1i(o.location,t):"float"===o.type?i.uniform1f(o.location,t):"vec2"===o.type?i.uniform2f(o.location,...t):"vec3"===o.type?i.uniform3f(o.location,...t):"vec4"===o.type?i.uniform4f(o.location,...t):"mat2"===o.type?i.uniformMatrix2fv(o.location,!1,t):"mat3"===o.type?i.uniformMatrix3fv(o.location,!1,t):"mat4"===o.type&&i.uniformMatrix4fv(o.location,!1,t)}updateUniforms(){const e=this.data.uniforms;Object.keys(e).forEach((t=>{const i=e[t];this.uniforms[t]=i.value}))}createBuffers(e){const t=this.data.buffers=e,i=this.buffers={};Object.keys(t).forEach((e=>{const o=t[e];o.buffer=this.createBuffer("a_"+e,o.size),Object.defineProperty(i,e,{set:i=>{t[e].data=i,this.setBuffer(e,i),"position"===e&&(this.count=t.position.data.length/3)},get:()=>t[e].data})}))}createBuffer(e,t){const i=this.gl,o=this.program,r=i.getAttribLocation(o,e),n=i.createBuffer();return i.bindBuffer(i.ARRAY_BUFFER,n),i.enableVertexAttribArray(r),i.vertexAttribPointer(r,t,i.FLOAT,!1,0,0),n}setBuffer(e,t){const i=this.gl,o=this.data.buffers;(null!=e||i.bindBuffer(i.ARRAY_BUFFER,null))&&(i.bindBuffer(i.ARRAY_BUFFER,o[e].buffer),i.bufferData(i.ARRAY_BUFFER,new Float32Array(t),i.STATIC_DRAW))}updateBuffers(){const e=this.buffers;Object.keys(e).forEach((t=>e[t]=e[t].data)),this.setBuffer(null)}createTexture(e){const t=this.gl,i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),this.texture=i,e&&(this.uniforms.hasTexture=1,this.loadTexture(e))}loadTexture(e){const t=this.gl,i=this.texture,o=new Image;o.onload=()=>{t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},o.src=e}update(){const e=this.gl,t=performance.now(),i=(t-this.time.start)/5e3,o=t-this.time.old;this.time.old=t,this.uniforms.time=i,this.count>0&&(e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawArrays(e.POINTS,0,this.count)),this.onUpdate(o),requestAnimationFrame(this.update)}}const s=()=>{const e=o.useRef(null),t=o.useRef(null);return(0,o.useEffect)((()=>{const i=t.current,o=i.getContext("webgl");new n(e.current,i,o,{texture:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC",uniforms:{size:{type:"float",value:2.5},field:{type:"vec3",value:[0,0,0]},speed:{type:"float",value:5}},vertex:"\n        #define M_PI 3.1415926535897932384626433832795\n    \n        precision highp float;\n    \n        attribute vec4 a_position;\n        attribute vec4 a_color;\n    \n        uniform float u_time;\n        uniform float u_size;\n        uniform float u_speed;\n        uniform vec3 u_field;\n        uniform mat4 u_projection;\n    \n        varying vec4 v_color;\n    \n        void main() {\n          vec3 pos = a_position.xyz;\n    \n          pos.y += (\n            cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +\n            sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)\n          ) * u_field.y;\n    \n          gl_Position = u_projection * vec4( pos.xyz, a_position.w );\n          gl_PointSize = ( u_size / gl_Position.w ) * 100.0;\n    \n          v_color = a_color;\n        }",fragment:"\n        precision highp float;\n    \n        uniform sampler2D u_texture;\n    \n        varying vec4 v_color;\n    \n        void main() {\n          gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n        }",onResize(e,t,i){const o=[],r=[],n=e/t*400,s=400;for(let a=0;a<n;a+=5)for(let e=0;e<s;e+=5)o.push(-n/2+a,-30,-200+e),r.push(0,1-a/n,.5+a/n*.5,e/s);this.uniforms.field=[n,3,s],this.buffers.position=o,this.buffers.color=r,this.uniforms.size=t/400*2.5*i}})}),[]),(0,r.jsx)("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,background:"black"},ref:e,children:(0,r.jsx)("canvas",{ref:t})})}}}]);
//# sourceMappingURL=367.602b0911.chunk.js.map
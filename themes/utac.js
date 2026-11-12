// Revenue Analysis theme: UTAC - animated semiconductor assembly cleanroom (product hub).
// Families (UD3): PRD110 Leadframe, PRD120 Laminate, PRD177 Advanced Packaging, PRD190 Specialty Packages.
// Generic equipment and packages; no company branding. Loaded before the shared page script (&t=utac).

// ---- 3D models for the page's own 3D view (page primitives box / cyl / sphere / sub)
window.UTM=(function(){const M={},MO='#1f2329',CU='#c9824a',AU='#e3b341',SUB='#2f7a4b',SI='#9aa3ad',GL='#2a3a52';
  M.qfn=A=>{box(0,0,0,40,40,3,CU);box(0,0,3,34,34,6,MO);box(0,0,9.2,10,10,.4,'#3b4048');};
  M.soic=A=>{box(0,0,4,46,24,8,MO);for(let i=0;i<5;i++){box(-16+i*8,-14,3,3,6,1.5,'#cfd6dd');box(-16+i*8,14,3,3,6,1.5,'#cfd6dd');}};
  M.qfp=A=>{box(0,0,4,40,40,6,MO);for(let i=0;i<7;i++){const p=-15+i*5;[[p,-22],[p,22]].forEach(([x,y])=>box(x,y,3,2,6,1.2,'#cfd6dd'));[[-22,p],[22,p]].forEach(([x,y])=>box(x,y,3,6,2,1.2,'#cfd6dd'));}};
  M.bga=A=>{box(0,0,4,44,44,3,SUB);box(0,0,7,34,34,6,MO);for(let i=0;i<6;i++)for(let j=0;j<6;j++)sphere(-15+i*6,-15+j*6,2,2.2,'#d9dde2',6);};
  M.flip=A=>{box(0,0,4,44,44,3,SUB);box(0,0,7.5,26,26,3,'#4b5563');box(0,0,10.6,26,26,.3,'#9aa3ad');for(let i=0;i<6;i++)for(let j=0;j<6;j++)sphere(-15+i*6,-15+j*6,2,2.2,'#d9dde2',6);};
  M.wafer=A=>{cyl(0,0,0,30,2,'#b8c0c8',40);for(let i=-3;i<=3;i++)box(i*8,0,2,.4,52,.2,'#7c8794');for(let i=-3;i<=3;i++)box(0,i*8,2,52,.4,.2,'#7c8794');};
  M.sip=A=>{box(0,0,0,50,34,3,SUB);box(0,0,3,46,30,7,'#c8ced4','#dfe3e8');};
  M.mems=A=>{box(0,0,0,30,30,3,SUB);box(0,0,3,24,24,10,'#c8ced4','#e2e6ea');cyl(6,6,13,2,.6,'#6b7280',12);};
  M.sensor=A=>{box(0,0,0,40,40,4,'#3b4048');box(0,0,4,30,30,1,'#1e3a8a','#6d8fd6');box(0,0,5,32,32,.6,'#a9c2e8');};
  M.power=A=>{box(0,0,0,48,40,3,CU);box(0,0,3,40,32,6,MO);for(let i=0;i<6;i++)box(-15+i*6,0,9,2.4,30,10,CU);};
  M.root=A=>{sub(M.qfn,A,-26,0,0,.7,0);sub(M.bga,A,26,0,0,.7,0);};
  return M;})();

window.THEME=Object.assign({"key":"utac","name":"UTAC","view":"Semiconductor assembly","top":"family","gp":"Gross profit margin","np":"Net profit margin","keep":[],"levels":["package family","package type","package"]},{
 famc:{"PRD110":["#c2772c","#a5621f","#7f4a16","#fbeedd"],"PRD120":["#2f9e55","#258044","#1b6234","#dcf6e5"],"PRD177":["#2f7fd8","#2366b3","#1b4f8c","#e3efff"],"PRD190":["#7b5cc9","#6447ad","#4d3687","#ece6fb"]},
 models3d:{root:A=>UTM.root(A),qfn:A=>UTM.qfn(A),soic:A=>UTM.soic(A),qfp:A=>UTM.qfp(A),bga:A=>UTM.bga(A),flip:A=>UTM.flip(A),wafer:A=>UTM.wafer(A),sip:A=>UTM.sip(A),mems:A=>UTM.mems(A),sensor:A=>UTM.sensor(A),power:A=>UTM.power(A)},
 map:{"PRD100":"root","PRD110":"qfn","PRD110P":"qfn","PRD110P7":"qfn","PRD110P8":"qfn","PRD110P9":"qfn","PRD110R":"soic","PRD110R4":"soic","PRD110R5":"soic","PRD110R6":"soic","PRD110W":"qfp","PRD110W1":"qfp","PRD110W2":"qfp","PRD110W3":"qfp",
  "PRD120":"bga","PRD120P":"bga","PRD120P7":"bga","PRD120P8":"bga","PRD120R":"flip","PRD120R3":"flip","PRD120R4":"flip","PRD120R5":"flip","PRD120R6":"flip","PRD120W":"bga","PRD120W1":"bga","PRD120W2":"bga",
  "PRD177":"wafer","PRD177P":"wafer","PRD177P7":"wafer","PRD177P8":"wafer","PRD177R":"wafer","PRD177R5":"wafer","PRD177R6":"wafer","PRD177W":"sip","PRD177W1":"sip","PRD177W2":"sip","PRD177W3":"sip","PRD177W4":"sip",
  "PRD190":"sensor","PRD190G":"mems","PRD190GP":"mems","PRD190GR":"mems","PRD190GW":"mems","PRD190H":"sensor","PRD190HP":"sensor","PRD190HR":"sensor","PRD190HW":"sensor","PRD190S":"power","PRD190SG":"power","PRD190SM":"power"},
 zones:[{"poly":[[49,87],[313,87],[313,505],[49,505]],"card":[181,62],"cats":[[110,215],[240,300],[130,410]]},
        {"poly":[[322,87],[586,87],[586,505],[322,505]],"card":[454,62],"cats":[[383,215],[513,300],[403,410]]},
        {"poly":[[594,87],[858,87],[858,505],[594,505]],"card":[726,62],"cats":[[655,215],[785,300],[675,410]]},
        {"poly":[[867,87],[1131,87],[1131,505],[867,505]],"card":[999,62],"cats":[[928,215],[1058,300],[948,410]]}],
 icons:["<path d=\"M6 6h12v12H6zM3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>",
        "<path d=\"M4 4h16v16H4zM8 8h8v8H8z\" stroke-linejoin=\"round\"/><circle cx=\"7\" cy=\"18\" r=\".6\"/><circle cx=\"12\" cy=\"18\" r=\".6\"/><circle cx=\"17\" cy=\"18\" r=\".6\"/>",
        "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M5 9h14M4 12h16M5 15h14M9 4v16M12 3v18M15 4v16\" stroke-linecap=\"round\"/>",
        "<path d=\"M8 3h8l3 4v10l-3 4H8l-3-4V7z\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>"],
 photo:{W:1180,H:539,src:"data:image/gif;base64,R0lGODlhAQABAIAAANbu+QAAACwAAAAAAQABAAACAkQBADs="},
 sceneAspect:0.46
});

// ---- shared WebGL2 renderer pieces (same as the X-Press Feeders theme)
window.UTAC_ENGINE=(function(){
const m4={mul:(a,b)=>{const o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++){let s=0;for(let k=0;k<4;k++)s+=a[k*4+r]*b[c*4+k];o[c*4+r]=s;}return o;},
  persp:(fy,as,n,f)=>{const t=1/Math.tan(fy/2),o=new Float32Array(16);o[0]=t/as;o[5]=t;o[10]=(f+n)/(n-f);o[11]=-1;o[14]=2*f*n/(n-f);return o;},
  ortho:(l,r,b,t,n,f)=>{const o=new Float32Array(16);o[0]=2/(r-l);o[5]=2/(t-b);o[10]=-2/(f-n);o[12]=-(r+l)/(r-l);o[13]=-(t+b)/(t-b);o[14]=-(f+n)/(f-n);o[15]=1;return o;},
  look:(e,c,u)=>{const z=nrm([e[0]-c[0],e[1]-c[1],e[2]-c[2]]),x=nrm(crs(u,z)),y=crs(z,x);return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-dot(x,e),-dot(y,e),-dot(z,e),1]);},
  inv:(m)=>{const a=m,o=new Float32Array(16);const b00=a[0]*a[5]-a[1]*a[4],b01=a[0]*a[6]-a[2]*a[4],b02=a[0]*a[7]-a[3]*a[4],b03=a[1]*a[6]-a[2]*a[5],b04=a[1]*a[7]-a[3]*a[5],b05=a[2]*a[7]-a[3]*a[6],b06=a[8]*a[13]-a[9]*a[12],b07=a[8]*a[14]-a[10]*a[12],b08=a[8]*a[15]-a[11]*a[12],b09=a[9]*a[14]-a[10]*a[13],b10=a[9]*a[15]-a[11]*a[13],b11=a[10]*a[15]-a[11]*a[14];
    let d=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;if(!d)return o;d=1/d;
    o[0]=(a[5]*b11-a[6]*b10+a[7]*b09)*d;o[1]=(a[2]*b10-a[1]*b11-a[3]*b09)*d;o[2]=(a[13]*b05-a[14]*b04+a[15]*b03)*d;o[3]=(a[10]*b04-a[9]*b05-a[11]*b03)*d;o[4]=(a[6]*b08-a[4]*b11-a[7]*b07)*d;o[5]=(a[0]*b11-a[2]*b08+a[3]*b07)*d;o[6]=(a[14]*b02-a[12]*b05-a[15]*b01)*d;o[7]=(a[8]*b05-a[10]*b02+a[11]*b01)*d;
    o[8]=(a[4]*b10-a[5]*b08+a[7]*b06)*d;o[9]=(a[1]*b08-a[0]*b10-a[3]*b06)*d;o[10]=(a[12]*b04-a[13]*b02+a[15]*b00)*d;o[11]=(a[9]*b02-a[8]*b04-a[11]*b00)*d;o[12]=(a[5]*b07-a[4]*b09-a[6]*b06)*d;o[13]=(a[0]*b09-a[1]*b07+a[2]*b06)*d;o[14]=(a[13]*b01-a[12]*b03-a[14]*b00)*d;o[15]=(a[8]*b03-a[9]*b01+a[10]*b00)*d;return o;},
  xf:(m,p)=>{const x=p[0],y=p[1],z=p[2],w=m[3]*x+m[7]*y+m[11]*z+m[15];return [(m[0]*x+m[4]*y+m[8]*z+m[12])/w,(m[1]*x+m[5]*y+m[9]*z+m[13])/w,(m[2]*x+m[6]*y+m[10]*z+m[14])/w];}};
function nrm(v){const l=Math.hypot(v[0],v[1],v[2])||1;return [v[0]/l,v[1]/l,v[2]/l];}function crs(a,b){return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];}function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];}
const SKY=`vec3 sky(vec3 d){float y=d.z;vec3 hor=vec3(.80,.84,.87),top=vec3(.36,.46,.57),low=vec3(.34,.40,.42);return y>0.?mix(hor,top,pow(clamp(y,0.,1.),.55)):mix(hor,low,min(1.,-y*5.));}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}`;
const VS=`#version 300 es
layout(location=0) in vec3 aP;layout(location=1) in vec3 aN;layout(location=2) in vec3 aC;layout(location=3) in vec2 aU;layout(location=4) in vec2 aT;
uniform mat4 uPV,uM,uL;uniform float uTime;out vec3 vW,vN,vC;out vec2 vU;flat out vec2 vT;out vec4 vL;
void main(){vec3 q=aP;if(aT.x>4.5){float u=aU.x,w=sin(u*9.-uTime*6.5+aU.y*1.2)*(.25+1.1*u)+sin(u*17.-uTime*10.3)*.28*u+sin(u*5.-uTime*2.1)*.35*u;q.y+=w;q.x+=u*u*.35*sin(uTime*3.1);q.z-=u*u*.45*(.6+.4*sin(uTime*1.7));}vec4 w=uM*vec4(q,1.);vW=w.xyz;vN=mat3(uM)*aN;vC=aC;vU=aU;vT=aT;vL=uL*w;gl_Position=uPV*w;}`;
const FS=`#version 300 es
precision highp float;precision highp sampler2DShadow;
in vec3 vW,vN,vC;in vec2 vU;flat in vec2 vT;in vec4 vL;
uniform vec3 uEye,uSun,uSunC,uFog;uniform sampler2DShadow uSh;uniform sampler2D uName,uFlag;uniform float uSel,uHov,uMir,uWz,uFogN,uFogF;out vec4 o;
${SKY}
float shade(){vec3 p=vL.xyz/vL.w*.5+.5;if(p.x<0.||p.x>1.||p.y<0.||p.y>1.)return 1.;float s=0.;vec2 t=1./vec2(textureSize(uSh,0));
 for(int i=-2;i<=2;i++)for(int j=-2;j<=2;j++)s+=texture(uSh,vec3(p.xy+vec2(i,j)*t*1.2,p.z-.0012));return s/25.;}
void main(){if(uMir>.5&&vW.z>uWz)discard;
 vec3 n=normalize(vN);vec3 v=normalize(uEye-vW);if(dot(n,v)<0.)n=-n;vec3 base=vC;float ty=vT.x,spec=.12,gl=24.;
 vec3 dpx=dFdx(vW),dpy=dFdy(vW);vec2 dux=dFdx(vU),duy=dFdy(vU);vec3 T=dpx*duy.y-dpy*dux.y;T=length(T)>1e-6?normalize(T):vec3(1,0,0);
 if(ty>4.5){base=pow(texture(uFlag,vec2(vU.x,1.-vU.y)).rgb,vec3(2.2));spec=.05;n=normalize(n+vec3(0,0,.0)+T*cos(vU.x*7.-1.)*.3);}
 else if(ty>3.5){vec4 tx=texture(uName,vec2(vU.x,1.-vU.y));if(tx.a<.45)discard;base=vec3(.9);spec=.15;}
 else if(ty>.5&&ty<1.5){base=mix(base,vec3(dot(base,vec3(.3,.55,.15))),.3)*.85;float ph=vU.x*6.2832*3.3;float r=sin(ph);n=normalize(n+T*cos(ph)*.38);base*=.9+.1*r;
   float e=smoothstep(0.,.05,fract(vU.y))*smoothstep(1.,.94,fract(vU.y));base*=mix(.62,1.,e);spec=.22;gl=30.;}
 else if(ty>1.5&&ty<2.5){vec2 f=fract(vU);float m=step(.16,f.x)*step(f.x,.84)*step(.32,f.y)*step(f.y,.7);base=mix(base,vec3(.05,.07,.09),m);spec=mix(.08,.9,m);gl=mix(16.,120.,m);
   base*=mix(.8,1.,smoothstep(0.,.06,f.y));}
 else if(ty>2.5){spec=.32;gl=48.;float b=smoothstep(.0,.12,abs(fract(vW.x/5.)-.5));base*=.96+.04*b;}
 float sh=shade(),di=max(dot(n,uSun),0.)*sh;vec3 amb=mix(vec3(.16,.18,.19),vec3(.40,.45,.50),n.z*.5+.5);
 vec3 col=base*(amb+uSunC*di);vec3 h=normalize(uSun+v);col+=uSunC*spec*pow(max(dot(n,h),0.),gl)*di;
 float F=.04+.96*pow(1.-max(dot(n,v),0.),5.);col=mix(col,sky(reflect(-v,n))*.9,F*(spec+.1));
 float id=vT.y;if(uSel>0.){if(id>.5&&abs(id-uSel)>.5)col=mix(col,vec3(dot(col,vec3(.33))),.75)*.7;else if(id<.5)col=mix(col,vec3(dot(col,vec3(.33))),.4);}
 if(uHov>0.&&abs(id-uHov)<.5)col*=1.28;
 float d=length(vW-uEye);col=mix(col,uFog,smoothstep(uFogN,uFogF,d));o=vec4(pow(aces(col*1.1),vec3(1./2.2)),1.);}`;
const WVS=`#version 300 es
layout(location=0) in vec3 aP;uniform mat4 uPV,uL;out vec3 vW;out vec4 vL;void main(){vW=aP;vL=uL*vec4(aP,1.);gl_Position=uPV*vec4(aP,1.);}`;
const WFS=`#version 300 es
precision highp float;precision highp sampler2DShadow;in vec3 vW;in vec4 vL;uniform vec3 uEye,uSun,uSunC,uFog;uniform float uT,uFogN,uFogF;uniform sampler2DShadow uSh;uniform vec4 uWa,uWb,uWo,uWp;out vec4 o;
${SKY}
float shade(){vec3 p=vL.xyz/vL.w*.5+.5;if(p.x<0.||p.x>1.||p.y<0.||p.y>1.)return 1.;float s=0.;vec2 t=1./vec2(textureSize(uSh,0));for(int i=-1;i<=1;i++)for(int j=-1;j<=1;j++)s+=texture(uSh,vec3(p.xy+vec2(i,j)*t*1.5,p.z-.002));return s/9.;}
// a = (x centre, start x, half length, half beam), b = (strength, 0,0,0)
float wake(vec2 p,vec4 a,vec4 b){if(b.x<.01)return 0.;float dr=b.z==0.?1.:b.z;float s=(p.x-a.x)*dr,q=abs(p.y-b.y),lh=a.z,bh=a.w;float be=-(s+lh),run=(a.x-a.y)*dr+lh*.2;
 float f=0.;if(be>0.&&be<run+20.){float fade=exp(-be/(lh*(b.w>0.?b.w:5.)))*smoothstep(run+20.,run-lh*.3,be);float arm=abs(q-(be*.36+bh*.7));
   f+=exp(-arm*arm/(2.+be*.08))*.9*fade;f+=exp(-q*q/(bh*bh*.5+be*.9))*smoothstep(0.,lh*.15,be)*1.1*fade;}
 if(s>-lh&&s<lh+8.){float u=(s/lh+1.)*.5;float hw=bh*(u<.72?1.:sqrt(max(0.,1.-pow((u-.72)/.28,2.))));float d=abs(q-hw-1.2);f+=exp(-d*d/3.)*smoothstep(.35,.95,u)*.8;
   if(s>lh-4.)f+=exp(-((s-lh-2.)*(s-lh-2.)+q*q*.5)/12.)*.9;}
 return f*b.x;}
vec2 wv(vec2 p,vec2 d,float k,float a,float s){float ph=dot(p,d)*k+uT*s;return d*(a*k*cos(ph));}
void main(){vec2 p=vW.xy;vec2 g=wv(p,normalize(vec2(1,.3)),.21,.05,1.3)+wv(p,normalize(vec2(-.4,1)),.33,.035,1.7)+wv(p,normalize(vec2(.8,-.6)),.71,.016,2.4)+wv(p,normalize(vec2(.2,.9)),1.37,.008,3.1)+wv(p,normalize(vec2(-.9,-.2)),2.9,.004,4.2);
 float d=length(vW-uEye);g*=1./(1.+d*.004);vec3 n=normalize(vec3(-g,1.));vec3 v=normalize(uEye-vW);float F=.02+.98*pow(1.-max(dot(n,v),0.),5.);
 float fm=wake(vW.xy,uWa,uWb)+wake(vW.xy,uWo,uWp);float nz=.55+.45*sin(vW.x*1.7+uT*2.3)*sin(vW.y*2.1-uT*1.9)+.25*sin(vW.x*4.3-vW.y*3.7+uT*3.);fm=clamp(fm*nz,0.,1.);n=normalize(n+vec3(sin(vW.x*3.+uT*4.),cos(vW.y*3.-uT*3.),0)*fm*.25);
 float sh=shade();vec3 deep=vec3(.035,.06,.068)*(.6+.4*sh);vec3 r=sky(reflect(-v,n))*.78;vec3 col=mix(deep,r,F*.85);
 col+=uSunC*pow(max(dot(reflect(-uSun,n),v),0.),260.)*1.6*sh;col=mix(col,vec3(.86,.89,.9)*(.65+.35*sh),fm*.9);col=mix(col,uFog,smoothstep(uFogN,uFogF,d));
 o=vec4(pow(aces(col*1.05),vec3(1./2.2)),max(mix(.7,.95,F),fm*.95));}`;
const SVS=`#version 300 es
layout(location=0) in vec2 aP;out vec2 vP;void main(){vP=aP;gl_Position=vec4(aP,.9999,1.);}`;
const SFS=`#version 300 es
precision highp float;in vec2 vP;uniform mat4 uIPV;uniform vec3 uEye;out vec4 o;
${SKY}
void main(){vec4 a=uIPV*vec4(vP,1.,1.);vec3 d=normalize(a.xyz/a.w-uEye);vec3 c=sky(d);o=vec4(pow(aces(c*1.1),vec3(1./2.2)),1.);}`;
const DVS=`#version 300 es
layout(location=0) in vec3 aP;layout(location=4) in vec2 aT;uniform mat4 uL,uM;flat out float vK;void main(){vK=aT.x;gl_Position=uL*uM*vec4(aP,1.);}`;
const DFS=`#version 300 es
precision mediump float;flat in float vK;out vec4 o;void main(){if(vK>3.5)discard;o=vec4(1);}`;
function glProg(g,vs,fs){const mk=(t,s)=>{const sh=g.createShader(t);g.shaderSource(sh,s);g.compileShader(sh);if(!g.getShaderParameter(sh,g.COMPILE_STATUS))throw new Error(g.getShaderInfoLog(sh));return sh;};
  const p=g.createProgram();g.attachShader(p,mk(g.VERTEX_SHADER,vs));g.attachShader(p,mk(g.FRAGMENT_SHADER,fs));g.linkProgram(p);if(!g.getProgramParameter(p,g.LINK_STATUS))throw new Error(g.getProgramInfoLog(p));
  const u={};const n=g.getProgramParameter(p,g.ACTIVE_UNIFORMS);for(let i=0;i<n;i++){const a=g.getActiveUniform(p,i);u[a.name]=g.getUniformLocation(p,a.name);}return {p,u};}
return {VS,FS,DVS,DFS,SVS,SFS,m4,glProg,nrm,crs,dot};})();

// ================= UTAC assembly & test campus (WebGL2): aerial cut-away of the fab, four production halls left to right = the four package families
window.UTAC_FAB=function(cv,opt){const E=window.UTAC_ENGINE;const g=cv.getContext('webgl2',{antialias:true,alpha:false});if(!g)return false;const {m4,nrm,crs,dot}=E;opt=opt||{};
 let P;try{P={main:E.glProg(g,E.VS,E.FS),depth:E.glProg(g,E.DVS,E.DFS),sky:E.glProg(g,E.SVS,E.SFS)};}catch(e){console.warn('utac fab shader',e);return false;}
 const R=n=>{const x=Math.sin(n*12.9898+78.233)*43758.5453;return x-Math.floor(x);};
 function Mesh(){this.f=[];}
 Mesh.prototype.q=function(p,c,o){this.f.push({p,c,o:o||0});};
 Mesh.prototype.box=function(x0,x1,y0,y1,z0,z1,c,o,top){const P=(x,y,z)=>[x,y,z];if(top!==false)this.q([P(x0,y0,z1),P(x1,y0,z1),P(x1,y1,z1),P(x0,y1,z1)],c,o);
   this.q([P(x1,y0,z0),P(x1,y1,z0),P(x1,y1,z1),P(x1,y0,z1)],c,o);this.q([P(x0,y1,z0),P(x0,y0,z0),P(x0,y0,z1),P(x0,y1,z1)],c,o);
   this.q([P(x0,y1,z0),P(x0,y1,z1),P(x1,y1,z1),P(x1,y1,z0)],c,o);this.q([P(x0,y0,z0),P(x1,y0,z0),P(x1,y0,z1),P(x0,y0,z1)],c,o);};
 Mesh.prototype.bc=function(x,y,w,d,z0,h,c,o){this.box(x-w/2,x+w/2,y-d/2,y+d/2,z0,z0+h,c,o);};
 Mesh.prototype.cyl=function(x,y,z0,z1,r,c,seg,r2){seg=seg||16;r2=r2==null?r:r2;for(let i=0;i<seg;i++){const a=i/seg*Math.PI*2,b=(i+1)/seg*Math.PI*2;
   this.q([[x+Math.cos(a)*r,y+Math.sin(a)*r,z0],[x+Math.cos(b)*r,y+Math.sin(b)*r,z0],[x+Math.cos(b)*r2,y+Math.sin(b)*r2,z1],[x+Math.cos(a)*r2,y+Math.sin(a)*r2,z1]],c,'hull');}
   if(r2>0){const cap=[];for(let i=0;i<seg;i++){const a=i/seg*Math.PI*2;cap.push([x+Math.cos(a)*r2,y+Math.sin(a)*r2,z1]);}this.q(cap,c);}};
 Mesh.prototype.ball=function(x,y,z,r,c,n){n=n||8;for(let i=0;i<n;i++)for(let j=0;j<n*2;j++){const t0=i/n*Math.PI-Math.PI/2,t1=(i+1)/n*Math.PI-Math.PI/2,p0=j/(n*2)*Math.PI*2,p1=(j+1)/(n*2)*Math.PI*2;
   const V=(t,p)=>[x+Math.cos(t)*Math.cos(p)*r,y+Math.cos(t)*Math.sin(p)*r,z+Math.sin(t)*r];this.q([V(t0,p0),V(t0,p1),V(t1,p1),V(t1,p0)],c,'hull');}};
 const lin=x=>Math.pow(x/255,2.2),hx=h=>{const n=parseInt(h.slice(1),16);return [lin(n>>16),lin(n>>8&255),lin(n&255)];};
 function upload(M){const pos=[],nor=[],col=[],uv=[],ty=[];const sub=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]];
   for(const f of M.f){const p=f.p,t=f.o==='hull'?3:f.o==='house'?2:f.o==='box'?1:0,e1=sub(p[1],p[0]),e2=sub(p[p.length-1],p[0]),n=nrm(crs(e1,e2)),c=hx(f.c);let U=nrm(e1),V=nrm(e2),sU=1/2,sV=1/2.59;if(t===2){sU=1/3.2;sV=1/3.6;}
     if(t===1&&Math.abs(n[2])<.9&&Math.abs(U[2])>.5){const s=U;U=V;V=s;}
     for(let i=1;i<p.length-1;i++)[p[0],p[i],p[i+1]].forEach(q=>{pos.push(...q);nor.push(...n);col.push(...c);const d=sub(q,p[0]);uv.push(dot(d,U)*sU,dot(d,V)*sV);ty.push(t,0);});}
   const va=g.createVertexArray();g.bindVertexArray(va);[[pos,3],[nor,3],[col,3],[uv,2],[ty,2]].forEach(([a,n],i)=>{const b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b);g.bufferData(g.ARRAY_BUFFER,new Float32Array(a),g.STATIC_DRAW);g.enableVertexAttribArray(i);g.vertexAttribPointer(i,n,g.FLOAT,false,0,0);});
   g.bindVertexArray(null);return {va,n:pos.length/3};}
 const tr=(x,y,z)=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,x,y,z,1]),rz=a=>{const c=Math.cos(a),s=Math.sin(a);return new Float32Array([c,s,0,0,-s,c,0,0,0,0,1,0,0,0,0,1]);},mul=(a,b)=>m4.mul(a,b);
 // ---------- aerial camera; the four production halls are placed so each one sits under its card column
 const EYE=[0,-138,112],TGT=[0,60,0];const PV=m4.mul(m4.persp(30*Math.PI/180,cv.width/cv.height,5,3000),m4.look(EYE,TGT,[0,0,1]));
 const ndcX=(x,y,z)=>{const m=PV,w=m[3]*x+m[7]*y+m[11]*z+m[15];return (m[0]*x+m[4]*y+m[8]*z+m[12])/w;};
 const solveX=(t,y,z)=>{const a=ndcX(0,y,z),b=ndcX(100,y,z);return (t-a)/(b-a)*100;};
 const HY0=4,HY1=66,HYC=(HY0+HY1)/2;const ZC=[-.693,-.231,.231,.693].map(t=>solveX(t,HYC,0));const HW=(ZC[1]-ZC[0]);
 const BX0=ZC[0]-HW/2,BX1=ZC[3]+HW/2;
 const S=new Mesh(),DYN=[];const dyn=(M,f)=>DYN.push({mesh:upload(M),M:f});
 const FAM=['#c2772c','#2f9e55','#2f7fd8','#7b5cc9'],FLOOR=['#f1dcc4','#cfeedd','#d3e4fa','#e3daf7'],AISLE=['#e8b07a','#7fd3a1','#8bb8f0','#b7a2ea'];
 // ground, roads, landscaping
 S.box(-900,900,-500,700,-.4,0,'#8fb07a',0);
 S.box(-900,900,-40,-26,0,.06,'#5d646d',0);for(let x=-880;x<880;x+=12)S.box(x,x+6,-33.2,-32.8,.06,.08,'#f4f1e6',0);
 S.box(BX1+14,BX1+26,-40,160,0,.06,'#5d646d',0);S.box(BX0-26,BX0-14,-40,160,0,.06,'#5d646d',0);S.box(BX0-26,BX1+26,92,104,0,.06,'#5d646d',0);
 S.box(BX0-6,BX1+6,-26,-2,0,.08,'#c9ced4',0);
 const tree=(x,y,s)=>{S.cyl(x,y,0,2.2*s,.35*s,'#6b4f2f',6);S.ball(x,y,3.6*s,2.4*s,['#3f7d3a','#4b8b3f','#2f6b35','#5a9a45'][Math.floor(R(x*3+y)*4)],5);};
 for(let x=BX0-30;x<BX1+30;x+=11)tree(x+R(x)*3,-44-R(x+1)*4,.9+R(x+2)*.4);for(let y=-20;y<150;y+=13){tree(BX0-34-R(y)*4,y,1);tree(BX1+34+R(y)*4,y,1);}
 // main fab building: cut-away halls, perimeter wall with glazing, loading docks at the front
 S.box(BX0-2,BX1+2,HY0-2,HY1+2,0,.5,'#d4d8dd',0);
 for(let i=0;i<4;i++){const x0=ZC[i]-HW/2+.6,x1=ZC[i]+HW/2-.6;S.box(x0,x1,HY0,HY1,.5,.56,FLOOR[i],0);S.box(ZC[i]-2.2,ZC[i]+2.2,HY0,HY1,.56,.6,AISLE[i],0);S.box(x0,x1,HY0+10,HY0+12.5,.56,.6,AISLE[i],0);}
 const wall=(x0,y0,x1,y1)=>{const dx=x1-x0,dy=y1-y0;if(Math.abs(dx)>Math.abs(dy)){S.box(Math.min(x0,x1),Math.max(x0,x1),y0-.4,y0+.4,.5,5.2,'#e9ecef',0);S.box(Math.min(x0,x1),Math.max(x0,x1),y0-.42,y0+.42,2.2,4.2,'#8fb3cf','house');}
   else{S.box(x0-.4,x0+.4,Math.min(y0,y1),Math.max(y0,y1),.5,5.2,'#e9ecef',0);S.box(x0-.42,x0+.42,Math.min(y0,y1),Math.max(y0,y1),2.2,4.2,'#8fb3cf','house');}};
 wall(BX0-2,HY1+2,BX1+2,HY1+2);wall(BX0-2,HY0-2,BX0-2,HY1+2);wall(BX1+2,HY0-2,BX1+2,HY1+2);
 S.box(BX0-2,BX1+2,HY0-2.4,HY0-1.6,.5,1.6,'#e9ecef',0);
 for(let i=1;i<4;i++){const x=ZC[i]-HW/2;S.box(x-.15,x+.15,HY0,HY1,.5,4.2,'#bcd3e6','hull');S.box(x-.25,x+.25,HY0,HY1,4.2,4.5,'#9aa3ad',0);}
 for(let i=0;i<4;i++){const x=ZC[i];S.box(BX0-2,BX1+2,HY1+1.2,HY1+2.4,5.2,6.4,'#cfd6dd',0);S.box(x-HW/2+1,x+HW/2-1,HY1+1.18,HY1+1.2,5.3,6.3,FAM[i],0);}
 // roof structure: trusses and the back strip of roof with solar panels (front left open = cut-away)
 for(let y=HY0+8;y<HY1;y+=10)S.box(BX0-2,BX1+2,y-.25,y+.25,8.6,9.2,'#9aa3ad',0);for(let i=0;i<=4;i++){const x=ZC[0]-HW/2+i*HW;S.box(x-.3,x+.3,HY0-2,HY1+2,8.6,9.2,'#9aa3ad',0);for(let y=HY0;y<=HY1;y+=10)S.box(x-.35,x+.35,y-.35,y+.35,.5,8.6,'#b9c0c8',0);}
 // front loading docks with trailers
 for(let x=BX0+6;x<BX1-6;x+=9){S.box(x-2,x+2,HY0-2.45,HY0-2.4,.5,4,'#3b4048',0);S.box(x-2.2,x+2.2,HY0-3.4,HY0-2.4,.5,4.6,'#d1d6db',0);}
 // equipment: rows of process tools with family accent, aisles, conveyors, stockers, people
 const tool=(M,x,y,w,d,h,acc,col)=>{M.bc(x,y,w,d,.6,h,col||'#f4f6f8',0);M.bc(x,y-d/2-.02,w*.8,.06,.6+h*.45,h*.4,'#25313d','hull');M.bc(x,y,w*.96,d*.96,.6+h,.18,acc,0);M.bc(x+w/2-.3,y-d/2-.15,.15,.15,.6+h,.9,'#3b4048',0);M.ball(x+w/2-.3,y-d/2-.15,.6+h+1.0,.18,R(x+y)>.2?'#22c55e':'#f59e0b',4);};
 const person=(x,y,ph)=>{const M=new Mesh();M.cyl(0,0,0,1.2,.3,'#f4f6f8',8);M.ball(0,0,1.45,.28,'#f4f6f8',5);M.bc(0,-.25,.3,.06,1.38,.14,'#93c5fd',0);dyn(M,t=>tr(x+Math.sin(t*.25+ph)*2.5,y,.6));};
 ZC.forEach((c,i)=>{const acc=FAM[i];const xs=[];for(let x=c-HW/2+5;x<=c+HW/2-5;x+=6.4)if(Math.abs(x-c)>3.4)xs.push(x);
   // process rows
   [18,26,34,42,50].forEach((y,r)=>xs.forEach((x,k)=>{const h=2.2+R(i*31+r*7+k)*1.2;tool(S,x,y,4.4,3.2,h,acc,(r+k)%3?'#f4f6f8':'#e6e9ed');}));
   // stockers along the back
   for(let x=c-HW/2+4;x<c+HW/2-3;x+=5.2){S.bc(x,60,4.4,4,.6,5,'#e9ecef',0);S.bc(x,57.96,3.8,.08,1.2,3.8,'#2b3a4a','hull');S.bc(x,57.94,4.4,.08,5.0,.4,acc,0);}
   // signature equipment per family
   // conveyors down both aisles with moving trays, AGVs and people
   [c-1.2,c+1.2].forEach((x,s)=>{S.box(x-.5,x+.5,HY0+12,HY1-6,1.2,1.4,'#4b5563',0);const M=new Mesh();M.bc(0,0,.8,1.2,0,.25,s?acc:'#1f2937',0);const mh=upload(M);
     for(let k=0;k<9;k++)DYN.push({mesh:mh,M:t=>{const L=HY1-HY0-19;const u=((t*(s?2.2:-2.2)+k*L/9)%L+L)%L;return tr(x,HY0+12.5+u,1.4);}});});
   {const M=new Mesh();M.bc(0,0,2.2,1.6,0,.9,'#f59e0b',0);M.bc(0,0,2.0,1.4,.9,.5,acc,0);dyn(M,t=>{const L=2*(HW-8);let u=((t*3.5+i*9)%L+L)%L;const x=u<L/2?c-HW/2+4+u:c+HW/2-4-(u-L/2);return tr(x,HY0+11.6,.6);});}
   for(let k=0;k<5;k++)person(c+(R(i*9+k)-.5)*HW*.7,14+k*8+R(k)*2,i+k);});
 // the hall's showcase workstation (same model as the close-up) at the front centre of each hall
 ZC.forEach((c,i)=>{const W=new Mesh();window.UTAC_WS.stat(W,i);const k=.075;W.f.forEach(f=>{f.p=f.p.map(q=>[c+q[0]*k,HY0+7+q[1]*k,.6+q[2]*k]);});S.f.push(...W.f);
   for(let l=0;l<3;l++){const y=HY0+7+window.UTAC_WS.LY(l)*k;S.bc(c+(window.UTAC_WS.XP-14)*k,y+10*k,1.4,.5,.6+10.3*k,.35,'#f4f6f8',0);S.bc(c+(window.UTAC_WS.XP-6)*k,y+12.5*k,1.65,.9,.6,.45,'#f59e0b',0);
     const M=new Mesh();M.bc(0,0,.5,.5,0,.12,['#c9824a','#2f7a4b','#b8c0c8','#3b4048'][i],0);const mh=upload(M);
     for(let n=0;n<5;n++)DYN.push({mesh:mh,M:t=>{const L=6.6;const u=((t*.9+n*L/5+l*.7)%L+L)%L;return tr(c-3.3+u,y,.6+1.95*k);}});}});
 // overhead hoist rails over each hall with moving wafer pods
 ZC.forEach((c,i)=>{[c-HW/4,c+HW/4].forEach((x,s)=>{S.box(x-.2,x+.2,HY0+3,HY1-3,7.8,8.1,'#7d8590',0);const M=new Mesh();M.bc(0,0,1.2,1.6,-1.2,1.2,'#e5e7eb',0);M.bc(0,0,1.0,1.4,-1.8,.6,'#cbd5e1',0);
   for(let k=0;k<2;k++)dyn(M,t=>{const L=HY1-HY0-8;const u=((t*(s?4:-4)+k*L/2+i*7)%L+L)%L;return tr(x,HY0+4+u,7.8);});});});
 // office block (back left) with glazing; car park; utility yard (back right) with cooling towers, gas tanks and pipe rack
 {const x0=BX0-2,x1=BX0+40;S.box(x0,x1,HY1+12,HY1+32,0,24,'#e7ebef',0);S.box(x0-.05,x1+.05,HY1+11.95,HY1+32.05,2,22,'#7fa6c6','house');S.box(x0,x1,HY1+12,HY1+32,24,24.6,'#cfd6dd',0);
   for(let x=x0+3;x<x1-3;x+=4)S.box(x,x+3,HY1+15,HY1+29,24.6,25.4,'#1e3a5f','hull');}
 for(let r=0;r<3;r++)for(let k=0;k<12;k++){const x=BX0+48+k*4.2,y=HY1+12+r*7;S.box(x-1.8,x+1.8,y-.9,y+.9,.06,.1,'#e9edf1',0);if(R(r*13+k)>.25){const cc=['#e5e7eb','#1f2937','#b91c1c','#2563eb','#9ca3af','#f8fafc'][Math.floor(R(k*7+r)*6)];S.bc(x,y,1.8,4,.1,1.1,cc,0);S.bc(x,y-.2,1.6,2.2,1.2,.6,'#334155',0);}}
 {const ux=BX1-60;S.box(ux,BX1+2,HY1+10,HY1+40,0,.08,'#a8adb3',0);
   for(let k=0;k<4;k++){const x=ux+8+k*11;S.bc(x,HY1+18,9,9,.08,6,'#d6dbe0',0);S.cyl(x,HY1+18,6.1,7.2,3.2,'#9aa3ad',18);const F=new Mesh();F.bc(0,0,6,.6,0,.15,'#374151',0);F.bc(0,0,.6,6,0,.15,'#374151',0);dyn(F,t=>mul(tr(x,HY1+18,7.0),rz(t*4+k)));}
   for(let k=0;k<5;k++){S.cyl(ux+6+k*8,HY1+32,.08,14,2.6,'#f4f6f8',18,2.6);S.ball(ux+6+k*8,HY1+32,14,2.6,'#f4f6f8',6);S.bc(ux+6+k*8,HY1+29.3,1.2,.1,4,1,'#22c55e',0);}
   S.box(ux,BX1,HY1+24.6,HY1+25.4,5.6,6.2,'#9aa3ad',0);for(let x=ux+2;x<BX1;x+=6)S.bc(x,HY1+25,.5,.5,.08,5.6,'#9aa3ad',0);}
 // trucks on the front road, one reversing to the docks
 for(let k=0;k<5;k++){const M=new Mesh();M.bc(0,0,12,2.6,.6,3.6,['#f8fafc','#e5e7eb','#dbeafe','#fef3c7','#f1f5f9'][k],0);M.bc(7.2,0,2.4,2.5,.6,2.8,['#1d4ed8','#b91c1c','#1f2937','#15803d','#f59e0b'][k],0);M.bc(7.9,0,.9,2.3,2.2,.9,'#1e293b','hull');
   [-4,-2.4,3.5,7.5].forEach(x=>{M.cyl(x,1.25,.0,.0,.0,'#111');M.bc(x,1.3,1.0,.3,0,1,'#111827',0);M.bc(x,-1.3,1.0,.3,0,1,'#111827',0);});
   dyn(M,t=>{const L=1600;const u=((t*(k%2?-9:11)+k*330)%L+L)%L-800;return k%2?mul(tr(u,-36.5,0),rz(Math.PI)):tr(u,-29.5,0);});}
 const ST=upload(S);
 // ---------- shadow map, sky
 const SM=2048,st=g.createTexture();g.bindTexture(g.TEXTURE_2D,st);g.texStorage2D(g.TEXTURE_2D,1,g.DEPTH_COMPONENT24,SM,SM);
 [[g.TEXTURE_MIN_FILTER,g.LINEAR],[g.TEXTURE_MAG_FILTER,g.LINEAR],[g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE],[g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE],[g.TEXTURE_COMPARE_MODE,g.COMPARE_REF_TO_TEXTURE],[g.TEXTURE_COMPARE_FUNC,g.LEQUAL]].forEach(([a,b])=>g.texParameteri(g.TEXTURE_2D,a,b));
 const fb=g.createFramebuffer();g.bindFramebuffer(g.FRAMEBUFFER,fb);g.framebufferTexture2D(g.FRAMEBUFFER,g.DEPTH_ATTACHMENT,g.TEXTURE_2D,st,0);g.drawBuffers([g.NONE]);g.readBuffer(g.NONE);g.bindFramebuffer(g.FRAMEBUFFER,null);
 const blank=g.createTexture();g.activeTexture(g.TEXTURE1);g.bindTexture(g.TEXTURE_2D,blank);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,1,1,0,g.RGBA,g.UNSIGNED_BYTE,new Uint8Array([255,255,255,255]));g.activeTexture(g.TEXTURE0);
 const sva=(()=>{const va=g.createVertexArray();g.bindVertexArray(va);const b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b);g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),g.STATIC_DRAW);g.enableVertexAttribArray(0);g.vertexAttribPointer(0,2,g.FLOAT,false,0,0);g.bindVertexArray(null);return va;})();
 const I=tr(0,0,0),sun=nrm([-.5,-.55,.68]);const CX=(BX0+BX1)/2,CY=40,RS=Math.max(BX1-BX0,140)*.62;
 const L=m4.mul(m4.ortho(-RS,RS,-RS*.75,RS*.75,1,900),m4.look([CX+sun[0]*400,CY+sun[1]*400,sun[2]*400],[CX,CY,0],[0,0,1]));
 const fog=[.80,.85,.89],sunC=[2.0,1.9,1.72],T0=performance.now();
 function drawSet(U,t){g.uniformMatrix4fv(U.uM,false,I);g.bindVertexArray(ST.va);g.drawArrays(g.TRIANGLES,0,ST.n);for(const d of DYN){g.uniformMatrix4fv(U.uM,false,d.M(t));g.bindVertexArray(d.mesh.va);g.drawArrays(g.TRIANGLES,0,d.mesh.n);}}
 // ---- camera: aerial overview, or a flight into one hall's showcase workstation (ends on the exact pose of the close-up)
 const SMS=x=>x<=0?0:x>=1?1:x*x*x*(x*(x*6-15)+10),LR=(a,b,k)=>a.map((v,i)=>v+(b[i]-v)*k);
 const KW=.075,WSY=HY0+7,poseOf=i=>i==null?{E:EYE,T:TGT,f:30}:{E:[ZC[i]+10*KW,WSY-118*KW,.6+74*KW],T:[ZC[i],WSY+2*KW,.6],f:32};
 let CAM={a:poseOf(null),b:poseOf(null),t0:0,d:1,cb:null},HOLD=false;
 function camNow(){const k=SMS((performance.now()-CAM.t0)/CAM.d),e=LR(CAM.a.E,CAM.b.E,k),tg=LR(CAM.a.T,CAM.b.T,k),f=CAM.a.f+(CAM.b.f-CAM.a.f)*k;
   if(k>=1&&CAM.cb){const c=CAM.cb;CAM.cb=null;setTimeout(c,0);}return {E:e,PV:m4.mul(m4.persp(f*Math.PI/180,cv.width/cv.height,.3,3000),m4.look(e,tg,[0,0,1]))};}
 function fly(to,cb,d){const now=camNow();const k=SMS((performance.now()-CAM.t0)/CAM.d);const cur={E:LR(CAM.a.E,CAM.b.E,k),T:LR(CAM.a.T,CAM.b.T,k),f:CAM.a.f+(CAM.b.f-CAM.a.f)*k};CAM={a:cur,b:to,t0:performance.now(),d:d||1700,cb};HOLD=false;}
 window.UTAC_FAB_CTL={focus:(i,cb)=>fly(poseOf(i),cb,1800),unfocus:(cb)=>fly(poseOf(null),cb,1500),hold:v=>{HOLD=v;}};
 function frame(){if(HOLD)return;const t=(performance.now()-T0)/1000;
   g.bindFramebuffer(g.FRAMEBUFFER,fb);g.viewport(0,0,SM,SM);g.clear(g.DEPTH_BUFFER_BIT);g.enable(g.DEPTH_TEST);g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(2,4);
   g.useProgram(P.depth.p);g.uniformMatrix4fv(P.depth.u.uL,false,L);drawSet(P.depth.u,t);g.disable(g.POLYGON_OFFSET_FILL);
   g.bindFramebuffer(g.FRAMEBUFFER,null);g.viewport(0,0,cv.width,cv.height);g.clearColor(fog[0],fog[1],fog[2],1);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT);
   const cam=camNow();const PVc=cam.PV,EYEc=cam.E;
   g.useProgram(P.sky.p);g.depthMask(false);g.uniformMatrix4fv(P.sky.u.uIPV,false,m4.inv(PVc));g.uniform3fv(P.sky.u.uEye,EYEc);g.bindVertexArray(sva);g.drawArrays(g.TRIANGLES,0,3);g.depthMask(true);
   const U=P.main.u;g.useProgram(P.main.p);g.uniformMatrix4fv(U.uPV,false,PVc);g.uniformMatrix4fv(U.uL,false,L);g.uniform3fv(U.uEye,EYEc);g.uniform3fv(U.uSun,sun);g.uniform3fv(U.uSunC,sunC);g.uniform3fv(U.uFog,fog);
   g.uniform1f(U.uFogN,260);g.uniform1f(U.uFogF,1400);g.uniform1f(U.uWz,-99);g.uniform1f(U.uSel,0);g.uniform1f(U.uHov,0);g.uniform1f(U.uMir,0);if(U.uTime)g.uniform1f(U.uTime,t);
   g.activeTexture(g.TEXTURE0);g.bindTexture(g.TEXTURE_2D,st);g.uniform1i(U.uSh,0);if(U.uName)g.uniform1i(U.uName,1);if(U.uFlag)g.uniform1i(U.uFlag,1);
   drawSet(U,t);g.bindVertexArray(null);}
 let last=0,first=true;function loop(ts){if(!cv.isConnected&&!first)return;if(first||(!document.hidden&&ts-last>=33)){last=ts;try{frame();}catch(e){console.warn('utac frame',e);return;}if(first){first=false;opt.onFirst&&opt.onFirst();}}requestAnimationFrame(loop);}
 requestAnimationFrame(loop);return true;};

// simple 2D fallback when WebGL2 is unavailable: light cleanroom with four coloured bays
window.UTAC_FAB2D=function(cv,opt){const x=cv.getContext('2d'),W=cv.width,H=cv.height;const gr=x.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#e9edf1');gr.addColorStop(1,'#cfd5db');x.fillStyle=gr;x.fillRect(0,0,W,H);
 const C=['#c2772c','#2f9e55','#2f7fd8','#7b5cc9'];[49,322,594,867].forEach((x0,i)=>{const s=W/1180;x.fillStyle='rgba(255,255,255,.7)';x.fillRect(x0*s,200*s,264*s,300*s);x.fillStyle=C[i];x.fillRect(x0*s,496*s,264*s,6*s);});opt&&opt.onFirst&&opt.onFirst();return true;};

// ---- animated cleanroom in place of the static photo (product hub, Realistic view)
(function(){var tries=0,iv=setInterval(function(){var b=document.getElementById('pbase');if(!b){if(++tries>600)clearInterval(iv);return;}clearInterval(iv);
  if(b.dataset.city)return;b.dataset.city='1';var c=document.createElement('canvas');c.id='pcity';c.setAttribute('aria-label','Animated 3D layout of a semiconductor assembly campus: leadframe, laminate, advanced packaging and specialty package halls');
  c.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none';b.parentNode.insertBefore(c,b.nextSibling);b.style.visibility='hidden';
  c.width=1770;c.height=808;var o={onFirst:function(){try{var u=c.toDataURL('image/jpeg',.82);b.src=u;var bl=document.getElementById('pblur');if(bl)bl.src=u;}catch(e){}}};
  var go=function(){var ok=false;try{ok=window.UTAC_FAB(c,o);}catch(e){console.warn('utac WebGL failed',e);}if(!ok){var c2=c.cloneNode();c.parentNode.replaceChild(c2,c);window.UTAC_FAB2D(c2,o);}};
  if(window.requestIdleCallback)requestIdleCallback(go,{timeout:600});else setTimeout(go,120);},50);})();

// ================= assembly workstation shared by the campus view and the close-up: glass-hooded cell with three lines
// (one per package type of the family), a SCARA robot per line fed by a tray cart, and in-line process stations.
// Units: centimetres. M = mesh with box/bc/cyl/ball; kinds = the three package types for the family.
window.UTAC_WS=(function(){
 const FAM=['#c2772c','#2f9e55','#2f7fd8','#7b5cc9'],CU='#c9824a',AU='#e3b341',MO='#1f2329',SUB='#2f7a4b',DIE='#5b6472',SI='#b8c0c8',STEEL='#9aa3ad';
 const KINDS=[['qfn','soic','qfp'],['bga','flip','lga'],['wlcsp','bump','sip'],['mems','image','power']];
 const LY=l=>(l-1)*20,XP=-22,XA=0,XB=16,XT=32,X0=-46,X1=46,PITCH=8;
 // stations along each line
 function stat(M,fam){const a=FAM[fam];
   M.bc(0,0,112,86,-5,5,'#e5e8ec');M.bc(0,0,110,84,0,.3,'#cfd4da');
   [[-55,-42],[55,-42],[-55,42],[55,42]].forEach(([x,y])=>M.bc(x,y,2.6,2.6,0,58,'#d6dbe0'));M.bc(0,42,110,2.6,56,2.6,'#d6dbe0');M.bc(0,-42,110,2.6,56,2.6,'#d6dbe0');M.bc(-55,0,2.6,84,56,2.6,'#d6dbe0');M.bc(55,0,2.6,84,56,2.6,'#d6dbe0');
   M.bc(0,42.8,106,.3,6,48,'#a9c0d4','hull');M.bc(0,0,112,3,58.6,2,a);
   for(let l=0;l<3;l++){const y=LY(l);
     M.bc(0,y,96,9,.3,1.6,'#4b5563');M.bc(0,y-4.6,96,.4,.3,2.6,STEEL);M.bc(0,y+4.6,96,.4,.3,2.6,STEEL);
     // process A head (bonder / ball attach / bumper / lidder) and process B press (mould / underfill / shield / seal) and trim press
     M.bc(XA,y+7,6,4,.3,16,'#eef1f4');M.bc(XA,y+3.5,4,7,14,3,'#dfe3e8');
     M.bc(XB,y,10,12,.3,1,'#9aa3ad');[[-4.5,-5.5],[4.5,-5.5],[-4.5,5.5],[4.5,5.5]].forEach(([dx,dy])=>M.bc(XB+dx,y+dy,1,1,1.3,15,STEEL));M.bc(XB,y,11,13,16,3,'#4b5563');M.bc(XB,y,10.5,12.5,19,.6,a);
     M.bc(XT,y,8,10,.3,1,'#9aa3ad');[[-3.5,-4.5],[3.5,4.5],[3.5,-4.5],[-3.5,4.5]].forEach(([dx,dy])=>M.bc(XT+dx,y+dy,.8,.8,1.3,12,STEEL));M.bc(XT,y,9,11,13,2,'#6b7280');
     // output tray at the end of the line
     M.bc(X1+4,y,7,9,.3,1.6,'#1f2937');
     // robot pedestal behind the line and the cart lane
     M.cyl(XP-14,y+10,.3,10,3.4,'#e7eaee',20);}
   M.bc(-20,-40,90,3,.3,.05,'#f2d14b');}
 return {FAM,KINDS,LY,XP,XA,XB,XT,X0,X1,PITCH,stat};})();

// ================= close-up when a hall is opened (fades in over the stage while the camera dives from the campus height)
window.UTAC_MICRO=function(cv,fam){const E=window.UTAC_ENGINE,WS=window.UTAC_WS;const g=cv.getContext('webgl2',{antialias:true,alpha:true,premultipliedAlpha:false});if(!g)return null;const {m4,nrm,crs,dot}=E;
 let P;try{P={main:E.glProg(g,E.VS,E.FS),depth:E.glProg(g,E.DVS,E.DFS)};}catch(e){console.warn('utac micro shader',e);return null;}
 function Mesh(){this.f=[];}Mesh.prototype.q=function(p,c,o){this.f.push({p,c,o:o||0});};
 Mesh.prototype.box=function(x0,x1,y0,y1,z0,z1,c,o){const P=(x,y,z)=>[x,y,z];this.q([P(x0,y0,z1),P(x1,y0,z1),P(x1,y1,z1),P(x0,y1,z1)],c,o);this.q([P(x1,y0,z0),P(x1,y1,z0),P(x1,y1,z1),P(x1,y0,z1)],c,o);
   this.q([P(x0,y1,z0),P(x0,y0,z0),P(x0,y0,z1),P(x0,y1,z1)],c,o);this.q([P(x0,y1,z0),P(x0,y1,z1),P(x1,y1,z1),P(x1,y1,z0)],c,o);this.q([P(x0,y0,z0),P(x1,y0,z0),P(x1,y0,z1),P(x0,y0,z1)],c,o);};
 Mesh.prototype.bc=function(x,y,w,d,z0,h,c,o){this.box(x-w/2,x+w/2,y-d/2,y+d/2,z0,z0+h,c,o);};
 Mesh.prototype.cyl=function(x,y,z0,z1,r,c,seg,r2){seg=seg||18;r2=r2==null?r:r2;for(let i=0;i<seg;i++){const a=i/seg*Math.PI*2,b=(i+1)/seg*Math.PI*2;this.q([[x+Math.cos(a)*r,y+Math.sin(a)*r,z0],[x+Math.cos(b)*r,y+Math.sin(b)*r,z0],[x+Math.cos(b)*r2,y+Math.sin(b)*r2,z1],[x+Math.cos(a)*r2,y+Math.sin(a)*r2,z1]],c,'hull');}
   if(r2>0){const cap=[];for(let i=0;i<seg;i++){const a=i/seg*Math.PI*2;cap.push([x+Math.cos(a)*r2,y+Math.sin(a)*r2,z1]);}this.q(cap,c);}};
 Mesh.prototype.ball=function(x,y,z,r,c,n){n=n||5;for(let i=0;i<n;i++)for(let j=0;j<n*2;j++){const t0=i/n*Math.PI-Math.PI/2,t1=(i+1)/n*Math.PI-Math.PI/2,p0=j/(n*2)*Math.PI*2,p1=(j+1)/(n*2)*Math.PI*2;const V=(t,p)=>[x+Math.cos(t)*Math.cos(p)*r,y+Math.cos(t)*Math.sin(p)*r,z+Math.sin(t)*r];this.q([V(t0,p0),V(t0,p1),V(t1,p1),V(t1,p0)],c,'hull');}};
 Mesh.prototype.arc=function(a,b,h,w,c){const N=8;let pr=null;for(let i=0;i<=N;i++){const t=i/N,p=[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t+Math.sin(t*Math.PI)*h];if(pr)this.box(Math.min(pr[0],p[0])-w,Math.max(pr[0],p[0])+w,Math.min(pr[1],p[1])-w,Math.max(pr[1],p[1])+w,Math.min(pr[2],p[2])-w,Math.max(pr[2],p[2])+w,c,'hull');pr=p;}};
 const lin=x=>Math.pow(x/255,2.2),hx=h=>{const n=parseInt(h.slice(1),16);return [lin(n>>16),lin(n>>8&255),lin(n&255)];};
 function upload(M){const pos=[],nor=[],col=[],uv=[],ty=[];const sub=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]];for(const f of M.f){const p=f.p,t=f.o==='hull'?3:0,e1=sub(p[1],p[0]),e2=sub(p[p.length-1],p[0]),n=nrm(crs(e1,e2)),c=hx(f.c);
     for(let i=1;i<p.length-1;i++)[p[0],p[i],p[i+1]].forEach(q=>{pos.push(...q);nor.push(...n);col.push(...c);uv.push(0,0);ty.push(t,0);});}
   const va=g.createVertexArray();g.bindVertexArray(va);[[pos,3],[nor,3],[col,3],[uv,2],[ty,2]].forEach(([a,n],i)=>{const b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b);g.bufferData(g.ARRAY_BUFFER,new Float32Array(a),g.STATIC_DRAW);g.enableVertexAttribArray(i);g.vertexAttribPointer(i,n,g.FLOAT,false,0,0);});g.bindVertexArray(null);return {va,n:pos.length/3};}
 const tr=(x,y,z)=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,x,y,z,1]),rz=a=>{const c=Math.cos(a),s=Math.sin(a);return new Float32Array([c,s,0,0,-s,c,0,0,0,0,1,0,0,0,0,1]);},mul=(a,b)=>m4.mul(a,b);
 const {LY,XP,XA,XB,XT,X0,X1,PITCH}=WS,KIND=WS.KINDS[fam],ACC=WS.FAM[fam],CU='#c9824a',AU='#e3b341',MO='#1f2329',SUB='#2f7a4b',DIE='#4b5563',SI='#b8c0c8';
 const S=new Mesh();WS.stat(S,fam);const ST=upload(S);
 // ---- unit meshes per package kind and per stage: 0 bare carrier, 1 die placed, 2 after process A, 3 after process B, 4 finished (after trim & form)
 function unit(kind,stage,only){const M=new Mesh();const inc=s=>only?stage===s:stage>=s;const lf=kind==='qfn'||kind==='soic'||kind==='qfp',lam=kind==='bga'||kind==='flip'||kind==='lga'||kind==='sip';
   const base=()=>{if(lf){M.bc(0,0,7.6,7.6,0,.25,CU);M.bc(0,0,3.2,3.2,.25,.06,'#d9a066');const n=kind==='qfp'?5:4,sides=kind==='soic'?[[0,1],[0,-1]]:[[0,1],[0,-1],[1,0],[-1,0]];
       sides.forEach(([sx,sy])=>{for(let i=0;i<n;i++){const o=(i-(n-1)/2)*1.05;sy?M.bc(o,sy*2.6,.5,1.8,.25,.06,'#d9a066'):M.bc(sx*2.6,o,1.8,.5,.25,.06,'#d9a066');}});}
     else if(lam){M.bc(0,0,7.6,7.6,0,.5,SUB);if(kind==='lga'||kind==='bga')for(let i=-1;i<=1;i+=2)for(let j=-1;j<=1;j+=2)M.bc(i*2.8,j*2.8,.7,.7,.5,.05,'#d4af37');}
     else if(kind==='wlcsp'||kind==='bump'){M.bc(0,0,7.6,7.6,0,.6,SI);for(let k=-1;k<=1;k++){M.bc(k*2.5,0,.12,7.6,.6,.03,'#8b95a1');M.bc(0,k*2.5,7.6,.12,.6,.03,'#8b95a1');}}
     else{M.bc(0,0,7.6,7.6,0,.6,kind==='power'?CU:'#3b4048');}};
   if(inc(0))base();const z0=lf?.31:lam?.55:.63;
   if(inc(1)&&!(kind==='wlcsp'||kind==='bump')){M.bc(0,0,kind==='power'?3.6:2.8,kind==='soic'?2.2:2.8,z0,.7,kind==='image'?'#1e3a8a':DIE);}
   if(inc(2)){const zt=z0+.7;
     if(lf||kind==='bga'||kind==='lga'||kind==='mems'||kind==='image'){const n=lf?(kind==='qfp'?5:4):4,sides=kind==='soic'?[[0,1],[0,-1]]:[[0,1],[0,-1],[1,0],[-1,0]];
       sides.forEach(([sx,sy])=>{for(let i=0;i<n;i++){const o=(i-(n-1)/2)*(lf?1.05:.8);const a=sy?[o*.5,sy*1.1,zt]:[sx*1.1,o*.5,zt],b=sy?[o,sy*2.7,z0-.1]:[sx*2.7,o,z0-.1];M.arc(a,b,1.2,.07,AU);}});}
     if(kind==='flip'){M.bc(0,0,3.4,3.4,z0-.05,.3,'#e8e3d3');}
     if(kind==='wlcsp'||kind==='bump'){for(let i=-1;i<=1;i++)for(let j=-1;j<=1;j++){const x=i*2.5,y=j*2.5;if(kind==='bump')M.cyl(x,y,.63,1.3,.5,CU,8);else M.ball(x,y,.95,.45,'#e5e7eb',4);}}
     if(kind==='sip'){M.bc(2.2,2,1.4,.8,z0,.5,'#a16207');M.bc(2.2,-.8,1.4,.8,z0,.5,'#a16207');M.bc(-2.4,2.3,1.6,1.6,z0,.6,DIE);}
     if(kind==='power'){M.box(-1.6,2.8,-1.3,1.3,z0+.7,z0+.95,'#b87333');M.box(2.6,3.6,-1.3,1.3,.6,z0+.95,'#b87333');}}
   if(inc(3)){if(lf){M.bc(0,0,kind==='soic'?5.4:5.6,kind==='soic'?3.8:5.6,.25,1.5,MO);}
     else if(kind==='bga'||kind==='lga'){M.bc(0,0,7.2,7.2,.5,1.5,MO);}
     else if(kind==='flip'){M.bc(0,0,6.2,6.2,.5,.15,'#d1d5db');M.bc(0,0,5.8,5.8,.65,1.0,'#cbd5e1');}
     else if(kind==='sip'){M.bc(0,0,7.4,7.4,.5,1.6,'#cbd5e1');}
     else if(kind==='mems'){M.bc(0,0,5,5,.6,1.8,'#d1d5db');M.cyl(1.4,1.4,2.4,2.45,.35,'#374151',10);}
     else if(kind==='image'){M.bc(0,0,6,6,.6,.9,'#3b4048');M.bc(0,0,5.4,5.4,1.5,.15,'#93c5fd');}
     else if(kind==='power'){M.bc(0,0,6.6,5.2,.6,1.5,MO);}
     else if(kind==='wlcsp'){M.bc(0,0,7.6,7.6,.6,.04,'#9ca3af');}}
   if(inc(4)){if(kind==='soic'){for(let i=0;i<4;i++){const o=(i-1.5)*1.05;[1,-1].forEach(s=>{M.bc(o,s*2.4,.45,1.2,.9,.12,'#d1d5db');M.bc(o,s*3.0,.45,.12,.2,.8,'#d1d5db');M.bc(o,s*3.3,.45,.6,.2,.12,'#d1d5db');});}}
     if(kind==='qfp'){for(let i=0;i<5;i++){const o=(i-2)*1.05;[1,-1].forEach(s=>{M.bc(o,s*3.3,.4,1.2,.9,.12,'#d1d5db');M.bc(s*3.3,o,1.2,.4,.9,.12,'#d1d5db');});}}
     if(kind==='bga'||kind==='flip'){for(let i=-2;i<=2;i++)for(let j=-2;j<=2;j++)M.ball(i*1.4,j*1.4,-.25,.4,'#d9dde2',3);}}
   return upload(M);}
 const U=KIND.map(k=>[0,1,2,3,4].map(s=>unit(k,s,true)));
 // die on the robot gripper and the tray cart (12 dies)
 const GD=new Mesh();GD.bc(0,0,2.8,2.8,0,.7,fam===3?'#1e3a8a':DIE);const mGD=upload(GD);
 const CART=new Mesh();CART.bc(0,0,22,12,0,5,'#f59e0b');CART.bc(0,0,21,11,5,.5,'#374151');CART.bc(0,0,19,10,5.5,.8,'#1f2937');[[-8,-6],[8,-6],[-8,6],[8,6]].forEach(([x,y])=>CART.cyl(x,y,0,0,1,'#111827',10));const mCart=upload(CART);
 const SLOT=new Mesh();SLOT.bc(0,0,2.8,2.8,0,.7,fam===3?'#1e3a8a':DIE);const mSlot=upload(SLOT);
 // robot links (SCARA): base column, arm 1, arm 2, quill
 const A1=14,A2=12;const L1=new Mesh();L1.bc(A1/2,0,A1+4,5,0,3.6,'#f4f6f8');L1.cyl(0,0,-1,3.8,3.2,'#dfe3e8',20);L1.bc(A1/2,0,A1,5.2,1.4,.7,ACC);const mL1=upload(L1);
 const L2=new Mesh();L2.bc(A2/2,0,A2+3,4.2,0,3,'#f4f6f8');L2.cyl(0,0,0,3.2,2.6,'#dfe3e8',20);L2.cyl(A2,0,-1,3.2,1.6,'#e5e7eb',14);const mL2=upload(L2);
 const QL=new Mesh();QL.cyl(0,0,-14,0,.6,'#9aa3ad',10);QL.cyl(0,0,-14.6,-14,1.2,'#1f2937',12);const mQ=upload(QL);
 const HEAD=new Mesh();HEAD.bc(0,0,2.4,2.4,0,4,'#6b7280');HEAD.cyl(0,0,-1,0,.3,'#e3b341',8);const mHead=upload(HEAD);
 const PLAT=new Mesh();PLAT.bc(0,0,9.6,11.6,0,1.4,'#374151');const mPlat=upload(PLAT);
 // ---- timing: one cycle per unit; the strip indexes one pitch at the end of each cycle (smooth start/stop)
 const T=3.0,sm=x=>x<=0?0:x>=1?1:x*x*x*(x*(x*6-15)+10);
 const ik=(bx,by,x,y)=>{const dx=x-bx,dy=y-by,d=Math.min(A1+A2-.01,Math.hypot(dx,dy));const c2=(d*d-A1*A1-A2*A2)/(2*A1*A2),q2=-Math.acos(Math.max(-1,Math.min(1,c2)));const q1=Math.atan2(dy,dx)-Math.atan2(A2*Math.sin(q2),A1+A2*Math.cos(q2));return [q1,q2];};
 const lerp=(a,b,k)=>a+(b-a)*k;
 function items(t){const out=[[ST,tr(0,0,0)]];
   for(let l=0;l<3;l++){const y=LY(l),ph=l*.37,tt=t+ph*T,cyc=Math.floor(tt/T),u=(tt%T)/T;const steps=cyc+sm((u-.8)/.2);
     // units on the strip
     for(let n=-1;n<14;n++){const id=cyc-n;const x=XP+(steps-id)*PITCH;if(x<X0||x>X1+4)continue;
       let st=x<XP-.01?0:1;const placedNow=(id===cyc)&&u<.62;if(id===cyc&&u<.62)st=0;if(x>XA+.5)st=2;if(x>XB+.5)st=3;if(x>XT+.5)st=4;
       const Mx=tr(Math.min(x,X1+4),y,1.9+(x>X1?1.6:0));for(let s=0;s<=st;s++)out.push([U[l][s],Mx]);}
     // process heads bob while a unit is under them (strip is still)
     const still=u<.8;out.push([mHead,tr(XA,y+1.8,13.6-(still?2.4*Math.abs(Math.sin(u*Math.PI*6)):0))]);
     out.push([mPlat,tr(XB,y,16-(still?11.6*sm(Math.sin(Math.min(1,u/.8)*Math.PI)):0))]);
     out.push([mPlat,tr(XT,y,13-(still?8.6*sm(Math.sin(Math.min(1,u/.8)*Math.PI)):0))]);
     // tray cart: 12 dies; when empty it rolls out and a full one rolls in
     const used=cyc%12,swap=used===11&&u>.82,cx=XP-6,cy=y+12.5;const roll=swap?sm((u-.82)/.18):0;
     out.push([mCart,tr(cx-roll*30,cy,.3)]);for(let s=0;s<12;s++){const picked=s<used||(s===used&&u>.36);if(picked&&!swap)continue;const sx=cx-7.5+(s%4)*5,sy=cy-3+(s/4|0)*3.2;out.push([mSlot,tr(sx-roll*30,sy,6.3)]);}
     // robot: smooth joint-space moves  idle -> tray slot -> lift -> over strip -> place -> back
     const bx=XP-14,by=y+10,slot=used,tx=cx-7.5+(slot%4)*5,tyy=cy-3+(slot/4|0)*3.2;const qT=ik(bx,by,tx,tyy),qP=ik(bx,by,XP,y),qH=ik(bx,by,(tx+XP)/2,(tyy+y)/2+3);
     let q,zq,hold;if(u<.22){const k=sm(u/.22);q=[lerp(qH[0],qT[0],k),lerp(qH[1],qT[1],k)];zq=lerp(14,10.5,k);hold=false;}
     else if(u<.36){const k=sm((u-.22)/.14);q=qT;zq=lerp(10.5,7.3,Math.sin(k*Math.PI));hold=u>.29;}
     else if(u<.62){const k=sm((u-.36)/.26);q=[lerp(qT[0],qP[0],k),lerp(qT[1],qP[1],k)];zq=lerp(10.5,6,k)+Math.sin(k*Math.PI)*2;hold=true;}
     else if(u<.7){const k=sm((u-.62)/.08);q=qP;zq=lerp(6,3.2,k);hold=true;}
     else{const k=sm((u-.7)/.3);q=[lerp(qP[0],qH[0],k),lerp(qP[1],qH[1],k)];zq=lerp(3.2,14,k);hold=false;}
     const M1=mul(tr(bx,by,10.3),rz(q[0])),M2=mul(M1,mul(tr(A1,0,3.6),rz(q[1]))),tip=mul(M2,tr(A2,0,0));out.push([mL1,M1],[mL2,M2]);
     const qz=zq+1.9-13.9;out.push([mQ,mul(tip,tr(0,0,qz+14.6))]);if(hold)out.push([mGD,mul(tip,tr(0,0,qz-.7))]);}
   // hero: the finished package of the selected line lifts off its output tray, grows and turns, layers opening and closing
   if(HERO.l!=null){const l=HERO.l,k=sm(Math.min(1,(performance.now()-HERO.t0)/1300)),from=[X1+4,LY(l),3.5],p=[from[0]+(HP[0]-from[0])*k,from[1]+(HP[1]-from[1])*k,from[2]+(HP[2]-from[2])*k],s=1+5.5*k;
     const ex=k*(1.1+1.1*Math.sin(t*.9-1.57));const R0=mul(tr(p[0],p[1],p[2]),mul(rz(t*.5),new Float32Array([s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1])));
     for(let s2=0;s2<=4;s2++)out.push([U[l][s2],mul(R0,tr(0,0,s2*ex))]);}
   return out;}
 // camera: starts high (as seen from the campus) and dives in
 const EYE1=[10,-118,74],TGT=[0,2,0],EYE0=EYE1;const HP=[30,6,24];const HT=[HP[0]-24,HP[1]+2,HP[2]-4],HE=[HT[0]+8,HT[1]-92,HT[2]+34];let HERO={l:null,t0:0},CV={a:{E:EYE1,T:TGT},b:{E:EYE1,T:TGT},t0:0};
 const camNow=()=>{const k=sm(Math.min(1,(performance.now()-CV.t0)/1300));return {E:[0,1,2].map(i=>lerp(CV.a.E[i],CV.b.E[i],k)),T:[0,1,2].map(i=>lerp(CV.a.T[i],CV.b.T[i],k))};};
 const sun=nrm([-.3,-.45,.84]);const Lm=m4.mul(m4.ortho(-80,80,-80,80,1,400),m4.look([sun[0]*200,sun[1]*200,sun[2]*200],[0,0,0],[0,1,0]));
 const SM=2048,st=g.createTexture();g.bindTexture(g.TEXTURE_2D,st);g.texStorage2D(g.TEXTURE_2D,1,g.DEPTH_COMPONENT24,SM,SM);
 [[g.TEXTURE_MIN_FILTER,g.LINEAR],[g.TEXTURE_MAG_FILTER,g.LINEAR],[g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE],[g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE],[g.TEXTURE_COMPARE_MODE,g.COMPARE_REF_TO_TEXTURE],[g.TEXTURE_COMPARE_FUNC,g.LEQUAL]].forEach(([a,b])=>g.texParameteri(g.TEXTURE_2D,a,b));
 const fb=g.createFramebuffer();g.bindFramebuffer(g.FRAMEBUFFER,fb);g.framebufferTexture2D(g.FRAMEBUFFER,g.DEPTH_ATTACHMENT,g.TEXTURE_2D,st,0);g.drawBuffers([g.NONE]);g.readBuffer(g.NONE);g.bindFramebuffer(g.FRAMEBUFFER,null);
 const blank=g.createTexture();g.activeTexture(g.TEXTURE1);g.bindTexture(g.TEXTURE_2D,blank);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,1,1,0,g.RGBA,g.UNSIGNED_BYTE,new Uint8Array([255,255,255,255]));g.activeTexture(g.TEXTURE0);
 const T0=performance.now();let raf=0,alive=true;
 function frame(){if(!alive)return;const t=(performance.now()-T0)/1000;const it=items(t+6);const cc=camNow(),EYE=cc.E;
   const PV=m4.mul(m4.persp(32*Math.PI/180,cv.width/cv.height,1,1200),m4.look(EYE,cc.T,[0,0,1]));
   g.bindFramebuffer(g.FRAMEBUFFER,fb);g.viewport(0,0,SM,SM);g.clear(g.DEPTH_BUFFER_BIT);g.enable(g.DEPTH_TEST);g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(2,4);g.useProgram(P.depth.p);g.uniformMatrix4fv(P.depth.u.uL,false,Lm);
   it.forEach(([m,M])=>{g.uniformMatrix4fv(P.depth.u.uM,false,M);g.bindVertexArray(m.va);g.drawArrays(g.TRIANGLES,0,m.n);});g.disable(g.POLYGON_OFFSET_FILL);
   g.bindFramebuffer(g.FRAMEBUFFER,null);g.viewport(0,0,cv.width,cv.height);g.clearColor(.93,.95,.97,1);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT);
   const Uu=P.main.u;g.useProgram(P.main.p);g.uniformMatrix4fv(Uu.uPV,false,PV);g.uniformMatrix4fv(Uu.uL,false,Lm);g.uniform3fv(Uu.uEye,EYE);g.uniform3fv(Uu.uSun,sun);g.uniform3fv(Uu.uSunC,[1.6,1.6,1.65]);g.uniform3fv(Uu.uFog,[.93,.95,.97]);
   g.uniform1f(Uu.uFogN,300);g.uniform1f(Uu.uFogF,1400);g.uniform1f(Uu.uWz,-99);g.uniform1f(Uu.uSel,0);g.uniform1f(Uu.uHov,0);g.uniform1f(Uu.uMir,0);if(Uu.uTime)g.uniform1f(Uu.uTime,t);
   g.activeTexture(g.TEXTURE0);g.bindTexture(g.TEXTURE_2D,st);g.uniform1i(Uu.uSh,0);if(Uu.uName)g.uniform1i(Uu.uName,1);if(Uu.uFlag)g.uniform1i(Uu.uFlag,1);
   it.forEach(([m,M])=>{g.uniformMatrix4fv(Uu.uM,false,M);g.bindVertexArray(m.va);g.drawArrays(g.TRIANGLES,0,m.n);});g.bindVertexArray(null);raf=requestAnimationFrame(frame);}
 raf=requestAnimationFrame(frame);
 return {setHero(l){if(l===HERO.l)return;const c=camNow();HERO={l,t0:performance.now()};CV={a:{E:c.E,T:c.T},b:l==null?{E:EYE1,T:TGT}:{E:HE,T:HT},t0:performance.now()};},
  anchors(){const PV=m4.mul(m4.persp(32*Math.PI/180,cv.width/cv.height,1,1200),m4.look(EYE1,TGT,[0,0,1]));return [0,1,2].map(l=>{const q=[X0+12,LY(l),3],m=PV,w=m[3]*q[0]+m[7]*q[1]+m[11]*q[2]+m[15];return [((m[0]*q[0]+m[4]*q[1]+m[8]*q[2]+m[12])/w+1)/2,(1-(m[1]*q[0]+m[5]*q[1]+m[9]*q[2]+m[13])/w)/2];});},
  stop(){alive=false;cancelAnimationFrame(raf);const ext=g.getExtension('WEBGL_lose_context');if(ext)ext.loseContext();}};};

// page hook: overview = campus; open a hall = the campus camera flies into that hall's workstation and the live close-up
// takes over on the same pose; open a package type = its finished package lifts off the line as a large 3D model.
// Our canvases always cover the visible stage (the page zooms its photo layer with CSS; our cameras do the zooming instead),
// and the page's cards are moved onto the production lines / beside the 3D package.
(function(){let cur=null,canv=null,inst=null,lvl=0,api0=null,hero=null,alignUntil=0;
 const st=document.createElement('style');st.textContent='#pmask,#pblur{display:none!important}.pzone.act{opacity:0!important}';(document.head||document.documentElement).appendChild(st);
 const $=id=>document.getElementById(id),SM=x=>x<=0?0:x>=1?1:x*x*x*(x*(x*6-15)+10);
 const LINE={P:0,R:1,W:2,G:0,H:1,S:2};const lineOf=(code,api)=>{const v=LINE[String(code).charAt(6)];if(v!=null)return v;const k=api?api.P[api.S.path[1]].children.indexOf(code):-1;return Math.max(0,Math.min(2,k));};
 function geom(){const stg=$('stage'),pimg=$('pimg');if(!stg||!pimg)return null;const s=stg.getBoundingClientRect(),pr=pimg.getBoundingClientRect(),k=pr.width/(pimg.offsetWidth||1180)||1;return {s,pr,k};}
 function fit(el,G){el.style.left=((G.s.left-G.pr.left)/G.k)+'px';el.style.top=((G.s.top-G.pr.top)/G.k)+'px';el.style.width=(G.s.width/G.k)+'px';el.style.height=(G.s.height/G.k)+'px';}
 const toP=(G,fx,fy)=>[(G.s.left+fx*G.s.width-G.pr.left)/G.k,(G.s.top+fy*G.s.height-G.pr.top)/G.k];
 // screen anchors of the three lines in the close-up (same camera as the close-up's resting pose)
 function anchors(asp){const E=window.UTAC_ENGINE,WS=window.UTAC_WS;const PV=E.m4.mul(E.m4.persp(32*Math.PI/180,asp,1,1200),E.m4.look([10,-118,74],[0,2,0],[0,0,1]));
   return [0,1,2].map(l=>{const q=[WS.X0+12,WS.LY(l),3],m=PV,w=m[3]*q[0]+m[7]*q[1]+m[11]*q[2]+m[15];return [((m[0]*q[0]+m[4]*q[1]+m[8]*q[2]+m[12])/w+1)/2,(1-(m[1]*q[0]+m[5]*q[1]+m[9]*q[2]+m[13])/w)/2];});}
 function align(){const G=geom();if(!G||!api0)return;const cards=[...document.querySelectorAll('#pcards .pcard')],pins=[...document.querySelectorAll('#pcards .ppin')];
   if(lvl===1){const A=anchors(G.s.width/G.s.height);cards.forEach((c,i)=>{const li=lineOf(c.dataset.k,api0),a=A[li];const p=toP(G,a[0],a[1]-.035);c.style.left=p[0]+'px';c.style.top=p[1]+'px';const pin=pins[i];if(pin){const q=toP(G,a[0],a[1]);pin.style.left=q[0]+'px';pin.style.top=q[1]+'px';}});}
   else if(lvl>=2){pins.forEach(p=>p.style.display='none');cards.forEach((c,i)=>{const p=toP(G,.2,.27+i*.2);c.style.left=p[0]+'px';c.style.top=p[1]+'px';});}}
 function follow(){const G=geom();if(G){const c=$('pcity');if(c)fit(c,G);if(canv)fit(canv,G);if(performance.now()<alignUntil)align();}requestAnimationFrame(follow);}requestAnimationFrame(follow);
 addEventListener('resize',()=>{alignUntil=performance.now()+600;});
 function makeMicro(i){const pimg=$('pimg'),G=geom();if(!pimg||!G)return;canv=document.createElement('canvas');canv.className='utacMicro';canv.width=Math.round(G.s.width*1.5);canv.height=Math.round(G.s.height*1.5);
   canv.style.cssText='position:absolute;opacity:0;transition:opacity .6s ease;pointer-events:none';fit(canv,G);pimg.insertBefore(canv,$('pcards')||null);
   try{inst=window.UTAC_MICRO(canv,i);}catch(e){console.warn('utac micro',e);inst=null;}if(!inst){canv.remove();canv=null;return;}if(hero!=null)inst.setHero(hero);
   requestAnimationFrame(()=>requestAnimationFrame(()=>{if(canv)canv.style.opacity='1';}));setTimeout(()=>{if(inst&&cur===i&&window.UTAC_FAB_CTL)window.UTAC_FAB_CTL.hold(true);},700);}
 function dropMicro(now,cb){const C=window.UTAC_FAB_CTL;if(C)C.hold(false);if(!canv){cb&&cb();return;}const c=canv,s=inst;canv=null;inst=null;if(now){s&&s.stop();c.remove();cb&&cb();return;}c.style.opacity='0';setTimeout(()=>{s&&s.stop();c.remove();},650);setTimeout(()=>{cb&&cb();},350);}
 window.RA_HOOK=function(api){api0=api;const C=window.UTAC_FAB_CTL;if(!$('pimg')||api.scene!=='photo'){cur=null;dropMicro(true);return;}
   const l=api.level(),f=l>0?api.S.path[1]:null,i=f?api.P[api.D.root].children.indexOf(f):-1;lvl=l;hero=l>=2?lineOf(api.S.path[2],api):null;alignUntil=performance.now()+2600;
   if(i<0||i>3){if(cur!=null){cur=null;dropMicro(false,()=>{C&&C.unfocus();});}return;}
   if(cur!==i){const go=()=>{cur=i;if(C)C.focus(i,()=>{if(cur===i&&!canv)makeMicro(i);});else makeMicro(i);};if(cur!=null){cur=null;dropMicro(true);}go();return;}
   if(inst)inst.setHero(hero);};
})();

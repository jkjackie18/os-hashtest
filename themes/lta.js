// Revenue Analysis theme: Land Transport Authority (LTA) - animated Singapore city. Loaded before the shared page script.

 window.LTM=(function(){const M={},WH='#f4f5f7',GY='#94a3b8',DK='#1f2937',GL='#2a3a52';
  M.train=(A,n)=>{n=n||2;for(let i=0;i<n;i++){const x=(i-(n-1)/2)*30;box(x,0,6,28,12,12,WH,'#e5e7eb');box(x,-6.2,11,24,.6,4,GL);box(x,6.2,11,24,.6,4,GL);box(x,-6.2,7,28,.6,1.6,A);box(x,6.2,7,28,.6,1.6,A);hcyl('y',x-9,0,4,3,13,DK,10);hcyl('y',x+9,0,4,3,13,DK,10);}box(0,0,0,n*30+6,16,2,GY);};
  M.viaduct=(A)=>{box(0,0,22,70,14,4,'#c9ced5');[-25,0,25].forEach(x=>cyl(x,0,0,3,22,'#b9c0c8',10));box(0,-5,26,70,1,1,'#6b7380');box(0,5,26,70,1,1,'#6b7380');sub(a=>M.train(a,2),A,0,0,26,.8,0);};
  M.crane=(A)=>{box(0,0,0,6,6,58,'#f2b134');box(12,0,58,44,3,3,'#f2b134');box(-14,0,56,10,8,6,GY);cyl(26,0,30,.5,28,DK,6);box(26,0,24,8,8,6,'#c9ced5');box(-20,10,0,40,8,14,'#c9ced5');};
  M.signal=(A)=>{box(0,0,0,26,20,22,'#4a959a','#3b7c80');box(0,-10.2,6,20,.6,12,GL);cyl(12,0,22,1,16,GY,8);sphere(12,0,40,3,'#ff4040',10);sphere(12,0,34,3,'#3ddc97',10);};
  M.bus=(A)=>{box(0,0,4,56,16,20,'#3fae49','#57c460');box(0,-8.2,12,48,.6,8,GL);box(0,8.2,12,48,.6,8,GL);box(28.2,0,10,.6,12,10,GL);[-18,18].forEach(x=>hcyl('y',x,0,5,5,17,DK,12));};
  M.road=(A)=>{box(0,0,0,80,30,2,'#5d646e');[-30,-10,10,30].forEach(x=>box(x,0,2,10,1.2,.2,'#f2e6a8'));sub(M.car,'#e85d4a',-14,-7,2,.45,0);sub(M.car,'#4aa3df',16,7,2,.45,3.1416);};
  M.shelter=(A)=>{box(0,0,0,40,16,2,'#dfe4ea');[-16,16].forEach(x=>box(x,-6,2,2,2,24,'#cfd6dd'));box(0,0,26,46,20,2.5,A);box(0,-6,6,30,1,10,'#bfe3f5');};
  M.bike=(A)=>{[-11,11].forEach(x=>hcyl('y',x,0,9,9,2,DK,16));box(0,0,12,24,2,2,A);box(-4,0,18,2,2,14,A);box(6,0,26,8,3,2,DK);box(-4,0,32,8,6,3,DK);};
  M.car=(A)=>{box(0,0,4,46,20,10,A);box(-3,0,14,24,18,9,A,'#dbe4ef');box(-3,-9.2,16,20,.6,6,GL);box(-3,9.2,16,20,.6,6,GL);[-14,14].forEach(x=>hcyl('y',x,0,5,5,21,DK,12));};
  M.gantry=(A)=>{[-22,22].forEach(y=>box(0,y,0,4,4,34,'#d7dce2'));box(0,0,34,8,52,7,'#1f4e9c');box(-4.2,0,36,.6,30,3,'#ffffff');sphere(-5,-12,30,2.4,'#3ddc97',8);sphere(-5,12,30,2.4,'#3ddc97',8);sub(M.car,'#f2b134',0,0,0,.6,1.5708);};
  M.parking=(A)=>{box(0,0,0,50,40,30,'#9aa3ae','#aab3be');[6,14,22].forEach(z=>box(0,-20.2,z,46,.6,4,'#3a4250'));box(0,0,30,50,40,2,A);sub(M.car,'#e85d4a',-10,-8,32,.4,0);sub(M.car,'#ffffff',10,8,32,.4,0);};
  M.ev=(A)=>{box(0,0,0,10,8,26,'#2fae6a','#3ddc97');box(0,-4.2,14,6,.6,8,GL);sphere(0,-4.6,22,1.6,'#3ddc97',8);sub(M.car,'#4aa3df',22,0,0,.6,1.5708);};
  M.coe=(A)=>{[-20,20].forEach(x=>box(x,0,0,2,2,18,GY));box(0,0,18,48,3,26,'#1d2a3d');['#e85d4a','#f2b134','#4aa3df','#7ac36a','#b07cd8'].forEach((c,i)=>box(-16+i*8,-1.8,21,5,.6,6+i*3,c));};
  M.card=(A,o)=>{o=o||{};box(0,0,0,48,30,2,o.c||A,o.c||A);box(0,0,2,48,6,.4,'#ffffff');box(-12,6,2,12,4,.4,'#ffd77a');};
  M.gate=(A)=>{[-14,0,14].forEach(x=>{box(x,0,0,6,20,18,'#cfd6dd');sphere(x,-6,19,1.8,'#3ddc97',8);});box(-7,0,8,8,1.5,2,A);box(7,0,8,8,1.5,2,A);};
  M.phone=(A)=>{box(0,0,0,20,6,40,DK);box(0,-3.2,4,16,.6,32,'#4aa3df');sub(a=>M.card(a),A,22,0,0,.5,0);};
  M.school=(A)=>{box(0,0,0,50,24,22,'#f6efe3');box(0,0,22,54,28,4,A);[ -16,0,16].forEach(x=>box(x,-12.2,8,8,.6,8,GL));};
  return M;})();
window.THEME=Object.assign({"key": "lta", "name": "Land Transport Authority", "view": "Land transport", "top": "family", "gp": "Gross profit margin", "np": "Net profit margin", "keep": []},{
 famc:{"PRD110": ["#2f7fd8", "#2366b3", "#1b4f8c", "#e3efff"], "PRD120": ["#2fae6a", "#248c55", "#1b6b41", "#dcf6e8"], "PRD177": ["#7b5cc9", "#6447ad", "#4d3687", "#ece6fb"], "PRD190": ["#f2a33a", "#d9871c", "#b06a10", "#fff1dc"]},
 models3d:{ltaroot:A=>{sub(a=>LTM.train(a,2),A,-30,0,0,.7,0);sub(LTM.bus,A,30,10,0,.7,0);},train3:A=>LTM.train(A,3),viaduct:A=>LTM.viaduct(A),crane:A=>LTM.crane(A),signal:A=>LTM.signal(A),train1:A=>LTM.train(A,1),bus:A=>LTM.bus(A),road:A=>LTM.road(A),shelter:A=>LTM.shelter(A),bike:A=>LTM.bike(A),car:A=>LTM.car(A),gantry:A=>LTM.gantry(A),parking:A=>LTM.parking(A),ev:A=>LTM.ev(A),coe:A=>LTM.coe(A),card:A=>LTM.card(A),cardg:A=>LTM.card(A,{c:'#2fae6a'}),cardb:A=>LTM.card(A,{c:'#4aa3df'}),gate:A=>LTM.gate(A),phone:A=>LTM.phone(A),school:A=>LTM.school(A)},
 map:{"PRD100": "ltaroot", "PRD110": "train3", "PRD110W": "signal", "PRD110R": "viaduct", "PRD110P": "crane", "PRD110W1": "signal", "PRD110W2": "train1", "PRD110W3": "signal", "PRD110R4": "viaduct", "PRD110R5": "viaduct", "PRD110R6": "train3", "PRD110P7": "crane", "PRD110P8": "crane", "PRD110P9": "viaduct", "PRD120": "bus", "PRD120P": "road", "PRD120P7": "road", "PRD120P8": "gantry", "PRD120R": "shelter", "PRD120R3": "shelter", "PRD120R4": "shelter", "PRD120R5": "shelter", "PRD120R6": "bike", "PRD120W": "bike", "PRD120W1": "bike", "PRD120W2": "bike", "PRD177": "car", "PRD177P": "coe", "PRD177P7": "coe", "PRD177P8": "car", "PRD177R": "gantry", "PRD177R5": "gantry", "PRD177R6": "parking", "PRD177W": "ev", "PRD177W1": "phone", "PRD177W2": "phone", "PRD177W3": "phone", "PRD177W4": "car", "PRD190": "card", "PRD190G": "card", "PRD190GP": "card", "PRD190GR": "cardb", "PRD190GW": "cardg", "PRD190H": "phone", "PRD190HP": "phone", "PRD190HR": "card", "PRD190HW": "phone", "PRD190S": "school", "PRD190SG": "school", "PRD190SM": "cardg"},
 zones:[{"poly": [[49, 87], [313, 87], [313, 488], [49, 488]], "card": [181, 62], "cats": [[164, 111], [266, 327], [147, 249]]}, {"poly": [[322, 87], [586, 87], [586, 494], [322, 494]], "card": [454, 62], "cats": [[386, 401], [386, 288], [403, 259]]}, {"poly": [[594, 87], [858, 87], [858, 501], [594, 501]], "card": [726, 62], "cats": [[633, 401], [790, 256], [675, 89]]}, {"poly": [[867, 87], [1131, 87], [1131, 505], [867, 505]], "card": [999, 62], "cats": [[1037, 209], [1050, 352], [982, 205]]}],
 icons:["<path d=\"M7 3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 10h16M8 21l2-4M16 21l-2-4M8 14h.01M16 14h.01\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "<path d=\"M4 21L8 3M20 21L16 3M12 5v2M12 11v2M12 17v2\" stroke-linecap=\"round\"/>", "<path d=\"M5 16h14M6 16l1.5-5a2 2 0 0 1 2-1.5h5a2 2 0 0 1 2 1.5L18 16M7 19.5a1.5 1.5 0 1 0 0-.1M17 19.5a1.5 1.5 0 1 0 0-.1M4 16v3h16v-3\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "<path d=\"M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 10h18M7 15h4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>"],
 photo:{W:1180,H:539,src:"data:image/gif;base64,R0lGODlhAQABAIAAANbu+QAAACwAAAAAAQABAAACAkQBADs="}
});

// ---- city engine (canvas 2D, no libraries)
window.LTA_CITY=function(cv,opt){opt=opt||{};
let ctx=cv.getContext('2d');
const W=2400,H=1096,C=0.8660254,S=20,OX=W/2,OY=146;
const XY=(u,v)=>[(v+u)/2,(v-u)/2];
const P=(x,y,z)=>[OX+(x-y)*C*S,OY+(x+y)*0.5*S-z*S];
const PU=(u,v,z)=>[OX+u*C*S,OY+v*0.5*S-z*S];
const AU=-Math.PI/4,AV=Math.PI/4;
let night=false,playing=opt.paused?false:!matchMedia('(prefers-reduced-motion: reduce)').matches,T=0,lod=false;
const cam={x:0,y:0,s:1},camT={x:0,y:0,s:1};
let seed=31;const rnd=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};

/* ---------- colour + drawing helpers ---------- */
function hex(c){c=c.replace('#','');return [parseInt(c.slice(0,2),16),parseInt(c.slice(2,4),16),parseInt(c.slice(4,6),16)];}
function shade(c,f){if(c[0]!=='#')return c;const [r,g,b]=hex(c);const m=v=>Math.max(0,Math.min(255,Math.round(f>1?v+(255-v)*(f-1):v*f)));return `rgb(${m(r)},${m(g)},${m(b)})`;}
const dim=c=>night?shade(c,.45):c;
function poly(pts,fill,stroke,lw){ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw||.6;ctx.stroke();}}
function line(a,b,col,w){ctx.strokeStyle=col;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.stroke();}
function dot(p,r,col){ctx.fillStyle=col;ctx.beginPath();ctx.arc(p[0],p[1],r,0,6.2832);ctx.fill();}
function txt(s,p,size,col,bold,align){ctx.font=`${bold?'700 ':''}${size}px "Segoe UI",Arial,sans-serif`;ctx.fillStyle=col;ctx.textAlign=align||'center';ctx.textBaseline='middle';ctx.fillText(s,p[0],p[1]);}
// axis-aligned box in x,y with facade styles
function box(x,y,z,w,d,h,col,o={}){
  const c=dim(col),fr=shade(c,.9),fl=shade(c,.74),tp=shade(c,1.08);
  poly([P(x+w,y,z),P(x+w,y+d,z),P(x+w,y+d,z+h),P(x+w,y,z+h)],fr,o.edge===false?null:'rgba(0,0,0,.12)');
  poly([P(x,y+d,z),P(x+w,y+d,z),P(x+w,y+d,z+h),P(x,y+d,z+h)],fl,o.edge===false?null:'rgba(0,0,0,.12)');
  poly([P(x,y,z+h),P(x+w,y,z+h),P(x+w,y+d,z+h),P(x,y+d,z+h)],o.roof?dim(o.roof):tp,o.edge===false?null:'rgba(0,0,0,.1)');
  return {fr,fl};
}
// window grids on the two visible faces
function windows(x,y,z,w,d,h,o){
  const lit=night,wc=lit?'#ffd98a':(o.wc||'#3c5878'),wc2=lit?'#f3c46a':shade(o.wc||'#3c5878',.82),z0=z+(o.z0||.6),dz=o.dz||.9,hw=o.hw||.42,ww=o.ww||.42,step=o.step||.8;
  for(let zz=z0;zz<z+h-.45;zz+=dz){
    for(let t=.3;t<d-.3;t+=step){if(lit&&rnd()<.25)continue;poly([P(x+w,y+t,zz),P(x+w,y+t+ww,zz),P(x+w,y+t+ww,zz+hw),P(x+w,y+t,zz+hw)],wc);}
    for(let t=.3;t<w-.3;t+=step){if(lit&&rnd()<.25)continue;poly([P(x+t,y+d,zz),P(x+t+ww,y+d,zz),P(x+t+ww,y+d,zz+hw),P(x+t,y+d,zz+hw)],wc2);}}
}
function obox(cx,cy,z,L,Wd,h,a,col,deco,topCol){
  const ca=Math.cos(a),sa=Math.sin(a),hl=L/2,hw=Wd/2;
  const loc=[[-hl,-hw],[hl,-hw],[hl,hw],[-hl,hw]].map(([u,v])=>[cx+u*ca-v*sa,cy+u*sa+v*ca]);const faces=[];
  for(let i=0;i<4;i++){const A=loc[i],B=loc[(i+1)%4];let n=[B[1]-A[1],-(B[0]-A[0])];const mx=(A[0]+B[0])/2-cx,my=(A[1]+B[1])/2-cy;if(n[0]*mx+n[1]*my<0)n=[-n[0],-n[1]];
    if(n[0]+n[1]>1e-6)faces.push({A,B,i,d:A[0]+A[1]+B[0]+B[1],lit:(n[0]*.9+n[1]*.5)/Math.hypot(n[0],n[1])});}
  faces.sort((p,q)=>p.d-q.d);const c=dim(col);
  for(const f of faces){poly([P(f.A[0],f.A[1],z),P(f.B[0],f.B[1],z),P(f.B[0],f.B[1],z+h),P(f.A[0],f.A[1],z+h)],shade(c,.68+.24*Math.max(0,f.lit)),'rgba(0,0,0,.14)');if(deco)deco(f,z,h);}
  poly(loc.map(p=>P(p[0],p[1],z+h)),topCol?dim(topCol):shade(c,1.06),'rgba(0,0,0,.12)');return loc;
}
function strip(f,z0,z1,col,t0=0,t1=1){const A=f.A,B=f.B,a=[A[0]+(B[0]-A[0])*t0,A[1]+(B[1]-A[1])*t0],b=[A[0]+(B[0]-A[0])*t1,A[1]+(B[1]-A[1])*t1];poly([P(a[0],a[1],z0),P(b[0],b[1],z0),P(b[0],b[1],z1),P(a[0],a[1],z1)],col);}
const oboxU=(u,v,z,L,Wd,h,a,col,deco,top)=>{const [x,y]=XY(u,v);return obox(x,y,z,L,Wd,h,a,col,deco,top);};
function boxUV(u,v,z,w,d,h,col,o){const [x,y]=XY(u,v);return box(x-w/2,y-d/2,z,w,d,h,col,o);}
function person(x,y,col,ph,z){const [px,py]=P(x,y,z||0);const sw=Math.sin(ph)*1.6;ctx.strokeStyle=dim('#2b2f36');ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(px,py-6);ctx.lineTo(px-sw,py);ctx.moveTo(px,py-6);ctx.lineTo(px+sw,py);ctx.stroke();
  ctx.fillStyle=dim(col);ctx.fillRect(px-2.2,py-12.5,4.4,7);ctx.fillStyle=dim('#e8c4a0');ctx.beginPath();ctx.arc(px,py-14.8,2.3,0,6.3);ctx.fill();}
const personU=(u,v,col,ph,z)=>{const [x,y]=XY(u,v);person(x,y,col,ph,z);};

/* ---------- paths ---------- */
function makePath(uvPts,closed=true){
  const pts=uvPts.map(([u,v])=>XY(u,v)),n=pts.length,out=[];const get=i=>closed?pts[(i+n)%n]:pts[Math.max(0,Math.min(n-1,i))];const segs=closed?n:n-1;
  for(let i=0;i<segs;i++){const p0=get(i-1),p1=get(i),p2=get(i+1),p3=get(i+2);for(let t=0;t<1;t+=.025){const t2=t*t,t3=t2*t;out.push([.5*(2*p1[0]+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),.5*(2*p1[1]+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)]);}}
  out.push(closed?out[0]:pts[n-1]);const cum=[0];for(let i=1;i<out.length;i++)cum.push(cum[i-1]+Math.hypot(out[i][0]-out[i-1][0],out[i][1]-out[i-1][1]));const len=cum[cum.length-1];
  function at(s){s=closed?((s%len)+len)%len:Math.max(0,Math.min(len,s));let lo=0,hi=cum.length-1;while(hi-lo>1){const m=(lo+hi)>>1;if(cum[m]<=s)lo=m;else hi=m;}const t=(s-cum[lo])/((cum[hi]-cum[lo])||1),a=out[lo],b=out[hi];return {x:a[0]+(b[0]-a[0])*t,y:a[1]+(b[1]-a[1])*t,a:Math.atan2(b[1]-a[1],b[0]-a[0])};}
  return {len,at,closed,pts:out};
}
function offsetPath(path,d){const pts=[];for(let s=0;s<path.len;s+=1.2){const p=path.at(s),x=p.x-Math.sin(p.a)*d,y=p.y+Math.cos(p.a)*d;pts.push([x-y,x+y]);}return makePath(pts,path.closed);}
function nearestS(path,u,v){const [x,y]=XY(u,v);let b=0,bd=1e9;for(let s=0;s<path.len;s+=.25){const p=path.at(s),d=Math.hypot(p.x-x,p.y-y);if(d<bd){bd=d;b=s;}}return b;}
function distTo(path,u,v){const [x,y]=XY(u,v);let bd=1e9;for(const p of path.pts){const d=Math.hypot(p[0]-x,p[1]-y);if(d<bd)bd=d;}return bd;}
const line2=(u0,v0,u1,v1)=>makePath([[u0,v0],[(u0+u1)/2,(v0+v1)/2],[u1,v1]],false);

/* ---------- products ---------- */
const PRODUCTS={
  PRD110:{name:'Rail Infrastructure Development',col:'#2f7fd8',u0:-64,u1:-32,kids:[['PRD110P','New Rail Lines','construction site, tower crane and new viaduct',[['PRD110P7','Cross Island Line'],['PRD110P8','Jurong Region Line'],['PRD110P9','Thomson-East Coast Line Stage 5']]],['PRD110R','Rail Line Extensions','extension spur off the main line',[['PRD110R4','Downtown Line 2 Extension'],['PRD110R5','Downtown Line 3 Extension'],['PRD110R6','Circle Line Stage 6']]],['PRD110W','Rail Systems','train depot and operations control centre',[['PRD110W1','Signalling Systems'],['PRD110W2','Platform Screen Doors'],['PRD110W3','Integrated Supervisory Control System']]]]},
  PRD120:{name:'Roads and Commuter Infrastructure',col:'#2fae6a',u0:-32,u1:0,kids:[['PRD120P','Expressways and Road Corridors','expressway and road corridor',[['PRD120P7','North-South Corridor'],['PRD120P8','Expressway Monitoring and Advisory System']]],['PRD120R','Commuter Facilities','bus interchange, shelters, linkway and overhead bridge',[['PRD120R3','Covered Linkways'],['PRD120R4','Bus Shelters'],['PRD120R5','Pedestrian Overhead Bridges'],['PRD120R6','Friendly Streets']]],['PRD120W','Active Mobility Network','park connector with cyclists',[['PRD120W1','Cycling Path Network'],['PRD120W2','Park Connector Links']]]]},
  PRD177:{name:'Vehicle and Road User Services',col:'#7b5cc9',u0:0,u1:32,kids:[['PRD177P','Vehicle Ownership','vehicle registration centre and COE bidding board',[['PRD177P7','Certificate of Entitlement'],['PRD177P8','Vehicle Registration']]],['PRD177R','Road Pricing and Parking','ERP gantries and multi-storey car park',[['PRD177R5','Electronic Road Pricing'],['PRD177R6','Parking Services']]],['PRD177W','Digital Motoring Services','driving test circuit, inspection centre and EV charging',[['PRD177W1','OneMotoring Portal'],['PRD177W2','MyTransport.SG App'],['PRD177W3','LTA DataMall'],['PRD177W4','Driving Licence Services']]]]},
  PRD190:{name:'Ticketing and Fare Services',col:'#f2a33a',u0:32,u1:64,kids:[['PRD190G','Card-Based Ticketing','SimplyGo service centre',[['PRD190GP','SimplyGo EZ-Link Card'],['PRD190GR','NETS FlashPay Card'],['PRD190GW','Concession Cards']]],['PRD190H','Account-Based Ticketing','interchange station with fare gates',[['PRD190HP','SimplyGo App'],['PRD190HR','Contactless Bank Cards'],['PRD190HW','Mobile Wallets']]],['PRD190S','Concession Schemes','school and seniors centre',[['PRD190SG','Student Concession'],['PRD190SM','Senior Citizen Concession']]]]}
};
const CATS={};let focus=null;

/* ---------- network ---------- */
const coast=u=>86.5+1.8*Math.sin(u*.17)+1.2*Math.cos(u*.41);
const ZR=6.2;
const rail=makePath([[-58,31.5],[-40,30],[-20,33],[0,30],[20,33],[40,30],[58,31.5],[66,46],[58,62],[40,65],[20,62],[0,65],[-20,62],[-40,65],[-58,62],[-66,45]]);
const road=makePath([[-56,44],[-30,44],[0,44],[30,44],[56,44],[63,55],[60,72],[52,81.5],[30,82],[0,81.5],[-30,82],[-52,81.5],[-60,72],[-63,55]]);
const RW=4.8; // expressway width
const lanesF=[offsetPath(road,-1.75),offsetPath(road,-.6)],lanesB=[offsetPath(road,.6),offsetPath(road,1.75)];
const XS=[-44,-14,16,46].map(u=>({u,path:line2(u,44,u,81.8)}));   // cross streets (run in depth = face the viewer)
const xLane=(u,d,dir)=>dir>0?line2(u+d,44,u+d,81.8):line2(u+d,81.8,u+d,44);
const bike=makePath([[-30,69.5],[-24,68.5],[-18.5,70],[-17.5,74],[-21,77.5],[-27,77.5],[-31,74]]);
const circuit=makePath([[-1,70],[5,68.6],[10.5,70],[11.5,73.5],[8.5,77],[1,77.2],[-2.5,74]]);

/* ---------- placement validator (keeps buildings off roads, rails, paths) ---------- */
const occ=new Set();const mark=(u0,v0,u1,v1)=>{for(let u=Math.floor(u0);u<=Math.ceil(u1);u++)for(let v=Math.floor(v0);v<=Math.ceil(v1);v++)occ.add(u+','+v);};
const inBay=(u,v,r)=>{const du=(u+4)/(8.2+r),dv=(v-15.5)/(6.6+r);return du*du+dv*dv<1;};
function free(u,v,r){
  if(inBay(u,v,r))return false;
  if(v-r<6||v+r>coast(u)-2.5)return false;
  if(distTo(road,u,v)<RW/2+1.4+r*1.05)return false;
  for(const x of XS)if(Math.abs(u-x.u)<2.2+r&&v+r>42&&v-r<83)return false;
  if(distTo(rail,u,v)<2+r)return false;
  if(distTo(bike,u,v)<1.2+r||distTo(circuit,u,v)<2.4+r)return false;
  for(let a=Math.floor(u-r);a<=Math.ceil(u+r);a++)for(let b=Math.floor(v-r);b<=Math.ceil(v+r);b++)if(occ.has(a+','+b))return false;
  return true;}
function place(u,v,r){if(free(u,v,r))return [u,v];for(let k=1;k<=8;k++)for(const [du,dv] of [[0,k],[0,-k],[k,0],[-k,0],[k,k],[-k,k],[k,-k],[-k,-k]])if(free(u+du,v+dv,r))return [u+du,v+dv];return null;}

const statics=[],ground=[];   // ground: flat things drawn into the cached ground layer
const add=(k,f,p,lodOnly)=>statics.push({k,f,p,lodOnly});

/* ---------- stations + kiosks ---------- */
const ENT={};
const LINES={'Jurong East':['#009645','#d42e12'],'Toa Payoh':['#d42e12'],'Yishun':['#d42e12'],'Tampines':['#009645','#005ec4'],'Punggol':['#9900aa']};
function station(s,main,key,name){const p=rail.at(s),a=[AU,AU+Math.PI,AV,AV+Math.PI,AV-Math.PI].reduce((b,c)=>Math.abs(Math.atan2(Math.sin(p.a-c),Math.cos(p.a-c)))<Math.abs(Math.atan2(Math.sin(p.a-b),Math.cos(p.a-b)))?c:b,AU),ca=Math.cos(a),sa=Math.sin(a),nx=-sa,ny=ca,L=8.5,u=p.x-p.y,v=p.x+p.y,at=(along,side)=>[p.x+ca*along+nx*side,p.y+sa*along+ny*side];
  for(let q=-6;q<=6;q++)for(let r=-5;r<=8;r++){const [xx,yy]=at(q,r*.8);occ.add(Math.round(xx-yy)+','+Math.round(xx+yy));}
  // ground columns + elevated concourse under the track
  // station follows the railway curve: platforms, screen doors and roof built in 1-unit segments along the track
  for(let d=-L/2;d<L/2-.01;d+=1){const q=rail.at(s+d+.5),qa=q.a,nx2=-Math.sin(qa),ny2=Math.cos(qa),qv=q.x+q.y,first=d<=-L/2+.01,last=d>=L/2-1.01;
    for(const sd of [-1,1]){const cx=q.x+nx2*sd*1.95,cy=q.y+ny2*sd*1.95;
      add(cx+cy-.5,()=>obox(cx,cy,ZR-.85,1.06,1.3,.95,qa,'#e7eaee',f=>strip(f,ZR-.05,ZR+.08,(LINES[name]||['#d3263a'])[0]),'#d4d9df'),'PRD110');
      const gx=q.x+nx2*sd*1.33,gy=q.y+ny2*sd*1.33;
      add(gx+gy+(gx+gy>qv?1.7:-.2),()=>{ctx.globalAlpha=.4;obox(gx,gy,ZR+.1,1.04,.07,1.75,qa,'#9cc6e2');ctx.globalAlpha=1;line(P(gx-Math.cos(qa)*.52,gy-Math.sin(qa)*.52,ZR+.1),P(gx-Math.cos(qa)*.52,gy-Math.sin(qa)*.52,ZR+1.85),dim('#8a96a3'),1);},'PRD110');}
    add(qv+3.2,()=>{if(Math.round(d+L/2)%3===0)for(const sd of [-2.55,2.55]){const cx=q.x+nx2*sd,cy=q.y+ny2*sd;box(cx-.12,cy-.12,ZR+.1,.24,.24,2.35,'#b7bec7',{edge:false});}
      obox(q.x,q.y,ZR+2.45,1.08+(first||last?.4:0),5.6,.3,qa,'#f3f5f8',null,'#c7d1dc');},'PRD110');}
  {const front=(nx+ny)>0?3.9:-3.9,tp=name==='Toa Payoh';const [lx,ly]=tp?at(L/2+2.4,front*.75):at(-L/2+1.2,front);   // Toa Payoh: west side, clear of the footbridge   // always on the side facing the viewer
  mark(lx-ly-1,lx+ly-1,lx-ly+1,lx+ly+1);   // small station name pylon beside the station, at street level
   add(lx+ly+.6,()=>{box(lx-.07,ly-.07,.05,.14,.14,2.1,'#9aa3ad',{edge:false});const [sx,sy]=P(lx,ly,2.35);
     // MRT pylon: line-coloured top with white train pictogram over a navy "MRT" band, plus a name plate
     const cols=LINES[name]||['#d3263a'],S2=20,x0=sx-S2-2,y0=sy-S2/2-4;
     cols.forEach((c,i)=>{ctx.fillStyle=c;ctx.fillRect(x0+i*S2/cols.length,y0,S2/cols.length,S2*.62);});
     ctx.fillStyle='#1c3a5c';ctx.fillRect(x0,y0+S2*.62,S2,S2*.42);txt('MRT',[x0+S2/2,y0+S2*.84],6.5,'#ffffff',true);
     const cx=x0+S2/2,cy=y0+S2*.3;ctx.fillStyle='#fff';ctx.beginPath();ctx.roundRect?ctx.roundRect(cx-5,cy-6,10,9,3):ctx.rect(cx-5,cy-6,10,9);ctx.fill();
     ctx.fillStyle=cols[0];ctx.fillRect(cx-3.6,cy-4.4,7.2,3);dot([cx-2.6,cy+1],1.1,cols[cols.length-1]);dot([cx+2.6,cy+1],1.1,cols[cols.length-1]);
     ctx.strokeStyle='#fff';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(cx-3,cy+3);ctx.lineTo(cx-5,cy+5.5);ctx.moveTo(cx+3,cy+3);ctx.lineTo(cx+5,cy+5.5);ctx.stroke();
     ctx.font='700 9px "Segoe UI",Arial,sans-serif';const w=ctx.measureText(name).width+10;
     ctx.fillStyle='#ffffff';ctx.strokeStyle='#1c3a5c';ctx.lineWidth=1;ctx.fillRect(sx+1,sy-11,w,13);ctx.strokeRect(sx+1,sy-11,w,13);txt(name,[sx+1+w/2,sy-4.5],9,'#1c3a5c',true);},'PRD110');}
  // street-level entrances on the +normal side, each with a SimplyGo ticketing kiosk
  const ents=[];for(const al of [L/2-1]){const [ex,ey]=at(al,3.6);ents.push([ex-ey,ex+ey]);
    // paved footpath from the entrance through the fare gantries out to the pavement
    ground.push(()=>{const q=(aa,ss)=>{const [xx,yy]=at(aa,ss);return P(xx,yy,0);};poly([q(al-1.6,2.7),q(al+1.6,2.7),q(al+1.6,6.1),q(al-1.6,6.1)],night?'#6b6f76':'#d9d6cf');
      ctx.strokeStyle='rgba(0,0,0,.08)';ctx.lineWidth=.8;for(let k=3;k<6.1;k+=.6){ctx.beginPath();ctx.moveTo(...q(al-1.6,k));ctx.lineTo(...q(al+1.6,k));ctx.stroke();}});
    add(ex+ey+.8,()=>{box(ex-.8,ey-.8,.05,1.6,1.6,2.3,'#e9eef3',{roof:'#d3263a'});windows(ex-.8,ey-.8,.05,1.6,1.6,2.3,{wc:'#5d84a8',dz:.9,z0:.4,step:.5,ww:.35});
      const [kx,ky]=at(al+(al<0?-1.4:1.4),3.6);box(kx-.35,ky-.35,.05,.7,.7,1.4,'#f2a33a',{roof:'#ffffff'});const [sx,sy]=P(kx,ky,2.6);ctx.fillStyle='#f2a33a';ctx.strokeStyle='#fff';ctx.lineWidth=1;ctx.fillRect(sx-6,sy-4,12,8);ctx.strokeRect(sx-6,sy-4,12,8);ctx.fillStyle='#fff';ctx.fillRect(sx-6,sy-2,12,1.4);
      },main?'PRD190':'PRD110');
    // MRT fare gantries in front of each entrance (ticketing comes out of the MRT)
    add(ex+ey+2.4,()=>{for(let j=0;j<5;j++){const [gx,gy]=at(al-1.2+j*.6,5.1);obox(gx,gy,.05,1,.22,1,a+Math.PI/2,'#c3cad3',null,'#9aa4af');
        const [rx,ry]=P(gx,gy,1.08);ctx.fillStyle=(Math.sin(T*2.4+j*1.7+al)>.45)?'#3ddc97':'#2f7fd8';ctx.fillRect(rx-2.5,ry-1.5,5,3);}
      const [lx,ly]=at(al,5.1);
      for(let i=0;i<4;i++){const tt=((T*.32+i*.25)%1);const [px,py]=at(al-.9+i*.6,3.9+tt*2);person(px,py,['#3f8fcf','#d9534f','#5aa86b','#e8a33d'][i],T*5+i);}},'PRD190');}
  if(key)ENT[key]=ents;}
const STOPS=[nearestS(rail,-50,30.5),nearestS(rail,-15,62.5),nearestS(rail,15,32),nearestS(rail,48,30.5),nearestS(rail,35,65)];
STOPS.forEach((s,i)=>station(s,i===3,['z1','z2','z3','z4','z4b'][i],['Jurong East','Toa Payoh','Yishun','Tampines','Punggol'][i]));

/* ---------- building types ---------- */
const hdbCols=['#d9534f','#e8a33d','#3f8fcf','#5aa86b','#9b6fc4'];
function building(u,v,w,d,h,type,o={}){
  const r=(w+d)/2;const at=o.fixed?[u,v]:place(u,v,r);if(!at)return null;[u,v]=at;h=Math.min(h,Math.max(2.5,v/2-1.5));mark(u-r,v-r,u+r,v+r);
  const [cx,cy]=XY(u,v),x=cx-w/2,y=cy-d/2;
  ground.push(()=>shadow(x,y,w,d,h));
  add(v+r+(o.kb||0),()=>{
    if(type==='hdb'){box(x,y,.05,w,d,1,'#8b8f96',{});box(x,y,1.05,w,d,h-1,'#f3f1ea',{roof:'#d8d4ca'});windows(x,y,1.05,w,d,h-1,{wc:'#5b6f86',dz:.85,step:.75});
      const b=hdbCols[o.i%5];box(x,y,h-.05,w,d,.45,b,{});box(x+w*.3,y+d*.3,h+.4,w*.3,d*.35,.6,'#c9cdd3',{});}
    else if(type==='glass'){const c=o.c||'#6f9fc8';box(x,y,.05,w,d,h,c,{roof:'#9fb6cc'});windows(x,y,.05,w,d,h,{wc:shade(c,.6),dz:.55,step:.45,hw:.38,ww:.3,z0:.3});
      const [a,b2]=[P(x+w,y,h+.05),P(x+w,y+d,.05)];ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(a[0]-3,a[1],2,b2[1]-a[1]);box(x+w*.25,y+d*.25,h+.05,w*.5,d*.5,.5,'#aab4bf',{});}
    else{const c=o.c||'#e9e4da';box(x,y,.05,w,d,h,c,{roof:o.roof||'#cfcac0'});windows(x,y,.05,w,d,h,{wc:o.wc||'#4f6d8f',dz:1,step:.9,z0:.5});
      if(o.band)box(x,y,h-.05,w,d,.35,o.band,{});}
    if(o.after)o.after(x,y,w,d,h);
  },o.p);
  return {u,v,x,y,w,d,h};
}
function shadow(x,y,w,d,h){const k=h*.55;const pts=[P(x,y,0),P(x+w,y,0),P(x+w,y+d,0),P(x,y+d,0)];const off=[k*C*S*.9,k*S*.2];
  const sh=pts.map(p=>[p[0]+off[0],p[1]+off[1]]);ctx.fillStyle='rgba(30,50,40,.18)';ctx.beginPath();[pts[0],pts[1],sh[1],sh[2],sh[3],pts[3]].forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.fill();}

/* ---------- Zone 1: Rail Infrastructure Development ---------- */
// new rail line construction (front-left): partly built viaduct + tower crane + site office + workers
{const v0=54,u0=-57,u1=-47.5;mark(u0-1,v0-4,u1+1,v0+4.5);
  for(let u=u0;u<=u1;u+=1){const built=u<u1-4;
    if(Math.round(u)%4===0)add(v0-.7,(uu=>()=>{boxUV(uu,v0,.05,1,1,ZR-1.3,'#c3c8ce',{});boxUV(uu,v0,ZR-1.3,1.8,1,.5,'#b9c0c8',{});})(u),'PRD110');
    if(built)add(v0-.6,(uu=>()=>oboxU(uu+.5,v0,ZR-.8,1.05,2.4,.8,AU,'#d0d4d9'))(u),'PRD110');}
  add(v0+1,()=>{const cu=-50.5,cv=v0-3.1;boxUV(cu,cv,.05,.7,.7,13,'#e8b03a',{});const top=PU(cu,cv,13.05);const j1=PU(cu+8,cv,13.05),j0=PU(cu-3.5,cv,13.05);line(j0,j1,dim('#e8b03a'),3);line(top,PU(cu,cv,15),dim('#e8b03a'),2);line(PU(cu,cv,15),j1,dim('#c99520'),1);line(PU(cu,cv,15),j0,dim('#c99520'),1);boxUV(cu-3.3,cv,12.6,1.2,1.2,.9,'#8d96a3',{});
    const hx=cu+3.5+2.5*Math.sin(T*.35);line(PU(hx,cv,13),PU(hx,cv,7.4),'#333',1);boxUV(hx,cv,6.6,1.6,.6,.7,'#9aa3ad',{});},'PRD110');
  add(v0+3,()=>{boxUV(-54.5,v0+3.4,.05,3,1.4,1.5,'#f4f4f4',{roof:'#5aa0d6'});windows(...(()=>{const [x,y]=XY(-54.5,v0+3.4);return [x-1.5,y-.7];})(),.05,3,1.4,1.5,{wc:'#3c5878',dz:1,z0:.5});
    for(const [a,b] of [[-57,v0+2.3],[-51,v0+2.5],[-49,v0+2.3]])boxUV(a,b,.05,.5,.5,.6,'#f08a24',{});},'PRD110');
  add(v0+2,()=>{if(!lod)return;for(let i=0;i<5;i++){const u=-56.5+i*2+Math.sin(T*.6+i)*.4,v=v0+1.7;const [x,y]=XY(u,v);person(x,y,'#f08a24',T*4+i);const [hx,hy]=P(x,y,0);ctx.fillStyle='#ffd23f';ctx.fillRect(hx-2.4,hy-18,4.8,1.8);}},'PRD110',true);
  CATS.PRD110P=[-52,v0,9];}
// extension spur from the front leg
{const pts=[];for(let t=0;t<=1.0001;t+=.1)pts.push([-37+t*-2,65+t*9]);mark(-40,65,-34,76);
  for(let i=0;i<pts.length-1;i++){const [u,v]=pts[i],[u2,v2]=pts[i+1],[x1,y1]=XY(u,v),[x2,y2]=XY(u2,v2),a=Math.atan2(y2-y1,x2-x1),seg=Math.hypot(x2-x1,y2-y1);
    if(i<8)add((v+v2)/2-.6,()=>oboxU((u+u2)/2,(v+v2)/2,ZR-.8,seg+.05,2.4,.8,a,'#d0d4d9'),'PRD110');
    if(i%3===0)add(v-.7,()=>boxUV(u,v,.05,.9,.9,ZR-1.3,'#c3c8ce',{}),'PRD110');}
  add(73.5,()=>{boxUV(-39.4,73.5,.05,.6,.6,9,'#e8b03a',{});line(PU(-41.5,73.5,9.05),PU(-35,73.5,9.05),dim('#e8b03a'),2.4);line(PU(-37,73.5,9),PU(-37,73.5,6.6),'#333',1);},'PRD110');
  CATS.PRD110R=[-38,70,9];}
// depot + control centre (behind the line)
{mark(-58,15,-41,27);
  add(21,()=>{oboxU(-50,19.5,.05,15,4.6,3.2,AU,'#b7bec8',f=>{strip(f,.4,2.4,dim('#3b4656'),.05,.95);},'#8f99a6');for(let k=0;k<5;k++){const [a,b]=PU(-56.5+k*3.2,19.5,3.3);}},'PRD110');
  for(let k=0;k<2;k++)add(23.5+k*1.6,(kk=>()=>{for(let c=0;c<3;c++)trainCar(...XY(-55+c*3.7,23+kk*1.6),.05,AU,c===0,c===2,'#d3263a');})(k),'PRD110');
  building(-37,21.5,2.6,2.6,4.6,'civic',{p:'PRD110',fixed:true,c:'#4a959a',roof:'#3b7c80',wc:'#203a55',after:(x,y,w,d,h)=>{line(P(x+w/2,y+d/2,h),P(x+w/2,y+d/2,h+2),dim('#9aa3ad'),1.4);dot(P(x+w/2,y+d/2,h+2.1),2.4,(Math.sin(T*4)>0)?'#ff4040':'#ffd0d0');}});
  mark(-39,19,-35,24);CATS.PRD110W=[-50,20,6];}

/* ---------- Zone 2: Roads and Commuter Infrastructure ---------- */
CATS.PRD120P=[-22,44,3];
// pedestrian overhead bridge across the expressway
{const bv=71.5,u0=-17.4,u1=-10.6;mark(u0-1.5,bv-1.2,u1+1.5,bv+1.2);   // pedestrian overhead bridge across the side street (seen face-on)
  add(bv+1.1,()=>{
    for(const [su,dir] of [[u0,-1],[u1,1]]){for(let k=0;k<6;k++)boxUV(su+dir*(k*.32),bv,.05,.5,1.2,3.5-k*.58,'#d5dae0',{edge:false});boxUV(su,bv,.05,.9,1.2,3.5,'#e3e7ec',{});}
    oboxU((u0+u1)/2,bv,3.2,u1-u0,1.2,.3,AU,'#cfd5dc',null,'#e8ebee');                      // thin deck
    ctx.globalAlpha=.4;oboxU((u0+u1)/2,bv+.55,3.5,u1-u0,.06,.9,AU,'#a9d1ea');oboxU((u0+u1)/2,bv-.55,3.5,u1-u0,.06,.9,AU,'#a9d1ea');ctx.globalAlpha=1; // glass railings
    for(const tt of [-3,-1,1,3])for(const sd of [-.55,.55])boxUV((u0+u1)/2+tt,bv+sd,3.5,.08,.08,1.5,'#b7bec7',{edge:false});
    oboxU((u0+u1)/2,bv,5,u1-u0+.6,1.5,.1,AU,'#2fae6a');                                          // green roof canopy
    for(let i=0;i<3;i++){const tt=((T*.12+i*.33)%1);personU(u0+.5+tt*(u1-u0-1),bv+.05,['#3f8fcf','#d9534f','#5aa86b'][i],T*5+i,3.5);}
  },'PRD120');}
// bus interchange
{mark(-34,48,-20,58);
  add(58,()=>{const cu=-27,cv=53;for(const [du,dv] of [[-5.5,-2.4],[5.5,-2.4],[-5.5,2.4],[5.5,2.4],[0,-2.4],[0,2.4]])boxUV(cu+du,cv+dv,.05,.35,.35,2.5,'#cfd6dd',{edge:false});
    for(let i=0;i<4;i++)busBody(...XY(cu-4.5+i*3,cv+.2),.05,AV,'#2f9e47',false);
    oboxU(cu,cv,2.55,14,6.4,.32,AU,'#2fae6a',null,'#e7efe9');
    if(lod){for(let i=0;i<8;i++)personU(cu-6+i*1.6,cv+3.4,['#3f8fcf','#d9534f','#5aa86b','#e8a33d'][i%4],i);}},'PRD120');
  linkway([[-20,55.5],[-17.6,55.5]]);
  CATS.PRD120R=[-24,54,5];}
CATS.PRD120W=[-24,73,3];


/* ---------- bus stops + covered linkways from the stations ---------- */
const SHELTERS=[],agents=[];
function busShelter(u,v,a){const [x,y]=XY(u,v);mark(u-2,v-1,u+2,v+1);
  add(v-.5,()=>{const ca=Math.cos(a),sa=Math.sin(a),nx=-sa,ny=ca;for(const al of [-1.2,1.2]){const cx=x+ca*al,cy=y+sa*al;box(cx-.08,cy-.08,.05,.16,.16,2,'#b7bec7',{edge:false});}
    ctx.globalAlpha=.5;obox(x-nx*.35,y-ny*.35,.05,2.7,.06,1.8,a,'#9cc6e2');ctx.globalAlpha=1;obox(x,y,2.05,3,1.1,.16,a,'#2fae6a',null,'#2fae6a');obox(x-nx*.2,y-ny*.2,.3,2.2,.35,.12,a,'#8a6a4a');
    const [sx,sy]=P(x+ca*1.6,y+sa*1.6,2.7);boxUV(...(()=>{const xx=x+ca*1.6,yy=y+sa*1.6;return [xx-yy,xx+yy];})(),.05,.1,.1,2.4,'#9aa3ad',{edge:false});dot([sx,sy],4,'#2fae6a');if(lod)txt('BUS',[sx,sy],5,'#fff',true);
    },'PRD120');}
function linkway(pts,col){const segs=[];for(let i=0;i<pts.length-1;i++){const [u0,v0]=pts[i],[u1,v1]=pts[i+1];const [x0,y0]=XY(u0,v0),[x1,y1]=XY(u1,v1);segs.push([x0,y0,x1,y1]);
    for(let t=0;t<=1.001;t+=.5)mark(u0+(u1-u0)*t-.6,v0+(v1-v0)*t-.6,u0+(u1-u0)*t+.6,v0+(v1-v0)*t+.6);}
  for(const [x0,y0,x1,y1] of segs){const L0=Math.hypot(x1-x0,y1-y0),a0=Math.atan2(y1-y0,x1-x0),nx=-Math.sin(a0)*.7,ny=Math.cos(a0)*.7,ex=Math.cos(a0)*.6,ey=Math.sin(a0)*.6;
    ground.push(()=>poly([P(x0-ex+nx,y0-ey+ny,0),P(x1+ex+nx,y1+ey+ny,0),P(x1+ex-nx,y1+ey-ny,0),P(x0-ex-nx,y0-ey-ny,0)],night?'#6b6f76':'#d9d6cf'));}
  for(const [x0,y0,x1,y1] of segs){const L=Math.hypot(x1-x0,y1-y0),a=Math.atan2(y1-y0,x1-x0),cx=(x0+x1)/2,cy=(y0+y1)/2;
    add(cx+cy+.4,()=>{const n=Math.max(1,Math.round(L/1.6));for(let i=0;i<=n;i++){const px=x0+(x1-x0)*i/n,py=y0+(y1-y0)*i/n;box(px-.07,py-.07,.05,.14,.14,1.75,'#b7bec7',{edge:false});}
      obox(cx,cy,1.8,L+.3,1.15,.14,a,col||'#2fae6a',null,'#d9e8df');
      },'PRD120');}}
// Zone 4: main station (fare gates at the exit) -> linkway -> bus stop on the main road (bus lane)
{const [e1]=ENT.z4.slice(-1);busShelter(53,40.75,AU);linkway([[e1[0],e1[1]+3.4],[53,e1[1]+3.4],[53,40.1]]);
  SHELTERS.push({u:53,v:40.75,axis:'u',door:[53.2,41.75],route:[[e1[0],e1[1]],[e1[0],e1[1]+3.4],[53,e1[1]+3.4],[53,40.4]],queue:0,incoming:0,timer:1});}
// Zone 2: front-leg station -> linkway -> bus stop on the cross street (bus lane) and the bus interchange
{const e=ENT.z2;const w=e.reduce((m,q)=>q[0]<m[0]?q:m,e[0]);busShelter(-16.75,52.3,AV);linkway([[w[0],w[1]-3.4],[-16.75,w[1]-3.4],[-16.75,53.4]]);
  SHELTERS.push({u:-16.75,v:52.3,axis:'v',door:[-15.75,52.1],route:[[w[0],w[1]],[w[0],w[1]-3.4],[-16.75,w[1]-3.4],[-16.6,53]],queue:0,incoming:0,timer:2});}
/* ---------- Zone 3: Vehicle and Road User Services ---------- */
// ERP gantries over the cross street (face the viewer) + one on the expressway
function erp(u,v,label){mark(u-3.5,v-1,u+3.5,v+1);
  add(v+.9,()=>{
    for(const du of [-2.8,2.8])boxUV(u+du,v,.05,.45,.45,4.4,'#d7dce2',{});
    oboxU(u,v,4.1,6.3,.5,.75,AU,'#1f4e9c',null,'#2a5fb0');           // beam spanning the street (faces viewer)
    const [a,b]=[PU(u-2.6,v+.25,4.8),PU(u+2.6,v+.25,4.15)];          // front panel (u-z plane = flat on screen)
    ctx.fillStyle=dim('#1f4e9c');ctx.fillRect(a[0],a[1],b[0]-a[0],b[1]-a[1]);
    txt('ERP',PU(u-1.4,v+.25,4.48),12,'#ffffff',true);
    ctx.fillStyle='#0b1220';const [r0,r1]=[PU(u+.1,v+.25,4.72),PU(u+2.4,v+.25,4.24)];ctx.fillRect(r0[0],r0[1],r1[0]-r0[0],r1[1]-r0[1]);
    txt(label,PU(u+1.25,v+.25,4.48),9,'#ff9f2e',true);
    for(const du of [-1.4,1.4]){const q=PU(u+du,v+.3,4.02);ctx.fillStyle=dim('#2b2f36');ctx.fillRect(q[0]-4,q[1],8,3);dot([q[0],q[1]+5],1.6,(Math.sin(T*3+du)>.3)?'#3ddc97':'#1a6b4a');}
  },'PRD177');}
erp(16,71,'$2.00');erp(16,52.5,'$1.50');
CATS.PRD177R=[23.5,53.5,8];
// multi-storey car park with P sign and barrier
building(23.5,53.5,5,4,5.4,'civic',{p:'PRD177',fixed:true,c:'#a3abb6',roof:'#8f98a4',wc:'#30363f',after:(x,y,w,d,h)=>{
  for(let i=0;i<4;i++)for(let j=0;j<2;j++)carBody(x+.9+i*1.15,y+1+j*2,h+.05,Math.PI/2,['#d9534f','#ffffff','#3f8fcf','#2b2f36'][(i+j)%4]);
  const [px,py]=P(x+w,y+.4,h+1.6);boxUV(...(()=>{const [uu,vv]=[(x+w)-(y+.4),(x+w)+(y+.4)];return [uu,vv];})(),h,.15,.15,1.2,'#9aa3ad',{edge:false});
  ctx.fillStyle='#1f6fd1';ctx.fillRect(px-9,py-9,18,18);txt('P',[px,py+.5],13,'#fff',true);}});
mark(19,48.5,28,58.5);
add(58.4,()=>{const ang=Math.max(0,Math.sin(T*.8))*1.2;const [bx,by]=PU(19.4,58.2,1.1);boxUV(19.4,58.2,.05,.4,.4,1.05,'#f2b134',{});line([bx,by],[bx+Math.cos(ang)*34,by-Math.sin(ang)*34],'#d9534f',3);},'PRD177');
// vehicle registration centre + live COE bidding board (behind the line)
building(10,15.5,5.2,3.4,4.2,'civic',{p:'PRD177',fixed:true,c:'#e4e8ee',band:'#7b5cc9',wc:'#4f6d8f'});mark(6,11,14.5,20);
add(21,()=>{const cats=['A','B','C','D','E'],base=[98,121,69,9,123];boxUV(13.4,20.6,.05,.3,.3,2.2,'#9aa3ad',{});boxUV(18.6,20.6,.05,.3,.3,2.2,'#9aa3ad',{});
  const [x0,y0]=PU(12.9,20.6,5.8),[x1,y1]=PU(19.1,20.6,2.2);ctx.fillStyle=dim('#16202e');ctx.fillRect(x0,y0,x1-x0,y1-y0);ctx.strokeStyle=dim('#7b5cc9');ctx.lineWidth=2;ctx.strokeRect(x0,y0,x1-x0,y1-y0);
  txt('COE BIDDING',[(x0+x1)/2,y0+9],9,'#c9d4e6',true);const bw=(x1-x0-14)/5;
  for(let i=0;i<5;i++){const k=.5+.5*Math.sin(T*.9+i*1.7),hgt=(.35+.45*k)*(y1-y0-34);ctx.fillStyle=['#d9534f','#e8a33d','#3f8fcf','#5aa86b','#9b6fc4'][i];ctx.fillRect(x0+7+i*bw+2,y1-14-hgt,bw-4,hgt);
    txt(cats[i],[x0+7+i*bw+bw/2,y1-7],8,'#c9d4e6',true);if(lod)txt('$'+Math.round(base[i]*(.97+.06*k))+'k',[x0+7+i*bw+bw/2,y1-18-hgt],7,'#ffffff',true);}},'PRD177');
mark(12,19,20,23);
add(24,()=>{for(let i=0;i<6;i++)carBody(...XY(7.6+i*1.9,23.6),.05,AV,['#d9534f','#ffffff','#3f8fcf','#2b2f36','#e8a33d','#9b6fc4'][i]);},'PRD177');mark(6,22,19,25);
CATS.PRD177P=[10,15.5,6];
// vehicle inspection centre (lanes with cars) + EV charging hub
building(27,17,5,3,3.2,'civic',{p:'PRD177',fixed:true,c:'#dfe3e8',band:'#7b5cc9',wc:'#4f6d8f',after:(x,y,w,d,h)=>{for(let i=0;i<3;i++){const [a,b]=[P(x+w,y+.4+i*.9,.05),P(x+w,y+.4+i*.9+.7,2.2)];ctx.fillStyle=dim('#2a2f38');ctx.beginPath();ctx.moveTo(...P(x+w,y+.4+i*.9,.05));ctx.lineTo(...P(x+w,y+1.1+i*.9,.05));ctx.lineTo(...P(x+w,y+1.1+i*.9,2.2));ctx.lineTo(...P(x+w,y+.4+i*.9,2.2));ctx.fill();}}});
mark(23,13,31,21);
add(26,()=>{oboxU(25.5,24.5,3.1,8.5,3.2,.22,AU,'#2fae6a',null,'#e9f7ef');for(const du of [-3.6,3.6])boxUV(25.5+du,24.5,.05,.25,.25,3.05,'#cfd6dd',{edge:false});
  for(let i=0;i<4;i++){const u=22.6+i*2;carBody(...XY(u,25.4),.05,AV,['#3f8fcf','#ffffff','#d9534f','#5aa86b'][i]);boxUV(u,23.2,.05,.5,.4,1.4,'#2fae6a',{});const g=.5+.5*Math.sin(T*3+i);dot(PU(u,23.4,1.2),2.4,`rgba(61,220,151,${.4+.6*g})`);
    if(lod){ctx.strokeStyle='#2b2f36';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(...PU(u,23.4,.9));ctx.quadraticCurveTo(...PU(u,24.3,.2),...PU(u,24.9,.6));ctx.stroke();}}},'PRD177');
mark(20,22,31,27);
// driving test circuit: cones + learner cars
for(let s=0;s<circuit.len;s+=4){const p=circuit.at(s);for(const sg of [-1,1]){const o=1.9,x=p.x-Math.sin(p.a)*o*sg,y=p.y+Math.cos(p.a)*o*sg;add(x+y,()=>{const [px,py]=P(x,y,.03);ctx.fillStyle=dim('#f08a24');ctx.beginPath();ctx.moveTo(px,py-8);ctx.lineTo(px+3,py);ctx.lineTo(px-3,py);ctx.fill();ctx.fillStyle='#fff';ctx.fillRect(px-1.8,py-4.6,3.6,1.5);},'PRD177');}}
mark(-3,67,13,79);
CATS.PRD177W=[5,73,3];

/* ---------- Zone 4: Ticketing and Fare Services ---------- */

CATS.PRD190H=[46,37,5];{const e=ENT.z4[0];CATS.PRD190G=[e[0]+1.4,e[1]+1,4];}
building(56,71,4.2,2.6,3.6,'civic',{p:'PRD190',fixed:true,c:'#f6efe3',band:'#d9534f',wc:'#4f6d8f'});
building(54,56.5,3.4,2.4,2.6,'civic',{p:'PRD190',fixed:true,c:'#f6efe3',band:'#5aa86b',wc:'#4f6d8f'});
mark(49,53,62,79);
add(77,()=>{if(!lod)return;for(let i=0;i<6;i++)personU(51.5+i*.9+Math.sin(T+i)*.3,76.2,i%2?'#3f8fcf':'#ffffff',T*4+i);},'PRD190',true);
CATS.PRD190S=[54,69,6];

/* ---------- vehicles (shared drawing) ---------- */
function carBody(x,y,z,a,col){obox(x,y,z+.12,1.9,.95,.42,a,col,null);obox(x-Math.cos(a)*.1,y-Math.sin(a)*.1,z+.54,1.05,.82,.36,a,'#b8d0e6',null,shade(col,1.05));}
function busBody(x,y,z,a,col,lights){obox(x,y,z+.12,3.2,1.15,1.35,a,col,(f,zz,h)=>{if(f.i===0||f.i===2)strip(f,zz+.6,zz+1.1,night?'#ffe08a':'#22303f',.06,.94);else strip(f,zz+.6,zz+1.15,'#22303f',.15,.85);},'#f2f4f6');}
function trainCar(x,y,z,a,head,tail,stripe){const ca=Math.cos(a),sa=Math.sin(a),L=3.5,GL=night?'#ffe3a0':'#5f7f9e',GLd=night?'#f0cf86':'#4d6b88';
  // underframe first, so it sits beneath the body instead of painting over it
  obox(x,y,z,L*.9,1.5,.2,a,'#5b636e');
  obox(x,y,z+.18,L,1.95,1.7,a,'#f1f3f5',(f,zz,h)=>{
    if(f.i===0||f.i===2){
      strip(f,zz,zz+.16,dim('#8b939d'));                       // lower skirt
      strip(f,zz+.42,zz+.56,dim(stripe));                       // livery stripe
      // window panes with white pillars between them (not one solid dark band)
      for(let w=0;w<8;w++){const t0=.05+w*.1175;strip(f,zz+.92,zz+1.36,w%2?GL:GLd,t0,t0+.085);}
      // doors: light grey panels with a small window
      for(let d=0;d<4;d++){const t0=.12+d*.235;strip(f,zz+.2,zz+1.5,dim('#dde2e7'),t0,t0+.06);strip(f,zz+.95,zz+1.32,GL,t0+.012,t0+.048);}
    }else if(!((f.i===1&&head)||(f.i===3&&tail)))strip(f,zz+.3,zz+1.45,dim('#9aa3ad'),.34,.66);   // gangway
  },'#e4e8ec');
  obox(x,y,z+1.88,1.2,.8,.12,a,'#c4cbd3');                    // roof equipment
  for(const [end,on] of [[1,head],[-1,tail]]){if(!on)continue;const nx=x+ca*end*(L/2+.3),ny=y+sa*end*(L/2+.3);
    obox(nx,ny,z+.18,.6,1.85,1.4,a,'#f1f3f5',(f,zz,h)=>{
      if(f.i===(end>0?1:3)){strip(f,zz+.78,zz+1.28,night?'#9fd8ff':'#2b3d52',.12,.88);strip(f,zz+.42,zz+.56,dim(stripe),.05,.95);
        for(const o of [.2,.8]){const q=[f.A[0]+(f.B[0]-f.A[0])*o,f.A[1]+(f.B[1]-f.A[1])*o];dot(P(q[0],q[1],zz+.3),end>0?1.9:1.4,end>0?(night?'#fff7c2':'#fff3b0'):'#ff3b3b');}}
      else if(f.i===0||f.i===2){strip(f,zz+.42,zz+.56,dim(stripe));strip(f,zz+.9,zz+1.25,GL,.15,.85);}},'#e4e8ec');}
}

/* ---------- rail viaduct ---------- */
for(let s=0;s<rail.len;s+=1){const p=rail.at(s+.5),u=p.x-p.y,v=p.x+p.y;
  add(v-.6,()=>{obox(p.x,p.y,ZR-.8,1.06,2.6,.8,p.a,'#d3d7dc');const ca=Math.cos(p.a),sa=Math.sin(p.a);
    for(const off of [-1.2,1.2]){const a=[p.x-ca*.53-sa*off,p.y-sa*.53+ca*off],b=[p.x+ca*.53-sa*off,p.y+sa*.53+ca*off];line(P(a[0],a[1],ZR+.25),P(b[0],b[1],ZR+.25),night?'#7d8794':'#aeb5bd',2);}
    for(const off of [-.55,.55]){const a=[p.x-ca*.53-sa*off,p.y-sa*.53+ca*off],b=[p.x+ca*.53-sa*off,p.y+sa*.53+ca*off];line(P(a[0],a[1],ZR+.02),P(b[0],b[1],ZR+.02),night?'#9aa6b5':'#7a828e',1.1);}},'PRD110');
  if(Math.round(s)%6===0&&distTo(road,u,v)>3.4&&XS.every(x=>Math.abs(u-x.u)>2.2))add(v-.7,()=>{box(p.x-.4,p.y-.4,.05,.8,.8,ZR-1.6,'#c3c8ce',{});box(p.x-.8,p.y-.8,ZR-1.6,1.6,1.6,.8,'#c3c8ce',{});},'PRD110');
  occ.add(Math.round(u)+','+Math.round(v));}


/* ---------- Singapore landmarks ---------- */
// Marina Bay Sands (modelled on the aerial view): three dark-glass towers whose outer leg flares at the base,
// the SkyPark deck with its cantilever, and the white wave-roofed podium in front
mark(-24.5,3,-6,30);
ground.push(()=>{for(const tu of [-19.4,-15.3,-11.2]){const [x,y]=XY(tu,25.6);shadow(x-1.2,y-.5,2.4,1,10.8);}});
add(29.2,()=>{
  const vf=26.1,H=10.6;
  for(const [ti,tu] of [[0,-19.4],[1,-15.3],[2,-11.2]]){
    const uL=tu-1.1,uR=tu+1.1,flare=.75;
    // top + right side sliver (gives depth)
    poly([PU(uL,vf-1.1,H),PU(uR,vf-1.1,H),PU(uR,vf,H),PU(uL,vf,H)],dim('#7f98a6'),'#22343f',.8);
    // front face: left leg straight, right leg curving outward towards the base
    const pts=[PU(uL,vf,0)];for(let k=0;k<=12;k++){const z=H*k/12,f=Math.pow(1-k/12,2.2);pts.push(PU(uR+flare*f,vf,z));}pts.push(PU(uL,vf,H));
    const [gx0,gy0]=PU(uL,vf,H),[gx1,gy1]=PU(uR+flare,vf,0);const g=ctx.createLinearGradient(gx0,gy0,gx1,gy1);
    g.addColorStop(0,night?'#1d3442':'#5d8794');g.addColorStop(.45,night?'#14262f':'#2f5562');g.addColorStop(1,night?'#22404f':'#4c7480');
    poly(pts,g,'#1b2a33',1.2);
    // floor lines + mullions
    ctx.save();ctx.beginPath();pts.forEach((q,i)=>i?ctx.lineTo(...q):ctx.moveTo(...q));ctx.closePath();ctx.clip();
    ctx.strokeStyle=night?'rgba(255,217,138,.55)':'rgba(255,255,255,.22)';ctx.lineWidth=.6;
    for(let z=.4;z<H;z+=.42){const a=PU(uL,vf,z),b=PU(uR+flare,vf,z);line(a,b,ctx.strokeStyle,.6);}
    for(let u=uL+.25;u<uR+flare;u+=.25){const a=PU(u,vf,0),b=PU(u,vf,H);line(a,b,night?'rgba(0,0,0,.25)':'rgba(10,30,40,.18)',.5);}
    // sky reflection band
    ctx.fillStyle='rgba(255,255,255,.12)';const r0=PU(uL+.3,vf,H*.55),r1=PU(uL+1.1,vf,H*.2);ctx.fillRect(r0[0],r0[1],r1[0]-r0[0],r1[1]-r0[1]);
    ctx.restore();
    // the split between the two legs
    const sp=[];for(let k=0;k<=8;k++){const z=H*.62*k/8,f=Math.pow(1-k/8,1.6);sp.push(PU(tu+.15+flare*.55*f,vf,z));}
    ctx.strokeStyle=night?'#4d6b7a':'#a9c4cf';ctx.lineWidth=1.4;ctx.beginPath();sp.forEach((q,i)=>i?ctx.lineTo(...q):ctx.moveTo(...q));ctx.stroke();
  }
  // SkyPark: long deck across the three towers, cantilevering out past the north (left) tower
  const sz=H+.05,u0=-23.6,u1=-9.6,dv=.8;
  const deck=[PU(u0,vf-dv,sz+.55),PU(u1,vf-dv,sz+.55),PU(u1,vf,sz+.55),PU(u0+.2,vf,sz+.55)];
  poly([PU(u0,vf,sz+.12),PU(u1,vf,sz+.12),PU(u1,vf,sz+.55),PU(u0+.2,vf,sz+.55)],dim('#f7f9fb'),'#22343f',1);   // fascia
  poly([PU(u0+1.4,vf,sz-.05),PU(u1,vf,sz-.05),PU(u1,vf,sz+.12),PU(u0,vf,sz+.12)],dim('#33444f'));               // dark underside / cantilever taper
  poly(deck,dim('#e9eef1'),'#22343f',.8);
  line(PU(u0+2,vf-.15,sz+.6),PU(u1-1,vf-.15,sz+.6),night?'#7fe0ff':'#4cc3ef',2);                                // infinity pool
  for(const [bu,bw] of [[-21.5,.8],[-12.2,.9]]){boxUV(bu,vf-.4,sz+.55,bw,.35,.3,'#f4f6f8',{});}
  // podium: white wave roofs (the Shoppes / expo halls) in front of the towers
  for(let i=0;i<7;i++){const ua=-22.6+i*1.9,a=PU(ua,28.4,1.2),b=PU(ua+1.9,28.4,1.2);
    poly([PU(ua,28.4,.05),PU(ua+1.9,28.4,.05),PU(ua+1.9,28.4,1.0),PU(ua,28.4,1.0)],dim('#c9d1d8'),'rgba(0,0,0,.12)');
    ctx.fillStyle=dim('#f6f8fa');ctx.strokeStyle='#9aa7b2';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(a[0],a[1]+6);ctx.quadraticCurveTo((a[0]+b[0])/2,a[1]-12,b[0],b[1]+6);ctx.lineTo(b[0],b[1]+8);ctx.lineTo(a[0],a[1]+8);ctx.closePath();ctx.fill();ctx.stroke();
    for(let k=1;k<5;k++){const x=a[0]+(b[0]-a[0])*k/5;line([x,a[1]+7],[x,a[1]-6+Math.abs(k-2.5)*2.6],'#c3ccd4',.6);}}},null);
// Singapore Flyer
mark(.5,21.5,7,27.5);
add(26.8,()=>{const cu=3.8,cv=24.5,cz=6.3,R=4.6*S;const [cx,cy]=PU(cu,cv,cz);boxUV(cu,cv+1.4,.05,3.4,1.4,1.1,'#e4e9ee',{roof:'#9fb6cc'});
  ctx.strokeStyle=dim('#c9d1d9');ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(...PU(cu-2.1,cv,.05));ctx.moveTo(cx,cy);ctx.lineTo(...PU(cu+2.1,cv,.05));ctx.stroke();
  ctx.strokeStyle=night?'#7fe0ff':'#e9eef3';ctx.lineWidth=3.2;ctx.beginPath();ctx.arc(cx,cy,R,0,6.2832);ctx.stroke();ctx.lineWidth=1;ctx.strokeStyle=night?'rgba(127,224,255,.55)':'#c9d1d9';
  const rot=T*.12;for(let k=0;k<28;k++){const an=rot+k*6.2832/28;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(an)*R,cy+Math.sin(an)*R);ctx.stroke();}
  for(let k=0;k<28;k++){const an=rot+k*6.2832/28,px=cx+Math.cos(an)*R,py=cy+Math.sin(an)*R;ctx.fillStyle=night?`hsl(${(k*13+T*40)%360},85%,72%)`:'#f4f6f8';ctx.strokeStyle='#9aa6b2';ctx.lineWidth=.8;ctx.beginPath();ctx.ellipse(px,py+4,3.6,2.6,0,0,6.3);ctx.fill();ctx.stroke();}
  dot([cx,cy],4,dim('#9aa3ad'));},null);
// ArtScience Museum (lotus) on the bay shore
mark(-3,19.5,2,23.5);
add(22.2,()=>{const [cx,cy]=PU(-.6,21.6,.6);ctx.fillStyle=dim('#cfd6dd');ctx.fillRect(cx-10,cy-2,20,10);
  for(let k=0;k<9;k++){const an=-Math.PI+.25+k*(Math.PI-.5)/8;ctx.save();ctx.translate(cx,cy);ctx.rotate(an+Math.PI/2);ctx.fillStyle=k%2?dim('#f4f6f8'):dim('#e3e8ed');ctx.strokeStyle='rgba(0,0,0,.15)';ctx.beginPath();ctx.ellipse(0,-18,6,20,0,0,6.3);ctx.fill();ctx.stroke();ctx.restore();}
  },null);
// Esplanade "durians"
mark(-6.5,5.5,1,10.5);
add(9.5,()=>{for(const [du,dv,r] of [[-4.2,8.6,1.6],[-1.4,7.9,1.3]]){const [cx,cy]=PU(du,dv,.05),rx=r*S*1.2,ry=r*S*1.15;ctx.fillStyle=dim('#c9a85a');ctx.beginPath();ctx.ellipse(cx,cy,rx,ry,0,Math.PI,0);ctx.lineTo(cx+rx,cy);ctx.fill();
    ctx.strokeStyle=dim('#9c7f3c');ctx.lineWidth=.8;for(let i=0;i<14;i++)for(let j=1;j<5;j++){const an=Math.PI+i*Math.PI/13,rr=j/5;const px=cx+Math.cos(an)*rx*rr,py=cy+Math.sin(an)*ry*Math.sqrt(1-(1-rr)*(1-rr));ctx.beginPath();ctx.moveTo(px-2,py+1.5);ctx.lineTo(px,py-1.5);ctx.lineTo(px+2,py+1.5);ctx.stroke();}}},null);
// Gardens by the Bay: Supertrees + cooled conservatory domes, inside the park connector loop
mark(-31,15,-22,29);
function supertree(u,v,h){const [x,y]=XY(u,v);add(v+.2,()=>{const [bx,by]=P(x,y,.05),[tx,ty]=P(x,y,h);ctx.fillStyle=dim('#6d4a8c');ctx.beginPath();ctx.moveTo(bx-4,by);ctx.lineTo(bx+4,by);ctx.lineTo(tx+2,ty);ctx.lineTo(tx-2,ty);ctx.fill();
  ctx.strokeStyle=dim('#8a5fb0');ctx.lineWidth=1;for(let i=-3;i<=3;i++){ctx.beginPath();ctx.moveTo(tx+i*.6,ty);ctx.lineTo(tx+i*5,ty-11);ctx.stroke();}
  ctx.fillStyle=night?'#ff6fd8':dim('#c44f9a');ctx.beginPath();ctx.ellipse(tx,ty-11,19,6,0,0,6.3);ctx.fill();ctx.fillStyle=night?'#ffb3ee':dim('#e07dbd');ctx.beginPath();ctx.ellipse(tx,ty-12.5,15,4,0,0,6.3);ctx.fill();},'PRD120');}
[[-29,22.6,3.8],[-26.6,21.2,4.6],[-24.2,22.4,4],[-27.6,25.2,4.9],[-25,25.8,3.6],[-23.2,27.4,3.4]].forEach(a=>supertree(...a));
for(const [du,dv,r] of [[-29.2,18.2,1.5],[-25.8,17.4,1.3]])add(dv+.5,()=>{const [cx,cy]=PU(du,dv,.05),rx=r*S*1.25,ry=r*S*1.1;const g=ctx.createLinearGradient(cx,cy-ry,cx,cy);g.addColorStop(0,night?'rgba(160,220,255,.55)':'rgba(220,240,250,.95)');g.addColorStop(1,night?'rgba(90,150,200,.45)':'rgba(170,205,225,.95)');
  ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(cx,cy,rx,ry,0,Math.PI,0);ctx.lineTo(cx+rx,cy);ctx.fill();ctx.strokeStyle='rgba(80,120,150,.6)';ctx.lineWidth=.8;for(let k=-3;k<=3;k++){ctx.beginPath();ctx.ellipse(cx,cy,Math.abs(k)*rx/3.2+.5,ry,0,Math.PI,0);ctx.stroke();}},'PRD120');
/* ---------- city fill: HDB estates, towers, low-rise ---------- */
[[-60,54],[-52,52],[-34,77],[-28,60],[-36,52],[-8,74],[28,72],[34,58],[40,52],[60,52],[62,64],[-56,40],[-26,36],[30,36],[-46,58],[38,76],[24,66]].forEach(([u,v],i)=>building(u,v,2.6,2,6.5+(i%3),'hdb',{i}));
[[-2,53,2.2,2.2,13,'#6f9fc8'],[2,50.5,2.2,2.2,15,'#5b8fc0'],[4.5,56,2.2,2.2,11,'#8fb6d8'],[-1,58,1.8,1.8,9,'#6aa1cf'],[8.5,52,1.8,1.8,12,'#4f7fb3'],[-8,52,2,2,10,'#7aa7cf'],[10,57.5,2,2,8,'#9cc3e0']].forEach(([u,v,w,d,h,c])=>building(u,v,w,d,h,'glass',{c,kb:.2}));
[[-6,20],[60,18],[52,14],[18,12],[-46,12]].forEach(([u,v],i)=>building(u,v,2.2,1.8,3.2,'civic',{c:['#efe6d6','#e7ecef','#f1e3e0'][i%3],band:hdbCols[(i+1)%5]}));

/* ---------- trees ---------- */
for(let n=0;n<1100;n++){const u=-72+rnd()*144,v=9+rnd()*79;if(v>coast(u)-1.5||!free(u,v,.55))continue;
  for(let du=-1;du<=1;du++)for(let dv=-1;dv<=1;dv++)occ.add((Math.round(u)+du)+','+(Math.round(v)+dv));
  const [x,y]=XY(u,v),r=.75+rnd()*.45,col=['#3d8b3d','#4e9c45','#2f7a3a'][n%3];
  ground.push(()=>{const [px,py]=P(x,y,0);ctx.fillStyle='rgba(30,50,30,.18)';ctx.beginPath();ctx.ellipse(px+7,py+1,r*S*1.05,r*S*.5,0,0,6.3);ctx.fill();});
  add(v,()=>{const [px,py]=P(x,y,0);ctx.fillStyle=dim('#6b4a2b');ctx.fillRect(px-1.5,py-12,3,12);const [cx,cy]=P(x,y,1.25+r*.6);
    ctx.fillStyle=shade(dim(col),.85);ctx.beginPath();ctx.arc(cx,cy,r*S*.95,0,6.3);ctx.fill();ctx.fillStyle=shade(dim(col),1.12);ctx.beginPath();ctx.arc(cx-r*S*.25,cy-r*S*.3,r*S*.6,0,6.3);ctx.fill();});}

/* ---------- ground layer (cached) ---------- */
const GS=2;const gcv=document.createElement('canvas');gcv.width=W*GS;gcv.height=H*GS;
function ribbon(path,w,col,step=.5){for(let s=0;s<path.len-(path.closed?0:.3);s+=step){const a=path.at(s),b=path.at(Math.min(path.closed?s+step+.12:path.len,s+step+.12));const n1=[-Math.sin(a.a)*w/2,Math.cos(a.a)*w/2],n2=[-Math.sin(b.a)*w/2,Math.cos(b.a)*w/2];
  poly([P(a.x+n1[0],a.y+n1[1],0),P(b.x+n2[0],b.y+n2[1],0),P(b.x-n2[0],b.y-n2[1],0),P(a.x-n1[0],a.y-n1[1],0)],col);}}
function dashes(path,off,col,gap=2,w=1.3){for(let s=0;s<path.len;s+=gap){const a=path.at(s),b=path.at(s+gap*.45);const o1=[-Math.sin(a.a)*off,Math.cos(a.a)*off],o2=[-Math.sin(b.a)*off,Math.cos(b.a)*off];line(P(a.x+o1[0],a.y+o1[1],0),P(b.x+o2[0],b.y+o2[1],0),col,w);}}
function edgeLine(path,off,col){ctx.strokeStyle=col;ctx.lineWidth=1;ctx.beginPath();for(let s=0;s<=path.len;s+=.8){const a=path.at(s),p=P(a.x-Math.sin(a.a)*off,a.y+Math.cos(a.a)*off,0);s?ctx.lineTo(...p):ctx.moveTo(...p);}ctx.stroke();}
const GROUND_EXTRA={
  PRD120:()=>{roadNet();ribbon(bike,1.2,night?'#6b6f76':'#e6e3dc');dashes(bike,0,'#9aa3ad',1.6,1);},
  PRD177:()=>{ribbon(circuit,3.2,night?'#3d4048':'#6b7280');dashes(circuit,0,'#f4f4f4',1.4);}
};
function roadNet(){const asph=night?'#3a3f47':'#5a616b',walk=night?'#6b6f76':'#d9d6cf';
  ribbon(road,RW+2.6,walk);for(const x of XS)ribbon(x.path,3.6+1.6,walk);
  ribbon(road,RW,asph);for(const x of XS)ribbon(x.path,3.4,asph);
  dashes(road,0,'#f2d24a',1.2,1.4);dashes(road,1.2,'#f4f4f4');dashes(road,-1.2,'#f4f4f4');edgeLine(road,RW/2-.12,'rgba(255,255,255,.7)');edgeLine(road,-RW/2+.12,'rgba(255,255,255,.7)');
  for(const x of XS){dashes(x.path,0,'#f2d24a',1.2,1.2);
    for(let k=0;k<6;k++){const [a,b]=[PU(x.u-1.6+k*.6,47.3,0),PU(x.u-1.6+k*.6+.32,47.3,0)];poly([a,b,PU(x.u-1.6+k*.6+.32,48.6,0),PU(x.u-1.6+k*.6,48.6,0)],'rgba(255,255,255,.85)');}}}
function renderGround(){
  const real=ctx;ctx=gcv.getContext('2d');ctx.setTransform(GS,0,0,GS,0,0);ctx.clearRect(0,0,W,H);
  const sky=ctx.createLinearGradient(0,0,0,OY+30);sky.addColorStop(0,night?'#0b1a33':'#a9d6f0');sky.addColorStop(1,night?'#1b3358':'#e6f4fb');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
  if(!night){ctx.fillStyle='rgba(255,255,255,.85)';for(const [x,y,r] of [[260,60,24],[298,52,32],[342,62,22],[1180,46,28],[1222,38,36],[1268,50,24],[1990,70,26],[2032,60,32]]){ctx.beginPath();ctx.arc(x,y,r,0,6.3);ctx.fill();}}
  else{ctx.fillStyle='#fff';for(let i=0;i<70;i++){ctx.globalAlpha=.3+.7*((i*37)%10)/10;ctx.fillRect((i*331)%W,(i*97)%(OY-10),1.6,1.6);}ctx.globalAlpha=1;}
  // distant skyline silhouette
  ctx.fillStyle=night?'#22385c':'#c7dceb';for(let i=0;i<60;i++){const x=i*41+((i*53)%17),h=10+((i*37)%28);ctx.fillRect(x,OY-h,30,h);}
  // water
  const wg=ctx.createLinearGradient(0,OY+600,0,H);wg.addColorStop(0,night?'#123d6b':'#4a9bd6');wg.addColorStop(1,night?'#0d2f55':'#2f7fc0');
  ctx.fillStyle=wg;ctx.fillRect(0,OY,W,H-OY);
  // land
  ctx.beginPath();ctx.moveTo(...PU(-80,0,0));ctx.lineTo(...PU(80,0,0));for(let u=80;u>=-80;u-=1)ctx.lineTo(...PU(u,coast(u),0));ctx.closePath();ctx.fillStyle=night?'#2e5a33':'#8cc47a';ctx.fill();
  ctx.beginPath();for(let u=-80;u<=80;u+=1){const p=PU(u,coast(u),0);u===-80?ctx.moveTo(...p):ctx.lineTo(...p);}for(let u=80;u>=-80;u-=1)ctx.lineTo(...PU(u,coast(u)-1.6,0));ctx.closePath();ctx.fillStyle=night?'#8a7f5c':'#e8d9a8';ctx.fill();
  ctx.strokeStyle=night?'rgba(255,255,255,.15)':'rgba(255,255,255,.45)';ctx.lineWidth=1.2;for(let i=0;i<90;i++){const u=-70+(i*37)%140,v=coast(u)+2+((i*13)%9);const p=PU(u,v,0);ctx.beginPath();ctx.moveTo(p[0]-10,p[1]);ctx.quadraticCurveTo(p[0],p[1]-3,p[0]+10,p[1]);ctx.stroke();}
  // Marina Bay water body + promenade
  {const pts=[];for(let k=0;k<=64;k++){const an=k/64*6.2832;pts.push(PU(-4+8.2*Math.cos(an),15.5+6.6*Math.sin(an),0));}
   const pts2=[];for(let k=0;k<=64;k++){const an=k/64*6.2832;pts2.push(PU(-4+9.2*Math.cos(an),15.5+7.4*Math.sin(an),0));}
   poly(pts2,night?'#5f6670':'#d8d2c6');const g=ctx.createLinearGradient(0,PU(0,9,0)[1],0,PU(0,22,0)[1]);g.addColorStop(0,night?'#123d6b':'#5aa6dc');g.addColorStop(1,night?'#0d2f55':'#3b8dc9');poly(pts,g);
   ctx.strokeStyle=night?'rgba(255,255,255,.15)':'rgba(255,255,255,.5)';ctx.lineWidth=1.1;for(let i=0;i<14;i++){const p=PU(-10+(i*5)%13,11+(i*3)%9,0);ctx.beginPath();ctx.moveTo(p[0]-8,p[1]);ctx.quadraticCurveTo(p[0],p[1]-2.5,p[0]+8,p[1]);ctx.stroke();}}
  // grass texture patches
  for(let i=0;i<260;i++){const u=-72+rnd()*144,v=6+rnd()*78;if(v>coast(u)-2)continue;const p=PU(u,v,0);ctx.fillStyle=night?'rgba(20,50,25,.25)':'rgba(120,180,100,.35)';ctx.beginPath();ctx.ellipse(p[0],p[1],14+rnd()*20,5+rnd()*6,0,0,6.3);ctx.fill();}
  // plazas
  poly([PU(-58.5,50.5,0),PU(-46.5,50.5,0),PU(-46.5,58.5,0),PU(-58.5,58.5,0)],night?'#5a5040':'#cdb88f');
  poly([PU(50,66,0),PU(60,66,0),PU(60,75,0),PU(50,75,0)],night?'#2e6b33':'#5fae5f');ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(...PU(55,70.5,0),3.2*C*S,3*.5*S,0,0,6.3);ctx.stroke();
  roadNet();GROUND_EXTRA.PRD120&&(()=>{ribbon(bike,1.2,night?'#6b6f76':'#e6e3dc');dashes(bike,0,'#9aa3ad',1.6,1);})();GROUND_EXTRA.PRD177();
  // shadows of buildings and trees
  for(const g of ground)g();
  ctx=real;}

/* ---------- moving things ---------- */
function Train(o){Object.assign(this,o);this.dwell=0;}
Train.prototype.update=function(dt){if(this.dwell>0){this.dwell-=dt;return;}const L=rail.len,a=((this.s%L)+L)%L;this.s+=this.v*dt;const b=((this.s%L)+L)%L;for(const st of STOPS){if(a<st&&b>=st&&b-a<5){this.s+=st-b;this.dwell=1.8;}}};
Train.prototype.items=function(){const out=[],CL=3.5,G=.28;for(let i=0;i<this.n;i++){const s=this.s-i*(CL+G),p=rail.at(s),q=rail.at(s-.8),r=rail.at(s+.8),a=Math.atan2(r.y-q.y,r.x-q.x),self=this,head=i===0,tail=i===this.n-1;
  out.push({p:'PRD110',k:p.x+p.y+1.5,f:()=>trainCar(p.x,p.y,ZR,a,head,tail,self.stripe)});}return out;};
const trains=[0,.25,.5,.75].map((f,i)=>new Train({s:f*rail.len,v:8,n:4,stripe:i%2?'#7b5cc9':'#d3263a'}));
function Mover(path,s,v,kind,col,p,wrap,stops){Object.assign(this,{path,s,v,kind,col,p,wrap,stops:stops||null,dwell:0});}
Mover.prototype.step=function(dt){if(this.dwell>0){this.dwell-=dt;return;}const L=this.path.len,a=((this.s%L)+L)%L;this.s+=this.v*dt;if(!this.stops)return;const b=((this.s%L)+L)%L;
  for(const st of this.stops){if(a<st&&b>=st&&b-a<4){this.s+=st-b;this.dwell=4.2;for(const sh of SHELTERS)if(sh.lane===this.path&&Math.abs(sh.s-st)<.01)busArrives(sh);}}};
function nearestStop(path,u,v){return nearestS(path,u,v);}
Mover.prototype.items=function(){let s=this.s;if(!this.path.closed){s=((s%this.path.len)+this.path.len)%this.path.len;}const p=this.path.at(s),q=this.path.at(s+.4),a=Math.atan2(q.y-p.y,q.x-p.x),k=this.kind,self=this;
  const fade=this.path.closed?1:Math.min(1,s/3,(this.path.len-s)/3);
  if(k==='walk')return [{p:this.p,k:p.x+p.y+.05,f:()=>{ctx.globalAlpha=fade;person(p.x,p.y,self.col,T*6+self.s);ctx.globalAlpha=1;}}];
  if(k==='bike')return [{p:this.p,k:p.x+p.y,f:()=>{const ca=Math.cos(a),sa=Math.sin(a);for(const u of [-.35,.35]){const [wx,wy]=P(p.x+u*ca,p.y+u*sa,.35);ctx.strokeStyle=dim('#222');ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(wx,wy,3.4,3.4,0,0,6.3);ctx.stroke();}
    line(P(p.x-.35*ca,p.y-.35*sa,.35),P(p.x+.35*ca,p.y+.35*sa,.35),dim(self.col),2);const [hx,hy]=P(p.x,p.y,.9);ctx.fillStyle=dim(self.col);ctx.fillRect(hx-2,hy-6,4,7);dot([hx,hy-8.5],2.3,dim('#e8c4a0'));}}];
  return [{p:this.p,k:p.x+p.y,f:()=>{ctx.globalAlpha=fade;if(k==='bus')busBody(p.x,p.y,0,a,self.col);else carBody(p.x,p.y,0,a,self.col);
    if(k==='learner'){const [rx,ry]=P(p.x,p.y,1.05);ctx.fillStyle='#ffd23f';ctx.fillRect(rx-5,ry-4,10,4);if(lod)txt('L',[rx,ry-2],5,'#d3263a',true);}
    if(night){const [hx,hy]=P(p.x+Math.cos(a)*1,p.y+Math.sin(a)*1,.4);dot([hx,hy],2,'rgba(255,240,170,.95)');}ctx.globalAlpha=1;}}];};
const carCols=['#d9534f','#e8a33d','#3f8fcf','#ffffff','#2b2f36','#9b6fc4','#c7ccd2'];
const movers=[];
{const busStops=[nearestStop(lanesF[0],53,41.6),nearestStop(lanesF[0],-36,42.25)];SHELTERS[0].lane=lanesF[0];SHELTERS[0].s=busStops[0];for(let i=0;i<5;i++)movers.push(new Mover(lanesF[0],i*lanesF[0].len/5,3.8,'bus','#2f9e47','PRD120',null,busStops));
  for(let i=0;i<6;i++)movers.push(new Mover(lanesF[1],i*lanesF[1].len/6+3,5.4,'car',carCols[(i+1)%7],'PRD177'));}
lanesB.forEach((pa,li)=>{for(let i=0;i<6;i++){const bus=li===1&&i%3===1;movers.push(new Mover(pa,i*pa.len/6+5,-(bus?3.6:5.2+li),bus?'bus':'car',bus?'#2f9e47':carCols[(i+li+2)%7],bus?'PRD120':'PRD177'));}});
XS.forEach((x,xi)=>{for(const [d,dir] of [[.85,1],[-.85,-1]]){const pa=xLane(x.u,d,dir);const busLane=xi===1&&dir<0;
  if(busLane){const st=nearestStop(pa,-14.85,52.3);SHELTERS[1].lane=pa;SHELTERS[1].s=st;for(let i=0;i<2;i++)movers.push(new Mover(pa,i*pa.len/2,3.2,'bus','#2f9e47','PRD120',null,[st]));}
  else for(let i=0;i<1;i++)movers.push(new Mover(pa,xi*4+(dir>0?0:pa.len/2),4.2,'car',carCols[(i*3+xi)%7],'PRD177'));}});
{const walks=[offsetPath(road,-(RW/2+.7)),offsetPath(road,RW/2+.7)];XS.forEach(x=>{walks.push(line2(x.u-2.15,46.5,x.u-2.15,79.5));walks.push(line2(x.u+2.15,46.5,x.u+2.15,79.5));});
  const pc=['#3f8fcf','#d9534f','#5aa86b','#e8a33d','#9b6fc4','#ffffff','#2b2f36','#f06d9b'];let n=0;
  walks.forEach((w,wi)=>{const cnt=w.closed?16:4;for(let i=0;i<cnt;i++){n++;const sp=(.55+((n*37)%10)/25)*(i%2?1:-1);movers.push(new Mover(w,i*w.len/cnt+wi,sp,'walk',pc[n%8],'PRD120'));}});}
for(let i=0;i<2;i++)movers.push(new Mover(circuit,i*circuit.len/2,2.2,'learner','#ffffff','PRD177'));
for(let i=0;i<5;i++)movers.push(new Mover(bike,i*bike.len/5,1.8+(i%2)*.4,'bike',hdbCols[i],'PRD120'));


/* ---------- passengers: station -> linkway -> bus stop -> bus, and back ---------- */
const PC=['#3f8fcf','#d9534f','#5aa86b','#e8a33d','#9b6fc4','#ffffff','#2b2f36','#f06d9b'];let pcount=0;
function walk(pts,opts){let L=0;const seg=[];for(let i=0;i<pts.length-1;i++){const d=Math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1]);seg.push(d);L+=d;}
  agents.push(Object.assign({pts,seg,L,t:0,sp:.7+((pcount*37)%10)/40,col:PC[(pcount++)%8],delay:0},opts||{}));}
function benchSpot(sh,i){const o=(i-1.5)*.55;return sh.axis==='u'?[sh.u+o,sh.v-.15]:[sh.u-.15,sh.v+o];}
function busArrives(sh){
  // passengers alight at the door, walk to the shelter, then back along the linkway into the station
  walk([sh.door,[sh.u,sh.v],...sh.route.slice().reverse()],{delay:.2});
  // everyone waiting walks to the door and boards
  for(let i=0;i<sh.queue;i++)walk([benchSpot(sh,i),sh.door],{delay:.6+i*.3,board:true});sh.queue=0;sh.timer=5.5;}
function agentsUpdate(dt){
  for(const sh of SHELTERS){sh.timer-=dt;if(sh.timer<=0&&sh.queue+sh.incoming===0){sh.timer=1e9;const n=3+(pcount%2);for(let i=0;i<n;i++){sh.incoming++;const s2=sh,slot=i;walk(sh.route.concat([benchSpot(sh,slot)]),{delay:i*.8,done:()=>{s2.incoming--;s2.queue++;}});}}}
  for(let i=agents.length-1;i>=0;i--){const a=agents[i];if(a.delay>0){a.delay-=dt;continue;}a.t+=a.sp*dt;if(a.t>=a.L){agents.splice(i,1);a.done&&a.done();}}}
function agentPos(a){let d=a.t;for(let i=0;i<a.seg.length;i++){if(d<=a.seg[i]||i===a.seg.length-1){const f=Math.min(1,d/(a.seg[i]||1)),p=a.pts[i],q=a.pts[i+1];return [p[0]+(q[0]-p[0])*f,p[1]+(q[1]-p[1])*f];}d-=a.seg[i];}return a.pts[a.pts.length-1];}
function agentItems(){const out=[];for(const a of agents){if(a.delay>0)continue;const [u,v]=agentPos(a);out.push({p:'PRD120',k:v+.05,f:()=>personU(u,v,a.col,T*6+a.t*3)});}
  for(const sh of SHELTERS)for(let i=0;i<sh.queue;i++){const [u,v]=benchSpot(sh,i);out.push({p:'PRD120',k:v+.04,f:()=>{const [x,y]=XY(u,v);const [px,py]=P(x,y,0);ctx.fillStyle=dim(PC[(i*3+1)%8]);ctx.fillRect(px-2.2,py-10,4.4,6);ctx.fillStyle=dim('#2b2f36');ctx.fillRect(px-2.4,py-4.5,5.6,1.6);ctx.fillStyle=dim('#e8c4a0');ctx.beginPath();ctx.arc(px,py-12.3,2.3,0,6.3);ctx.fill();}});}
  return out;}
/* ---------- camera ---------- */
function clampCam(c){c.s=Math.max(1,Math.min(4,c.s));const vw=W/c.s,vh=H/c.s;c.x=Math.max(0,Math.min(W-vw,c.x));c.y=Math.max(0,Math.min(H-vh,c.y));return c;}
function zoomTo(px,py,s){camT.s=s;camT.x=px-W/s/2;camT.y=py-H/s/2;clampCam(camT);}
function zoomZone(id){if(!id){camT.s=1;camT.x=0;camT.y=0;return;}const pr=PRODUCTS[id];const [x0]=PU(pr.u0,0,0),[x1]=PU(pr.u1,0,0);zoomTo((x0+x1)/2,OY+44*10,2.15);}
let dirty=true;
function frame(dt){
  if(playing){T+=dt;trains.forEach(t=>t.update(dt));movers.forEach(m=>m.step(dt));agentsUpdate(dt);}
  const e=1-Math.pow(.0015,dt);cam.s+=(camT.s-cam.s)*e;cam.x+=(camT.x-cam.x)*e;cam.y+=(camT.y-cam.y)*e;lod=cam.s>1.6||opt.lod;
  if(dirty){renderGround();dirty=false;}
  const k=cv.width/W;ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height);
  ctx.drawImage(gcv,cam.x*GS,cam.y*GS,W/cam.s*GS,H/cam.s*GS,0,0,cv.width,cv.height);
  ctx.setTransform(k*cam.s,0,0,k*cam.s,-cam.x*k*cam.s,-cam.y*k*cam.s);
  const items=statics.filter(it=>!it.lodOnly||lod);trains.forEach(t=>items.push(...t.items()));movers.forEach(m=>items.push(...m.items()));items.push(...agentItems());
  items.sort((a,b)=>a.k-b.k);for(const it of items)it.f();
  if(focus){const pr=PRODUCTS[focus];ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=night?'rgba(4,10,24,.55)':'rgba(236,244,250,.55)';ctx.fillRect(0,0,cv.width,cv.height);ctx.restore();
    if(GROUND_EXTRA[focus])GROUND_EXTRA[focus]();for(const it of items)if(it.p===focus)it.f();}
  opt.onFrame&&opt.onFrame(cam);
}
let last=performance.now(),first=true;function loop(t){if(!cv.isConnected&&!first)return;const dt=Math.min(.08,(t-last)/1000);last=t;frame(dt);if(first){first=false;opt.onFirst&&opt.onFirst();}requestAnimationFrame(loop);}requestAnimationFrame(loop);
return {PRODUCTS,CATS,PU,W,H,OY,coast,cam,camT,zoomZone,zoomTo,clampCam,
  setFocus:id=>{focus=id;zoomZone(id);},pause:p=>{playing=!p;},isPlaying:()=>playing,night:n=>{night=!!n;dirty=true;},isNight:()=>night};
};


// ---- animated brick city in place of the static photo (product hub, Realistic view)
(function(){var tries=0,iv=setInterval(function(){var b=document.getElementById('pbase');if(!b){if(++tries>600)clearInterval(iv);return;}clearInterval(iv);
  if(b.dataset.city)return;b.dataset.city='1';var c=document.createElement('canvas');c.id='pcity';c.setAttribute('aria-label','Animated brick city: rail, roads, vehicle and road user services, ticketing');
  c.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none';b.parentNode.insertBefore(c,b.nextSibling);b.style.visibility='hidden';
  c.width=2360;c.height=1078;var o={onFirst:function(){try{var u=c.toDataURL('image/jpeg',.82);b.src=u;var bl=document.getElementById('pblur');if(bl)bl.src=u;}catch(e){}}};
  window.LTA_CITY(c,o);
  // show the close-up details (people, signage, gantries) when the page zooms into a zone
  var pim=document.getElementById('pimg');setInterval(function(){try{var m=new DOMMatrix(getComputedStyle(pim).transform);o.lod=Math.abs(m.a)>1.5;}catch(e){}},400);},50);})();

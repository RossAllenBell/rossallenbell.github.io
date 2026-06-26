var e={category:`structure`,variants:8,frames:6,frameMs:200};function t(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var n=(e,t)=>t[Math.floor(e()*t.length)],r=[`#4f9d8f`,`#5b8dd6`,`#7a8aa0`,`#c8a24a`],i=[{base:`#34465c`,top:`#46607c`},{base:`#3a4150`,top:`#4d5870`},{base:`#324a52`,top:`#456069`}];function a(e={}){let{seed:a=0,frame:o=0,frames:s=6}=e,c=t(a),l=r[a%r.length],u=n(c,i),d=c()<.5?2:1,f=c()<.5,p=c()<.5,m=.94+c()*.12,h=o/s*Math.PI*2,g=e=>+(Math.sin(h+e)*2.3).toFixed(2),_=p?22:27,v=e=>+(_+13*e).toFixed(2),y=`M${_} 5
    C${v(.4)} ${5+g(0)} ${v(.6)} ${5+g(1)} ${v(1)} ${5+g(2)}
    L${v(1)} ${11.5+g(2)}
    C${v(.6)} ${11.5+g(1)} ${v(.4)} ${11.5+g(0)} ${_} 11.5 Z`,b=`#0c0d11`,x=`stroke="${b}" stroke-width="2.2" stroke-linejoin="round"`,S=`stroke="${b}" stroke-width="1.3" stroke-linejoin="round"`,C=[],w=d===2?[20,33]:[26];for(let e of w)C.push(`<path d="M${e-3.2} 38 q3.2 -1.6 6.4 0 l0 4 q-3.2 3 -6.4 0z" fill="#aeb8c6" ${S}/>`,`<circle cx="${e}" cy="40.5" r="1.4" fill="${l}"/>`);let T=``;if(f){T=`<rect x="45" y="20" width="4" height="7" fill="#3a4150" ${S}/>`;for(let e=0;e<3;e++){let t=((o/s+e/3)%1+1)%1,n=(19-t*15).toFixed(1),r=(47+t*3.5).toFixed(1),i=(1.3+t*1.5).toFixed(1),a=((1-t)*.5).toFixed(2);T+=`<circle cx="${r}" cy="${n}" r="${i}" fill="#aeb8c6" opacity="${a}"/>`}}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <!-- cast shadow: the square footprint projected down-right (light from top-left) — a parallelogram,
       not a blob, so it reads as a BUILDING's shadow. (Baked here; unit shadows will move to a
       separate ground-layer pre-pass — see art/style-bible.md.) -->
  <path d="M16 54.5 L44 54.5 L55 49 L27 49 Z" fill="#000" opacity="0.26"/>
  <g transform="translate(32 53) scale(${m.toFixed(3)}) translate(-32 -53)">

    <!-- RIGHT SIDE face (receding up-right at 2:1) — shade value -->
    <path d="M41 30 L52 24.5 L52 47.5 L41 53 Z" fill="#38536e" ${x}/>
    <!-- side base plinth (darkest) -->
    <path d="M41 49 L52 43.5 L52 47.5 L41 53 Z" fill="#26303f" ${S}/>

    <!-- FRONT wall face — base value (the bright mass that reads at 32px) -->
    <rect x="13" y="30" width="28" height="23" fill="#4a6a8a" ${x}/>
    <!-- top-left highlight rim -->
    <path d="M14 30.5 L40 30.5 M14 30.5 L14 52" fill="none" stroke="#6d92b8" stroke-width="1.3"/>
    <!-- front base plinth (darkest) -->
    <rect x="13" y="49" width="28" height="4" fill="#2a3445" ${S}/>
    <!-- corner quoins (stone, front-left) -->
    <rect x="13" y="32" width="3.5" height="4" fill="#8a99ac" ${S}/>
    <rect x="13" y="40" width="3.5" height="4" fill="#8a99ac" ${S}/>

    <!-- ROOF: front gable (base) + receding right plane (top, catches light) -->
    <path d="M10 31 L27 15.5 L44 31 Z" fill="${u.base}" ${x}/>
    <path d="M27 15.5 L38 10 L56 25 L44 31 Z" fill="${u.top}" ${x}/>
    <!-- ridge highlight + gable banding -->
    <path d="M27 15.5 L38 10" fill="none" stroke="#6d8099" stroke-width="1.4"/>
    <path d="M16 27 L38 27 M19 23 L35 23" fill="none" stroke="${b}" stroke-width="1" opacity="0.45"/>
    ${T}

    <!-- door (arched) -->
    <path d="M23 53 L23 41 q4 -3.2 8 0 L31 53 Z" fill="#1d2333" ${S}/>
    <!-- shields on the wall (muster signal) -->
    ${C.join(`
    `)}

    <!-- banner pole + flag (animated; muster signal) -->
    <path d="M${_} 15.5 L${_} 4.5" stroke="#5d6b7e" stroke-width="2" stroke-linecap="round"/>
    <path d="${y}" fill="${l}" ${S}/>
  </g>
</svg>`}var o={category:`unit`,variants:12,frames:4,frameMs:150,shadow:!0};function s(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var c=(e,t)=>t[Math.floor(e()*t.length)],l=[`#5b8dd6`,`#7a8aa0`,`#4f9d8f`,`#5aa0b0`,`#6d8099`],u=[`#caa07a`,`#b98a64`,`#d8b48c`],d=[{base:`#7a8696`,top:`#9aa6b6`},{base:`#6d7886`,top:`#8d99a8`}];function f(e={}){let{seed:t=0,frame:n=0,frames:r=4,layer:i=`body`}=e,a=s(t),o=.92+a()*.14,f=l[t%l.length],p=c(a,u),m=c(a,d),h=a()<.5,g=a()<.66,_=`#0c0d11`,v=`stroke="${_}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"`,y=`stroke="${_}" stroke-width="1.1" stroke-linejoin="round"`;if(i===`shadow`)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(31 55) scale(${o.toFixed(3)}) translate(-31 -55)">
    <ellipse cx="32" cy="55" rx="11.5" ry="3.4" fill="#000" opacity="0.30"/>
  </g>
</svg>`;let b=n/r*Math.PI*2,x=+(2.6*Math.cos(b)).toFixed(2),S=+(-1.7*Math.abs(Math.sin(b))).toFixed(2),C=23+S,w=45+S,T=(e,t)=>`<path d="M${(30+e-1.8).toFixed(1)} 40 l0 ${13 .toFixed(1)} l3.6 0 l0 -13 Z" fill="${t}" ${y}/><rect x="${(30+e-2.4).toFixed(1)}" y="52" width="5" height="3" rx="1" fill="#23272f" ${y}/>`,E=T(-x,`#39414b`)+T(x,`#454d57`),D=`
    <path d="M${22 .toFixed(1)} ${C.toFixed(1)} L${38 .toFixed(1)} ${C.toFixed(1)} L${37 .toFixed(1)} ${w.toFixed(1)} L${23 .toFixed(1)} ${w.toFixed(1)} Z" fill="#4f9d8f" ${v}/>
    <path d="M${33 .toFixed(1)} ${C.toFixed(1)} L${38 .toFixed(1)} ${C.toFixed(1)} L${37 .toFixed(1)} ${w.toFixed(1)} L${32.5.toFixed(1)} ${w.toFixed(1)} Z" fill="#3f857a"/>
    <path d="M${22.8.toFixed(1)} ${(C+.6).toFixed(1)} L${23.6.toFixed(1)} ${(w-.4).toFixed(1)}" fill="none" stroke="#5fb0a1" stroke-width="1.4"/>
    <line x1="${22.6.toFixed(1)}" y1="${(w-6).toFixed(1)}" x2="${37.2.toFixed(1)}" y2="${(w-6).toFixed(1)}" stroke="${_}" stroke-width="1.3" opacity="0.5"/>`,O=`
    <path d="M18 ${(C+4).toFixed(1)} q6 -2.6 12 0 l-1.4 9 q-4.6 5 -9.2 0 Z" fill="${f}" ${v}/>
    <path d="M19.6 ${(C+4.8).toFixed(1)} q4.4 -1.7 8.8 0" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.4"/>
    <circle cx="24" cy="${(C+9).toFixed(1)}" r="1.7" fill="#cdd6e2" ${y}/>`,k=(C+6).toFixed(1),A=g?`<line x1="40" y1="${k}" x2="43" y2="7" stroke="#6b5536" stroke-width="2.2" stroke-linecap="round"/>
       <path d="M43 7 l-2.2 4.8 l4.4 0 Z" fill="#c2ccd8" ${y}/>`:`<line x1="39" y1="${k}" x2="45" y2="${(C-6).toFixed(1)}" stroke="#c2ccd8" stroke-width="2.4" stroke-linecap="round"/>
       <line x1="37.5" y1="${(+k+2).toFixed(1)}" x2="41" y2="${(k-1).toFixed(1)}" stroke="#6b5536" stroke-width="2.4" stroke-linecap="round"/>`,j=C-4,M=`
    ${h?`<path d="M${29 .toFixed(1)} ${(j-9).toFixed(1)} q4 -2.6 6.6 0 q-2 2 -3.2 4.6 Z" fill="${m.base}" ${y}/>`:``}
    <rect x="${26.4.toFixed(1)}" y="${(j-1).toFixed(1)}" width="7.2" height="3.6" rx="1.3" fill="${p}" ${y}/>
    <path d="M${25 .toFixed(1)} ${j.toFixed(1)} a5 4.8 0 0 1 10 0 Z" fill="${m.base}" ${v}/>
    <path d="M${25 .toFixed(1)} ${j.toFixed(1)} a5 4.8 0 0 1 10 0" fill="none" stroke="${m.top}" stroke-width="1.2"/>
    <line x1="${30 .toFixed(1)}" y1="${j.toFixed(1)}" x2="${30 .toFixed(1)}" y2="${(j+3).toFixed(1)}" stroke="${_}" stroke-width="1.1"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(30 50) scale(${o.toFixed(3)}) translate(-30 -50)">
    ${g?A:``}
    ${E}
    ${D}
    ${O}
    ${M}
    ${g?``:A}
  </g>
</svg>`}var p={category:`unit`,variants:12,frames:4,frameMs:140,shadow:!0};function m(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var h=(e,t)=>t[Math.floor(e()*t.length)],g=(e,t)=>t[(e%t.length+t.length)%t.length],_=[{base:`#6db04a`,top:`#8cc762`,shade:`#588f3a`},{base:`#74a83f`,top:`#92c25c`,shade:`#5d8730`},{base:`#63a857`,top:`#83bf72`,shade:`#4f8745`}],v=[`#7a4a2a`,`#6a5a30`,`#5a4030`,`#7a3a2a`],y=[`#ffd23a`,`#ff7a3a`,`#e64a2a`],b=[`club`,`cleaver`,`spear`];function x(e={}){let{seed:t=0,frame:n=0,frames:r=4,layer:i=`body`}=e,a=m(t),o=.86+a()*.18,s=g(t,_),c=h(a,v),l=h(a,y),u=b[Math.floor(a()*b.length)],d=a()<.5,f=a()<.6,p=`#0c0d11`,x=`stroke="${p}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"`,S=`stroke="${p}" stroke-width="1.1" stroke-linejoin="round"`;if(i===`shadow`)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(31 55) scale(${o.toFixed(3)}) translate(-31 -55)">
    <ellipse cx="32" cy="55" rx="10" ry="3" fill="#000" opacity="0.30"/>
  </g>
</svg>`;let C=n/r*Math.PI*2,w=+(2.4*Math.cos(C)).toFixed(2),T=+(-1.5*Math.abs(Math.sin(C))).toFixed(2),E=28+T,D=18+T,O=(e,t)=>`<path d="M${(31+e-1.7).toFixed(1)} 42 l0 ${11 .toFixed(1)} l3.4 0 l0 -11 Z" fill="${t}" ${S}/><path d="M${(31+e-2.6).toFixed(1)} 53 l5.6 0 l-1 2.4 l-4.6 0 Z" fill="#26221c" ${S}/>`,k=O(-w,s.shade)+O(w,s.base),A=(E+3).toFixed(1),j=u===`spear`?`<line x1="36" y1="${A}" x2="40" y2="8" stroke="#5a4326" stroke-width="2.2" stroke-linecap="round"/>
         <path d="M40 8 l-2 4.4 l4 0 Z" fill="#9aa2ac" ${S}/>`:u===`cleaver`?`<line x1="36" y1="${A}" x2="39" y2="${(E-7).toFixed(1)}" stroke="#5a4326" stroke-width="2.2" stroke-linecap="round"/>
           <path d="M37.5 ${(E-6).toFixed(1)} l5 -3 l1.5 4 l-4 3 Z" fill="#9aa2ac" ${S}/>`:`<line x1="36" y1="${A}" x2="39" y2="${(E-6).toFixed(1)}" stroke="#5a4326" stroke-width="2.4" stroke-linecap="round"/>
           <ellipse cx="39.5" cy="${(E-8).toFixed(1)}" rx="3.2" ry="3.8" fill="#6b4f2c" ${S}/>`,M=`
    <path d="M${25 .toFixed(1)} ${E.toFixed(1)} q6 -3 12 0 l-1 ${(42-E+1).toFixed(1)} q-5 2 -10 0 Z" fill="${s.base}" ${x}/>
    <path d="M${34 .toFixed(1)} ${(E-.6).toFixed(1)} q3 -1 3 0.6 l-1 ${(42-E+1).toFixed(1)} q-1.5 0.8 -3 0.4 Z" fill="${s.shade}"/>
    <path d="M${26 .toFixed(1)} ${(E+.5).toFixed(1)} q5 -2 10 0" fill="none" stroke="${s.top}" stroke-width="1.3"/>`,N=`<path d="M${26 .toFixed(1)} ${39 .toFixed(1)} l10 0 l-1.5 5 l-2.5 -2 l-2.5 2 Z" fill="${c}" ${S}/>`,P=`
    <path d="${f?`M37 ${(D-2).toFixed(1)} l7 -5 l-2 7 Z`:`M37 ${(D+1).toFixed(1)} l7 -1 l-3 5 Z`}" fill="${s.shade}" ${S}/>
    <ellipse cx="31" cy="${D.toFixed(1)}" rx="9.2" ry="8" fill="${s.base}" ${x}/>
    <path d="M${22.4.toFixed(1)} ${(D-1).toFixed(1)} a9.2 8 0 0 1 9 -6.6" fill="none" stroke="${s.top}" stroke-width="1.4"/>
    <path d="M${34 .toFixed(1)} ${(D+5).toFixed(1)} a9.2 8 0 0 0 5.6 -7" fill="none" stroke="${s.shade}" stroke-width="2"/>
    ${d?`<path d="M31 ${(D-8).toFixed(1)} l-1.5 -4 l3 1 l1 -3.5 l1.5 3.5 Z" fill="#2c2118" ${S}/>`:``}
    <path d="M${22 .toFixed(1)} ${(D+1).toFixed(1)} l-2.5 2 l2.5 1.5 Z" fill="${s.shade}" ${S}/>
    <ellipse cx="${27 .toFixed(1)}" cy="${(D+.5).toFixed(1)}" rx="2" ry="1.5" fill="${l}"/>
    <ellipse cx="${30.5.toFixed(1)}" cy="${(D+1).toFixed(1)}" rx="1.6" ry="1.3" fill="${l}"/>
    <path d="M${25 .toFixed(1)} ${(D-2.5).toFixed(1)} l4 1.2 M${28.5.toFixed(1)} ${(D-2.8).toFixed(1)} l3.5 1" stroke="${p}" stroke-width="1.2"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(31 50) scale(${o.toFixed(3)}) translate(-31 -50)">
    ${j}
    ${k}
    ${M}
    ${N}
    ${P}
  </g>
</svg>`}var S={category:`unit`,variants:10,frames:4,frameMs:110,shadow:!0};function C(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var w=(e,t)=>t[Math.floor(e()*t.length)],T=(e,t)=>t[(e%t.length+t.length)%t.length],E=[{base:`#6b4a2e`,top:`#86603f`,shade:`#4f3621`},{base:`#6a6660`,top:`#88847d`,shade:`#4c4944`},{base:`#3f2e22`,top:`#574031`,shade:`#2c2018`},{base:`#7a4a28`,top:`#996237`,shade:`#5a371d`}],D=[`#8d99a8`,`#9aa6b6`,`#7a8696`];function O(e={}){let{seed:t=0,frame:n=0,frames:r=4,layer:i=`body`}=e,a=C(t),o=.9+a()*.12,s=T(t,E),c=w(a,D),l=a()<.6,u=a()<.5,d=`#0c0d11`,f=`stroke="${d}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"`,p=`stroke="${d}" stroke-width="1.1" stroke-linejoin="round"`;if(i===`shadow`)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(30 55) scale(${o.toFixed(3)}) translate(-30 -55)">
    <ellipse cx="30" cy="55" rx="17" ry="3.6" fill="#000" opacity="0.30"/>
  </g>
</svg>`;let m=n/r*Math.PI*2,h=+(3*Math.sin(m)).toFixed(2),g=+(3*Math.sin(m+Math.PI)).toFixed(2),_=35+ +(-1.3*Math.abs(Math.sin(m))).toFixed(2),v=_+5,y=(e,t,n)=>`<path d="M${(e-1.4).toFixed(1)} ${v.toFixed(1)} L${(e+t-1.4).toFixed(1)} 53 l2.8 0 L${(e+1.4).toFixed(1)} ${v.toFixed(1)} Z" fill="${n}" ${p}/><rect x="${(e+t-2).toFixed(1)}" y="52" width="4" height="2.6" rx="0.8" fill="#1c1814" ${p}/>`,b=y(18,g,s.shade)+y(39,h,s.shade)+y(22,g,s.base)+y(43,h,s.base),x=`<path d="M14 ${(_-1).toFixed(1)} q-8 3 -9 13 q5 -6 11 -8 Z" fill="${s.shade}" ${p}/>`,S=`
    <ellipse cx="27" cy="${_.toFixed(1)}" rx="14" ry="6.2" fill="${s.base}" ${f}/>
    <path d="M15 ${(_+2).toFixed(1)} q12 5 24 0 q-12 4 -24 0 Z" fill="${s.shade}"/>
    <path d="M15 ${(_-1.5).toFixed(1)} q12 -5 23 0" fill="none" stroke="${s.top}" stroke-width="1.5"/>`,O=`
    <path d="M36 ${(_-2).toFixed(1)} q3 -8 8 -11 q3 -2 5 0 q1 2 -1 4 q-3 3 -6 9 Z" fill="${s.base}" ${f}/>
    <path d="M44 ${(_-13).toFixed(1)} q4 -2 8 1 q-1 3 -4 4 q-3 1 -6 -1 Z" fill="${s.base}" ${f}/>
    <path d="M50 ${(_-12).toFixed(1)} q3 0 4 2 q-2 1.5 -4 1 Z" fill="${s.shade}" ${p}/>
    <path d="M44 ${(_-14).toFixed(1)} l1.5 -3.5 l2 3 Z" fill="${s.base}" ${p}/>
    <path d="M40 ${(_-6).toFixed(1)} q2 -4 4 -7" fill="none" stroke="${s.shade}" stroke-width="2.4"/>
    <circle cx="49" cy="${(_-10.5).toFixed(1)}" r="0.9" fill="${d}"/>`,k=`
    <path d="M14 ${(_-1).toFixed(1)} q13 -5 26 0 l-2 6 q-11 4 -22 0 Z" fill="#d6c24a" ${f}/>
    <path d="M16 ${(_+4.2).toFixed(1)} q10 3 20 0 l-1 3.5 l-2.5 -2 l-2.5 2 l-2.5 -2 l-2.5 2 l-2.5 -2 l-2.5 2 Z" fill="#bca64a" ${p}/>
    <path d="M15 ${(_-.5).toFixed(1)} q12 -4 23 0" fill="none" stroke="#e0d05f" stroke-width="1.3"/>`,A=_-6,j=`
    <path d="M24 ${A.toFixed(1)} q4 -2 7 0 l-1 8 q-2.5 1.5 -5 0 Z" fill="#d6c24a" ${f}/>
    <path d="M28 ${(A-.5).toFixed(1)} q2 -1 3 0.4 l-1 8 q-1.5 0.8 -2.5 0.2 Z" fill="#bca64a"/>
    ${u?`<path d="M27 ${(A-9).toFixed(1)} q3 -2 5 0 q-1.5 1.5 -2.5 3.5 Z" fill="#d6c24a" ${p}/>`:``}
    <path d="M23 ${(A-4).toFixed(1)} a4 3.8 0 0 1 8 0 Z" fill="${c}" ${f}/>
    <path d="M23 ${(A-4).toFixed(1)} a4 3.8 0 0 1 8 0" fill="none" stroke="#b9c4d2" stroke-width="1"/>
    <line x1="20" y1="${(A+1).toFixed(1)}" x2="56" y2="${(A-7).toFixed(1)}" stroke="#6b5536" stroke-width="2" stroke-linecap="round"/>
    <path d="M56 ${(A-7).toFixed(1)} l-3.5 -1 l0.5 3 Z" fill="#cdd6e2" ${p}/>
    ${l?`<path d="M50 ${(A-5.4).toFixed(1)} l5 -1 l-1.5 3 l-4 0.5 Z" fill="#d6c24a" ${p}/>`:``}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(30 50) scale(${o.toFixed(3)}) translate(-30 -50)">
    ${x}
    ${b}
    ${S}
    ${O}
    ${k}
    ${j}
  </g>
</svg>`}var k={category:`unit`,variants:12,frames:4,frameMs:150,shadow:!0};function A(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var j=(e,t)=>t[Math.floor(e()*t.length)],M=(e,t)=>t[(e%t.length+t.length)%t.length],N=[{base:`#b0524a`,top:`#c66b5f`,shade:`#8f3f38`},{base:`#a85a40`,top:`#c2745a`,shade:`#854532`},{base:`#b6484a`,top:`#cd6360`,shade:`#933639`}],P=[`#7d8a5a`,`#6f7d50`,`#86905f`],F=[`#ffd23a`,`#ff9a3a`,`#ffb43a`],I=[`pick`,`mattock`,`auger`];function ee(e={}){let{seed:t=0,frame:n=0,frames:r=4,layer:i=`body`}=e,a=A(t),o=.88+a()*.16,s=M(t,N),c=j(a,P),l=j(a,F),u=I[Math.floor(a()*I.length)],d=a()<.6,f=a()<.7,p=`#0c0d11`,m=`stroke="${p}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"`,h=`stroke="${p}" stroke-width="1.1" stroke-linejoin="round"`;if(i===`shadow`)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(31 55) scale(${o.toFixed(3)}) translate(-31 -55)">
    <ellipse cx="32" cy="55" rx="10.5" ry="3.1" fill="#000" opacity="0.30"/>
  </g>
</svg>`;let g=n/r*Math.PI*2,_=+(2.3*Math.cos(g)).toFixed(2),v=+(-1.4*Math.abs(Math.sin(g))).toFixed(2),y=28+v,b=19+v,x=(e,t)=>`<path d="M${(31+e-1.8).toFixed(1)} 42 l0 ${11 .toFixed(1)} l3.6 0 l0 -11 Z" fill="${t}" ${h}/><path d="M${(31+e-2.7).toFixed(1)} 53 l5.8 0 l-1 2.4 l-4.8 0 Z" fill="#241c18" ${h}/>`,S=x(-_,`#4a3a30`)+x(_,`#5a463a`),C=`<line x1="36" y1="${(y+2).toFixed(1)}" x2="40.5" y2="7" stroke="#5a4326" stroke-width="2.4" stroke-linecap="round"/>`,w=u===`mattock`?C+`<path d="M37.5 8 q5 -1 7 2 l-2 1.5 q-2 -2.5 -5 -1.5 Z" fill="#9aa2ac" ${h}/>`:u===`auger`?C+`<path d="M39.5 6 l3 1 l-1 3 l-3 -1 Z M39 9.5 l3 1 l-1 2.6 l-3 -1 Z" fill="#8a929c" ${h}/>`:C+`<path d="M36.5 7.5 q5 -3 9 0 q-4 -1.2 -9 0 Z" fill="#9aa2ac" ${h}/>
           <path d="M40.5 7 l2.5 -1.5 M36.5 8 l-2 -1" stroke="#9aa2ac" stroke-width="1.8" stroke-linecap="round"/>`,T=d?`<path d="M${22 .toFixed(1)} ${(y+3).toFixed(1)} q-3 0 -3.5 4 l1 5 q3 1 5 0 l0 -8 Z" fill="#4a3526" ${h}/>
       <circle cx="${23 .toFixed(1)}" cy="${(y+7).toFixed(1)}" r="1.5" fill="#caa44a"/>`:``,E=`
    <path d="M${25 .toFixed(1)} ${y.toFixed(1)} q6 -3 12 0 l-1 ${(42-y+1).toFixed(1)} q-5 2 -10 0 Z" fill="${s.base}" ${m}/>
    <path d="M${34 .toFixed(1)} ${(y-.6).toFixed(1)} q3 -1 3 0.6 l-1 ${(42-y+1).toFixed(1)} q-1.5 0.8 -3 0.4 Z" fill="${s.shade}"/>
    <path d="M${26 .toFixed(1)} ${(y+.5).toFixed(1)} q5 -2 10 0" fill="none" stroke="${s.top}" stroke-width="1.3"/>
    <line x1="${27 .toFixed(1)}" y1="${(y+6).toFixed(1)}" x2="${35 .toFixed(1)}" y2="${(y+6).toFixed(1)}" stroke="#3a2a22" stroke-width="1.6"/>`,D=(f?`<path d="M${36 .toFixed(1)} ${(b-5).toFixed(1)} q-3 -7 -10 -6 q-7 1 -7 8 q0 5 4 7 l3 -1 q-2 -6 2 -9 q3 -2 6 -1 Z" fill="${s.base}" ${m}/>
       <path d="M${20 .toFixed(1)} ${(b-2).toFixed(1)} q-1 5 3 7" fill="none" stroke="${s.shade}" stroke-width="1.8"/>
       <path d="M${36 .toFixed(1)} ${(b-5).toFixed(1)} q-4 -6 -10 -6" fill="none" stroke="${s.top}" stroke-width="1.4"/>`:`<path d="M${22 .toFixed(1)} ${(b-3).toFixed(1)} q-1 -3 2 -4 l4 -1 q3 1 1 4 Z" fill="${s.shade}" ${h}/>`)+`
    <path d="M${22 .toFixed(1)} ${(b+.5).toFixed(1)} q-3 0 -4 2 q2 2.5 5 2 q2 -0.4 3 -2 Z" fill="${c}" ${h}/>
    <ellipse cx="${25 .toFixed(1)}" cy="${(b+1.4).toFixed(1)}" rx="1.7" ry="1.3" fill="${l}"/>
    <ellipse cx="${28.4.toFixed(1)}" cy="${(b+1.8).toFixed(1)}" rx="1.4" ry="1.1" fill="${l}"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(31 50) scale(${o.toFixed(3)}) translate(-31 -50)">
    ${w}
    ${T}
    ${S}
    ${E}
    ${D}
  </g>
</svg>`}var te={category:`unit`,variants:10,frames:4,frameMs:120,shadow:!0};function ne(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var re=(e,t)=>t[Math.floor(e()*t.length)],ie=(e,t)=>t[(e%t.length+t.length)%t.length],L=[{base:`#c7843a`,top:`#dd9c50`,shade:`#995f28`},{base:`#b5732f`,top:`#cf8c44`,shade:`#875320`},{base:`#cf8f44`,top:`#e6a857`,shade:`#a0682c`},{base:`#a86a3a`,top:`#c2854e`,shade:`#7c4d28`}],R=[`#ffd23a`,`#ff8a2a`,`#ffae3a`];function z(e={}){let{seed:t=0,frame:n=0,frames:r=4,layer:i=`body`}=e,a=ne(t),o=.9+a()*.16,s=ie(t,L),c=re(a,R),l=a()<.5,u=a()<.4,d=`#0c0d11`,f=`stroke="${d}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"`,p=`stroke="${d}" stroke-width="1.1" stroke-linejoin="round"`;if(i===`shadow`)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(32 55) scale(${o.toFixed(3)}) translate(-32 -55)">
    <ellipse cx="32" cy="55" rx="16" ry="3.3" fill="#000" opacity="0.30"/>
  </g>
</svg>`;let m=n/r*Math.PI*2,h=+(3.4*Math.sin(m)).toFixed(2),g=+(3.4*Math.sin(m+Math.PI)).toFixed(2),_=37+ +(-1.2*Math.abs(Math.sin(m))).toFixed(2),v=_+3,y=(e,t,n)=>`<path d="M${(e-1.5).toFixed(1)} ${v.toFixed(1)} L${(e+t-1.5).toFixed(1)} 53 l3 0 L${(e+1.5).toFixed(1)} ${v.toFixed(1)} Z" fill="${n}" ${p}/><path d="M${(e+t-2.4).toFixed(1)} 52 l4.6 0 l-0.8 2.4 l-3.8 0 Z" fill="#1c1814" ${p}/>`,b=y(22,h,s.shade)+y(43,g,s.shade)+y(25,h,s.base)+y(46,g,s.base),x=`<path d="M48 ${(_-1).toFixed(1)} q9 -1 13 6 q1 4 -2 7 q1 -5 -4 -7 q-4 -2 -7 -3 Z" fill="${s.shade}" ${f}/>
    <path d="M50 ${(_+1).toFixed(1)} q6 0 9 4" fill="none" stroke="${s.top}" stroke-width="1.3"/>`,S=`
    <path d="M16 ${(_+1).toFixed(1)} q4 -8 16 -8 q12 0 18 6 q2 5 -2 8 q-14 5 -28 1 q-5 -3 -2 -7 Z" fill="${s.base}" ${f}/>
    <path d="M18 ${(_+4).toFixed(1)} q14 5 28 0 q-13 4 -28 0 Z" fill="${s.shade}"/>
    <path d="M18 ${(_-3).toFixed(1)} q12 -5 26 -1" fill="none" stroke="${s.top}" stroke-width="1.5"/>
    ${u?`<path d="M30 ${(_-1).toFixed(1)} l4 3" stroke="#e6caa0" stroke-width="1.2" opacity="0.7"/>`:``}`,C=``;for(let e=0;e<6;e++){let t=19+e*4.7,n=8.4-e*.85;C+=`<path d="M${t.toFixed(1)} ${(_-5.5).toFixed(1)} l1.5 ${(-n).toFixed(1)} l2 ${n.toFixed(1)} Z" fill="${s.shade}" ${p}/>`}let w=`
    <path d="M24 ${(_-5).toFixed(1)} q-7 -1 -11 5 q-2 3 0 6 q5 2 9 -1 q3 -3 4 -8 Z" fill="${s.base}" ${f}/>
    <path d="M18 ${(_-7).toFixed(1)} q-7 -1 -12 5 q-2 2 -1 4 l3.5 1 q1 -4 5 -6 q3 -2 6 -2 Z" fill="${s.base}" ${f}/>
    <path d="M16 ${(_-6).toFixed(1)} q-6 0 -10 4" fill="none" stroke="${s.top}" stroke-width="1.4"/>
    <path d="M5 ${(_+1.5).toFixed(1)} q-1.5 2 -0.5 4.5 q3.5 1.2 7 -1 l-1.5 -3 Z" fill="#1d1410" ${p}/>
    <path d="M5.5 ${(_+1.8).toFixed(1)} l-1 2.6 l2.2 -0.6 Z M9 ${(_+2.4).toFixed(1)} l-1 2.4 l2.2 -0.6 Z" fill="#f2ead8" ${p}/>
    ${l?`<path d="M16 ${(_-8).toFixed(1)} l7 -3 l-1 6 Z" fill="${s.shade}" ${p}/><path d="M20 ${(_-8.5).toFixed(1)} l6 -2 l-1 6 Z" fill="${s.base}" ${p}/>`:`<path d="M15 ${(_-8).toFixed(1)} l-0.5 -11 l5 7 Z" fill="${s.shade}" ${p}/><path d="M19 ${(_-8.5).toFixed(1)} l3 -10 l3.5 8 Z" fill="${s.base}" ${p}/>`}
    <ellipse cx="11.5" cy="${(_-1.5).toFixed(1)}" rx="2" ry="1.6" fill="${c}"/>
    <circle cx="11.5" cy="${(_-1.5).toFixed(1)}" r="0.7" fill="${d}"/>
    <path d="M6 ${(_-3).toFixed(1)} l5 1.2" stroke="${d}" stroke-width="1.1"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(32 50) scale(${o.toFixed(3)}) translate(-32 -50)">
    ${x}
    ${b}
    ${S}
    ${C}
    ${w}
  </g>
</svg>`}var B={category:`unit`,variants:8,frames:4,frameMs:230,shadow:!0};function V(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var H=(e,t)=>t[Math.floor(e()*t.length)],U=(e,t)=>t[(e%t.length+t.length)%t.length],W=[{base:`#a06bd0`,top:`#bb90e2`,shade:`#7c4ea6`},{base:`#9760c4`,top:`#b083da`,shade:`#72469a`},{base:`#a878c8`,top:`#c294dc`,shade:`#82599e`}],G=[`#ffe14a`,`#ff9a3a`,`#c8ff5a`],K=[`club`,`boulder`,`log`];function q(e={}){let{seed:t=0,frame:n=0,frames:r=4,layer:i=`body`}=e,a=V(t),o=.92+a()*.12,s=U(t,W),c=H(a,G),l=K[Math.floor(a()*K.length)],u=a()<.55,d=a()<.7,f=`#0c0d11`,p=`stroke="${f}" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"`,m=`stroke="${f}" stroke-width="1.2" stroke-linejoin="round"`;if(i===`shadow`)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(31 56) scale(${o.toFixed(3)}) translate(-31 -56)">
    <ellipse cx="32" cy="56" rx="14" ry="3.8" fill="#000" opacity="0.32"/>
  </g>
</svg>`;let h=n/r*Math.PI*2,g=+(2.9*Math.cos(h)).toFixed(2),_=+(-2.2*Math.abs(Math.sin(h))).toFixed(2),v=21+_,y=17+_,b=(e,t)=>`<path d="M${(31+e-3).toFixed(1)} 39 l0 ${15 .toFixed(1)} l6 0 l0 -15 Z" fill="${t}" ${m}/><path d="M${(31+e-3.6).toFixed(1)} 53.5 l7.6 0 l-1 3 l-6 0 Z" fill="#221a26" ${m}/>`,x=b(-g-2.5,s.shade)+b(g+2.5,s.base),S=(v-4).toFixed(1),C=l===`boulder`?`<line x1="40" y1="${(v+6).toFixed(1)}" x2="44" y2="${S}" stroke="${s.shade}" stroke-width="4" stroke-linecap="round"/>
         <path d="M40 ${(S-5).toFixed(1)} q5 -4 9 0 q1 5 -4 6 q-6 0 -5 -6 Z" fill="#8a8076" ${p}/>`:l===`log`?`<line x1="40" y1="${(v+6).toFixed(1)}" x2="45" y2="${(S-3).toFixed(1)}" stroke="#6a4a2c" stroke-width="5.5" stroke-linecap="round"/>
           <ellipse cx="46" cy="${(S-4).toFixed(1)}" rx="2.4" ry="3" fill="#7d5836" ${m}/>`:`<line x1="40" y1="${(v+6).toFixed(1)}" x2="43" y2="${(S-2).toFixed(1)}" stroke="#6a4a2c" stroke-width="3.4" stroke-linecap="round"/>
           <path d="M40 ${(S-3).toFixed(1)} q5 -2 8 1 l-1.5 5 q-5 1 -8 -2 Z" fill="#7d5836" ${p}/>
           <circle cx="43" cy="${(S-1).toFixed(1)}" r="1" fill="#3a2a1a"/><circle cx="45" cy="${(+S+2).toFixed(1)}" r="1" fill="#3a2a1a"/>`,w=`
    <path d="M${20 .toFixed(1)} ${v.toFixed(1)} q11 -6 21 0 l-2 ${(39-v+2).toFixed(1)} q-8 3 -17 0 Z" fill="${s.base}" ${p}/>
    <path d="M${35 .toFixed(1)} ${(v-1).toFixed(1)} q5 -1 5 1.5 l-2 ${(39-v+2).toFixed(1)} q-3 1 -5 0.5 Z" fill="${s.shade}"/>
    <path d="M${22 .toFixed(1)} ${(v+1).toFixed(1)} q9 -4 18 0" fill="none" stroke="${s.top}" stroke-width="1.6"/>
    ${u?`<path d="M${25 .toFixed(1)} ${(v+5).toFixed(1)} l10 4" stroke="#e6d2f0" stroke-width="1.6" opacity="0.65"/>`:``}`,T=`
    <path d="M${22 .toFixed(1)} ${(v+1).toFixed(1)} q-6 3 -7 11 q0 3 3 3 q3 0 3.5 -3 q1 -6 4 -10 Z" fill="${s.base}" ${p}/>
    <circle cx="${20 .toFixed(1)}" cy="${(v+15).toFixed(1)}" r="3.4" fill="${s.shade}" ${p}/>`,E=`
    <ellipse cx="${29 .toFixed(1)}" cy="${y.toFixed(1)}" rx="7" ry="6.2" fill="${s.base}" ${p}/>
    <path d="M${22.4.toFixed(1)} ${(y-1).toFixed(1)} a7 6.2 0 0 1 7 -5" fill="none" stroke="${s.top}" stroke-width="1.4"/>
    <path d="M${23 .toFixed(1)} ${(y-1.5).toFixed(1)} q3 -2 7 -1.5" fill="none" stroke="${f}" stroke-width="1.8"/>
    <ellipse cx="${26 .toFixed(1)}" cy="${(y+.5).toFixed(1)}" rx="1.8" ry="1.5" fill="${c}"/>
    <ellipse cx="${30 .toFixed(1)}" cy="${(y+1).toFixed(1)}" rx="1.6" ry="1.3" fill="${c}"/>
    ${d?`<path d="M${25 .toFixed(1)} ${(y+4).toFixed(1)} l-1 4 l2 -2 Z M${30 .toFixed(1)} ${(y+4.5).toFixed(1)} l-1 4 l2 -2 Z" fill="#e8e0d0" ${m}/>`:``}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(31 51) scale(${o.toFixed(3)}) translate(-31 -51)">
    ${C}
    ${x}
    ${T}
    ${w}
    ${E}
  </g>
</svg>`}var J={category:`unit`,variants:8,frames:4,frameMs:220,shadow:!0};function Y(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var ae=(e,t)=>t[Math.floor(e()*t.length)],oe=(e,t)=>t[(e%t.length+t.length)%t.length],se=[{base:`#9c5a2a`,top:`#bd7740`,shade:`#774122`},{base:`#94592e`,top:`#b4733f`,shade:`#714024`},{base:`#a5632f`,top:`#c27e45`,shade:`#7d4a26`}],X=[`#6db04a`,`#b0524a`,`#c7843a`],ce=[`#ffd23a`,`#ff9a3a`,`#ffb43a`];function le(e={}){let{seed:t=0,frame:n=0,frames:r=4,layer:i=`body`}=e,a=Y(t),o=.94+a()*.1,s=oe(t,se),c=X[t%X.length],l=ae(a,ce),u=a()<.8,d=a()<.5,f=`#0c0d11`,p=`stroke="${f}" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"`,m=`stroke="${f}" stroke-width="1.2" stroke-linejoin="round"`;if(i===`shadow`)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(32 56) scale(${o.toFixed(3)}) translate(-32 -56)">
    <ellipse cx="32" cy="56" rx="17" ry="3.8" fill="#000" opacity="0.32"/>
  </g>
</svg>`;let h=n/r*Math.PI*2,g=(1+Math.cos(h))/2,_=+(-1.1*Math.abs(Math.sin(h))).toFixed(2),v=+(Math.sin(h)*2).toFixed(2),y=Math.sin(h),b=(e,t,n)=>{let r=n>0?n:0,i=r*5,a=e+r*(e<28?1.5:-1.5),o=(55-i-48).toFixed(1);return`<path d="M${a.toFixed(1)} 44 q-3 0 -3.4 4 l0 ${o} l8 0 l0 ${-(55-i-48)} q-0.4 -4 -3.4 -4 Z" fill="${t}" ${p}/>`},x=b(11,s.shade,y)+b(41,s.base,-y),S=+(y*1.6).toFixed(2),C=`
    <line x1="46" y1="${(34+_).toFixed(1)}" x2="48" y2="6" stroke="#5a4326" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M48 7 q7 ${v.toFixed(1)} 12 0 l-1 8 q-5 ${(-v).toFixed(1)} -10 0 Z" fill="${c}" ${m}/>`,w=33+_,T=`
    <path d="M14 ${(w+2).toFixed(1)} q-2 -16 18 -16 q20 0 18 16 q1 9 -8 11 q-10 2 -20 0 q-9 -2 -8 -11 Z" fill="${s.base}" ${p}/>
    <path d="M34 ${(w-12).toFixed(1)} q14 1 16 13 q1 9 -8 11 q-6 1 -10 0 q9 -3 9 -12 q0 -8 -7 -12 Z" fill="${s.shade}"/>
    <path d="M16 ${(w-2).toFixed(1)} q-1 -12 16 -13" fill="none" stroke="${s.top}" stroke-width="1.8"/>`,E=18+_,D=`
    <ellipse cx="17" cy="${E.toFixed(1)}" rx="7.5" ry="6.6" fill="${s.base}" ${p}/>
    <path d="M10 ${(E-1).toFixed(1)} a7.5 6.6 0 0 1 7 -5.4" fill="none" stroke="${s.top}" stroke-width="1.5"/>
    <path d="M10.5 ${(E-1.8).toFixed(1)} q3 -2 7 -1.2" fill="none" stroke="${f}" stroke-width="1.8"/>
    <ellipse cx="13.5" cy="${(E+.6).toFixed(1)}" rx="1.7" ry="1.4" fill="${l}"/>
    <ellipse cx="17.5" cy="${(E+1).toFixed(1)}" rx="1.5" ry="1.2" fill="${l}"/>
    ${u?`<path d="M13 ${(E+4.5).toFixed(1)} l-1 4 l2 -2 Z M18 ${(E+5).toFixed(1)} l-1 4 l2 -2 Z" fill="#e8e0d0" ${m}/>`:``}
    ${d?`<path d="M11 ${(E-5).toFixed(1)} l-3 -3 l3 0.5 Z M22 ${(E-5).toFixed(1)} l3 -3 l-3 0.5 Z" fill="#d8cdb6" ${m}/>`:``}`,O=43+_,k=`
    <ellipse cx="28" cy="${O.toFixed(1)}" rx="11" ry="9" fill="#6a4a2c" ${p}/>
    <ellipse cx="${25.5.toFixed(1)}" cy="${(O-.5).toFixed(1)}" rx="7.5" ry="7" fill="#d8c49a" ${m}/>
    <path d="M17 ${O.toFixed(1)} q3 6 11 9 M19 ${(O-6).toFixed(1)} l8 13 M24 ${(O-8).toFixed(1)} l6 16" fill="none" stroke="${s.shade}" stroke-width="1.1" opacity="0.7"/>
    <ellipse cx="28" cy="${O.toFixed(1)}" rx="11" ry="9" fill="none" stroke="${f}" stroke-width="1.4"/>`,A=(O-9-g*9).toFixed(2),j=(e,t)=>`
    <path d="M${e} ${(w-4).toFixed(1)} q4 2 ${(t-e).toFixed(1)} ${(+A+4-(w-4)).toFixed(1)}" fill="none" stroke="${s.base}" stroke-width="4.5" stroke-linecap="round"/>
    <line x1="${t}" y1="${(+A+4).toFixed(1)}" x2="${(t-2).toFixed(1)}" y2="${A}" stroke="#5a4326" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="${(t-2).toFixed(1)}" cy="${A}" r="2" fill="#7d5836" ${m}/>`,M=j(26,23)+j(38,33);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(${(32+S).toFixed(2)} 52) scale(${o.toFixed(3)}) translate(-32 -52)">
    ${C}
    ${x}
    ${T}
    ${D}
    ${k}
    ${M}
  </g>
</svg>`}var ue={category:`structure`,variants:8,frames:6,frameMs:200};function de(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var fe=(e,t)=>t[Math.floor(e()*t.length)],pe=[{base:`#7a8aa0`,top:`#97a6ba`,shade:`#5a6a80`,plinth:`#3e4a5c`},{base:`#74859c`,top:`#90a1b6`,shade:`#566578`,plinth:`#3a4658`},{base:`#80889a`,top:`#9da6b6`,shade:`#606878`,plinth:`#42485a`}],Z=[`#5b8dd6`,`#4f9d8f`,`#c8a24a`,`#aeb8c6`];function me(e={}){let{seed:t=0,frame:n=0,frames:r=6}=e,i=de(t),a=fe(i,pe),o=Z[t%Z.length],s=i()<.5,c=i()<.5?2:1,l=.94+i()*.12,u=n/r*Math.PI*2,d=e=>+(Math.sin(u+e)*2).toFixed(2),f=e=>+(20+11*e).toFixed(2),p=`M20 4
    C${f(.4)} ${4+d(0)} ${f(.6)} ${4+d(1)} ${f(1)} ${4+d(2)}
    L${f(1)} ${9.5+d(2)}
    C${f(.6)} ${9.5+d(1)} ${f(.4)} ${9.5+d(0)} 20 9.5 Z`,m=``;if(s){let e=.7+.3*Math.sin(u*2);m=`<rect x="44" y="22" width="5" height="3.5" rx="1" fill="#3a3026" stroke="#0c0d11" stroke-width="1"/><path d="M46.5 ${22-2*e} q-2.4 2 -1.4 4 q1.4 1.4 2.8 0 q1 -2 -1.4 ${(-4*e).toFixed(1)} Z" fill="#ffae3a"/><path d="M46.5 ${22-1*e} q-1.2 1 -0.7 2 q0.7 0.8 1.4 0 q0.5 -1 -0.7 ${(-2*e).toFixed(1)} Z" fill="#ffe27a"/>`}let h=`#0c0d11`,g=`stroke="${h}" stroke-width="2.2" stroke-linejoin="round"`,_=`stroke="${h}" stroke-width="1.3" stroke-linejoin="round"`,v=``;for(let e=0;e<4;e++){let t=15+e*6.6;v+=`<rect x="${t}" y="17" width="3.8" height="5" fill="${a.base}" ${_}/>`}let y=``,b=c===2?[22,32]:[27];for(let e of b)y+=`<rect x="${e}" y="30" width="2.4" height="8" rx="1" fill="#1d2333" ${_}/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <!-- cast shadow: the square footprint projected down-right (light top-left) — a parallelogram. -->
  <path d="M18 54.5 L42 54.5 L51 49.5 L27 49.5 Z" fill="#000" opacity="0.26"/>
  <g transform="translate(32 53) scale(${l.toFixed(3)}) translate(-32 -53)">

    <!-- RIGHT SIDE face (receding up-right at 2:1) — shade value -->
    <path d="M41 22 L52 16.5 L52 47.5 L41 53 Z" fill="${a.shade}" ${g}/>
    <path d="M41 49 L52 43.5 L52 47.5 L41 53 Z" fill="${a.plinth}" ${_}/>
    <!-- side merlons -->
    <path d="M41 19 L45 17 L45 21 L41 23 Z M47 16 L52 13.5 L52 17 L47 19.5 Z" fill="${a.shade}" ${_}/>

    <!-- FRONT wall face — base value (the bright mass that reads at 32px) -->
    <rect x="15" y="22" width="26" height="31" fill="${a.base}" ${g}/>
    <!-- top-left highlight rim -->
    <path d="M16 22.5 L40 22.5 M16 22.5 L16 52" fill="none" stroke="${a.top}" stroke-width="1.3"/>
    <!-- front base plinth (darkest) -->
    <rect x="15" y="49" width="26" height="4" fill="${a.plinth}" ${_}/>
    <!-- stone courses -->
    <path d="M16 36 L40 36 M16 43 L40 43" fill="none" stroke="${h}" stroke-width="1" opacity="0.35"/>
    <!-- corner quoins (front-left) -->
    <rect x="15" y="25" width="3.4" height="4" fill="${a.top}" ${_}/>
    <rect x="15" y="43" width="3.4" height="4" fill="${a.top}" ${_}/>
    ${v}
    ${y}
    ${m}

    <!-- pennant pole + flag (animated) -->
    <path d="M20 17 L20 3.5" stroke="#5d6b7e" stroke-width="2" stroke-linecap="round"/>
    <path d="${p}" fill="${o}" ${_}/>
  </g>
</svg>`}var Q={category:`unit`,variants:10,frames:4,frameMs:130,shadow:!0};function he(e){let t=(e>>>0)+1831565813;return()=>(t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296)}var $=(e,t)=>t[Math.floor(e()*t.length)],ge=(e,t)=>t[(e%t.length+t.length)%t.length],_e=[{base:`#5b8dd6`,top:`#7ba6e4`,shade:`#4670ad`},{base:`#5687c9`,top:`#75a0df`,shade:`#426aa3`},{base:`#4f9d8f`,top:`#6fb6a8`,shade:`#3d8073`}],ve=[`#caa07a`,`#b98a64`,`#d8b48c`],ye=[`#d6c24a`,`#cdd6e2`,`#c45a4a`];function be(e={}){let{seed:t=0,frame:n=0,frames:r=4,layer:i=`body`}=e,a=he(t),o=.9+a()*.12,s=ge(t,_e),c=$(a,ve),l=$(a,ye),u=a()<.6,d=a()<.5,f=`#0c0d11`,p=`stroke="${f}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"`,m=`stroke="${f}" stroke-width="1.1" stroke-linejoin="round"`;if(i===`shadow`)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(31 55) scale(${o.toFixed(3)}) translate(-31 -55)">
    <ellipse cx="32" cy="55" rx="9.5" ry="3" fill="#000" opacity="0.28"/>
  </g>
</svg>`;let h=(n%r+r)%r,g=h===3?-2:h*1.6,_=+(g*.18).toFixed(2),v=(e,t)=>`<path d="M${(27+e-1.7).toFixed(1)} 41 l0 ${12 .toFixed(1)} l3.4 0 l0 -12 Z" fill="${t}" ${m}/><rect x="${(27+e-2.2).toFixed(1)}" y="52" width="5" height="3" rx="1" fill="#23272f" ${m}/>`,y=v(-3,s.shade)+v(3.5,s.base),b=d?`<path d="M${24 .toFixed(1)} ${25 .toFixed(1)} q-7 4 -8 13 q5 -2 9 -4 l1 -8 Z" fill="${s.shade}" ${m}/>`:``,x=`
    <path d="M${20 .toFixed(1)} ${26 .toFixed(1)} l3 0 l-1 12 l-2 0 Z" fill="#6b4a2c" ${m}/>
    <line x1="${21 .toFixed(1)}" y1="${26 .toFixed(1)}" x2="${19 .toFixed(1)}" y2="${18 .toFixed(1)}" stroke="#8a8f98" stroke-width="1.2"/>
    <line x1="${22 .toFixed(1)}" y1="${26 .toFixed(1)}" x2="${21 .toFixed(1)}" y2="${18 .toFixed(1)}" stroke="#8a8f98" stroke-width="1.2"/>
    <path d="M${18.5.toFixed(1)} ${18 .toFixed(1)} l1.5 -2 l1 2 Z M${20.5.toFixed(1)} ${18 .toFixed(1)} l1.5 -2 l1 2 Z" fill="${l}" ${m}/>`,S=27+_,C=`
    <path d="M${(S-7).toFixed(1)} ${24 .toFixed(1)} L${(S+7).toFixed(1)} ${24 .toFixed(1)} L${(S+6).toFixed(1)} ${44 .toFixed(1)} L${(S-6).toFixed(1)} ${44 .toFixed(1)} Z" fill="${s.base}" ${p}/>
    <path d="M${(S+2.5).toFixed(1)} ${24 .toFixed(1)} L${(S+7).toFixed(1)} ${24 .toFixed(1)} L${(S+6).toFixed(1)} ${44 .toFixed(1)} L${(S+2).toFixed(1)} ${44 .toFixed(1)} Z" fill="${s.shade}"/>
    <path d="M${(S-6.4).toFixed(1)} ${24.6.toFixed(1)} L${(S-5.6).toFixed(1)} ${43.6.toFixed(1)}" fill="none" stroke="${s.top}" stroke-width="1.3"/>
    <line x1="${(S-6).toFixed(1)}" y1="${39 .toFixed(1)}" x2="${(S+6).toFixed(1)}" y2="${39 .toFixed(1)}" stroke="${f}" stroke-width="1.2" opacity="0.4"/>`,w=u?`<path d="M${(S-4).toFixed(1)} ${21 .toFixed(1)} q-1 -8 6 -8 q6 0 6 6 l-1 2 q-2 -4 -6 -3 Z" fill="${s.base}" ${p}/>
       <path d="M${(S-3.5).toFixed(1)} ${20 .toFixed(1)} q1 -6 6 -6" fill="none" stroke="${s.top}" stroke-width="1.3"/>
       <path d="M${(S+2).toFixed(1)} ${17 .toFixed(1)} q3 0.5 3 4 l-3.5 1 Z" fill="${c}" ${m}/>
       <circle cx="${(S+3.5).toFixed(1)}" cy="${20 .toFixed(1)}" r="0.8" fill="${f}"/>`:`<path d="M${(S-4).toFixed(1)} ${20 .toFixed(1)} a4.5 4.3 0 0 1 9 0 Z" fill="${s.shade}" ${p}/>
       <rect x="${(S-2.6).toFixed(1)}" y="${20 .toFixed(1)}" width="6.5" height="3.6" rx="1.3" fill="${c}" ${m}/>
       <circle cx="${(S+2.5).toFixed(1)}" cy="${21.6.toFixed(1)}" r="0.8" fill="${f}"/>`,T=33-g,E=`
    <path d="M38 20 Q43 29 38 38" fill="none" stroke="#7a5a32" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M38 20 L${T.toFixed(1)} 29 L38 38" fill="none" stroke="#d7dce4" stroke-width="0.9"/>
    ${h===3?``:`<line x1="${T.toFixed(1)}" y1="29" x2="45" y2="29" stroke="#6b5536" stroke-width="1.5" stroke-linecap="round"/><path d="M45 29 l-2.5 -1.5 l0 3 Z" fill="#cdd6e2"/>`}
    <line x1="${(S+5).toFixed(1)}" y1="${28 .toFixed(1)}" x2="38" y2="29" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="${(S+3).toFixed(1)}" y1="${29 .toFixed(1)}" x2="${T.toFixed(1)}" y2="29" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g transform="translate(27 50) scale(${o.toFixed(3)}) translate(-27 -50)">
    ${b}
    ${x}
    ${y}
    ${C}
    ${w}
    ${E}
  </g>
</svg>`}export{o as _,J as a,a as b,q as c,k as d,ee as f,x as g,p as h,me as i,te as l,O as m,be as n,le as o,S as p,ue as r,B as s,Q as t,z as u,f as v,e as y};
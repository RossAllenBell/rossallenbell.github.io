var e=`#0c0d11`,t={ally:{own:`#4a7fd6`,hi:`#6fa0e8`},foe:{own:`#c0463c`,hi:`#e06a5c`}},n={leatherDark:`#6f4e30`,leatherMid:`#7a5638`,leatherLite:`#8a6a44`,wood:`#4a3218`,woodLite:`#8a6a44`,shaft:`#9c7350`,steel:`#b8c0cc`,steelLite:`#d7dde6`,string:`#e8e2d4`,fletch:`#ddd6c4`,skin:`#d8a878`};function r(e,t,r={}){let i=r.cx??44,a=r.cy??50,o=r.bodyR??15,s=r.feet??7,c=r.footY??15,l=r.step??0,u=r.leather??n.leatherMid,d=r.headR??o*.47,f=r.headDx??-o*.19,p=r.headDy??-o*.28;return`<g stroke-width="3.2">
      <ellipse cx="${i+l}" cy="${a-c}" rx="${s}" ry="${s-2}" fill="${u}"/>
      <ellipse cx="${i-l}" cy="${a+c}" rx="${s}" ry="${s-2}" fill="${u}"/>
      ${r.plates??``}
      <ellipse cx="${i}" cy="${a}" rx="${o}" ry="${o+.5}" fill="${e}"/>
      <ellipse cx="${i+f}" cy="${a+p}" rx="${d}" ry="${d}" fill="${t}"/>
    </g>`}function i(e,t,r,i=6,a=9,o=50){let s=o-r,c=o+r,l=t-a,u=t-2.6,d=`<path d="M${l} ${s} Q${l+i} 50 ${l} ${c} L${t} ${c} Q${t+i} 50 ${t} ${s} Z" fill="${e}"/>`,f=`<path d="M${u} ${s} Q${u+i} 50 ${u} ${c} L${t} ${c} Q${t+i} 50 ${t} ${s} Z" fill="${n.steel}"/>`,p=`<path d="M${u+.6} ${s+3} Q${u+i} ${o-r*.55} ${t-.6} ${s+3}" fill="none" stroke="${n.steelLite}" stroke-width="1.6"/>`;return d+f+p}var a={idle:1,move:6,attack:8},o=Math.PI*2,s=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},c=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},l={leather:n.leatherMid,feet:7.5,hiDx:0,hiR:7.5,bodyR:16};function u(e){return e?{leather:c(n.leatherMid,s(e,3)<.5?n.leatherDark:n.leatherLite,.85*s(e,1)),feet:7.5+(s(e,2)-.5)*3,hiDx:(s(e,4)-.5)*5,hiR:7.5+(s(e,5)-.5)*3,bodyR:16+(s(e,6)-.5)*3.4}:l}var d=(t,r,i,a,o=5)=>`<line x1="${t}" y1="${r}" x2="${i}" y2="${a}" stroke="${e}" stroke-width="${o+2.6}" stroke-linecap="round"/><line x1="${t}" y1="${r}" x2="${i}" y2="${a}" stroke="${n.leatherMid}" stroke-width="${o}" stroke-linecap="round"/>`;function f(e,t,n=0,r=l){return`<g stroke-width="3.3">
      <ellipse cx="${45+n}" cy="34" rx="${r.feet}" ry="${r.feet-2}" fill="${r.leather}"/>
      <ellipse cx="${45-n}" cy="66" rx="${r.feet}" ry="${r.feet-2}" fill="${r.leather}"/>
      <ellipse cx="48" cy="50" rx="${r.bodyR}" ry="${r.bodyR+.5}" fill="${e}"/>
      <ellipse cx="${45+r.hiDx}" cy="45.5" rx="${r.hiR}" ry="${r.hiR-1}" fill="${t}"/>
    </g>
    <path d="M60 45 Q66 47 66 50 Q66 53 60 55 Q62.5 50 60 45 Z" fill="#2a1c12"/>`}function p(t=0){let r=`<path d="M64 33 Q71 50 64 67" fill="none" stroke="${e}" stroke-width="7.6"/>
    <path d="M64 33 Q71 50 64 67" fill="none" stroke="${n.leatherDark}" stroke-width="5"/>
    <path d="M64 33 Q71 50 64 67" fill="none" stroke="${n.woodLite}" stroke-width="1.5"/>
    <line x1="64" y1="33.5" x2="64" y2="66.5" stroke="${n.string}" stroke-width="1.7"/>
    <circle cx="64" cy="50" r="3.6" fill="${n.skin}"/>`;return t?`<g transform="rotate(${t} 64 50)">${r}</g>`:r}function m(t,r){let i=72-13*t,a=i-1;return`<path d="M72 25 Q88 50 72 75" fill="none" stroke="${e}" stroke-width="8.4"/>
    <path d="M72 25 Q88 50 72 75" fill="none" stroke="${n.leatherDark}" stroke-width="5.6"/>
    <path d="M72 25 Q88 50 72 75" fill="none" stroke="${n.woodLite}" stroke-width="1.7"/>
    <path d="M72 25 L${i} 50 L72 75" fill="none" stroke="${n.string}" stroke-width="1.9"/>
    <circle cx="74" cy="50" r="3.9" fill="${n.skin}"/>
    ${r?`<line x1="${a}" y1="50" x2="95" y2="50" stroke="${e}" stroke-width="4.6" stroke-linecap="round"/>
    <line x1="${a}" y1="50" x2="95" y2="50" stroke="${n.shaft}" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="96,50 86,44 86,56" fill="${n.steel}"/><polygon points="96,50 90,47 90,53" fill="${n.steelLite}"/>`:``}`}function h({side:n=`ally`,state:r=`idle`,frame:i=0,seed:s=0}={}){let{own:c,hi:l}=t[n]??t.ally,h=u(s),g=a[r]??1,_=(i%g+g)%g/g,v;if(r===`attack`){let e=(_+.5)%1,t=e<=.5?e/.5:(1-e)/.5,n=e<.5;v=`${d(52,43,71,50)}${d(52,57,60+4*(1-t),50)}${f(c,l,0,h)}${m(t,n)}`}else if(r===`move`){let e=Math.sin(_*o);v=`${d(50,44,64,50)}${d(50,56,56,60)}${f(c,l,e*5.5,h)}${p(e*9)}`}else v=`${d(50,44,64,50)}${d(50,56,56,60)}${f(c,l,0,h)}${p()}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${v}</g>
  </svg>`}var g={gen:h,role:t.ally.own,variants:4,states:a,frames:1,label:`Archer (ranged · T1)`,projectile:`arrow`},_={idle:1,move:6,attack:6},v=Math.PI*2,y=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},ee=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},te={leather:n.leatherMid,feet:5.6,headDx:0,headR:6.2};function ne(e){return e?{leather:ee(n.leatherMid,y(e,3)<.5?n.leatherDark:n.leatherLite,.4*y(e,1)),feet:5.6+(y(e,2)-.5)*1.2,headDx:(y(e,4)-.5)*2.2,headR:6.2+(y(e,5)-.5)*1.1}:te}function b(e,t,n=0,i=te){return r(e,t,{cx:41,cy:50,bodyR:12,feet:i.feet,footY:14,step:n,leather:i.leather,headR:i.headR,headDx:-2.3+i.headDx,headDy:-3.4})}var re={x:47,y:61};function ie(t,r=0){let{x:i,y:a}=re,o=i+t,s=`<line x1="${i-12}" y1="${a}" x2="${o-5}" y2="${a}" stroke="${e}" stroke-width="6" stroke-linecap="round"/>
    <line x1="${i-12}" y1="${a}" x2="${o-5}" y2="${a}" stroke="${n.shaft}" stroke-width="3.2" stroke-linecap="round"/>
    <polygon points="${o},${a} ${o-10},${a-3.6} ${o-10},${a+3.6}" fill="${n.steel}"/>
    <polygon points="${o},${a} ${o-6},${a-1.8} ${o-6},${a+1.8}" fill="${n.steelLite}"/>`;return`<g transform="rotate(${-20+r} ${i} ${a})">${s}</g>`}function ae({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=ne(a),l=_[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${b(o,s,1.8*e,c)}${ie(38+15*e,8*e)}`}else if(r===`move`){let e=Math.sin(u*v);d=`${b(o,s,e*4.2,c)}${ie(38,e*7)}`}else d=`${b(o,s,0,c)}${ie(38)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var oe={gen:ae,role:t.ally.own,variants:4,states:_,frames:1,label:`Militia (swarm · T1)`},se={idle:1,move:6,attack:6},ce=Math.PI*2,x=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},le=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},ue={leather:n.leatherMid,feet:7,headDx:0,headR:7.5};function de(e){return e?{leather:le(n.leatherMid,x(e,3)<.5?n.leatherDark:n.leatherLite,.4*x(e,1)),feet:7+(x(e,2)-.5)*1.3,headDx:(x(e,4)-.5)*2.4,headR:7.5+(x(e,5)-.5)*1.2}:ue}function fe(e,t,n=0,i=ue){return r(e,t,{cx:44,cy:50,bodyR:14.5,feet:i.feet,footY:15,step:n,leather:i.leather,headR:i.headR,headDx:-2.8+i.headDx,headDy:-4})}var pe={x:54,y:60};function me(t){let{x:r,y:i}=pe;return`<g transform="rotate(${t} ${r} ${i})">${`<line x1="${r}" y1="${i-8}" x2="${r}" y2="${i+8}" stroke="${e}" stroke-width="6" stroke-linecap="round"/>
    <line x1="${r}" y1="${i-8}" x2="${r}" y2="${i+8}" stroke="${n.leatherDark}" stroke-width="3.4" stroke-linecap="round"/>
    <polygon points="${r+2},${i-3.6} ${r+28},${i-2} ${r+40},${i} ${r+28},${i+2} ${r+2},${i+3.6}" fill="${n.steel}"/>
    <line x1="${r+4}" y1="${i}" x2="${r+36}" y2="${i}" stroke="${n.steelLite}" stroke-width="1.6"/>`}</g>`}function he({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=de(a),l=se[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${fe(o,s,1.4*e,c)}${me(-4*e+-42*(1-e))}`}else if(r===`move`){let e=Math.sin(u*ce);d=`${fe(o,s,e*4.8,c)}${me(-42+e*9)}`}else d=`${fe(o,s,0,c)}${me(-42)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var ge={gen:he,role:t.ally.own,variants:4,states:se,frames:1,label:`Swordsman (infantry · T1)`},_e={idle:1,move:6,attack:6},ve=Math.PI*2,S=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},ye=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},be={leather:n.leatherMid,feet:8,headDx:0,headR:7};function xe(e){return e?{leather:ye(n.leatherMid,S(e,3)<.5?n.leatherDark:n.leatherLite,.4*S(e,1)),feet:8+(S(e,2)-.5)*1.4,headDx:(S(e,4)-.5)*2.4,headR:7+(S(e,5)-.5)*1.2}:be}function C(e,t,i=0,a=be){let o=`<ellipse cx="26" cy="38" rx="6" ry="4.2" fill="${n.steel}"/><ellipse cx="26" cy="62" rx="6" ry="4.2" fill="${n.steel}"/>`;return r(e,t,{cx:31,cy:50,bodyR:13.5,feet:a.feet,footY:16,step:i,plates:o,leather:a.leather,headR:a.headR,headDx:-2.6+a.headDx,headDy:-3.8})}function w(e,t=0,n=0){return i(e,54-t,20,8,13,46+n)}function T(t){let r=6.6,i=e=>{let t=Math.cos(e),i=Math.sin(e),a=-i,o=t;return`<polygon points="${56+t*13.6},${58+i*13.6} ${56+t*r+a*2.9},${58+i*r+o*2.9} ${56+t*r-a*2.9},${58+i*r-o*2.9}" fill="${n.steel}"/>`};return`<g transform="rotate(${t} 36 58)">${`<line x1="33" y1="58" x2="56" y2="58" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
    <line x1="33" y1="58" x2="56" y2="58" stroke="${n.wood}" stroke-width="3.8" stroke-linecap="round"/>
    ${i(0)}${i(Math.PI/4)}${i(-Math.PI/4)}${i(Math.PI/2)}${i(-Math.PI/2)}${i(3*Math.PI/4)}${i(-3*Math.PI/4)}${i(Math.PI)}
    <circle cx="56" cy="58" r="${r}" fill="${n.steel}"/>`}</g>`}function Se({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=xe(a),l=_e[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${C(o,s,1.4*e,c)}${w(o,2*e)}${T(-6*e+150*(1-e))}`}else if(r===`move`){let e=Math.sin(u*ve);d=`${C(o,s,e*3.6,c)}${w(o,0,e*2.4)}${T(150+e*6)}`}else d=`${C(o,s,0,c)}${w(o,0)}${T(150)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.9" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var Ce={gen:Se,role:t.ally.own,variants:4,states:_e,frames:1,label:`Sentinel (tank · T1)`},we={idle:1,move:6,attack:6},Te=Math.PI*2,E=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Ee=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},De={leather:n.leatherMid,feet:6.4,headDx:0,headR:6.8};function Oe(e){return e?{leather:Ee(n.leatherMid,E(e,3)<.5?n.leatherDark:n.leatherLite,.4*E(e,1)),feet:6.4+(E(e,2)-.5)*1.3,headDx:(E(e,4)-.5)*2.4,headR:6.8+(E(e,5)-.5)*1.2}:De}function D(e,t,n=0,i=De){return r(e,t,{cx:43,cy:50,bodyR:13,feet:i.feet,footY:15,step:n,leather:i.leather,headR:i.headR,headDx:-2.5+i.headDx,headDy:-3.6})}var ke={x:45,y:61};function O(t,r=0){let{x:i,y:a}=ke,o=i+t,s=o-13,c=`<line x1="${i-15}" y1="${a}" x2="${o-2}" y2="${a}" stroke="${e}" stroke-width="6.4" stroke-linecap="round"/>
    <line x1="${i-15}" y1="${a}" x2="${o-2}" y2="${a}" stroke="${n.wood}" stroke-width="3.4" stroke-linecap="round"/>
    <polygon points="${o+10},${a} ${o-2},${a-3.6} ${o-2},${a+3.6}" fill="${n.steel}"/>
    <polygon points="${o-4},${a+4} ${o-9},${a+12} ${o},${a+8}" fill="${n.steel}"/>
    <path d="M${s} ${a-3} L${s+13} ${a-3} L${s+18} ${a-16} Q${s+8} ${a-20} ${s-1} ${a-15} Z" fill="${n.steel}"/>
    <path d="M${s+2} ${a-14} Q${s+8} ${a-17} ${s+15} ${a-14.5}" fill="none" stroke="${n.steelLite}" stroke-width="1.8"/>`;return`<g transform="rotate(${-18+r} ${i} ${a})">${c}</g>`}function Ae({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=Oe(a),l=we[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${D(o,s,1.6*e,c)}${O(40+14*e,10*e)}`}else if(r===`move`){let e=Math.sin(u*Te);d=`${D(o,s,e*4,c)}${O(40,e*6)}`}else d=`${D(o,s,0,c)}${O(40)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var je={gen:Ae,role:t.ally.own,variants:4,states:we,frames:1,label:`Halberdier (anti-armor · T1)`},Me={idle:1,move:4,attack:6},Ne=Math.PI*2,k=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Pe=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},Fe={wood:n.wood,hiDx:0};function Ie(e){return e?{wood:Pe(n.wood,k(e,3)<.5?`#3a2712`:`#5a3c1e`,.5*k(e,1)),hiDx:(k(e,4)-.5)*2.4}:Fe}var A=(e,t)=>`<rect x="${e-8}" y="${t-2.6}" width="16" height="5.2" rx="2.4" fill="#241c12"/>`;function Le(e,t,r){return`<g stroke-width="3.2">
      <rect x="24" y="34" width="42" height="32" rx="5" fill="${e}"/>
      <rect x="${28+r.hiDx}" y="38" width="16" height="9" rx="3" fill="${t}" stroke="none"/>
      <line x1="30" y1="50" x2="60" y2="50" stroke="${r.wood}" stroke-width="4"/>
      <line x1="36" y1="36" x2="36" y2="64" stroke="${r.wood}" stroke-width="3.2"/>
      <line x1="54" y1="36" x2="54" y2="64" stroke="${r.wood}" stroke-width="3.2"/>
      <circle cx="30" cy="40" r="1.6" fill="${n.steel}"/>
      <circle cx="60" cy="40" r="1.6" fill="${n.steel}"/>
      <circle cx="30" cy="60" r="1.6" fill="${n.steel}"/>
      <circle cx="60" cy="60" r="1.6" fill="${n.steel}"/>
    </g>`}function Re(t){let r=42+24*t,i=50-3*t,a=t<.3;return`<line x1="26" y1="50" x2="${r}" y2="${i}" stroke="${e}" stroke-width="10.5"/>
    <line x1="26" y1="50" x2="${r}" y2="${i}" stroke="${n.leatherDark}" stroke-width="6"/>
    <circle cx="26" cy="50" r="3.4" fill="#241c12"/>
    <path d="M${r+6} ${i-7} Q${r-4} ${i} ${r+6} ${i+7}" fill="none" stroke="${e}" stroke-width="6.4" stroke-linecap="round"/>
    <path d="M${r+6} ${i-7} Q${r-4} ${i} ${r+6} ${i+7}" fill="none" stroke="${n.wood}" stroke-width="3.2" stroke-linecap="round"/>
    ${a?`<circle cx="${r}" cy="${i}" r="6.6" fill="#6b7482"/><path d="M${r} ${i-5} L${r+5} ${i} L${r} ${i+5} L${r-5} ${i} Z" fill="#565f6c"/><circle cx="${r-2.2}" cy="${i-2.2}" r="2" fill="#8b93a2"/>`:``}`}function ze({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=Ie(a),l=Me[r]??1,u=(i%l+l)%l/l,d=`${A(30,32)}${A(58,32)}${A(30,68)}${A(58,68)}`,f,p=0;return r===`attack`?f=1-u:(r===`move`&&(p=Math.sin(u*Ne)*1.6),f=0),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${`<g transform="translate(0 ${p})">${d}${Le(o,s,c)}${Re(f)}</g>`}</g>
  </svg>`}var Be={gen:ze,role:t.ally.own,variants:4,states:Me,frames:1,label:`Catapult (siege · T1)`,projectile:`boulder`},Ve={idle:1,move:6,attack:6},He=Math.PI*2,j=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Ue=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},We={leather:n.leatherMid,feet:7.6,headDx:0,headR:8};function Ge(e){return e?{leather:Ue(n.leatherMid,j(e,3)<.5?n.leatherDark:n.leatherLite,.4*j(e,1)),feet:7.6+(j(e,2)-.5)*1.3,headDx:(j(e,4)-.5)*2.4,headR:8+(j(e,5)-.5)*1.2}:We}function Ke(e,t,i=0,a=We){let o=`<ellipse cx="40" cy="35" rx="6" ry="4" fill="${n.steel}"/><ellipse cx="40" cy="65" rx="6" ry="4" fill="${n.steel}"/>`;return r(e,t,{cx:44,cy:50,bodyR:15.5,feet:a.feet,footY:16,step:i,plates:o,leather:a.leather,headR:a.headR,headDx:-3+a.headDx,headDy:-4.3})}function qe(e,t=0){return i(e,64,12,6,9,44+t)}var Je={x:55,y:61};function Ye(t){let{x:r,y:i}=Je;return`<g transform="rotate(${t} ${r} ${i})">${`<line x1="${r}" y1="${i-9}" x2="${r}" y2="${i+9}" stroke="${e}" stroke-width="6.6" stroke-linecap="round"/>
    <line x1="${r}" y1="${i-9}" x2="${r}" y2="${i+9}" stroke="${n.leatherDark}" stroke-width="3.8" stroke-linecap="round"/>
    <polygon points="${r+2},${i-4.4} ${r+32},${i-2.4} ${r+46},${i} ${r+32},${i+2.4} ${r+2},${i+4.4}" fill="${n.steel}"/>
    <line x1="${r+4}" y1="${i}" x2="${r+42}" y2="${i}" stroke="${n.steelLite}" stroke-width="1.8"/>`}</g>`}function Xe({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=Ge(a),l=Ve[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${qe(o)}${Ke(o,s,1.4*e,c)}${Ye(-4*e+-42*(1-e))}`}else if(r===`move`){let e=Math.sin(u*He);d=`${qe(o,e*3)}${Ke(o,s,e*4.4,c)}${Ye(-42+e*8)}`}else d=`${qe(o)}${Ke(o,s,0,c)}${Ye(-42)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var Ze={gen:Xe,role:t.ally.own,variants:4,states:Ve,frames:1,label:`Vanguard (heavy infantry · T2)`},Qe={idle:1,move:6,attack:6},$e=Math.PI*2,M=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},et=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},tt={leather:n.leatherMid,hoof:5.4,headDx:0};function nt(e){return e?{leather:et(n.leatherMid,M(e,3)<.5?n.leatherDark:n.leatherLite,.4*M(e,1)),hoof:5.4+(M(e,2)-.5)*1,headDx:(M(e,4)-.5)*2}:tt}function rt(t,r,i,a){let o=(t,r,i,o)=>`<line x1="${t}" y1="${r}" x2="${i}" y2="${o}" stroke="${e}" stroke-width="5.8" stroke-linecap="round"/><line x1="${t}" y1="${r}" x2="${i}" y2="${o}" stroke="${a.leather}" stroke-width="3.2" stroke-linecap="round"/><ellipse cx="${i}" cy="${o}" rx="${a.hoof-1.4}" ry="${a.hoof-2.4}" fill="${n.leatherDark}"/>`;return`<g stroke-width="3.2">
      ${o(52,46,57+i,34)}
      ${o(29,46,25-i,34)}
      ${o(52,54,57-i,66)}
      ${o(29,54,25+i,66)}
      <ellipse cx="40" cy="50" rx="22" ry="10" fill="${t}"/>
      <path d="M56 45.5 Q64 46 69 50 Q64 54 56 54.5 Z" fill="${t}"/>
      <polygon points="74,50 66,47 66,53" fill="${n.leatherDark}"/>
      <path d="M61 45 l-1.5 -5.5 l4.2 3 Z" fill="${n.leatherDark}"/>
      <path d="M49 45 Q55 42 60 45" fill="none" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>
    </g>`}function it(e,t,n,r){return`<g stroke-width="3">
      <ellipse cx="39" cy="49" rx="8" ry="9" fill="${n}"/>
      <ellipse cx="${40+r.headDx}" cy="41" rx="5" ry="5" fill="${t}"/>
    </g>`}function at(e){return`<path d="M32 28 Q38 30 37 38 L32 46 L27 38 Q26 30 32 28 Z" fill="${n.steel}"/>
    <path d="M32 29.5 L32 44" fill="none" stroke="${e}" stroke-width="2.3"/>`}var ot={x:40,y:62};function N(t,r=0){let{x:i,y:a}=ot,o=i+t,s=`<line x1="${i-10}" y1="${a}" x2="${o-6}" y2="${a}" stroke="${e}" stroke-width="6" stroke-linecap="round"/>
    <line x1="${i-10}" y1="${a}" x2="${o-6}" y2="${a}" stroke="${n.wood}" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="${i+3}" cy="${a}" r="4" fill="${n.steel}"/>
    <polygon points="${o+8},${a} ${o-8},${a-4} ${o-8},${a+4}" fill="${n.steel}"/>
    <polygon points="${o+8},${a} ${o-2},${a-1.8} ${o-2},${a+1.8}" fill="${n.steelLite}"/>`;return`<g transform="rotate(${-16+r} ${i} ${a})">${s}</g>`}function st({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=et(o,e,.32),l=nt(a),u=Qe[r]??1,d=(i%u+u)%u/u,f;if(r===`attack`){let e=1-d;f=`<g transform="translate(${5*e} 0)">${rt(o,c,1.6*e,l)}${at(o)}${it(o,s,c,l)}</g>${N(30+24*e,4*e)}`}else if(r===`move`){let e=Math.sin(d*$e);f=`${rt(o,c,e*3.6,l)}${at(o)}${it(o,s,c,l)}${N(30,e*3)}`}else f=`${rt(o,c,0,l)}${at(o)}${it(o,s,c,l)}${N(30)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${f}</g>
  </svg>`}var ct={gen:st,role:t.ally.own,variants:4,states:Qe,frames:1,label:`Lancer (cavalry tank · T2)`},lt={idle:1,move:6,attack:6},ut=Math.PI*2,P=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},dt=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},ft={leather:n.leatherMid,feet:8.2,headDx:0,headR:8.2};function pt(e){return e?{leather:dt(n.leatherMid,P(e,3)<.5?n.leatherDark:n.leatherLite,.4*P(e,1)),feet:8.2+(P(e,2)-.5)*1.4,headDx:(P(e,4)-.5)*2.4,headR:8.2+(P(e,5)-.5)*1.2}:ft}function F(e,t,i=0,a=ft){let o=`<ellipse cx="24" cy="36" rx="6.6" ry="4.4" fill="${n.steel}"/><ellipse cx="24" cy="64" rx="6.6" ry="4.4" fill="${n.steel}"/>`;return r(e,t,{cx:30,cy:50,bodyR:17,feet:a.feet,footY:19,step:i,plates:o,leather:a.leather,headR:a.headR,headDx:-3.2+a.headDx,headDy:-4.8})}function I(e,t=0,n=0){return i(e,58-t,24,8,14,50+n)}function L(t){return`<g transform="rotate(${t} 34 58)">${`<line x1="30" y1="58" x2="54" y2="58" stroke="${e}" stroke-width="8.6" stroke-linecap="round"/>
    <line x1="30" y1="58" x2="54" y2="58" stroke="${n.wood}" stroke-width="4.8" stroke-linecap="round"/>
    <rect x="49" y="46" width="17" height="24" rx="3.2" fill="#6b7482"/>
    <rect x="49" y="46" width="17" height="12" rx="3.2" fill="${n.steel}"/>
    <rect x="52" y="49" width="11" height="4.5" rx="2" fill="${n.steelLite}" stroke="none"/>`}</g>`}function mt({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=pt(a),l=lt[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${F(o,s,1.2*e,c)}${I(o,2*e)}${L(-8*e+148*(1-e))}`}else if(r===`move`){let e=Math.sin(u*ut);d=`${F(o,s,e*3,c)}${I(o,0,e*3)}${L(148+e*6)}`}else d=`${F(o,s,0,c)}${I(o,0)}${L(148)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.9" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var ht={gen:mt,role:t.ally.own,variants:4,states:lt,frames:1,label:`Bulwark (shield wall · T2)`},gt={idle:1,move:6,attack:6},_t=Math.PI*2,R=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},vt=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},yt={leather:n.leatherMid,feet:9,headDx:0,headR:9};function bt(e){return e?{leather:vt(n.leatherMid,R(e,3)<.5?n.leatherDark:n.leatherLite,.4*R(e,1)),feet:9+(R(e,2)-.5)*1.4,headDx:(R(e,4)-.5)*2.4,headR:9+(R(e,5)-.5)*1.2}:yt}function z(e,t,i=0,a=yt){let o=`<ellipse cx="38" cy="30" rx="6.5" ry="4.6" fill="${n.steel}"/><ellipse cx="38" cy="70" rx="6.5" ry="4.6" fill="${n.steel}"/><ellipse cx="30" cy="38" rx="5.6" ry="4.2" fill="${n.steel}"/><ellipse cx="30" cy="62" rx="5.6" ry="4.2" fill="${n.steel}"/>`;return r(e,t,{cx:44,cy:50,bodyR:18,feet:a.feet,footY:20,step:i,plates:o,leather:a.leather,headR:a.headR,headDx:-3.4+a.headDx,headDy:-5})}var xt={x:50,y:64};function B(t){let{x:r,y:i}=xt,a=r+34,o=a-8;return`<g transform="rotate(${t} ${r} ${i})">${`<line x1="${r-9}" y1="${i}" x2="${a}" y2="${i}" stroke="${e}" stroke-width="8" stroke-linecap="round"/>
    <line x1="${r-9}" y1="${i}" x2="${a}" y2="${i}" stroke="${n.wood}" stroke-width="4.6" stroke-linecap="round"/>
    <path d="M${o-4} ${i-2} L${o+6} ${i-3} L${o+13} ${i-20} Q${o+1} ${i-25} ${o-8} ${i-18} Z" fill="${n.steel}"/>
    <path d="M${o-4} ${i+2} L${o+6} ${i+3} L${o+13} ${i+20} Q${o+1} ${i+25} ${o-8} ${i+18} Z" fill="${n.steel}"/>
    <path d="M${o-5} ${i-16} Q${o+2} ${i-21} ${o+11} ${i-17}" fill="none" stroke="${n.steelLite}" stroke-width="2"/>
    <path d="M${o-5} ${i+16} Q${o+2} ${i+21} ${o+11} ${i+17}" fill="none" stroke="${n.steelLite}" stroke-width="2"/>`}</g>`}function St({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=bt(a),l=gt[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${z(o,s,1.5*e,c)}${B(-2*e+-40*(1-e))}`}else if(r===`move`){let e=Math.sin(u*_t);d=`${z(o,s,e*4,c)}${B(-40+e*7)}`}else d=`${z(o,s,0,c)}${B(-40)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.9" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var Ct={gen:St,role:t.ally.own,variants:4,states:gt,frames:1,label:`Colossus (juggernaut · T3)`},wt={idle:1,move:6,attack:6},Tt=Math.PI*2,V=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Et=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},Dt={leather:n.leatherMid,feet:5.8,headDx:0,headR:5.6};function Ot(e){return e?{leather:Et(n.leatherMid,V(e,3)<.5?n.leatherDark:n.leatherLite,.4*V(e,1)),feet:5.8+(V(e,2)-.5)*1.2,headDx:(V(e,4)-.5)*2.2,headR:5.6+(V(e,5)-.5)*1.1}:Dt}function H(e,t,n=0,i=Dt){return r(e,t,{cx:43,cy:50,bodyR:10,feet:i.feet,footY:12,step:n,leather:i.leather,headR:i.headR,headDx:-1.9+i.headDx,headDy:-2.8})}function U(t,r,i,a){let o=i*Math.PI/180,s=t+Math.cos(o)*a,c=r+Math.sin(o)*a,l=(t+s)/2+Math.cos(o+Math.PI/2)*5,u=(r+c)/2+Math.sin(o+Math.PI/2)*5;return`<path d="M${t} ${r} Q${l} ${u} ${s} ${c}" fill="none" stroke="${e}" stroke-width="5.6" stroke-linecap="round"/>
    <path d="M${t} ${r} Q${l} ${u} ${s} ${c}" fill="none" stroke="${n.steel}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="${t}" cy="${r}" r="2.6" fill="${n.leatherDark}"/>`}var W={x:50,y:43},G={x:50,y:57};function kt({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=Ot(a),l=wt[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=Math.max(0,1-u/.45),t=Math.max(0,1-Math.abs(u-.62)/.34),n=-78+104*e,r=78+-104*t;d=`${H(o,s,1.1*e-.6*t,c)}${U(W.x,W.y,n,13+17*e)}${U(G.x,G.y,r,13+17*t)}`}else if(r===`move`){let e=Math.sin(u*Tt);d=`${H(o,s,e*4.4,c)}${U(W.x,W.y,-34+e*6,22)}${U(G.x,G.y,34-e*6,22)}`}else d=`${H(o,s,0,c)}${U(W.x,W.y,-34,22)}${U(G.x,G.y,34,22)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var At={gen:kt,role:t.ally.own,variants:4,states:wt,frames:1,label:`Reaver (assassin · T2)`},jt={idle:1,move:6,attack:6},Mt=Math.PI*2,K=`#7fe6b0`,Nt=`#d6fff0`,q=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Pt=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},Ft={hem:n.leatherMid,hiDx:0,hiR:6.5};function It(e){return e?{hem:Pt(n.leatherMid,q(e,3)<.5?n.leatherDark:n.leatherLite,.4*q(e,1)),hiDx:(q(e,4)-.5)*2.6,hiR:6.5+(q(e,5)-.5)*1.4}:Ft}function Lt(e,t,n=0,r=Ft){return`<g stroke-width="3.2">
      <ellipse cx="${43+n}" cy="35" rx="6.4" ry="5" fill="${r.hem}"/>
      <ellipse cx="${43-n}" cy="65" rx="6.4" ry="5" fill="${r.hem}"/>
      <ellipse cx="44" cy="50" rx="14" ry="15" fill="${e}"/>
      <path d="M${36+r.hiDx} 40 Q${44+r.hiDx} 42 ${44+r.hiDx} 48 Q${39+r.hiDx} 45 ${34+r.hiDx} 47 Z" fill="${t}"/>
      <path d="M57 46 Q62 48 62 50 Q62 52 57 54 Q59 50 57 46 Z" fill="#241a12"/>
    </g>`}function Rt(t=0,r=0){let i=4.4+1.6*t,a=t>.15?`<circle cx="66" cy="44" r="${8+6*t}" fill="${K}" opacity="${.22*t}" stroke="none"/>`:``;return`<g transform="rotate(${r} 50 58)">${`<line x1="49" y1="63" x2="66" y2="44" stroke="${e}" stroke-width="6.6" stroke-linecap="round"/>
    <line x1="49" y1="63" x2="66" y2="44" stroke="${n.leatherLite}" stroke-width="3.4" stroke-linecap="round"/>
    ${a}
    <line x1="${66-i}" y1="44" x2="${66+i}" y2="44" stroke="${e}" stroke-width="5.6" stroke-linecap="round"/>
    <line x1="66" y1="${44-i}" x2="66" y2="${44+i}" stroke="${e}" stroke-width="5.6" stroke-linecap="round"/>
    <line x1="${66-i}" y1="44" x2="${66+i}" y2="44" stroke="${t>.15?Nt:K}" stroke-width="3" stroke-linecap="round"/>
    <line x1="66" y1="${44-i}" x2="66" y2="${44+i}" stroke="${t>.15?Nt:K}" stroke-width="3" stroke-linecap="round"/>`}</g>`}function zt({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=It(a),l=jt[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${Lt(o,s,0,c)}${Rt(e,-6*e)}`}else if(r===`move`){let e=Math.sin(u*Mt);d=`${Lt(o,s,e*4,c)}${Rt(0,e*5)}`}else d=`${Lt(o,s,0,c)}${Rt(0,0)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var Bt={gen:zt,role:t.ally.own,variants:4,states:jt,frames:1,label:`Cleric (support · T2)`},Vt={idle:1,move:6,attack:6},Ht=Math.PI*2,J=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Ut=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},Wt={leather:n.leatherMid,feet:7,headDx:0,headR:7.3};function Gt(e){return e?{leather:Ut(n.leatherMid,J(e,3)<.5?n.leatherDark:n.leatherLite,.4*J(e,1)),feet:7+(J(e,2)-.5)*1.3,headDx:(J(e,4)-.5)*2.4,headR:7.3+(J(e,5)-.5)*1.2}:Wt}function Kt(e,t,n=0,i=Wt){return r(e,t,{cx:43,cy:50,bodyR:14,feet:i.feet,footY:15,step:n,leather:i.leather,headR:i.headR,headDx:-2.7+i.headDx,headDy:-3.9})}function qt(t,r,i=0){let a=i,o=`<path d="M49 22 L45 41 L${24+a} ${45+a} Q${29+a} 37 ${24+a} ${30+a} L29 28 L${22+a} ${23+a} L43 20 Z" fill="${t}"/>
    <path d="M45 26 L${27+a} 25 M45 33 L${26+a} 34 M45 39 L${25+a} 41" stroke="${r}" stroke-width="1.8" fill="none"/>`;return`<line x1="40" y1="48" x2="51" y2="22" stroke="${e}" stroke-width="5.6" stroke-linecap="round"/>
    <line x1="40" y1="48" x2="51" y2="22" stroke="${n.wood}" stroke-width="2.8" stroke-linecap="round"/>
    <polygon points="52,15 49,21 55,21" fill="${n.steel}"/>
    ${o}`}var Jt={x:52,y:61};function Yt(t){let{x:r,y:i}=Jt;return`<g transform="rotate(${t} ${r} ${i})">${`<line x1="${r}" y1="${i-6}" x2="${r}" y2="${i+6}" stroke="${e}" stroke-width="5.4" stroke-linecap="round"/>
    <line x1="${r}" y1="${i-6}" x2="${r}" y2="${i+6}" stroke="${n.leatherDark}" stroke-width="3" stroke-linecap="round"/>
    <polygon points="${r+2},${i-3.2} ${r+24},${i-1.8} ${r+34},${i} ${r+24},${i+1.8} ${r+2},${i+3.2}" fill="${n.steel}"/>
    <line x1="${r+4}" y1="${i}" x2="${r+30}" y2="${i}" stroke="${n.steelLite}" stroke-width="1.5"/>`}</g>`}function Xt({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=Gt(a),l=Vt[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${qt(o,s,1.5)}${Kt(o,s,1.2*e,c)}${Yt(-2*e+-38*(1-e))}`}else if(r===`move`){let e=Math.sin(u*Ht);d=`${qt(o,s,2+e*2)}${Kt(o,s,e*4,c)}${Yt(-38)}`}else d=`${qt(o,s,1.5)}${Kt(o,s,0,c)}${Yt(-38)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var Zt={gen:Xt,role:t.ally.own,variants:4,states:Vt,frames:1,label:`Battlemaster (support · T3)`},Qt={idle:4,move:6,attack:6},$t=Math.PI*2,en=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},tn=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},nn={headDx:0,wing:0};function rn(e){return e?{headDx:(en(e,4)-.5)*1.6,wing:(en(e,2)-.5)*.14}:nn}function an(e,t,n,r){let i=.5+.5*t,a=50+e*(12+10*i);return`<path d="M46 ${50+e*2} Q44 ${50+e*(9+9*i)} 36 ${a} Q32 ${a+e*.5} 29 ${50+e*(9+7*i)} Q28 ${50+e*(5+3*i)} 30 ${50+e*3} Z" fill="${r}"/>
    <path d="M45 ${50+e*2} Q42 ${50+e*(9+8*i)} 35 ${a-e*2}" fill="none" stroke="${n}" stroke-width="1.5"/>`}function on(e,t,r,i){let a=54+i.headDx;return`<g stroke-width="3">
      <path d="M40 46.5 Q26 47.5 16 50 Q26 52.5 40 53.5 Z" fill="${e}"/>
      <polygon points="14,50 21,46.5 19,50 21,53.5" fill="${n.leatherDark}"/>
      <ellipse cx="43" cy="50" rx="10" ry="7.5" fill="${e}"/>
      <circle cx="${a}" cy="50" r="7" fill="${r}"/>
      <path d="M${a-3.5} 46 Q${a} 44.5 ${a+3.5} 46.5" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
      <polygon points="73,50 ${a+4},45.5 ${a+4},54.5" fill="${n.leatherLite}"/>
      <polygon points="74,50 ${a+6},48 ${a+6},52" fill="${n.leatherDark}"/>
    </g>`}function sn({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=tn(o,e,.28),l=rn(a),u=Qt[r]??1,d=(i%u+u)%u/u,f,p=0;if(r===`attack`){let e=1-d;f=.5+.5*e,p=6*e}else f=.5+.5*Math.sin(d*$t);let m=Math.min(1,Math.max(0,f+l.wing));return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">${`<g transform="translate(${p} 0)">${an(-1,m,o,c)}${an(1,m,o,c)}${on(o,s,c,l)}</g>`}</g>
  </svg>`}var cn={gen:sn,role:t.ally.own,variants:4,states:Qt,frames:1,label:`Drake (air · T2)`},ln={idle:4,move:6,attack:6},un=Math.PI*2,dn=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},fn=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},pn={wing:0};function mn(e){return e?{wing:(dn(e,2)-.5)*.12}:pn}function hn(e,t,n,r){let i=.4+.6*t,a=50+e*5,o=50+e*(12+22*i);return`<path d="M50 ${a} Q${`44 ${50+e*(7+30*i)}`} 22 ${o} Q${`28 ${50+e*6}`} 40 ${50+e*4} Z" fill="${r}"/>
    <path d="M47 ${50+e*5} Q42 ${50+e*(8+20*i)} 25 ${o-e*3}" fill="none" stroke="${n}" stroke-width="2"/>`}function gn(e,t){return`<g stroke-width="3.2">
      <path d="M42 45 Q28 46 18 49 L11 51 Q22 53 42 55 Z" fill="${e}"/>
      <polygon points="5,51 15,47 13,51 15,55" fill="${n.steel}"/>
      <ellipse cx="48" cy="50" rx="15" ry="11" fill="${e}"/>
      <path d="M58 43 Q54 34 47 34" fill="none" stroke="${n.steel}" stroke-width="3.4"/>
      <path d="M58 57 Q54 66 47 66" fill="none" stroke="${n.steel}" stroke-width="3.4"/>
      <path d="M60 50 L71 44 L74 50 L71 56 Z" fill="${e}"/>
      <polygon points="74,50 64,45 64,55" fill="${n.leatherDark}"/>
      <path d="M63 46.5 Q67 45.5 70 48" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
    </g>`}function _n({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=fn(o,e,.3),l=mn(a),u=ln[r]??1,d=(i%u+u)%u/u,f,p=0;if(r===`attack`){let e=1-d;f=.55+.45*e,p=7*e}else f=.5+.5*Math.sin(d*un);let m=Math.min(1,Math.max(0,f+l.wing));return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round">${`<g transform="translate(${p} 0)">${hn(-1,m,o,c)}${hn(1,m,o,c)}${gn(o,s)}</g>`}</g>
  </svg>`}var vn={gen:_n,role:t.ally.own,variants:4,states:ln,frames:1,label:`Dragon (air · T3)`},yn={idle:4,move:6,attack:6},bn=Math.PI*2,xn=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Sn=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},Cn={wing:0};function wn(e){return e?{wing:(xn(e,2)-.5)*.12}:Cn}function Tn(e,t,n,r){let i=.42+.58*t,a=50+e*5,o=50+e*(11+20*i),s=`43 ${50+e*(6+27*i)}`,c=e*(2+3*i);return`<path d="M49 ${a} Q${s} 24 ${o} l6 ${c} l-2 ${-c*1.4} l6 ${c} l-2 ${-c*1.4} l6 ${c} Q34 ${50+e*5} 41 ${50+e*4} Z" fill="${r}"/>
    <path d="M46 ${50+e*5} Q41 ${50+e*(8+18*i)} 27 ${o-e*2}" fill="none" stroke="${n}" stroke-width="1.7"/>`}function En(e,t){return`<g stroke-width="3">
      <path d="M22 50 Q30 48 36 49 L36 51 Q30 52 22 50 Z" fill="${e}"/>
      <circle cx="20" cy="50" r="2.6" fill="${n.leatherDark}"/>
      <ellipse cx="45" cy="50" rx="13" ry="9.5" fill="${e}"/>
      <circle cx="59" cy="50" r="5.8" fill="${e}"/>
      <path d="M56 46.5 Q59 45.5 62 47.5" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
      <polygon points="67,50 58,47 58,53" fill="${n.steelLite}"/>
      <polygon points="67,50 61,48.5 61,51.5" fill="${n.leatherDark}"/>
    </g>`}function Dn(t){let r=r=>{let i=50+r*6,a=66+t,o=50+r*(9-t*.3);return`<path d="M56 ${i} Q${a-4} ${i+r*2} ${a} ${o}" fill="none" stroke="${e}" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M56 ${i} Q${a-4} ${i+r*2} ${a} ${o}" fill="none" stroke="${n.leatherLite}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M${a} ${o} l3 ${r*-1.5}" stroke="${e}" stroke-width="3" stroke-linecap="round"/>`};return`${r(-1)}${r(1)}`}function On({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=Sn(o,e,.28),l=wn(a),u=yn[r]??1,d=(i%u+u)%u/u,f,p=0,m=0;if(r===`attack`){let e=1-d;f=.55+.45*e,p=5*e,m=4*e}else f=.5+.5*Math.sin(d*bn);let h=Math.min(1,Math.max(0,f+l.wing));return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${`<g transform="translate(${m} 0)">${Tn(-1,h,o,c)}${Tn(1,h,o,c)}${En(o,s)}${Dn(p)}</g>`}</g>
  </svg>`}var kn={gen:On,role:t.ally.own,variants:4,states:yn,frames:1,label:`Griffon (melee air · T3)`},An={idle:1,move:6,attack:8},jn=Math.PI*2,Y=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Mn=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},Nn={leather:n.leatherMid,feet:7,hiDx:0,hiR:7};function Pn(e){return e?{leather:Mn(n.leatherMid,Y(e,3)<.5?n.leatherDark:n.leatherLite,.4*Y(e,1)),feet:7+(Y(e,2)-.5)*1.3,hiDx:(Y(e,4)-.5)*2.8,hiR:7+(Y(e,5)-.5)*1.5}:Nn}var X=(t,r,i,a,o=4.6)=>`<line x1="${t}" y1="${r}" x2="${i}" y2="${a}" stroke="${e}" stroke-width="${o+2.6}" stroke-linecap="round"/><line x1="${t}" y1="${r}" x2="${i}" y2="${a}" stroke="${n.leatherMid}" stroke-width="${o}" stroke-linecap="round"/>`,Fn=`<g stroke-width="2.6">
    <rect x="30" y="42" width="7" height="16" rx="3" fill="${n.leatherDark}" transform="rotate(-18 33 50)"/>
    <line x1="31" y1="41" x2="27" y2="35" stroke="${e}" stroke-width="3.2"/><line x1="31" y1="41" x2="27" y2="35" stroke="${n.fletch}" stroke-width="1.4"/>
    <line x1="34" y1="41" x2="32" y2="34" stroke="${e}" stroke-width="3.2"/><line x1="34" y1="41" x2="32" y2="34" stroke="${n.fletch}" stroke-width="1.4"/>
    <line x1="37" y1="42" x2="37" y2="34" stroke="${e}" stroke-width="3.2"/><line x1="37" y1="42" x2="37" y2="34" stroke="${n.fletch}" stroke-width="1.4"/>
  </g>`;function In(e,t,n=0,r=Nn){return`<g stroke-width="3.3">
      <ellipse cx="${44+n}" cy="34" rx="${r.feet}" ry="${r.feet-2}" fill="${r.leather}"/>
      <ellipse cx="${44-n}" cy="66" rx="${r.feet}" ry="${r.feet-2}" fill="${r.leather}"/>
      <ellipse cx="47" cy="50" rx="15" ry="15.5" fill="${e}"/>
      <ellipse cx="${44+r.hiDx}" cy="45.5" rx="${r.hiR}" ry="${r.hiR-1}" fill="${t}"/>
    </g>
    <path d="M59 45 Q65 47 65 50 Q65 53 59 55 Q61.5 50 59 45 Z" fill="#2a1c12"/>`}function Ln(t=0){let r=`<path d="M64 30 Q69 38 66 44 Q73 50 66 56 Q69 62 64 70" fill="none" stroke="${e}" stroke-width="7.6"/>
    <path d="M64 30 Q69 38 66 44 Q73 50 66 56 Q69 62 64 70" fill="none" stroke="${n.leatherDark}" stroke-width="5"/>
    <path d="M64 30 Q69 38 66 44 Q73 50 66 56 Q69 62 64 70" fill="none" stroke="${n.woodLite}" stroke-width="1.5"/>
    <line x1="64" y1="30.5" x2="64" y2="69.5" stroke="${n.string}" stroke-width="1.7"/>
    <circle cx="65" cy="50" r="3.6" fill="${n.skin}"/>`;return t?`<g transform="rotate(${t} 65 50)">${r}</g>`:r}function Rn(t,r){let i=74-14*t,a=i-1;return`<path d="M74 22 Q80 32 76 40 Q90 50 76 60 Q80 68 74 78" fill="none" stroke="${e}" stroke-width="8.4"/>
    <path d="M74 22 Q80 32 76 40 Q90 50 76 60 Q80 68 74 78" fill="none" stroke="${n.leatherDark}" stroke-width="5.6"/>
    <path d="M74 22 Q80 32 76 40 Q90 50 76 60 Q80 68 74 78" fill="none" stroke="${n.woodLite}" stroke-width="1.7"/>
    <path d="M74 22 L${i} 50 L74 78" fill="none" stroke="${n.string}" stroke-width="1.9"/>
    <circle cx="76" cy="50" r="3.9" fill="${n.skin}"/>
    ${r?`<line x1="${a}" y1="50" x2="97" y2="50" stroke="${e}" stroke-width="4.6" stroke-linecap="round"/>
    <line x1="${a}" y1="50" x2="97" y2="50" stroke="${n.shaft}" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="98,50 88,44 88,56" fill="${n.steel}"/><polygon points="98,50 92,47 92,53" fill="${n.steelLite}"/>`:``}`}function zn({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=Pn(a),l=An[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=(u+.5)%1,t=e<=.5?e/.5:(1-e)/.5,n=e<.5;d=`${Fn}${X(53,43,73,50)}${X(53,57,61+4*(1-t),50)}${In(o,s,0,c)}${Rn(t,n)}`}else if(r===`move`){let e=Math.sin(u*jn);d=`${Fn}${X(51,44,65,50)}${X(51,56,57,60)}${In(o,s,e*5.5,c)}${Ln(e*9)}`}else d=`${Fn}${X(51,44,65,50)}${X(51,56,57,60)}${In(o,s,0,c)}${Ln()}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var Bn={gen:zn,role:t.ally.own,variants:4,states:An,frames:1,label:`Ranger (ranged · T2)`,projectile:`arrow`},Vn={idle:1,move:4,attack:6},Hn=Math.PI*2,Un=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},Wn=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},Gn={wood:n.wood,hiDx:0};function Kn(e){return e?{wood:Wn(n.wood,Un(e,3)<.5?`#3a2712`:`#5a3c1e`,.5*Un(e,1)),hiDx:(Un(e,4)-.5)*2.2}:Gn}var Z=(e,t)=>`<rect x="${e-7}" y="${t-2.4}" width="14" height="4.8" rx="2.2" fill="#241c12"/>`;function qn(e,t,r){return`<g stroke-width="3.2">
      <rect x="26" y="42" width="30" height="16" rx="4" fill="${e}"/>
      <rect x="${29+r.hiDx}" y="45" width="12" height="6" rx="2.5" fill="${t}" stroke="none"/>
      <rect x="40" y="38" width="8" height="24" rx="3" fill="${r.wood}"/>
      <circle cx="30" cy="46" r="1.5" fill="${n.steel}"/>
      <circle cx="30" cy="54" r="1.5" fill="${n.steel}"/>
    </g>`}function Jn(t){let r=40+16*(1-t),i=t>.55;return`${`<path d="M58 28 Q52 34 56 42 Q60 46 56 50 Q60 54 56 58 Q52 66 58 72" fill="none" stroke="${e}" stroke-width="7.4"/>
    <path d="M58 28 Q52 34 56 42 Q60 46 56 50 Q60 54 56 58 Q52 66 58 72" fill="none" stroke="${n.leatherDark}" stroke-width="4.6"/>`}${`<path d="M58 28 L${r} 50 L58 72" fill="none" stroke="${n.string}" stroke-width="1.9"/>`}${i?`<line x1="${r-2}" y1="50" x2="70" y2="50" stroke="${e}" stroke-width="6.6" stroke-linecap="round"/>
       <line x1="${r-2}" y1="50" x2="70" y2="50" stroke="${n.shaft}" stroke-width="3.4" stroke-linecap="round"/>
       <polygon points="76,50 66,44 66,56" fill="${n.steel}"/><polygon points="76,50 70,47 70,53" fill="${n.steelLite}"/>`:``}`}function Yn({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=Kn(a),l=Vn[r]??1,u=(i%l+l)%l/l,d=`${Z(30,34)}${Z(52,34)}${Z(30,66)}${Z(52,66)}`,f,p=0;return r===`attack`?f=u:(r===`move`&&(p=Math.sin(u*Hn)*1.4),f=1),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${`<g transform="translate(0 ${p})">${d}${qn(o,s,c)}${Jn(f)}</g>`}</g>
  </svg>`}var Xn={gen:Yn,role:t.ally.own,variants:4,states:Vn,frames:1,label:`Ballista (siege · T3)`,projectile:`bolt`},Zn={idle:1,move:4,attack:6},Qn=Math.PI*2,$n=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};function er(e){return e?{hiDx:($n(e,4)-.5)*2.2}:{hiDx:0}}var tr=(e,t)=>`<rect x="${e-8}" y="${t-2.6}" width="16" height="5.2" rx="2.4" fill="#241c12"/>`;function nr(e,t,r){return`<g stroke-width="3.2">
      ${tr(30,33)}${tr(30,67)}
      <rect x="18" y="37" width="30" height="26" rx="4" fill="${e}"/>
      <rect x="${22+(r?r.hiDx:0)}" y="41" width="11" height="7" rx="2.5" fill="${t}" stroke="none"/>
      <line x1="22" y1="50" x2="44" y2="50" stroke="${n.wood}" stroke-width="3.2"/>
      <line x1="33" y1="39" x2="33" y2="61" stroke="${n.wood}" stroke-width="2.6"/>
      <circle cx="22" cy="42" r="1.5" fill="${n.steel}"/><circle cx="44" cy="42" r="1.5" fill="${n.steel}"/>
      <circle cx="22" cy="58" r="1.5" fill="${n.steel}"/><circle cx="44" cy="58" r="1.5" fill="${n.steel}"/>
    </g>`}function rr(t,n){let r=n<.35,i=n>.5?`<circle cx="67" cy="49" r="${7+6*n}" fill="#ffd24a" opacity="${.5*n}" stroke="none"/><circle cx="67" cy="49" r="${4+3*n}" fill="#fff2c2" opacity="${.7*n}" stroke="none"/>`:``;return`<line x1="34" y1="49.5" x2="62" y2="49" stroke="${e}" stroke-width="15" stroke-linecap="round"/>
    <line x1="34" y1="49.5" x2="62" y2="49" stroke="#2f343c" stroke-width="10.5" stroke-linecap="round"/>
    <line x1="40" y1="49.5" x2="56" y2="49" stroke="${t}" stroke-width="3"/>
    <ellipse cx="63" cy="49" rx="5" ry="5.6" fill="#1c1f24"/>
    ${r?`<circle cx="63" cy="49" r="4.4" fill="#3a3f47"/><circle cx="62" cy="47.5" r="1.5" fill="${t}" stroke="none"/>`:``}
    ${i}`}function ir({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=er(a),l=Zn[r]??1,u=(i%l+l)%l/l,d=0,f=0;return r===`attack`?d=1-u:r===`move`&&(f=Math.sin(u*Qn)*1.4),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${`<g transform="translate(0 ${f})">${nr(o,s,c)}${rr(o,d)}</g>`}</g>
  </svg>`}var ar={gen:ir,role:t.ally.own,variants:4,states:Zn,frames:1,label:`Bombard (siege · T3)`,projectile:`shell`},or=`#8a6cff`,sr=`#b9e6ff`,cr={idle:1,move:6,attack:6},lr=Math.PI*2,Q=(e,t)=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},ur=(e,t,n)=>{let r=(e,t)=>parseInt(e.slice(t,t+2),16),i=i=>Math.round(r(e,i)+(r(t,i)-r(e,i))*n).toString(16).padStart(2,`0`);return`#${i(1)}${i(3)}${i(5)}`},dr={hem:n.leatherMid,hiDx:0,hiR:6.5};function fr(e){return e?{hem:ur(n.leatherMid,Q(e,3)<.5?n.leatherDark:n.leatherLite,.4*Q(e,1)),hiDx:(Q(e,4)-.5)*2.6,hiR:6.5+(Q(e,5)-.5)*1.4}:dr}function pr(e,t,n=0,r=dr){return`<g stroke-width="3.2">
      <ellipse cx="${43+n}" cy="35" rx="6.4" ry="5" fill="${r.hem}"/>
      <ellipse cx="${43-n}" cy="65" rx="6.4" ry="5" fill="${r.hem}"/>
      <ellipse cx="44" cy="50" rx="14" ry="15" fill="${e}"/>
      <path d="M${36+r.hiDx} 40 Q${44+r.hiDx} 42 ${44+r.hiDx} 48 Q${39+r.hiDx} 45 ${34+r.hiDx} 47 Z" fill="${t}"/>
      <path d="M57 46 Q62 48 62 50 Q62 52 57 54 Q59 50 57 46 Z" fill="#241a12"/>
    </g>`}function $(t=0,r=0){let i=5.4+2*t,a=`<circle cx="66" cy="44" r="${9+8*t}" fill="${or}" opacity="${.2+.3*t}" stroke="none"/>`;return`<g transform="rotate(${r} 50 58)">${`<line x1="49" y1="63" x2="66" y2="47" stroke="${e}" stroke-width="6.6" stroke-linecap="round"/>
    <line x1="49" y1="63" x2="66" y2="47" stroke="${n.leatherLite}" stroke-width="3.4" stroke-linecap="round"/>
    ${a}
    <circle cx="66" cy="44" r="${i}" fill="${or}" stroke="${e}" stroke-width="2.6"/>
    <circle cx="66" cy="44" r="${i*.5}" fill="${t>.15?`#ffffff`:sr}" stroke="none"/>`}</g>`}function mr({side:n=`ally`,state:r=`idle`,frame:i=0,seed:a=0}={}){let{own:o,hi:s}=t[n]??t.ally,c=fr(a),l=cr[r]??1,u=(i%l+l)%l/l,d;if(r===`attack`){let e=1-u;d=`${pr(o,s,0,c)}${$(e,-6*e)}`}else if(r===`move`){let e=Math.sin(u*lr);d=`${pr(o,s,e*4,c)}${$(0,e*5)}`}else d=`${pr(o,s,0,c)}${$(0,0)}`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">${d}</g>
  </svg>`}var hr={gen:mr,role:t.ally.own,variants:4,states:cr,frames:1,label:`Sorcerer (caster · T3)`,projectile:`orb`};function gr({side:r=`ally`}={}){let{own:i}=t[r]??t.ally;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">
      <line x1="14" y1="50" x2="72" y2="50" stroke="${e}" stroke-width="8.6"/>
      <line x1="14" y1="50" x2="72" y2="50" stroke="${n.shaft}" stroke-width="4.6"/>
      <polygon points="38,50 16,50 6,41" fill="${i}"/>
      <polygon points="38,50 16,50 6,59" fill="${i}"/>
      <polygon points="92,50 68,39 68,61" fill="${n.steel}"/>
      <polygon points="92,50 76,45 76,55" fill="${n.steelLite}"/>
    </g>
  </svg>`}var _r={gen:gr,label:`Arrow`,frames:1};function vr({side:r=`ally`}={}){let{own:i,hi:a}=t[r]??t.ally;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <circle cx="50" cy="50" r="20" fill="${r===`foe`?`#7a4a44`:`#5a6472`}"/>
      <path d="M50 30 L64 42 L58 58 L40 62 L36 44 Z" fill="${i}" opacity="0.55"/>
      <path d="M44 40 L54 44 L50 54 Z" fill="${n.leatherDark}"/>
      <ellipse cx="43" cy="43" rx="6" ry="5" fill="${a}" opacity="0.5" stroke="none"/>
    </g>
  </svg>`}var yr={gen:vr,label:`Boulder`,frames:1};function br({side:r=`ally`}={}){let{own:i}=t[r]??t.ally;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
      <line x1="16" y1="50" x2="70" y2="50" stroke="${e}" stroke-width="11"/>
      <line x1="16" y1="50" x2="70" y2="50" stroke="${n.shaft}" stroke-width="6.4"/>
      <polygon points="40,50 18,50 8,43" fill="${i}"/>
      <polygon points="40,50 18,50 8,57" fill="${i}"/>
      <polygon points="92,50 66,38 66,62" fill="${n.steel}"/>
      <polygon points="92,50 74,44 74,56" fill="${n.steelLite}"/>
    </g>
  </svg>`}var xr={gen:br,label:`Bolt`,frames:1};function Sr({side:r=`ally`}={}){let{own:i,hi:a}=t[r]??t.ally;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke="${e}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <circle cx="48" cy="52" r="19" fill="#2b2f36"/>
      <path d="M31 46 A19 19 0 0 1 63 44" fill="none" stroke="${i}" stroke-width="5"/>
      <ellipse cx="41" cy="45" rx="5" ry="4" fill="#4a5058" stroke="none"/>
      <line x1="60" y1="38" x2="70" y2="28" stroke="${e}" stroke-width="4"/>
      <line x1="60" y1="38" x2="70" y2="28" stroke="${n.wood}" stroke-width="2"/>
      <circle cx="72" cy="26" r="5" fill="#ffd24a"/>
      <circle cx="72" cy="26" r="2.4" fill="${a}" stroke="none"/>
    </g>
  </svg>`}var Cr={gen:Sr,label:`Shell`,frames:1},wr=`#8a6cff`,Tr=`#b9e6ff`;function Er({side:n=`ally`}={}){let{own:r}=t[n]??t.ally;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <g stroke-linejoin="round" stroke-linecap="round">
      <path d="M14 50 Q34 46 44 50 Q34 54 14 50 Z" fill="${wr}" opacity="0.4" stroke="none"/>
      <circle cx="56" cy="50" r="17" fill="${r}" opacity="0.35" stroke="none"/>
      <circle cx="56" cy="50" r="12" fill="${wr}" stroke="${e}" stroke-width="2.6"/>
      <circle cx="56" cy="50" r="6.5" fill="${Tr}" stroke="none"/>
      <circle cx="53" cy="47" r="2.4" fill="#ffffff" stroke="none"/>
    </g>
  </svg>`}var Dr={gen:Er,label:`Arcane Orb`,frames:1},Or={archer:g,fodder:oe,infantry:ge,guard:Ce,spearman:je,catapult:Be,legionnaire:Ze,lancer:ct,shieldguard:ht,colossus:Ct,raider:At,mender:Bt,warden:Zt,raven:cn,wyrm:vn,griffon:kn,ranger:Bn,ballista:Xn,mortar:ar,wizard:hr},kr={arrow:_r,boulder:yr,bolt:xr,shell:Cr,orb:Dr},Ar={fodder:1.67,infantry:1.47,spearman:1.47,legionnaire:1.28,raider:1.28,archer:1.14,mender:1.14,raven:1.06,ranger:1.1,guard:1.07,ballista:1.22,catapult:1.38,warden:1.38,shieldguard:1.05,wizard:1.15,griffon:1.41,mortar:1.3,wyrm:1.54,colossus:1.44};function jr(e){return Math.max(3,e.body*(Ar[e.type]??1))}function Mr(e){return jr(e)*6}export{e as a,Or as i,Mr as n,t as o,kr as r,jr as t};
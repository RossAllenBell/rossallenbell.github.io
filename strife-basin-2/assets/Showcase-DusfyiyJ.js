import{n as e,t}from"./index-BszdZ7Xj.js";import{p as n}from"./dist-Be2Q1ih1.js";import{i as r,n as i,r as a}from"./unitScale-DuGsOMhn.js";var o=e(),s=t(),c=[96,64,52,40,32],l=[0,45,90,135,180,225,270,315],u=[[26,30],[78,40],[50,58],[104,26],[16,74],[64,88],[120,62],[92,80],[38,100],[136,96]],d={idle:190,move:110,attack:90};function f(){let[e,t]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=0,n=performance.now(),r=()=>{t(performance.now()-n),e=requestAnimationFrame(r)};return e=requestAnimationFrame(r),()=>cancelAnimationFrame(e)},[]),e}function p(e,t,n){let r=e.states[t]??e.frames??1;return Math.floor(n/(d[t]??120))%r}function m({def:e,side:t,state:n=`idle`,frame:r=0,px:i,rot:a=0}){return(0,s.jsx)(`span`,{className:`sp`,style:{width:i,height:i,transform:a?`rotate(${a}deg)`:void 0},dangerouslySetInnerHTML:{__html:e.gen({side:t,state:n,frame:r})}})}function h({gen:e,side:t,px:n,rot:r=0}){return(0,s.jsx)(`span`,{className:`sp`,style:{width:n,height:n,transform:r?`rotate(${r}deg)`:void 0},dangerouslySetInnerHTML:{__html:e({side:t})}})}function g({id:e,spin:t,field:n,ms:i}){let o=r[e],d=Object.keys(o.states),f=o.projectile,g=f?a[f]:void 0,_=e=>(0,s.jsx)(`div`,{className:`tokrow`,children:c.map(t=>(0,s.jsxs)(`div`,{className:`tok`,children:[(0,s.jsx)(m,{def:o,side:e,px:t}),(0,s.jsxs)(`small`,{children:[t,`px`]})]},t))});return(0,s.jsxs)(`section`,{className:`card ${n?`field`:``}`,children:[(0,s.jsxs)(`header`,{children:[(0,s.jsx)(`h2`,{children:o.label}),(0,s.jsx)(`code`,{children:e})]}),(0,s.jsxs)(`div`,{className:`block`,children:[(0,s.jsx)(`p`,{className:`cap`,children:`animation states — playing live (idle · move · attack)`}),(0,s.jsx)(`div`,{className:`states`,children:d.map(e=>(0,s.jsxs)(`div`,{className:`statecol`,children:[(0,s.jsxs)(`div`,{className:`staterow`,children:[(0,s.jsx)(m,{def:o,side:`ally`,state:e,frame:p(o,e,i),px:132}),(0,s.jsx)(m,{def:o,side:`foe`,state:e,frame:p(o,e,i),px:132})]}),(0,s.jsxs)(`div`,{className:`staterow`,children:[(0,s.jsx)(m,{def:o,side:`ally`,state:e,frame:p(o,e,i),px:52}),(0,s.jsx)(m,{def:o,side:`ally`,state:e,frame:p(o,e,i),px:40})]}),(0,s.jsx)(`small`,{children:e})]},e))})]}),g&&(0,s.jsxs)(`div`,{className:`block`,children:[(0,s.jsxs)(`p`,{className:`cap`,children:[`projectile — `,g.label,` · fired on the attack release, damage on impact (rotates to its flight)`]}),(0,s.jsx)(`div`,{className:`cols`,children:[`ally`,`foe`].map(e=>(0,s.jsxs)(`div`,{className:`projcol`,children:[(0,s.jsxs)(`div`,{className:`staterow`,children:[(0,s.jsx)(h,{gen:g.gen,side:e,px:92}),(0,s.jsx)(h,{gen:g.gen,side:e,px:52,rot:45}),(0,s.jsx)(h,{gen:g.gen,side:e,px:40,rot:-35})]}),(0,s.jsx)(`div`,{className:`runway`,children:(0,s.jsx)(`span`,{className:`fly`,children:(0,s.jsx)(h,{gen:g.gen,side:e,px:30})})}),(0,s.jsxs)(`small`,{children:[e,` · in flight`]})]},e))})]}),(0,s.jsx)(`div`,{className:`block`,children:(0,s.jsxs)(`div`,{className:`cols`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`cap`,children:`ally · sizes (idle)`}),_(`ally`)]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`cap`,children:`foe · sizes (idle)`}),_(`foe`)]})]})}),(0,s.jsxs)(`div`,{className:`block`,children:[(0,s.jsxs)(`p`,{className:`cap`,children:[`360° facing — ONE sprite rotated to its heading (foe = +180)`,t?` · live`:``]}),(0,s.jsxs)(`div`,{className:`tokrow`,children:[t?(0,s.jsxs)(`div`,{className:`tok`,children:[(0,s.jsx)(`span`,{className:`spinner`,children:(0,s.jsx)(m,{def:o,side:`ally`,px:64})}),(0,s.jsx)(`small`,{children:`spin`})]}):null,l.map(e=>(0,s.jsxs)(`div`,{className:`tok`,children:[(0,s.jsx)(m,{def:o,side:`ally`,px:56,rot:e}),(0,s.jsxs)(`small`,{children:[e,`°`]})]},e))]})]}),(0,s.jsxs)(`div`,{className:`block`,children:[(0,s.jsx)(`p`,{className:`cap`,children:`crowd — dense overlap reads as a horde, not soup (attack pose)`}),(0,s.jsx)(`div`,{className:`crowds`,children:[`ally`,`foe`].map(e=>(0,s.jsx)(`div`,{className:`crowd`,children:u.map(([t,n],r)=>(0,s.jsx)(`span`,{className:`crowd-u`,style:{left:t,top:n},children:(0,s.jsx)(m,{def:o,side:e,state:`attack`,frame:p(o,`attack`,i+r*60),px:48})},r))},e))})]})]})}var _=[`idle`,`move`,`attack`];function v({ms:e}){let t=Object.keys(r).map(e=>({id:e,def:n[e],px:i(n[e])})).sort((e,t)=>e.px-t.px);return(0,s.jsxs)(`section`,{className:`card scale`,children:[(0,s.jsxs)(`header`,{children:[(0,s.jsx)(`h2`,{children:`To scale — every unit at its in-game size`}),(0,s.jsx)(`code`,{children:`renderer/unitScale.ts`})]}),(0,s.jsxs)(`p`,{className:`cap`,children:[`Each unit as a formation of three at its real in-game px — static · moving · attacking, on a shared ground line. Tune `,(0,s.jsx)(`code`,{children:`VISUAL_SCALE`}),` in `,(0,s.jsx)(`code`,{children:`renderer/unitScale.ts`}),` to recalibrate.`]}),(0,s.jsx)(`div`,{className:`formation-grid`,children:t.map(({id:t,def:n,px:i})=>{let a=r[t];return(0,s.jsxs)(`div`,{className:`form`,children:[(0,s.jsx)(`div`,{className:`form-units`,children:_.map(t=>(0,s.jsx)(`span`,{className:`lu-art`,style:{width:i,height:i},children:(0,s.jsx)(m,{def:a,side:`ally`,state:t,frame:p(a,t,e),px:i})},t))}),(0,s.jsxs)(`div`,{className:`form-label`,children:[(0,s.jsx)(`b`,{children:n.name}),` · `,Math.round(i),`px`]})]},t)})})]})}function y(){let[e,t]=(0,o.useState)(!1),[n,i]=(0,o.useState)(!1),a=f(),c=Object.keys(r);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`style`,{dangerouslySetInnerHTML:{__html:b}}),(0,s.jsxs)(`div`,{className:`showcase`,children:[(0,s.jsxs)(`div`,{className:`topbar`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h1`,{children:`Strife Basin — Art Showcase`}),(0,s.jsxs)(`p`,{className:`sub`,children:[`Production sprite generators (`,c.length,` units). Same modules the renderer + gate import. 100% top-down, chunky flat-vector; canonical facing = right, rotated to any heading.`]})]}),(0,s.jsxs)(`div`,{className:`controls`,children:[(0,s.jsxs)(`label`,{children:[(0,s.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>i(e.target.checked)}),` map dirt`]}),(0,s.jsxs)(`label`,{children:[(0,s.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked)}),` live spin`]}),(0,s.jsx)(`a`,{href:`?board`,children:`legacy look-board →`})]})]}),(0,s.jsx)(v,{ms:a}),c.map(t=>(0,s.jsx)(g,{id:t,spin:e,field:n,ms:a},t))]})]})}var b=`
  :root { --bg:#14161d; --panel:#1b1e27; --lane:#20242e; --dirt:#3b352d; --ink:#0c0d11; --tx:#d6dae3; --dim:#8b93a3; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--tx); font: 14px/1.5 -apple-system, Segoe UI, Roboto, sans-serif; }
  .showcase { padding: 22px 28px 80px; }
  .topbar { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; flex-wrap: wrap; margin-bottom: 8px; }
  h1 { font-size: 22px; margin: 0 0 2px; letter-spacing: .3px; }
  .sub { color: var(--dim); margin: 0; max-width: 720px; }
  .controls { display: flex; gap: 16px; align-items: center; color: var(--dim); font-size: 13px; }
  .controls label { display: flex; gap: 6px; align-items: center; cursor: pointer; user-select: none; }
  .controls a { color: #7fa7e6; text-decoration: none; }
  .controls a:hover { text-decoration: underline; }

  .card { background: var(--panel); border: 1px solid #2a2f3c; border-radius: 12px; padding: 16px 18px; margin-top: 18px; }
  .card header { display: flex; align-items: baseline; gap: 10px; border-bottom: 1px solid #2a2f3c; padding-bottom: 8px; margin-bottom: 12px; }
  .card h2 { font-size: 16px; margin: 0; }
  code { background: #0d0f15; padding: 1px 6px; border-radius: 4px; color: #c8b28a; font-size: 12px; }

  .block { margin: 14px 0; }
  .cap { color: var(--dim); font-size: 12px; margin: 0 0 8px; }
  .cols { display: flex; gap: 26px; flex-wrap: wrap; }

  /* No shadows — the field is fully top-down (owner call), so units + projectiles read flat. */
  .sp { display: inline-flex; }
  .sp svg { display: block; }
  .card .sp svg { width: 100%; height: 100%; }

  .projcol { display: flex; flex-direction: column; gap: 8px; align-items: flex-start; background: var(--lane); border-radius: 10px; padding: 12px 16px; }
  .projcol small { color: var(--tx); font-size: 12px; font-weight: 600; }
  .runway { position: relative; width: 260px; height: 34px; background: #0e1017; border-radius: 8px; overflow: hidden; }
  .fly { position: absolute; top: 50%; margin-top: -15px; animation: fly 1.3s linear infinite; }
  @keyframes fly { from { left: -10%; } to { left: 100%; } }
  .card.field .projcol { background: #4a4335; }

  .states { display: flex; gap: 22px; flex-wrap: wrap; }
  .statecol { display: flex; flex-direction: column; align-items: center; gap: 6px; background: var(--lane); border-radius: 10px; padding: 12px 16px; }
  .statecol small { color: var(--tx); font-size: 12px; text-transform: capitalize; font-weight: 600; }
  .staterow { display: flex; gap: 8px; align-items: flex-end; }

  .tokrow { display: flex; gap: 12px; align-items: flex-end; flex-wrap: wrap; }
  .tok { display: flex; flex-direction: column; align-items: center; gap: 4px; background: var(--lane); border-radius: 8px; padding: 8px; }
  .tok small { color: var(--dim); font-size: 11px; }

  .crowds { display: flex; gap: 20px; flex-wrap: wrap; }
  .crowd { position: relative; width: 200px; height: 165px; background: var(--lane); border-radius: 8px; }
  .crowd-u { position: absolute; }

  .card.field { background: var(--dirt); border-color: #2a251d; }
  .card.field .tok, .card.field .crowd, .card.field .statecol { background: #4a4335; }
  .card.field code { background: #2a251d; }

  .spinner { display: inline-flex; animation: spin 4s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* To-scale block — each unit a 3-formation (static·moving·attacking) at real in-game px, feet on a shared
     ground line; formations packed into a block so the roster reads together (the calibration surface). */
  .card.scale .formation-grid { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 18px 22px; background: var(--dirt); border: 1px solid #2a251d; border-radius: 10px; padding: 22px 20px 16px; }
  .form { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .form-units { display: flex; align-items: flex-end; gap: 5px; }
  .lu-art { display: inline-flex; }
  .lu-art .sp { width: 100%; height: 100%; }
  .form-label { color: var(--tx); font-size: 12px; white-space: nowrap; }
  .form-label b { font-weight: 600; }
`;export{y as Showcase};
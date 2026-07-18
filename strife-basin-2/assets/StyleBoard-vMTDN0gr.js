import{t as e}from"./index-C-YSKOlV.js";var t=`:root{--bg:#14161d;--lane:#191b24;--ink:#0c0d11;--tx:#d6dae3;--dim:#8b93a3;}
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--tx);font:14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;padding:28px 34px 60px}
  h1{font-size:24px;margin:0 0 2px;letter-spacing:.3px}
  h2{font-size:15px;text-transform:uppercase;letter-spacing:1.2px;color:#9fb0d6;margin:34px 0 12px;border-bottom:1px solid #2a2f3c;padding-bottom:6px}
  .sub{color:var(--dim);margin:0 0 6px;max-width:1000px}
  .scene{width:100%;border-radius:10px;overflow:hidden;border:1px solid #2a2f3c;box-shadow:0 8px 30px rgba(0,0,0,.4)}
  .grid{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;background:var(--lane);border:1px solid #2a2f3c;border-radius:10px;padding:18px 14px 10px}
  .cell{text-align:center;padding:4px}
  .cell svg{display:block;margin:0 auto}
  .nm{font-weight:600;margin-top:4px;font-size:13px}
  .rl{color:var(--dim);font-size:11px}
  .legend{display:flex;flex-wrap:wrap;gap:8px}
  .lg{display:flex;align-items:center;gap:8px;background:var(--lane);border:1px solid #2a2f3c;border-radius:8px;padding:7px 12px;width:232px}
  .lg b{font-size:12px}.lg small{color:var(--dim);font-size:11px}
  .sw{display:inline-block;width:70px;height:42px;border-radius:6px;margin:3px;vertical-align:top;position:relative;border:1px solid #000}
  .sw span{position:absolute;left:4px;bottom:3px;font-size:9px;color:#0009;background:#fffc;padding:0 3px;border-radius:2px}
  .foe{--own:#c0463c;--own-hi:#e06a5c}
  .notes{background:var(--lane);border:1px solid #2a2f3c;border-radius:10px;padding:14px 20px;max-width:1040px}
  .notes li{margin:5px 0}
  code{background:#0d0f15;padding:1px 5px;border-radius:4px;color:#c8b28a;font-size:12px}
  .rotrow{display:flex;gap:10px;flex-wrap:wrap;background:var(--lane);border:1px solid #2a2f3c;border-radius:10px;padding:16px}
  .rotrow .cell svg{background:#20242e;border-radius:8px}`,n=`<!-- ================= UNIT SYMBOL LIBRARY — TOP-DOWN (plan view + slight front lean). =================
     Canonical facing = RIGHT (+x). The engine ROTATES the whole sprite to the unit's heading, so one asset
     covers every direction (foe = rotate 180). Lighting is top-down/flat (crown catches light from above) so
     rotation never reveals an inconsistent key light. Ownership lives in CSS var --own/--own-hi (ally-blue
     default; a .foe wrapper flips it to red) — the same recolor-by-owner mechanism the real renderer uses. -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>

  <symbol id="u-militia" viewBox="0 0 100 100">
    <ellipse cx="47" cy="54" rx="23" ry="19" fill="#000" opacity=".18"/>
    <g stroke="#0c0d11" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round">
      <!-- body (leather) -->
      <ellipse cx="44" cy="51" rx="15" ry="16" fill="#7a5638"/>
      <!-- shoulders -->
      <ellipse cx="42" cy="34" rx="9" ry="6" fill="#8a6a44"/><ellipse cx="42" cy="68" rx="9" ry="6" fill="#6f4e30"/>
      <!-- buckler (owner) trailing flank -->
      <ellipse cx="33" cy="64" rx="9" ry="7.5" fill="#8a6a44"/><ellipse cx="33" cy="64" rx="6" ry="5" fill="var(--own,#4a7fd6)"/><circle cx="33" cy="64" r="2.2" fill="#d9a441"/>
      <!-- tunic (owner) chest front -->
      <ellipse cx="46" cy="51" rx="11" ry="13" fill="var(--own,#4a7fd6)"/><path d="M46 39 L46 63" stroke="var(--own-hi,#6fa0e8)" stroke-width="2.5"/>
      <!-- stubby spear forward -->
      <path d="M56 45.5 L82 46.5 L82 49.5 L56 48.5 Z" fill="#6f4e30"/><polygon points="82,43 94,47.5 82,52" fill="#c2cad6"/>
      <!-- head: leather cap + FACE at the front -->
      <ellipse cx="59" cy="51" rx="10" ry="9.5" fill="#7a5638"/>
      <path d="M59 44 Q68 47 68 51 Q68 55 59 58 Q61 51 59 44 Z" fill="#d8a878"/>
      <rect x="61" y="50" width="6" height="2.4" rx="1" fill="#3a291a"/>
    </g>
  </symbol>

  <symbol id="u-swordsman" viewBox="0 0 100 100">
    <ellipse cx="47" cy="54" rx="27" ry="23" fill="#000" opacity=".2"/>
    <g stroke="#0c0d11" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
      <!-- torso/chest facing the camera (no rear cape = we see the front) -->
      <ellipse cx="44" cy="51" rx="19" ry="20" fill="#5b6577"/>
      <!-- pauldrons N/S -->
      <ellipse cx="41" cy="31" rx="11" ry="7.5" fill="#8a94a6"/><ellipse cx="41" cy="71" rx="11" ry="7.5" fill="#7a828f"/>
      <!-- shield disc (owner) on the trailing flank -->
      <ellipse cx="33" cy="67" rx="11" ry="9" fill="#8a94a6"/><ellipse cx="33" cy="67" rx="8" ry="6.5" fill="var(--own,#4a7fd6)"/><circle cx="33" cy="67" r="2.6" fill="#d9a441"/>
      <!-- chest tabard (owner) = big front colour mass -->
      <ellipse cx="47" cy="51" rx="13.5" ry="16" fill="var(--own,#4a7fd6)"/><path d="M47 36 L47 66" stroke="var(--own-hi,#6fa0e8)" stroke-width="3"/>
      <path d="M36 41 Q47 37 58 41" fill="none" stroke="#d9a441" stroke-width="2.4"/>
      <!-- sword forward -->
      <path d="M58 34 L86 35 L98 37.5 L86 40 L58 39 Z" fill="#c2cad6"/><path d="M60 37.5 L92 38" stroke="#8a94a6" stroke-width="1.1"/><rect x="55" y="33" width="6" height="9" rx="1.5" fill="#d9a441"/>
      <!-- plume (owner) trailing from the crown -->
      <path d="M56 44 Q49 39 42 42 Q49 47 56 52 Z" fill="var(--own,#4a7fd6)"/>
      <!-- helmet dome + FACE at the front (visor slit + nasal) = we see the face -->
      <ellipse cx="62" cy="51" rx="12.5" ry="12" fill="#8a94a6"/>
      <path d="M62 40 Q74 44 74 51 Q74 58 62 62 Q65 51 62 40 Z" fill="#4a5160"/>
      <path d="M63 45 Q71 46.5 74 50" fill="none" stroke="#8a94a6" stroke-width="1.6"/>
      <rect x="64" y="49.5" width="10" height="3" rx="1" fill="#12151a"/><rect x="68.5" y="46" width="2.4" height="11" fill="#2b303a"/>
    </g>
  </symbol>

  <symbol id="u-sentinel" viewBox="0 0 100 100">
    <ellipse cx="47" cy="54" rx="30" ry="25" fill="#000" opacity=".2"/>
    <g stroke="#0c0d11" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
      <!-- torso (no rear cape) -->
      <ellipse cx="42" cy="51" rx="19" ry="21" fill="#5b6577"/>
      <ellipse cx="40" cy="29" rx="12" ry="7.5" fill="#8a94a6"/><ellipse cx="40" cy="73" rx="12" ry="7.5" fill="#7a828f"/>
      <!-- helm + face peeking behind the shield -->
      <ellipse cx="52" cy="51" rx="11" ry="10.5" fill="#8a94a6"/>
      <path d="M52 42 Q61 45 61 51 Q61 57 52 60 Q55 51 52 42 Z" fill="#4a5160"/><rect x="54" y="49.5" width="8" height="2.8" rx="1" fill="#12151a"/>
      <!-- spear poking past the shield -->
      <rect x="60" y="49.5" width="26" height="3" fill="#4c351f"/><polygon points="84,48 96,51 84,54" fill="#c2cad6"/>
      <!-- BIG shield held FORWARD (owner) = the tank tell + owner mass -->
      <ellipse cx="66" cy="51" rx="16" ry="22" fill="#8a94a6"/>
      <ellipse cx="67" cy="51" rx="12.5" ry="18" fill="var(--own,#4a7fd6)"/>
      <path d="M67 34 L67 68" stroke="var(--own-hi,#6fa0e8)" stroke-width="3.5"/><path d="M56 51 L79 51" stroke="#d9a441" stroke-width="2.5"/><circle cx="68" cy="51" r="5" fill="#d9a441"/>
    </g>
  </symbol>

  <symbol id="u-archer" viewBox="0 0 100 100">
    <ellipse cx="47" cy="54" rx="26" ry="22" fill="#000" opacity=".18"/>
    <g stroke="#0c0d11" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
      <!-- body (leather), no rear cape -->
      <ellipse cx="43" cy="51" rx="16" ry="17" fill="#7a5638"/>
      <ellipse cx="41" cy="35" rx="8" ry="5.5" fill="#8a6a44"/><ellipse cx="41" cy="67" rx="8" ry="5.5" fill="#6f4e30"/>
      <!-- chest tabard (owner) front -->
      <ellipse cx="45" cy="51" rx="11" ry="14" fill="var(--own,#4a7fd6)"/><path d="M45 38 L45 64" stroke="var(--own-hi,#6fa0e8)" stroke-width="2.5"/>
      <!-- hood (owner) + FACE at the front -->
      <ellipse cx="57" cy="51" rx="10" ry="9.5" fill="var(--own,#4a7fd6)"/>
      <path d="M57 44 Q65 47 65 51 Q65 55 57 58 Q59 51 57 44 Z" fill="#d8a878"/><rect x="59" y="50" width="5.5" height="2.3" rx="1" fill="#3a291a"/>
      <!-- big bold bow arc across the leading edge + arrow forward = ranged tell -->
      <path d="M76 27 Q97 51 76 75" fill="none" stroke="#6f4e30" stroke-width="5.5"/>
      <path d="M77 28 L77 74" fill="none" stroke="#d8d2c4" stroke-width="1.5"/>
      <path d="M60 51 L96 51" stroke="#9c7350" stroke-width="2.4"/><polygon points="96,51 88,46 88,56" fill="#8a94a6"/>
    </g>
  </symbol>

  <symbol id="u-catapult" viewBox="0 0 100 100">
    <ellipse cx="50" cy="54" rx="34" ry="26" fill="#000" opacity=".2"/>
    <g stroke="#0c0d11" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
      <!-- wheels (4, on the flanks) -->
      <g fill="#3a291a"><ellipse cx="34" cy="29" rx="7" ry="4.2"/><ellipse cx="60" cy="29" rx="7" ry="4.2"/><ellipse cx="34" cy="73" rx="7" ry="4.2"/><ellipse cx="60" cy="73" rx="7" ry="4.2"/></g>
      <!-- frame (rectangle from above), long axis = facing -->
      <path d="M28 36 L66 36 L66 66 L28 66 Z" fill="#6f4e30"/><path d="M28 36 L66 36 L66 41 L28 41 Z" fill="#8a6a44"/>
      <!-- owner cloth draped on the frame (team mark), full width -->
      <path d="M38 39 L62 39 L62 63 L38 63 Z" fill="var(--own,#4a7fd6)"/><path d="M50 39 L50 63" stroke="var(--own-hi,#6fa0e8)" stroke-width="3"/>
      <!-- counterweight box (rear) -->
      <path d="M22 45 L34 45 L34 57 L22 57 Z" fill="#4a5160"/><path d="M22 45 L34 45 L34 49 L22 49 Z" fill="#5b6577"/>
      <!-- throwing arm running forward + pivot -->
      <path d="M40 48 L86 48 L86 54 L40 54 Z" fill="#8a6a44"/><path d="M40 48 L86 48 L86 50 L40 50 Z" fill="#9c7350"/>
      <circle cx="47" cy="51" r="4" fill="#3a2c1c"/>
      <!-- sling cup + boulder at the front tip -->
      <path d="M82 44 L95 46 L93 56 L82 58 Z" fill="#4c351f"/><circle cx="88" cy="51" r="6.2" fill="#7d7568"/><circle cx="86" cy="49" r="3.2" fill="#e08a3c"/>
      <!-- owner pennant at a rear corner (bigger) -->
      <path d="M30 40 L30 15" stroke="#4c351f" stroke-width="2.5"/><polygon points="30,15 52,19.5 30,30" fill="var(--own,#4a7fd6)"/><polygon points="30,15 52,19.5 30,22" fill="var(--own-hi,#6fa0e8)"/>
    </g>
  </symbol>

  <symbol id="u-cleric" viewBox="0 0 100 100">
    <ellipse cx="49" cy="54" rx="24" ry="21" fill="#000" opacity=".18"/>
    <ellipse cx="49" cy="52" rx="30" ry="26" fill="#4fd0e0" opacity=".15"/>
    <g stroke="#0c0d11" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
      <!-- robe circle: cream base + big owner overlay -->
      <ellipse cx="46" cy="52" rx="20" ry="20" fill="#c9b487"/>
      <ellipse cx="46" cy="52" rx="16" ry="17" fill="var(--own,#4a7fd6)"/>
      <path d="M46 35 L47 69" stroke="var(--own-hi,#6fa0e8)" stroke-width="3"/>
      <!-- hood/head toward the front -->
      <ellipse cx="56" cy="52" rx="9" ry="8.5" fill="#c9b487"/><ellipse cx="58" cy="52" rx="5" ry="5" fill="#d8a878"/>
      <!-- staff + big glowing cyan cross forward = support tell + heading -->
      <path d="M52 41 L74 30" stroke="#6f4e30" stroke-width="3.5"/>
      <circle cx="75" cy="29" r="12" fill="#4fd0e0" opacity=".3"/>
      <g fill="#d9a441"><rect x="71" y="20" width="8" height="20" rx="1.5"/><rect x="65" y="26" width="20" height="7" rx="1.5"/></g>
      <rect x="73.5" y="21.5" width="3" height="17" fill="#f4e2a0"/>
    </g>
  </symbol>

  <symbol id="u-sorcerer" viewBox="0 0 100 100">
    <ellipse cx="49" cy="54" rx="23" ry="20" fill="#000" opacity=".18"/>
    <ellipse cx="49" cy="52" rx="28" ry="24" fill="#9a6ff0" opacity=".13"/>
    <g stroke="#0c0d11" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
      <!-- robe circle (owner) -->
      <ellipse cx="46" cy="52" rx="19.5" ry="19.5" fill="#464e5c"/>
      <ellipse cx="46" cy="52" rx="16" ry="17" fill="var(--own,#4a7fd6)"/>
      <path d="M46 36 L47 68" stroke="var(--own-hi,#6fa0e8)" stroke-width="3"/>
      <!-- hood/head + pointed-hat tip toward front -->
      <ellipse cx="55" cy="52" rx="8.5" ry="8" fill="var(--own,#4a7fd6)"/><ellipse cx="57" cy="52" rx="4.5" ry="4.5" fill="#d8a878"/>
      <!-- wand toward the orb -->
      <path d="M58 51 L71 50" stroke="#5a4a2f" stroke-width="2.5"/>
      <!-- floating violet star at the leading edge = caster tell + heading -->
      <g transform="translate(80,50)" stroke="none">
        <circle r="12" fill="#9a6ff0" opacity=".3"/>
        <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#c6a8ff"/>
        <polygon points="0,-6.5 1.9,-1.9 6.5,0 1.9,1.9 0,6.5 -1.9,1.9 -6.5,0 -1.9,-1.9" fill="#f0e6ff"/>
      </g>
    </g>
  </symbol>

  <symbol id="u-colossus" viewBox="0 0 100 100">
    <ellipse cx="49" cy="54" rx="33" ry="28" fill="#000" opacity=".22"/>
    <g stroke="#0c0d11" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">
      <!-- massive torso (no rear cape) -->
      <ellipse cx="43" cy="51" rx="23" ry="24" fill="#5b6577"/>
      <!-- enormous pauldrons N/S -->
      <ellipse cx="41" cy="26" rx="15" ry="9" fill="#8a94a6"/><ellipse cx="41" cy="76" rx="15" ry="9" fill="#7a828f"/>
      <!-- chest surcoat (owner) = big front colour mass -->
      <ellipse cx="46" cy="51" rx="16" ry="19" fill="var(--own,#4a7fd6)"/><path d="M46 33 L46 69" stroke="var(--own-hi,#6fa0e8)" stroke-width="3.5"/>
      <path d="M34 40 Q46 35 58 40" fill="none" stroke="#d9a441" stroke-width="2.6"/>
      <!-- warhammer forward (chunky head = distinct from the Swordsman's blade) -->
      <rect x="60" y="33" width="30" height="5" rx="1" fill="#6f4e30"/>
      <path d="M84 26 L98 26 L98 45 L84 45 Z" fill="#4a5160"/><path d="M84 26 L98 26 L98 31 L84 31 Z" fill="#5b6577"/><path d="M84 40 L98 40 L98 45 L84 45 Z" fill="#2f3542"/>
      <rect x="57" y="30" width="8" height="12" rx="2" fill="#d9a441"/>
      <!-- plume (owner) trailing from the crown -->
      <path d="M52 42 Q44 36 36 40 Q44 46 52 53 Z" fill="var(--own,#4a7fd6)"/>
      <!-- helm + FACE at the front -->
      <ellipse cx="61" cy="51" rx="14.5" ry="13.5" fill="#8a94a6"/>
      <path d="M61 38 Q75 43 75 51 Q75 59 61 64 Q64 51 61 38 Z" fill="#4a5160"/>
      <path d="M62 44 Q71 46 75 50" fill="none" stroke="#8a94a6" stroke-width="1.8"/>
      <rect x="63" y="49" width="12" height="3.4" rx="1" fill="#12151a"/><rect x="68.5" y="44.5" width="2.8" height="13" fill="#2b303a"/>
    </g>
  </symbol>

  <symbol id="u-griffon" viewBox="0 0 100 100">
    <ellipse cx="52" cy="62" rx="18" ry="7" fill="#000" opacity=".16"/>
    <g stroke="#0c0d11" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round">
      <!-- tail to the rear -->
      <path d="M36 50 Q22 46 14 50 Q22 54 36 51 Z" fill="#9a8c72"/>
      <!-- wings SPREAD (N & S) = the air tell from above -->
      <path d="M50 44 Q36 22 16 16 Q26 28 26 38 Q34 34 48 46 Z" fill="#8a919d"/>
      <path d="M50 44 Q36 26 22 22 M44 40 Q34 30 30 26" fill="none" stroke="#c2cad6" stroke-width="1.3"/>
      <path d="M50 56 Q36 78 16 84 Q26 72 26 62 Q34 66 48 54 Z" fill="#767f8c"/>
      <path d="M50 56 Q36 74 22 78 M44 60 Q34 70 30 74" fill="none" stroke="#5f6773" stroke-width="1.3"/>
      <!-- owner flashes bled into the wing roots (bigger ownership mass) -->
      <path d="M48 45 L38 41 L45 48 Z" fill="var(--own,#4a7fd6)"/><path d="M48 55 L38 59 L45 52 Z" fill="var(--own,#4a7fd6)"/>
      <!-- body (tan) + big owner saddle-cloth centred -->
      <ellipse cx="52" cy="50" rx="17" ry="13" fill="#b8ab90"/>
      <ellipse cx="50" cy="50" rx="13" ry="11" fill="var(--own,#4a7fd6)"/><path d="M50 40 L50 60" stroke="var(--own-hi,#6fa0e8)" stroke-width="3"/><path d="M39 50 L61 50" stroke="#d9a441" stroke-width="2"/><circle cx="50" cy="50" r="3" fill="#d9a441"/>
      <!-- talons tucked tight under the body -->
      <path d="M59 61 L57 66 L63 63 Z" fill="#d9a441"/>
      <!-- raptor head + fierce slit eye + hooked beak forward = heading -->
      <ellipse cx="70" cy="50" rx="7" ry="6" fill="#cbc0a8"/>
      <path d="M65 47 Q69 45.5 72 47" fill="none" stroke="#8b7f68" stroke-width="1.6"/>
      <ellipse cx="70" cy="50" rx="2" ry="1.3" fill="#0c0d11"/>
      <path d="M77 49 L90 50.5 L82 54 L81 51 Z" fill="#d9a441"/><path d="M84 51 L81 51.5" stroke="#b8862f" stroke-width="1.2"/>
    </g>
  </symbol>
</defs></svg>

<h1>Strife Basin 2 — Art Style Board <span style="color:#7f8aa0;font-weight:400;font-size:15px">· Heroic Warband · top-down · Pass 3</span></h1>
<p class="sub">Direction-setting draft for approval. <b>Color = ownership</b> (blue ally / red foe) · <b>silhouette = role</b>. Grim-heroic medieval steel + a restrained arcane accent; chunky flat-vector, cel shading, one ink outline. <b>Top-down camera</b>: every unit is drawn once in a canonical facing (right), seen from above but tilted so we read its <b>front</b> (face + chest), and the engine <b>rotates the sprite to its heading</b> — one asset per unit covers every direction (foe = rotate 180). Ownership is a big centred colour mass (chest tabard / shield-disc / robe / banner) read from above. Bespoke hero art to lock the look — production sprites become a seeded generator once you approve the direction.</p>

<!-- ============ ROTATION MODEL ============ -->
<h2>The production model — one sprite, rotated to face its heading</h2>
<p class="sub">Why top-down showing the <i>front</i> (not a side profile): the sprite is symmetric enough about its facing that the engine just spins it to the movement/attack direction. A side profile would need a different asset per direction; this needs ONE. The face + weapon form a directional "nose" so the facing always reads. (We see the front — face + chest — not the back.)</p>
<div class="rotrow">
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><g transform="rotate(0 50 50)"><use href="#u-swordsman"/></g></svg><div class="rl">0° · E</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><g transform="rotate(45 50 50)"><use href="#u-swordsman"/></g></svg><div class="rl">45° · SE</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><g transform="rotate(90 50 50)"><use href="#u-swordsman"/></g></svg><div class="rl">90° · S</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><g transform="rotate(135 50 50)"><use href="#u-swordsman"/></g></svg><div class="rl">135° · SW</div></div>
  <div class="cell foe"><svg viewBox="0 0 100 100" width="112"><g transform="rotate(180 50 50)"><use href="#u-swordsman"/></g></svg><div class="rl">180° · W (foe)</div></div>
  <div class="cell foe"><svg viewBox="0 0 100 100" width="112"><g transform="rotate(225 50 50)"><use href="#u-swordsman"/></g></svg><div class="rl">225° · NW (foe)</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><g transform="rotate(270 50 50)"><use href="#u-swordsman"/></g></svg><div class="rl">270° · N</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><g transform="rotate(315 50 50)"><use href="#u-swordsman"/></g></svg><div class="rl">315° · NE</div></div>
</div>

<!-- ============ SCENE ============ -->
<h2>The Battlefield — "Strife Basin" (pure top-down map)</h2>
<div class="scene">
<svg viewBox="0 0 1200 480" width="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="mapv" cx="50%" cy="46%" r="72%"><stop offset="50%" stop-color="#6a625a"/><stop offset="100%" stop-color="#403a33"/></radialGradient>
  </defs>
  <!-- flat overhead ground (no sky, no horizon, no perspective) -->
  <rect x="0" y="0" width="1200" height="480" fill="url(#mapv)"/>
  <ellipse cx="600" cy="215" rx="520" ry="150" fill="#7d7568" opacity=".14"/>
  <!-- the lane: a worn dirt path connecting the two walls -->
  <path d="M150 250 C 400 210, 800 286, 1050 240" fill="none" stroke="#4a4238" stroke-width="52" stroke-opacity=".45" stroke-linecap="round"/>
  <path d="M150 250 C 400 210, 800 286, 1050 240" fill="none" stroke="#554c40" stroke-width="20" stroke-opacity=".4" stroke-linecap="round"/>
  <!-- rocks (top-down pebbles: shadow + body + highlight) -->
  <g stroke="#0c0d11" stroke-width="2" stroke-linejoin="round">
    <g transform="translate(460,150)"><ellipse cx="2" cy="6" rx="18" ry="12" fill="#000" opacity=".14" stroke="none"/><path d="M-16 0 Q-14 -12 0 -13 Q16 -12 17 2 Q14 13 -2 12 Q-16 10 -16 0 Z" fill="#6b645a"/><path d="M-9 -5 Q-2 -9 7 -6 Q3 -1 -5 -1 Z" fill="#847c70"/></g>
    <g transform="translate(690,352) scale(1.15)"><ellipse cx="2" cy="6" rx="18" ry="12" fill="#000" opacity=".14" stroke="none"/><path d="M-16 0 Q-14 -12 0 -13 Q16 -12 17 2 Q14 13 -2 12 Q-16 10 -16 0 Z" fill="#6b645a"/><path d="M-9 -5 Q-2 -9 7 -6 Q3 -1 -5 -1 Z" fill="#847c70"/></g>
    <g transform="translate(360,378) scale(.8)"><ellipse cx="2" cy="6" rx="18" ry="12" fill="#000" opacity=".14" stroke="none"/><path d="M-16 0 Q-14 -12 0 -13 Q16 -12 17 2 Q14 13 -2 12 Q-16 10 -16 0 Z" fill="#6b645a"/><path d="M-9 -5 Q-2 -9 7 -6 Q3 -1 -5 -1 Z" fill="#847c70"/></g>
    <g transform="translate(860,120) scale(.7)"><ellipse cx="2" cy="6" rx="18" ry="12" fill="#000" opacity=".14" stroke="none"/><path d="M-16 0 Q-14 -12 0 -13 Q16 -12 17 2 Q14 13 -2 12 Q-16 10 -16 0 Z" fill="#6b645a"/><path d="M-9 -5 Q-2 -9 7 -6 Q3 -1 -5 -1 Z" fill="#847c70"/></g>
  </g>
  <g stroke="#6e6a4a" stroke-width="2" stroke-opacity=".55"><path d="M540 330 l-3 -9 M544 330 l0 -11 M548 330 l4 -8"/><path d="M700 150 l-3 -9 M704 150 l0 -11 M708 150 l4 -8"/></g>

  <!-- LEFT RAMPART (ally) — a battlement wall seen from directly above -->
  <g stroke="#0c0d11" stroke-width="2.4" stroke-linejoin="round">
    <rect x="150" y="40" width="16" height="400" fill="#000" opacity=".12" stroke="none"/>
    <rect x="60" y="40" width="90" height="400" rx="2" fill="#6d7480"/>
    <line x1="105" y1="46" x2="105" y2="434" stroke="#0c0d11" stroke-opacity=".18" stroke-width="1.5"/>
    <g fill="#8a919d"><rect x="138" y="52" width="15" height="22"/><rect x="138" y="98" width="15" height="22"/><rect x="138" y="236" width="15" height="22"/><rect x="138" y="282" width="15" height="22"/><rect x="138" y="360" width="15" height="22"/><rect x="138" y="406" width="15" height="22"/></g>
    <g fill="#5f666f"><rect x="57" y="74" width="14" height="20"/><rect x="57" y="120" width="14" height="20"/><rect x="57" y="258" width="14" height="20"/><rect x="57" y="384" width="14" height="20"/></g>
    <!-- towers (bigger keeps straddling the wall) with an owner roof + banner -->
    <g><rect x="44" y="96" width="118" height="96" rx="3" fill="#7c838f"/><rect x="82" y="120" width="42" height="48" rx="4" fill="var(--own,#4a7fd6)" style="--own:#4a7fd6"/><path d="M82 120 L124 120 L124 133 L82 133 Z" fill="#6fa0e8"/><circle cx="103" cy="146" r="6" fill="#d9a441"/></g>
    <g><rect x="44" y="300" width="118" height="96" rx="3" fill="#7c838f"/><rect x="82" y="324" width="42" height="48" rx="4" fill="var(--own,#4a7fd6)" style="--own:#4a7fd6"/><path d="M82 324 L124 324 L124 337 L82 337 Z" fill="#6fa0e8"/><circle cx="103" cy="350" r="6" fill="#d9a441"/></g>
  </g>

  <!-- RIGHT RAMPART (foe) — mirror -->
  <g stroke="#0c0d11" stroke-width="2.4" stroke-linejoin="round">
    <rect x="1034" y="40" width="16" height="400" fill="#000" opacity=".12" stroke="none"/>
    <rect x="1050" y="40" width="90" height="400" rx="2" fill="#606772"/>
    <line x1="1095" y1="46" x2="1095" y2="434" stroke="#0c0d11" stroke-opacity=".18" stroke-width="1.5"/>
    <g fill="#727a86"><rect x="1047" y="52" width="15" height="22"/><rect x="1047" y="98" width="15" height="22"/><rect x="1047" y="236" width="15" height="22"/><rect x="1047" y="282" width="15" height="22"/><rect x="1047" y="360" width="15" height="22"/><rect x="1047" y="406" width="15" height="22"/></g>
    <g fill="#525963"><rect x="1129" y="74" width="14" height="20"/><rect x="1129" y="120" width="14" height="20"/><rect x="1129" y="258" width="14" height="20"/><rect x="1129" y="384" width="14" height="20"/></g>
    <g><rect x="1038" y="96" width="118" height="96" rx="3" fill="#727a86"/><rect x="1076" y="120" width="42" height="48" rx="4" fill="#c0463c"/><path d="M1076 120 L1118 120 L1118 133 L1076 133 Z" fill="#e06a5c"/><circle cx="1097" cy="146" r="6" fill="#d9a441"/></g>
    <g><rect x="1038" y="300" width="118" height="96" rx="3" fill="#727a86"/><rect x="1076" y="324" width="42" height="48" rx="4" fill="#c0463c"/><path d="M1076 324 L1118 324 L1118 337 L1076 337 Z" fill="#e06a5c"/><circle cx="1097" cy="350" r="6" fill="#d9a441"/></g>
  </g>
  <text x="600" y="464" text-anchor="middle" fill="#c9cfdb" font-size="15" opacity=".38" font-style="italic">the basin — a rocky field between two rampart walls (overhead)</text>
</svg>
</div>

<!-- ============ VIGNETTE ============ -->
<h2>In context — the warband on the basin</h2>
<p class="sub">The load-bearing proof: top-down tokens on the near-map field, each rotated to its heading — ally pushing right, foe pushing left. Ownership and role read across a moving crowd, and every unit is the SAME single asset spun to face its move.</p>
<div class="scene">
<svg viewBox="0 0 1200 340" width="100%" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="mapv2" cx="50%" cy="50%" r="70%"><stop offset="52%" stop-color="#6a625a"/><stop offset="100%" stop-color="#443e37"/></radialGradient></defs>
  <!-- flat overhead ground -->
  <rect x="0" y="0" width="1200" height="340" fill="url(#mapv2)"/>
  <ellipse cx="600" cy="150" rx="520" ry="130" fill="#7d7568" opacity=".13"/>
  <path d="M120 176 C 400 150, 800 200, 1080 170" fill="none" stroke="#4a4238" stroke-width="44" stroke-opacity=".42" stroke-linecap="round"/>
  <!-- top-down wall hints -->
  <g stroke="#0c0d11" stroke-width="2.2" stroke-linejoin="round">
    <rect x="112" y="30" width="12" height="280" fill="#000" opacity=".12" stroke="none"/>
    <rect x="44" y="30" width="68" height="280" rx="2" fill="#6d7480"/>
    <g fill="#8a919d"><rect x="102" y="42" width="12" height="18"/><rect x="102" y="150" width="12" height="18"/><rect x="102" y="258" width="12" height="18"/></g>
    <g><rect x="32" y="128" width="92" height="84" rx="3" fill="#7c838f"/><rect x="62" y="150" width="34" height="40" rx="4" fill="#4a7fd6"/><circle cx="79" cy="170" r="5" fill="#d9a441"/></g>
  </g>
  <g stroke="#0c0d11" stroke-width="2.2" stroke-linejoin="round">
    <rect x="1076" y="30" width="12" height="280" fill="#000" opacity=".12" stroke="none"/>
    <rect x="1088" y="30" width="68" height="280" rx="2" fill="#606772"/>
    <g fill="#727a86"><rect x="1086" y="42" width="12" height="18"/><rect x="1086" y="150" width="12" height="18"/><rect x="1086" y="258" width="12" height="18"/></g>
    <g><rect x="1076" y="128" width="92" height="84" rx="3" fill="#727a86"/><rect x="1104" y="150" width="34" height="40" rx="4" fill="#c0463c"/><circle cx="1121" cy="170" r="5" fill="#d9a441"/></g>
  </g>
  <!-- ally squad (facing right, small heading jitter) -->
  <g transform="translate(300,150) rotate(8) scale(1.1)"><use href="#u-archer" x="-50" y="-50" width="100" height="100"/></g>
  <g transform="translate(352,206) rotate(-6) scale(1.0)"><use href="#u-militia" x="-50" y="-50" width="100" height="100"/></g>
  <g transform="translate(430,168) rotate(4) scale(1.5)"><use href="#u-sentinel" x="-50" y="-50" width="100" height="100"/></g>
  <g transform="translate(360,110) rotate(2) scale(1.25)"><use href="#u-cleric" x="-50" y="-50" width="100" height="100"/></g>
  <g transform="translate(516,214) rotate(14) scale(1.15)"><use href="#u-swordsman" x="-50" y="-50" width="100" height="100"/></g>
  <!-- foe squad (facing left ≈ 180°) -->
  <g class="foe">
    <g transform="translate(900,150) rotate(188) scale(1.1)"><use href="#u-archer" x="-50" y="-50" width="100" height="100"/></g>
    <g transform="translate(770,168) rotate(184) scale(1.5)"><use href="#u-sentinel" x="-50" y="-50" width="100" height="100"/></g>
    <g transform="translate(690,214) rotate(196) scale(1.15)"><use href="#u-swordsman" x="-50" y="-50" width="100" height="100"/></g>
    <g transform="translate(950,120) rotate(172) scale(1.35)"><use href="#u-griffon" x="-50" y="-50" width="100" height="100"/></g>
  </g>
</svg>
</div>

<!-- ============ ROSTER SPREAD ============ -->
<h2>The Warband — one asset per role, T1 → T3 scale climb (all at canonical facing = E)</h2>
<p class="sub">Ally-tinted, all facing right. Note the tier scale ladder (Militia → Sentinel → Colossus) and how each role reads from above by its weapon-at-the-leading-edge + footprint (tank = big front shield-disc, ranged = bow arc, siege = wheeled frame, air = wings spread, support/caster = robe-circle + cyan/violet magic).</p>
<div class="grid">
  <div class="cell"><svg viewBox="0 0 100 100" width="96"><use href="#u-militia"/></svg><div class="nm">Militia</div><div class="rl">swarm · T1</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><use href="#u-swordsman"/></svg><div class="nm">Swordsman</div><div class="rl">infantry · T1</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="120"><use href="#u-sentinel"/></svg><div class="nm">Sentinel</div><div class="rl">tank · T1</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><use href="#u-archer"/></svg><div class="nm">Archer</div><div class="rl">ranged · T1</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="128"><use href="#u-catapult"/></svg><div class="nm">Catapult</div><div class="rl">splash · T1</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="114"><use href="#u-cleric"/></svg><div class="nm">Cleric</div><div class="rl">support · T2</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="116"><use href="#u-sorcerer"/></svg><div class="nm">Sorcerer</div><div class="rl">caster · T3</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="150"><use href="#u-colossus"/></svg><div class="nm">Colossus</div><div class="rl">tank · T3</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="150"><use href="#u-griffon"/></svg><div class="nm">Griffon</div><div class="rl">air · T3</div></div>
</div>

<!-- ============ OWNERSHIP ============ -->
<h2>Ownership channel — one recolor var, three unit types</h2>
<p class="sub">Base materials (steel, leather, cloth, wood) stay neutral; only the reserved heraldry slot — chest tabard/surcoat, shield-disc, robe, saddle, banner — carries the owner hue. In code it's a single variable (<code>--own</code>): ally-blue default, a <code>.foe</code> wrapper flips it to red. Nothing else in the game uses those two hues, so the side-read never breaks (craft rule A1). Ally accents also sit brighter than foe (a luminance split) so ownership survives colorblind / low-light overlap.</p>
<div class="grid" style="justify-content:flex-start;gap:26px">
  <div class="cell"><svg viewBox="0 0 100 100" width="104"><use href="#u-swordsman"/></svg><div class="nm" style="color:#6fa0e8">Swordsman · Ally</div></div>
  <div class="cell foe"><svg viewBox="0 0 100 100" width="104"><use href="#u-swordsman"/></svg><div class="nm" style="color:#e06a5c">Swordsman · Foe</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="104"><use href="#u-sorcerer"/></svg><div class="nm" style="color:#6fa0e8">Sorcerer · Ally</div></div>
  <div class="cell foe"><svg viewBox="0 0 100 100" width="104"><use href="#u-sorcerer"/></svg><div class="nm" style="color:#e06a5c">Sorcerer · Foe</div></div>
  <div class="cell"><svg viewBox="0 0 100 100" width="112"><use href="#u-catapult"/></svg><div class="nm" style="color:#6fa0e8">Catapult · Ally</div></div>
  <div class="cell foe"><svg viewBox="0 0 100 100" width="112"><use href="#u-catapult"/></svg><div class="nm" style="color:#e06a5c">Catapult · Foe</div></div>
</div>

<!-- ============ ROLE LEGEND ============ -->
<h2>Role → read from above (designed fresh, no shapes.ts lock)</h2>
<p class="sub">From a top-down camera every unit is "shoulders + head + weapon," so the role read leans on the tool at the leading edge + the footprint. These target reads hold at token size:</p>
<div class="legend">
  <div class="lg"><svg width="30" height="30" viewBox="0 0 30 30"><circle cx="15" cy="15" r="8" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/></svg><div><b>swarm — small round token</b><br><small>Militia · buckler + spear</small></div></div>
  <div class="lg"><svg width="30" height="30" viewBox="0 0 30 30"><circle cx="15" cy="15" r="10" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/><path d="M15 15 L27 15" stroke="#0c0d11" stroke-width="2"/></svg><div><b>infantry — sword forward</b><br><small>Swordsman · shield-disc flank</small></div></div>
  <div class="lg"><svg width="30" height="30" viewBox="0 0 30 30"><circle cx="12" cy="15" r="8" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/><ellipse cx="21" cy="15" rx="5" ry="9" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/></svg><div><b>tank — big shield-disc up front</b><br><small>Sentinel, Colossus</small></div></div>
  <div class="lg"><svg width="30" height="30" viewBox="0 0 30 30"><circle cx="12" cy="15" r="7" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/><path d="M24 7 Q29 15 24 23" fill="none" stroke="#0c0d11" stroke-width="2.4"/></svg><div><b>ranged — bow arc at the front</b><br><small>Archer</small></div></div>
  <div class="lg"><svg width="30" height="30" viewBox="0 0 30 30"><rect x="7" y="9" width="16" height="12" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/><circle cx="9" cy="8" r="2.4" fill="#0c0d11"/><circle cx="21" cy="8" r="2.4" fill="#0c0d11"/><circle cx="9" cy="22" r="2.4" fill="#0c0d11"/><circle cx="21" cy="22" r="2.4" fill="#0c0d11"/></svg><div><b>splash — wheeled engine</b><br><small>Catapult · arm + boulder</small></div></div>
  <div class="lg"><svg width="30" height="30" viewBox="0 0 30 30"><ellipse cx="15" cy="15" rx="12" ry="7" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/><ellipse cx="15" cy="15" rx="4" ry="6" fill="#6d7480"/></svg><div><b>air — wings spread</b><br><small>Drake, Griffon, Dragon</small></div></div>
  <div class="lg"><svg width="30" height="30" viewBox="0 0 30 30"><circle cx="13" cy="15" r="8" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/><circle cx="24" cy="11" r="4" fill="#4fd0e0"/></svg><div><b>support — cyan cross + glow</b><br><small>Cleric</small></div></div>
  <div class="lg"><svg width="30" height="30" viewBox="0 0 30 30"><circle cx="13" cy="15" r="8" fill="#8a94a6" stroke="#0c0d11" stroke-width="2"/><circle cx="24" cy="12" r="4" fill="#9a6ff0"/></svg><div><b>caster — violet star + glow</b><br><small>Sorcerer</small></div></div>
</div>

<!-- ============ PALETTE ============ -->
<h2>Palette</h2>
<div>
  <div class="sw" style="background:#4a7fd6"><span>ally #4a7fd6</span></div><div class="sw" style="background:#c0463c"><span>foe #c0463c</span></div>
  <div class="sw" style="background:#8a94a6"><span>steel</span></div><div class="sw" style="background:#4a5160"><span>iron</span></div>
  <div class="sw" style="background:#7a5638"><span>leather</span></div><div class="sw" style="background:#6f4e30"><span>wood</span></div>
  <div class="sw" style="background:#c9b487"><span>cloth</span></div><div class="sw" style="background:#d9a441"><span>gold</span></div>
  <div class="sw" style="background:#4fd0e0"><span>arcane cyan</span></div><div class="sw" style="background:#9a6ff0"><span>arcane violet</span></div>
  <div class="sw" style="background:#e08a3c"><span>ember</span></div><div class="sw" style="background:#5f5850"><span>rock</span></div>
  <div class="sw" style="background:#14161d"><span style="color:#fff;background:#0007">field bg</span></div>
</div>

<!-- ============ NOTES ============ -->
<h2>Notes for review</h2>
<div class="notes"><ul>
  <li><b>Top-down + rotate (Pass 3).</b> Units are drawn once at a canonical facing (right), tilted to show the FRONT (face + chest, not the back); the engine rotates the sprite to its heading, so ONE asset per unit covers every direction (foe = rotate 180). This is the cheap production model — a side profile would need an asset per direction. The battlefield is a pure overhead map (no horizon/perspective). See the rotation strip up top.</li>
  <li><b>Lighting is top-down/flat</b> (crown catches light from above) so rotation never exposes an inconsistent key light. The engine draws the ground shadow <i>under</i> the unit (not baked into the rotating sprite).</li>
  <li><b>Ownership = a big centred colour mass</b> read from above — chest tabard/surcoat, shield-disc, robe, saddle, banner. Single <code>--own</code> var, ally-blue / foe-red, luminance-split for colourblind/low-light.</li>
  <li><b>Role read from above</b> leans on the weapon-at-the-leading-edge + footprint (tank front shield-disc, ranged bow arc, siege wheeled frame, air wings spread, support/caster robe-circle + cyan/violet). This is the hardest part of top-down and the thing to sanity-check at token size.</li>
  <li><b>Naming locked (P1 Heroic Warband):</b> fodder→Militia, raven→Drake (Drake→Dragon = small→big air). Full set: Militia, Swordsman, Halberdier, Sentinel, Archer, Catapult · Vanguard, Lancer, Drake, Cleric, Bulwark, Ranger, Reaver · Colossus, Ballista, Bombard, Sorcerer, Dragon, Battlemaster, Griffon.</li>
  <li><b>Open question:</b> foe-red can sit a little dark against the brown floor in low light — a touch warmer/lighter foe red or a stronger token rim would fix it (red is a locked identity hue, so flagging rather than changing).</li>
</ul></div>`,r=e();function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{dangerouslySetInnerHTML:{__html:t}}),(0,r.jsx)(`div`,{dangerouslySetInnerHTML:{__html:n}})]})}export{i as StyleBoard};
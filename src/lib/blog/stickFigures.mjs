/**
 * Stick figure SVG scenes — CSS animated, pure SVG
 * Design language: forest ink strokes, single accent, round line caps, hand-drawn feel
 * viewBox 0 0 200 160 for all scenes
 */

const BASE = '#1F2D24'; // forest ink
const CREAM = '#F4EFE2';

export const STICK_FIGURES = {

  'thinking': `<svg class="stick-figure" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-reduced-motion: no-preference) {
      .sf-head { animation: sf-bob 2.4s ease-in-out infinite; transform-origin: 100px 45px; }
      .sf-bubble { animation: sf-fade 2.4s ease-in-out infinite; }
      .sf-dot1 { animation: sf-dots 2.4s 0s ease-in-out infinite; }
      .sf-dot2 { animation: sf-dots 2.4s 0.4s ease-in-out infinite; }
      .sf-dot3 { animation: sf-dots 2.4s 0.8s ease-in-out infinite; }
    }
    @keyframes sf-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
    @keyframes sf-fade { 0%,100%{opacity:.4} 50%{opacity:1} }
    @keyframes sf-dots { 0%,100%{opacity:.2} 40%{opacity:1} }
  </style>
  <!-- Body -->
  <line x1="100" y1="70" x2="100" y2="110" stroke="${BASE}" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Legs -->
  <line x1="100" y1="110" x2="85" y2="140" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <line x1="100" y1="110" x2="115" y2="140" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Arms thinking pose -->
  <path d="M100 80 Q82 75 80 65" fill="none" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <path d="M100 80 Q118 75 120 65" fill="none" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Head group -->
  <g class="sf-head">
    <circle cx="100" cy="45" r="16" fill="${CREAM}" stroke="${BASE}" stroke-width="2"/>
    <!-- Hand at chin -->
    <line x1="80" y1="65" x2="83" y2="52" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  </g>
  <!-- Thought bubble -->
  <g class="sf-bubble">
    <circle cx="128" cy="30" r="10" fill="${CREAM}" stroke="${BASE}" stroke-width="1.5"/>
    <circle cx="143" cy="20" r="7" fill="${CREAM}" stroke="${BASE}" stroke-width="1.5"/>
    <circle cx="153" cy="13" r="5" fill="${CREAM}" stroke="${BASE}" stroke-width="1.5"/>
    <!-- Lightbulb in bubble -->
    <text x="128" y="34" text-anchor="middle" font-size="10" fill="${BASE}">✦</text>
  </g>
  <!-- Thought dots -->
  <circle class="sf-dot1" cx="117" cy="38" r="2.5" fill="${BASE}"/>
  <circle class="sf-dot2" cx="122" cy="34" r="2" fill="${BASE}"/>
  <circle class="sf-dot3" cx="126" cy="31" r="1.5" fill="${BASE}"/>
</svg>`,

  'building': `<svg class="stick-figure" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-reduced-motion: no-preference) {
      .sf-arm-r { animation: sf-hammer 0.9s ease-in-out infinite; transform-origin: 85px 82px; }
      .sf-block { animation: sf-build 2.7s ease-in-out infinite; }
    }
    @keyframes sf-hammer { 0%,100%{transform:rotate(-15deg)} 50%{transform:rotate(20deg)} }
    @keyframes sf-build { 0%,60%{opacity:0;transform:translateY(8px)} 80%,100%{opacity:1;transform:translateY(0)} }
  </style>
  <!-- Structure being built -->
  <rect x="120" y="100" width="40" height="20" rx="3" fill="${CREAM}" stroke="${BASE}" stroke-width="1.5"/>
  <rect class="sf-block" x="120" y="82" width="40" height="16" rx="3" fill="#B5A5F0" fill-opacity="0.5" stroke="${BASE}" stroke-width="1.5"/>
  <!-- Body -->
  <line x1="85" y1="70" x2="85" y2="110" stroke="${BASE}" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="85" y1="110" x2="72" y2="140" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <line x1="85" y1="110" x2="98" y2="140" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Left arm -->
  <line x1="85" y1="82" x2="72" y2="98" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Right arm (animated hammer) -->
  <g class="sf-arm-r">
    <line x1="85" y1="82" x2="110" y2="92" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="110" y1="92" x2="118" y2="88" stroke="${BASE}" stroke-width="3" stroke-linecap="round"/>
  </g>
  <!-- Head -->
  <circle cx="85" cy="52" r="16" fill="${CREAM}" stroke="${BASE}" stroke-width="2"/>
</svg>`,

  'presenting': `<svg class="stick-figure" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-reduced-motion: no-preference) {
      .sf-pointer { animation: sf-point 1.8s ease-in-out infinite; transform-origin: 75px 85px; }
      .sf-bar1 { animation: sf-grow 1.8s 0s ease-in-out infinite; transform-origin: 120px 115px; }
      .sf-bar2 { animation: sf-grow 1.8s 0.3s ease-in-out infinite; transform-origin: 133px 115px; }
      .sf-bar3 { animation: sf-grow 1.8s 0.6s ease-in-out infinite; transform-origin: 146px 115px; }
    }
    @keyframes sf-point { 0%,100%{transform:rotate(-5deg)} 50%{transform:rotate(10deg)} }
    @keyframes sf-grow { 0%,100%{transform:scaleY(0.85)} 50%{transform:scaleY(1)} }
  </style>
  <!-- Whiteboard -->
  <rect x="100" y="48" width="70" height="50" rx="4" fill="${CREAM}" stroke="${BASE}" stroke-width="1.5"/>
  <!-- Mini bars on board -->
  <rect class="sf-bar1" x="116" y="80" width="8" height="14" fill="#B5A5F0" fill-opacity="0.7"/>
  <rect class="sf-bar2" x="129" y="70" width="8" height="24" fill="#B5A5F0"/>
  <rect class="sf-bar3" x="142" y="75" width="8" height="19" fill="#B5A5F0" fill-opacity="0.7"/>
  <!-- Body -->
  <line x1="75" y1="70" x2="75" y2="110" stroke="${BASE}" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="75" y1="110" x2="62" y2="140" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <line x1="75" y1="110" x2="88" y2="140" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Left arm down -->
  <line x1="75" y1="82" x2="62" y2="105" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Right arm pointing (animated) -->
  <g class="sf-pointer">
    <line x1="75" y1="82" x2="98" y2="90" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  </g>
  <!-- Head -->
  <circle cx="75" cy="52" r="16" fill="${CREAM}" stroke="${BASE}" stroke-width="2"/>
</svg>`,

  'comparing': `<svg class="stick-figure" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-reduced-motion: no-preference) {
      .sf-scaleL { animation: sf-tilt 2.2s ease-in-out infinite; transform-origin: 100px 72px; }
    }
    @keyframes sf-tilt { 0%,100%{transform:rotate(-8deg)} 50%{transform:rotate(8deg)} }
  </style>
  <!-- Balance scale -->
  <line x1="100" y1="58" x2="100" y2="80" stroke="${BASE}" stroke-width="2"/>
  <g class="sf-scaleL">
    <line x1="68" y1="72" x2="132" y2="72" stroke="${BASE}" stroke-width="2"/>
    <!-- Left pan -->
    <line x1="72" y1="72" x2="66" y2="88" stroke="${BASE}" stroke-width="1.5"/>
    <line x1="68" y1="88" x2="80" y2="88" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="74" cy="85" r="4" fill="#B5A5F0" fill-opacity="0.8" stroke="${BASE}" stroke-width="1"/>
    <!-- Right pan -->
    <line x1="128" y1="72" x2="134" y2="88" stroke="${BASE}" stroke-width="1.5"/>
    <line x1="120" y1="88" x2="138" y2="88" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="127" cy="85" r="6" fill="#D4E84A" fill-opacity="0.8" stroke="${BASE}" stroke-width="1"/>
    <circle cx="133" cy="84" r="4" fill="#D4E84A" fill-opacity="0.6" stroke="${BASE}" stroke-width="1"/>
  </g>
  <!-- Pivot base -->
  <circle cx="100" cy="57" r="4" fill="${BASE}"/>
  <line x1="90" y1="82" x2="110" y2="82" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Little person watching -->
  <circle cx="100" cy="110" r="10" fill="${CREAM}" stroke="${BASE}" stroke-width="1.5"/>
  <line x1="100" y1="120" x2="100" y2="145" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <line x1="100" y1="145" x2="90" y2="155" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="100" y1="145" x2="110" y2="155" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="100" y1="128" x2="88" y2="138" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="100" y1="128" x2="112" y2="138" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,

  'flowing': `<svg class="stick-figure" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-reduced-motion: no-preference) {
      .sf-run-body { animation: sf-run 0.7s ease-in-out infinite alternate; transform-origin: 70px 95px; }
      .sf-arrow { animation: sf-slide 1.4s ease-in-out infinite; }
    }
    @keyframes sf-run { 0%{transform:rotate(-3deg)} 100%{transform:rotate(3deg)} }
    @keyframes sf-slide { 0%{transform:translateX(0)} 50%{transform:translateX(6px)} 100%{transform:translateX(0)} }
  </style>
  <!-- Flow path -->
  <path d="M 20 120 Q 60 100 100 120 Q 140 140 180 120" fill="none" stroke="#B5A5F0" stroke-width="2" stroke-dasharray="5 4" stroke-opacity="0.5"/>
  <g class="sf-arrow">
    <polyline points="168,114 178,120 168,126" fill="none" stroke="#B5A5F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.7"/>
  </g>
  <!-- Running stick figure -->
  <g class="sf-run-body">
    <circle cx="70" cy="60" r="14" fill="${CREAM}" stroke="${BASE}" stroke-width="2"/>
    <line x1="70" y1="74" x2="70" y2="108" stroke="${BASE}" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Arms running -->
    <line x1="70" y1="84" x2="55" y2="75" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="70" y1="84" x2="85" y2="92" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <!-- Legs running -->
    <line x1="70" y1="108" x2="56" y2="130" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="70" y1="108" x2="84" y2="128" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="56" y1="130" x2="48" y2="145" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="84" y1="128" x2="92" y2="142" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
  </g>
</svg>`,

  'spiking': `<svg class="stick-figure" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-reduced-motion: no-preference) {
      .sf-spike-line { animation: sf-spike 1.6s ease-in-out infinite; stroke-dashoffset: 0; }
      .sf-jump { animation: sf-jump 1.6s ease-in-out infinite; transform-origin: 155px 100px; }
    }
    @keyframes sf-spike { 0%,100%{stroke-dashoffset:220} 60%{stroke-dashoffset:0} }
    @keyframes sf-jump { 0%,100%{transform:translateY(0)} 70%{transform:translateY(-10px)} }
  </style>
  <!-- Chart area -->
  <rect x="30" y="50" width="120" height="80" rx="4" fill="none" stroke="${BASE}" stroke-width="1" stroke-opacity="0.2"/>
  <!-- Baseline and guides -->
  <line x1="30" y1="130" x2="150" y2="130" stroke="${BASE}" stroke-width="0.5" stroke-opacity="0.2"/>
  <!-- Line chart with spike -->
  <polyline class="sf-spike-line" points="30,120 55,115 75,112 90,105 105,110 115,65 130,75 150,72"
    fill="none" stroke="#D4E84A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
    stroke-dasharray="220" />
  <!-- Spike highlight dot -->
  <circle cx="115" cy="65" r="5" fill="#D4E84A"/>
  <!-- Celebrating figure -->
  <g class="sf-jump">
    <circle cx="155" cy="82" r="11" fill="${CREAM}" stroke="${BASE}" stroke-width="1.5"/>
    <line x1="155" y1="93" x2="155" y2="120" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="155" y1="120" x2="145" y2="145" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="155" y1="120" x2="165" y2="145" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Arms raised -->
    <line x1="155" y1="100" x2="140" y2="88" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="155" y1="100" x2="170" y2="88" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
  </g>
</svg>`,

  'celebrating': `<svg class="stick-figure" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-reduced-motion: no-preference) {
      .sf-confetti { animation: sf-confetti 1.2s ease-in-out infinite; }
      .sf-arms { animation: sf-wave 1.2s ease-in-out infinite alternate; transform-origin: 100px 92px; }
      .sf-sparkL { animation: sf-sparkle 1.2s 0s ease-in-out infinite; }
      .sf-sparkR { animation: sf-sparkle 1.2s 0.3s ease-in-out infinite; }
    }
    @keyframes sf-confetti { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(5px) rotate(20deg)} }
    @keyframes sf-wave { 0%{transform:rotate(-8deg)} 100%{transform:rotate(8deg)} }
    @keyframes sf-sparkle { 0%,100%{opacity:0;transform:scale(0.5)} 50%{opacity:1;transform:scale(1)} }
  </style>
  <!-- Confetti -->
  <g class="sf-confetti">
    <rect x="72" y="28" width="6" height="6" rx="1" fill="#B5A5F0" transform="rotate(20 75 31)"/>
    <rect x="118" y="22" width="5" height="5" rx="1" fill="#D4E84A" transform="rotate(-15 120 24)"/>
    <rect x="55" y="42" width="4" height="4" rx="1" fill="#F4A8C9" transform="rotate(30 57 44)"/>
    <rect x="138" y="38" width="5" height="5" rx="1" fill="#F26835" transform="rotate(-20 140 40)"/>
    <rect x="90" y="18" width="6" height="3" rx="1" fill="#A8D4F0" transform="rotate(45 93 19)"/>
  </g>
  <!-- Body -->
  <line x1="100" y1="75" x2="100" y2="115" stroke="${BASE}" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="100" y1="115" x2="85" y2="148" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <line x1="100" y1="115" x2="115" y2="148" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Arms (animated wave) -->
  <g class="sf-arms">
    <line x1="100" y1="92" x2="78" y2="75" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
    <line x1="100" y1="92" x2="122" y2="75" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  </g>
  <!-- Head -->
  <circle cx="100" cy="58" r="16" fill="${CREAM}" stroke="${BASE}" stroke-width="2"/>
  <!-- Smile -->
  <path d="M 94 61 Q 100 68 106 61" fill="none" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Sparkles -->
  <text class="sf-sparkL" x="62" y="72" font-size="14" fill="#D4E84A">✦</text>
  <text class="sf-sparkR" x="130" y="68" font-size="12" fill="#B5A5F0">✦</text>
</svg>`,

  'puzzling': `<svg class="stick-figure" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-reduced-motion: no-preference) {
      .sf-qmark { animation: sf-fade 2s ease-in-out infinite; }
      .sf-scratch { animation: sf-scratch 3s ease-in-out infinite; transform-origin: 90px 78px; }
    }
    @keyframes sf-fade { 0%,100%{opacity:.3} 50%{opacity:1} }
    @keyframes sf-scratch { 0%,100%{transform:rotate(-8deg)} 50%{transform:rotate(5deg)} }
  </style>
  <!-- Big question mark floating -->
  <g class="sf-qmark">
    <text x="148" y="72" text-anchor="middle" font-family="Fraunces, serif" font-size="38" font-style="italic" fill="#F26835" opacity="0.8">?</text>
  </g>
  <!-- Body -->
  <line x1="90" y1="75" x2="90" y2="115" stroke="${BASE}" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="90" y1="115" x2="76" y2="148" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <line x1="90" y1="115" x2="104" y2="148" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Left arm on hip -->
  <path d="M90 88 Q76 92 74 102" fill="none" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  <!-- Right arm scratching head (animated) -->
  <g class="sf-scratch">
    <line x1="90" y1="85" x2="108" y2="72" stroke="${BASE}" stroke-width="2" stroke-linecap="round"/>
  </g>
  <!-- Head (tilted slightly) -->
  <circle cx="90" cy="58" r="16" fill="${CREAM}" stroke="${BASE}" stroke-width="2"/>
  <!-- Raised eyebrow face -->
  <line x1="84" y1="53" x2="89" y2="51" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="91" y1="54" x2="96" y2="54" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="86" cy="58" r="1.5" fill="${BASE}"/>
  <circle cx="94" cy="58" r="1.5" fill="${BASE}"/>
  <path d="M 86 64 Q 90 62 94 64" fill="none" stroke="${BASE}" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,
};

const M="modulepreload",F=function(e){return"/"+e},A={},I=function(a,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(n){return Promise.all(n.map(m=>Promise.resolve(m).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),p=r?.nonce||r?.getAttribute("nonce");s=l(t.map(n=>{if(n=F(n),n in A)return;A[n]=!0;const m=n.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${h}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":M,m||(d.as="script"),d.crossOrigin="",d.href=n,p&&d.setAttribute("nonce",p),document.head.appendChild(d),m)return new Promise((B,_)=>{d.addEventListener("load",B),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})}))}function c(l){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l}return s.then(l=>{for(const r of l||[])r.status==="rejected"&&c(r.reason);return a().catch(c)})};let k=[];const y=e=>new Promise(a=>setTimeout(a,e)),z={social:{vcType:"funnel",vcTypeLabel:"Funnel",palette:"berry-pop",content:"5 lessons from year one of my startup",promptShort:"Create a bold 5-stage funnel infographic, square format, Berry Pop palette…",url:"yourbrand.social/create",destTitle:"Photo post",destUrl:"instagram.com/create/style  ·  square 1:1"},docs:{vcType:"bar",vcTypeLabel:"Bar chart",palette:"slate-gray",content:"Urban food insecurity: access, income, transport, education",promptShort:"Create a clean horizontal bar chart, minimal style, Slate Gray palette…",url:"docs.example.edu/report",destTitle:"Document",destUrl:"docs.google.com/document  ·  Research report"},presentation:{vcType:"radar",vcTypeLabel:"Radar chart",palette:"deep-sapphire",content:"Competitors: Miro, Lucidchart, Canva, Figma",promptShort:"Create a corporate radar chart comparing four competitors, Deep Sapphire palette…",url:"deck.example.com/edit",destTitle:"Slide",destUrl:"slides.example.com  ·  Q3 Competitive Landscape"}};function T(e){const a=k.find(t=>t.id===e);return a?a.colors:["#F4EFE2","#EBE5D5","#F4A8C9","#B5A5F0","#0A0A0A"]}function u(e,a){const t=T(a),i=s=>`<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;background:${t[0]}">${s}</svg>`;switch(e){case"bar":return i(`
          <rect x="18" y="50" width="14" height="28" fill="${t[1]}" stroke="#1C1A18" stroke-width="1.5"/>
          <rect x="38" y="38" width="14" height="40" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.5"/>
          <rect x="58" y="26" width="14" height="52" fill="${t[3]}" stroke="#1C1A18" stroke-width="1.5"/>
          <rect x="78" y="44" width="14" height="34" fill="${t[4]}" stroke="#1C1A18" stroke-width="1.5"/>
          <line x1="12" y1="78" x2="100" y2="78" stroke="#1C1A18" stroke-width="1.5"/>
        `);case"mindmap":return i(`
          <circle cx="60" cy="45" r="13" fill="${t[3]}" stroke="#1C1A18" stroke-width="1.5"/>
          <circle cx="24" cy="22" r="7" fill="${t[1]}" stroke="#1C1A18" stroke-width="1.5"/>
          <circle cx="96" cy="22" r="7" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.5"/>
          <circle cx="22" cy="70" r="7" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.5"/>
          <circle cx="98" cy="70" r="7" fill="${t[4]}" stroke="#1C1A18" stroke-width="1.5"/>
          <line x1="50" y1="38" x2="30" y2="27" stroke="#1C1A18" stroke-width="1.5"/>
          <line x1="70" y1="38" x2="90" y2="27" stroke="#1C1A18" stroke-width="1.5"/>
          <line x1="50" y1="52" x2="29" y2="65" stroke="#1C1A18" stroke-width="1.5"/>
          <line x1="70" y1="52" x2="91" y2="65" stroke="#1C1A18" stroke-width="1.5"/>
        `);case"funnel":return i(`
          <polygon points="24,20 96,20 84,36 36,36" fill="${t[1]}" stroke="#1C1A18" stroke-width="1.5"/>
          <polygon points="38,40 82,40 73,56 47,56" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.5"/>
          <polygon points="49,60 71,60 64,76 56,76" fill="${t[4]}" stroke="#1C1A18" stroke-width="1.5"/>
        `);case"timeline":return i(`
          <line x1="12" y1="45" x2="108" y2="45" stroke="#1C1A18" stroke-width="1.5"/>
          <circle cx="25" cy="45" r="4.5" fill="${t[1]}" stroke="#1C1A18" stroke-width="1.5"/>
          <circle cx="48" cy="45" r="4.5" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.5"/>
          <circle cx="71" cy="45" r="4.5" fill="${t[3]}" stroke="#1C1A18" stroke-width="1.5"/>
          <circle cx="94" cy="45" r="4.5" fill="${t[4]}" stroke="#1C1A18" stroke-width="1.5"/>
          <line x1="25" y1="45" x2="25" y2="24" stroke="#1C1A18" stroke-width="1.2"/>
          <rect x="15" y="14" width="20" height="10" rx="2" fill="${t[1]}" stroke="#1C1A18" stroke-width="1.2"/>
          <line x1="48" y1="45" x2="48" y2="66" stroke="#1C1A18" stroke-width="1.2"/>
          <rect x="38" y="66" width="20" height="10" rx="2" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.2"/>
          <line x1="71" y1="45" x2="71" y2="24" stroke="#1C1A18" stroke-width="1.2"/>
          <rect x="61" y="14" width="20" height="10" rx="2" fill="${t[3]}" stroke="#1C1A18" stroke-width="1.2"/>
          <line x1="94" y1="45" x2="94" y2="66" stroke="#1C1A18" stroke-width="1.2"/>
          <rect x="84" y="66" width="20" height="10" rx="2" fill="${t[4]}" stroke="#1C1A18" stroke-width="1.2"/>
        `);case"radar":return i(`
          <polygon points="60,15 88,36 78,69 42,69 32,36" fill="none" stroke="#1C1A18" stroke-width="1" stroke-opacity="0.2"/>
          <polygon points="60,30 74,40 69,57 51,57 46,40" fill="none" stroke="#1C1A18" stroke-width="1" stroke-opacity="0.2"/>
          <line x1="60" y1="45" x2="60" y2="15" stroke="#1C1A18" stroke-width="1" stroke-opacity="0.1"/>
          <line x1="60" y1="45" x2="88" y2="36" stroke="#1C1A18" stroke-width="1" stroke-opacity="0.1"/>
          <line x1="60" y1="45" x2="78" y2="69" stroke="#1C1A18" stroke-width="1" stroke-opacity="0.1"/>
          <line x1="60" y1="45" x2="42" y2="69" stroke="#1C1A18" stroke-width="1" stroke-opacity="0.1"/>
          <line x1="60" y1="45" x2="32" y2="36" stroke="#1C1A18" stroke-width="1" stroke-opacity="0.1"/>
          <polygon points="60,25 80,38 72,62 48,59 38,39" fill="${t[3]}" fill-opacity="0.4" stroke="${t[4]}" stroke-width="1.5"/>
          <circle cx="60" cy="25" r="2.5" fill="${t[4]}"/>
          <circle cx="80" cy="38" r="2.5" fill="${t[4]}"/>
          <circle cx="72" cy="62" r="2.5" fill="${t[4]}"/>
          <circle cx="48" cy="59" r="2.5" fill="${t[4]}"/>
          <circle cx="38" cy="39" r="2.5" fill="${t[4]}"/>
        `);case"line":return i(`
          <polyline points="15,72 40,50 65,58 95,22" fill="none" stroke="${t[3]}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="15" cy="72" r="3.5" fill="${t[4]}" stroke="#1C1A18" stroke-width="1"/>
          <circle cx="40" cy="50" r="3.5" fill="${t[4]}" stroke="#1C1A18" stroke-width="1"/>
          <circle cx="65" cy="58" r="3.5" fill="${t[4]}" stroke="#1C1A18" stroke-width="1"/>
          <circle cx="95" cy="22" r="3.5" fill="${t[4]}" stroke="#1C1A18" stroke-width="1"/>
          <line x1="10" y1="78" x2="110" y2="78" stroke="#1C1A18" stroke-width="1.2"/>
        `);case"pie":return i(`
          <path d="M 60 45 L 60 15 A 30 30 0 0 1 90 45 Z" fill="${t[1]}" stroke="#1C1A18" stroke-width="1.2"/>
          <path d="M 60 45 L 90 45 A 30 30 0 0 1 60 75 Z" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.2"/>
          <path d="M 60 45 L 60 75 A 30 30 0 0 1 30 45 Z" fill="${t[3]}" stroke="#1C1A18" stroke-width="1.2"/>
          <path d="M 60 45 L 30 45 A 30 30 0 0 1 60 15 Z" fill="${t[4]}" stroke="#1C1A18" stroke-width="1.2"/>
        `);case"flow":return i(`
          <rect x="12" y="33" width="22" height="24" rx="4" fill="${t[1]}" stroke="#1C1A18" stroke-width="1.2"/>
          <rect x="49" y="33" width="22" height="24" rx="4" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.2"/>
          <rect x="86" y="33" width="22" height="24" rx="4" fill="${t[4]}" stroke="#1C1A18" stroke-width="1.2"/>
          <line x1="34" y1="45" x2="44" y2="45" stroke="#1C1A18" stroke-width="1.5"/>
          <polygon points="44,42 49,45 44,48" fill="#1C1A18"/>
          <line x1="71" y1="45" x2="81" y2="45" stroke="#1C1A18" stroke-width="1.5"/>
          <polygon points="81,42 86,45 81,48" fill="#1C1A18"/>
        `);default:return i(`<rect x="20" y="20" width="80" height="50" fill="${t[2]}" stroke="#1C1A18" stroke-width="1.5"/>`)}}const q=`
    <svg width="14" height="14" viewBox="0 0 13 13" fill="#B5A5F0" aria-hidden="true">
      <path d="M6.5 0 L7.6 5.4 L13 6.5 L7.6 7.6 L6.5 13 L5.4 7.6 L0 6.5 L5.4 5.4 Z"/>
    </svg>
  `;function j(){return`
      <div class="w-full h-full bg-cream flex text-ink-primary">
        <!-- left rail -->
        <div class="w-[38%] border-r border-cream-darker p-3 space-y-2 overflow-hidden">
          <div class="text-[9px] font-sans font-semibold text-ink-tertiary uppercase tracking-wide mb-1">Choose a type</div>
          <button class="vc-type" data-vc="bar">Bar chart</button>
          <button class="vc-type" data-vc="mindmap">Mindmap</button>
          <button class="vc-type" data-vc="funnel">Funnel</button>
          <button class="vc-type" data-vc="timeline">Timeline</button>
          <button class="vc-type" data-vc="radar">Radar chart</button>
        </div>
        <!-- right side -->
        <div class="flex-1 p-3 flex flex-col gap-3">
          <div>
            <div class="text-[9px] font-sans font-semibold text-ink-tertiary uppercase tracking-wide mb-1.5">Palette</div>
            <div class="flex gap-1.5" id="vc-palettes"></div>
          </div>
          <div>
            <div class="text-[9px] font-sans font-semibold text-ink-tertiary uppercase tracking-wide mb-1.5">Your content</div>
            <div id="vc-textarea"
                 class="h-14 rounded-card-sm border border-cream-darker bg-white p-2
                        text-[10px] font-mono text-ink-secondary leading-snug overflow-hidden">
              <span id="vc-typed"></span><span class="vc-caret">▍</span>
            </div>
          </div>
          <div class="mt-auto">
            <div id="vc-prompt-out"
                 class="hidden rounded-card-sm border border-cream-darker bg-forest/5 p-2
                        text-[9px] font-mono text-ink-secondary leading-snug max-h-16 overflow-hidden mb-2"></div>
            <div class="flex gap-2">
              <button id="vc-generate" class="vc-btn-primary">Generate prompt</button>
              <button id="vc-copy" class="vc-btn-secondary hidden">Copy</button>
            </div>
          </div>
        </div>
      </div>
    `}function D(){return`
      <div class="w-full h-full bg-white flex flex-col text-ink-primary">
        <div class="flex items-center gap-2 px-4 h-10 border-b border-cream-darker">
          <span class="w-6 h-6 rounded-full bg-accent-lavender-light border border-cream-darker
                       flex items-center justify-center">
            ${q}
          </span>
          <div class="leading-tight">
            <div class="text-[11px] font-sans font-semibold text-ink-primary">AI Image Generator</div>
            <div class="text-[9px] font-sans text-ink-tertiary">Gemini · ChatGPT · Claude · Midjourney</div>
          </div>
        </div>
        <div class="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          <div id="ai-prompt-bubble"
               class="hidden self-end max-w-[80%] rounded-2xl rounded-br-sm bg-cream-darker
                      border border-cream-darker p-2.5 text-[9px] font-mono text-ink-secondary leading-snug"></div>
          <div id="ai-thinking" class="hidden self-start flex items-center gap-1.5 text-ink-tertiary">
            <span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span>
            <span class="text-[9px] font-sans ml-1">Generating image…</span>
          </div>
          <div id="ai-result"
               class="hidden self-start w-[70%] aspect-[4/3] rounded-card-sm border border-cream-darker
                      bg-white overflow-hidden relative"></div>
          <div id="ai-copyimg" class="hidden self-start">
            <button class="vc-btn-secondary text-[9px] !py-1">Copy image</button>
          </div>
        </div>
        <div class="h-10 border-t border-cream-darker flex items-center gap-2 px-3">
          <div id="ai-input"
               class="flex-1 h-6 rounded-full border border-cream-darker bg-cream-lighter
                      px-3 flex items-center text-[9px] font-mono text-ink-tertiary truncate">
            Paste your prompt…
          </div>
          <button id="ai-send" class="w-6 h-6 rounded-full bg-ink-primary flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#F9F8F4" stroke-width="1.6"
                 stroke-linecap="round" stroke-linejoin="round"><path d="M2 6 L10 6 M6 2 L10 6 L6 10"/></svg>
          </button>
        </div>
      </div>
    `}function C(e){const a=document.getElementById("panel-destination");if(!a)return;let t="Blog post",i='<span class="block w-3 h-3 bg-accent-lavender rounded-full"></span>',s="";e==="blog"?(t="Blog post (WordPress / CMS)",i='<span class="block w-3 h-3 bg-accent-lavender rounded-full"></span>',s=`
        <div class="space-y-3">
          <div class="h-4 bg-ink-primary/10 rounded w-2/3"></div>
          <div class="space-y-1.5">
            <div class="h-2.5 bg-ink-secondary/10 rounded"></div>
            <div class="h-2.5 bg-ink-secondary/10 rounded w-11/12"></div>
          </div>
          <div id="dest-dropzone" class="w-2/3 aspect-[4/3] rounded-card-sm border border-dashed border-ink-tertiary/40 flex items-center justify-center text-[10px] text-ink-tertiary p-2 overflow-hidden bg-white/40">
            Drop image here
          </div>
          <div class="space-y-1.5">
            <div class="h-2.5 bg-ink-secondary/10 rounded"></div>
            <div class="h-2.5 bg-ink-secondary/10 rounded"></div>
          </div>
        </div>
      `):e==="social"?(t="Social Media Post (Composer)",i='<span class="block w-3 h-3 bg-accent-lime rounded-full"></span>',s=`
        <div class="max-w-[260px] mx-auto bg-white border border-cream-darker rounded-card-sm p-3 space-y-3 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-cream-darker block"></span>
            <div class="h-2.5 bg-ink-primary/10 rounded w-16"></div>
          </div>
          <div id="dest-dropzone" class="w-full aspect-square rounded-card-sm border border-dashed border-ink-tertiary/40 flex items-center justify-center text-[10px] text-ink-tertiary p-2 overflow-hidden bg-white/40">
            Drop visual
          </div>
          <div class="h-2 bg-ink-secondary/10 rounded w-3/4"></div>
          <div class="flex justify-between items-center pt-1">
            <div class="h-2 bg-ink-tertiary/10 rounded w-10"></div>
            <button class="px-3 py-1 bg-accent-lavender text-cream rounded-full text-[9px] font-sans font-semibold">Share</button>
          </div>
        </div>
      `):e==="docs"?(t="Google Docs / Research Paper",i='<span class="block w-3 h-3 bg-accent-sky rounded-full"></span>',s=`
        <div class="max-w-[340px] mx-auto bg-white border border-cream-darker p-4 shadow-sm min-h-[160px] space-y-3">
          <div class="h-3.5 bg-ink-primary/10 rounded w-1/2 mx-auto"></div>
          <div class="h-2 bg-ink-secondary/10 rounded"></div>
          <div id="dest-dropzone" class="w-3/5 mx-auto aspect-[4/3] rounded-card-sm border border-dashed border-ink-tertiary/40 flex items-center justify-center text-[10px] text-ink-tertiary p-2 overflow-hidden bg-white/40">
            Insert figure
          </div>
          <div class="h-2 bg-ink-secondary/10 rounded w-5/6 mx-auto"></div>
        </div>
      `):e==="presentation"&&(t="Slide Deck (Google Slides / Pitch)",i='<span class="block w-3 h-3 bg-accent-pink rounded-full"></span>',s=`
        <div class="space-y-2">
          <!-- 16:9 canvas -->
          <div class="bg-white border border-cream-darker rounded-card-sm p-3 aspect-[16/9] flex flex-col justify-between shadow-sm relative">
            <div class="h-3 bg-ink-primary/10 rounded w-1/3"></div>
            <div id="dest-dropzone" class="w-3/5 mx-auto aspect-[4/3] rounded-card-sm border border-dashed border-ink-tertiary/40 flex items-center justify-center text-[9px] text-ink-tertiary p-1 overflow-hidden bg-white/40">
              Paste slide content
            </div>
            <div class="h-1 bg-ink-tertiary/10 rounded w-1/12 self-end"></div>
          </div>
          <!-- thumbnails -->
          <div class="flex gap-2 justify-center">
            <span class="w-10 h-6 border border-accent-lavender/30 rounded bg-white"></span>
            <span class="w-10 h-6 border border-cream-darker rounded bg-white opacity-70"></span>
            <span class="w-10 h-6 border border-cream-darker rounded bg-white opacity-70"></span>
          </div>
        </div>
      `),a.innerHTML=`
      <div class="w-full h-full bg-cream-lighter flex flex-col text-ink-primary">
        <div class="h-10 border-b border-cream-darker flex items-center px-4 gap-2">
          <span id="dest-icon" class="w-5 h-5 rounded-md bg-cream-darker border border-cream-darker flex items-center justify-center">
            ${i}
          </span>
          <span id="dest-title" class="text-xs font-sans font-semibold text-ink-primary">${t}</span>
        </div>
        <div id="dest-body" class="flex-1 p-4 overflow-hidden">${s}</div>
      </div>
    `}function E(e){const a=document.getElementById("panel-visualcraft"),t=document.getElementById("panel-ai"),i=document.getElementById("panel-destination");if(a){a.innerHTML=j();const s=a.querySelector("#vc-palettes");if(s){const c=["matcha-zen","berry-pop","slate-gray","deep-sapphire"];s.innerHTML=c.map(l=>{const r=T(l);return`
            <button class="w-6 h-6 rounded-full overflow-hidden border border-cream-darker flex gap-[1px]" data-pal="${l}" aria-label="Select ${l} palette">
              <span class="flex-1 h-full block" style="background:${r[0]}"></span>
              <span class="flex-1 h-full block" style="background:${r[2]}"></span>
              <span class="flex-1 h-full block" style="background:${r[4]}"></span>
            </button>
          `}).join("")}}t&&(t.innerHTML=D()),C(e),a&&(a.style.opacity="1",a.style.pointerEvents="auto",a.style.transform="translateX(0)"),t&&(t.style.opacity="0",t.style.pointerEvents="none",t.style.transform="translateX(8px)"),i&&(i.style.opacity="0",i.style.pointerEvents="none",i.style.transform="translateX(8px)")}function L(e){document.querySelectorAll(".vc-type").forEach(a=>{a.getAttribute("data-vc")===e?a.classList.add("selected"):a.classList.remove("selected")})}function $(e){document.querySelectorAll("#vc-palettes button").forEach(a=>{a.getAttribute("data-pal")===e?a.classList.add("ring-2","ring-accent-lavender"):a.classList.remove("ring-2","ring-accent-lavender")})}class H{constructor(a){this.stage=a,this.cursor=a.querySelector("#demo-cursor"),this.cancelled=!1,this.paused=!1,this._lastXY={x:40,y:40}}cancel(){this.cancelled=!0}async _sleep(a){const t=performance.now()+a;for(;performance.now()<t;){if(this.cancelled)throw"cancelled";this.paused?await y(80):await y(Math.min(40,t-performance.now()))}}_centerOf(a){const t=this.stage.querySelector(a);if(!t)return null;const i=this.stage.getBoundingClientRect(),s=t.getBoundingClientRect();return{x:s.left-i.left+s.width/2,y:s.top-i.top+s.height/2,el:t}}async moveTo(a,t=650){const i=this._centerOf(a);i&&(this.cursor.style.transform=`translate(${i.x}px, ${i.y}px)`,this._lastXY={x:i.x,y:i.y},await this._sleep(t))}async click(a){a&&await this.moveTo(a,0);const{x:t,y:i}=this._lastXY;if(this.cursor.style.setProperty("--cx",`${t}px`),this.cursor.style.setProperty("--cy",`${i}px`),this.cursor.classList.add("is-clicking"),this._ripple(t,i),a){const s=this.stage.querySelector(a);s?.classList.add("vc-pressed"),setTimeout(()=>s?.classList.remove("vc-pressed"),200)}await this._sleep(300),this.cursor.classList.remove("is-clicking"),this.cursor.style.transform=`translate(${t}px, ${i}px)`}_ripple(a,t){const i=document.createElement("div");i.className="demo-ripple",i.style.left=`${a}px`,i.style.top=`${t}px`,this.stage.appendChild(i),requestAnimationFrame(()=>i.classList.add("go")),setTimeout(()=>i.remove(),520)}async type(a,t,i=28){const s=this.stage.querySelector(a);if(s){s.textContent="";for(const c of t){if(this.cancelled)throw"cancelled";for(;this.paused;)await y(80);s.textContent+=c,await y(i)}}}show(a){this.stage.querySelector(a)?.classList.remove("hidden")}hide(a){this.stage.querySelector(a)?.classList.add("hidden")}setText(a,t){const i=this.stage.querySelector(a);i&&(i.textContent=t)}setHTML(a,t){const i=this.stage.querySelector(a);i&&(i.innerHTML=t)}async switchPanel(a,t){["#panel-visualcraft","#panel-ai","#panel-destination"].forEach(i=>{const s=this.stage.querySelector(i),c=i===a;s&&(s.style.opacity=c?"1":"0",s.style.pointerEvents=c?"auto":"none",s.style.transform=c?"translateX(0)":"translateX(8px)")}),t&&this.setText("#demo-urlbar",t),await this._sleep(420)}}const G={blog:e=>(E("blog"),[{caption:"Choosing a visualization type",run:async()=>{await e.switchPanel("#panel-visualcraft","visualcraft.app/generate"),await e.moveTo('[data-vc="mindmap"]'),await e.click('[data-vc="mindmap"]'),L("mindmap"),await e._sleep(400)}},{caption:"Picking a color palette",run:async()=>{await e.moveTo('#vc-palettes [data-pal="matcha-zen"]'),await e.click('#vc-palettes [data-pal="matcha-zen"]'),$("matcha-zen"),await e._sleep(400)}},{caption:"Adding your content",run:async()=>{await e.moveTo("#vc-textarea"),await e.click("#vc-textarea"),await e.type("#vc-typed","Content strategy: SEO, Social, Email, Paid, Brand",26),await e._sleep(300)}},{caption:"Generating the prompt",run:async()=>{await e.moveTo("#vc-generate"),await e.click("#vc-generate"),e.show("#vc-prompt-out"),e.setText("#vc-prompt-out",'Create a professional central-node mindmap titled "Content Strategy" with five branches… Apply the Matcha Zen palette.'),e.show("#vc-copy"),await e._sleep(700)}},{caption:"Copying your prompt",run:async()=>{await e.moveTo("#vc-copy"),await e.click("#vc-copy"),e.setText("#vc-copy","Copied ✓"),await e._sleep(700)}},{caption:"Pasting into your AI tool",run:async()=>{await e.switchPanel("#panel-ai","your-ai-tool.com"),await e.moveTo("#ai-input"),await e.click("#ai-input"),e.setText("#ai-input",'Create a professional central-node mindmap titled "Content Strategy"…'),e.show("#ai-prompt-bubble"),e.setText("#ai-prompt-bubble","Create a professional central-node mindmap… Matcha Zen palette."),await e.moveTo("#ai-send"),await e.click("#ai-send"),e.show("#ai-thinking"),await e._sleep(1100)}},{caption:"Your image appears",run:async()=>{e.hide("#ai-thinking"),e.show("#ai-result"),e.setHTML("#ai-result",u("mindmap","matcha-zen")),e.show("#ai-copyimg"),await e._sleep(900),await e.moveTo("#ai-copyimg button"),await e.click("#ai-copyimg button"),e.setText("#ai-copyimg button","Image copied ✓"),await e._sleep(600)}},{caption:"Pasting into your blog",run:async()=>{await e.switchPanel("#panel-destination","yourblog.com/wp-admin/post-new"),C("blog"),await e.moveTo("#dest-dropzone"),await e.click("#dest-dropzone"),e.setHTML("#dest-dropzone",u("mindmap","matcha-zen")),e.stage.querySelector("#dest-dropzone").classList.add("border-solid","!border-ink-primary"),await e._sleep(1200)}}]),social:e=>g(e,"social"),docs:e=>g(e,"docs"),presentation:e=>g(e,"presentation")};function g(e,a){const t=z[a];return E(a),[{caption:"Choosing a visualization type",run:async()=>{await e.switchPanel("#panel-visualcraft","visualcraft.app/generate"),await e.moveTo(`[data-vc="${t.vcType}"]`),await e.click(`[data-vc="${t.vcType}"]`),L(t.vcType),await e._sleep(400)}},{caption:"Picking a color palette",run:async()=>{await e.moveTo(`#vc-palettes [data-pal="${t.palette}"]`),await e.click(`#vc-palettes [data-pal="${t.palette}"]`),$(t.palette),await e._sleep(400)}},{caption:"Adding your content",run:async()=>{await e.moveTo("#vc-textarea"),await e.click("#vc-textarea"),await e.type("#vc-typed",t.content,26),await e._sleep(300)}},{caption:"Generating the prompt",run:async()=>{await e.moveTo("#vc-generate"),await e.click("#vc-generate"),e.show("#vc-prompt-out"),e.setText("#vc-prompt-out",t.promptShort),e.show("#vc-copy"),await e._sleep(700)}},{caption:"Copying your prompt",run:async()=>{await e.moveTo("#vc-copy"),await e.click("#vc-copy"),e.setText("#vc-copy","Copied ✓"),await e._sleep(700)}},{caption:"Pasting into your AI tool",run:async()=>{await e.switchPanel("#panel-ai","your-ai-tool.com"),await e.moveTo("#ai-input"),await e.click("#ai-input"),e.show("#ai-prompt-bubble"),e.setText("#ai-prompt-bubble",t.promptShort),await e.moveTo("#ai-send"),await e.click("#ai-send"),e.show("#ai-thinking"),await e._sleep(1100)}},{caption:"Your image appears",run:async()=>{e.hide("#ai-thinking"),e.show("#ai-result"),e.setHTML("#ai-result",u(t.vcType,t.palette)),e.show("#ai-copyimg"),await e._sleep(900),await e.moveTo("#ai-copyimg button"),await e.click("#ai-copyimg button"),e.setText("#ai-copyimg button","Image copied ✓"),await e._sleep(600)}},{caption:`Pasting into your ${t.destTitle.toLowerCase()}`,run:async()=>{await e.switchPanel("#panel-destination",t.destUrl),C(a),await e.moveTo("#dest-dropzone"),await e.click("#dest-dropzone"),e.setHTML("#dest-dropzone",u(t.vcType,t.palette)),e.stage.querySelector("#dest-dropzone").classList.add("border-solid","!border-ink-primary"),await e._sleep(1300)}}]}async function x(e,a,t){const i=G[a](e);t.setTotal(i.length);try{for(let s=0;s<i.length;s++){if(e.cancelled)return;t.setStep(s+1,i[s].caption),await i[s].run()}t.markComplete()}catch(s){s!=="cancelled"&&console.error(s)}}const v=document.getElementById("demo-stage");let o=null;const w=["blog","social","docs","presentation"];let f=0,S=!1;const b={setTotal(e){const a=document.getElementById("demo-progress");if(a){a.innerHTML="";for(let t=0;t<e;t++){const i=document.createElement("span");if(i.className="w-2.5 h-2.5 rounded-full bg-ink-primary/15 transition-all duration-300",a.appendChild(i),t<e-1){const s=document.createElement("span");s.className="w-4 h-0.5 bg-ink-primary/10",a.appendChild(s)}}}},setStep(e,a){const t=document.getElementById("demo-progress"),i=document.getElementById("demo-stepnum"),s=document.getElementById("demo-caption");if(i&&(i.textContent=`Step ${e} of 8`),s&&(s.textContent=a),t){const c=t.querySelectorAll("span:not(.w-4)"),l=t.querySelectorAll("span.w-4");c.forEach((r,p)=>{p<e?r.className="w-2.5 h-2.5 rounded-full bg-ink-primary transition-all duration-300":r.className="w-2.5 h-2.5 rounded-full bg-ink-primary/15 transition-all duration-300"}),l.forEach((r,p)=>{p<e-1?r.className="w-4 h-0.5 bg-ink-primary/40":r.className="w-4 h-0.5 bg-ink-primary/10"})}},markComplete(){const e=document.getElementById("demo-progress");e&&e.querySelectorAll("span").forEach(a=>{a.classList.contains("w-2.5")&&(a.className="w-2.5 h-2.5 rounded-full bg-accent-lavender transition-all duration-300")})}};function P(e){document.querySelectorAll(".demo-tab").forEach(a=>{const t=a.getAttribute("data-scenario")===e;a.setAttribute("aria-selected",t?"true":"false"),t?a.classList.add("active"):a.classList.remove("active")})}async function R(){for(;;){const e=w[f];if(P(e),o.cancelled=!1,await x(o,e,b),S)return;await y(1400),f=(f+1)%w.length}}function N(){const e=document.getElementById("static-storyboard"),a=document.getElementById("demo-stage")?.parentElement,t=document.getElementById("demo-tabs")?.parentElement,i=document.getElementById("demo-progress")?.parentElement;a&&a.classList.add("hidden"),t&&t.classList.add("hidden"),i&&i.classList.add("hidden"),e&&(e.classList.remove("hidden"),e.innerHTML=`
        <div class="card -rotate-1 hover:rotate-0 hover:shadow-hard hover:-translate-y-0.5 transition-all duration-200 p-4 text-center">
          <div class="aspect-[4/3] rounded-card-sm bg-cream-darker border border-cream-darker flex items-center justify-center p-3 font-serif font-semibold text-lg text-ink-primary">
            1. Pick type & colors
          </div>
          <p class="text-xs text-ink-secondary mt-3">Choose from 76 diagram structures and 42 custom-themed palettes inside VisualCraft.</p>
        </div>
        <div class="card rotate-1 hover:rotate-0 hover:shadow-hard hover:-translate-y-0.5 transition-all duration-200 p-4 text-center">
          <div class="aspect-[4/3] rounded-card-sm bg-cream-darker border border-cream-darker flex items-center justify-center p-3 font-serif font-semibold text-lg text-ink-primary">
            2. Generate prompt
          </div>
          <p class="text-xs text-ink-secondary mt-3">Input your list or concept text. VisualCraft generates an optimized layout prompt and copies it.</p>
        </div>
        <div class="card -rotate-1 hover:rotate-0 hover:shadow-hard hover:-translate-y-0.5 transition-all duration-200 p-4 text-center">
          <div class="aspect-[4/3] rounded-card-sm overflow-hidden border border-cream-darker">
            ${u("mindmap","matcha-zen")}
          </div>
          <p class="text-xs text-ink-secondary mt-3"><strong>3. Paste into AI</strong><br/>Drop prompt into Gemini, Claude, or ChatGPT to instantly generate the clean vector diagram image.</p>
        </div>
        <div class="card rotate-1 hover:rotate-0 hover:shadow-hard hover:-translate-y-0.5 transition-all duration-200 p-4 text-center">
          <div class="aspect-[4/3] rounded-card-sm bg-cream-darker border border-cream-darker flex items-center justify-center p-3 font-serif font-semibold text-lg text-ink-primary">
            4. Drop into document
          </div>
          <p class="text-xs text-ink-secondary mt-3">Copy image from generator and paste straight into slides, blog posts, papers, or layouts.</p>
        </div>
      `)}document.addEventListener("DOMContentLoaded",async()=>{try{const{PALETTES:e}=await I(async()=>{const{PALETTES:a}=await import("./visualizations.DWDada6-.js");return{PALETTES:a}},[]);k=e}catch(e){console.warn("Failed to dynamically import visualizations.js, using fallback palettes",e),k=[{id:"matcha-zen",colors:["#F4F9EE","#CBE5B6","#87A96B","#5A7F3E","#2D5520"]},{id:"berry-pop",colors:["#FFF0F5","#FFC0CB","#FF69B4","#DA70D6","#8A2BE2"]},{id:"slate-gray",colors:["#F5F5F5","#E0E0E0","#9E9E9E","#616161","#212121"]},{id:"deep-sapphire",colors:["#E1F5FE","#81D4FA","#29B6F6","#0288D1","#01579B"]}]}if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)N();else{o=new H(v),document.getElementById("demo-tabs")?.addEventListener("click",a=>{const t=a.target.closest(".demo-tab");t&&(S=!0,o.cancel(),f=w.indexOf(t.dataset.scenario),P(t.dataset.scenario),setTimeout(async()=>{o.cancelled=!1,await x(o,t.dataset.scenario,b)},380))});const e=new IntersectionObserver(([a])=>{o&&(o.paused=!a.isIntersecting)},{threshold:.35});v&&e.observe(v),document.addEventListener("visibilitychange",()=>{o&&(document.hidden?o.paused=!0:v&&document.hasFocus()&&(o.paused=!1))}),document.getElementById("demo-pause")?.addEventListener("click",a=>{if(!o)return;o.paused=!o.paused;const t=a.currentTarget;t.textContent=o.paused?"▶ Play":"⏸ Pause"}),document.getElementById("demo-replay")?.addEventListener("click",()=>{o&&(o.cancel(),setTimeout(async()=>{o&&(o.cancelled=!1,await x(o,w[f],b))},360))}),R()}});

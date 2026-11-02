(function(){
const T={
 en:{navHome:"Home",navCheck:"Pair checker",navBrowse:"Browse all",navDrugs:"Drugs A–Z",navAbout:"Sources & method",
  heroEyebrow:"For nurses and pharmacists",heroTitle:"Check IV compatibility before you mix.",
  heroLead:"Search drugs and IV fluids, or check two together. Every result links to the official label it came from.",
  searchPh:"Search a drug, brand or fluid (e.g. ceftriaxone, NS, Zosyn)",searchBtn:"Search",tryLabel:"Try:",
  statEntries:"verified entries",statDrugs:"drugs & fluids",statSources:"official sources",
  heroCardT:"What's inside",heroCardP:"Drug + diluent, Y-site, same-bag admixture and syringe data from FDA labels and UK SmPCs.",
  alert:"Reference only. A missing pair means “no data here”, not “compatible”. Always confirm with your pharmacist or a licensed reference (Trissel's, King Guide) before giving.",
  typesT:"Browse by type",typesL:"Four ways drugs meet in IV therapy. Pick one to see every verified entry.",
  t_Diluent:"Drug + diluent",t_Ysite:"Y-site",t_Admixture:"Admixture (same bag)",t_Syringe:"Syringe",
  d_Diluent:"Which fluid to reconstitute or dilute in.",d_Ysite:"Two infusions meeting at the same line.",d_Admixture:"Two drugs mixed in one bag.",d_Syringe:"Two drugs drawn into one syringe.",
  entries:"entries",checkT:"Pair checker",checkL:"Pick two drugs or fluids to see what the label says about giving them together.",
  drugA:"Drug or fluid A",drugB:"Drug or fluid B",check:"Check",pickPh:"Start typing…",
  noPair:"<b>No verified data for this pair.</b> That does not mean they are compatible. Check Trissel's, King Guide, or ask your pharmacist.",
  needTwo:"Choose two items to check.",
  dangerT:"High-risk incompatibilities",dangerL:"Combinations the labels warn against most strongly.",
  browseT:"Browse all entries",browseL:"Filter by type and result, or search in any language.",
  filterType:"Type",filterRes:"Result",all:"All",showing:"Showing {n} of {t}",
  noRes:"<b>No verified entry for this search.</b> That does not mean compatible. Check a licensed reference or ask your pharmacist.",
  drugsT:"Drugs & fluids A–Z",drugsL:"Open any item to see everything we have verified for it.",
  back:"← All drugs",aka:"Also known as",nothing:"No entries.",
  source:"Source",S_C:"Compatible",S_I:"Incompatible",S_K:"Conditional",S_N:"Not established",
  SD_C:"The label lists this combination as compatible.",SD_I:"The label says do not mix, or warns of precipitation or inactivation.",SD_K:"Allowed only under the specific conditions stated in the label.",SD_N:"The label says compatibility has not been tested or established.",
  aboutT:"Sources & method",
  aboutP1:"Every entry on this site was checked on 2 November 2026 against official prescribing information: US FDA labels (DailyMed and manufacturer sites), UK SmPCs (emc), the UK MHRA, and manufacturer medical information. Anything we could not trace to one of these sources was left out.",
  aboutP2:"Rules can differ between brands and generics of the same drug. Piperacillin-tazobactam is a well-known example. Always check the label of the product you are holding, and the concentration you are using.",
  aboutP3:"This site is not a substitute for a licensed compatibility reference or a pharmacist. Coverage is intentionally small so that every line is checkable.",
  legendT:"What the results mean",srcT:"All sources",
  footNote:"Free reference for IV compatibility, built from official drug labels. Not medical advice; confirm with a pharmacist before administration.",
  footVerified:"Data verified 2 Nov 2026 · 46 entries · EN / ID"},
 id:{navHome:"Beranda",navCheck:"Cek pasangan",navBrowse:"Semua data",navDrugs:"Obat A–Z",navAbout:"Sumber & metode",
  heroEyebrow:"Untuk perawat dan apoteker",heroTitle:"Cek kompatibilitas IV sebelum mencampur.",
  heroLead:"Cari obat dan cairan IV, atau cek dua sekaligus. Setiap hasil ditautkan ke label resmi sumbernya.",
  searchPh:"Cari obat, merek, atau cairan (mis. seftriakson, NaCl, Zosyn)",searchBtn:"Cari",tryLabel:"Coba:",
  statEntries:"data terverifikasi",statDrugs:"obat & cairan",statSources:"sumber resmi",
  heroCardT:"Isi situs",heroCardP:"Data obat + pelarut, Y-site, campuran dalam satu kantong, dan spuit dari label FDA dan SmPC Inggris.",
  alert:"Hanya sebagai referensi. Pasangan yang tidak ada berarti “tidak ada data”, bukan “kompatibel”. Selalu konfirmasi dengan apoteker atau referensi berlisensi (Trissel's, King Guide) sebelum memberikan obat.",
  typesT:"Telusuri berdasarkan jenis",typesL:"Empat cara obat bertemu dalam terapi IV. Pilih salah satu untuk melihat semua data terverifikasi.",
  t_Diluent:"Obat + pelarut",t_Ysite:"Y-site",t_Admixture:"Campuran (satu kantong)",t_Syringe:"Spuit",
  d_Diluent:"Cairan untuk rekonstitusi atau pengenceran.",d_Ysite:"Dua infus bertemu di satu jalur.",d_Admixture:"Dua obat dicampur dalam satu kantong.",d_Syringe:"Dua obat ditarik ke dalam satu spuit.",
  entries:"data",checkT:"Cek pasangan",checkL:"Pilih dua obat atau cairan untuk melihat apa kata label tentang pemberian bersama.",
  drugA:"Obat atau cairan A",drugB:"Obat atau cairan B",check:"Cek",pickPh:"Mulai ketik…",
  noPair:"<b>Tidak ada data terverifikasi untuk pasangan ini.</b> Bukan berarti kompatibel. Periksa Trissel's, King Guide, atau tanyakan apoteker.",
  needTwo:"Pilih dua item untuk dicek.",
  dangerT:"Inkompatibilitas berisiko tinggi",dangerL:"Kombinasi yang paling keras diperingatkan oleh label.",
  browseT:"Semua data",browseL:"Saring menurut jenis dan hasil, atau cari dalam bahasa apa pun.",
  filterType:"Jenis",filterRes:"Hasil",all:"Semua",showing:"Menampilkan {n} dari {t}",
  noRes:"<b>Tidak ada data terverifikasi untuk pencarian ini.</b> Bukan berarti kompatibel. Periksa referensi berlisensi atau tanyakan apoteker.",
  drugsT:"Obat & cairan A–Z",drugsL:"Buka item mana pun untuk melihat semua data terverifikasinya.",
  back:"← Semua obat",aka:"Nama lain",nothing:"Tidak ada data.",
  source:"Sumber",S_C:"Kompatibel",S_I:"Inkompatibel",S_K:"Bersyarat",S_N:"Belum terbukti",
  SD_C:"Label menyatakan kombinasi ini kompatibel.",SD_I:"Label melarang pencampuran, atau memperingatkan endapan atau inaktivasi.",SD_K:"Hanya boleh dengan syarat khusus yang tertulis di label.",SD_N:"Label menyatakan kompatibilitas belum diuji atau belum terbukti.",
  aboutT:"Sumber & metode",
  aboutP1:"Setiap data di situs ini telah diperiksa pada 2 November 2026 terhadap informasi resep resmi: label FDA AS (DailyMed dan situs produsen), SmPC Inggris (emc), MHRA Inggris, dan informasi medis produsen. Data yang tidak dapat ditelusuri ke sumber tersebut tidak dimasukkan.",
  aboutP2:"Aturan dapat berbeda antara merek dan generik dari obat yang sama, contohnya piperasilin-tazobaktam. Selalu periksa label produk yang Anda pegang dan konsentrasi yang digunakan.",
  aboutP3:"Situs ini bukan pengganti referensi kompatibilitas berlisensi atau apoteker. Cakupan sengaja dibuat kecil agar setiap baris dapat diverifikasi.",
  legendT:"Arti hasil",srcT:"Semua sumber",
  footNote:"Referensi gratis kompatibilitas IV, disusun dari label obat resmi. Bukan nasihat medis; konfirmasi dengan apoteker sebelum pemberian.",
  footVerified:"Data diverifikasi 2 Nov 2026 · 46 data · EN / ID"}
};
const TYPES=["Diluent","Y-site","Admixture","Syringe"];
const TK=t=>t.replace("-","");
const ICON={Diluent:'<path d="M8 3h8M9 3v6l-4 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-9V3"/>',"Y-site":'<path d="M6 3v6a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3M12 15v6"/>',Admixture:'<rect x="6" y="3" width="12" height="15" rx="3"/><path d="M6 10h12M12 18v3"/>',Syringe:'<path d="M18 2l4 4M15 5l4 4M3 21l4-4M7 17l9-9-3-3-9 9 3 3zM10 8l2 2"/>'};
const svg=p=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const N=window.NAMES,S=window.SOURCES;
const rows=window.ROWS.map(([type,a,b,s,src,en,id],i)=>({i,type,a,b,s,src,en,id,hay:(N[a].join(" ")+" "+N[b].join(" ")+" "+type).toLowerCase()}));
let lang="en";try{lang=localStorage.getItem("ivlang")||(navigator.language||"").toLowerCase().startsWith("id")&&"id"||"en"}catch(e){}
const t=k=>T[lang][k]||k;
const nm=k=>lang==="id"?N[k][1]:N[k][0];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const app=document.getElementById("app");
let browseState={q:"",type:"all",s:"all"};

function card(r){
  return `<article class="res s-${r.s}"><span class="pill p-${r.s}">${t("S_"+r.s)}</span><div>
  <div class="pair"><a href="#drug-${r.a}">${esc(nm(r.a))}</a><span class="x">+</span>${N[r.b][3]==="other"?esc(nm(r.b)):`<a href="#drug-${r.b}">${esc(nm(r.b))}</a>`}<span class="tag">${t("t_"+TK(r.type))}</span></div>
  <p class="note">${esc(lang==="id"?r.id:r.en)}</p>
  <div class="src">${t("source")}: ${r.src.map(k=>`<a href="${S[k][1]}" target="_blank" rel="noopener">${esc(S[k][0])}</a>`).join(" · ")}</div></div></article>`;
}
function tokens(q){return q.toLowerCase().split(/[\s,+/]+|\band\b|\bdan\b|\bwith\b|\bdengan\b|\bvs\b/).map(x=>x.trim()).filter(x=>x.length>1)}
function search(q,type,s){const tk=tokens(q);return rows.filter(r=>(type==="all"||r.type===type)&&(s==="all"||r.s===s)&&tk.every(x=>r.hay.includes(x)))}
const alertHTML=`<div class="alert">${svg('<path d="M12 3l10 18H2L12 3z"/><path d="M12 10v5M12 18h.01"/>')}<span>${t("alert")}</span></div>`;

function picker(id,ph){return `<div class="field"><label for="${id}">${ph}</label><input id="${id}" autocomplete="off" placeholder="${t("pickPh")}"><div class="sug" id="${id}-s" hidden></div></div>`}
function bindPicker(id){
  const inp=document.getElementById(id),box=document.getElementById(id+"-s");
  const keys=Object.keys(N);
  const show=()=>{const q=inp.value.toLowerCase().trim();
    const m=keys.filter(k=>!q||N[k].join(" ").toLowerCase().includes(q)).sort((a,b)=>nm(a).localeCompare(nm(b))).slice(0,12);
    box.innerHTML=m.map(k=>`<button type="button" data-k="${k}">${esc(nm(k))}</button>`).join("");box.hidden=!m.length};
  inp.addEventListener("focus",show);inp.addEventListener("input",()=>{inp.dataset.k="";show()});
  box.addEventListener("mousedown",e=>{const b=e.target.closest("button");if(!b)return;e.preventDefault();inp.value=nm(b.dataset.k);inp.dataset.k=b.dataset.k;box.hidden=true;runCheck()});
  inp.addEventListener("blur",()=>setTimeout(()=>box.hidden=true,120));
}
function resolve(inp){if(inp.dataset.k)return inp.dataset.k;const q=inp.value.toLowerCase().trim();if(!q)return"";const k=Object.keys(N).find(k=>N[k].join(" ").toLowerCase().split(/\s+/).includes(q)||nm(k).toLowerCase()===q)||Object.keys(N).find(k=>N[k].join(" ").toLowerCase().includes(q));return k||""}
function runCheck(){
  const a=document.getElementById("pa"),b=document.getElementById("pb"),out=document.getElementById("verdict");if(!a)return;
  const ka=resolve(a),kb=resolve(b);
  if(!ka||!kb){out.innerHTML=`<div class="empty">${t("needTwo")}</div>`;return}
  const GR={chloride:["ns"],dexAll:["d5w"],d5_20:["d5w"],caDil:["lr","caSol"],caIV:["caSol"],ambisome:["amphoB"],tobra:["aminog"],amigent:["aminog"]};
  const g=k=>[k,...(GR[k]||[])],ov=(x,y)=>g(x).some(v=>g(y).includes(v));
  const hit=rows.filter(r=>(ov(r.a,ka)&&ov(r.b,kb))||(ov(r.a,kb)&&ov(r.b,ka)));
  out.innerHTML=hit.length?hit.map(card).join(""):`<div class="empty">${t("noPair")}</div>`;
}
function checkerHTML(){return `<div class="checker"><div class="pairin">${picker("pa",t("drugA"))}<span class="plus">+</span>${picker("pb",t("drugB"))}<button class="btn" id="pgo">${t("check")}</button></div><div class="verdict" id="verdict"></div></div>`}
function bindChecker(pre){bindPicker("pa");bindPicker("pb");document.getElementById("pgo").onclick=runCheck;
  if(pre){const a=document.getElementById("pa"),b=document.getElementById("pb");a.value=nm(pre[0]);a.dataset.k=pre[0];b.value=nm(pre[1]);b.dataset.k=pre[1];runCheck()}}

const views={
 home(){
  const items=Object.keys(N).length,srcs=Object.keys(S).length;
  const danger=[10,1,7,4,22,17].map(i=>rows[i]);
  app.innerHTML=`<div class="view">
  <section class="hero"><div class="sec">
   <div><p class="eyebrow">${t("heroEyebrow")}</p><h1>${t("heroTitle")}</h1><p>${t("heroLead")}</p>
    <form class="hero-search" id="hs"><input id="hq" type="search" placeholder="${t("searchPh")}" aria-label="${t("searchBtn")}"><button class="btn">${svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>')}${t("searchBtn")}</button></form>
    <div class="quick">${t("tryLabel")} ${["ceftriaxone calcium","phenytoin","NS","ketorolac","Zosyn"].map(q=>`<button type="button" data-q="${q}">${q}</button>`).join("")}</div></div>
   <div class="hero-card"><h3>${t("heroCardT")}</h3><p>${t("heroCardP")}</p>
    <div class="stats"><div class="stat"><b>${rows.length}</b><span>${t("statEntries")}</span></div><div class="stat"><b>${items}</b><span>${t("statDrugs")}</span></div><div class="stat"><b>${srcs}</b><span>${t("statSources")}</span></div></div></div>
  </div></section>
  <section class="sec"><p class="eyebrow">${t("navCheck")}</p><h2>${t("checkT")}</h2><p class="lead">${t("checkL")}</p>${checkerHTML()}</section>
  <section class="sec" style="padding-top:0"><h2>${t("typesT")}</h2><p class="lead">${t("typesL")}</p>
   <div class="grid4">${TYPES.map(ty=>`<a class="tcard" href="#browse" data-type="${ty}"><span class="ic">${svg(ICON[ty])}</span><h3>${t("t_"+TK(ty))}</h3><p>${t("d_"+TK(ty))}</p><span class="n">${rows.filter(r=>r.type===ty).length} ${t("entries")}</span></a>`).join("")}</div></section>
  <section class="sec" style="padding-top:0"><h2>${t("dangerT")}</h2><p class="lead">${t("dangerL")}</p><div class="list">${danger.map(card).join("")}</div></section></div>`;
  document.getElementById("hs").onsubmit=e=>{e.preventDefault();browseState={q:document.getElementById("hq").value,type:"all",s:"all"};go("browse")};
  app.querySelectorAll(".quick button").forEach(b=>b.onclick=()=>{browseState={q:b.dataset.q,type:"all",s:"all"};go("browse")});
  app.querySelectorAll(".tcard").forEach(a=>a.onclick=()=>{browseState={q:"",type:a.dataset.type,s:"all"}});
  bindChecker(["ceftri","caIV"]);
 },
 check(){app.innerHTML=`<div class="view"><section class="sec"><p class="eyebrow">${t("navCheck")}</p><h2>${t("checkT")}</h2><p class="lead">${t("checkL")}</p>${checkerHTML()}</section></div>`;bindChecker()},
 browse(){
  const opts=(name,list,cur)=>[["all",t("all")],...list].map(([v,l])=>`<label class="opt"><input type="radio" name="${name}" value="${v}" ${cur===v?"checked":""}> ${l}<span class="c" data-c="${name}:${v}"></span></label>`).join("");
  app.innerHTML=`<div class="view"><section class="sec"><p class="eyebrow">${t("navBrowse")}</p><h2>${t("browseT")}</h2><p class="lead">${t("browseL")}</p>
  <div class="browse"><aside class="side"><div><h4>${t("filterType")}</h4>${opts("ft",TYPES.map(x=>[x,t("t_"+TK(x))]),browseState.type)}</div><div><h4>${t("filterRes")}</h4>${opts("fs",["I","C","K","N"].map(x=>[x,t("S_"+x)]),browseState.s)}</div></aside>
  <div class="list"><div class="bar"><input id="bq" type="search" placeholder="${t("searchPh")}" value="${esc(browseState.q)}"><span class="count" id="bc"></span></div><div class="list" id="bl"></div></div></div></section></div>`;
  const draw=()=>{const h=search(browseState.q,browseState.type,browseState.s);
   document.getElementById("bc").textContent=t("showing").replace("{n}",h.length).replace("{t}",rows.length);
   document.getElementById("bl").innerHTML=h.length?h.map(card).join(""):`<div class="empty">${t("noRes")}</div>`;
   app.querySelectorAll("[data-c]").forEach(el=>{const[f,v]=el.dataset.c.split(":");el.textContent=f==="ft"?search(browseState.q,v,browseState.s).length:search(browseState.q,browseState.type,v).length})};
  document.getElementById("bq").oninput=e=>{browseState.q=e.target.value;draw()};
  app.querySelectorAll("input[name=ft]").forEach(r=>r.onchange=()=>{browseState.type=r.value;draw()});
  app.querySelectorAll("input[name=fs]").forEach(r=>r.onchange=()=>{browseState.s=r.value;draw()});
  draw();
 },
 drugs(){
  const keys=Object.keys(N).filter(k=>N[k][3]!=="other").sort((a,b)=>nm(a).localeCompare(nm(b)));let last="",html="";
  keys.forEach(k=>{const L=nm(k)[0].toUpperCase();if(L!==last){html+=`<div class="letter">${L}</div>`;last=L}
   const rs=rows.filter(r=>r.a===k||r.b===k),ci=rs.filter(r=>r.s==="I").length,cc=rs.filter(r=>r.s==="C").length;
   html+=`<a class="dcard" href="#drug-${k}"><div><b>${esc(nm(k))}</b><small>${rs.length} ${t("entries")}</small></div><span class="badges">${ci?`<span class="dot p-I" title="${t("S_I")}">${ci}</span>`:""}${cc?`<span class="dot p-C" title="${t("S_C")}">${cc}</span>`:""}</span></a>`});
  app.innerHTML=`<div class="view"><section class="sec"><p class="eyebrow">${t("navDrugs")}</p><h2>${t("drugsT")}</h2><p class="lead">${t("drugsL")}</p><div class="az">${html}</div></section></div>`;
 },
 drug(k){
  if(!N[k]){go("drugs");return}
  const rs=rows.filter(r=>r.a===k||r.b===k);
  const aliases=N[k][2].split(" ").filter(w=>w.length>2&&!nm(k).toLowerCase().includes(w)).slice(0,6).join(", ");
  app.innerHTML=`<div class="view"><section class="sec"><a class="crumb" href="#drugs">${t("back")}</a>
  <div class="dhead"><div><h1>${esc(nm(k))}</h1>${aliases?`<p class="alias">${t("aka")}: ${esc(aliases)}</p>`:""}</div><a class="btn ghost" href="#check">${t("navCheck")} →</a></div>

  ${TYPES.map(ty=>{const g=rs.filter(r=>r.type===ty);return g.length?`<div class="group"><h3><span class="tcard-ic">${svg(ICON[ty])}</span>${t("t_"+TK(ty))}</h3><div class="list">${g.map(card).join("")}</div></div>`:""}).join("")||`<div class="empty">${t("nothing")}</div>`}
  </section></div>`;
 },
 about(){
  app.innerHTML=`<div class="view"><section class="sec"><p class="eyebrow">${t("navAbout")}</p><h2>${t("aboutT")}</h2>
  <div class="about"><div><p>${t("aboutP1")}</p><p>${t("aboutP2")}</p><p>${t("aboutP3")}</p>
   <h3>${t("srcT")}</h3><ul class="srclist">${Object.values(S).map(([l,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${esc(l)}</a></li>`).join("")}</ul></div>
  <div><h3 style="margin-top:0">${t("legendT")}</h3><div class="legend">${["C","I","K","N"].map(s=>`<div><span class="pill p-${s}">${t("S_"+s)}</span><p>${t("SD_"+s)}</p></div>`).join("")}</div></div></div></section></div>`;
 }
};
function go(h){if(location.hash==="#"+h)route();else location.hash=h}
function route(){
  const h=(location.hash||"#home").slice(1);
  document.getElementById("links").classList.remove("open");
  document.querySelectorAll(".links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+(h.startsWith("drug-")?"drugs":h)));
  if(h.startsWith("drug-"))views.drug(h.slice(5));else(views[h]||views.home)();
  window.scrollTo(0,0);
}
function applyLang(){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===lang));
}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{lang=b.dataset.lang;try{localStorage.setItem("ivlang",lang)}catch(e){}applyLang();route()});
const bg=document.getElementById("burger");bg.onclick=()=>{const o=document.getElementById("links").classList.toggle("open");bg.setAttribute("aria-expanded",o)};
window.addEventListener("hashchange",route);
applyLang();route();
})();

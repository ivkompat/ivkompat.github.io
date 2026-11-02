(function(){
"use strict";
const T={
 en:{navHome:"Home",navCheck:"Pair checker",navBrowse:"Browse all",navDrugs:"Drugs A–Z",
  heroT:"IV compatibility reference",
  heroP:"Choose two drugs or IV fluids to see whether they can be mixed, diluted or run together. Every result shows its source.",
  first:"First drug or fluid",second:"Second drug or fluid",choose:"Select…",
  gDrugs:"Drugs",gFluids:"IV fluids",swap:"Swap",clear:"Clear",
  pickBoth:"Select two items to see the result.",
  direct:"Result for this pair",general:"General rules for these drugs",
  noPairT:"No data for this pair",noPairP:"This combination is not in the database yet. Check with your pharmacy before mixing.",
  details:"Full details",source:"Source",sources:"Sources",
  statE:"checked entries",statD:"drugs and fluids",statS:"sources",
  typesT:"Browse by type",typesP:"See every entry for one way of giving drugs together.",
  keyT:"Key incompatibilities",keyP:"Combinations that cause precipitation or loss of activity.",
  t_Diluent:"Drug + diluent",t_Ysite:"Y-site",t_Admixture:"Same bag",t_Syringe:"Same syringe",
  d_Diluent:"Which fluid to reconstitute or dilute in.",d_Ysite:"Two infusions meeting in one line.",d_Admixture:"Two drugs mixed in one bag.",d_Syringe:"Two drugs drawn up in one syringe.",
  entries:"entries",
  checkT:"Pair checker",checkP:"Select two drugs or fluids. Results come from official drug labels, hospital compatibility charts, manufacturer testing and Indonesian studies.",
  browseT:"Browse all entries",browseP:"Search any drug, brand or fluid in English or Indonesian. Select a row to see full details.",
  search:"Search",searchPh:"e.g. ceftriaxone, NaCl, Zosyn",typeL:"Type",resL:"Result",all:"All",
  count:"{n} of {t} entries",more:"Show more",noRes:"No entries match this search.",
  colRes:"Result",colPair:"Combination",colType:"Type",colNote:"Details",
  drugsT:"Drugs and fluids A–Z",drugsP:"Select a drug to see every combination checked for it.",
  filterPh:"Filter by name",colName:"Name",colAlt:"Indonesian name",colN:"Entries",colI:"Incompatible",colC:"Compatible",
  combined:"Combined with",aka:"Also searched as",
  home:"Home",about:"About this entry",type:"Type",result:"Result",checked:"Last checked",
  checkedDate:"2 November 2026",otherFor:"Other entries for",openDrug:"Open drug page",
  S_C:"Compatible",S_I:"Incompatible",S_K:"Conditional",S_N:"Not established",S_D:"Conflicting data",SD_D:"Sources disagree. Check with the pharmacy before giving together.",
  SD_C:"The source lists this combination as compatible.",SD_I:"The source says not to mix, or warns of precipitation or loss of activity.",SD_K:"Depends on conditions such as concentration or product; see the details.",SD_N:"No compatibility information is available.",
  foot:"IV Compat. Compiled from official drug labels, hospital compatibility charts, manufacturer testing and Indonesian research. Last checked 2 November 2026."},
 id:{navHome:"Beranda",navCheck:"Cek pasangan",navBrowse:"Semua data",navDrugs:"Obat A–Z",
  heroT:"Referensi kompatibilitas IV",
  heroP:"Pilih dua obat atau cairan IV untuk melihat apakah keduanya boleh dicampur, diencerkan, atau diberikan bersama. Setiap hasil menampilkan sumbernya.",
  first:"Obat atau cairan pertama",second:"Obat atau cairan kedua",choose:"Pilih…",
  gDrugs:"Obat",gFluids:"Cairan IV",swap:"Tukar",clear:"Hapus",
  pickBoth:"Pilih dua item untuk melihat hasil.",
  direct:"Hasil untuk pasangan ini",general:"Aturan umum untuk obat ini",
  noPairT:"Tidak ada data untuk pasangan ini",noPairP:"Kombinasi ini belum ada di database. Konfirmasi dengan farmasi sebelum mencampur.",
  details:"Detail lengkap",source:"Sumber",sources:"Sumber",
  statE:"data terperiksa",statD:"obat dan cairan",statS:"sumber",
  typesT:"Telusuri berdasarkan jenis",typesP:"Lihat semua data untuk satu cara pemberian obat bersama.",
  keyT:"Inkompatibilitas utama",keyP:"Kombinasi yang menyebabkan endapan atau hilangnya aktivitas obat.",
  t_Diluent:"Obat + pelarut",t_Ysite:"Y-site",t_Admixture:"Satu kantong",t_Syringe:"Satu spuit",
  d_Diluent:"Cairan untuk rekonstitusi atau pengenceran.",d_Ysite:"Dua infus bertemu di satu jalur.",d_Admixture:"Dua obat dicampur dalam satu kantong.",d_Syringe:"Dua obat ditarik ke satu spuit.",
  entries:"data",
  checkT:"Cek pasangan",checkP:"Pilih dua obat atau cairan. Hasil berasal dari label obat resmi, bagan kompatibilitas rumah sakit, uji produsen, dan studi di Indonesia.",
  browseT:"Semua data",browseP:"Cari obat, merek, atau cairan dalam bahasa Inggris atau Indonesia. Pilih baris untuk melihat detail.",
  search:"Cari",searchPh:"mis. seftriakson, NaCl, Zosyn",typeL:"Jenis",resL:"Hasil",all:"Semua",
  count:"{n} dari {t} data",more:"Tampilkan lebih banyak",noRes:"Tidak ada data yang cocok.",
  colRes:"Hasil",colPair:"Kombinasi",colType:"Jenis",colNote:"Keterangan",
  drugsT:"Obat dan cairan A–Z",drugsP:"Pilih obat untuk melihat semua kombinasi yang sudah diperiksa.",
  filterPh:"Saring nama",colName:"Nama",colAlt:"Nama Inggris",colN:"Data",colI:"Inkompatibel",colC:"Kompatibel",
  combined:"Dikombinasikan dengan",aka:"Juga dicari sebagai",
  home:"Beranda",about:"Tentang data ini",type:"Jenis",result:"Hasil",checked:"Terakhir diperiksa",
  checkedDate:"2 November 2026",otherFor:"Data lain untuk",openDrug:"Buka halaman obat",
  S_C:"Kompatibel",S_I:"Inkompatibel",S_K:"Bersyarat",S_N:"Belum terbukti",S_D:"Data bertentangan",SD_D:"Sumber saling bertentangan. Konfirmasi dengan farmasi sebelum diberikan bersama.",
  SD_C:"Sumber menyatakan kombinasi ini kompatibel.",SD_I:"Sumber melarang pencampuran, atau memperingatkan endapan atau hilangnya aktivitas.",SD_K:"Tergantung kondisi seperti konsentrasi atau produk; lihat detail.",SD_N:"Tidak ada informasi kompatibilitas.",
  foot:"IV Compat. Disusun dari label obat resmi, bagan kompatibilitas rumah sakit, uji produsen, dan penelitian di Indonesia. Terakhir diperiksa 2 November 2026."}
};
const TYPES=["Diluent","Y-site","Admixture","Syringe"],TK=x=>x.replace("-","");
const N=window.NAMES,S=window.SOURCES;
const rows=window.ROWS.map(([type,a,b,s,src,en,id],i)=>({i,type,a,b,s,src,en,id,hay:(N[a].slice(0,3).join(" ")+" "+N[b].slice(0,3).join(" ")).toLowerCase()}));
// Keys that also count as a broader item in the pair checker
const GR={cagluc:["caSol","caIV"],genta:["aminog","amigent"],amika:["aminog","amigent"],mgso4:["mag"],ampi:["betalact"],cefaz:["betalact"],cefotax:["betalact"],ceftaz:["betalact"],cefurox:["betalact"],cloxa:["betalact"],peng:["betalact"],cefepime:["betalact"],chloride:["ns"],dexAll:["d5w"],d5_20:["d5w"],caDil:["lr","caSol"],caIV:["caSol"],ambisome:["amphoB"],tobra:["aminog"],amigent:["aminog"],
  ceftri:["betalact"],piptazo:["betalact"],mero:["betalact"],erta:["betalact"]};
const ov=(rowKey,sel)=>rowKey===sel||(GR[rowKey]||[]).includes(sel)||(GR[sel]||[]).includes(rowKey);
const GENERAL=["anyDrug","anyPN","anyLine"];
const FLUIDS=["ns","d5w","lr","plyte","caSol"];
const ICON={Diluent:'<path d="M8 3h8M9 3v6l-4 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-9V3"/>',"Y-site":'<path d="M6 3v6a6 6 0 0 0 12 0V3M12 15v6"/>',Admixture:'<rect x="6" y="3" width="12" height="15" rx="3"/><path d="M6 10h12M12 18v3"/>',Syringe:'<path d="M18 2l4 4M15 5l4 4M3 21l4-4M7 17l9-9-3-3-9 9 3 3z"/>'};
const svg=(p,s=22)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const SYMI={D:'<path d="M7 8h10M7 16h10M14 5l3 3-3 3M10 13l-3 3 3 3"/>',C:'<path d="M5 12l5 5L20 7"/>',I:'<path d="M6 6l12 12M18 6L6 18"/>',K:'<path d="M12 7v6M12 17h.01"/>',N:'<path d="M9 9a3 3 0 1 1 4 2.8c-.7.3-1 1-1 1.7v.5M12 17h.01"/>'};

let lang="en";try{lang=localStorage.getItem("ivlang")||((navigator.language||"").toLowerCase().startsWith("id")?"id":"en")}catch(e){}
const t=k=>T[lang][k]??k, nm=k=>lang==="id"?N[k][1]:N[k][0], other=k=>lang==="id"?N[k][0]:N[k][1];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const note=r=>lang==="id"?r.id:r.en;
const app=document.getElementById("app");
let pair={a:"",b:""};
let bs={q:"",type:"all",s:"all"};

const pill=s=>`<span class="pill ${s}">${svg(SYMI[s],13)}${t("S_"+s)}</span>`;
const srcOne=k=>S[k][1]?`<a href="${S[k][1]}" target="_blank" rel="noopener">${esc(S[k][0])}</a>`:esc(S[k][0]);
const srcLinks=r=>r.src.map(srcOne).join("; ");
function verdict(r){
  return `<article class="verdict"><div class="vband ${r.s}">${svg(SYMI[r.s],20)}${t("S_"+r.s)}</div>
  <div class="vbody"><p class="vpair">${esc(nm(r.a))} + ${esc(nm(r.b))}</p><a class="vmore" href="#e-${r.i}">${t("details")}</a>
  <p class="vtype">${t("t_"+TK(r.type))}: ${t("d_"+TK(r.type))}</p>
  <p class="vnote">${esc(note(r))}</p><div class="vsrc">${t("source")}: ${srcLinks(r)}</div></div></article>`;
}
function rowsTable(list,{hideA,match}={}){
  return `<div class="tablebox"><div class="tscroll"><table class="data"><thead><tr><th>${t("colRes")}</th><th>${hideA?t("combined"):t("colPair")}</th><th>${t("colType")}</th><th>${t("colNote")}</th><th></th></tr></thead><tbody>${
   list.length?list.map(r=>{const otherK=hideA?((match?ov(r.a,hideA):r.a===hideA)?r.b:r.a):null;
    return `<tr data-go="e-${r.i}"><td>${pill(r.s)}</td><td class="p">${hideA?esc(nm(otherK)):`${esc(nm(r.a))}<span class="x">+</span>${esc(nm(r.b))}`}</td><td class="m">${t("t_"+TK(r.type))}</td><td class="note">${esc(note(r))}</td><td class="chev">›</td></tr>`}).join("")
   :`<tr class="empty-row"><td colspan="5">${t("noRes")}</td></tr>`}</tbody></table></div></div>`;
}
function bindRows(root=app){root.querySelectorAll("tr[data-go]").forEach(tr=>tr.onclick=e=>{if(e.target.closest("a"))return;location.hash=tr.dataset.go})}

/* ---------- Pair checker ---------- */
function options(sel){
  const drugs=Object.keys(N).filter(k=>N[k][3]==="drug").sort((a,b)=>nm(a).localeCompare(nm(b)));
  const o=k=>`<option value="${k}"${k===sel?" selected":""}>${esc(nm(k))}</option>`;
  return `<option value="">${t("choose")}</option><optgroup label="${t("gFluids")}">${FLUIDS.map(o).join("")}</optgroup><optgroup label="${t("gDrugs")}">${drugs.map(o).join("")}</optgroup>`;
}
function selectorHTML(){
  return `<div class="selector"><div class="row">
   <div class="fld"><label for="sa">${t("first")}</label><select id="sa">${options(pair.a)}</select></div>
   <button class="swap" id="sw" type="button" aria-label="${t("swap")}" title="${t("swap")}">${svg('<path d="M7 4L3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/>',20)}</button>
   <div class="fld"><label for="sb">${t("second")}</label><select id="sb">${options(pair.b)}</select></div></div>
   <div class="sel-foot"><span id="sel-hint">${t("pickBoth")}</span><button type="button" id="sclr">${t("clear")}</button></div></div>`;
}
function bindSelector(out){
  const sa=document.getElementById("sa"),sb=document.getElementById("sb");
  const run=()=>{pair={a:sa.value,b:sb.value};renderPair(out)};
  sa.onchange=run;sb.onchange=run;
  document.getElementById("sw").onclick=()=>{[sa.value,sb.value]=[sb.value,sa.value];run()};
  document.getElementById("sclr").onclick=()=>{sa.value="";sb.value="";run()};
  renderPair(out);
}
function lookup(a,b){
  const direct=rows.filter(r=>(ov(r.a,a)&&ov(r.b,b))||(ov(r.a,b)&&ov(r.b,a)));
  const general=rows.filter(r=>GENERAL.includes(r.b)&&(r.a===a||r.a===b)&&!direct.includes(r));
  return {direct,general};
}
function renderPair(out){
  const el=document.getElementById(out),hint=document.getElementById("sel-hint");
  const sec=document.getElementById("hsec");
  if(!pair.a||!pair.b||pair.a===pair.b){el.innerHTML="";hint.textContent=t("pickBoth");if(sec)sec.hidden=true;return}
  if(sec)sec.hidden=false;
  hint.textContent=`${nm(pair.a)} + ${nm(pair.b)}`;
  const {direct,general}=lookup(pair.a,pair.b);
  let h=`<p class="rgroup">${t("direct")}</p>`;
  h+=direct.length?direct.map(verdict).join(""):`<div class="nodata"><b>${t("noPairT")}</b>${t("noPairP")}</div>`;
  if(general.length)h+=`<p class="rgroup">${t("general")}</p>`+general.map(verdict).join("");
  el.innerHTML=h;
}

/* ---------- Views ---------- */
const V={
 home(){
  const drugs=Object.keys(N).filter(k=>N[k][3]==="drug"||FLUIDS.includes(k)).length;
  const keyRows=rows.filter(r=>r.s==="I"&&["ceftri","phenytoin","oxali","ambisome","filg","piptazo","levo","vanco"].includes(r.a)&&!GENERAL.includes(r.b));
  const pick=[];["ceftri","phenytoin","oxali","ambisome","piptazo","vanco","levo","filg"].forEach(a=>{const r=keyRows.find(x=>x.a===a);if(r)pick.push(r)});
  app.innerHTML=`<section class="hero"><div class="wrap"><h1>${t("heroT")}</h1><p>${t("heroP")}</p>${selectorHTML()}</div></section>
  <div class="wrap"><section class="section" id="hsec" hidden><div class="results" id="hres"></div></section>
  <section class="section"><div class="stats"><div class="stat"><b>${rows.length}</b><span>${t("statE")}</span></div><div class="stat"><b>${drugs}</b><span>${t("statD")}</span></div><div class="stat"><b>${Object.keys(S).length}</b><span>${t("statS")}</span></div></div></section>
  <section class="section"><h2>${t("typesT")}</h2><p class="sub">${t("typesP")}</p><div class="tiles">${TYPES.map(ty=>`<a class="tile" href="#browse" data-type="${ty}"><span class="ic">${svg(ICON[ty])}</span><h3>${t("t_"+TK(ty))}</h3><p>${t("d_"+TK(ty))}</p><span class="n">${rows.filter(r=>r.type===ty).length} ${t("entries")}</span></a>`).join("")}</div></section>
  <section class="section"><h2>${t("keyT")}</h2><p class="sub">${t("keyP")}</p>${rowsTable(pick)}</section></div>`;
  bindSelector("hres");bindRows();
  app.querySelectorAll(".tile").forEach(a=>a.onclick=()=>{bs={q:"",type:a.dataset.type,s:"all"}});
 },
 check(){
  app.innerHTML=`<div class="wrap page"><h1>${t("checkT")}</h1><p class="sub">${t("checkP")}</p>${selectorHTML()}<div class="results" id="cres" style="margin-top:20px"></div></div>`;
  bindSelector("cres");
 },
 browse(){
  const opt=(list,cur)=>[["all",t("all")],...list].map(([v,l])=>`<option value="${v}"${v===cur?" selected":""}>${l}</option>`).join("");
  app.innerHTML=`<div class="wrap page"><h1>${t("browseT")}</h1><p class="sub">${t("browseP")}</p>
   <div class="filters"><div class="fld"><label for="bq">${t("search")}</label><input id="bq" type="search" placeholder="${t("searchPh")}" value="${esc(bs.q)}"></div>
   <div class="fld"><label for="bt">${t("typeL")}</label><select id="bt">${opt(TYPES.map(x=>[x,t("t_"+TK(x))]),bs.type)}</select></div>
   <div class="fld"><label for="bsr">${t("resL")}</label><select id="bsr">${opt(["I","D","K","N","C"].map(x=>[x,t("S_"+x)]),bs.s)}</select></div></div>
   <p class="count" id="bc"></p><div id="bl"></div></div>`;
  const draw=()=>{const k=bs.q.toLowerCase().split(/[\s,+/]+/).filter(x=>x.length>1);
   const h=rows.filter(r=>(bs.type==="all"||r.type===bs.type)&&(bs.s==="all"||r.s===bs.s)&&k.every(x=>r.hay.includes(x)));
   document.getElementById("bc").textContent=t("count").replace("{n}",h.length).replace("{t}",rows.length);
   const show=h.slice(0,limit);document.getElementById("bl").innerHTML=rowsTable(show)+(h.length>limit?`<div style="text-align:center;margin-top:16px"><button class="btn-more" id="bmore" type="button">${t("more")} (${h.length-limit})</button></div>`:"");bindRows();
   const m=document.getElementById("bmore");if(m)m.onclick=()=>{limit+=100;draw()}};
  let limit=100;
  document.getElementById("bq").oninput=e=>{bs.q=e.target.value;limit=100;draw()};
  document.getElementById("bt").onchange=e=>{bs.type=e.target.value;limit=100;draw()};
  document.getElementById("bsr").onchange=e=>{bs.s=e.target.value;limit=100;draw()};
  draw();
 },
 drugs(){
  const ks=Object.keys(N).filter(k=>N[k][3]==="drug"||FLUIDS.includes(k)).sort((a,b)=>nm(a).localeCompare(nm(b)));
  app.innerHTML=`<div class="wrap page"><h1>${t("drugsT")}</h1><p class="sub">${t("drugsP")}</p>
   <div class="filters" style="grid-template-columns:minmax(0,1fr)"><div class="fld"><label for="dq">${t("search")}</label><input id="dq" type="search" placeholder="${t("filterPh")}"></div></div><div id="dl"></div></div>`;
  const draw=q=>{q=q.toLowerCase().trim();const list=ks.filter(k=>!q||N[k].slice(0,3).join(" ").toLowerCase().includes(q));
   document.getElementById("dl").innerHTML=`<div class="tablebox"><div class="tscroll"><table class="data"><thead><tr><th>${t("colName")}</th><th>${t("colAlt")}</th><th class="num">${t("colN")}</th><th class="num">${t("colI")}</th><th class="num">${t("colC")}</th><th></th></tr></thead><tbody>${
    list.length?list.map(k=>{const rs=rows.filter(r=>ov(r.a,k)||ov(r.b,k));const ni=rs.filter(r=>r.s==="I").length,nc=rs.filter(r=>r.s==="C").length;
     return `<tr data-go="d-${k}"><td class="p">${esc(nm(k))}</td><td class="m">${esc(other(k)!==nm(k)?other(k):"")}</td><td class="num">${rs.length}</td><td class="num">${ni?`<span class="pill I">${ni}</span>`:"–"}</td><td class="num">${nc?`<span class="pill C">${nc}</span>`:"–"}</td><td class="chev">›</td></tr>`}).join("")
    :`<tr class="empty-row"><td colspan="6">${t("noRes")}</td></tr>`}</tbody></table></div></div>`;bindRows()};
  document.getElementById("dq").oninput=e=>draw(e.target.value);draw("");
 },
 drug(k){
  if(!N[k])return go("drugs");
  const rs=rows.filter(r=>ov(r.a,k)||ov(r.b,k));
  const sum=["I","D","K","N","C"].map(s=>[s,rs.filter(r=>r.s===s).length]).filter(x=>x[1]);
  const al=[...new Set(N[k][2].split(" "))].filter(w=>w.length>2&&!nm(k).toLowerCase().includes(w)).slice(0,6).join(", ");
  app.innerHTML=`<div class="wrap page"><div class="crumb"><a href="#drugs">${t("navDrugs")}</a><span>›</span><span>${esc(nm(k))}</span></div>
   <h1>${esc(nm(k))}</h1><p class="sub">${al?`${t("aka")}: ${esc(al)}`:""}</p>
   <div class="dsum">${sum.map(([s,n])=>`<span class="pill ${s}">${svg(SYMI[s],13)}${n} ${t("S_"+s)}</span>`).join("")}</div>
   ${TYPES.map(ty=>{const gq=rs.filter(r=>r.type===ty);return gq.length?`<section class="section" style="padding-top:0;padding-bottom:28px"><h2 style="font-size:1.15rem;margin-bottom:12px">${t("t_"+TK(ty))}</h2>${rowsTable(gq,{hideA:k,match:true})}</section>`:""}).join("")}</div>`;
  bindRows();
 },
 entry(i){
  const r=rows[+i];if(!r)return go("browse");
  const rel=rows.filter(x=>x!==r&&(x.a===r.a||x.b===r.a)).slice(0,8);
  app.innerHTML=`<div class="wrap page"><div class="crumb"><a href="#browse">${t("navBrowse")}</a><span>›</span><span>${esc(nm(r.a))} + ${esc(nm(r.b))}</span></div>
   <div class="detail"><div>${verdict(r).replace(/<a class="vmore"[^>]*>[^<]*<\/a>/,"")}
     ${rel.length?`<section class="section" style="padding-bottom:0"><h2 style="font-size:1.15rem;margin-bottom:12px">${t("otherFor")} ${esc(nm(r.a))}</h2>${rowsTable(rel,{hideA:r.a})}</section>`:""}</div>
    <aside><div class="panel"><h3>${t("about")}</h3><dl>
     <dt>${t("result")}</dt><dd>${pill(r.s)}</dd>
     <dt>${t("type")}</dt><dd>${t("t_"+TK(r.type))}</dd>
     <dt>${t("checked")}</dt><dd>${t("checkedDate")}</dd></dl>
     <p style="margin-top:14px;color:var(--muted);font-size:.92rem">${t("SD_"+r.s)}</p></div>
     <div class="panel"><h3>${t("sources")}</h3><ul>${r.src.map(k=>`<li>${srcOne(k)}</li>`).join("")}</ul></div>
     <div class="panel"><ul style="list-style:none;padding:0">${[r.a,r.b].filter(k=>N[k][3]!=="other").map(k=>`<li><a href="#d-${k}">${t("openDrug")}: ${esc(nm(k))}</a></li>`).join("")}</ul></div></aside></div></div>`;
  bindRows();
 }
};
function go(h){if(location.hash==="#"+h)route();else location.hash=h}
function route(){
  const h=(location.hash||"#home").slice(1);
  document.getElementById("links").classList.remove("open");document.getElementById("burger").setAttribute("aria-expanded","false");
  const sec=h.startsWith("d-")?"drugs":h.startsWith("e-")?"browse":(V[h]?h:"home");
  document.querySelectorAll(".links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+sec));
  if(h.startsWith("d-"))V.drug(h.slice(2));else if(h.startsWith("e-"))V.entry(h.slice(2));else(V[h]&&!["drug","entry"].includes(h)?V[h]:V.home)();
  scrollTo(0,0);
}
function applyLang(){document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===lang))}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{lang=b.dataset.lang;try{localStorage.setItem("ivlang",lang)}catch(e){}applyLang();route()});
const bg=document.getElementById("burger");bg.onclick=()=>bg.setAttribute("aria-expanded",document.getElementById("links").classList.toggle("open"));
addEventListener("hashchange",route);applyLang();route();
})();

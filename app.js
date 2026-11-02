(function(){
const T={
 en:{navHome:"Chart",navBrowse:"All entries",navDrugs:"Drugs A–Z",navAbout:"Sources",
  h1:"Can these two run together?",
  lead:"Pick two drugs or fluids, or tap a square on the chart. Each answer comes from the official label and links to it.",
  drugA:"First drug or fluid",drugB:"Second drug or fluid",pickPh:"Type a name, brand or abbreviation",
  hint:"Choose both to see the answer.",
  warn:"An empty square means we have no checked data, not that the pair is safe. Confirm with your pharmacist before giving.",
  chartT:"Compatibility chart",chartS:"Tap a square",
  noPair:"<strong>No checked data for this pair.</strong> That does not mean they are compatible. Ask your pharmacist or check Trissel's or King Guide.",
  colRes:"Result",colPair:"Combination",colType:"How they meet",colNote:"What the label says",
  t_Diluent:"Diluent",t_Ysite:"Y-site",t_Admixture:"Same bag",t_Syringe:"Same syringe",
  d_Diluent:"fluid to dilute in",d_Ysite:"two lines meeting",d_Admixture:"mixed in one bag",d_Syringe:"drawn up together",
  strongT:"The warnings that matter most",strongL:"Combinations that cause precipitation or loss of drug activity, per the label.",
  typesT:"Look up by how drugs meet",
  browseT:"All entries",browseL:"Every combination we have checked, with its source. Search in English or Indonesian.",
  search:"Search",searchPh:"Drug, brand or fluid",typeL:"How they meet",resL:"Result",all:"All",
  count:"{n} of {t} entries",
  noRes:"<strong>Nothing found.</strong> No result here does not mean compatible. Try another spelling, or ask your pharmacist.",
  drugsT:"Drugs and fluids A–Z",drugsL:"Open one to see everything checked for it.",entries:"entries",
  back:"All drugs",aka:"Also searched as",
  source:"Source",S_C:"Compatible",S_I:"Incompatible",S_K:"Conditional",S_N:"Not established",
  SD_C:"The label lists the combination as compatible.",SD_I:"The label says do not mix, or warns of precipitation or loss of activity.",SD_K:"Allowed only under the conditions written in the label.",SD_N:"The label says compatibility has not been tested.",
  aboutT:"Where the data comes from",
  aboutP1:"Every entry was checked on 2 November 2026 against official prescribing information: US FDA labels, UK product characteristics (SmPC), the UK MHRA, and manufacturer medical information. Anything we could not trace to one of these was left out.",
  aboutP2:"Rules can differ between brands and generics of the same drug; piperacillin-tazobactam is a known example. Check the label of the product in your hand and the concentration you are using.",
  aboutP3:"This site is a quick reference, not a replacement for a licensed compatibility reference or your pharmacist. It covers a small number of drugs so that every line can be checked.",
  legendT:"What the symbols mean",srcT:"Sources used",
  footNote:"Free IV compatibility reference built from official drug labels, checked 2 November 2026. Not medical advice."},
 id:{navHome:"Bagan",navBrowse:"Semua data",navDrugs:"Obat A–Z",navAbout:"Sumber",
  h1:"Bolehkah keduanya diberikan bersama?",
  lead:"Pilih dua obat atau cairan, atau ketuk kotak pada bagan. Setiap jawaban berasal dari label resmi dan ditautkan ke sumbernya.",
  drugA:"Obat atau cairan pertama",drugB:"Obat atau cairan kedua",pickPh:"Ketik nama, merek, atau singkatan",
  hint:"Pilih keduanya untuk melihat jawaban.",
  warn:"Kotak kosong berarti kami belum punya data yang diperiksa, bukan berarti aman. Konfirmasi dengan apoteker sebelum memberikan obat.",
  chartT:"Bagan kompatibilitas",chartS:"Ketuk sebuah kotak",
  noPair:"<strong>Belum ada data untuk pasangan ini.</strong> Bukan berarti kompatibel. Tanyakan apoteker atau periksa Trissel's atau King Guide.",
  colRes:"Hasil",colPair:"Kombinasi",colType:"Cara bertemu",colNote:"Isi label",
  t_Diluent:"Pelarut",t_Ysite:"Y-site",t_Admixture:"Satu kantong",t_Syringe:"Satu spuit",
  d_Diluent:"cairan pengencer",d_Ysite:"dua jalur bertemu",d_Admixture:"dicampur dalam satu kantong",d_Syringe:"ditarik bersama",
  strongT:"Peringatan paling penting",strongL:"Kombinasi yang menyebabkan endapan atau hilangnya aktivitas obat, menurut label.",
  typesT:"Cari berdasarkan cara bertemu",
  browseT:"Semua data",browseL:"Setiap kombinasi yang sudah diperiksa, beserta sumbernya. Cari dalam bahasa Inggris atau Indonesia.",
  search:"Cari",searchPh:"Obat, merek, atau cairan",typeL:"Cara bertemu",resL:"Hasil",all:"Semua",
  count:"{n} dari {t} data",
  noRes:"<strong>Tidak ditemukan.</strong> Tidak ada hasil bukan berarti kompatibel. Coba ejaan lain atau tanyakan apoteker.",
  drugsT:"Obat dan cairan A–Z",drugsL:"Buka salah satu untuk melihat semua data yang sudah diperiksa.",entries:"data",
  back:"Semua obat",aka:"Juga dicari sebagai",
  source:"Sumber",S_C:"Kompatibel",S_I:"Inkompatibel",S_K:"Bersyarat",S_N:"Belum terbukti",
  SD_C:"Label menyatakan kombinasi ini kompatibel.",SD_I:"Label melarang pencampuran, atau memperingatkan endapan atau hilangnya aktivitas.",SD_K:"Hanya boleh dengan syarat yang tertulis di label.",SD_N:"Label menyatakan kompatibilitas belum diuji.",
  aboutT:"Asal data",
  aboutP1:"Setiap data diperiksa pada 2 November 2026 terhadap informasi resep resmi: label FDA AS, ringkasan karakteristik produk Inggris (SmPC), MHRA Inggris, dan informasi medis produsen. Data yang tidak dapat ditelusuri ke sumber tersebut tidak dimasukkan.",
  aboutP2:"Aturan dapat berbeda antara merek dan generik dari obat yang sama, contohnya piperasilin-tazobaktam. Periksa label produk yang Anda pegang dan konsentrasi yang digunakan.",
  aboutP3:"Situs ini adalah referensi cepat, bukan pengganti referensi kompatibilitas berlisensi atau apoteker. Jumlah obat sengaja dibatasi agar setiap baris dapat diperiksa.",
  legendT:"Arti simbol",srcT:"Sumber yang digunakan",
  footNote:"Referensi kompatibilitas IV gratis dari label obat resmi, diperiksa 2 November 2026. Bukan nasihat medis."}
};
const TYPES=["Diluent","Y-site","Admixture","Syringe"],TK=x=>x.replace("-","");
const SYM={C:"✓",I:"✕",K:"!",N:"?"},RANK={I:4,K:3,N:2,C:1};
const N=window.NAMES,S=window.SOURCES;
const rows=window.ROWS.map(([type,a,b,s,src,en,id],i)=>({i,type,a,b,s,src,en,id,hay:(N[a].join(" ")+" "+N[b].join(" ")).toLowerCase()}));

// Chart groups: data keys that roll up into one chart line
const MX=[["ns","NaCl 0.9%","NaCl 0,9%"],["d5w","Dextrose 5%","Dekstrosa 5%"],["lr","Lactated Ringer's","Ringer laktat"],["ca","Calcium","Kalsium"],
 ["ceftri"],["piptazo","Pip-tazo","Pip-tazo"],["aminog"],["panto"],["midaz"],["dexmed"],["ampho","Amphotericin B","Amfoterisin B"],["diaz"],["bicarb"],["phenytoin"],["filg"],["oxali"],["keto"],["morphine"]];
const GROUP={chloride:["ns"],dexAll:["d5w"],d5_20:["d5w"],caDil:["lr","ca"],caIV:["ca"],caSol:["ca"],ambisome:["ampho"],amphoB:["ampho"],tobra:["aminog"],amigent:["aminog"]};
const G=k=>GROUP[k]||[k];
const hit=(r,x,y)=>(G(r.a).includes(x)&&G(r.b).includes(y))||(G(r.a).includes(y)&&G(r.b).includes(x));

let lang="en";try{lang=localStorage.getItem("ivlang")||((navigator.language||"").toLowerCase().startsWith("id")?"id":"en")}catch(e){}
const t=k=>T[lang][k]??k, nm=k=>lang==="id"?N[k][1]:N[k][0];
const mxName=m=>m[1]?(lang==="id"?m[2]:m[1]):nm(m[0]);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const app=document.getElementById("app");
let bs={q:"",type:"all",s:"all"};

const link=k=>N[k][3]==="other"?esc(nm(k)):`<a href="#drug-${k}">${esc(nm(k))}</a>`;
function table(list,{type=true}={}){
  return `<div class="tbl-scroll"><table class="rtable"><thead><tr><th>${t("colRes")}</th><th>${t("colPair")}</th>${type?`<th>${t("colType")}</th>`:""}<th>${t("colNote")}</th></tr></thead><tbody>${
  list.map(r=>`<tr><td><span class="res ${r.s}"><span class="sym ${r.s}" aria-hidden="true">${SYM[r.s]}</span>${t("S_"+r.s)}</span></td>
  <td class="pr">${link(r.a)}<span class="and">+</span>${link(r.b)}</td>${type?`<td class="kind">${t("t_"+TK(r.type))}</td>`:""}
  <td><p class="nt">${esc(lang==="id"?r.id:r.en)}</p><div class="sr">${t("source")}: ${r.src.map(k=>`<a href="${S[k][1]}" target="_blank" rel="noopener">${esc(S[k][0])}</a>`).join("; ")}</div></td></tr>`).join("")}</tbody></table></div>`;
}
const tok=q=>q.toLowerCase().split(/[\s,+/]+|\band\b|\bdan\b|\bwith\b|\bdengan\b/).map(x=>x.trim()).filter(x=>x.length>1);
const find=(q,ty,s)=>{const k=tok(q);return rows.filter(r=>(ty==="all"||r.type===ty)&&(s==="all"||r.s===s)&&k.every(x=>r.hay.includes(x)))};

/* pickers */
function picker(id,label){return `<div class="field"><label for="${id}">${label}</label><input id="${id}" autocomplete="off" placeholder="${t("pickPh")}"><div class="sug" id="${id}-s" hidden></div></div>`}
function bindPicker(id){
  const inp=document.getElementById(id),box=document.getElementById(id+"-s"),keys=Object.keys(N).filter(k=>N[k][3]!=="other");
  const show=()=>{const q=inp.value.toLowerCase().trim();const m=keys.filter(k=>!q||N[k].slice(0,3).join(" ").toLowerCase().includes(q)).sort((a,b)=>nm(a).localeCompare(nm(b))).slice(0,10);
    box.innerHTML=m.map(k=>`<button type="button" data-k="${k}">${esc(nm(k))}</button>`).join("");box.hidden=!m.length};
  inp.onfocus=show;inp.oninput=()=>{inp.dataset.k="";show();check()};
  box.onmousedown=e=>{const b=e.target.closest("button");if(!b)return;e.preventDefault();inp.value=nm(b.dataset.k);inp.dataset.k=b.dataset.k;box.hidden=true;check()};
  inp.onblur=()=>setTimeout(()=>box.hidden=true,120);
}
function resolve(inp){if(inp.dataset.k)return inp.dataset.k;const q=inp.value.toLowerCase().trim();if(q.length<2)return"";const ks=Object.keys(N);
  return ks.find(k=>nm(k).toLowerCase()===q||N[k][2].split(" ").includes(q))||ks.find(k=>N[k].slice(0,3).join(" ").toLowerCase().includes(q))||""}
function check(){
  const out=document.getElementById("verdict");if(!out)return;
  const ka=resolve(document.getElementById("pa")),kb=resolve(document.getElementById("pb"));
  document.querySelectorAll(".mx button.sel").forEach(b=>b.classList.remove("sel"));
  if(!ka||!kb){out.innerHTML=`<p class="hint">${t("hint")}</p>`;return}
  const ga=G(ka),gb=G(kb);
  const list=rows.filter(r=>(r.a===ka&&r.b===kb)||(r.a===kb&&r.b===ka)||ga.some(x=>gb.some(y=>hit(r,x,y))));
  const uniq=[...new Set(list)];
  out.innerHTML=uniq.length?table(uniq,{type:true}):`<div class="empty">${t("noPair")}</div>`;
}
function setPair(x,y,list){
  const a=document.getElementById("pa"),b=document.getElementById("pb");
  const mx=id=>MX.find(m=>m[0]===id);
  a.value=mxName(mx(x));a.dataset.k=N[x]?x:"";b.value=mxName(mx(y));b.dataset.k=N[y]?y:"";
  document.getElementById("verdict").innerHTML=list.length?table(list):`<div class="empty">${t("noPair")}</div>`;
}

/* chart */
function chart(){
  let h=`<div class="mx-scroll"><table class="mx" role="grid"><thead><tr><th></th>${MX.map((m,j)=>`<th class="col" data-c="${j}"><div>${esc(mxName(m))}</div></th>`).join("")}</tr></thead><tbody>`;
  MX.forEach((r,i)=>{h+=`<tr><th class="row" scope="row">${esc(mxName(r))}</th>`;
    MX.forEach((c,j)=>{
      if(j>i){h+=`<td class="blank"></td>`;return}
      if(i===j){h+=`<td class="diag" aria-hidden="true"></td>`;return}
      const list=rows.filter(x=>hit(x,r[0],c[0]));
      const s=list.reduce((w,x)=>!w||RANK[x.s]>RANK[w]?x.s:w,"");
      h+=`<td><button class="${s||"none"}" data-x="${r[0]}" data-y="${c[0]}" data-j="${j}" aria-label="${esc(mxName(r))} + ${esc(mxName(c))}: ${s?t("S_"+s):"—"}">${s?SYM[s]:""}</button></td>`});
    h+=`</tr>`});
  return h+`</tbody></table></div><div class="key">${["I","K","N","C"].map(s=>`<span><span class="sym ${s}">${SYM[s]}</span>${t("S_"+s)}</span>`).join("")}</div>`;
}
function bindChart(){
  app.querySelectorAll(".mx td button").forEach(b=>{
    b.onclick=()=>{const list=rows.filter(x=>hit(x,b.dataset.x,b.dataset.y));setPair(b.dataset.x,b.dataset.y,list);
      app.querySelectorAll(".mx button.sel").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");
      if(innerWidth<980)document.getElementById("checker").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth",block:"start"})};
    b.onmouseenter=()=>{app.querySelectorAll(".mx th.col").forEach(th=>th.classList.toggle("hl",th.dataset.c===b.dataset.j))};
  });
}

const V={
 home(){
  const strong=[10,1,7,4,22,17].map(i=>rows[i]);
  app.innerHTML=`<div class="wrap page"><div class="home-grid">
   <div class="intro"><h1>${t("h1")}</h1><p class="lead">${t("lead")}</p>
    <div class="checker" id="checker"><div class="pairin">${picker("pa",t("drugA"))}${picker("pb",t("drugB"))}</div><div class="verdict" id="verdict"></div></div>
    <p class="warnline">${t("warn")}</p></div>
   <div class="chart"><div class="chart-head"><h3>${t("chartT")}</h3><span>${t("chartS")}</span></div>${chart()}</div>
  </div>
  <section class="section"><h2>${t("strongT")}</h2><p class="lead" style="margin-bottom:20px">${t("strongL")}</p>${table(strong)}</section>
  <section class="section"><h2>${t("typesT")}</h2><div class="typerow">${TYPES.map(ty=>`<a href="#browse" data-type="${ty}">${t("t_"+TK(ty))}<small>${t("d_"+TK(ty))}, ${rows.filter(r=>r.type===ty).length}</small></a>`).join("")}</div></section></div>`;
  bindPicker("pa");bindPicker("pb");bindChart();check();
  app.querySelectorAll(".typerow a").forEach(a=>a.onclick=()=>{bs={q:"",type:a.dataset.type,s:"all"}});
 },
 browse(){
  const seg=(id,label,opts,cur)=>`<div class="seg"><span>${label}</span><div id="${id}">${[["all",t("all")],...opts].map(([v,l])=>`<button type="button" data-v="${v}" class="${cur===v?"on":""}">${l}</button>`).join("")}</div></div>`;
  app.innerHTML=`<div class="wrap page"><h1>${t("browseT")}</h1><p class="lead">${t("browseL")}</p>
   <div class="browse-tools"><div class="field"><label for="bq">${t("search")}</label><input id="bq" type="search" placeholder="${t("searchPh")}" value="${esc(bs.q)}"></div>
   ${seg("ft",t("typeL"),TYPES.map(x=>[x,t("t_"+TK(x))]),bs.type)}${seg("fs",t("resL"),["I","K","N","C"].map(x=>[x,t("S_"+x)]),bs.s)}</div>
   <p class="count" id="bc"></p><div id="bl"></div></div>`;
  const draw=()=>{const h=find(bs.q,bs.type,bs.s);document.getElementById("bc").textContent=t("count").replace("{n}",h.length).replace("{t}",rows.length);
   document.getElementById("bl").innerHTML=h.length?table(h):`<div class="empty">${t("noRes")}</div>`};
  document.getElementById("bq").oninput=e=>{bs.q=e.target.value;draw()};
  ["ft","fs"].forEach(id=>document.getElementById(id).onclick=e=>{const b=e.target.closest("button");if(!b)return;
   if(id==="ft")bs.type=b.dataset.v;else bs.s=b.dataset.v;document.querySelectorAll(`#${id} button`).forEach(x=>x.classList.toggle("on",x===b));draw()});
  draw();
 },
 drugs(){
  const ks=Object.keys(N).filter(k=>N[k][3]!=="other").sort((a,b)=>nm(a).localeCompare(nm(b)));
  const by={};ks.forEach(k=>{const L=nm(k)[0].toUpperCase();(by[L]=by[L]||[]).push(k)});
  app.innerHTML=`<div class="wrap page"><h1>${t("drugsT")}</h1><p class="lead">${t("drugsL")}</p><div class="az">${Object.keys(by).map(L=>`<div class="az-l"><h3>${L}</h3>${by[L].map(k=>`<a href="#drug-${k}"><span>${esc(nm(k))}</span><small>${rows.filter(r=>r.a===k||r.b===k).length}</small></a>`).join("")}</div>`).join("")}</div></div>`;
 },
 drug(k){
  if(!N[k])return go("drugs");
  const rs=rows.filter(r=>r.a===k||r.b===k);
  const al=[...new Set(N[k][2].split(" "))].filter(w=>w.length>2&&!nm(k).toLowerCase().includes(w)).slice(0,6).join(", ");
  const tally=["I","K","N","C"].map(s=>[s,rs.filter(r=>r.s===s).length]).filter(x=>x[1]);
  app.innerHTML=`<div class="wrap page"><a class="back" href="#drugs">${t("back")}</a>
   <div class="dhead"><div><h1>${esc(nm(k))}</h1>${al?`<p>${t("aka")}: ${esc(al)}</p>`:""}</div><div class="tally">${tally.map(([s,n])=>`<span><span class="sym ${s}">${SYM[s]}</span>${n}</span>`).join("")}</div></div>
   ${TYPES.map(ty=>{const g=rs.filter(r=>r.type===ty);return g.length?`<div class="group"><h3>${t("t_"+TK(ty))}</h3>${table(g,{type:false})}</div>`:""}).join("")}</div>`;
 },
 about(){
  app.innerHTML=`<div class="wrap page"><h1>${t("aboutT")}</h1><div class="about"><div><p>${t("aboutP1")}</p><p>${t("aboutP2")}</p><p>${t("aboutP3")}</p>
   <h3 style="margin-top:28px">${t("srcT")}</h3><ul class="srcs">${Object.values(S).map(([l,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${esc(l)}</a></li>`).join("")}</ul></div>
   <div><h3 style="margin-bottom:12px">${t("legendT")}</h3><div class="legend">${["I","K","N","C"].map(s=>`<div><span class="sym ${s}">${SYM[s]}</span><div><b>${t("S_"+s)}</b><p>${t("SD_"+s)}</p></div></div>`).join("")}</div></div></div></div>`;
 }
};
function go(h){if(location.hash==="#"+h)route();else location.hash=h}
function route(){
  const h=(location.hash||"#home").slice(1);
  document.getElementById("links").classList.remove("open");document.getElementById("burger").setAttribute("aria-expanded","false");
  document.querySelectorAll(".links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+(h.startsWith("drug-")?"drugs":(V[h]?h:"home"))));
  if(h.startsWith("drug-"))V.drug(h.slice(5));else(V[h]||V.home)();
  scrollTo(0,0);
}
function applyLang(){document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===lang))}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{lang=b.dataset.lang;try{localStorage.setItem("ivlang",lang)}catch(e){}applyLang();route()});
const bg=document.getElementById("burger");bg.onclick=()=>bg.setAttribute("aria-expanded",document.getElementById("links").classList.toggle("open"));
addEventListener("hashchange",route);applyLang();route();
})();

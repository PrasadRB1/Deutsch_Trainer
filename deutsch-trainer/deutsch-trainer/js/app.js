// UI, state and progress tracking (saved in localStorage).
const L=['A1','A2','B1','B2','C1','C2'];
let lv='A1',tb='g',bd='goethe',ci=0,fl=0,P={};
try{P=JSON.parse(localStorage.getItem('dlp'))||{}}catch(e){}
P.k=P.k||{};P.e=P.e||{};P.s=P.s||{};P.w=P.w||{};
const sv=()=>{try{localStorage.setItem('dlp',JSON.stringify(P))}catch(e){}};
const $=i=>document.getElementById(i);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const T={g:'Grammar',v:'Flashcards',e:'Exams',w:'Writing',p:'Progress'};
function pct(l){const d=D[l];let n=0;d.g.forEach((_,i)=>n+=P.s[l+i]?1:0);d.v.forEach(x=>n+=P.k[l+x[0]]?1:0);['goethe','telc'].forEach(b=>d.e[b].forEach((_,i)=>n+=P.e[l+b+i]===1?1:0));n+=P.w[l]?1:0;return Math.round(n/(D[l].g.length+8+4+1)*100)}
function nav(){$('lv').innerHTML=L.map(l=>`<button class="${l==lv?'on':''}" onclick="lv='${l}';ci=0;fl=0;draw()">${l}</button>`).join('');
$('tb').innerHTML=Object.keys(T).map(t=>`<button class="${t==tb?'on':''}" onclick="tb='${t}';draw()">${T[t]}</button>`).join('')}
function draw(){nav();$('v').innerHTML=({g:vg,v:vv,e:ve,w:vw,p:vp})[tb]()}
function vg(){const d=D[lv];return d.g.map((x,i)=>`<div class="card"><details ${i==0?'open':''}><summary>${lv}.${i+1} ${esc(x[0])}</summary><p>${esc(x[1])}</p><div class="tip">💡 ${esc(x[2])}</div><p><button onclick="P.s['${lv}${i}']=!P.s['${lv}${i}'];sv();draw()">${P.s[lv+i]?'✓ Learned':'Mark as learned'}</button></p></details></div>`).join('')}
function vv(){const d=D[lv].v,c=d[ci%d.length],kn=d.filter(x=>P.k[lv+x[0]]).length,gc=c[0].startsWith('der ')?'#3b82f6':c[0].startsWith('die ')?'#ef4444':c[0].startsWith('das ')?'#22c55e':'inherit';
return `<div class="card"><div class="mu">Card ${ci%d.length+1}/${d.length} · known ${kn}/${d.length}</div><div class="bar"><b style="width:${kn/d.length*100}%"></b></div></div>
<div class="card fc" onclick="fl=!fl;draw()">${fl?esc(c[1]):`<span style="color:${gc}">${esc(c[0])}</span>`}<div class="mu" style="font-size:13px">tap to flip</div></div>
<div class="row"><button onclick="mk(0)">↺ Again</button><button class="on" onclick="mk(1)">✓ Got it</button></div><div class="tip">💡 Colour code: blue = der, red = die, green = das. Say the word aloud and write one sentence with it.</div>`}
function mk(k){const c=D[lv].v[ci%8];P.k[lv+c[0]]=k?1:0;sv();ci++;fl=0;draw()}
function ve(){const d=D[lv].e[bd];return `<div class="row"><button class="${bd=='goethe'?'on':''}" onclick="bd='goethe';draw()">Goethe style</button><button class="${bd=='telc'?'on':''}" onclick="bd='telc';draw()">telc style</button><button onclick="rs()">Reset</button></div>`+
d.map((q,i)=>{const key=lv+bd+i,a=P.e[key+'a'];return `<div class="card"><b>${lv} · Part ${i+1}</b><p>${esc(q[0])}</p>${q[1].map((o,j)=>`<button class="opt ${a==null?'':j==q[2]?'ok':j==a?'no':''}" ${a==null?`onclick="an('${key}',${j},${q[2]})"`:'disabled'}>${esc(o)}</button>`).join('')}${a==null?'':`<div class="tip">${a==q[2]?'✅ Correct. ':'❌ Not quite. '}${esc(q[3])}</div>`}</div>`}).join('')}
function an(k,j,c){P.e[k]=j==c?1:0;P.e[k+'a']=j;sv();draw()}
function rs(){['goethe','telc'].forEach(b=>D[lv].e[b].forEach((_,i)=>{delete P.e[lv+b+i];delete P.e[lv+b+i+'a']}));sv();draw()}
function vw(){return `<div class="card"><b>Task ${lv}</b><p>${esc(D[lv].w)}</p><textarea id="wt" placeholder="Schreiben Sie hier …"></textarea><p><button class="on" onclick="chk()">Check my writing</button></p><div id="wo"></div></div>`}
function vp(){return L.map(l=>`<div class="card"><b>${l}</b> <span class="mu">${pct(l)}%</span><div class="bar"><b style="width:${pct(l)}%"></b></div></div>`).join('')+'<div class="row"><button onclick="if(confirm(\'Reset all progress?\')){P={k:{},e:{},s:{},w:{}};sv();draw()}">Reset all</button></div>'}
draw();

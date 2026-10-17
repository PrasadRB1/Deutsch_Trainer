// Writing feedback: offline rule checker + optional AI correction with the user's own Anthropic API key.
const NOUNS=['haus','auto','schule','arbeit','freund','familie','stadt','buch','wasser','essen','urlaub','wohnung'];
function loc(t){const m=[],r=[[/\bich habe gegangen\b/i,'ich bin gegangen','Motion verbs form the Perfekt with sein.'],[/\bweil \w+ (bin|ist|habe|hat|kann|muss)\b/i,'verb at the end','After weil the conjugated verb goes to the end.'],[/\bich bin (\d+) jahre\b/i,'Ich bin … Jahre alt','Say: Ich bin 25 Jahre alt.'],[/\b(trotz|wegen) dem\b/i,'trotz/wegen + Genitiv','Formal German uses the genitive here.']];
r.forEach(x=>{const f=t.match(x[0]);if(f)m.push({wrong:f[0],right:x[1],why:x[2]})});
NOUNS.forEach(n=>{const f=t.match(new RegExp('\\b(der|die|das|ein|eine|mein|meine) ('+n+')\\b'));if(f)m.push({wrong:f[2],right:n[0].toUpperCase()+n.slice(1),why:'German nouns are always capitalised.'})});
return{score:null,corrected:'',mistakes:m,tip:`Offline check only (${t.split(/\s+/).length} words). Add an API key below for full corrections.`}}
const _vw=vw;
vw=function(){let k='';try{k=localStorage.getItem('dlk')||''}catch(e){}return _vw()+`<div class="card"><b>Optional AI feedback</b><p class="mu">Paste your own Anthropic API key for full corrections. It stays in this browser and is sent only to api.anthropic.com.</p><input id="ak" type="password" placeholder="sk-ant-…" value="${esc(k)}" onchange="try{localStorage.setItem('dlk',this.value.trim())}catch(e){}" style="width:100%;padding:8px;border-radius:8px;border:1px solid var(--bd);background:var(--card);color:var(--tx)"></div>`};
async function ai(t,key){const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'content-type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},body:JSON.stringify({model:'claude-sonnet-5-5',max_tokens:1000,messages:[{role:'user',content:`You are a German teacher. Student level CEFR ${lv}. Task: ${D[lv].w}\nStudent text:\n${t}\nReturn ONLY JSON: {"score":0-10,"corrected":"full corrected text","mistakes":[{"wrong":"","right":"","why":"short English explanation"}],"tip":"one study tip"}`}]})});
if(!r.ok)throw new Error(r.status);const d=await r.json();return JSON.parse(d.content[0].text.replace(/```json|```/g,'').trim())}
async function chk(){const t=$('wt').value.trim();if(!t)return;$('wo').innerHTML='Checking…';let r=null,k='';
try{k=localStorage.getItem('dlk')||''}catch(e){}
if(k){try{r=await ai(t,k)}catch(e){}}
if(!r)r=loc(t);P.w[lv]=1;sv();
$('wo').innerHTML=(r.score!=null?`<h3>Score: ${esc(r.score)}/10</h3>`:'')+(r.corrected?`<div class="tip"><u>${esc(r.corrected)}</u></div>`:'')+(r.mistakes||[]).map(m=>`<div class="m"><s>${esc(m.wrong)}</s> → <u>${esc(m.right)}</u><div class="mu">${esc(m.why)}</div></div>`).join('')+(!(r.mistakes||[]).length?'<p>No mistakes detected 🎉</p>':'')+(r.tip?`<div class="tip">💡 ${esc(r.tip)}</div>`:'')}

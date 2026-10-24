
const $=s=>document.querySelector(s),LOGO="images/logo.webp";
let S,QV='',UF='',DR=null;let admin=false,dirty=false,tm;try{admin=sessionStorage.getItem('adm')=='1';const th=localStorage.getItem('th');if(th)document.documentElement.dataset.theme=th}catch(_){}
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const P={fs:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",mn:"M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",us:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",out:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",ph:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",wa:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"};
const I=(p,s=22)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor"><path d="${p}"/></svg>`;
const BG={g10:'الصف 10',g11:'الصف 11 علمي',g12:'الصف 12 علمي'},GN={g10:'الصف العاشر',g11:'الحادي عشر علمي',g12:'الثاني عشر علمي'},SN=['الفصل الدراسي الأول','الفصل الدراسي الثاني'];
const PG=document.body.dataset.page,Q=new URLSearchParams(location.search);
const H=()=>{const f=location.pathname.split('/').pop()||'index.html',q=new URLSearchParams(location.search);return f=='staff.html'?'staff':f=='contact.html'?'contact':f=='grade.html'?q.get('g'):f=='semester.html'?q.get('g')+'s'+q.get('s'):'home'};
const U=h=>h=='home'?'index.html':h=='staff'?'staff.html':h=='contact'?'contact.html':h.length==3?'grade.html?g='+h:'semester.html?g='+h.slice(0,3)+'&s='+h[4]+(h[5]==':'?'&u='+encodeURIComponent(h.slice(6)):'');
const tel=()=>'tel:+965'+S.contact.phone.replace(/\D/g,'').replace(/^965/,'');
const wal=()=>'https://wa.me/'+S.contact.wa.replace(/\D/g,'');
const BC=a=>`<nav class="bc">${[['الرئيسية','home'],...a].map(([n,h],i)=>(i?'<i>/</i>':'')+(h?`<button data-a="nav" data-h="${h}">${E(n)}</button>`:`<span>${E(n)}</span>`)).join('')}</nav>`;
const dlg=(msg,ask,err)=>new Promise(r=>{let o=$('#dg');if(!o){o=document.createElement('div');o.id='dg';document.body.appendChild(o)}
o.innerHTML=`<div class="mo dm"><div class="bx al" role="alertdialog" aria-modal="true"><button type="button" class="xb" data-k="0" aria-label="إغلاق">✕</button><div class="ai${ask||err?' w':''}">${ask||err?'!':'i'}</div><p>${E(msg)}</p><div class="r c">${ask?'<button class="b d" data-k="1">تأكيد</button><button class="b g" data-k="0">إلغاء</button>':'<button class="b" data-k="1">حسنًا</button>'}</div></div></div>`;
const kd=e=>{if(e.key=='Escape')fin(false)};
const fin=v=>{o.innerHTML='';document.removeEventListener('keydown',kd);r(v)};
document.addEventListener('keydown',kd);
o.onclick=e=>{const b=e.target.closest('[data-k]');if(b)fin(b.dataset.k=='1')};
o.querySelector(ask?'.g':'button').focus()});
const SC=x=>`${x.photo?`<img class="av" src="${x.photo}">`:`<div class="av">${E((x.name||'؟')[0])}</div>`}<h3>${E(x.name)}</h3><b class="rl">${E(x.role)}</b>${x.subject?`<div class="sj">${E(x.subject)}</div>`:''}${x.email?`<a class="em" href="mailto:${E(x.email)}">${E(x.email)}</a>`:''}${x.msg?`<p>${E(x.msg)}</p>`:''}`;
let zc=null;
function zm(el){const x=S.staff[+el.dataset.i];if(!x)return;let o=$('#zm');if(!o){o=document.createElement('div');o.id='zm';document.body.appendChild(o)}
o.innerHTML=`<div class="mo zo"><div class="cd st big" role="dialog" aria-modal="true"><button type="button" class="xb" data-z aria-label="إغلاق">✕</button>${SC(x)}</div></div>`;
const bd=o.firstChild,c=bd.firstChild;c.style.setProperty('--cc',getComputedStyle(el).getPropertyValue('--cc'));
const fl=()=>{const a=el.getBoundingClientRect(),b=c.getBoundingClientRect();return`translate(${a.left+a.width/2-b.left-b.width/2}px,${a.top+a.height/2-b.top-b.height/2}px) scale(${a.width/b.width})`};
if(el.isConnected)c.style.transform=fl();c.style.opacity='.3';void c.offsetWidth;c.style.transition='transform .38s cubic-bezier(.2,.8,.2,1),opacity .3s';c.style.transform='';c.style.opacity='';
const kd=e=>{if(e.key=='Escape')close()};
const close=()=>{if(!zc)return;zc=null;document.removeEventListener('keydown',kd);c.style.transform='';if(el.isConnected)c.style.transform=fl();c.style.opacity='.3';bd.style.animation='none';void bd.offsetWidth;bd.style.transition='opacity .3s';bd.style.opacity='0';setTimeout(()=>{o.innerHTML=''},320)};
zc=close;document.addEventListener('keydown',kd);
bd.onclick=e=>{if(!e.target.closest('.big')||e.target.closest('[data-z]'))close()}}
const WS=window.WISDOM||[],TO=WS.map((_,i)=>i).sort(()=>Math.random()-.5);let TP=0,T0=Date.now();
const tkH=()=>{const w=WS[TO[TP%TO.length]];return w?`<b>${w[0]} اليوم:</b> ${E(w[1])}`:''};
const tk=()=>WS.length?`<div class="tk"><div class="tkw"><span id="tkt">${tkH()}</span></div></div>`:'';
function tkStart(){const s=$('#tkt');if(!s)return;const run=()=>{s.style.animationDuration=Math.max(20,s.offsetWidth/40)+'s'};run();s.style.animationDelay='-'+(((Date.now()-T0)/1000)%parseFloat(s.style.animationDuration))+'s';
s.addEventListener('animationiteration',()=>{TP++;T0=Date.now();s.innerHTML=tkH();s.style.animation='none';void s.offsetWidth;s.style.animation='';s.style.animationDelay='0s';run()})}
const list=(l,g,s)=>l=='m'?S.grades[g][s]:l=='u'?S.units[g+'s'+(+s+1)]:S.staff;
const UQ=()=>new URLSearchParams(location.search).get('u');
const cnt=n=>n==0?'لا نماذج':n==1?'نموذج واحد':n==2?'نموذجان':n<=10?n+' نماذج':n+' نموذجًا';
const fit=()=>{const h=$('header'),f=$('#ft'),r=document.documentElement.style;if(h)r.setProperty('--hh',h.offsetHeight+'px');if(f)r.setProperty('--fh',f.offsetHeight+'px')};
addEventListener('resize',fit);
function tools(l,g,s,i){if(!admin)return'';const a=`data-l="${l}" data-g="${g||''}" data-s="${s??''}" data-i="${i}"`;return`<div class="tb"><button class="b s" data-a="ed" ${a}>تعديل</button><button class="b s" data-a="up" ${a}>▲</button><button class="b s" data-a="dn" ${a}>▼</button><button class="b s d" data-a="rm" ${a}>حذف</button></div>`}
function view(){const h=H(),m=h.match(/^(g1[012])(?:s([12]))?$/);
 if(h=='staff')return`${BC([['الهيئة التعليمية']])}${admin?`<div class="ad"><button class="b" data-a="add" data-l="s">+ إضافة بطاقة</button></div>`:''}${CT.map(([k,n])=>{const L=S.staff.map((x,i)=>[x,i]).filter(([x])=>(x.cat||'teacher')==k);if(!L.length&&!admin)return'';return`<section class="dz" data-dz="s" data-c="${k}"><h3 class="sh">${n}</h3><div class="gr">${L.map(([x,i])=>`<div class="cd st" data-a="zm" data-i="${i}" data-c="${k}"${admin?' draggable="true" data-d="s"':''}>${SC(x)}${tools('s','','',i)}</div>`).join('')}</div></section>`}).join('')}`;
 if(h=='contact')return`${BC([['تواصل معنا']])}<div class="cd ct">${admin?`<button class="b" data-a="ec">تعديل بيانات التواصل</button>`:''}<a href="${tel()}">${I(P.ph,34)}<span>${E(S.contact.phone)}</span></a><a href="${wal()}" target="_blank" style="color:#25D366">${I(P.wa,34)}<span style="color:var(--tx)">واتساب</span></a><div id="qr"></div></div>`;
 if(m&&m[2]){const g=m[1],s=m[2]-1,c=S.grades[g][s],K=g+'s'+(s+1);S.units=S.units||{};const UU=S.units[K]=S.units[K]||[];
 const GL=c.map((x,i)=>[x,i]).filter(([x])=>!UU.some(y=>y.id==x.unit));
 const MC=(x,i,dr)=>`<div class="mc" data-i="${i}" data-g="${g}" data-s="${s}" data-u="${E(x.unit||'')}" data-q="${E([x.title,x.concepts,x.goal,(UU.find(y=>y.id==x.unit)||{}).name].join(' ').toLowerCase())}"${admin&&dr?' draggable="true" data-d="m"':''}><div class="mi" data-a="op" data-g="${g}" data-s="${s}" data-i="${i}"><div class="cv" style="${x.img?`background-image:url('${x.img}')`:''}">${x.img?'':`<span>${E(x.icon||'🧪')}</span>`}</div><span class="bg">${BG[g]}</span><h3>${E(x.title)}</h3></div>${tools('m',g,s,i)}</div>`;
 const UC=(u,ui)=>`<div class="mc uc" data-ui="${ui}"${admin?' draggable="true" data-d="u"':''}><div class="mi" data-a="nav" data-h="${K}:${u.id}"><div class="cv" style="${u.img?`background-image:url('${u.img}')`:''}">${u.img?'':`<span>${E(u.icon||'📚')}</span>`}</div><span class="bg">${cnt(c.filter(x=>x.unit==u.id).length)}</span><h3>${E(u.name)}</h3></div>${tools('u',g,s,ui)}</div>`;
 const uq=UQ(),cu=uq=='_'?{id:'',name:'نماذج عامة'}:UU.find(y=>y.id==uq);
 const sq=`<div class="fb"><input id="sq" placeholder="🔍 ابحث عن نموذج أو مفهوم…" value="${E(QV)}"></div>`;
 if(uq&&cu){const L=uq=='_'?GL:c.map((x,i)=>[x,i]).filter(([x])=>x.unit==cu.id);
  return`${BC([[GN[g],g],[SN[s],K],[cu.name]])}${admin?`<div class="ad"><button class="b" data-a="add" data-l="m" data-g="${g}" data-s="${s}" data-u="${E(cu.id)}">+ إضافة نموذج محاكاة</button></div>`:''}${sq}<section class="us dz" data-uid="${E(cu.id)}"><div class="gr">${L.map(([x,i])=>MC(x,i,1)).join('')}</div></section>${L.length||admin?'':'<p class="nt">لا توجد نماذج بعد.</p>'}<p class="nt" id="ne" hidden>لا توجد نتائج مطابقة.</p>`}
 return`${BC([[GN[g],g],[SN[s]]])}${admin?`<div class="ad"><button class="b" data-a="ua" data-k="${K}">+ إضافة وحدة</button><button class="b g" data-a="add" data-l="m" data-g="${g}" data-s="${s}" data-u="">+ إضافة نموذج محاكاة</button></div>`:''}${sq}<div id="ug" class="gr">${UU.map(UC).join('')}${GL.length?`<div class="mc uc"><div class="mi" data-a="nav" data-h="${K}:_"><div class="cv"><span>🧪</span></div><span class="bg">${cnt(GL.length)}</span><h3>نماذج عامة</h3></div></div>`:''}</div><div id="sg" class="gr" hidden>${c.map((x,i)=>MC(x,i,0)).join('')}</div><p class="nt" id="ne" hidden>لا توجد نتائج مطابقة.</p>${UU.length||GL.length?'':'<p class="nt">لا توجد وحدات بعد.</p>'}`}
 if(m)return`${BC([[GN[m[1]]]])}<div class="gr">${SN.map((n,s)=>`<div class="cd k" data-a="nav" data-h="${m[1]}s${s+1}"><div class="n">${s+1}</div><h3>${n}</h3><small>${S.grades[m[1]][s].length} نموذج محاكاة</small></div>`).join('')}</div>`;
 return`<div class="hero"><svg class="atom" viewBox="-50 -50 100 100" width="64" height="64"><g fill="none" stroke="currentColor" stroke-width="2.5"><ellipse rx="44" ry="16"/><ellipse rx="44" ry="16" transform="rotate(60)"/><ellipse rx="44" ry="16" transform="rotate(120)"/></g><circle r="7" fill="currentColor"/></svg><h1>من المجرد إلى المحسوس</h1><p>⚗️ منصة المحاكاة الكيميائية ⚗️</p></div><div class="gr">${Object.keys(GN).map(g=>`<div class="cd k" data-a="nav" data-h="${g}"><div class="n">${g.slice(1)}</div><h3>${GN[g]}</h3></div>`).join('')}</div>`}
const T=()=>{const h=H();return`<nav class="tabs"><div class="tp"><button data-a="nav" data-h="home" class="${/^(home|g1)/.test(h)?'on':''}">الرئيسية</button><button data-a="nav" data-h="staff" class="${h=='staff'?'on':''}">الهيئة التعليمية</button><button data-a="nav" data-h="contact" class="${h=='contact'?'on':''}">تواصل معنا</button></div></nav>`};
function render(){const ad='';
$('#app').innerHTML=`<header><div class="br" data-a="nav" data-h="home"><img src="${LOGO}" alt=""><b>مدرسة محمد عبدالله المهيني الثانوية - بنين</b></div><div class="mid">${T()}${tk()}</div><div class="tl"><button class="ib" data-a="fs" data-tip="ملء الشاشة" aria-label="ملء الشاشة">${I(P.fs)}</button><button class="ib" data-a="th" data-tip="الوضع الليلي" aria-label="الوضع الليلي">${I(P.mn)}</button><button class="ib" data-a="ad" data-tip="أدمن" aria-label="أدمن">${I(admin?P.out:P.us)}</button></div></header><main><div class="wr">${ad}${view()}</div></main><a class="fl" style="background:#25D366" id="f1" href="${wal()}" target="_blank">${I(P.wa,20)}</a><a class="fl" style="background:var(--an)" id="f2" href="${tel()}">${I(P.ph,18)}</a><footer id="ft"><div>إعداد أ/ عبدالحميد الخن</div><div>✨ تحت إشراف موجه الكيمياء أ/ مشاعل المطيري ✨</div><div>تحت رعاية مدير المدرسة أ/ فهد العجمي</div></footer>`;
const h=$('#ft').offsetHeight;$('#f1').style.bottom=h+54+'px';$('#f2').style.bottom=h+10+'px';
document.body.classList.toggle('adm',admin);fit();tkStart();applyF();if($('#qr')&&window.QRCode)new QRCode($('#qr'),{text:wal(),width:160,height:160})}
const toImg=f=>new Promise(r=>{const i=new Image;i.onload=()=>{const c=document.createElement('canvas');c.width=c.height=240;const k=Math.min(i.width,i.height);c.getContext('2d').drawImage(i,(i.width-k)/2,(i.height-k)/2,k,k,0,0,240,240);r(c.toDataURL('image/jpeg',.8))};i.src=URL.createObjectURL(f)});
const toCov=f=>new Promise(r=>{const i=new Image;i.onload=()=>{const W=640,Hh=360,c=document.createElement('canvas');c.width=W;c.height=Hh;const k=Math.max(W/i.width,Hh/i.height),w=i.width*k,h=i.height*k;c.getContext('2d').drawImage(i,(W-w)/2,(Hh-h)/2,w,h);r(c.toDataURL('image/jpeg',.8))};i.src=URL.createObjectURL(f)});
const FT=t=>t=='img'||t=='html'||t=='cov';
function form(t,fs,ok){const o=$('#ov');o.innerHTML=`<div class="mo"><form class="bx"><button type="button" class="xb" data-a="x" aria-label="إغلاق">✕</button><h3 style="margin:0">${t}</h3>${fs.map(f=>f.t=='chk'?`<label class="ck"><input type="checkbox" name="${f.k}">${f.l}</label>`:`<label>${f.l}${f.t=='sel'?`<select name="${f.k}">${f.o.map(o=>`<option value="${o[0]}"${o[0]==f.v?' selected':''}>${E(o[1])}</option>`).join('')}</select>`:f.t=='area'?`<textarea name="${f.k}" rows="3">${E(f.v)}</textarea>`:FT(f.t)?`<input type="file" name="${f.k}" accept="${f.t=='html'?'.html,.htm':'image/*'}">`:`<input name="${f.k}" value="${E(f.v)}" ${f.p?'type="password"':''}>`}</label>`).join('')}<div class="r"><button class="b">حفظ</button><button type="button" class="b g" data-a="x">إلغاء</button></div></form></div>`;
o.querySelector('form').onsubmit=async e=>{e.preventDefault();const d={};for(const f of fs){const el=e.target[f.k];if(FT(f.t)){const fl=el.files[0];if(fl)d[f.k]=f.t=='html'?await fl.text():await(f.t=='cov'?toCov(fl):toImg(fl))}else d[f.k]=f.t=='chk'?el.checked:el.value}o.innerHTML='';ok(d)}}
const uid=()=>Math.random().toString(36).slice(2,9);
const CT=[['admin','الإدارة'],['guide','الموجهون'],['teacher','المعلمون']];
const MF=(x={},g,s)=>{const UU=(S.units&&S.units[g+'s'+(+s+1)])||[];return[{k:'title',l:'عنوان النموذج',v:x.title},{k:'unit',l:'الوحدة',t:'sel',v:x.unit||'',o:[['','— نماذج عامة —'],...UU.map(u=>[u.id,u.name])]},{k:'goal',l:'الهدف التعليمي',v:x.goal,t:'area'},{k:'concepts',l:'المفاهيم الرئيسية',v:x.concepts,t:'area'},{k:'duration',l:'المدة المتوقعة (مثال: 15 دقيقة)',v:x.duration},{k:'outcome',l:'ناتج التعلم',v:x.outcome,t:'area'},{k:'file',l:'مسار ملف داخل المشروع (مثال: models/g10/s1/acid.html)',v:x.file},{k:'url',l:'أو رابط النموذج',v:x.url},{k:'html',l:'أو ارفع ملف HTML',t:'html'},{k:'icon',l:'أيقونة إيموجي (بدل الصورة)',v:x.icon},{k:'img',l:'صورة الغلاف',t:'cov'},...(x.img?[{k:'rmimg',l:'حذف صورة الغلاف الحالية',t:'chk'}]:[])]};
const UFm=(x={})=>[{k:'name',l:'اسم الوحدة',v:x.name},{k:'icon',l:'أيقونة إيموجي (بدل الصورة)',v:x.icon},{k:'img',l:'صورة الغلاف',t:'cov'},...(x.img?[{k:'rmimg',l:'حذف صورة الغلاف الحالية',t:'chk'}]:[])];
const SF=(x={})=>[{k:'name',l:'الاسم',v:x.name},{k:'cat',l:'القسم',t:'sel',v:x.cat||'teacher',o:CT},{k:'role',l:'المسمى الوظيفي',v:x.role},{k:'subject',l:'المادة',v:x.subject},{k:'email',l:'البريد الرسمي',v:x.email},{k:'msg',l:'كلمة',v:x.msg,t:'area'},{k:'photo',l:'الصورة',t:'img'}];
const done=()=>{render();clearTimeout(tm);tm=setTimeout(save,700)};
let tt;const tos=m=>{const e=$('#ts');if(!e)return;e.textContent=m;clearTimeout(tt);if(m&&!m.startsWith('⏳'))tt=setTimeout(()=>{e.textContent=''},5000)};
const dl=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['window.DATA='+JSON.stringify(S,null,1)+';'],{type:'text/javascript'}));a.download='data.js';a.click()};
async function save(){S.v=Date.now();try{localStorage.setItem('draft',JSON.stringify(S))}catch(_){}
let c=null;try{c=JSON.parse(localStorage.getItem('gh')||'null')}catch(_){}
if(!c){tos('💾 محفوظ مؤقتًا في هذا المتصفح، فعّل الحفظ التلقائي من قائمة الأدمن');return}
tos('⏳ جارٍ الحفظ…');
try{const u=`https://api.github.com/repos/${c.repo}/contents/data/data.js`,h={Authorization:'Bearer '+c.token,Accept:'application/vnd.github+json'};
const g=await fetch(u+'?ref='+c.branch,{headers:h});const sha=g.ok?(await g.json()).sha:undefined;
const b=btoa(unescape(encodeURIComponent('window.DATA='+JSON.stringify(S,null,1)+';')));
const r=await fetch(u,{method:'PUT',headers:h,body:JSON.stringify({message:'update data',content:b,sha,branch:c.branch})});
if(!r.ok)throw new Error(r.status);tos('✅ تم الحفظ، يظهر للزوار خلال دقيقة تقريبًا')}catch(e){tos('⚠ فشل الحفظ ('+e.message+')')}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;const D=b.dataset,a=D.a;
if(a=='zm'){if(!e.target.closest('a'))zm(b);return}
if(a=='nav'){$('#ov').innerHTML='';const u=U(D.h);try{QV='';UF='';history.pushState(null,'',u);render();scrollTo(0,0);const m=$('main');if(m)m.scrollTop=0}catch(_){location.href=u}return}
if(a=='x'){$('#ov').innerHTML=''}
if(a=='fs'){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch(_){}}
if(a=='th'){const r=document.documentElement;r.dataset.theme=r.dataset.theme=='light'?'dark':'light';try{localStorage.setItem('th',r.dataset.theme)}catch(_){}}
if(a=='ad'){if(admin){$('#ov').innerHTML=`<div class="mo"><div class="bx"><button type="button" class="xb" data-a="x" aria-label="إغلاق">✕</button><h3 style="margin:0">الأدمن</h3><button class="b" data-a="pw">تغيير كلمة المرور</button><button class="b g" data-a="gh">الحفظ التلقائي (GitHub)</button><button class="b g" data-a="dl">تنزيل data.js احتياطيًا</button><button class="b d" data-a="lo">تسجيل الخروج</button><button class="b g" data-a="x">إلغاء</button></div></div>`}else form('دخول الأدمن',[{k:'p',l:'كلمة المرور',p:1}],d=>{if(d.p==S.pw){admin=true;try{sessionStorage.setItem('adm','1')}catch(_){}render()}else dlg('كلمة المرور غير صحيحة',0,1)})}
if(a=='pw')form('تغيير كلمة المرور',[{k:'p',l:'كلمة المرور الجديدة',v:''}],d=>{if(d.p){S.pw=d.p;done()}});
if(a=='dl'){$('#ov').innerHTML='';dl()}
if(a=='gh'){let c={};try{c=JSON.parse(localStorage.getItem('gh')||'{}')||{}}catch(_){}form('الحفظ التلقائي (GitHub)',[{k:'repo',l:'المستودع (اسم-المستخدم/اسم-المستودع)',v:c.repo},{k:'branch',l:'الفرع',v:c.branch||'main'},{k:'token',l:'التوكن (Fine-grained، صلاحية Contents: Read and write)',v:c.token}],d=>{try{localStorage.setItem('gh',JSON.stringify(d))}catch(_){}tos('تم حفظ الإعدادات');save()})}
if(a=='lo'){admin=false;try{sessionStorage.removeItem('adm')}catch(_){}$('#ov').innerHTML='';render()}
if(a=='ec')form('بيانات التواصل',[{k:'phone',l:'رقم الاتصال',v:S.contact.phone},{k:'wa',l:'رقم واتساب (مع كود الدولة)',v:S.contact.wa}],d=>{Object.assign(S.contact,d);done()});
if(a=='add'){const m=D.l=='m';form(m?'نموذج جديد':'بطاقة جديدة',m?MF({unit:D.u||''},D.g,D.s):SF(),d=>{m?S.grades[D.g][D.s].push({id:uid(),url:'',html:'',...d}):S.staff.push({id:uid(),photo:'',...d});done()})}
if(a=='op'){const x=S.grades[D.g][D.s][D.i];(x.goal||x.concepts||x.duration||x.outcome)?info(x,D):openM(x)}
if(a=='go')openM(S.grades[D.g][D.s][D.i]);
if(a=='ua')form('وحدة جديدة',UFm(),d=>{if(d.name&&d.name.trim()){delete d.rmimg;S.units[D.k].push({id:uid(),...d});done()}else dlg('اكتب اسم الوحدة',0,1)});
if(['ed','up','dn','rm'].includes(a)){const L=list(D.l,D.g,+D.s),i=+D.i,x=L[i];
if(a=='ed')form('تعديل',D.l=='m'?MF(x,D.g,D.s):D.l=='u'?UFm(x):SF(x),d=>{if(d.rmimg&&!d.img)d.img='';delete d.rmimg;Object.assign(x,d);done()});
if(a=='rm'){const un=D.l=='u';dlg(un?'حذف الوحدة؟ ستنتقل نماذجها إلى «نماذج عامة».':'تأكيد الحذف؟',1).then(y=>{if(y){if(un)S.grades[D.g][+D.s].forEach(q=>{if(q.unit==x.id)q.unit=''});L.splice(i,1);done()}})}
if(a=='up'||a=='dn'){const d=a=='up'?-1:1;let j=i+d;if(D.l=='m')while(j>=0&&j<L.length&&(L[j].unit||'')!=(x.unit||''))j+=d;if(j>=0&&j<L.length){[L[i],L[j]]=[L[j],L[i]];done()}}}});
addEventListener('popstate',()=>render());
try{S=JSON.parse(JSON.stringify(window.DATA));if(admin){const d=JSON.parse(localStorage.getItem('draft')||'null');if(d&&(d.v||0)>(S.v||0))S=d}render()}catch(e){document.body.innerHTML='<div class="mo"><div class="bx al"><div class="ai w">!</div><p>تعذر تحميل البيانات: '+E(e.message)+'</p></div></div>'}

function openM(x){$('#ov').innerHTML=`<div class="fr"><div class="fh"><b>${E(x.title)}</b><button type="button" class="xb" data-a="x" aria-label="إغلاق النموذج">✕</button></div><iframe id="if" sandbox="allow-scripts allow-popups allow-forms"></iframe></div>`;fit();const f=$('#if');x.html?f.srcdoc=x.html:f.src=x.file||x.url}
document.addEventListener('keydown',e=>{if(e.key=='Escape'&&document.querySelector('#ov .fr'))$('#ov').innerHTML=''});
function info(x,D){const r=(l,v)=>v?`<dt>${l}</dt><dd>${E(v)}</dd>`:'';$('#ov').innerHTML=`<div class="mo"><div class="bx info"><button type="button" class="xb" data-a="x" aria-label="إغلاق">✕</button><h3 style="margin:0">${E(x.title)}</h3><dl>${r('🎯 الهدف التعليمي',x.goal)}${r('🧩 المفاهيم الرئيسية',x.concepts)}${r('⏱ المدة المتوقعة',x.duration)}${r('✅ ناتج التعلم',x.outcome)}</dl><div class="r"><button class="b" data-a="go" data-g="${D.g}" data-s="${D.s}" data-i="${D.i}">ابدأ النموذج ▶</button><button class="b g" data-a="x">إغلاق</button></div></div></div>`}
function applyF(){const q=QV.trim().toLowerCase(),ug=$('#ug'),sg=$('#sg'),ne=$('#ne');let n=0;
document.querySelectorAll('.mc[data-q]').forEach(e=>{const v=!q||e.dataset.q.includes(q);e.style.display=v?'':'none';if(v)n++});
if(sg){ug.hidden=!!q;sg.hidden=!q}if(ne)ne.hidden=!(q&&!n)}
document.addEventListener('input',e=>{if(e.target.id=='sq'){QV=e.target.value;applyF()}});
const tgt=e=>{if(!DR)return null;const t=e.target.closest?e.target:e.target.parentElement;return DR.t=='m'?(t.closest('.mc[data-d="m"]')||t.closest('.us')):DR.t=='u'?t.closest('.uc[data-d="u"]'):(t.closest('.cd[data-d="s"]')||t.closest('.dz[data-c]'))};
const clr=()=>document.querySelectorAll('.dov').forEach(e=>e.classList.remove('dov'));
document.addEventListener('dragstart',e=>{const el=e.target.closest&&e.target.closest('[data-d]');if(!el||!admin)return;DR={t:el.dataset.d,...el.dataset};e.dataTransfer.setData('text','x');e.dataTransfer.effectAllowed='move';setTimeout(()=>el.classList.add('dg'),0)});
document.addEventListener('dragover',e=>{const o=tgt(e);if(o){e.preventDefault();clr();o.classList.add('dov')}});
document.addEventListener('dragend',()=>{DR=null;clr();document.querySelectorAll('.dg').forEach(e=>e.classList.remove('dg'))});
document.addEventListener('drop',e=>{const o=tgt(e);if(!o)return;e.preventDefault();const t=DR.t,K=H();
 if(t=='m'){const L=S.grades[DR.g][DR.s],src=+DR.i,x=L.splice(src,1)[0];if(o.dataset.d=='m'){const ti=+o.dataset.i;x.unit=o.dataset.u;L.splice(ti,0,x)}else{x.unit=o.dataset.uid||'';L.push(x)}}
 else if(t=='u'){const A=S.units[K],x=A.splice(+DR.ui,1)[0];A.splice(+o.dataset.ui,0,x)}
 else{const x=S.staff.splice(+DR.i,1)[0];if(o.dataset.d=='s'){x.cat=o.dataset.c;S.staff.splice(+o.dataset.i,0,x)}else{x.cat=o.dataset.c;S.staff.push(x)}}
 DR=null;clr();done()});

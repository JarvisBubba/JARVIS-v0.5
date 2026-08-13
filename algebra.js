/* V5 algebra primitives */
window.JARVIS.v5.math.algebra=(()=>{
function num(s){return Number(String(s).replace(/\s/g,''))}
function linear(eq){
 const m=String(eq).match(/^\s*([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d*\.?\d+)?\s*=\s*([+-]?\s*\d*\.?\d+)\s*$/i); if(!m)return null;
 let a=String(m[1]).replace(/\s/g,''); a=(a===''||a==='+')?1:a==='-'?-1:num(a); const b=m[2]?num(m[2]):0; const c=num(m[3]); if(!isFinite(a)||!isFinite(b)||!isFinite(c)||a===0)return null; const x=(c-b)/a;
 return {x,steps:[eq,`${a}x = ${c-b}`,`x = ${x}`,`Check: ${a}(${x}) + ${b} = ${c}`]};
}
function system(s){
 const parts=String(s).split(/\s+and\s+/i).map(x=>x.trim()); if(parts.length!==2||!parts.every(x=>/=/.test(x)))return null;
 const parse=eq=>{const n=eq.replace(/\s/g,''); const m=n.match(/^([+-]?\d*\.?\d*)x([+-]\d*\.?\d*)y=([+-]?\d*\.?\d+)$/i); if(!m)return null; const cv=z=>(z===''?1:z==='-'?-1:z==='+'?1:num(z)); return {a:cv(m[1]),b:cv(m[2]),c:num(m[3])}};
 const p1=parse(parts[0]),p2=parse(parts[1]); if(!p1||!p2)return null; const D=p1.a*p2.b-p2.a*p1.b; if(D===0)return null; const x=(p1.c*p2.b-p2.c*p1.b)/D; const y=(p1.a*p2.c-p2.a*p1.c)/D;
 return {x,y,steps:[parts[0]+' and '+parts[1],`Eliminate a variable using the two equations`,`x = ${x}`,`Substitute to find y = ${y}`,`Check: (${x}, ${y})`]};
}
function distribute(expr){
 let raw=String(expr).trim().replace(/\s+/g,''); raw=raw.replace(/^([+-]?\d*\.?\d*[A-Za-z])\((.*)\)$/,'$1*($2)');
 const m=raw.match(/^([+-]?\d*\.?\d*[A-Za-z](?:\^\d+)?)\*\((.*)\)$/); if(!m)return null; const factor=m[1],inside=m[2];
 const parts=inside.match(/[+-]?[^+-]+/g)||[]; if(parts.length<2)return null;
 const out=[]; for(const t0 of parts){let t=t0; if(t.startsWith('+'))t=t.slice(1); if(!t)continue; const mm=t.match(/^([+-]?\d*\.?\d*)([A-Za-z](?:\^\d+)?)$/); if(mm){let c=mm[1]; c=(c===''||c==='+')?'':c==='-'?'-':c; out.push(`${c}${factor}${mm[2]}`)} else if(/^[+-]?\d*\.?\d+$/.test(t)){out.push(`${t}${factor}`)} else out.push(`${factor}${t}`)}
 const joined=out.join(' + ').replace(/\+ -/g,' - '); return {result:joined,steps:[String(expr),`Distribute ${factor} to every term`,` ${joined}`.trim(),joined]};
}
function rational(eq){
 const m=String(eq).match(/^\s*\(([^)]+)\)\s*\/\s*\(([^)]+)\)\s*=\s*([+-]?\d*\.?\d+)\s*$/); if(!m)return null; const left=m[1],den=m[2],k=num(m[3]); const lm=left.match(/^x([+-]\d+(?:\.\d+)?)$/i),dm=den.match(/^x([+-]\d+(?:\.\d+)?)$/i); if(!lm||!dm)return null; const A=num(lm[1].replace(/^x/,'')),B=num(dm[1].replace(/^x/,'')); return {domain:`x ≠ ${-B}`,steps:[String(eq),`Multiply both sides by (x ${B>=0?'+':''}${B})`,`x ${A>=0?'+':''}${A} = ${k}x ${k*B>=0?'+':''}${k*B}`,`Solve: x = ${(A-k*B)/(k-1)}`,`Domain check: x ≠ ${-B}`],x:(A-k*B)/(k-1)};
}
return {linear,system,distribute,rational};})();

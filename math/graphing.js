/* V5 graphing */
window.JARVIS.v5.math.graphing=(()=>{
function parseFrac(s){const m=String(s).match(/^([+-]?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);return m?Number(m[1])/Number(m[2]):Number(s)}
function linear(form){const x=String(form).replace(/^graph\s*/i,'').replace(/\s+/g,''); const m=x.match(/^y=([+-]?(?:\d+(?:\.\d+)?\/\d+(?:\.\d+)?|\d*\.?\d*))x([+-]\d*\.?\d+)?$/i); if(!m)return null; let a=m[1]; a=(a===''||a==='+')?1:a==='-'?-1:parseFrac(a); const b=m[2]?Number(m[2]):0; return {slope:a,intercept:b,points:[[0,b],[2,2*a+b]],steps:[`y = ${a}x ${b>=0?'+ ':''}${b}`,`Slope m = ${a}`,`Y-intercept b = ${b}`,`Plot (0, ${b})`,`Use rise/run: plot (2, ${2*a+b})`,`Draw the line through the points`]};}
return {linear};})();

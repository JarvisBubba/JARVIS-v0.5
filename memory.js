/* J.A.R.V.I.S. V5 — persistent memory */
window.JARVIS=window.JARVIS||{};JARVIS.v5=JARVIS.v5||{};
JARVIS.v5.memory=(()=>{const K='jarvis-v5-memory';const read=()=>{try{return JSON.parse(localStorage.getItem(K)||'{}')}catch(e){return {}}};const write=x=>localStorage.setItem(K,JSON.stringify(x));
function set(k,v){const m=read();m[String(k).toLowerCase()]=v;write(m);return v} function get(k,d=null){const m=read();return Object.prototype.hasOwnProperty.call(m,String(k).toLowerCase())?m[String(k).toLowerCase()]:d} function all(){return read()} function forget(k){const m=read();delete m[String(k).toLowerCase()];write(m);return true}
return {set,get,all,forget};})();

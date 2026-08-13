/* V5 math parser / normalizer */
window.JARVIS=window.JARVIS||{};JARVIS.v5=JARVIS.v5||{};JARVIS.v5.math=JARVIS.v5.math||{};
JARVIS.v5.math.parser=(()=>{const sup={'²':'^2','³':'^3','⁴':'^4','⁵':'^5','⁶':'^6','⁷':'^7','⁸':'^8','⁹':'^9','⁰':'^0','¹':'^1'};
function normalize(s){let x=String(s||'').replace(/[−–—]/g,'-').replace(/[×·]/g,'*').replace(/√/g,'sqrt');x=x.replace(/[²³⁴⁵⁶⁷⁸⁹⁰¹]/g,c=>sup[c]);x=x.replace(/\b([A-Za-z])([2-9])\b/g,'$1^$2');x=x.replace(/\b([A-Za-z])([A-Za-z])\b/g,'$1*$2');x=x.replace(/\)(?=[A-Za-z0-9(])/g,')*');x=x.replace(/(?<=[0-9A-Za-z)])\(/g,'*(');x=x.replace(/\s+/g,' ').trim();return x}
function kind(s){const x=normalize(s);if(/^graph\b/i.test(x))return'graph';if(/\band\b/i.test(x)&&/=/.test(x))return'system';if(/[=<>]/.test(x))return'equation';return'expression'}
return {normalize,kind};})();

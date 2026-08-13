/* J.A.R.V.I.S. V5 — live context */
window.JARVIS=window.JARVIS||{};JARVIS.v5=JARVIS.v5||{};
JARVIS.v5.context=(()=>{const K='jarvis-v5-context';const def={subject:'general',mode:'answer',topic:'',problem:'',step:0,totalSteps:0,lastUser:'',lastAnswer:'',history:[]};
let state=(()=>{try{return Object.assign({},def,JSON.parse(localStorage.getItem(K)||'{}'))}catch(e){return {...def}}})();
function save(){localStorage.setItem(K,JSON.stringify(state))} function update(p){Object.assign(state,p);save();return state} function push(u,a){state.lastUser=u;state.lastAnswer=a;state.history.push({u,a,t:Date.now()});if(state.history.length>20)state.history.shift();save()} function get(){return state} function reset(){state={...def};save();return state}
return {get,update,push,reset};})();

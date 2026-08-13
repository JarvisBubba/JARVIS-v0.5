/* J.A.R.V.I.S. V5 — unified intent brain */
window.JARVIS=window.JARVIS||{};JARVIS.v5=JARVIS.v5||{};
JARVIS.v5.brain=(()=>{const norm=s=>String(s||'').replace(/[’]/g,"'").replace(/[−–—]/g,'-').replace(/[×·]/g,'*').replace(/\s+/g,' ').trim();
function intent(t){const q=norm(t).toLowerCase();
 if(/^(why|how|what|can you|do you|are you|is that|repeat|say that again|explain|go back|next step|previous step|check my work)/.test(q))return 'followup';
 if(/\b(teach me|learn|lesson|practice|quiz me|study|review|flashcard|mastery|progress)\b/.test(q))return 'learning';
 if(/\b(graph|plot|slope|intercept|solve|simplify|factor|equation|inequality|polynomial|quadratic|cubic|radical|log|ln|function|sequence|gpa|fraction)\b|\bx\s*\(/.test(q))return 'math';
 if(/\b(atom|cell|force|energy|gravity|chemical|reaction|photosynthesis|dna|ecosystem|planet|motion|electricity|wave)\b/.test(q))return 'science';
 if(/\b(essay|thesis|metaphor|simile|grammar|verb|pronoun|theme|tone|paragraph|literary|reading|argument|evidence)\b/.test(q))return 'ela';
 if(/\b(history|government|federalism|constitution|war|civilization|geography|economics|democracy|civics|government)\b/.test(q))return 'history';
 if(/\b(scan|homework|assignment|worksheet|camera|photo)\b/.test(q))return 'scanner';
 if(/\b(research|look up|find sources|cite|sources)\b/.test(q))return 'research';
 if(/\b(simulation|simulate|lab|experiment)\b/.test(q))return 'simulation';
 return 'general'}
function mode(q){const x=norm(q).toLowerCase(); if(/don't solve|do not solve|just hint|hint/.test(x))return 'hint';if(/teach me|walk me through/.test(x))return 'teach';if(/quiz me|test me/.test(x))return 'quiz';if(/practice/.test(x))return 'practice';if(/socratic/.test(x))return 'socratic';return 'answer'}
return {norm,intent,mode};})();

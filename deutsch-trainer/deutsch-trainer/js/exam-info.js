// Exam format card shown above the practice questions.
// Modules/timings come from Goethe-Institut and telc/publisher pages; confirm on the current exam guidelines.
const INFO={
A1:{g:'Lesen, Hören, Schreiben, Sprechen',t:'Start Deutsch 1: written part (Hören, Lesen, Schreiben) + oral part'},
A2:{g:'Lesen, Hören, Schreiben, Sprechen',t:'Start Deutsch 2: written part + oral part'},
B1:{g:'Lesen (65 min), Hören, Schreiben (60 min), Sprechen (paired)',t:'Leseverstehen/Sprachbausteine 90 min, Hörverstehen 30 min, then oral'},
B2:{g:'Lesen, Hören, Schreiben, Sprechen',t:'Leseverstehen/Sprachbausteine 90 min, Hörverstehen 20 min'},
C1:{g:'Lesen, Hören, Schreiben, Sprechen',t:'Leseverstehen 100 min, Hörverstehen 55 min'},
C2:{g:'Lesen, Hören, Schreiben, Sprechen',t:'Check telc.net for the current C2 format'}};
const _ve=ve;
ve=function(){const i=INFO[lv];return `<div class="card"><b>${lv} exam format</b><p class="mu">Goethe: ${esc(i.g)}<br>telc: ${esc(i.t)}</p><p class="mu">Official practice: <a href="https://www.goethe.de/de/spr/prf/ueb/pb1.html" target="_blank" rel="noopener">goethe.de Prüfungstraining</a> · <a href="https://www.telc.net" target="_blank" rel="noopener">telc.net</a></p></div>`+_ve()};

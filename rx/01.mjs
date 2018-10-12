import rxjs from 'rxjs';
const obs = rxjs.of(1, 2, 3);
obs.subscribe(data => console.log(data));

// Speichert das in einer Datei (z.B. index.mjs)
// Ausführung: node --experimental-modules index.mjs
// Ausgabe: 1 2 3

const obs2 = rxjs.range(1, 10).subscribe(x => console.log(x));

const { of } = require('rxjs');

of(1, 2, 3).subscribe(data => console.log(data));

// Speichert das in einer Datei (z.B. index.js)
// Ausführung: node index.js
// Ausgabe: 1 2 3

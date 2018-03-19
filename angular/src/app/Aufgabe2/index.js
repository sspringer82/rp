const Rx = require('rxjs');

Rx.Observable.interval(500) // 0 1 2 3 4
  .map(v => v * v) // 0 1 4 ...
  .subscribe(v => console.log('Value: ', v)); // Ausgabe

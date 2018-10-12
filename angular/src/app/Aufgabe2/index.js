const rxjs = require('rxjs');
const { map } = require('rxjs/operators');

rxjs
  .interval(500) // 0 1 2 3 4
  .pipe(
    map(v => v * v), // 0 1 4 ...
    // tap(v => console.log(v))
  )
  .subscribe(v => console.log('Value: ', v)); // Ausgabe

// rxjs
//   .interval(500)
//   .pipe(
// take(5)
//     mergeMap(() => rxjs.range(1, 10)).pipe(take(5)),
//     map(v => v + 'lulu'),
//   )
//   .subscribe(v => console.log(v));

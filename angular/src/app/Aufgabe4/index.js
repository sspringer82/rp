const Rx = require('rxjs/Rx');

Rx.Observable.interval(1)
  .map(() => {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
    //return String.fromCharCode(Math.floor(Math.random() * 256));
  })
  .filter(v => ['a', 'e', 'i', 'o', 'u'].includes(v))
  .take(10)
  .scan((prev, curr) => prev + curr)
  .last()
  .subscribe(v => console.log(v));

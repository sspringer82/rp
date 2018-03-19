const Rx = require('rxjs');

Rx.Observable.interval(1000)
  .mergeMap(v => {
    if (v % 5 === 0 && v > 0) {
      return Rx.Observable.throw('Boooh!');
    } else {
      return Rx.Observable.of(v);
    }
  })
  .catch(e => {
    return Rx.Observable.of(e);
  })
  .retry(2)
  .subscribe(v => console.log(v), e => console.log('booh'));

const { interval, throwError, of } = require('rxjs');
const { mergeMap, retry, catchError } = require('rxjs/operators');

interval(500)
  .pipe(
    mergeMap(v => {
      if (v % 5 === 0 && v > 0) {
        return throwError('Boooh!');
      } else {
        return of(v);
      }
    }),
    retry(2),
    catchError(e => {
      console.log('an error!');
      return of(e);
    }),
  )
  .subscribe(v => console.log(v), e => console.log('booh'));

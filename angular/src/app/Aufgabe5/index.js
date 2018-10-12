const { Observable, interval, timer } = require('rxjs');
const { withLatestFrom, take, map, filter } = require('rxjs/operators');

const t = timer(0, 1000).pipe(map(() => new Date().toString()));

const strings = ['bla', 'blubb', 'foo', 'bar', 'baz'];
let i;
const messages = Observable.create(observer => {
  i = setInterval(() => {
    if (Date.now() % 5 === 0) {
      observer.next(strings[Math.floor(Math.random() * strings.length)]);
    }
  }, 100);
});

// const messages = interval(10).pipe(
//   filter(v => {
//     return v % Math.floor(Math.random() * 5) === 0;
//   }),
//   map(() => {
//     return strings[Math.floor(Math.random() * strings.length)];
//   }),
// );

messages
  .pipe(
    withLatestFrom(t),
    take(10),
  )
  .subscribe(v => {
    console.log(v[1] + ' ' + v[0]);
    clearInterval(i);
  });

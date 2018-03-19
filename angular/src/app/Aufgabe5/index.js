const Rx = require('rxjs/Rx');

const timer = Rx.Observable.timer(0, 1000).map(() => new Date().toString());

const strings = ['bla', 'blubb', 'foo', 'bar', 'baz'];

/*const messages = Rx.Observable.create(observer => {
  setInterval(() => {
    if (Date.now() % 5 === 0) {
      observer.next(strings[Math.floor(Math.random() * strings.length)]);
    }
  },500);
});*/

const messages = Rx.Observable.interval(10)
  .filter(v => {
    return v % Math.floor(Math.random() * 5) === 0;
  })
  .map(() => {
    return strings[Math.floor(Math.random() * strings.length)];
  });

messages.withLatestFrom(timer).subscribe(v => {
  console.log(v[1] + ' ' + v[0]);
});

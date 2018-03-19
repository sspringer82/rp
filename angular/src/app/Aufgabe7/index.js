const Rx = require('rxjs/Rx');
const observable = Rx.Observable.interval(1000).map(() =>
  Math.floor(Math.random() * 256),
);

const subject = new Rx.Subject();

subject.subscribe(v => console.log('ASCII: ' + String.fromCharCode(v)));
subject.subscribe(v => console.log('Code: ' + v));

observable.subscribe(subject);

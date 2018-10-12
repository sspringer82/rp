const { Observable, Subject } = require('rxjs');

const observable = Observable.create(observer => {
  observer.next(Math.random());
});

const subject = new Subject();

subject.subscribe(v => console.log('A: ', v));
subject.subscribe(v => console.log('B: ', v));

observable.subscribe(subject);

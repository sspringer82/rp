const Rx = require('rxjs/Rx');

const observable = Rx.Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.err('foo');
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});

let subscription = observable.subscribe(
  function onNext(next) {
    console.log('Next: ', next);
  },
  function onError(err) {
    cosole.log('Error', err);
  },
  function onCompleted() {
    console.log('Completed');
  },
);

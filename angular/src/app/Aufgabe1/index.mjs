import rxjs from 'rxjs';
const observable = rxjs.Observable.create(observer => {
  const values = ['Hello', 'World', 'how', 'are', 'you'];
  const interval = setInterval(() => {
    if (values.length <= 0) {
      clearInterval(interval);
      observer.complete();
    }
    observer.next(values.shift());
  }, 500);
});

observable.subscribe(value => {
  console.log(value);
});

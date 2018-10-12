import rxjs from 'rxjs';
const obs = rxjs.Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
obs.subscribe(data => console.log(data));

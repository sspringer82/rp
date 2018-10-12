const { of } = require('rxjs');
const { scan } = require('rxjs/operators');

of({ name: 'Klaus' }, { age: 42 }, { address: 'Musterweg 14' })
  /*Rx.Observable.create((observer) => {
  observer.next({name: 'Klaus'});
  observer.next({age: 42});
  observer.next({address: 'Musterweg 14'});
})*/
  //.scan((prev, curr) => Object.assign({}, prev, curr))
  .pipe(scan((prev, curr) => ({ ...prev, ...curr })))
  .subscribe(obj => console.log(obj));

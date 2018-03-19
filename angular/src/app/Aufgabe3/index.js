const Rx = require('rxjs/Rx');

Rx.Observable.of({ name: 'Klaus' }, { age: 42 }, { address: 'Musterweg 14' })

  /*Rx.Observable.create((observer) => {
  observer.next({name: 'Klaus'});
  observer.next({age: 42});
  observer.next({address: 'Musterweg 14'});
})*/
  .scan((prev, curr) => {
    //return Object.assign({}, prev, curr);
    return { ...prev, ...curr };
  })
  .subscribe(obj => console.log(obj));

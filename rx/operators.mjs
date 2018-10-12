import rxjs from 'rxjs';
import operators from 'rxjs/operators';

const { filter } = operators;

rxjs
  .range(1, 10)
  .pipe(filter(x => x % 2 === 0))
  .subscribe(x => console.log(x));

const { range, observable, of, pipe , } = rxjs;
const { map, filter, interval } = rxjs.operators;
 
console.log('rxjs - 开始', observable)
range(1, 20)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));

  
  of(1,3,4).subscribe(
      (r)=>{
        console.log(r)
      }
  )

  interval(1000).pipe(
    takeEveryNth(2),
    map(x => x + x),
    takeEveryNthSimple(3),
    map(x => x * x),
    takeEveryNthSimplest(4),
    take(3),
    toArray()
  )
  .subscribe(x => console.log(x));
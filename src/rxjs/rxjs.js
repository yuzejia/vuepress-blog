const {
  range,
  Observable,
  of ,
  pipe,
  Subject,
  interval,
  BehaviorSubject
} = rxjs;
const {
  map,
  filter,
  takeUntil,
  take,
  toArraycv 
} = rxjs.operators;


// subject 
// const subject = new Subject()
// subject.subscribe({
//   next: (res) => {
//     console.log(res);
//   }
// })

// subject.next('1')
// subject.next('2')

// var leo = 20;
const be$ = new BehaviorSubject(1)
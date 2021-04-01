import { interval, Subject, Subscription } from "rxjs";
import {take, takeUntil, timeInterval} from "rxjs/operators"

// function createNumber(control:Subject<any>,n:number){
//     interval(500).pipe(
//         take(n)
//     )
// }

// const subject=new Subject();
//

// createNumber(subject,5);



function trigger(ctrl:Subject<any>) {
    return interval(500).pipe(
        takeUntil(ctrl)
    );

}

const subject = new Subject();

subject.subscribe(x=>console.log(x));

const a= trigger(subject);

a.subscribe(x=>console.log(x+"prvi"));
 a.subscribe(x=>console.log(x+"drugi"));


function stop(sub:Subscription){
    sub.unsubscribe();
}

setTimeout(()=>{subject.next("kraj"); subject.complete()},5000);
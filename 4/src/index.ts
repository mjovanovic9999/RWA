import { from, fromEvent, interval, Observable, of, zip } from "rxjs";
import { debounceTime, distinct, map, switchMap } from "rxjs/operators";

function serverFetch(val: string): Observable<Db[]> {
  return from(
    fetch(`http://localhost:3000/text?id=${val}`).then((response) =>
      response.json()
    )
  );
}

interface Db {
  id: number;
  data: string;
}
const parametar = document.createElement("input");
parametar.type = "number";
parametar.min = "0";
parametar.max = "7";
parametar.value = "0";
document.body.append(parametar);

const dugme = document.createElement("button");
document.body.append(dugme);
dugme.innerHTML = "Submit";

let ob1: Observable<any>, ob2: Observable<any>, ob3: Observable<any>;

zip(
  fromEvent(dugme, "click").pipe(
    debounceTime(1000),
    map(() => parametar.value),
    distinct(),
    switchMap((values: string) => serverFetch(values)),
    switchMap((x: Db[]) => {
      ob1 = of(x[0].data);
      ob1.subscribe((x) => console.log(x));
      return ob1;
    }),
    switchMap((x: string) => {
      ob2 = from(x.split(" "));
      ob2.subscribe((x) => console.log(x));
      return ob2;
    })
  ),
  interval(1)
).subscribe((x) => {
  console.log(x);
});

import { from, fromEvent, interval, Observable, of, Subject, zip } from "rxjs";
import { debounceTime, distinct, map, switchMap } from "rxjs/operators";

interface Db {
  id: number;
  data: string;
}

export class Test {
  obser: Observable<any>;

  input: HTMLInputElement;

  lala: Subject<any>;
  constructor() {
    this.input = document.createElement("input");
    this.input.type = "number";
    this.input.min = "0";
    this.input.max = "7";
    this.input.value = "0";
    document.body.append(this.input);

    this.lala = new Subject<any>();
    const dugme = document.createElement("button");
    dugme.innerHTML = "Submit";
    document.body.append(dugme);

    this.obser = fromEvent(dugme, "click").pipe(
      debounceTime(1000),
      map(() => this.input.value),
      distinct(),
      switchMap((values: string) => this.serverFetch(values)),
      switchMap((x: Db[]) => of(x[0].data)),
      switchMap((x: string) => {
        return from(x.split(" "));
      })
    );

    this.obser.subscribe((x) => this.lala.next(x));

    zip(this.lala, interval(500)).subscribe((x) =>
      console.log(x.toString() + "zip")
    );
  }

  private serverFetch(val: string): Observable<Db[]> {
    return from(
      fetch(`http://localhost:3000/text?id=${val}`).then((response) =>
        response.json()
      )
    );
  }
}

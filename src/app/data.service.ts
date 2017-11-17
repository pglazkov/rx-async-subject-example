import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';

export interface Data {
  items: string[];
}

@Injectable()
export class DataService {
  private latestValueSubject: AsyncSubject<Data> = new AsyncSubject<Data>();

  constructor() {
  }

  loadData(): Observable<Data> {
    let resultObservable = this.loadDataFromHttpService();;

    resultObservable.subscribe(data => {
      this.latestValueSubject.next(data);
      this.latestValueSubject.complete();
    });

    return resultObservable;
  }

  getLoadedData(): Observable<Data> {
    return this.latestValueSubject.asObservable();
  }

  private loadDataFromHttpService() {
    // Simulate loading data from HTTP service
    return Observable.of({ items: ['a', 'b', 'c']}).delay(2000);
  }
}

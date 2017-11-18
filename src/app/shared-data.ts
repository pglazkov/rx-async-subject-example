import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';

export interface DataValue {
  items: string[];
}

@Injectable()
export class SharedData {
  private _hasValue = false;
  private readonly valueSubject: AsyncSubject<DataValue> = new AsyncSubject<DataValue>();

  init(value: DataValue) {
    this.valueSubject.next(value);
    this.valueSubject.complete();
    this._hasValue = true;
  }

  get hasValue() {
    return this._hasValue;
  }

  get value(): Observable<DataValue> {
    return this.valueSubject.asObservable();
  }
}

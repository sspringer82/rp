import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public items: Observable<User[]>;
  private _items: BehaviorSubject<User[]>;
  private dataStore: {
    items: User[];
  };

  constructor() {
    this.dataStore = { items: [] };
    this._items = <BehaviorSubject<User[]>>new BehaviorSubject([]);
    this.items = this._items.asObservable();
  }

  load() {
    this.dataStore.items = [
      { id: 1, name: 'Klaus' },
      { id: 2, name: 'Henriette' },
    ];
    this._items.next([...this.dataStore.items]);
    return this.dataStore.items;
  }
  add(item: User): void {
    this.dataStore.items.push(item);
    this._items.next([...this.dataStore.items]);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor() { }

  LoggedIn=new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.LoggedIn.asObservable(); // Expose as Observable

  // Method to update login status
  setLoggedIn(status: boolean): void {
    this.LoggedIn.next(status);
  }

}

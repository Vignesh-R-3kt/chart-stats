import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrackUserService {
  isUserActive = new Subject<boolean>();
  timer: number = 0;
  timeout: any = setTimeout(() => {
    this.isUserActive.next(false);
  }, 200000);

  constructor() { }

  setUserActive() {
    this.isUserActive.next(true);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.isUserActive.next(false);
    }, 200000);
  }

  setUserAway() {
  }
}

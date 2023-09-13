import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  showLoader = new Subject<boolean>();

  constructor() { };

  show() {
    this.showLoader.next(true);
  }

  close() {
    this.showLoader.next(false);
  }
}

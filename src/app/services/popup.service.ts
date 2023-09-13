import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  popupOpen = new Subject<boolean>();
  popupMessage = new Subject<string>();

  constructor() { };

  openPopup(message: string) {
    this.popupMessage.next(message);
    this.popupOpen.next(true);
  };

  closePopup() {
    this.popupOpen.next(false);
  }

}

// shared.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Create an observable subject
  private submitButtonClickedSource = new Subject<void>();

  // Observable for the submit button click event
  submitButtonClicked$ = this.submitButtonClickedSource.asObservable();

  // Method to notify subscribers when the submit button is clicked
  notifySubmitButtonClicked() {
    this.submitButtonClickedSource.next();
  }
}

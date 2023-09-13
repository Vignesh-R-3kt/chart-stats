import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { PopupService } from './services/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoader: boolean = false;
  popupOpen: boolean = false;
  popupMessage: string = "Lorem ipsum dolor sit amet consectetur";

  constructor(private loader: LoaderService, private popup: PopupService) { }

  ngOnInit(): void {
    this.loader.showLoader.subscribe((res: boolean) => {
      this.showLoader = res;
    });

    this.popup.popupMessage.subscribe((res: string) => {
      this.popupMessage = res;
    })

    this.popup.popupOpen.subscribe((res: boolean) => {
      this.popupOpen = res
    })
  };

  closePopup() {
    this.popup.closePopup();
  }
}

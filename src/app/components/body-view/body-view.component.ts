import { Component, OnInit } from '@angular/core';
import { TrackUserService } from 'src/app/services/track-user.service';

@Component({
  selector: 'app-body-view',
  templateUrl: './body-view.component.html',
  styleUrls: ['./body-view.component.scss']
})
export class BodyViewComponent implements OnInit {
  constructor(private track: TrackUserService) { }

  ngOnInit(): void {
    this.track.setUserActive();
  }

  setUserActive() {
    this.track.setUserActive();
  }
}

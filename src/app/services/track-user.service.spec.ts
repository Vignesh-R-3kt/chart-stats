import { TestBed } from '@angular/core/testing';

import { TrackUserService } from './track-user.service';

describe('TrackUserService', () => {
  let service: TrackUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AppOneService } from './app-one.service';

describe('AppOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppOneService]
    });
  });

  it('should be created', inject([AppOneService], (service: AppOneService) => {
    expect(service).toBeTruthy();
  }));
});

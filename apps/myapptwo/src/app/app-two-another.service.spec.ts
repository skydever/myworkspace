import { TestBed, inject } from '@angular/core/testing';

import { AppTwoAnotherService } from './app-two-another.service';

describe('AppTwoAnotherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppTwoAnotherService]
    });
  });

  it('should be created', inject([AppTwoAnotherService], (service: AppTwoAnotherService) => {
    expect(service).toBeTruthy();
  }));
});

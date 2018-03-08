import { TestBed, inject } from '@angular/core/testing';

import { AppTwoService } from './app-two.service';

describe('AppTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppTwoService]
    });
  });

  it('should be created', inject([AppTwoService], (service: AppTwoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { LibTwoDeepService } from './lib-two-deep.service';

describe('LibTwoDeepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibTwoDeepService]
    });
  });

  it('should be created', inject([LibTwoDeepService], (service: LibTwoDeepService) => {
    expect(service).toBeTruthy();
  }));
});

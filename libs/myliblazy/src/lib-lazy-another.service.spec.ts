import { TestBed, inject } from '@angular/core/testing';

import { LibLazyAnotherService } from './lib-lazy-another.service';

describe('LibLazyAnotherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibLazyAnotherService]
    });
  });

  it('should be created', inject([LibLazyAnotherService], (service: LibLazyAnotherService) => {
    expect(service).toBeTruthy();
  }));
});

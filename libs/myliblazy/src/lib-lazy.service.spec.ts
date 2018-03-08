import { TestBed, inject } from '@angular/core/testing';

import { LibLazyService } from './lib-lazy.service';

describe('LibLazyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibLazyService]
    });
  });

  it('should be created', inject([LibLazyService], (service: LibLazyService) => {
    expect(service).toBeTruthy();
  }));
});

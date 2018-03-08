import { TestBed, inject } from '@angular/core/testing';

import { LibOneAnotherService } from './lib-one-another.service';

describe('LibOneAnotherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibOneAnotherService]
    });
  });

  it('should be created', inject([LibOneAnotherService], (service: LibOneAnotherService) => {
    expect(service).toBeTruthy();
  }));
});

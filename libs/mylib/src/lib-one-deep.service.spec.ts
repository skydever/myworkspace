import { TestBed, inject } from '@angular/core/testing';

import { LibOneDeepService } from './lib-one-deep.service';

describe('LibOneDeepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibOneDeepService]
    });
  });

  it('should be created', inject([LibOneDeepService], (service: LibOneDeepService) => {
    expect(service).toBeTruthy();
  }));
});

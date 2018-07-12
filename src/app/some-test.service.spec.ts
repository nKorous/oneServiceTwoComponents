import { TestBed, inject } from '@angular/core/testing';

import { SomeTestService } from './some-test.service';

describe('SomeTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeTestService]
    });
  });

  it('should be created', inject([SomeTestService], (service: SomeTestService) => {
    expect(service).toBeTruthy();
  }));
});

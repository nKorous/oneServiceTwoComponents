import { TestBed, inject } from '@angular/core/testing';

import { Serv1Service } from './serv1.service';

describe('Serv1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Serv1Service]
    });
  });

  it('should be created', inject([Serv1Service], (service: Serv1Service) => {
    expect(service).toBeTruthy();
  }));
});

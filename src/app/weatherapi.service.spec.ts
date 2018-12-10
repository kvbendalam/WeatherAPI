import { TestBed, inject } from '@angular/core/testing';

import { WeatherapiService } from './weatherapi.service';

describe('WeatherapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherapiService]
    });
  });

  it('should be created', inject([WeatherapiService], (service: WeatherapiService) => {
    expect(service).toBeTruthy();
  }));
});

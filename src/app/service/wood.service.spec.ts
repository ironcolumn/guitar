import { TestBed, inject } from '@angular/core/testing';

import { WoodService } from './wood.service';

describe('WoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WoodService]
    });
  });

  it('should be created', inject([WoodService], (service: WoodService) => {
    expect(service).toBeTruthy();
  }));
});

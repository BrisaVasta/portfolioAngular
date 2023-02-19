import { TestBed } from '@angular/core/testing';

import { AcercaDeMiService } from './acerca-de-mi.service';

describe('AcercaDeMiService', () => {
  let service: AcercaDeMiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcercaDeMiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

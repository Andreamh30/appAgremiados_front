import { TestBed } from '@angular/core/testing';

import { AgremiadosService } from './agremiados.service';

describe('AgremiadosService', () => {
  let service: AgremiadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgremiadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

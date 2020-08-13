import { TestBed } from '@angular/core/testing';

import { FormControlService } from './controls.service';

describe('ControlsService', () => {
  let service: FormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

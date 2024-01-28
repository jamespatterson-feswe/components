import { TestBed } from '@angular/core/testing';

import { FsComponentsService } from './fs-components.service';

describe('FsComponentsService', () => {
  let service: FsComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

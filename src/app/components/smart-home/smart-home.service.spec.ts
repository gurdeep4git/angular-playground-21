import { TestBed } from '@angular/core/testing';

import { SmartHomeService } from './smart-home.service';

describe('SmartHomeService', () => {
  let service: SmartHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

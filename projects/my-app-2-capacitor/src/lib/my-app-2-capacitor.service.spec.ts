import { TestBed } from '@angular/core/testing';

import { MyApp2CapacitorService } from './my-app-2-capacitor.service';

describe('MyApp2CapacitorService', () => {
  let service: MyApp2CapacitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApp2CapacitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

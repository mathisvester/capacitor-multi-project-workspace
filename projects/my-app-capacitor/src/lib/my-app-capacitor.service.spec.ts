import { TestBed } from '@angular/core/testing';

import { MyAppCapacitorService } from './my-app-capacitor.service';

describe('MyAppCapacitorService', () => {
  let service: MyAppCapacitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAppCapacitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

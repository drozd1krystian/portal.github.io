import { TestBed } from '@angular/core/testing';

import { FireStoreServicesService } from './fire-store-services.service';

describe('FireStoreServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireStoreServicesService = TestBed.get(FireStoreServicesService);
    expect(service).toBeTruthy();
  });
});

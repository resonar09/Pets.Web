/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetProducts.serviceService } from './pet-products.service.service';

describe('Service: PetProducts.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetProducts.serviceService]
    });
  });

  it('should ...', inject([PetProducts.serviceService], (service: PetProducts.serviceService) => {
    expect(service).toBeTruthy();
  }));
});

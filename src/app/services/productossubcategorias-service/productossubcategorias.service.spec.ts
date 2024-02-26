import { TestBed } from '@angular/core/testing';

import { ProductossubcategoriasService } from './productossubcategorias.service';

describe('ProductossubcategoriasService', () => {
  let service: ProductossubcategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductossubcategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

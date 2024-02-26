import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductossubcategoriasComponent } from './productossubcategorias.component';

describe('ProductossubcategoriasComponent', () => {
  let component: ProductossubcategoriasComponent;
  let fixture: ComponentFixture<ProductossubcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductossubcategoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductossubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

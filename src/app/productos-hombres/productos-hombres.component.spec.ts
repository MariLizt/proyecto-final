import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosHombresComponent } from './productos-hombres.component';

describe('ProductosHombresComponent', () => {
  let component: ProductosHombresComponent;
  let fixture: ComponentFixture<ProductosHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosHombresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

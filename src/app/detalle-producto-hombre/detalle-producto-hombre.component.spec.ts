import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoHombreComponent } from './detalle-producto-hombre.component';

describe('DetalleProductoHombreComponent', () => {
  let component: DetalleProductoHombreComponent;
  let fixture: ComponentFixture<DetalleProductoHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleProductoHombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProductoHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaAnagraficaComponent } from './nuova-anagrafica.component';

describe('NuovaAnagraficaComponent', () => {
  let component: NuovaAnagraficaComponent;
  let fixture: ComponentFixture<NuovaAnagraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaAnagraficaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovaAnagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

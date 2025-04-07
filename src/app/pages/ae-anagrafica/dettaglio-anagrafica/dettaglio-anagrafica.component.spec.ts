import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioAnagraficaComponent } from './dettaglio-anagrafica.component';

describe('DettaglioAnagraficaComponent', () => {
  let component: DettaglioAnagraficaComponent;
  let fixture: ComponentFixture<DettaglioAnagraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioAnagraficaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioAnagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

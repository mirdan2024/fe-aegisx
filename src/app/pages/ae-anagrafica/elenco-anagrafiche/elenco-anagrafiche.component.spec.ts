import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoAnagraficheComponent } from './elenco-anagrafiche.component';

describe('ElencoAnagraficheComponent', () => {
  let component: ElencoAnagraficheComponent;
  let fixture: ComponentFixture<ElencoAnagraficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoAnagraficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoAnagraficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

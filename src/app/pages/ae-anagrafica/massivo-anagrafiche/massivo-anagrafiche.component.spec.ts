import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassivoAnagraficheComponent } from './massivo-anagrafiche.component';

describe('MassivoAnagraficheComponent', () => {
  let component: MassivoAnagraficheComponent;
  let fixture: ComponentFixture<MassivoAnagraficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassivoAnagraficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassivoAnagraficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

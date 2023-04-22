import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Histo2Component } from './histo2.component';

describe('Histo2Component', () => {
  let component: Histo2Component;
  let fixture: ComponentFixture<Histo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Histo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Histo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Histo3Component } from './histo3.component';

describe('Histo3Component', () => {
  let component: Histo3Component;
  let fixture: ComponentFixture<Histo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Histo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Histo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Histo1Component } from './histo1.component';

describe('Histo1Component', () => {
  let component: Histo1Component;
  let fixture: ComponentFixture<Histo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Histo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Histo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

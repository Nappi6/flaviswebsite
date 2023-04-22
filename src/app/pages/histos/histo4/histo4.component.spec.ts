import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Histo4Component } from './histo4.component';

describe('Histo4Component', () => {
  let component: Histo4Component;
  let fixture: ComponentFixture<Histo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Histo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Histo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

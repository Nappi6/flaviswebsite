import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Histo6Component } from './histo6.component';

describe('Histo6Component', () => {
  let component: Histo6Component;
  let fixture: ComponentFixture<Histo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Histo6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Histo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

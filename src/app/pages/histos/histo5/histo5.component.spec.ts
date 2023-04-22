import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Histo5Component } from './histo5.component';

describe('Histo5Component', () => {
  let component: Histo5Component;
  let fixture: ComponentFixture<Histo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Histo5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Histo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

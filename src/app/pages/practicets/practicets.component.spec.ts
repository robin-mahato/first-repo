import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticetsComponent } from './practicets.component';

describe('PracticetsComponent', () => {
  let component: PracticetsComponent;
  let fixture: ComponentFixture<PracticetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticetsComponent]
    });
    fixture = TestBed.createComponent(PracticetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

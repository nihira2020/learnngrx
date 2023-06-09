import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterbuttonComponent } from './counterbutton.component';

describe('CounterbuttonComponent', () => {
  let component: CounterbuttonComponent;
  let fixture: ComponentFixture<CounterbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterbuttonComponent]
    });
    fixture = TestBed.createComponent(CounterbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

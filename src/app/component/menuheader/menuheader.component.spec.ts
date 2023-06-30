import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuheaderComponent } from './menuheader.component';

describe('MenuheaderComponent', () => {
  let component: MenuheaderComponent;
  let fixture: ComponentFixture<MenuheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuheaderComponent]
    });
    fixture = TestBed.createComponent(MenuheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

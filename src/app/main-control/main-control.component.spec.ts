import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainControlComponent } from './main-control.component';

describe('MainControlComponent', () => {
  let component: MainControlComponent;
  let fixture: ComponentFixture<MainControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

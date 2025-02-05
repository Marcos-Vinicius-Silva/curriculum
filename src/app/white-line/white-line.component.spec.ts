import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteLineComponent } from './white-line.component';

describe('WhiteLineComponent', () => {
  let component: WhiteLineComponent;
  let fixture: ComponentFixture<WhiteLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

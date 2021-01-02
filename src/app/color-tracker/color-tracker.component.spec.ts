import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTrackerComponent } from './color-tracker.component';

describe('ColorTrackerComponent', () => {
  let component: ColorTrackerComponent;
  let fixture: ComponentFixture<ColorTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

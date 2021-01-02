import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTrackerContainerComponent } from './color-tracker-container.component';

describe('ColorTrackerContainerComponent', () => {
  let component: ColorTrackerContainerComponent;
  let fixture: ComponentFixture<ColorTrackerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorTrackerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTrackerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCalculatorsComponent } from './all-calculators.component';

describe('AllCalculatorsComponent', () => {
  let component: AllCalculatorsComponent;
  let fixture: ComponentFixture<AllCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCalculatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

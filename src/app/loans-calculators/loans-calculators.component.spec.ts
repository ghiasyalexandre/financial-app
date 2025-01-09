import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansCalculatorsComponent } from './loans-calculators.component';

describe('LoansCalculatorsComponent', () => {
  let component: LoansCalculatorsComponent;
  let fixture: ComponentFixture<LoansCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansCalculatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

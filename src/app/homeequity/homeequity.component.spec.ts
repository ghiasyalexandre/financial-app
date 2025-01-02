import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeequityComponent } from './homeequity.component';

describe('HomeequityComponent', () => {
  let component: HomeequityComponent;
  let fixture: ComponentFixture<HomeequityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeequityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeequityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorsComponent } from './custom-validators.component';

describe('CustomValidatorsComponent', () => {
  let component: CustomValidatorsComponent;
  let fixture: ComponentFixture<CustomValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomValidatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValidatorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

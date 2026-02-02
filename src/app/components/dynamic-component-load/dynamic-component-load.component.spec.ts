import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentLoadComponent } from './dynamic-component-load.component';

describe('DynamicComponentLoadComponent', () => {
  let component: DynamicComponentLoadComponent;
  let fixture: ComponentFixture<DynamicComponentLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicComponentLoadComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

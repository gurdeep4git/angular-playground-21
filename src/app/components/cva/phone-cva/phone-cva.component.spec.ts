import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCvaComponent } from './phone-cva.component';

describe('PhoneCvaComponent', () => {
  let component: PhoneCvaComponent;
  let fixture: ComponentFixture<PhoneCvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneCvaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

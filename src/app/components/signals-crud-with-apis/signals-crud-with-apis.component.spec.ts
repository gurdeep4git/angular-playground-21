import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsCrudWithApisComponent } from './signals-crud-with-apis.component';

describe('SignalsCrudWithApisComponent', () => {
  let component: SignalsCrudWithApisComponent;
  let fixture: ComponentFixture<SignalsCrudWithApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsCrudWithApisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsCrudWithApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

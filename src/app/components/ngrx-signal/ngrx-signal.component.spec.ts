import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxSignalComponent } from './ngrx-signal.component';

describe('NgrxSignalComponent', () => {
  let component: NgrxSignalComponent;
  let fixture: ComponentFixture<NgrxSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgrxSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

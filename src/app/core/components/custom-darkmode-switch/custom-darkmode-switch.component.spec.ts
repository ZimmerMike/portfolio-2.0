import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDarkmodeSwitchComponent } from './custom-darkmode-switch.component';

describe('CustomDarkmodeSwitchComponent', () => {
  let component: CustomDarkmodeSwitchComponent;
  let fixture: ComponentFixture<CustomDarkmodeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDarkmodeSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDarkmodeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

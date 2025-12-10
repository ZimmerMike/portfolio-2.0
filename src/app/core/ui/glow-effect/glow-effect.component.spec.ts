import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowEffectComponent } from './glow-effect.component';

describe('GlowEffectComponent', () => {
  let component: GlowEffectComponent;
  let fixture: ComponentFixture<GlowEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowEffectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlowEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-glow-effect',
  standalone: true,
  imports: [],
  templateUrl: './glow-effect.component.html',
  styleUrl: './glow-effect.component.scss',
  host: {
    'class': 'glow-overlay'
  }
})
export class GlowEffectComponent {

  constructor(private host: ElementRef<HTMLElement>) {}

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const el = this.host.nativeElement;

    el.style.setProperty('--glow-x', `${event.clientX}px`);
    el.style.setProperty('--glow-y', `${event.clientY}px`);
    el.style.setProperty('--glow-opacity', '1');
  }
}

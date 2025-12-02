import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomInfoCardComponent } from '../../../core/components/custom-info-card/custom-info-card.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CustomInfoCardComponent,
    TranslateModule
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}

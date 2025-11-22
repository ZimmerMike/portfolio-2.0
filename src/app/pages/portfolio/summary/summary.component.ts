import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    PanelModule,
    TranslateModule
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}

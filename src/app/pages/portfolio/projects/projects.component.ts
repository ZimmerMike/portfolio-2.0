import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    PanelModule,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects: any[];
}

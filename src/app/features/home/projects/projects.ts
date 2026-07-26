import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header';
import { PROJECTS } from '../../../core/data/profile-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}

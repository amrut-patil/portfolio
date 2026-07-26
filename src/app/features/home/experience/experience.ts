import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header';
import { COMPANIES, EDUCATION } from '../../../core/data/profile-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  readonly companies = COMPANIES;
  readonly education = EDUCATION;
}

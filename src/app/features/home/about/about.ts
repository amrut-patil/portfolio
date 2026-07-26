import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header';
import { PROFILE } from '../../../core/data/profile-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  readonly profile = PROFILE;
}

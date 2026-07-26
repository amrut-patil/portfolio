import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header';
import { SKILL_GROUPS } from '../../../core/data/profile-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  readonly groups = SKILL_GROUPS;
}

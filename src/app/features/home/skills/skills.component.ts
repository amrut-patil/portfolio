import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../../core/data/profile-data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <app-section-header index="02" title="Skills" meta="LEGEND" />

        <div class="skills__grid">
          @for (group of groups; track group.category) {
            <div class="skills__group">
              <h3 class="skills__group-title mono">{{ group.category.toUpperCase() }}</h3>
              <div class="skills__tags">
                @for (skill of group.skills; track skill) {
                  <span class="skills__tag">{{ skill }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 64px 0;
      scroll-margin-top: 88px;
    }

    .skills__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 36px 48px;
    }

    .skills__group-title {
      font-size: 11px;
      letter-spacing: 0.1em;
      color: var(--text-tertiary);
      margin-bottom: 16px;
    }

    .skills__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .skills__tag {
      font-size: 13px;
      padding: 7px 13px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      color: var(--text-primary);
      background: var(--surface);
      transition: border-color 0.15s ease, color 0.15s ease;
    }

    .skills__tag:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    @media (max-width: 900px) {
      .skills__grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px 40px;
      }
    }

    @media (max-width: 640px) {
      .skills__grid {
        grid-template-columns: 1fr;
        gap: 28px;
      }
    }
  `]
})
export class SkillsComponent {
  protected readonly groups = SKILL_GROUPS;
}

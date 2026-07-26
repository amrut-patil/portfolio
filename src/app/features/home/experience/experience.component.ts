import { Component } from '@angular/core';
import { COMPANIES } from '../../../core/data/profile-data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <app-section-header index="03" title="Experience" meta="2004 — PRESENT" />

        <div class="timeline">
          @for (company of companies; track company.name) {
            <article class="timeline__item">
              <div class="timeline__marker">
                <span class="timeline__node" [class.timeline__node--current]="company.current"></span>
                <span class="timeline__line"></span>
              </div>

              <div class="timeline__content">
                <header class="timeline__header">
                  <div>
                    <h3 class="timeline__company">
                      {{ company.name }}
                      @if (company.current) {
                        <span class="timeline__badge mono">MOST RECENT</span>
                      }
                    </h3>
                    <p class="timeline__location mono">{{ company.location }} · {{ company.totalDuration }}</p>
                  </div>
                </header>

                <ul class="timeline__roles">
                  @for (role of company.roles; track role.role) {
                    <li class="timeline__role">
                      <span class="timeline__role-name">{{ role.role }}</span>
                      <span class="timeline__role-dates mono">{{ role.dateRange }}</span>
                    </li>
                  }
                </ul>

                <ul class="timeline__bullets">
                  @for (bullet of company.bullets; track bullet) {
                    <li>{{ bullet }}</li>
                  }
                </ul>
              </div>
            </article>
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

    .timeline {
      display: flex;
      flex-direction: column;
    }

    .timeline__item {
      display: grid;
      grid-template-columns: 24px 1fr;
      gap: 24px;
    }

    .timeline__marker {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .timeline__node {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      border: 2px solid var(--border-strong);
      background: var(--bg);
      flex-shrink: 0;
      margin-top: 6px;
    }

    .timeline__node--current {
      border-color: var(--accent);
      background: var(--accent);
      box-shadow: 0 0 0 4px var(--accent-soft);
    }

    .timeline__line {
      width: 1px;
      flex: 1;
      background: var(--border);
      margin-top: 6px;
    }

    .timeline__item:last-child .timeline__line {
      display: none;
    }

    .timeline__content {
      padding-bottom: 44px;
    }

    .timeline__company {
      font-size: 19px;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .timeline__badge {
      font-size: 10px;
      color: var(--accent);
      border: 1px solid var(--accent);
      border-radius: 999px;
      padding: 2px 8px;
      letter-spacing: 0.06em;
    }

    .timeline__location {
      margin-top: 6px;
      font-size: 12px;
      color: var(--text-tertiary);
      letter-spacing: 0.03em;
    }

    .timeline__roles {
      margin-top: 18px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .timeline__role {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      font-size: 14px;
      padding: 8px 12px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
    }

    .timeline__role-name {
      color: var(--text-primary);
      font-weight: 500;
    }

    .timeline__role-dates {
      font-size: 11.5px;
      color: var(--text-tertiary);
      white-space: nowrap;
    }

    .timeline__bullets {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .timeline__bullets li {
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-secondary);
      padding-left: 16px;
      position: relative;
    }

    .timeline__bullets li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 6px;
      height: 1px;
      background: var(--accent);
    }

    @media (max-width: 640px) {
      .timeline__item {
        grid-template-columns: 16px 1fr;
        gap: 14px;
      }

      .timeline__role {
        flex-direction: column;
        gap: 4px;
      }
    }
  `]
})
export class ExperienceComponent {
  protected readonly companies = COMPANIES;
}

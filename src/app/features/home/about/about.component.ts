import { Component } from '@angular/core';
import { PROFILE, EDUCATION } from '../../../core/data/profile-data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent],
  template: `
    <section id="about" class="section">
      <div class="container">
        <app-section-header index="01" title="About" meta="SCALE: FULL-STACK" />

        <div class="about__grid">
          <div class="about__summary">
            @for (para of profile.summary; track para) {
              <p>{{ para }}</p>
            }
          </div>

          <div class="about__education">
            <h3 class="about__education-title mono">EDUCATION</h3>
            <ul class="about__education-list">
              @for (edu of education; track edu.school) {
                <li class="about__education-item">
                  <p class="about__education-degree">{{ edu.degree }}</p>
                  <p class="about__education-school">{{ edu.school }}</p>
                  <p class="about__education-years mono">{{ edu.years }}</p>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 64px 0;
      scroll-margin-top: 88px;
    }

    .about__grid {
      display: grid;
      grid-template-columns: 1.6fr 1fr;
      gap: 56px;
    }

    .about__summary p {
      font-size: 16px;
      line-height: 1.75;
      margin-bottom: 18px;
    }

    .about__summary p:last-child {
      margin-bottom: 0;
    }

    .about__education-title {
      font-size: 11px;
      letter-spacing: 0.1em;
      color: var(--text-tertiary);
      margin-bottom: 20px;
    }

    .about__education-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .about__education-item {
      padding-left: 16px;
      border-left: 2px solid var(--border);
    }

    .about__education-degree {
      color: var(--text-primary);
      font-weight: 500;
      font-size: 14.5px;
      margin-bottom: 4px;
    }

    .about__education-school {
      font-size: 13.5px;
      margin-bottom: 6px;
    }

    .about__education-years {
      font-size: 11px;
      color: var(--accent);
      letter-spacing: 0.04em;
    }

    @media (max-width: 860px) {
      .about__grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
  `]
})
export class AboutComponent {
  protected readonly profile = PROFILE;
  protected readonly education = EDUCATION;
}

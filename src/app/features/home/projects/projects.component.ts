import { Component } from '@angular/core';
import { PROJECTS } from '../../../core/data/profile-data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <app-section-header index="04" title="Key Products" meta="{{ projects.length }} ENTRIES" />

        <div class="projects__grid">
          @for (project of projects; track project.name; let i = $index) {
            <article class="project-card">
              <div class="project-card__header">
                <span class="project-card__index mono">{{ pad(i + 1) }}</span>
                <h3 class="project-card__name">{{ project.name }}</h3>
              </div>
              <p class="project-card__description">{{ project.description }}</p>
              <div class="project-card__tags">
                @for (tag of project.tags; track tag) {
                  <span class="project-card__tag mono">{{ tag }}</span>
                }
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

    .projects__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .project-card {
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: 22px;
      background: var(--surface);
      transition: border-color 0.2s ease, transform 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .project-card:hover {
      border-color: var(--border-strong);
      transform: translateY(-2px);
    }

    .project-card__header {
      display: flex;
      align-items: baseline;
      gap: 10px;
      margin-bottom: 12px;
    }

    .project-card__index {
      font-size: 11px;
      color: var(--accent);
    }

    .project-card__name {
      font-size: 17px;
      color: var(--text-primary);
    }

    .project-card__description {
      font-size: 13.5px;
      line-height: 1.65;
      flex: 1;
    }

    .project-card__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 18px;
    }

    .project-card__tag {
      font-size: 10.5px;
      color: var(--text-tertiary);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 3px 8px;
      letter-spacing: 0.03em;
    }

    @media (max-width: 980px) {
      .projects__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .projects__grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;

  protected pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}

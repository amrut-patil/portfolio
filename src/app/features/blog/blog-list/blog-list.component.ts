import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../../core/services/blog.service';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink, SectionHeaderComponent],
  template: `
    <section class="section container">
      <app-section-header index="04" title="Blog" subtitle="Notes on Angular architecture and enterprise software" meta="LOG" />

      @if (posts$ | async; as posts) {
        @if (posts.length) {
          <div class="blog-grid">
            @for (post of posts; track post.slug) {
              <a class="post-card" [routerLink]="['/blog', post.slug]">
                <p class="post-card__meta mono">
                  {{ post.publishedAt | date: 'MMM d, y' }} · {{ post.readingTimeMinutes }} MIN READ
                </p>
                <h2 class="post-card__title">{{ post.title }}</h2>
                <p class="post-card__excerpt">{{ post.excerpt }}</p>
                <div class="post-card__tags">
                  @for (tag of post.tags; track tag) {
                    <span class="post-card__tag mono">{{ tag }}</span>
                  }
                </div>
              </a>
            }
          </div>
        } @else {
          <p class="empty">No posts yet — check back soon.</p>
        }
      }
    </section>
  `,
  styles: [`
    .section {
      padding: 56px 24px 96px;
      scroll-margin-top: 88px;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .post-card {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      background: var(--surface);
      padding: 26px;
      transition: border-color 0.2s ease, transform 0.2s ease;
    }

    .post-card:hover {
      border-color: var(--accent);
      transform: translateY(-2px);
    }

    .post-card__meta {
      font-size: 11px;
      color: var(--text-tertiary);
      letter-spacing: 0.05em;
    }

    .post-card__title {
      font-size: 20px;
      color: var(--text-primary);
    }

    .post-card__excerpt {
      font-size: 14px;
      line-height: 1.65;
    }

    .post-card__tags {
      display: flex;
      gap: 6px;
      margin-top: 8px;
      flex-wrap: wrap;
    }

    .post-card__tag {
      font-size: 10.5px;
      color: var(--accent);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 3px 8px;
    }

    .empty {
      color: var(--text-tertiary);
      font-size: 14px;
    }

    @media (max-width: 700px) {
      .blog-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BlogListComponent {
  private readonly blogService = inject(BlogService);
  protected readonly posts$ = this.blogService.getPosts();
}

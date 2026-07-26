import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { BlogService } from '../../../core/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink],
  template: `
    <article class="section container">
      <a routerLink="/blog" class="back mono">← BACK TO BLOG</a>

      @if (post$ | async; as post) {
        @if (post) {
          <header class="post-header">
            <p class="post-header__meta mono">
              {{ post.publishedAt | date: 'MMMM d, y' }} · {{ post.readingTimeMinutes }} MIN READ
            </p>
            <h1 class="post-header__title">{{ post.title }}</h1>
            <div class="post-header__tags">
              @for (tag of post.tags; track tag) {
                <span class="post-header__tag mono">{{ tag }}</span>
              }
            </div>
          </header>

          <div class="post-body">
            @for (paragraph of splitParagraphs(post.content); track $index) {
              <p>{{ paragraph }}</p>
            }
          </div>
        } @else {
          <p class="empty">Post not found.</p>
        }
      }
    </article>
  `,
  styles: [`
    .section {
      padding: 56px 24px 96px;
      max-width: 760px;
      scroll-margin-top: 88px;
    }

    .back {
      font-size: 12px;
      color: var(--text-tertiary);
      display: inline-block;
      margin-bottom: 32px;
      transition: color 0.15s ease;
    }

    .back:hover {
      color: var(--accent);
    }

    .post-header__meta {
      font-size: 11px;
      color: var(--text-tertiary);
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }

    .post-header__title {
      font-size: clamp(28px, 4vw, 38px);
      color: var(--text-primary);
      line-height: 1.15;
      margin-bottom: 20px;
    }

    .post-header__tags {
      display: flex;
      gap: 6px;
      margin-bottom: 40px;
    }

    .post-header__tag {
      font-size: 10.5px;
      color: var(--accent);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 3px 8px;
    }

    .post-body {
      display: flex;
      flex-direction: column;
      gap: 18px;
      border-top: 1px solid var(--border);
      padding-top: 32px;
    }

    .post-body p {
      font-size: 16px;
      line-height: 1.8;
    }

    .empty {
      color: var(--text-tertiary);
      font-size: 14px;
    }
  `]
})
export class BlogDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);

  protected readonly post$ = this.route.paramMap.pipe(
    switchMap((params) => this.blogService.getPostBySlug(params.get('slug') ?? ''))
  );

  protected splitParagraphs(content: string): string[] {
    return content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  }
}

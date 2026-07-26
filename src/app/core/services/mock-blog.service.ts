import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogService } from './blog.service';
import { BlogPost } from '../models/blog-post.model';
import { MOCK_BLOG_POSTS } from '../data/mock-blog-data';

/**
 * Temporary `BlogService` implementation backed by static in-memory data.
 * Swap the provider in `app.config.ts` for a real CMS-backed implementation
 * once one is available — no consuming component needs to change.
 */
@Injectable()
export class MockBlogService extends BlogService {
  private readonly posts: BlogPost[] = [...MOCK_BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  getPosts(): Observable<BlogPost[]> {
    return of(this.posts);
  }

  getPostBySlug(slug: string): Observable<BlogPost | undefined> {
    return of(this.posts.find((p) => p.slug === slug));
  }

  getTags(): Observable<string[]> {
    const tagSet = new Set<string>();
    this.posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return of(Array.from(tagSet).sort());
  }
}

import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

/**
 * Abstract contract for retrieving blog content.
 *
 * This is intentionally implementation-agnostic: today it's backed by
 * `MockBlogService` (static in-memory data), but the same contract can be
 * satisfied later by a real headless CMS / API-backed service (e.g. a
 * `CmsBlogService` calling Contentful, Strapi, a custom GraphQL API, etc.)
 * without any changes to the components that consume it.
 *
 * To swap implementations later:
 *   1. Create e.g. `CmsBlogService implements BlogService` in this folder.
 *   2. In `app.config.ts`, change the provider:
 *        { provide: BlogService, useClass: CmsBlogService }
 */
export abstract class BlogService {
  /** Returns all published posts, most recent first. */
  abstract getPosts(): Observable<BlogPost[]>;

  /** Returns a single post by its slug, or undefined if not found. */
  abstract getPostBySlug(slug: string): Observable<BlogPost | undefined>;

  /** Returns all distinct tags currently in use across posts. */
  abstract getTags(): Observable<string[]>;
}
